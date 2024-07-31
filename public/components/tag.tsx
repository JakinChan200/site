'use client'
/** @type {import('next').NextConfig} */
import React from "react";

export type Props = {
    text: string;
}

// const Tag = ({text}) => {
//   return (
//     <div className="inline-block p-2 mb-1 mr-1 font-medium text-white bg-blue-600 rounded-lg shadow-md">
//       {text}
//     </div>
//   );
// };

// export default Tag;

export const Tag: React.FC<Props> = ({ text }: Props) => {
  return (
      <div className="inline-block p-2 mb-1 mr-1 text-xs text-white bg-blue-600 rounded-lg shadow-md lg:text-md">
        {text}
      </div>
  );
};

export default Tag;


// export const Tag: React.FC<Props> = ({text}) => {
//     return (
//       <div className="inline-block p-2 mb-1 mr-1 font-medium text-white bg-blue-600 rounded-lg shadow-md">
//         {text}
//       </div>
//     );
// };