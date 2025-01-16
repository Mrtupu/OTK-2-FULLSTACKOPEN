import { useEffect, useState } from 'react'
import axios from 'axios'
import PersonService from './services/persons'
import Person from './components/Person'
import Notification from './components/Notification' 



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [gg, setgg] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  
  useEffect(() => {
    PersonService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  
  
  const filteredPersons = gg.length > 0
  ? persons.filter(person => person.name.match(gg))
  : persons
  
  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map(name => name.name)

    if(names.includes(newName)) {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(result) {
        const personID = persons.find(person => newName === person.name
          ? person.id : null
        )
        const changedPerson = {...personID, number: newNumber}

        PersonService
          .update (personID.id, changedPerson).then(returnedPerson => {
            setPersons(persons.map(person => 
              person.id !== personID.id 
              ? person 
              : returnedPerson
            ))
          })
          setSuccessMessage(` ${newName} Has been updated`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 2000)
          setNewName('')
          setNewNumber('')
      }
    } else {
    const nameObject = {
      name: newName,
      number: newNumber,
    }
     PersonService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setSuccessMessage(` ${newName} Has been added`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 2000)
        setNewName('')
        setNewNumber('')
      })
    }     
  }
  
  const persontoDelete = (id) => {
    const person = persons.find(n => n.id === id)
    const result = window.confirm(`Delete ${person.name}?`)
    if(result) {
      PersonService
        .deletePerson(id)
          .then(() => {
            setPersons(persons.filter(person => person.id !== id))
            setSuccessMessage(` ${person.name} was deteled`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 2000)
          })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Notification message = {successMessage}/>
      <h2>Phonebook</h2>
      <form>
        <div>Show with <input value={gg} onChange={(event) => setgg(event.target.value)} /></div>
      </form>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
          <div>name: <input value={newName} onChange={handleNameChange} /></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
          <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => 
        <Person key={person.id} person={person} number={person.number} deletePerson={() => persontoDelete(person.id)}/>
        )}
    </ul>
    </div>
  )

}

export default App
