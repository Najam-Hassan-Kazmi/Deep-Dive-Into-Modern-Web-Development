const Add = ({ newName, handleNewName, newNumber, handleNewNumber }) => // Does this need any comments?
    <div>
        name: <input value={newName} onChange={handleNewName} /><br />
        number: <input type="text" value={newNumber} onChange={handleNewNumber} />
    </div>

export default Add