import { Routes, Route } from 'react-router-dom'
import './assets/global.css'
import Header from '../pages/header/Header'
import CreateCarForm from '../pages/car-form/CreateCarForm'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CarDetail from '../pages/car-detail/CarDetail'
import CarItem from '../car-item/CarItem'

const Home = () => {

  return (
    <Routes>
        <Route path='/' element={<Header/>}>
        <Route path='/posts' element={<CreateCarForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<CarDetail/>}/>
        <Route path='/carItem/:id' element={<CarItem/>}/>
        </Route>
    </Routes>
  )
}

export default Home