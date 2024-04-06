import { createContext, useEffect, useState } from "react"



export const CourseContext = createContext()

export const CourseContextProvider = ({children}) => {
    const [coursesData, setCoursesData] = useState([])
    useEffect(()=> {
        fetch("/fakeData.json")
        .then(res => res.json())
        .then(data => setCoursesData(data))
    }, [])
    const contextData = {
        coursesData
    }
    return(
        <CourseContext.Provider value={contextData}>{children}</CourseContext.Provider>
    )
}