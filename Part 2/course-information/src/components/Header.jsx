// For printing the name of the course.
const Header = ({ title }) => {   // "course.name" has been passed to "course", both in parentheses(unlike other programming languages) as we need the value stored inside the variables,
    console.log("Header says: ", title)   // This prints the value of course on the console tab.

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Header