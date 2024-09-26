import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Part = (props) => {
  return (
    <div>
      <h> {props.course} </h>
      <p> {props.part1} </p>
      <p> {props.exercises1} </p>
      <p> {props.part2} </p>
      <p> {props.exercises2} </p>
      <p> {props.part3} </p>
      <p> {props.exercises3} </p>
      <p> {props.totalexercises} </p>
      <p> {props.exercisesAll} </p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalexercises = "Total number of exercises"
  const exercisesAll = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Part course = {course} />
      <Part part1 = {part1} exercises1 = {exercises1}/>
      <Part part2 = {part2} exercises2 = {exercises2}/>
      <Part part3 = {part3} exercises3 = {exercises3}/>
      <Part totalexercises = {totalexercises} exercisesAll = {exercisesAll}/>
    </div>
  )
}

export default App
