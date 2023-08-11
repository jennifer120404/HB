import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill={props.fill}
      fillRule="evenodd"
      d="M7.771 1.403a3.063 3.063 0 0 1 3.458 0l5.688 3.892a3.062 3.062 0 0 1 1.333 2.527v7.365a3.063 3.063 0 0 1-3.063 3.063H3.813A3.063 3.063 0 0 1 .75 15.187V7.822a3.062 3.062 0 0 1 1.333-2.527l5.688-3.892Zm-.458 12.91a.438.438 0 0 0 0 .874h4.375a.438.438 0 0 0 0-.874H7.311Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeIcon;
