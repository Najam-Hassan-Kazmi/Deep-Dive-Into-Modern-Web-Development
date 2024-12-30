// For printing the total number of exercises in this course.
const Total = ({ exercises, total }) => {
    console.log("Total says: ", exercises)

    total += exercises
    console.log("Total says again", total)
    
    return total
    // return (   // A little bit of maths done on the exercises passed and the sum is printed. Pretty simple.😉
    //     <div>
    //         <p>
    //             Number of exercises {parts[0].exercises1 + parts[1].exercises2 + parts[2].exercises3}
    //         </p>
    //     </div>
    // )
}

export default Total