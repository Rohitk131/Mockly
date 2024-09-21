export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    src?: string;
  }
  

export  function IpadPro({
    width = 1024,
    height = 1366,
    src,
    ...props
  }: Iphone15ProProps) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M20 100C20 55 55 20 100 20H924C969 20 1004 55 1004 100V1266C1004 1311 969 1346 924 1346H100C55 1346 20 1311 20 1266V100Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        {src && (
          <image
            href={src}
            x="20"
            y="20"
            width="984"
            height="1326"
            preserveAspectRatio="xMidYMid slice"
          />
        )}
      </svg>
    );
  }

  export  function IphoneSE2023({
    width = 375,
    height = 667,
    src,
    ...props
  }: Iphone15ProProps) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2 73C2 32.6832 34.6832 0 75 0H300C340.317 0 373 32.6832 373 73V594C373 634.317 340.317 667 300 667H75C34.6832 667 2 634.317 2 594V73Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M6 74C6 35.3401 37.3401 4 76 4H294C332.66 4 364 35.3401 364 74V593C364 631.66 332.66 663 294 663H76C37.3401 663 6 631.66 6 593V74Z"
          className="dark:fill-[#262626] fill-white"
        />
        {src && (
          <image
            href={src}
            x="21.25"
            y="19.25"
            width="332.5"
            height="624.5"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#roundedCorners)"
          />
        )}
        <defs>
          <clipPath id="roundedCorners">
            <rect
              x="21.25"
              y="19.25"
              width="332.5"
              height="624.5"
              rx="50"
              ry="50"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  
  import { SVGProps } from "react";

export interface Iphone14ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export  function Iphone14Pro({
  width = 430,
  height = 880,
  src,
  ...props
}: Iphone14ProProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H355C395.317 0 428 32.6832 428 73V807C428 847.317 395.317 880 355 880H75C34.6832 880 2 847.317 2 807V73Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M6 74C6 35.3401 37.3401 4 76 4H354C392.66 4 424 35.3401 424 74V806C424 844.66 392.66 876 354 876H76C37.3401 876 6 844.66 6 806V74Z"
        className="dark:fill-[#262626] fill-white"
      />
      {src && (
        <image
          href={src}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}
      <defs>
        <clipPath id="roundedCorners">
          <rect
            x="21.25"
            y="19.25"
            width="389.5"
            height="843.5"
            rx="55.75"
            ry="55.75"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
