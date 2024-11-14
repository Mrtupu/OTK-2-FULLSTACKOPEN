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

const Content = (props) => {
  const {content} = props
  return (
    <div>
      <ul>
        {content.map(part => 
        <Part key = {part.id} part = {part}/>
         )}
      </ul>
    </div>
  )
}

const Part = ({props}) => {
  return (
    <div>
      <ul>
        <li> {props} </li>
      </ul>
    </div>
  )
}

const Course = (props) => {
  const {course} = props
  return (
    <div>
      <Header header = {course.name}/>
      <Content content = {course.parts}/>
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
      <Course course = {course} />
    </div>
  )
}

export default App
