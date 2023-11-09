import { useEffect, useState } from "react"
import '../car-detail/carDetail.css'
import { Link } from "react-router-dom"

const CarDetail = () => {
    const [car, setCar] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/cars`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [])


  return (
    <div>
        {car.map(cars => (
            <>
                <div className="border">
                <div className="image" style={{
                    backgroundImage: `url(${cars.image})`
                }}>
                </div>
                <div className="info">
                <h2>{cars.name}</h2>
                <p>${cars.price}</p>
                </div>
                <Link className="read" key={cars.id} to={`/carItem/${cars.id}`}>Read More</Link>
                </div>
            </>
    ))}
    </div>
  )
}


export default CarDetail