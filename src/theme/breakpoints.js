import { css } from "styled-components";

const cssBreakpoints = (
  prop = "padding",
  values = [],
  mediaType = "max-width"
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    mediaQueries += `
    @media screen and (${mediaType}: ${screenBreakpoint}px) {
      ${prop}: ${cssPropBreakpoint};
    }
    `;
    return mediaQueries;
  }, "");
  return css([breakpointProps]);
};

export default cssBreakpoints;
