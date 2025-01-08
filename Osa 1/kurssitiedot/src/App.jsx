import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = (props) => {
  return (
    <div>
      <h1> {props.header} </h1>
    </div>
  )
}

const Content = ({parts}) => {
  const allexercises = 0
  return (
    <div>
        {parts.map(part => 
        <Part key = {part.id} name = {part.name} exercises={part.exercises}/>
        )}
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({parts}) => {
const initialvalue = 0
const exercises = parts.map(exercises => exercises.exercises)
const total = exercises.reduce((accumulator, currentvalue) => accumulator + currentvalue, initialvalue,
);
console.log(total)
return (
  <div>
    <p>total of {total} exercises</p>
  </div>
)
}

const Course = (props) => {
  const {course} = props
  return (
    <div>
      <Header header = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundimentals of React',
        exercises: 10,
        id: 1
      },
      {
        name:'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'status',
        exercises: 14,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course = {course} />
    </div>
  )
}

export default App
