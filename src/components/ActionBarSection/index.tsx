import React from "react";
import { SearchIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ActionBarSection = (): JSX.Element => {
  return (
    <div className="w-full flex flex-row gap-[16px] py-[32px] mt-12">
      <Card className="w-[700px] h-[40px] shadow-[0px_4px_24px_#0000001a] rounded-[35px]">
        <CardContent className="p-0">
          <div className="flex items-center h-[40px] px-[16px]">
            <Select defaultValue="latest">
              <SelectTrigger className="border-0 shadow-none h-[24px] pl-0 text-xl font-normal [font-family:'Vazirmatn',Helvetica] text-neutral-800">
                <SelectValue placeholder="Сортировка на основе последней даты публикации" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">
                  Сортировка на основе последней даты публикации
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[851px] h-[40px] shadow-[0px_4px_24px_#0000001a] rounded-[35px]">
        <CardContent className="p-0">
          <div className="flex items-center p-[10px_20px]">
            <div className="relative flex items-center w-full">
              <SearchIcon className="absolute left-0 w-[32px] h-[52px] text-neutral-800" />
              <Input
                className="border-[0] shadow-none pl-[46px] text-[20px] font-normal text-neutral-800"
                placeholder="Search for any skill, title or company"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
