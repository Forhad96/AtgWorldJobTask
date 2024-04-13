import React, { useEffect, useRef, useState } from "react";
import card1 from "../../assets/images/Card1.png";

const ArticleCard = ({ title, description, author, views }) => {
  const [isDropDown,setIsDropDown] = useState(false)
    const dropDownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropDownRef.current &&
          !dropDownRef.current.contains(event.target)
        ) {
          setIsDropDown(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  const handleDropDown =()=>{
setIsDropDown(true)
  }
  return (
    <div className="border mb-4 rounded">
      <img className="max-h-[220px] w-full object-cover" src={card1} alt="" />
      <div className="p-5">
        <p className="font-medium">Article</p>
        <div className="flex justify-between items-center">
          <div className="mt-3">
            <h3 className="text-xl mb-1 md:text-2xl font-semibold">{title}</h3>
            <p className="text-[#5C5C5C] text-md md:text-xl">{description}</p>
          </div>
          <div className="relative">
            <p
              onClick={handleDropDown}
              ref={dropDownRef}
              className="font-bold text-2xl hover:text-3xl cursor-pointer"
            >
              ...
            </p>
            {isDropDown && (
              <div className=" absolute right-0 border min-w-[160px] h-[100px] bg-white z-10 shadow-lg rounded-lg ">
                <p className="text-md font-medium hover:bg-gray-200 hover:rounded hover:pl-1 delay-400 transition-all text-black mb-1 ml-3 mt-2">
                  Edit
                </p>
                <p className="text-md font-medium hover:bg-gray-200 hover:rounded hover:pl-1 delay-400 transition-all text-black mb-1 ml-3">
                  Report
                </p>
                <p className="text-md font-medium hover:bg-gray-200 hover:rounded hover:pl-1 delay-400 transition-all text-black mb-1 ml-3">
                  More options
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-3 items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-sm md:text-base font-medium">{author}</h4>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <a className="text-[#525252] text-sm md:text-base font-medium flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                    fill="#525252"
                  />
                </svg>
                <p>{views} views</p>
              </a>
              <button href="" className="btn btn-sm md:btn-md btn-square">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_968)">
                    <path
                      d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                      fill="#2D2D2D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_968">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
