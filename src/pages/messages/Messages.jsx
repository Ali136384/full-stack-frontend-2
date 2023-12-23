import React from "react";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Messages.scss";
function Messages() {
  const message =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,est veniam? Mollitia dolore eum provident maiores, illum voluptatem, laborum repellendus aliquam, cupiditate optio facilis voluptas quaerat et animi consequuntur nesciunt!";
  return (
    <>
      <div className="my-gigs px-[160px] mt-8">
        <div className="header flex justify-between">
          <p className=" font-bold text-[30px]">Messages</p>
        </div>

        <table className="w-full mt-9 ">
          <tr className=" text-left ">
            <th>Buyur</th>
            <th>Last Message</th>
            <th>Date</th>
            {/* <th>{cureentUser?.isSeller ? "Buyur" : "Seller"}</th> */}
            <th>Action</th>
          </tr>
          <tr className="">
            <td className="mt-5 w-[137px]">Ali Haseni</td>
            <Link className="link" to="/message/123">
              <td>{message.substring(0, 100)}...</td>
            </Link>{" "}
            <td>1 day ago</td>
            <td>
              <button className=" bg-green-400 text-white w-[136px] p-2  rounded-md">
                Mark as Read
              </button>
            </td>
          </tr>{" "}
          <tr className="">
            <td className="mt-5 w-[95px]">Ali Haseni</td>
            <Link className="link" to="/message/123">
              <td>{message.substring(0, 100)}...</td>
            </Link>
            <td className="w-[137px]">1 day ago</td>
            <td>
              <button className=" bg-green-400 text-white w-[136px] p-2 rounded-md">
                Mark as Read
              </button>
            </td>
          </tr>
          {/* ////////// */}
          <tr className="">
            <td className="mt-5">Ali Haseni</td>
            <Link className="link" to="/message/123">
              <td>{message.substring(0, 100)}...</td>
            </Link>

            <td>1 day ago</td>
          </tr>{" "}
          <tr className="">
            <td className="mt-5">Ali Haseni</td>
            <Link className="link" to="/message/123">
              <td>{message.substring(0, 100)}...</td>
            </Link>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Messages;
