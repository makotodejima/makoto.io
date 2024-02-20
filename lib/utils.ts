import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import fs from "fs";
import https from "https";
import path from "path";
import { Entry } from "./types";

export function getEntries(): Entry[] {
  const f = fs.readFileSync(
    path.join(process.cwd(), "data/entries.json"),
    "utf-8",
  );
  return Object.values(JSON.parse(f));
}

export const downloadImage = (
  url: string,
  imagePath: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(imagePath);
          response.pipe(fileStream);

          fileStream.on("finish", () => {
            fileStream.close();
            resolve(imagePath);
          });
        } else {
          reject(
            new Error(
              `Failed to download the image at ${url}.\nStatus code: ${response.statusCode}`,
            ),
          );
        }
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};

// 1. Download images from Notion (hosted on their S3 instance `*amazonaws.com*`) and save them to public folder
// 1.2. If the image already exists, skip the download
// 2. Override the image URL in the image block
export async function overrideImages(
  blocks: BlockObjectResponse[],
  slug: string,
) {
  const imgDir = path.join(process.cwd(), "public", "images");

  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
  }

  let idx = 0;
  for (let block of blocks) {
    if (block.type === "image") {
      if (block.image.type === "external") {
        throw new Error("Unexpected external image type");
      }

      const file_name = `${slug}-${idx++}.jpg`;

      if (fs.existsSync(path.join(imgDir, file_name))) {
        console.info("Image exists, skipping: ", file_name);
        block.image.file.url = "/images/" + file_name;
        continue;
      }
      console.log("downloading...");
      await downloadImage(block.image.file.url, path.join(imgDir, file_name));
      // override the image URL in image block
      block.image.file.url = "/images/" + file_name;

      console.log("download successful", block.image.file.url);
      console.log("---------------");
    }
  }
}
