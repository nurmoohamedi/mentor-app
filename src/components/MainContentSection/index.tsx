import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DoorClosed, FilterIcon, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
// import { useEffect, useState } from "react";

// Category data for the left sidebar
const categories = [
  {
    id: "all",
    name: "Leadership",
    checked: true,
    count: 543,
  },
  {
    id: "wordpress",
    name: "Product Management",
    count: 450,
    checked: true,
    subcategories: [
      { id: "wp-plugin", name: "Плагин программирование", checked: true },
      { id: "wp-template", name: "Шаблон дизайн", checked: true },
    ],
  },
  {
    id: "mobile",
    name: "Career Growth",
    count: 389,
    checked: false,
    subcategories: [
      { id: "android-java", name: "Android (Java)", checked: false },
      { id: "android-kotlin", name: "Android (Кэтлин)", checked: false },
      { id: "flutter", name: "Трепетание и дротик", checked: false },
      { id: "xamarin", name: "Замарин", checked: false },
      { id: "react-native", name: "Рэйм Нитио", checked: false },
    ],
  },
  {
    id: "web",
    name: "Startup",
    count: 370,
    checked: false,
    subcategories: [
      { id: "asp-net", name: "Asp . net", checked: false },
      { id: "ajax", name: "Аякс", checked: false },
      { id: "php", name: "PHP", checked: false },
      { id: "html-css-js", name: "HTML, CSS, JavaScript", checked: false },
    ],
  },
];

const jobs = [
  { name: "Founder", count: 134 },
  { name: "CEO", count: 64 },
  { name: "Senior Software Engineer", count: 61 },
  { name: "CTO", count: 43 },
  { name: "Engineering Manager", count: 40 },
];

const companies = [
  { name: "Microsoft", count: 35 },
  { name: "Amazon", count: 12 },
  { name: "Booking.com", count: 4 },
  { name: "Google", count: 2 },
  { name: "Uber", count: 2 },
];

export const MainContentSection = ({
  courses,
  formVars,
  setFormVars,
}: any): JSX.Element => {
  const toggleFilter = (type, value: string) => {
    setFormVars((prev) => {
      const values = prev[type] as string[];
      const newValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];

      return { ...prev, [type]: newValues };
    });
  };

  // Render category item with checkbox
  const renderCategoryItem = (category, isSubcategory = false) => {
    return (
      <div key={category.id} className="flex items-center justify-center gap-7">
        <div
          className={`relative w-10 h-10 rounded-[10px] shadow-[0px_4px_4px_#00000026] ${
            category.checked
              ? "bg-[#2c7fff]"
              : "bg-white border border-solid border-[#969696]"
          }`}
        >
          {category.checked && (
            <div className="w-10 h-10 bg-[url(https://c.animaapp.com/m9jqfbic8vZpku/img/check-small.png)] bg-[100%_100%]" />
          )}
        </div>

        {isSubcategory && (
          <img
            className="relative w-5 h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/m9jqfbic8vZpku/img/line-4.svg"
          />
        )}

        <div
          className={`relative w-fit ${
            isSubcategory
              ? "font-normal text-neutral-800"
              : category.id === "all"
              ? "font-normal text-black"
              : "font-bold text-black"
          } text-2xl text-right leading-7 [font-family:'Vazirmatn',Helvetica] tracking-[0]`}
        >
          {category.name}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-start gap-[32px] mt-[32px] mx-auto max-w-[1580px]">
      <Card className="bg-white rounded-[35px] shadow-[0px_4px_24px_#0000001a]">
        <CardContent className="p-[24px]">
          <h2 className="w-full mb-2 [font-family:'Vazirmatn',Helvetica] font-bold text-black text-[28px] text-right">
            Классификация менторов
          </h2>

          <div className="flex flex-col space-y-6">
            <div className="my-4">
              <div className="heading-3 mb-2">
                <h1 className="text-[24px] text-left m-[16px_0]">Skills</h1>
              </div>
              <div className="RefinementList">
                <div className="search mb-[8px]">
                  <Input
                    placeholder="Search for skills"
                    className="p-[.5rem_.5rem] rounded-[8px]"
                  />
                </div>
                <div className="list">
                  {categories.map((item) => (
                    <div
                      key={item.name}
                      className="list-element flex justify-between p-3"
                    >
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          checked={formVars.skills.includes(item.name)}
                          onChange={() => toggleFilter("skills", item.name)}
                        />
                        <p className="name text-[18px] leading-[0]">
                          {item.name}
                        </p>
                      </div>
                      <div className="count text-[18px]">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="heading-3 mb-2">
                <h1 className="text-[24px] text-left m-[16px_0]">Job titles</h1>
              </div>
              <div className="RefinementList">
                <div className="search mb-[8px]">
                  <Input
                    placeholder="Search for skills"
                    className="p-[.5rem_.5rem] rounded-[8px]"
                  />
                </div>
                <div className="list">
                  {jobs?.map((item) => (
                    <div className="list-element flex justify-between p-3">
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          checked={formVars.jobTitles.includes(item.name)}
                          onChange={() => toggleFilter("jobTitles", item.name)}
                        />
                        <p className="name text-[18px] leading-[0]">
                          {item.name}
                        </p>
                      </div>
                      <div className="count text-[18px] ">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="heading-3 mb-2">
                <h1 className="text-[24px] text-left m-[16px_0]">Companies</h1>
              </div>
              <div className="RefinementList">
                <div className="search mb-[8px]">
                  <Input
                    placeholder="Search for skills"
                    className="p-[.5rem_.5rem] rounded-[8px]"
                  />
                </div>
                <div className="list">
                  {companies.map((item) => (
                    <div
                      key={item.name}
                      className="list-element flex justify-between p-3"
                    >
                      <div className="flex gap-3">
                        <input
                          type="checkbox"
                          checked={formVars.companies.includes(item.name)}
                          onChange={() => toggleFilter("companies", item.name)}
                        />
                        <p className="name text-[18px] leading-[0]">
                          {item.name}
                        </p>
                      </div>
                      <div className="count text-[18px]">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="buttons mt-[24px]">
            <Button className="w-full p-[24px] h-[48px] rounded-[36px] border-black text-xl font-bold bg-[#2c7fff] text-[#fff] cursor-pointer">
              <FilterIcon size={20} className="mr-[8px]" />
              More Filters
            </Button>
            <Button
              variant="outline"
              className="w-full p-[24px] mt-[16px] h-[48px] rounded-[36px] border-black text-xl font-bold bg-[#2c7fff] text-[#fff] cursor-pointer"
            >
              <Heart size={20} className="mr-[8px]" />
              Save this Search
            </Button>
          </div>
          <div className="mt-[16px] ml-[4px] cursor-pointer flex content-center">
            <DoorClosed size={16} className="mr-[8px]" />
            Reset all filters
          </div>
        </CardContent>
      </Card>
      <div>
        {courses && courses.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="w-full rounded-[30px] shadow-[0px_0px_33px_#00000026] overflow-hidden"
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-[250px] object-cover"
                    alt={course.title}
                    src={course.image}
                  />

                  <div className="p-[24px]">
                    <h3 className="font-bold text-black text-[24px] [font-family:'Vazirmatn',Helvetica] mb-4">
                      {course.title}
                    </h3>
                    <p className="font-normal text-neutral-800 text-2xl [font-family:'Vazirmatn',Helvetica] mb-6">
                      {course.description}
                    </p>

                    {/* Инструктор */}
                    <div className="flex items-end justify-end gap-[15px] mb-4">
                      <div className="font-normal text-[#484848] text-[24px] text-right [font-family:'Vazirmatn',Helvetica]">
                        {course.instructor}
                      </div>
                      <img
                        className="w-[32px] h-[32px]"
                        alt="Instructor"
                        src={course.instructorAvatar}
                      />
                    </div>

                    <Separator className="mt-[8px] mb-[8px]" />

                    {/* Skills */}
                    <div className="mb-4 flex flex-wrap gap-3">
                      <div className="font-medium text-gray-700 text-lg mb-2">
                        Skills:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course.skills?.map((skill, index) => (
                          <Badge variant="outline" key={index}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Job Titles */}
                    <div className="mb-4 flex flex-wrap gap-3">
                      <div className="font-medium text-gray-700 text-lg mb-2">
                        Job Titles:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course?.jobTitles?.map((job, index) => (
                          <Badge variant="outline" key={index}>
                            {job}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Companies */}
                    <div className="mb-6 flex flex-wrap gap-3">
                      <div className="font-medium text-gray-700 text-lg mb-2">
                        Companies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {course?.companies?.map((company, index) => (
                          <Badge variant="outline" key={index}>
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator className="mt-[8px] mb-[8px]" />

                    {/* Price & Duration */}
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-[#2c7fff] text-[24px] [font-family:'Vazirmatn',Helvetica]">
                        {course.price}
                      </div>

                      <div className="flex items-center gap-[15px]">
                        <div className="font-normal text-[#09e647] text-[24px] text-right [font-family:'Vazirmatn',Helvetica]">
                          {course.duration}
                        </div>
                        <img
                          className="w-[32px] h-[32px]"
                          alt="Time"
                          src={course.timeIcon}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card
            key={0}
            className="w-full h-[400px] rounded-[30px] shadow-[0px_0px_33px_#00000026] overflow-hidden flex items-center justify-center"
          >
            <CardContent className="p-0">
              <div className="p-[24px]">
                <h3 className="font-bold text-black text-[24px] [font-family:'Vazirmatn',Helvetica] mb-4">
                  Ooops! No courses found...
                </h3>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
