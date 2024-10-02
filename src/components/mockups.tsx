import React from 'react';

interface DeviceSrc {
  src: string; 
}

export function Pixel2({ src }: DeviceSrc) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[420px] h-[858px] relative">
        {/* Side bars */}
        <div className="absolute w-[3px] h-[117px] right-0 top-[335px] bg-[#121515]"></div>
        <div className="absolute w-[3px] h-[54px] right-0 top-[227px] bg-[#FB7E5C]"></div>

        {/* Main Pixel2 body with shadows */}
        <div className="absolute w-[417px] h-[858px] left-0 top-0 bg-[#3A4245] shadow-[0_0_2px_rgba(0,21,64,0.14)] rounded-3xl"></div>
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
            src={src}
            alt="Placeholder"
          ></img>
        </div>
      </div>
    </div>
  );
}
export function IPhoneSE({ src }: DeviceSrc){
 return(
  <div className="flex justify-center items-center w-full h-full">
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
      <img src="https://i.ibb.co/b56qFDP/Screenshot-2024-09-23-000628.png" alt="Home button" />
      </div>
      
      {/* Screen bezel */}
      <div className="w-[381px] h-[673px] left-[23px] top-[92px] absolute bg-[#262C2D] rounded-[3px]"></div>
      
      {/* Screen */}
      <div className="w-[375px] h-[667px] left-[26px] top-[95px] absolute">
        <div className="w-full h-full bg-white"></div>
        <img src={src} alt="Screen content" className="w-full h-full absolute top-0 left-0" />
      </div>
    </div>
  </div>
 )
}