import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleclick}> {props.text} </button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  if(props.all === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text = "good" value = {props.good}/>
      <StatisticLine text = "neutral" value = {props.neutral}/>
      <StatisticLine text = "bad" value = {props.bad}/>
      <StatisticLine text = "all" value = {props.all}/>
      <StatisticLine text = "average" value = {(props.good - props.bad) / props.all }/>
      <StatisticLine text = "positive" value = {props.good / props.all * 100}/>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handlegood = () => {
    const updatedgood = good + 1
    setGood(updatedgood)
    const updatedall = updatedgood + bad + neutral
    setAll(updatedall)
  }

  const handleneutral = () => {
    const updatedneutral = neutral + 1
    setNeutral(updatedneutral)
    const updatedall = good + bad + updatedneutral
    setAll (updatedall)

  }

  const handlebad = () => {
    const updatedbad = bad + 1
    setBad(updatedbad)
    const updatedall = good + updatedbad + neutral
    setAll(updatedall)
  }

  return (
    <div>
      <p><b>Give Feedback</b></p>
      <Button handleclick = {handlegood} text = "good"/>
      <Button handleclick = {handleneutral} text = "neutral"/>
      <Button handleclick = {handlebad} text = "bad"/>
      <p><b>statistics</b></p>
      <Statistics good={good} neutral = {neutral} bad = {bad} all = {all}/>

    </div>
  )
}

export default App

