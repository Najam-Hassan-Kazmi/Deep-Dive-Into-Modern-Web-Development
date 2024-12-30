import { useState, useEffect } from 'react'
import Search from "./components/Search"
import Add from './components/Add'
import Book from './components/Book'
import usingServer from "./services/contacts"
import Notification from "./components/Notification"

const App = () => { // Starting off with state variables to manage contacts, input fields, search, and notifications
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  useEffect(() => {  // Effect hook to load contacts from the server when the component is mounted
    console.log("Inside Effect.")
    usingServer.getAll().then(allContacts => {
      console.log("Response => ", allContacts)
      setPersons(allContacts)
    })
  }, [])

  const newContact = (event) => {  // Function to handle adding a new contact or updating an existing contact
    event.preventDefault()
    console.log("Clicked", event.target)
    if (persons.some(person => person.name === newName)) {     // Check if the person already exists
      const person = persons.find(person => person.name === newName)
      // const name = person.name --- All of this commented code is not needed now
      // const id = person.id
      const updatedContact = {...person, number: newNumber}
      // setPersons(persons.map(p => p.id === updatedContact.id ? updatedContact : p))
      if(window.confirm(`${person.name} is already your friend. Forgot? Change his number?`)) {
        usingServer.replace(person.id, updatedContact).then(returnedContact => {
          setPersons(persons.map(p => p.id === returnedContact.id ? returnedContact : p ))
        })
      }
      // alert(`${newName} is already added to your damn phonebook`)
    } else {
      console.log("Does not exist!")
      const contactObject = {         // If the person does not exist, create a new contact
        name: newName,
        number: newNumber,
        // id: String(persons.length + 1)
      }
      usingServer.add(contactObject).then(contactObject => {
        setPersons(persons.concat(contactObject))
      })
      setNewName("")
      setNewNumber("") 
    }
    setNotificationType("green")
    setNotification(`Added ${newName}`)     // Show a notification that a new contact has been added
  }

  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    if(window.confirm(`Do you really want to forget your best friend: ${person.name}?`)) {
      usingServer.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      }).catch(() => {         // Show error notification if the contact removal fails
        setNotificationType("red")
        setNotification(`Your contact: "${person.name}" might already have been removed.`)
      })
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} type={notificationType}/>        {/* Notification component displays success or error messages */}
      <h2>Search Contact:</h2>
      <Search search={search} handleSearch={handleSearch}/>       {/* Search component to filter contacts */}
      <form>
        <div>
          <h2>Add new:</h2>
          {/* name: <input value={newName} onChange={handleNewName} /><br />
          number: <input type="text" value={newNumber} onChange={handleNewNumber} /> */}
          <Add newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}/>         {/* Add component for new name and number input */}
        </div>
        <div>
          <button onClick={newContact}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {        {/* Map through persons and filter by search query */}
          if (person.name.toLowerCase().includes(search.toLowerCase())) {
            return (
              <div key={person.id}>
                {/* debug: {newName} */}
                {/* <li>{person.name} {person.number}</li> */}
                <Book name={person.name} number={person.number} handleDelete={() => handleDelete(person.id)} />                 {/* Book component displays name, number, and delete button. You can call it Phonebook */}
              </div>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default App