'use client'
/** @type {import('next').NextConfig} */
import React from "react";

export type Props = {
    text: string;
    color? : keyof typeof colors;
}

const colors = {
  blue: "text-blue-200 bg-blue-500",
  green: "text-green-200 bg-green-500"
};

export const TechStackTag: React.FC<Props> = ({ text, color="blue"}) => {

  return (
      <div className={`inline-block px-3 py-1 mt-1.5 mr-1.5 text-sm font-medium ${colors[color]} rounded-full`}>
        {text}
      </div>
  );
};

export default TechStackTag;