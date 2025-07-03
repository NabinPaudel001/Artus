import React from "react";
import { markdownify } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";
import { Team } from "@/types";

interface TeamCardProps {
  data: Team & {
    experience?: string;
    description?: string;
    education?: string;
    style?: string;
  };
}

const TeamCard = ({ data }: TeamCardProps) => {
  const { avatar, name, designation, experience, education, description, style } = data;

  return (
    <div className={`min-h-full pb-10 ${style || ""}`}>
      <div className="h-20 w-20 mx-auto overflow-hidden rounded-full">
        <ImageFallback
          src={avatar}
          className="rounded-full"
          alt={name || "avatar of team member"}
          width={80}
          height={80}
        />
      </div>

      {name && (
        <h3
          className="tracking-none mt-4 text-base md:text-lg text-center"
          dangerouslySetInnerHTML={markdownify(name)}
        />
      )}

      {designation && (
        <p className="opacity-70 text-center">{designation}</p>
      )}

      {education && (
        <p className="opacity-50 text-center italic text-sm mt-1">
          {education}
        </p>
      )}

      {experience && (
        <p className="opacity-60 text-center italic text-sm">{experience}</p>
      )}

      {description && (
        <p
          className="mt-4 opacity-80 text-center"
          dangerouslySetInnerHTML={markdownify(description)}
        />
      )}
    </div>
  );
};

export default TeamCard;
