import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
      <g data-name="Group 101" transform="translate(-375 -21)">
        <rect data-name="Rectangle 16" width={30} height={8} rx={5} transform="translate(370 50)" fill="#f40051" />
        <rect data-name="Rectangle 11" width={30} height={8} rx={5} transform="translate(380 21)" fill="#ffa500" />
        <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#000000" />

      </g>
    </svg>
  );
}

export default SvgComponent;
