import { Navbar } from '../Navbar/Navbar'
import './headerStyles.css'

export const Header = () => {
    return (
        <section className='navbar-container'>
            <div className='header-content'>
                <Navbar licenseType={2} />
            </div>
        </section>
    )
}