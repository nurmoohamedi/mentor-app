import { JSX, useEffect, useState } from "react";
import { ActionBarSection } from "../ActionBarSection";
import { FooterSection } from "../FooterSection";
import { HeaderSection } from "../HeaderSection";
import { MainContentSection } from "../MainContentSection";
import { PaginationSection } from "../PaginationSection";
import { mockCourses } from "../../helpers/mocks";

interface IFormVars {
  searchKey: string;
  skills: string[];
  jobTitles: string[];
  companies: string[];
}

export const CoursesDesktop = (): JSX.Element => {
  const [courses] = useState(mockCourses);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [formVars, setFormVars] = useState<IFormVars>({
    searchKey: "",
    skills: [],
    jobTitles: [],
    companies: [],
  });

  useEffect(() => {
    const searchValue = formVars?.searchKey?.toLowerCase();
    const searchSkills = formVars.skills;
    const searchJobTitles = formVars.jobTitles;
    const searchCompanies = formVars.companies;

    let filtered = courses;
    if (
      searchValue ||
      searchSkills.length > 0 ||
      searchJobTitles.length > 0 ||
      searchCompanies.length > 0
    ) {
      filtered = filtered.filter((course) => {
        const titleMatch =
          !!searchValue && course.title?.toLowerCase().includes(searchValue);
        const descriptionMatch =
          !!searchValue &&
          course.description?.toLowerCase().includes(searchValue);

        const skillMatch =
          searchSkills.length > 0
            ? searchSkills.some((s) => course.skills?.includes(s))
            : false;

        const jobMatch =
          searchJobTitles.length > 0
            ? searchJobTitles.some((j) => course.jobTitles?.includes(j))
            : false;

        const companyMatch =
          searchCompanies.length > 0
            ? searchCompanies.some((c) => course.companies?.includes(c))
            : false;

        debugger;
        return (
          titleMatch ||
          descriptionMatch ||
          skillMatch ||
          jobMatch ||
          companyMatch
        );
      });
    }
    setFilteredCourses(filtered);
  }, [formVars, courses]);

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
          <ActionBarSection formVars={formVars} setFormVars={setFormVars} />
          <MainContentSection
            formVars={formVars}
            setFormVars={setFormVars}
            courses={filteredCourses}
          />
          <PaginationSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};
