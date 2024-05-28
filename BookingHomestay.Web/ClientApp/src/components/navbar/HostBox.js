import PropTypes from 'prop-types'
import React from 'react';
import qs from 'query-string';
import { json, useNavigate } from "react-router-dom";

import { useParams, useSearchParams } from 'react-router-dom';

const HostBox = ({label, name, selected}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        
        const url = '/host/' + name;
        // Fly to url
        navigate(url);
        
    };

    return(
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 px-4 py-3 border-b-2 hover:text-neutral-800 cursor-pointer transition 
            ${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}>
            
            <div className=' font-medium text-sm'>
                {label}
            </div>
        </div>
    )
}

export default HostBox;