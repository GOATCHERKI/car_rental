import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/owner/Title'


const AddCar = () => {

    const [image, setImage] = useState()
    const [car, setCar] = useState({
            brand: '',
            model: '',
            year: 0,
            category:'',
            seating_capacity: 0,
            fuel_type:'',
            transmission:'',
            pricePerDay: 0,
            location:'',
            description:'',
    })

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
    }
  return (
     <div className='px-4 py-10 md:px-10 flex-1'>
        <Title title="Add New Car" subTitle="Fill the details to add a new car for rent, inlcude pricing and description."/>

        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
            <div className='flex items-center gap-2 w-full'>
                <label htmlFor="car-image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
                    <input type="file" id="car-image" accept="image/*" hidden onChange={e=> setImage(e.target.files[0])}/>
                </label>
                <p className='text-sm text-gray-500'>Upload a picture of your car</p>
            </div>
        </form>
    </div>
  )
}

export default AddCar