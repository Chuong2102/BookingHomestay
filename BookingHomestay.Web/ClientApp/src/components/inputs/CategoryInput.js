import PropTypes from 'prop-types';
import React from 'react';

const CategoryInput = ({icon, label, selected, onClick}) => {
    return(
        <div className={`rounded-xl border-2 p-2 flex flex-col gap-3 hover:border-black transition cursor-pointer
             ${selected? 'border-black' : 'border-neutral-200'}`}>
                {React.createElement(icon, { size: 20 })}

                <div className=' font-medium text-sm'>
                    {label}
                </div>
        </div>
    )
}

CategoryInput.propTypes = {
    icon: PropTypes.element,
    selected: PropTypes.bool,
    label: PropTypes.string
}

export default CategoryInput;