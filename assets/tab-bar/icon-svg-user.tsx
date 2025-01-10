import Svg, { SvgProps, Path } from "react-native-svg";
import * as React from "react";

const IconSvgUser = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 25" {...props}>
    <Path
      stroke="#475467"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 21c0-2.761-3.582-5-8-5s-8 2.239-8 5m8-8a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
    />
  </Svg>
);

export default IconSvgUser;
