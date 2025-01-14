import React from "react";
import "../../index.css";
import { IoClose } from "react-icons/io5";

const Banner = ({setActive}) => {
  return (
    <div className="news-ticker-container -z-10">
      <div className="news-ticker">
        <span className="news-text">
            Currently, Ninja Notes is serving first-year students and is in the process of expanding our services to include all semesters. Please stay tuned!! 
        </span>
        
      </div>
      <div>
      <IoClose onClick={() => setActive(false)} className=" absolute right-3 top-4 cursor-pointer text-white"/>
      </div>
    </div>
  );
};

export default Banner;
