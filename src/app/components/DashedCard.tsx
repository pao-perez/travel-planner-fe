import { ReactNode } from "react";

interface DashedCardProps {
  readonly children: ReactNode;
}

export default function DashedCard({ children }: DashedCardProps) {
  return (
    <section className="border-dashed border-2 border-gray-300 p-4">
      {children}
    </section>
  );
}
