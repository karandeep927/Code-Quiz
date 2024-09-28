import {RouterProvider} from 'react-router-dom'
import {router} from './Navigation/Routes.tsx'
import { QuizContextProvider } from './context/context.tsx'

function App() {

  return (
    <QuizContextProvider>
      <RouterProvider router={router}/>
    </QuizContextProvider>
  )
}

export default App
