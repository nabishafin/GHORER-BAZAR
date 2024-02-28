import React from "react";
import Button from "../Button/Button";
import { toast } from "react-toastify";

const CoustomerDetails = () => {
  const handleClick = () => {
    toast.success(`Order placed successfully`);
  };
  return (
    <div className="text-center w-full flex justify-center items-center">
      <div className="w-1/3">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <textarea
              placeholder="Please enter address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <Button handleClick={handleClick}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoustomerDetails;
