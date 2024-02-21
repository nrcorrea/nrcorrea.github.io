import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ imgUrl, title, description, gitUrl, liveUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group aspect-w-16 aspect-h-9"
        style={{
          background: `url(${imgUrl}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay absolute inset-0 flex items-center justify-center bg-[#2C3531] bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-60 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 border-[#D1e8e2] relative rounded-full hover:border-[#D9B08C] hover:text-[#D9B08C]"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-10 w-10 text-[#D1e8e2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
          <Link
            href={liveUrl}
            className="h-14 w-14 border-2 border-[#D1e8e2] relative rounded-full hover:border-[#D9B08C] hover:text-[#D9B08C]"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-10 w-10 text-[#D1e8e2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
        </div>
      </div>
      <div className="text-[#2C3531] rounded-b-xl mt-3 bg-[#D1e8e2] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#7cada0]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
