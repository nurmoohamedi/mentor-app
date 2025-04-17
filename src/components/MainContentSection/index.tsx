import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  // Category data for the left sidebar
  const categories = [
    {
      id: "all",
      name: "Все категории",
      checked: true,
    },
    {
      id: "wordpress",
      name: "WordPress",
      checked: true,
      subcategories: [
        { id: "wp-plugin", name: "Плагин программирование", checked: true },
        { id: "wp-template", name: "Шаблон дизайн", checked: true },
      ],
    },
    {
      id: "mobile",
      name: "Мобильное программирование",
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
      name: "Веб -программирование",
      checked: false,
      subcategories: [
        { id: "asp-net", name: "Asp . net", checked: false },
        { id: "ajax", name: "Аякс", checked: false },
        { id: "php", name: "PHP", checked: false },
        { id: "html-css-js", name: "HTML, CSS, JavaScript", checked: false },
      ],
    },
    {
      id: "languages",
      name: "Язык программирования",
      checked: true,
      subcategories: [
        { id: "python", name: "Питон", checked: true },
        { id: "c-cpp", name: "C / C Plus", checked: false },
        { id: "java", name: "Ява", checked: false },
        { id: "javascript", name: "JavaScript", checked: false },
        { id: "golang", name: "Иди, Ланг", checked: false },
        { id: "csharp", name: "C #", checked: false },
        { id: "ruby", name: "Рубин", checked: false },
        { id: "php-lang", name: "PHP", checked: false },
        { id: "swift", name: "Быстрый", checked: false },
      ],
    },
    {
      id: "frameworks",
      name: "Рамки",
      checked: true,
      subcategories: [
        { id: "laravel", name: "Луча", checked: true },
        { id: "nuxtjs", name: "Девяносто Гс", checked: false },
        { id: "angular", name: "Угловой", checked: false },
        { id: "laravel2", name: "Личинка", checked: true },
        { id: "django", name: "Джанго", checked: false },
      ],
    },
  ];

  // Course data for the right side grid
  const courses = [
    {
      id: 1,
      title: "Chatgpt Pro Training",
      description: "Lorem ipsum сфабриковал текст с . . .",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img-1.png",
      instructor: "Али Шахбаз",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon-1.png",
      price: "1,5 $",
      duration: "13:31",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon-1.png",
    },
    {
      id: 2,
      title: "Учебный курс SQL Server",
      description: "Lorem ipsum сфабриковал текст с . . .",
      image: "https://c.animaapp.com/m9jqfbic8vZpku/img/box-img.png",
      instructor: "Али Ахмади",
      instructorAvatar: "https://c.animaapp.com/m9jqfbic8vZpku/img/icon.png",
      price: "1,5 $",
      duration: "1:37",
      timeIcon: "https://c.animaapp.com/m9jqfbic8vZpku/img/time-icon.png",
    },
    {
      id: 3,
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
  ];

  // Render category item with checkbox
  const renderCategoryItem = (category, isSubcategory = false) => {
    return (
      <div key={category.id} className="flex items-center justify-center gap-7">
        <div
          className={`relative w-10 h-10 rounded-[10px] shadow-[0px_4px_4px_#00000026] ${category.checked ? "bg-[#2c7fff]" : "bg-white border border-solid border-[#969696]"}`}
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
          className={`relative w-fit ${isSubcategory ? "font-normal text-neutral-800" : category.id === "all" ? "font-normal text-black" : "font-bold text-black"} text-2xl text-right leading-7 [font-family:'Vazirmatn',Helvetica] tracking-[0]`}
        >
          {category.name}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-start gap-12 mt-[241px] mx-auto max-w-[1580px]">
      {/* Left sidebar - Categories */}
      <Card className="w-[479px] rounded-[35px] shadow-[0px_4px_24px_#0000001a]">
        <CardContent className="p-9">
          <h2 className="w-full mb-8 [font-family:'Vazirmatn',Helvetica] font-bold text-black text-[28px] text-right">
            Классификация курсов
          </h2>

          <div className="flex flex-col space-y-6">
            {/* All categories */}
            {renderCategoryItem(categories[0])}

            {/* WordPress category with subcategories */}
            <div className="flex flex-col space-y-3">
              {renderCategoryItem(categories[1])}
              <div className="flex flex-col space-y-3 ml-10">
                {categories[1].subcategories.map((subcategory) => (
                  <div key={subcategory.id}>
                    {renderCategoryItem(subcategory, true)}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile programming category with subcategories */}
            <div className="flex flex-col space-y-3">
              {renderCategoryItem(categories[2])}
              <div className="flex flex-col space-y-3 ml-10">
                {categories[2].subcategories.map((subcategory) => (
                  <div key={subcategory.id}>
                    {renderCategoryItem(subcategory, true)}
                  </div>
                ))}
              </div>
            </div>

            {/* Web programming category with subcategories */}
            <div className="flex flex-col space-y-3">
              {renderCategoryItem(categories[3])}
              <div className="flex flex-col space-y-3 ml-10">
                {categories[3].subcategories.map((subcategory) => (
                  <div key={subcategory.id}>
                    {renderCategoryItem(subcategory, true)}
                  </div>
                ))}
              </div>
            </div>

            {/* Programming languages category with subcategories */}
            <div className="flex flex-col space-y-3">
              {renderCategoryItem(categories[4])}
              <div className="flex flex-col space-y-3 ml-10">
                {categories[4].subcategories.map((subcategory) => (
                  <div key={subcategory.id}>
                    {renderCategoryItem(subcategory, true)}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks category with subcategories */}
            <div className="flex flex-col space-y-3">
              {renderCategoryItem(categories[5])}
              <div className="flex flex-col space-y-3 ml-10">
                {categories[5].subcategories.map((subcategory) => (
                  <div key={subcategory.id}>
                    {renderCategoryItem(subcategory, true)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Right side - Course grid */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-12">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="w-[501px] rounded-[30px] shadow-[0px_0px_33px_#00000026] overflow-hidden"
          >
            <CardContent className="p-0">
              <img
                className="w-full h-[371px] object-cover"
                alt={course.title}
                src={course.image}
              />

              <div className="p-3.5">
                <h3 className="font-bold text-black text-[32px] [font-family:'Vazirmatn',Helvetica] mb-4">
                  {course.title}
                </h3>

                <p className="font-normal text-neutral-800 text-2xl [font-family:'Vazirmatn',Helvetica] mb-6">
                  {course.description}
                </p>

                <div className="flex items-end justify-end gap-[15px] mb-4">
                  <div className="font-normal text-[#484848] text-[28px] text-right [font-family:'Vazirmatn',Helvetica]">
                    {course.instructor}
                  </div>
                  <img
                    className="w-[46px] h-[46px]"
                    alt="Instructor"
                    src={course.instructorAvatar}
                  />
                </div>

                <Separator className="mb-6" />

                <div className="flex justify-between items-center">
                  <div className="font-bold text-[#2c7fff] text-[38px] [font-family:'Vazirmatn',Helvetica]">
                    {course.price}
                  </div>

                  <div className="flex items-center gap-[15px]">
                    <div className="font-normal text-[#09e647] text-[38px] text-right [font-family:'Vazirmatn',Helvetica]">
                      {course.duration}
                    </div>
                    <img
                      className="w-[46px] h-[46px]"
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
    </div>
  );
};
