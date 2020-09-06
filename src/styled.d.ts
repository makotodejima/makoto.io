// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    isDarkMode: boolean;
    bg: string;
    primary: string;
    secondary: string;
    link: string;
    boxShadow: string;
    boxShadowHover: string;
    workImgBoxShadow: string;
    modalColor: string;
    borderRadius: string;
  }
}
