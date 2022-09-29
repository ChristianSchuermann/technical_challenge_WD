import React from "react";
import { Link } from "react-router-dom";

function Details(props) {
  const { name, id } = props.phone;

  return (
    <Link to={`/${id}`}>
      <div className="flex flex-col items-center justify-center">
        <div
          className="w-52 m-5  border-2 border-[#303633] flex flex-col items-center justify-center hover:bg-[#303633] hover:text-[#8BE8CB]
    duration-500 "
        >
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
}

export default Details;
