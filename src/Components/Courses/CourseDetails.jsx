import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PdfCourseDetails from "./PdfCourseDetails";
import { Button } from "flowbite-react";
import download from '/images/download.gif'

const CourseDetails = () => {
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();
  const [allCourses, setCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState({});
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  useEffect(() => {
    const data = allCourses.find((course) => course.id == id);
    setCourseDetails(data);
  }, [allCourses]);
  return (
    <div className="bg-white dark:bg-gray-300 shadow-lg rounded-lg p-6">
      <div className="flex flex-col mb-6">
        <div className="rounded-lg overflow-hidden">
          <img
            src={courseDetails?.image}
            alt="Course Image"
            className="object-cover mx-auto h-[400px] rounded-lg"
          />
        </div>
        <div className="ml-5 mt-5">
          <h2 className="text-2xl font-bold mb-1">{courseDetails?.title}</h2>
          <p className="text-gray-600">{courseDetails?.author}</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Course Description</h3>
        <p className="text-gray-700">
          {courseDetails?.short_description}
          {courseDetails?.long_description}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">This course includes:</h3>
        <ul className="list-disc list-inside">
          <li>{courseDetails?.course_details?.level}</li>
          <li>{courseDetails?.course_details?.lessons}</li>
          <li>{courseDetails?.course_details?.duration}</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">What you'll learn</h3>
        <ul className="list-disc list-inside">
          <li>Develop a comprehensive digital marketing strategy</li>
          <li>Optimize websites for search engines (SEO)</li>
          <li>Create engaging content for social media marketing</li>
          <li>Utilize email marketing to drive customer engagement</li>
        </ul>
      </div>
      <div className="flex justify-end mt-6 items-center">
        <Link
          to={"/checkout"}
          className="bg-themeColor text-white px-4 py-2 rounded-lg mr-2"
        >
          Get premimum access
        </Link>

        <button className="bg-light border-blue-600 flex items-center justify-center gap-3 border-2 px-2 rounded-lg hover:border-themeColor" onClick={() => setOpenModal(true)}>Download PDF <span><img src={download} alt="" /></span></button>
        <PdfCourseDetails openModal={openModal} setOpenModal={setOpenModal} courseDetails={courseDetails} />
      </div>
    </div>
  );
};

export default CourseDetails;
