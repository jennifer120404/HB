import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const AnalyticIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <G fill={props.fill} clipPath="url(#a)">
      <Path d="M.472 10.389h1.89c.26 0 .471.211.471.472v4.722c0 .261-.211.473-.472.473H.472A.472.472 0 0 1 0 15.583v-4.722c0-.26.211-.472.472-.472ZM5.194 6.61h1.89c.26 0 .472.212.472.472v8.5c0 .261-.212.473-.473.473H5.194a.472.472 0 0 1-.472-.473v-8.5c0-.26.212-.472.472-.472ZM9.917 8.5h1.889c.26 0 .472.211.472.472v6.611c0 .261-.212.473-.472.473h-1.89a.472.472 0 0 1-.472-.473v-6.61c0-.261.212-.473.473-.473Zm4.722-2.833h1.889c.26 0 .472.211.472.472v9.444c0 .261-.212.473-.472.473h-1.89a.472.472 0 0 1-.471-.473V6.14c0-.26.211-.472.472-.472Z" />
      <Path d="M15.583 0c-.782 0-1.415.635-1.416 1.417a1.4 1.4 0 0 0 .08.452l-2.363 1.405a1.404 1.404 0 0 0-2.262.303L7.537 2.544c.01-.06.016-.122.019-.183a1.417 1.417 0 1 0-2.726.54L2.126 4.92a1.4 1.4 0 0 0-.71-.198A1.417 1.417 0 1 0 2.834 6.14a1.406 1.406 0 0 0-.095-.498L5.47 3.602c.534.298 1.2.21 1.64-.215l2.371 1.174a1.415 1.415 0 0 0 2.797-.311c0-.036-.008-.07-.01-.105l2.57-1.529c.223.141.482.216.745.217a1.417 1.417 0 0 0 0-2.833Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h17v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AnalyticIcon;
