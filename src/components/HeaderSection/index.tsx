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
      { label: "Главная", hasDropdown: false },
      { label: "Контракты", hasDropdown: false },
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
            <div className="absolute left-[34px] top-3 h-[76px] w-[243px]">
              <div className="absolute left-[34px] top-[23px] whitespace-nowrap font-['Syncopate',Helvetica] text-[28px] font-normal tracking-[0] text-black leading-normal">
                ITMentor
              </div>
            </div>
          </div>
  
          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.hasDropdown ? (
                    <NavigationMenuTrigger className="flex items-center gap-2 bg-transparent font-['Vazirmatn',Helvetica] text-[18px] font-normal text-black">
                      {item.label}
                      <ChevronDownIcon className="h-[35px] w-[35px]" />
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
          <div className="flex items-center gap-4">
            {/* Registration button */}
            <Button
              variant="outline"
              className="flex h-[72px] w-[226px] items-center justify-center gap-3.5 rounded-[36px] border-black font-['Vazirmatn',Helvetica] text-xl font-bold"
            >
              Регистрация
              <UserPlusIcon className="h-6 w-6" />
            </Button>
  
            {/* Login button */}
            <Button className="flex h-[72px] w-[181px] items-center justify-center gap-3.5 rounded-[36px] bg-[#2c7fff] font-['Vazirmatn',Helvetica] text-xl font-bold text-white">
              Вход
              <LogInIcon className="h-6 w-6" />
            </Button>
  
            {/* Cart and SearchIcon */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCartIcon className="h-[52px] w-[52px]" />
                <div className="absolute -right-1 -top-1 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#2c7fff]">
                  <span className="font-['Vazirmatn',Helvetica] text-[28px] font-bold text-black [direction:rtl]">
                    ۰
                  </span>
                </div>
              </div>
              <SearchIcon className="h-[52px] w-[52px]" />
            </div>
          </div>
        </div>
      </header>
    );
  };
  