import { SVGProps } from 'react';

const SvgBellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#bell-icon_svg__a)" fill="#857AAC">
      <path d="m21.9 18.753-.227-.2A9.578 9.578 0 0 1 20 16.6a8.42 8.42 0 0 1-.9-3.207V10.1a7.207 7.207 0 0 0-6.293-7.167v-.86a.89.89 0 0 0-1.78 0v.874a7.207 7.207 0 0 0-6.22 7.153v3.293a8.42 8.42 0 0 1-.9 3.207 9.598 9.598 0 0 1-1.647 1.953l-.227.2v1.88H21.9v-1.88ZM10.213 21.333a1.766 1.766 0 0 0 3.5 0h-3.5Z" />
    </g>
    <defs>
      <clipPath id="bell-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellIcon;
