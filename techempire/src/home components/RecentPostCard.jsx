import React from "react";

function RecentPostCard() {
  return (
    <div className="w-full h-auto mt-10">
      <h1 className="text-2xl">Recent Blog Post</h1>

      <div className=" flex flex-row flex-wrap justify-start h-auto">
        {/* card components */}
        <div className="h-full w-1/3 mt-5 px-3 py-3 shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg"
            className="w-full h-64 rounded-lg"
            alt=""
          />
          <h2 className="text-sm mt-3">Jimmy walker . 1 jan 2025</h2>
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl mt-2 font-extrabold">Post Title</h2>
            <i class="bx bx-link-external"></i>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
          </p>
          <div className="flex flex-row justify-start space-x-5 mt-3 w-auto">
            <h2 className="text-custom-pink bg-pink-100 px-3 w-auto rounded-xl">
              Design
            </h2>
            <h2 className="text-custom-purple bg-purple-100 px-3 w-auto rounded-xl">
              Research
            </h2>
            <h2 className="text-custom-blue bg-blue-100 px-3 w-auto rounded-xl">
              Technology
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPostCard;
