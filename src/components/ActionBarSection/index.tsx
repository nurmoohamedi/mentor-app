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
    <div className="w-full flex flex-row gap-6 py-4">
      <Card className="w-[700px] shadow-[0px_4px_24px_#0000001a] rounded-[35px]">
        <CardContent className="p-0">
          <div className="flex items-center h-[115px] px-12">
            <Select defaultValue="latest">
              <SelectTrigger className="border-0 shadow-none h-[46px] pl-0 text-xl font-normal [font-family:'Vazirmatn',Helvetica] text-neutral-800">
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

      <Card className="w-[851px] shadow-[0px_4px_24px_#0000001a] rounded-[35px]">
        <CardContent className="p-0">
          <div className="flex items-center h-[115px] px-10">
            <div className="relative flex items-center w-full">
              <SearchIcon className="absolute left-0 w-[52px] h-[52px] text-neutral-800" />
              <Input
                className="border-0 shadow-none pl-16 text-[28px] h-[52px] [font-family:'Vazirmatn',Helvetica] font-normal text-neutral-800"
                placeholder="Напишите свой желаемый название учебника . . ."
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
