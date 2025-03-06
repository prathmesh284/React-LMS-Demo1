import Navbar from './component/Navbar'
import SideDrawer from './component/SideDrawer'
import ScrollBar from './component/ScrollBar'
import JavaTutorial from './component/JavaTutorial'
import './App.css'

 export default function App() {
  return (
    <div>
      <Navbar/>
      <ScrollBar/>
      <div className='body'>
        <SideDrawer/> 
        <div className='content'>
          <JavaTutorial/>
        </div>
      </div>
    </div>
  )
}