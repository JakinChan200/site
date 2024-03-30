'use client'
/** @type {import('next').NextConfig} */
import React from "react";

export type Props = {
    text: string;
}

// const Tag = ({text}) => {
//   return (
//     <div className="rounded-lg bg-blue-600 text-white shadow-md font-medium mr-1 mb-1 inline-block p-2">
//       {text}
//     </div>
//   );
// };

// export default Tag;

export const Tag: React.FC<Props> = ({ text }: Props) => {
  return (
      <div className="rounded-lg bg-blue-600 text-white shadow-md text-xs lg:text-md mr-1 mb-1 inline-block p-2">
        {text}
      </div>
  );
};

export default Tag;


// export const Tag: React.FC<Props> = ({text}) => {
//     return (
//       <div className="rounded-lg bg-blue-600 text-white shadow-md font-medium mr-1 mb-1 inline-block p-2">
//         {text}
//       </div>
//     );
// };