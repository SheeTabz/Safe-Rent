import React from 'react'
import ColorButton from './Buttons/ColorButton'
import Carousel from './Carousel'
import Headers from './Headers'

function OurCars() {
    const data = ['O','U','R','.','C','A','R','S']
  return (
    <div className='lg:mx-[200px] mt-[150px] flex space-x-12 justify-center items-center'>
      <Headers data={data}/>
     
      <div className='max-w-2xl space-y-5'>
    <h1 className='font-bold text-3xl'>IRRESISTABLE POWER, UNPARALLELED PRESENCE</h1>
    <p className='mb-5 text-sm'>Ut fames cerebro enim carnis, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus. Avium, canum, fugere ferae et infecti horrenda monstra. Videmus deformis horrenda daemonum. Panduntur portae inferi. Finis accedens sentio terrore perterritus et taedium. The horror, monstra significant finem. Terror sit unum superesse sentit, ut caro eaters caule nobis.</p>
<ColorButton data='Book this car' />
</div>
      <Carousel/>
     
    </div>
  )
}

export default OurCars