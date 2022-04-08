import '../styles/Banner.css'
import logo from '../assets/logo2.png'
import TodaysDate from './TodaysDate.js'

function Banner() {
    const title = 'Skyjo 🎲 '
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Skyjo' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
            <TodaysDate />
        </div>
    )
}

export default Banner