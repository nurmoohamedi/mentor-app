import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

export const PaginationSection = (): JSX.Element => {
  // Data for pagination dots
  const paginationDots = [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: true },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[48px] mb-[24px]">
      <div className="text-center mb-6">
        <h2 className="font-bold text-[38px] leading-[38px] font-['Vazirmatn',Helvetica]">
          Страница 3 из 3
        </h2>
      </div>

      <Pagination className="mb-[8px]">
        <PaginationContent>
          {paginationDots.map((dot) => (
            <PaginationItem key={dot.id}>
              <div
                className={`w-[33px] h-[33px] rounded-[16.66px] mr-[16px] cursor-pointer ${
                  dot.active ? "bg-[#2c7fff]" : "bg-[#d9d9d9]"
                }`}
              />
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>

      <div className="flex justify-between w-full max-w-[899px] gap-4">
        <Button className="h-[48px] w-[239px] rounded-[36px] bg-[#2c7fff] text-white font-['Vazirmatn',Helvetica] text-xl font-bold">
          <img
            className="w-[24px] h-[24px] mr-[16px]"
            alt="Keyboard arrow right"
            src="https://c.animaapp.com/m9jqfbic8vZpku/img/keyboard-arrow-right.png"
          />
          Предыдущая
        </Button>

        <Button
          className="h-[48px] w-[239px] rounded-[36px] bg-[#8e8e8e] text-[#e6e6e6] font-['Vazirmatn',Helvetica] text-xl font-normal"
          disabled
        >
          Следующая
          <img
            className="w-[24px] h-[24px] ml-[16px]"
            alt="Keyboard arrow right"
            src="https://c.animaapp.com/m9jqfbic8vZpku/img/keyboard-arrow-right-1.png"
          />
        </Button>
      </div>
    </div>
  );
};
