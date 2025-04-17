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
          {/* <img
            className="w-full h-auto object-cover"
            alt="Pattern background"
            src="https://c.animaapp.com/m9jqfbic8vZpku/img/pattern-background-2.png"
          /> */}
        </div>

      </div>
      <div className="container">
        <div className="flex flex-col w-full">
          <ActionBarSection />
          <MainContentSection />
          <PaginationSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};
