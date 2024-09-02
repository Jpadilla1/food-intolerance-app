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

  const filteredIntolerances = React.useMemo(() => {
    if (!category || category === "all") {
      return intolerances;
    }
    return intolerances
      .filter((i) => i.type === category)
      .sort((a, b) => b.level - a.level);
  }, [category, intolerances]);

  return (
    <div>
      <Select onValueChange={(value) => setCategory(value)} value={category}>
        <SelectTrigger className="w-[180px]">
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
