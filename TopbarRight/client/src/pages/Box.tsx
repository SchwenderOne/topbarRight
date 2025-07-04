import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Box = (): JSX.Element => {
  // Define collaborators data for mapping
  const collaborators = [
    { id: 1, image: "/figmaAssets/image-1.png", alt: "Collaborator 1" },
    { id: 2, image: "/figmaAssets/image-1-1.png", alt: "Collaborator 2" },
  ];

  // Define action buttons data for mapping
  const actionButtons = [
    { id: 1, icon: "/figmaAssets/group-3.png", rotate: true },
    { id: 2, icon: "/figmaAssets/group-2.png", rotate: false },
    { id: 3, icon: "/figmaAssets/group-1.png", rotate: false },
  ];

  return (
    <div className="w-full min-h-screen bg-white rounded-tl-[13px]">
      <header className="w-full h-[132px]">
        <nav className="fixed w-full h-[91px] top-0 left-0 z-50">
          <div className="relative w-full h-[91px] bg-[url(/figmaAssets/background-.svg)] bg-[100%_100%]">
            {/* Share Button */}
            <button className="absolute w-[85px] h-[50px] top-[22px] right-[9px] rounded-[25px] shadow-[0px_0px_30.49px_1.2px_#00000040] backdrop-blur-[3px] border-none outline-none" 
                    style={{
                      background: 'radial-gradient(ellipse 39.049px 29.0831px at center, #38669B 0%, #305C87 100%)',
                      filter: 'drop-shadow(0px 0px 30.49px rgba(0, 0, 0, 0.25))'
                    }}>
              <span className="font-normal text-white text-[19.7px] text-center tracking-[-0.20px] leading-[20.9px]">
                Share
              </span>
            </button>

            {/* Results Button */}
            <button className="absolute w-[104.92px] h-[38.18px] top-7 right-[98px] rounded-[19.09px] border-none outline-none flex items-center justify-start px-[13px] gap-2"
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      border: '1.03px solid rgba(130, 130, 130, 0.15)',
                      filter: 'drop-shadow(0px 0px 25.1px rgba(0, 0, 0, 0.05))',
                      backdropFilter: 'blur(12.55px)'
                    }}>
              <div className="w-[18.048px] h-[17px] flex-shrink-0">
                <img 
                  src="/figmaAssets/group.png" 
                  alt="Chart icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[#343434] text-[16.223px] font-medium tracking-[-0.162px] leading-[106%] flex-shrink-0" 
                    style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}>
                Results
              </span>
            </button>

            {/* Action Buttons */}
            {actionButtons.map((button, index) => (
              <button
                key={`action-button-${button.id}`}
                className="absolute w-[34.513px] h-[34.421px] top-[30px] border-none outline-none rounded-[17.21px] flex items-center justify-center"
                style={{ 
                  right: `${220 + index * 44}px`,
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '1.03px solid rgba(130, 130, 130, 0.15)',
                  filter: 'drop-shadow(0px 0px 25.1px rgba(0, 0, 0, 0.05))',
                  backdropFilter: 'blur(12.55px)'
                }}
              >
                <img
                  className="w-[19px] h-[18px] object-contain"
                  alt="Action icon"
                  src={button.icon}
                />
              </button>
            ))}

            {/* Collaborators Section */}
            <div className="flex items-start absolute top-[30px] right-[350px]">
              {collaborators.map((collaborator, index) => (
                <Avatar
                  key={`collaborator-${collaborator.id}`}
                  className={`w-[34.42px] h-[34.42px] ${index > 0 ? "ml-[-11.37px]" : ""} bg-black rounded-[11472.54px] border-[0.57px] border-solid border-[#333333]`}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={collaborator.alt}
                    src={collaborator.image}
                  />
                </Avatar>
              ))}
              <Badge className="flex w-[34.42px] h-[34.42px] ml-[-11.37px] bg-[#ffffff40] rounded-[24.62px] overflow-hidden border-[1.03px] border-solid border-[#81818126] shadow-[0px_0px_25.1px_0.99px_#0000000d] backdrop-blur-[4.1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.1px)_brightness(100%)] items-center justify-center">
                <span className="[font-family:'Aeonik_Pro-Bold',Helvetica] font-bold text-[#343434] text-[11.5px]">
                  +2
                </span>
              </Badge>
            </div>

            {/* Info Button */}
            <button className="absolute w-[34.091px] h-[34px] top-8 left-[880px] border-none outline-none rounded-[17.05px] flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      border: '1.03px solid rgba(130, 130, 130, 0.15)',
                      filter: 'drop-shadow(0px 0px 25.1px rgba(0, 0, 0, 0.05))',
                      backdropFilter: 'blur(12.55px)'
                    }}>
              <img 
                src="/figmaAssets/group-4.png" 
                alt="Info icon"
                className="w-2.5 h-[18px] object-contain"
              />
            </button>

            {/* Search Bar */}
            <div className="absolute w-[191.512px] h-[41.738px] top-[27px] left-[677px]">
              <div className="relative w-[191.512px] h-[41.738px] rounded-[20.87px] border-none outline-none flex items-center pl-[12px] pr-3"
                   style={{
                     background: 'rgba(255, 255, 255, 0.25)',
                     border: '1.03px solid rgba(130, 130, 130, 0.15)',
                     filter: 'drop-shadow(0px 0px 25.1px rgba(0, 0, 0, 0.05))',
                     backdropFilter: 'blur(12.55px)'
                   }}>
                <div className="w-[15.898px] h-[15.771px] flex-shrink-0 mr-3">
                  <SearchIcon className="w-[15.898px] h-[15.771px] text-[#343434]" />
                </div>
                <input
                  type="text"
                  className="flex-1 bg-transparent border-none outline-none text-[#343434] text-[18.531px] font-medium tracking-[-0.185px] leading-[106%] placeholder:text-[#343434]"
                  style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}
                  placeholder="Search or ask AI"
                />
              </div>
            </div>

            {/* Undo/Redo Buttons */}
            <img
              className="absolute w-[57px] h-[19px] top-10 left-[467px]"
              alt="Undo redo"
              src="/figmaAssets/undo-redo.png"
            />

            {/* Document Title */}
            <div className="absolute w-[323px] h-[25px] top-9 left-[116px]">
              <img
                className="absolute w-[3px] h-6 top-px right-0"
                alt="Segregation line"
                src="/figmaAssets/segregation-line-.svg"
              />
              <h1 className="absolute w-[323px] top-0 left-0 bg-blend-exclusion [font-family:'Aeonik_Pro-Medium',Helvetica] font-medium text-[#4c4c4c] text-[21.3px] tracking-[-0.21px] leading-[22.6px] truncate">
                Post-brainstorm survey and m...
              </h1>
            </div>

            {/* Document Icon */}
            <div className="absolute w-[25px] h-5 top-9 left-[69px] bg-[url(/figmaAssets/group-6.png)] bg-[100%_100%]" />

            {/* Logo */}
            <img
              className="absolute w-[23px] h-[34px] top-[30px] left-[23px]"
              alt="Portico logo"
              src="/figmaAssets/portico-logo-.png"
            />
          </div>
        </nav>
        
        {/* Lower Top Bar */}
        <div className="absolute w-full h-[41px] top-[91px] left-0 bg-transparent">
          {/* Toolbox Left */}
          <div className="absolute left-[23px] top-[9px] w-[106.144px] h-[22.454px]">
            <div className="flex items-center gap-2">
              {/* Info icon */}
              <div className="w-[21px] h-[21px] rounded-full bg-transparent border border-[#343434] flex items-center justify-center">
                <span className="text-[#343434] text-[12px] font-bold">i</span>
              </div>
              {/* Brackets */}
              <div className="flex items-center text-[#343434] text-[15px]">
                <span>{`{`}</span>
                <span className="mx-1">f(x)</span>
                <span>{`}`}</span>
              </div>
              {/* Settings gear */}
              <div className="w-[12px] h-[19px] relative">
                <div className="absolute inset-0 transform rotate-30">
                  <div className="w-full h-full border border-[#343434] rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Folder Navigation */}
          <div className="absolute left-[160px] top-[10px] w-[288px] h-[20px] flex items-center">
            {/* Breadcrumb path */}
            <span className="text-[#4d4d4d] text-[14px] font-medium" style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}>
              Start
            </span>
            <svg className="mx-2" width="8" height="10" viewBox="0 0 8 10" fill="none">
              <path d="M1 1L4.5 5L1 9" stroke="#4d4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#4d4d4d] text-[14px] font-medium blur-sm" style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}>
              Department ...
            </span>
          </div>

          {/* Vertical Separator */}
          <div className="absolute right-[550px] top-[10px] w-[1px] h-[21px] bg-[#929292] opacity-63"></div>

          {/* Menu Items Container */}
          <div className="absolute right-[23px] top-[10px] flex items-center">
            {/* Menu Items Background */}
            <div className="relative h-[41px] px-6 rounded-[20.5px] flex items-center gap-6"
                 style={{
                   background: 'rgba(255, 255, 255, 0.25)',
                   border: '1.026px solid rgba(130, 130, 130, 0.15)',
                   backdropFilter: 'blur(12.55px)'
                 }}>
              
              {/* Menu Items */}
              <span className="text-[#343434] text-[18.545px] font-medium tracking-[-0.185px] leading-[106%]"
                    style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}>
                Import
              </span>
              <span className="text-[#343434] text-[18.545px] font-medium tracking-[-0.185px] leading-[106%]"
                    style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}>
                Arrange
              </span>
              <span className="text-[#343434] text-[18.545px] font-medium tracking-[-0.185px] leading-[106%]"
                    style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}>
                Logic
              </span>
              <span className="text-[#343434] text-[18.545px] font-medium tracking-[-0.185px] leading-[106%]"
                    style={{ fontFamily: 'Aeonik Pro, system-ui, sans-serif' }}>
                Guides
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};