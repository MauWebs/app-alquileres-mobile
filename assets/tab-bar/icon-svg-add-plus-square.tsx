import Svg, { SvgProps, Path } from "react-native-svg";
import * as React from "react";

const IconSvgAddPlusSquare = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 25" {...props}>
    <Path
      strokeWidth={2}
      stroke="#475467"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h4m0 0h4m-4 0v4m0-4V8m-8 8.8V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 5.52 20 6.08 20 7.2v9.6c0 1.12 0 1.68-.218 2.108a2.001 2.001 0 0 1-.874.874c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8Z"
    />
  </Svg>
);

export default IconSvgAddPlusSquare;
