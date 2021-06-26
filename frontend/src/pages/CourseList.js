import { useState, useEffect } from "react";

import Course from "../components/Course"

const CourseList = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses()
            setCourses(coursesFromServer)
        }
        getCourses()
    }, [])

    const fetchCourses = async () => {
        const res = await fetch("http://localhost:8088/courses")
        const data = await res.json();
        return data
    }

    return (
        <div>
            <h1>Courses</h1>
            <div>
                {courses.map((course) => (
                <Course key={course.id} course={course}
                />
                ))}
            </div>
        </div>
    );
}

export default CourseList
