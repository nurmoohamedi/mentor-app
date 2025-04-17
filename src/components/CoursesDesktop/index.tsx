import { JSX } from "react";
import { ActionBarSection } from "../ActionBarSection";
import { FooterSection } from "../FooterSection";
import { HeaderSection } from "../HeaderSection";
import { MainContentSection } from "../MainContentSection";
import { PaginationSection } from "../PaginationSection";

export const CoursesDesktop = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      <HeaderSection />
      <div className="container">
        <div className="relative flex-1 w-full">
          <div className="absolute inset-0 -z-10">
            {/* Pattern background images */}
            <img
              className="w-full h-auto object-cover"
              alt="Pattern background"
              src="https://c.animaapp.com/m9jqfbic8vZpku/img/pattern-background-2.png"
            />
            <img
              className="w-full h-auto object-cover"
              alt="Pattern background"
              src="https://c.animaapp.com/m9jqfbic8vZpku/img/pattern-background-2.png"
            />
            <img
              className="w-full h-auto object-cover"
              alt="Pattern background"
              src="https://c.animaapp.com/m9jqfbic8vZpku/img/pattern-background-2.png"
            />
          </div>

          <div className="flex flex-col w-full">
            <ActionBarSection />
            <MainContentSection />
            <PaginationSection />
          </div>
        </div>
        <FooterSection />

        {/* ITMentor logo text */}
        <div className="mx-auto w-full max-w-[1920px] px-4">
          <div className="relative py-6 ml-[120px]">
            <div className="font-['Syncopate',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-normal">
              ITMentor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
