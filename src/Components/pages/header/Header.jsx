import '../header/header.css'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='main'>
        <header>
            <div className="logo">
                <Link to='/' className='logotype'>Website</Link>
            </div>
            <div>
            <Link to='/posts'>CreatePost</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </div>
        </header>
    </div>
    <div className="container">
    <Outlet/>
    </div>
    </>
  )
}

export default Header