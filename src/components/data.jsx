import {BsPiggyBank} from 'react-icons/bs'
import  {AiOutlineCar, AiOutlineStar} from 'react-icons/ai'
import {FiMonitor, FiAward} from 'react-icons/fi'
import {Ri24HoursLine} from 'react-icons/ri'

const navData = [
    {
        name: 'HOME',
        path: '/'
    },
    {
        name: 'ABOUT US',
        path: '/about'
    },
    {
        name: 'SERVICES',
        path: '/services'
    },
    {
        name: 'OUR CARS',
        path: '/cars'
    }
]

const services = [
    {
        name: 'Fixed Rates',
        icons: <BsPiggyBank/>,
        description: 'In omni memoria patriae religionis sunt diri historiarum. Golums, zombies et fasci'
    },
    {
        name: 'Reliable Transfers',
        icons: <AiOutlineCar/>,
        description: 'In omni memoria patriae religionis sunt diri historiarum. Golums, zombies et fasci'
    },
    {
        name: '24H Customer Service',
        icons: <Ri24HoursLine/>,
        description: 'In omni memoria patriae religionis sunt diri historiarum. Golums, zombies et fasci'
    },
    {
        name: 'Free Cancellation',
        icons: <FiMonitor/>,
        description: 'In omni memoria patriae religionis sunt diri historiarum. Golums, zombies et fasci'
    },
    {
        name: 'Award winning Service',
        icons: <FiAward/>,
        description: 'In omni memoria patriae religionis sunt diri historiarum. Golums, zombies et fasci'
    },
    {
        name: 'Quality Vehicles',
        icons: <AiOutlineStar/>,
        description: 'In omni memoria patriae religionis sunt diri historiarum. Golums, zombies et fasci'
    }
]

const cars = [
    {
        image: 'http://wp.hostlin.com/zagreb/images/gallery/22.jpg',
        name: 'Benz',
        class: 'Luxury',
        condition: 'Yes',
        trans: 'Automatic',
        price: '$29'
    },
    {
        image: 'http://wp.hostlin.com/zagreb/images/gallery/22.jpg',
        name: 'Benz',
        class: 'Luxury',
        condition: 'Yes',
        trans: 'Automatic',
        price: '$29'
    },
    {
        image: 'http://wp.hostlin.com/zagreb/images/gallery/22.jpg',
        name: 'Benz',
        class: 'Luxury',
        condition: 'Yes',
        trans: 'Automatic',
        price: '$29'
    },
    {
        image: 'http://wp.hostlin.com/zagreb/images/gallery/22.jpg',
        name: 'Benz',
        class: 'Luxury',
        condition: 'Yes',
        trans: 'Automatic',
        price: '$29'
    },
    {
        image: 'http://wp.hostlin.com/zagreb/images/gallery/22.jpg',
        name: 'Benz',
        class: 'Luxury',
        condition: 'Yes',
        trans: 'Automatic',
        price: '$29'
    },
    {
        image: 'http://wp.hostlin.com/zagreb/images/gallery/22.jpg',
        name: 'Benz',
        class: 'Luxury',
        condition: 'Yes',
        trans: 'Automatic',
        price: '$29'
    }
]

export {services};
export {cars};
export {navData};