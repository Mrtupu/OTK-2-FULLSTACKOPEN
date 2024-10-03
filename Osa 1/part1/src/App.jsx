import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Content = (props) => {
  return (
    <div>
      <h> {props.course} </h>
      <p> {props.parts[0].name} {props.parts[1].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundimentals of React',
    exercises: 10
  },
  {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]

  return (
    <div>
      <Content course = {course} />
      <Content parts = {parts} />
      <Content parts = {parts} />
    </div>
  )
}

export default App
