import { SVGProps } from 'react';

const SvgMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle r={3} transform="matrix(-1 0 0 1 3 3)" fill="#857AAC" />
    <circle r={3} transform="matrix(-1 0 0 1 15 3)" fill="#D9D9D9" />
    <circle r={3} transform="matrix(-1 0 0 1 3 15)" fill="#D9D9D9" />
    <circle r={3} transform="matrix(-1 0 0 1 15 15)" fill="#857AAC" />
  </svg>
);
export default SvgMenuIcon;
