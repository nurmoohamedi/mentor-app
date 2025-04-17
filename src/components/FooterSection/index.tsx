import React from "react";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data
  const quickAccessLinks = [
    { title: "Дом", href: "#" },
    { title: "Курсы", href: "#" },
    { title: "Статьи и новости", href: "#" },
    { title: "Связаться с нами", href: "#" },
  ];

  const courseCategories = [
    { title: "Android", href: "#" },
    { title: "WordPress", href: "#" },
    { title: "Веб -сайт", href: "#" },
    { title: "Пользовательский интерфейс", href: "#" },
  ];

  return (
    <footer className="relative w-full bg-transparent">
      <div className="relative w-full">
        {/* Background SVG */}
        <img
          className="w-full h-[630px]"
          alt="Mask"
          src="https://c.animaapp.com/m9jqfbic8vZpku/img/mask.svg"
        />

        {/* Back to top button */}
        <div className="absolute top-[113px] left-1/2 -translate-x-1/2">
          <Button
            className="w-[113px] h-[113px] rounded-full bg-[#2c7fff] hover:bg-[#2c7fff]/90 flex items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUpIcon className="w-[59px] h-[59px] text-white" />
          </Button>
        </div>

        {/* Footer content container */}
        <div className="absolute inset-0 flex justify-between px-24 pt-[101px]">
          {/* Company description */}
          <div className="w-[576px]">
            <p className="font-['Vazirmatn',Helvetica] text-[28px] leading-7 text-black">
              Lorem Ipsom - это изготовленный текст с простотой печатной
              индустрии, используя графические дизайнеры, принтеры и тексты, но
              газеты и журналы в столбцах и линиях по мере необходимости {"{"}
              dot{"}"}
              {"}"}
              {"}"}
            </p>
          </div>

          {/* Quick access links */}
          <div className="w-[291px]">
            <h3 className="font-['Vazirmatn',Helvetica] font-bold text-2xl text-black mb-6">
              Быстрый доступ
            </h3>
            <nav className="flex flex-col gap-2.5">
              {quickAccessLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Vazirmatn',Helvetica] font-normal text-[28px] leading-7 text-black hover:text-[#2c7fff]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Course categories */}
          <div className="w-[374px]">
            <h3 className="font-['Vazirmatn',Helvetica] font-bold text-2xl text-black mb-6">
              Классификация курсов
            </h3>
            <nav className="flex flex-col gap-2.5">
              {courseCategories.map((category, index) => (
                <a
                  key={index}
                  href={category.href}
                  className="font-['Vazirmatn',Helvetica] font-normal text-[28px] leading-7 text-black hover:text-[#2c7fff]"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
