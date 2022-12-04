    if (user){
        return (
            <>
            <PagesTemplate pageData="OUR CARS"/>
            <div className='bg-red-500 mt-6 container m-auto'>
                <div className='grid grid-cols-2  '>
                    <div  className='w-[600px] h-76 flex flex-col spce-x-4'>
                        <img className="w-full" src={data.image_url} alt="Car image"/>
                        <div className='flex justify-around pt-6'>
                        <TransButton onClick={handleReview}/>
                        <TransButton/>
                        <TransButton/>
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
