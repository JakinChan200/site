'use client'
/** @type {import('next').NextConfig} */
import React from "react";

export type Props = {
    text: string;
}

export const TechStackTag: React.FC<Props> = ({ text }: Props) => {
  return (
      <div className="inline-block px-3 py-1 mt-1.5 mr-1.5 text-sm font-medium text-blue-200 bg-blue-500 rounded-full">
        {text}
      </div>
  );
};

export default TechStackTag;