import {useState} from "react";   // Importing the useState hook from React to manage state within the component.

const App = () => {   // App component: the main component that contains the feedback form and statistics.
    const [good, setGood] = useState(0)   // State to track the count of "Good" feedback.
    const [neutral, setNeutral] = useState(0)   // State to track the count of "Neutral" feedback.
    const [poor, setPoor] = useState(0)   // State to track the count of "Poor" feedback.

    const handleGood = () => {    // Event handlers to update the state for each feedback option.
        setGood(good+1)   // Increment the "Good" count by 1.
    }
    const handleNeutral = () => {
        setNeutral(neutral+1)
    }
    const handlePoor = () => {
        setPoor(poor+1)
    }

    let total = good+neutral+poor    // Calculate the total number of feedback responses.


    return(
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={handleGood} name={"Good"}/>
            <Button handleClick={handleNeutral} name={"Neutral"}/>
            <Button handleClick={handlePoor} name={"Poor"}/>
            <br/><br/>
            <Statistics good={good} neutral={neutral} poor={poor} total={total}/>
        </div>
    )
}

const Button = (props) => {   // Button component: renders a button that takes a click event and a label as props.
    return(
        <button onClick={props.handleClick}>{props.name}</button>
    )
}

const Statistics = (props) => {   // Statistics component: displays feedback statistics based on the feedback counts.
    if(props.total>0){       // Check if feedback has been given (i.e., if total feedback > 0).
        return(
            <div>
                <h1>Statistics</h1>
                <table>
                    <StatisticLine text={"Good"} var={props.good}/>
                    <StatisticLine text={"Neutral"} var={props.neutral}/>
                    <StatisticLine text={"Poor"} var={props.poor}/>
                    <StatisticLine text={"Total"} var={props.total}/>
                    <StatisticLine text={"Average"} var={(props.good*1+props.poor*-1)/props.total}/>
                    <StatisticLine text={"Positive"} var={(props.good / props.total) * 100}/>
                </table>
            </div>
        )
    }

    else {    // If no feedback has been given, display a message indicating so.
        return (
            <div>
                <h1>Statistics</h1>
                <h3>No Feedback Given</h3>
            </div>
        )
    }
}

const StatisticLine = (props) => {   // StatisticLine component: displays a row with a label (text) and a value (var) in the statistics table.
    return(
        <tbody>
            <tr>
                <td>{props.text}:</td><td>{props.var}</td>
            </tr>
        </tbody>
    )
}

export default App   // Export the App component as the default export.