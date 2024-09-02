import IntoleranceList from "@/packages/intolerance-list/components/List";
import intoleranceJSON from "@/raw-data/intolerance-data.json";
import { FiveStrandIntolerance } from "@/shared/types/FiveStrands";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h2 className="text-4xl font-bold text-center mb-4">Intolerance app</h2>
      <IntoleranceList
        intolerances={intoleranceJSON as FiveStrandIntolerance[]}
      />
    </main>
  );
}
