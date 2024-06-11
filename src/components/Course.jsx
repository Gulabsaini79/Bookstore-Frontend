import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className="max-w-screen-2x2 container mx-auto md:px-20 px-4">
      <div className="mt-26 item-center justify-center text-center">
        <h1 className="text-2x1 md:text-4x1">We' re delighted to have you{" "}
        <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia quis odio nesciunt porro corporis ratione tenetur nisi ducimus? Dignissimos totam enim nobis veritatis. Ratione facilis sit iure. Soluta, facere.
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-4">
        {list.map((item)=>(
            <Cards key={item.id} item={item}/>
           ))}

      </div>
    </div>
    </>
  );
}

export default Course
