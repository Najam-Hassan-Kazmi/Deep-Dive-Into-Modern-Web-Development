import Part from "./Part"
import Total from "./Total"

// For printing the name of the specific part and the number of exercises in there.
const Content = ({ content }) => {
    console.log("Content says: ", content)

    let total = 0
    console.log("Total value check 1: ", total)    
    total = content.reduce((sum, part) => {
        console.log("Inside Reduce", total);
        
        return sum + part.exercises
    }, 0)
    console.log("Total value check 2: ", total)    

    return (   // The "Part" component has been called 3 times for 3 parts. This means that the component prints one part's details at a time.
        <div>
            {content.map(part => {
                return (
                    <div key={part.id}>
                        {console.log("Content says again: ", part)}
                        < Part part={part.name} exercise={part.exercises} />
                        {/* {total = <Total exercises={part.exercises} total={total} />} */}
                    </div>
                )
            })}
            <p><strong>Total of {total} exercises.</strong></p>
        </div>
    )
}

export default Content