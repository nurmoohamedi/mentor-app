import { JSX, useEffect, useState } from "react";
import { ActionBarSection } from "../ActionBarSection";
import { FooterSection } from "../FooterSection";
import { HeaderSection } from "../HeaderSection";
import { MainContentSection } from "../MainContentSection";
import { PaginationSection } from "../PaginationSection";

interface IFormVars {
  searchKey: string;
}

export const CoursesDesktop = (): JSX.Element => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "ChatGPT Pro Training",
      description: "Learn prompt engineering and AI integrations",
      instructor: "Али Шахбаз",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon-1.png",
      price: "1,5 $",
      duration: "13:31",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon-3.png",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img-1.png",
      skills: ["Leadership", "Startup"],
      jobTitles: ["CEO", "CTO"],
      companies: ["Microsoft", "Amazon"],
    },
    {
      id: 2,
      title: "Учебный курс SQL Server",
      description: "Master SQL Server from scratch",
      instructor: "Али Ахмади",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon.png",
      price: "1,5 $",
      duration: "1:37",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon-3.png",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img.png",
      skills: ["Product Management"],
      jobTitles: ["Senior Software Engineer"],
      companies: ["Google"],
    },
    {
      id: 3,
      skills: ["Product Management", "Career Growth"],
      title: "Усовершенствованное ...",
      description: "Lorem ipsum сфабриковал текст с . . .",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img-3.png",
      instructor: "Абольфазл Аббаси",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon-3.png",
      price: "1,5 $",
      duration: "1:31",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon-3.png",
    },
    {
      id: 4,
      skills: ["Career Growth"],
      title: "Tailwind CSS",
      description: "Lorem ipsum сфабриковал текст с . . .",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img-2.png",
      instructor: "Хасан Хосроверди",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon-2.png",
      price: "1,5 $",
      duration: "1:31",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon-2.png",
    },
    {
      id: 5,
      title: "Учебники по Python",
      description: "Lorem ipsum сфабриковал текст с . . .",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img-5.png",
      instructor: "Али Шахбаз",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon-5.png",
      price: "Бесплатно!",
      duration: "1:31",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon-5.png",
    },
    {
      id: 6,
      title: "Asp . net core",
      description: "Lorem ipsum сфабриковал текст с . . .",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img-4.png",
      instructor: "Али Шахбаз",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon-4.png",
      price: "1,5 $",
      duration: "1:31",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon-4.png",
    },
  ]);

  interface IFormVars {
    searchKey: string;
    skills: string[];
    jobTitles: string[];
    companies: string[];
  }
  
 
  const [filteredCourses, setFilteredCourses] = useState([])
  // const [formVars, setFormVars] = useState<IFormVars>({
  //   searchKey: "",
  // });

  const [formVars, setFormVars] = useState<IFormVars>({
    searchKey: "",
    skills: [],
    jobTitles: [],
    companies: [],
  });

  // useEffect(() => {
  //   if (formVars.searchKey) {
  //     const searchValue = formVars.searchKey.toLowerCase();
  //     const filtered = courses.filter((course) => {
  //       const titleMatch = course.title.toLowerCase().includes(searchValue);
  //       const descriptionMatch = course.description.toLowerCase().includes(searchValue);
  //       return titleMatch || descriptionMatch || false;
  //     });
  //     debugger;
  //     setFilteredCourses(filtered);
  //   }
  // }, [formVars.searchKey])

  useEffect(() => {
    const searchValue = formVars.searchKey.toLowerCase();
  
    const filtered = courses.filter((course) => {
      const titleMatch = course.title?.toLowerCase().includes(searchValue);
      const descriptionMatch = course.description?.toLowerCase().includes(searchValue);
  
      const skillMatch =
        !formVars.skills?.length || formVars.skills.some((s) => course.skills?.includes(s));
      const jobMatch =
        !formVars.jobTitles?.length || formVars.jobTitles.some((j) => course.jobTitles?.includes(j));
      const companyMatch =
        !formVars.companies?.length || formVars.companies.some((c) => course.companies?.includes(c));
  
      return (titleMatch || descriptionMatch) && skillMatch && jobMatch && companyMatch;
    });
  
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
        {JSON.stringify(formVars)}
        <div className="flex flex-col w-full">
          <ActionBarSection formVars={formVars} setFormVars={setFormVars} />
          <MainContentSection formVars={formVars} setFormVars={setFormVars} courses={formVars.searchKey?.length > 0 ? filteredCourses : courses} />
          <PaginationSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};
