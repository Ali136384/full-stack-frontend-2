import React from "react";
import "./Add.scss";
function Add() {
  return (
    <>
      <div className="add grid grid-cols-2 px-[60px] py-6 gap-8">
        <div className=" flex flex-col gap-7">
          <label className=" text-[20px] opacity-70" htmlFor="">
            Title
          </label>
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="text"
            placeholder="e.g I Will something I'm really good in"
          />
          <label className="text-[20px] opacity-70" htmlFor="">
            Category
          </label>
          <select className=" outline-none border-2 p-2" name="cats" id="cats">
            <option value="design">Design</option>
            <option value="Web">Web Development</option>
            <option value="Animation">Animation</option>
            <option value="music">Music</option>
          </select>
          <label className="text-[20px] opacity-70" htmlFor="cover-img">
            Cover Image
          </label>
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="file"
            name=""
            id="cover-img"
          />{" "}
          <label className="text-[20px] opacity-70" htmlFor="Images">
            Upload Images
          </label>
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="file"
            multiple
            name=""
            id="Images"
          />
          <label className="text-[20px] opacity-70" htmlFor="">
            Description
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="16"
            placeholder="Write prief description to introduce your service to the customers"
          ></textarea>
        </div>

        <div className=" flex flex-col gap-5">
          <h2 className="font-bold text-[30px]">Add New Gig</h2>
          <label className="text-[20px] opacity-70" htmlFor="">
            Service Title
          </label>
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="text"
            placeholder="e.g web pages design"
          />
          <label className="text-[20px] opacity-70" htmlFor="">
            Short Description
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Descripe shortly your service"
          ></textarea>
          <label className="text-[20px] opacity-70" htmlFor="">
            Delivery Time (e.g 3 days)
          </label>
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="text"
            name=""
            id=""
          />

          <label className="text-[20px] opacity-70" htmlFor="">
            Revision
          </label>
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="number"
          />

          <label className="text-[20px] opacity-70" htmlFor="">
            Add Feature
          </label>
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="text"
            name=""
            id=""
            placeholder="e.g Hosting"
          />
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="text"
            name=""
            id=""
            placeholder="e.g 24/7 Support"
          />
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="text"
            name=""
            id=""
            placeholder="e.g Support"
          />
          <input
            className="border-2 p-2 rounded-md outline-none"
            type="text"
            name=""
            id=""
            placeholder="e.g Clean Code"
          />
        </div>
        {/*  */}
        <button className=" bg-green-400 text-white py-2 ">Create</button>
      </div>
    </>
  );
}

export default Add;
