import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Part = ({props}) => {
  return (
    <div>
      <li>{props.Content}</li>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
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
      }
    ]
  }

  return (
    <div>
      <Content course = {course} />
    </div>
  )
}

export default App
