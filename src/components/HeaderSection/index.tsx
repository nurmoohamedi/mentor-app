import React from "react";
import {
    ChevronDownIcon,
    LogInIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserPlusIcon,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  
  export const HeaderSection = (): JSX.Element => {
    // Navigation menu items data
    const navItems = [
      { label: "Главная", hasDropdown: true },
      { label: "Контракты", hasDropdown: true },
      { label: "Блог", hasDropdown: true },
      { label: "Курсы", hasDropdown: true },
    ];
  
    return (
      <header className="w-full bg-[#fcf8f2] py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="relative h-[88px] w-[277px]">
            <div className="absolute left-0 top-0 h-[76px] w-[243px]">
              <div className="absolute left-[34px] top-[23px] whitespace-nowrap font-['Syncopate',Helvetica] text-[28px] font-normal tracking-[0] text-white leading-normal">
                ITMentor
              </div>
            </div>
            {/* <div className="absolute left-[34px] top-3 h-[76px] w-[243px]">
              <div className="absolute left-[34px] top-[23px] whitespace-nowrap font-['Syncopate',Helvetica] text-[28px] font-normal tracking-[0] text-black leading-normal">
                ITMentor
              </div>
            </div> */}
          </div>
  
          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-[8px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.hasDropdown ? (
                    <NavigationMenuTrigger className="flex items-center gap-2 bg-transparent font-['Vazirmatn',Helvetica] text-[18px] font-normal text-black border-none">
                      {item.label}
                    </NavigationMenuTrigger>
                  ) : (
                    <div className="font-['Vazirmatn',Helvetica] text-[18px] font-normal text-black leading-7">
                      {item.label}
                    </div>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
  
          {/* Right side buttons and icons */}
          <div className="flex items-center gap-[8px]">
            {/* Registration button */}
            <Button
              variant="outline"
              className="p-[24px] h-[36px] rounded-[36px] border-black text-xl font-bold gap-[4px] cursor-pointer"
            >
              Регистрация
              <UserPlusIcon size={20} className="h-3 w-3" />
            </Button>
  
            {/* Login button */}
            <Button className="p-[24px] h-[36px] rounded-[36px] border-black text-xl font-bold bg-[#2c7fff] text-white cursor-pointer">
              Вход
              <LogInIcon size={20} className="h-6 w-6" />
            </Button>
  
            {/* Cart and SearchIcon */}
            <div className="flex items-center gap-[8px]">
              <div className="relative">
                <ShoppingCartIcon className="h-[32px] w-[32px] cursor-pointer" />
                {/* <div className="absolute -right-1 -top-1 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#2c7fff]">
                  <span className="font-['Vazirmatn',Helvetica] text-[28px] font-bold text-black [direction:rtl]">
                    ۰
                  </span>
                </div> */}
              </div>
              <SearchIcon className="h-[32px] w-[32px] cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    );
  };
  