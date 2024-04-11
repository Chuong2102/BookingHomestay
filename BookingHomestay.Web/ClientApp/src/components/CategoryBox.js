import PropTypes from 'prop-types'
import React from 'react';

const CategoryBox = ({icon, label, selected}) => {
    return(
        <div className={`flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 cursor-pointer transition 
            ${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}>
            
            {React.createElement(icon, { size: 20 })}

            <div className=' font-medium text-sm'>
                {label}
            </div>
        </div>
    )
}
CategoryBox.propTypes = {
    icon: PropTypes.element,
    selected: PropTypes.bool,
    label: PropTypes.string
}

export default CategoryBox;

