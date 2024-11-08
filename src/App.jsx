const Course = ({ course }) => {
  <div>
    <Header course={course}/>
    <Content course={course}/>
  </div>
}

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
      <ul>
        {props.course.map(c => 
          <Part key={c.parts.id} c={c} />
        )}
      </ul>
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
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
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

  return <Course course={course} />
}

export default App
