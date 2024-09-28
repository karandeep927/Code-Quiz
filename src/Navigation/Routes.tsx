import {createBrowserRouter} from 'react-router-dom'
import Get_started from '../pages/Get_started'
import Home from '../pages/Home'
import Result from '../pages/Result'
import Quizes from '../pages/Quizes'
import Questions from '../pages/Questions'
import NavBar from '../components/NavBar'
import About from '../pages/About'



export const router = createBrowserRouter([
    {
        path:'/',
        element:<NavBar/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/quiz',
                element:<Quizes />,
            },
            {
                path:'/about',
                element:<About/>
            }
        
        ]
    },
    {
        path:'/get-start',
        element:<Get_started/>
    },
    {
        path:'/result',
        element:<Result/>
    },
    {
        path:'/quiz/:quizName/:quizLevel',
        element:<Questions />
    }
])

