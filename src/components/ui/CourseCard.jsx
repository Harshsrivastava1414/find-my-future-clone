const CourseCard = ({ imageUrl, title, classes, date, time }) => (
  <div className="border border-orange-200 p-4 rounded-xl shadow-md hover:scale-105 transition-transform bg-white">
    <img
      src={imageUrl}
      alt={title}
      className="rounded-lg w-full h-40 object-cover mb-4"
    />
    <h2 className="text-lg font-bold text-center">{title}</h2>
    <p className="text-center text-gray-700 text-sm mt-1">Class: {classes}</p>
    <p className="text-center text-gray-600 text-sm mt-1">
      Date: {date} | Time: {time}
    </p>
    <div className="flex justify-around mt-4">
      <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded">
        EXPLORE
      </button>
      <button className="bg-orange-400 text-white px-4 py-1 rounded shadow">
        JOIN NOW
      </button>
    </div>
  </div>
);

export default CourseCard;
