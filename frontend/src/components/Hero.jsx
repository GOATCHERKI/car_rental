import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')

    const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

    const handleSearch = (e)=>{
        e.preventDefault()
        navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
    } 

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-6 md:gap-14 bg-light text-center px-4 md:px-0 py-12 md:py-0'>

        <h1 className='text-3xl md:text-5xl font-semibold'>Cars for Rent</h1>

        <form onSubmit={handleSearch} className='flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 rounded-lg 
        md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full md:w-auto md:ml-8'>
                <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
                    <select required value={pickupLocation} onChange={(e)=> setPickupLocation(e.target.value)} className='w-full md:w-auto'>
                        <option value="">Pickup Location</option>
                        {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                    </select>
                    <p className='px-1 text-xs md:text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Select pickup location'}</p>
                </div>
                <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
                    <label htmlFor="pickup-date" className='text-sm'>Pick-up Date</label>
                    <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500 w-full md:w-auto'/>
                </div>
                <div className='flex flex-col items-start gap-2 w-full md:w-auto'>
                    <label htmlFor="return-date" className='text-sm'>Return Date</label>
                    <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id="return-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500 w-full md:w-auto'/>
                </div>
            </div>
                <button className='flex items-center justify-center gap-1 px-6 md:px-9 py-3 mt-4 md:mt-0 bg-primary hover:bg-secondary 
                text-white rounded-full cursor-pointer w-full md:w-auto'>
                    <img src={assets.search_icon} alt="search" className='brightness-300'/>
                    Search
                </button>
        </form>

        <div className='flex flex-row '>
            <img src={assets.main_car} alt="car" className='max-h-85'/>
            <img src={assets.main_car2} alt="car" className='hidden md:block md:max-h-74'/>
        </div>
    </div>
  )
}

export default Hero