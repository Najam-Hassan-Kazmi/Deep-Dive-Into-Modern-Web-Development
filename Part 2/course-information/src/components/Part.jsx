// For printing the name and number of exercises one by one.
const Part = ({ part, exercise }) => {
    console.log("Part says: ", part, exercise)

    return (
        <div>
            <p>
                {part} {exercise}
            </p>
        </div>
    )
}

export default Part