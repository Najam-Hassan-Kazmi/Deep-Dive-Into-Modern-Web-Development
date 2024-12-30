import Course from "./components/Course"

const App = () => {   //" App" is always our primary component.
  const courses = [   // This is an object named "course"
    {
      id: 1,
      name: 'Half Stack application development',   // This is the first property of the object.
      parts: [   // Similarly, an array property.
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          id: 2,
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          id: 3,
          name: 'State of a Component',
          exercises: 14
        },
        {
          id: 4,
          name: "Testing Addition of Part",
          exercises: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: "Testing Addition of new Course",
      id: 3,
      parts: [
        {
          name: "Najam", 
          exercises: 3, 
          id: 1
        }
      ]
    }
  ]


  console.log("App says:", courses);


  return (   // Here, we will be calling the components that have been created to serve our purpose.
    <Course courses={courses} />
  )
}

export default App