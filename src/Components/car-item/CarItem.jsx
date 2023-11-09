import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import '../pages/car-detail/carDetail.css'
import { Link } from "react-router-dom"
import '../car-item/carItem.css'
import { AuthContext } from "../providers/AuthProvider"

const CarItem = () => {
    const [cars, setCar] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const goback = () => navigate(-1)

    useEffect(() => {
        fetch(`http://localhost:3000/cars/${id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [id])

    const {user} = useContext(AuthContext)
    if(!user) return <p>You are not authorized to view this page</p>

  return (
    <div className="item">
      {cars && (
        <>
          <Link className="back" onClick={goback}>Back</Link>
          <div className="border-ta">
                <div className="image" style={{
                    backgroundImage: `url(${cars.image})`
                }}>
                </div>
                <div className="info">
                <h2>{cars.name}</h2>
                <p>${cars.price}</p>
                </div>
                <Link className="read">Read More</Link>
                </div>
                <div className="comment">
                  <p>{cars.comment}</p>
                </div>
        </>
      )}
        
    </div>
  )
}

export default CarItem