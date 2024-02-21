import React from "react";
import { Link } from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ imgUrl, title, description, gitUrl, liveUrl}) => {
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl relative group" style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className="overlay absolute items-center justify-center top-0 left-0 w-full h-full bg-[#2C3531] bg-opacity-0 hidden group-hover:bg-opacity-60 transition-all duration-500">
                <Link href={gitUrl} 
                      className="h-14 w-14 mr-2 border-2 border-[#D1e8e2] relative rounded-full hover:border-[#D9B08C] hover:text-[#D9B08C] group/link">
                    <FontAwesomeIcon icon={faCode} className="h-10 w-10 text-[#D1e8e2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-[#D9B08C]"/>
                </Link>
                <Link href={liveUrl} 
                      className="h-14 w-14 border-2 border-[#D1e8e2] relative rounded-full hover:border-[#D9B08C] hover:text-[#D9B08C] group/link">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="h-10 w-10 text-[#D1e8e2] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-[#D9B08C]" />
                </Link>

            </div>
        </div>
        <div className="text-[#2C3531] rounded-b-xl mt-3 bg-[#D1e8e2] p-y-6 px-4">
            <h5 className="font-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#7cada0]">{description}</p>
        </div>
    </div>
  );
};

export default ProjectCard;