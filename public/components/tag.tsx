'use client'
import React from 'react';

interface tagProps {
    text: string
}

export const Tag: React.FC<tagProps> = ({text}) => {

    return (
      <div className="rounded-lg bg-blue-600 text-white font-medium mr-1 mb-1 inline-block p-2">
        {text}
      </div>
    );
};