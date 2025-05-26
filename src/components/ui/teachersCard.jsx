import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="border-2 border-orange-300 rounded-xl p-4 shadow-lg max-w-md">
      <div className="mb-4">
        <img
          src={teacher.imageUrl}
          alt={teacher.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{teacher.name}</h3>
      <p className="text-center text-gray-700">{teacher.subject}</p>
      <p className="text-center text-sm text-gray-600 my-2">
        Experience: {teacher.experience} years
      </p>
      <p className="text-center text-sm text-gray-600">{teacher.description}</p>
      <div className="flex justify-around mt-4">
        <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-100">
          Explore
        </button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
