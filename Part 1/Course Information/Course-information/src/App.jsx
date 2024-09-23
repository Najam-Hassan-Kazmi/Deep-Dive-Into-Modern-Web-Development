const App = () => {   //" App" is always our primary component.
    const course = {   // This is an object named "course"
        name: 'Half Stack application development',   // This is the first property of the object.
        parts: [   // Similarly, an array property.
        {
            name: 'Fundamentals of React',
            exercises1: 10
        },
        {
            name: 'Using props to pass data',
            exercises2: 7
        },
        {
            name: 'State of a Component',
            exercises3: 14
        }
    ]
}

    return (   // Here, we will be calling the components that have been created to serve our purpose.
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

// For printing the name of the course.
const Header = ({course}) => {   // "course.name" has been passed to "course", both in parentheses(unlike other programming languages) as we need the value stored inside the variables,
    console.log(course)   // This prints the value of course on the console tab.

    return(
        <div>
            <p>{course}</p>
        </div>
    )
}

// For printing the name of the specific part and the number of exercises in there.
const Content = ({parts}) => {
    console.log(parts)

    return(   // The "Part" component has been called 3 times for 3 parts. This means that the component prints one part's details at a time.
        <div>
            <p>
                <Part part={parts[0].name} exercise={parts[0].exercises1}/>
                <Part part={parts[1].name} exercise={parts[1].exercises2}/>
                <Part part={parts[2].name} exercise={parts[2].exercises3}/>
            </p>
        </div>
    )
}

// For printing the name and number of exercises one by one.
const Part = ({part, exercise}) => {
    console.log(part, exercise)

    return(
        <div>
            <p>
                {part} {exercise}
            </p>
        </div>
    )
}

// For printing the total number of exercises in this course.
const Total = ({parts}) => {
    console.log(parts)

    return(   // A little bit of maths done on the exercises passed and the sum is printed. Pretty simple.😉
        <div>
            <p>
                Number of exercises {parts[0].exercises1+parts[1].exercises2+parts[2].exercises3}
            </p>
        </div>
    )
}

export default App