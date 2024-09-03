import { PropsWithChildren } from "react";
import { Search, Donut } from "lucide-react";
import Link from "next/link";

const tabs = [
  { id: "", label: "Search", icon: Search },
  { id: "more", label: "More", icon: Donut },
];

export default function BottomTabs({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}

      {/* Fixed bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <ul className="flex justify-around items-center h-16 px-4 md:px-6">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Link
                href={`/${tab.id.toLowerCase()}`}
                className="flex flex-col items-center justify-center w-16 h-full"
              >
                <tab.icon className="w-6 h-6" />
                <span className="text-xs mt-1">{tab.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Extra padding to prevent content from being hidden behind the navigation on mobile */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
