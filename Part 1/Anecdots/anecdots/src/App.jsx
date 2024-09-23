import { useState } from 'react'

const App = () => {        // Main component for the App
    const anecdotes = [        //Array of Anecdote Strings
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)     // State to store the index of the current selected anecdote

    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))    // State to store votes for each anecdote, initialized to an array of zeros

    const [mostVoted, setMostVoted] = useState("No votes yet!")    // State to store the anecdote with the most votes

    const [mostVotes, setMostVotes] = useState(0)    // State to store the number of votes for the most voted anecdote


    const handleClick = () => {    // Function to generate a random index for the next anecdote
        setSelected(Math.floor(Math.random()*anecdotes.length))
    }

    const handleVote = () => {    // Function to vote for the current anecdote
        const newVotes = [...votes]        // Create a copy of the current votes array
        newVotes[selected] += 1        // Increment the vote count for the selected anecdote

        setVotes(newVotes)        // Update the state with the new vote counts

        let maxVotes = 0        // Variables to track the highest vote count and its index
        let index = 0

        for(let i=0;i<anecdotes.length;i++) {        // Loop through the votes array to find the anecdote with the most votes
            if (newVotes[i] > maxVotes) {
                maxVotes = newVotes[i]
                index = i
            }
        }

        setMostVoted(anecdotes[index])        // Update the mostVoted and mostVotes states
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