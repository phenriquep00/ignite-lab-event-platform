import { gql, useQuery } from "@apollo/client"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from "react"
import { client } from './lib/apollo'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}

function App(){
  const { data } = useQuery<{ lessons: Lesson }>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <ul>
      {data?.lessons.map((lesson: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
