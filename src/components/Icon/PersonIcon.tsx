import { SVGProps } from 'react';

const SvgPersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 18S0 18 0 16.5s1.5-6 9-6 9 4.5 9 6-1.5 1.5-1.5 1.5h-15ZM9 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      fill="#857AAC"
    />
  </svg>
);
export default SvgPersonIcon;
