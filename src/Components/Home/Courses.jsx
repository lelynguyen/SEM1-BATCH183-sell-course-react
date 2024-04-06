import Button from "../Button/Button";
import { Link } from "react-router-dom";
import SingleCourse from "./SingleCourse";
import LatestPost from "./LatestPost";
import { useContext } from "react";
import { CourseContext } from "../../Contexts/CoursesContext";

const Courses = () => {
  const { coursesData } = useContext(CourseContext);
  return (
    <div
      className="mt-5 px-2 pt-3 pb-10 text-light"
      style={{ background: "rgb(0,0,0, .6)" }}
    >
      <div className="flex justify-between items-center pt-3 pb-2">
        <div>
          <h2 className="text-2xl ml-2 text-themeColor">Popular Courses</h2>
        </div>
        <div>
          <Link to={"/courses"}>
            <Button text={"See More"}></Button>
          </Link>
        </div>
      </div>
      <hr className="my-3 border-themeColor sm:mx-auto dark:border-themeColor3 lg:my-4" />
      <div className="flex gap-3">
        <div className="grid md:w-3/4 sm:w-2/3 w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <SingleCourse data={coursesData.slice(0,10)} />
        </div>
        <div className="md:w-1/4 sm:w-1/3 hidden sm:block">
          <div className="text-themeColor text-xl">Latest Post</div>
          <hr className="my-3 border-themeColor sm:mx-auto dark:border-themeColor3 lg:my-4" />
          {<LatestPost data={coursesData} />}
        </div>
      </div>
    </div>
  );
};

export default Courses;
