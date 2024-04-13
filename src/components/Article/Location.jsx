import { useState } from "react";

const Location = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="relative">
        <input
          className="w-full pl-6 border-b outline-none border-black p-2"
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="absolute right-0 inset-y-0 text-black mt-1"
          onClick={() => setLocation("")}
        >
          X
        </button>
        <div className="absolute  top-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1233)">
              <path
                d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                fill="black"
              />
              <path
                d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1233">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <p className="text-gray-600 text-xs my-2">
        Your location will help us serve better and extend a personalised
        experience.
      </p>
      <div className="mt-4">
        <div className="flex gap-2 ">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
              fill="black"
            />
          </svg>
          <h2 className="text-black mb-4 ">RECOMMENDED GROUPS</h2>
        </div>
        {["Leisure", "Activism", "MBA", "Philosophy"].map((group) => (
          <div key={group} className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <span className="font-medium text-sm">{group}</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full">
              Follow
            </button>
          </div>
        ))}
        <a href="#" className="text-blue-500 text-sm text-right">
          See More...
        </a>
      </div>
    </div>
  );
};

export default Location;
