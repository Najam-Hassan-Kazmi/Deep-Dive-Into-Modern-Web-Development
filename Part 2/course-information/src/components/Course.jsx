import Header from "./Header"
import Content from "./Content"

const Course = ({ courses }) => {
    console.log("Course says: ", courses);     // Logging the received courses to the console for debugging purposes
// Remember, ";" is preferred but it is not necessary.

    return (
        <div>
            {courses.map(course => {
            {/* Looping through the array of courses to render each course */}
            return (
                    <div>
                        <Header title={course.name} />{/* Adding a key for unique identification when rendering lists */}
                        <Content content={course.parts} />
                    </div>
                )
            })}
        </div>
    )
}

export default Course