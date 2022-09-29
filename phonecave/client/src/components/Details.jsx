import React from "react";
import { Link } from "react-router-dom";

function Details(props) {
  const { name, id } = props.phone;

  return (
    <Link to={`/${id}`}>
      <div className="flex flex-col items-center justify-center">
      <div className="w-52 m-5  border-2 border-[#888DA7] flex flex-col items-center justify-center ">
        <p>{name}</p>
        </div>
      </div>
    </Link>
  );
}

export default Details;
