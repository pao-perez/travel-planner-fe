import React from "react";

interface InfoSectionProps {
  content: string;
}

const InfoSection = ({ content }: InfoSectionProps) => {
  return (
    <section className="border-dashed border-2 border-gray-300 p-4">
      <p className="text-gray-700">{content}</p>
    </section>
  );
};

export default InfoSection;
