import Image from "next/image";
import React from "react";

interface BusinessCardProps {
  title: string;
  link: string;
  imageSrc?: string;
  leftValue?: string;
  rightValue?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  imageSrc,
  title,
  leftValue,
  rightValue,
  link,
}) => {
  return (
    <div>
      <a
        href={link}
        className="block w-[370px] mx-auto p-4 bg-gray-600 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 text-white"
      >
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
          <Image
            src={imageSrc ?? "/icons/undefined.png"}
            alt={title}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
            width={64}
            height={64}
          />
          <div>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <div className="grid grid-cols-2 text-sm text-gray-400">
              <span>{leftValue}</span>
              <span className="text-right">{rightValue}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BusinessCard;
