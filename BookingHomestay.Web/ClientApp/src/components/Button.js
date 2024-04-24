import PropTypes from 'prop-types';
import React from 'react';

const Button = ({label, onClick, disabled, outline, small, icon}) => {
    return(
        <button onClick={onClick} disabled={disabled}  className={`relative w-full disabled:opacity-70 disabled:cursor-not-allowed rounded-lg opacity-80 transition
             ${outline ? ' bg-white' : ' bg-rose-500'} 
             ${outline ? ' border-black' : ' border-rose-500'}
             ${outline ? 'text-black' : 'text-white'} 
             ${small ? 'py-1' : 'py-3'} 
             ${small ? 'text-sm' : 'text-md'} 
             ${small ? 'font-light' : 'font-semibold'}
             ${small ? 'border-[1px]' : 'border-2'}
             `}>
                {React.createElement(icon, { size: 20, className: 'absolute left-4 top-3' })}
                {label}
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.element,
    onClick: PropTypes.func,
    disable: PropTypes.bool
}

export default Button;