"use client";

import React from "react";
import { AllergyCard } from "@/components/allergy-card";
import { FiveStrandIntolerance } from "@/shared/types/FiveStrands";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

type Props = {
  intolerances: FiveStrandIntolerance[];
};

const IntoleranceList = ({ intolerances }: Props) => {
  const categories = React.useMemo(() => {
    const categorySet = new Set<string>();
    intolerances.forEach((i) => {
      categorySet.add(i.type);
    });
    return Array.from(categorySet);
  }, [intolerances]);

  const [category, setCategory] = React.useState<string>("all");
  const [search, setSearch] = React.useState<string>("");

  const filteredIntolerances = React.useMemo(() => {
    return intolerances
      .filter((i) => category === "all" || i.type === category)
      .filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => b.level - a.level);
  }, [category, search, intolerances]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center">
        <h3 className="text-2l font-bold">Category:</h3>
        <div className="w-4" />
        <Select onValueChange={(value) => setCategory(value)} value={category}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4" />
      <div className="flex items-center">
        <h3 className="text-2l font-bold">Search:</h3>
        <div className="w-8" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mt-4" />
      {filteredIntolerances.map((i) => (
        <div key={`${i.type}-${i.name}`} className="mb-4">
          <AllergyCard name={i.name} level={i.level} />
        </div>
      ))}
    </div>
  );
};

export default IntoleranceList;
