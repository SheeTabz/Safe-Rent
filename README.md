# SAFE RENT
***

## Describtion
This is a platform that enables users to be able to book or rent cars of their choice at affordable prices for their personal use.


## Site Demo
Use the link provided to navigate to Safe Rent website .
[Safe Rent](https://safe-rent.vercel.app//)<br>

## Technologies used & Features
- Well designed and responsive UI
- React.js
- CSS3
- Tailwind css
- API built by Ruby on Rails.

## Future-implementations 
- React animation libraries (framer motion animation libraries)

## Contribution
If you need to contribute to this project follow the steps below:<br>
- Fork the repo first (`fork`)
- Clone the repo(`git clone <repo link>`)
- Create a branch where you will add changes (`git branch -b <branchname>`)
- Add the changes (`git add .`)
- Commit changes (`git commit -m"contributing changes"`)
- Push your changes (`git push origin <branchname>`)

In the project directory, you can run:
**
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Code Samples

```JavaScript
import React from 'react'
import { Link} from 'react-router-dom'
import CarCard from './CarCard'

function CarList({cars ,onClick}) {
return (
    <div className='container m-auto mt-6 grid grid-cols-3 gap-y-3'>
        {cars.map((car,index)=>{
            return <Link to={`/cars/${car.id}`} onClick={()=> onClick(car.id)}>
            <div className=' '>
             <CarCard
        type ={car.name}
        level ={car.level}
         condition={car.conditioning}
          transition={car.transmision}
           clas={car.level}
            price={car.price}
            image={car.image_url}/>
            </div>
            </Link>
        })}  
    </div>
  )
}
export default CarList
```
## Backend repo
This is the repository for the backend repositories. <br/>
[Safe Rent Backend](https://github.com/SheeTabz/Safe-Rent-Backend)


## Author
### Name : [TABITHA MURIITHI](https://github.com/SheeTabz)
### Contact Info :  [wmuriithitabitha@gmail.com](wmuriithitabitha@gmail.com)

## License information.
### MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

