import React, { useEffect, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz"; //You can customize what letters it will cycle through
const speed = 20; // ms per frame
const increment = 4; // frames per step. Must be >2

let si = 0;
let str = 0;
let block = "";
let fixed = "";

const RandomLetter = ({ children }: { children: string }) => {
  const string = children;
  const stringLength = string.length;
  const [name, setName] = useState<string>("");

  const rustle = (i: number) => {
    setTimeout(function () {
      if (--i) {
        rustle(i);
      }
      nextFrame();
      si = si + 1;
    }, speed);
  };

  const nextFrame = () => {
    for (let i = 0; i < stringLength - str; i++) {
      const num = Math.floor(letters.length * Math.random());
      const letter = letters.charAt(num);
      block = block + letter;
    }
    if (si == increment - 1) {
      str++;
    }
    if (si == increment) {
      fixed = fixed + string.charAt(str - 1);
      si = 0;
    }
    setName(fixed + block);
    block = "";
  };

  useEffect(() => {
    rustle(stringLength * increment + 1);
  }, []);
  return <>{name}</>;
};

export default RandomLetter;
