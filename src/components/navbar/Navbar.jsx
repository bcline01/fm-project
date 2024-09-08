import './navbar.scss'
import githubImage from '../../assets/github.png'
import linkedinImage from '../../assets/linkedin.png'
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
    return (
        <div className='navbar'>
            {/*Sidebar*/}
            <Sidebar/>
            <div className='wrapper'>
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Brooke Cline</motion.span>
                <div className='social'>
                    <a href='#'><img src={githubImage} alt="github"/></a>
                    <a href='#'><img src={linkedinImage} alt="linkedIn"/></a>



                </div>

            </div>
        </div>
    )
}

export default Navbar