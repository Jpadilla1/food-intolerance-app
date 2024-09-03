import IntoleranceList from "@/packages/intolerance-list/components/List";
import intoleranceJSON from "@/raw-data/intolerance-data.json";
import { FiveStrandIntolerance } from "@/shared/types/FiveStrands";
import { Viewport } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-8 pl-4 pr-4 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Food Intolerances</h1>
      <div className="w-full border-b border-divider mb-4" />
      <IntoleranceList
        intolerances={intoleranceJSON as FiveStrandIntolerance[]}
      />
    </main>
  );
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};
