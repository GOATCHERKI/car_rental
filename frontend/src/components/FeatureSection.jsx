import React from 'react'
import { assets, dummyCarData} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Title from './Title'
import CarCard from './CarCard'

const FeatureSection = () => {

    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <Title title='featured vehicles' subTitle='Explore our selection of vehicles for your next adventure'/>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
        {
            dummyCarData.slice(0,6).map((car)=> (
                <div key={car._id}>
                    <CarCard car={car}/>
                </div>
            ))
        }
        </div>

        <button onClick={()=> { navigate('/cars'); scrollTo(0,0) }}
        className='flex items-center justify-center gap-2 px-6 py-2 border border-border hover:bg-gray-50 rounded-md cursor-pointer mt-18'>
            View all cars <img src={assets.arrow_icon} alt="" />
        </button>
    </div>
  )
}

export default FeatureSection