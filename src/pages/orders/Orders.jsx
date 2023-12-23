import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Orders() {
  const cureentUser = {
    id: "1",
    name: "Ali Haseni",
    isSeller: true,
  };
  return (
    <>
      <div className="my-gigs px-[160px] mt-8">
        <div className="header flex justify-between">
          <p className=" font-bold text-[30px]">Orders</p>
        </div>

        <table className="w-full mt-9">
          <tr className=" text-left ">
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{cureentUser?.isSeller ? "Buyur" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr className="">
            <td className="mt-5">
              <img
                className="h-12 w-12 "
                src="data:image/png;base64,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"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>62</td>
            <td>686</td>
            <td>
              <button className=" bg-blue-400 text-white px-2 rounded-md">
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Orders;
