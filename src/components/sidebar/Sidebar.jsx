import './sidebar.scss'
import ToggleButton from './toggleButton/toggleButton'
import { motion } from 'framer-motion'
import { useState } from 'react';
import Links from './links/Links';




const Sidebar = () => {
const [open, setOpen] = useState(false);


    const variants = {
        open: {
            clipPath: "circle(1200 at 50px 50px)",
            transition: 'spring',
            stiffness: 20,
            damping: 10,
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,

            },

        },
    };

    return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className='bg' variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}

export default Sidebar