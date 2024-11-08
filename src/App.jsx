const Header = (props) => {
  console.log(props)
  const courseName = props.course.name
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  const parts = props.course.parts
  console.log(parts)

  return (
    <div>
      <Part part={parts[0].name} excercise={parts[0].exercises} />
      <Part part={parts[1].name} excercise={parts[1].exercises} />
      <Part part={parts[2].name} excercise={parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const parts = props.course.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = (props) => {
  console.log(props)

  return (
    <div>
      <p>{props.part} {props.excercise}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App
