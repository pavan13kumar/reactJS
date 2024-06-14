import {Route, Routes} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import NoPage from './NoPage'
function MainPage(){
    return(
     <Routes>
        <Route path='/' element= {<Home/>}></Route>  {/* default render page */}
        <Route path='about' element={<About/>}/>    {/* type /about at the end of url */}    

        <Route path='*' element={<NoPage/>}/>        {/* type any thing other than above paths */}
     </Routes>
    )
}

export default MainPage



//NOTE:
// default nav page (path='/')
// for invalid page address (path='*')