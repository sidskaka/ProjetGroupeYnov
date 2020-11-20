import { createGlobalStyle } from "styled-components";
import pixelscreen from "../utils/pixelscreen";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${pixelscreen(24)};

      @media (min-width: 768px) {
        font-size: ${pixelscreen(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${pixelscreen(16)};
      }
    }
`;

export default Global;