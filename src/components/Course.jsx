const Course = ({ courses }) => {
    console.log("course", courses)
      return (
        <>
            <h1>Web development curriculum</h1>
            {courses.map(course=>
                <div key={course.id}>
                <Header key={course.id} name={course.name}/>
                <Content key={course.parts.id} parts={course.parts}/>
                <Total key={course.parts.id} parts={course.parts} />
                </div>
            )}
        </>
      )
    }
    
const Header = ({ name }) => {
    console.log({name})
    return (
    <div>
        <h2>{name}</h2>
    </div>
    )
}

const Content = ({ parts }) => {
    console.log("Content", parts)

    return (
    <div>
        {parts.map(part=>
        <Part key={part.id} part={part} />
        )}
    </div>
    )
}

const Total = ({ parts }) => {
    console.log("Total", parts)
    const sum = parts.reduce(
    (s, p) => s + p.exercises, 0,
    )
    console.log(sum)
    return (
    <p style={{fontWeight: "bold"}}>Total of exercises {sum} exercises</p>
    )
}

const Part = ({ part }) => {
    console.log("Part", part)

    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Course;