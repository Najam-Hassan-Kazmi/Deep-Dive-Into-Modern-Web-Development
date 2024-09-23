import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [mostVoted, setMostVoted] = useState("No votes yet!")
    const [mostVotes, setMostVotes] = useState(0)

    const handleClick = () => {
        setSelected(Math.floor(Math.random()*anecdotes.length))
    }

    const handleVote = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)

        let maxVotes = 0
        let index = 0

        for(let i=0;i<anecdotes.length;i++) {
            if (newVotes[i] > maxVotes) {
                maxVotes = newVotes[i]
                index = i
            }
        }

        setMostVoted(anecdotes[index])
        setMostVotes(maxVotes)
    }

    return (
        <div>
            <h1>Anecdote of the Day</h1><br/>
            {anecdotes[selected]}<br/>
            Has {votes[selected]} votes.<br/>
            <button onClick={handleVote}>Vote</button>
            <button onClick={handleClick}>Next Anecdotes</button>
            <br/><br/>
            <h1>Anecdote with most Votes</h1><br/>
            {console.log(mostVoted)}
            {mostVoted}<br/>
            Has {mostVotes} Votes!
        </div>
    )
}

export default App