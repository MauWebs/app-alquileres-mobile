import Svg, { SvgProps, Path } from "react-native-svg";
import * as React from "react";

const IconSvgProfitUp = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 25" {...props}>
    <Path
      stroke="#475467"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 7-5.846 5.938c-.105.106-.158.16-.205.202-.76.68-1.907.68-2.667 0a4.814 4.814 0 0 1-.205-.203c-.105-.106-.158-.16-.205-.202a2 2 0 0 0-2.667 0c-.047.042-.1.096-.204.202L4 17M20 7v6m0-6h-6"
    />
  </Svg>
);

export default IconSvgProfitUp;
