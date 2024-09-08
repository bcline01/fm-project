import { FiAlignJustify } from "react-icons/fi";
import React from "react";



const ToggleButton = ({setOpen}) => {
    const handleClick = (e) => {
        e.stopPropagation();
        setOpen(prevState => !prevState);  // Toggle the state
    };
    return (
        <button onClick={handleClick}>
            <FiAlignJustify />  {/* Icon inside the button */}
            
        </button>
    );
};

export default ToggleButton