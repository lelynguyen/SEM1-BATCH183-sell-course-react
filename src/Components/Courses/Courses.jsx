import React, { useContext } from "react";
import SingleCourse from "../Home/SingleCourse";
import { CourseContext } from "../../Contexts/CoursesContext";

const Courses = () => {
  const { coursesData } = useContext(CourseContext);
  return (
    <div
      className="mt-5 p-2 text-light pb-5"
      style={{ background: "rgb(0,0,0, .6)" }}
    >
      <h2 className="text-xl">Popular Courses</h2>
      <hr className="my-3 border-themeColor sm:mx-auto dark:border-themeColor3 lg:my-4" />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <SingleCourse data={coursesData} />
      </div>
    </div>
  );
};

export default Courses;
