import { SVGProps } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export function IpadPro({
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

export function IphoneSE2023({
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

export interface Iphone14ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

export function Iphone15Pro({
  width = 433,
  height = 882,
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
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
        className="dark:fill-[#262626] fill-white"
      />
      <path
        opacity="0.5"
        d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <path
        d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
        className="fill-[#E5E5E5] dark:fill-[#404040] stroke-[#E5E5E5] dark:stroke-[#404040] stroke-[0.5]"
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
      <path
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
        className="dark:fill-[#262626] fill-[#F5F5F5]"
      />
      <path
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
        className="dark:fill-[#262626] fill-[#F5F5F5]"
      />
      <path
        d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
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

export function Iphone14Pro({
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
export function Pixel2() {
  return (
    <div className="w-full h-full relative rounded-xl">
      {/* Side bars */}
      <div className="absolute w-[3px] h-[117px] left-[417px] top-[335px] bg-[#121515]"></div>
      <div className="absolute w-[3px] h-[54px] left-[417px] top-[227px] bg-[#FB7E5C]"></div>

      {/* Main Pixel2 body with shadows */}
      <div className="absolute w-[417px] h-[858px] bg-[#3A4245] shadow-[0_0_2px_rgba(0,21,64,0.14)] rounded-3xl"></div>
      <div className="absolute w-[407px] h-[848px] left-[5px] top-[5px] bg-[#121515] rounded-3xl"></div>

      {/* Rounded elements */}
      <div className="absolute w-[157px] h-[9px] left-[130px] top-[809px]">
        <div className="w-full h-full bg-[#262C2D] rounded-full"></div>
      </div>
      <div className="absolute w-[157px] h-[9px] left-[130px] top-[40px]">
        <div className="w-full h-full bg-[#262C2D] rounded-full"></div>
      </div>

      {/* Camera elements */}
      <div className="absolute w-[16px] h-[16px] left-[67px] top-[37px] rounded-full">
        <div className="w-full h-full bg-[#262C2D] rounded-full"></div>
        <div className="absolute w-[10px] h-[10px] left-[3px] top-[3px] bg-[#121515] rounded-full"></div>
        <div className="absolute w-[2px] h-[2px] left-[7px] top-[5px] opacity-40 bg-[#c1cace]"></div>
      </div>

      {/* Screen with image */}
      <div className="absolute w-[375px] h-[667px] left-[21px] top-[95px] z-10">
        <div className="absolute w-full h-full bg-white"></div>
        <img
          className="absolute w-full h-full object-cover"
          src="https://r1.ilikewallpaper.net/iphone-14-plus-wallpapers/download-113073/google-pixel-2-xl.jpg"
          alt="Placeholder"
        ></img>
      </div>
    </div>
  );
}

export function IPhoneSE(){
 return(
  <div className="w-[427px] h-[858px] relative">
      {/* Outer frame */}
      <div className="w-[427px] h-[203px] left-0 top-[115px] absolute">
        <div className="w-[3px] h-[63px] right-0 top-[61px] absolute bg-[#121515] rounded-full "></div>
        <div className="w-[3px] h-[63px] left-0 top-[140px] absolute bg-[#121515] rounded-full"></div>
        <div className="w-[3px] h-[63px] left-0 top-[61px] absolute bg-[#121515] rounded-full"></div>
        <div className="w-[3px] h-[33px] left-0 top-0 absolute bg-[#121515] rounded-full"></div>
      </div>
      
      {/* Main body */}
      <div className="w-[421px] h-[858px] left-[3px] top-0 absolute bg-[#3A4245] shadow-[0px_0px_2px_rgba(0,21,64,0.14)] rounded-[55px]"></div>
      <div className="w-[411px] h-[848px] left-[8px] top-[5px] absolute bg-[#121515] rounded-[55px]"></div>
      
      {/* Top speaker */}
      <div className="w-[77px] h-[6px] left-[175px] top-[53px] absolute">
        <div className="w-full h-full bg-[#262C2D] rounded-full"></div>
      </div>
      
      {/* Front camera */}
      <div className="w-[16px] h-[16px] left-[133px] top-[48px] absolute rounded-full">
        <div className="w-full h-full bg-[#262C2D] rounded-full"></div>
        <div className="w-[10px] h-[10px] left-[3px] top-[3px] absolute bg-[#121515] rounded-full"></div>
        <div className="w-[2px] h-[2px] left-[7px] top-[5px] absolute opacity-40 bg-[#636F73] rounded-full"></div>
      </div>
      
      {/* Sensor */}
      <div className="w-[11px] h-[11px] left-[208px] top-[25px] absolute bg-[#262C2D] rounded-full"></div>
      
      {/* Home button */}
      <div className="w-[63px] h-[63px] left-[182px] top-[776px] absolute">
        <img src="/api/placeholder/63x63" alt="Home button" />
      </div>
      
      {/* Screen bezel */}
      <div className="w-[381px] h-[673px] left-[23px] top-[92px] absolute bg-[#262C2D] rounded-[3px]"></div>
      
      {/* Screen */}
      <div className="w-[375px] h-[667px] left-[26px] top-[95px] absolute">
        <div className="w-full h-full bg-white"></div>
        <img src="/api/placeholder/375x667" alt="Screen content" className="w-full h-full absolute top-0 left-0" />
      </div>
    </div>
 )
}
