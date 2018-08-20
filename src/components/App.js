import React, { Component } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Header, Footer } from "./layouts"
import Exercises from "./exercises/"
import { muscles, exercises } from "../store"

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    {
      /* Destructure exercises from prevState. Because of it's
    asynchronous nature, setState is used with a callback */
    }
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />

        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </React.Fragment>
    )
  }
}
