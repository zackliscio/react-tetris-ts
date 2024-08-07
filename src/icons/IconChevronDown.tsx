import { SVGProps } from "react";

export function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 7l4 4l4-4m-8 6l4 4l4-4"
      />
    </svg>
  );
}
