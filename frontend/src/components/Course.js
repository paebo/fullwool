import { useState } from "react"
import styled from "styled-components";

const Course = ({ course }) => {
    const [isOpen, setIsOpen] = useState(false)

    const CourseDiv = styled.div`
        background-color: ${course.is_active ? "#76FF03" : "#FF3D00"};
    `;

    const DropDownDiv = styled.div`
        background-color: ${course.is_active ? "#228b22" : "#8B0000"};
    `;

    const openCloseDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <CourseDiv className="courseCard" onClick={openCloseDropdown}>
                <div>
                    {course.title}
                </div>
                <div>
                    {course.course_date.substring(0, 10)} {course.course_date.substring(11, 16)}
                </div>
                {isOpen && (
                    <DropDownDiv className="dropDown">{course.details}</DropDownDiv>
                )}
        </CourseDiv>
    )
}

export default Course
