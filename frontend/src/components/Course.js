import styled from "styled-components";

const Course = ({ course }) => {

    const CourseDiv = styled.div`
        background-color: ${course.is_active ? "green": "red"};
    `;

    return (
        <CourseDiv>
            <h2>{course.title} {course.course_date}</h2>
        </CourseDiv>
    )
}

export default Course
