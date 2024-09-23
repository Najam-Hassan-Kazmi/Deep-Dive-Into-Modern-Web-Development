import {useState} from "react";

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [poor, setPoor] = useState(0)

    const handleGood = () => {
        setGood(good+1)
    }
    const handleNeutral = () => {
        setNeutral(neutral+1)
    }
    const handlePoor = () => {
        setPoor(poor+1)
    }

    let total = good+neutral+poor


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

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>{props.name}</button>
    )
}

const Statistics = (props) => {
    if(props.total>0){
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

    else {
        return (
            <div>
                <h1>Statistics</h1>
                <h3>No Feedback Given</h3>
            </div>
        )
    }
}

const StatisticLine = (props) => {
    return(
        <tbody>
            <tr>
                <td>{props.text}:</td><td>{props.var}</td>
            </tr>
        </tbody>
    )
}

export default App