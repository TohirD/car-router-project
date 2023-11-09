import { useState } from 'react'
import '../car-form/createCar.css'
import { useForm } from 'react-hook-form'

const clearData = {
  price: '',
  name: '',
  image: ''
}

const CreateCarForm = () => {
  const [data, setData] = useState(clearData)

  const {register, reset, handleSubmit} = useForm({
    mode: 'onChange'
  })

  const createCar = data => {
    reset()
  }

  return (
    <div>
        <div className="center" onSubmit={handleSubmit(createCar)}>
        <form className='item'>
            <input 
            {...register('name', {required: true})}
            placeholder='Name'
            />
            <input
            {...register('price', {required: true})} 
            placeholder='Price'
            />
            <input 
            {...register('image', {required: true})}
            placeholder='Image'
            />
            <textarea cols="30" rows="10"></textarea>
            <button className='btn'>Create</button>
        </form>
        </div>
    </div>
  )
}

export default CreateCarForm