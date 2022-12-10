import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ColorButton from '../components/Buttons/ColorButton'
import TransButton from '../components/Buttons/TransButton'
import Footer from '../components/Footer'
import PagesTemplate from '../components/PagesTemplate'
import Reviews from '../components/Reviews'

function SingleCarPage({data, user, reviews, setReview}) {
    const [visible,setVisible]=useState(false)
    console.log(data)
    // useEffect(() =>{
    //     return data
    //     },[])
function handleReview(){
    setVisible(!visible)
    console.log(visible);
    
}
    if (Object.keys(user).length > 0){
        return (
            <>
            <PagesTemplate pageData="OUR CARS"/>
            <div className='bg-red-500 mt-6 container m-auto'>
                <div className='grid grid-cols-2  '>
                    <div  className='w-[600px] h-76 flex flex-col spce-x-4'>
                        <img className="w-full" src={data.image_url} alt="Car image"/>
                        <div className='flex space-x-4 pt-6'>
                        <TransButton data="Reviews" onClick={handleReview}/>
                        <TransButton data="View information"/>
                        {/* <TransButton data=""/> */}
                        </div>   

                    </div>
                    <div  className='bg-red-400 h-76 w-[400px] flex flex-col  border-2 border-gray-400'>
                        <h1 className='text-center font-bold text-2xl py-5'> {data.name}</h1>
                        <div className=' flex flex-col space-y-7 '>
             <div className='py-5 flex justify-around font-light'>
               <h1 >Class:</h1>
               <p className='text-orange-500'>{data.level}</p>
               </div>
               <div className=' py-5 flex justify-around font-light'>
               <h1 >Class:</h1>
               <p className='text-orange-500'>{data.level}</p>
               </div>
               <div className='py-5  flex justify-around font-light'>
               <h1 >Class:</h1>
               <p className='text-orange-500'>{data.level}</p>
               </div>
               <div className=' py-5  flex justify-around font-light'>
               <h1 >Class:</h1>
               <p className='text-orange-500'>{data.level}</p>
               </div>
               <div className='py-5 flex justify-around font-light'>
               <h1 >Class:</h1>
               <p className='text-orange-500'>{data.level}</p>
               </div>
               <div className='py-5 flex justify-around font-light'>
               <ColorButton data="Rent this car" className=""/>
               </div>
              
                        </div>
                    </div>
                </div>

                {
                            visible ? (
                                <div >
                                <Reviews reviews={reviews} setReview={setReview} user={user} data={data}/>
    
                            </div>
                            ) 
                            : ""
                        }

            </div>
            <Footer/>
            </>
          )
    }else{
        return (
            <>
            <PagesTemplate pageData="OUR CARS"/>
            <div className=' h-[50vh] flex flex-col justify-center items-center space-y-4' >
              
                        <h1 className='font-bold text-3xl'>No authorization found</h1>
                        <p>This page is not publically available</p>
                        <p>To access kindly log in first</p>
                        <Link to='/login'>
                        <button  className='button'>Sign in</button>
                        </Link>  
            </div>
            <Footer/>
            </>
          )
    }

}

export default SingleCarPage