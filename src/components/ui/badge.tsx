import * as React from "react";

type Props = { className?: string };

function Badge({ className, children }: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`
        inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

export { Badge };
