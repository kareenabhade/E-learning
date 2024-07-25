import { createContext, useContext, useEffect, useState } from "react";

const CourseContext = createContext();

export const CourseContextProvider  = ({children})=>{
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({});

    const fetchCourses = async()=>{
        try {
            const response = await fetch('/api/courses/all');
            const data = await response.json();

            setCourses(data.allCourses);

        } catch (error) {
            console.error(error)
        }
    }

    const fetchCourse = async(id)=>{
        try {
            const response = await fetch(`/api/courses/${id}`);
            const data = await response.json();

            setCourse(data.singleCourse);
        } catch (error) {
           console.error(error); 
        }
    }

    useEffect(()=>{
        fetchCourses();
    },[])


    return <CourseContext.Provider value={{courses, fetchCourses, course, fetchCourse}} >{children}
    </CourseContext.Provider>
}

export const CourseData = ()=> useContext(CourseContext);