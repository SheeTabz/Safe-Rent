import React from 'react'
import ColorButton from './Buttons/ColorButton'
import Headers from './Headers'

function AboutUs() {
    const data = ['A', 'B','O','U','T','.','U','S']
  return (
    <div className=' grafiti lg:mx-[200px] mt-[150px] flex space-x-12 justify-center items-center'>
<Headers data={data}/>
<div className='max-w-2xl space-y-3'>
    <h1 className='font-bold text-3xl'>WE PROMISE, YOU WILL HAVE THE BEST EXPERIENCE</h1>
    <p className='text-sm'>In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. Maleficia! Vel a modern perhsaps morbi. A terrenti contagium. Forsitan illud Apocalypsi, vel malum poenae horrifying fecimus.</p><br/>
    <p className='text-sm'>Ut fames cerebro enim carnis, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus. Avium, canum, fugere ferae et infecti horrenda monstra. Videmus deformis horrenda daemonum. Panduntur portae inferi. Finis accedens sentio terrore perterritus et taedium. The horror, monstra significant finem. Terror sit unum superesse sentit, ut caro eaters caule nobis.</p>
    <ColorButton data='Book Now' className='mt-6'/>
</div>
<div className='h-[500px] w-[700px] bg-no-repeat bg-cover bg-[url("http://wp.hostlin.com/zagreb/images/resource/1.png")]'></div>
    </div>
  )
}

export default AboutUs