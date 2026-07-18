import lanyard from "@public/icons/lanyard-white-bg.svg";
import Image, { StaticImageData } from "next/image";
import React from "react";

type TeamCardProps = {
  image: StaticImageData;
  name: string;
  position: string | undefined;
  other: string | undefined;
};

const TeamCard: React.FC<TeamCardProps> = ({ image, name, position, other }) => {
  return (
    <aside className="border-4 border-black bg-white rounded-xl relative max-h-[370px] overflow-hidden">
      <Image
        src={image}
        alt={name}
        className="rounded-t-lg w-full h-[60%] object-cover"
      />

      <div className="p-4 bg-white">
        <div className="flex items-center justify-between">
          <Image src={lanyard} alt="lanyard" className="w-full" />
        </div>

        <h2 className="text-xl font-bold mt-2 text-black text-center">{name}</h2>
        
        <p className="text-sm text-gray-700 text-center mt-1">{position}</p>
        
        {other && (
          <p className="text-xs text-gray-500 text-center mt-1">{other}</p>
        )}
      </div>
    </aside>
  );
};

export default TeamCard;
