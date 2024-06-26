import PropTypes from 'prop-types'
import React from 'react';
import qs from 'query-string';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import { json, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { onGet, onStopGet } from '../redux/getRoomsSlice';
import { useSelector, useDispatch } from "react-redux";

const CategoryBox = ({icon, label, name, selected}) => {
    const navigate = useNavigate();
    const params = useSearchParams();

    
    const dispatch = useDispatch();

    const handleClick = () => {
        let currentQuery = {};
        
        let param = {
            category: name
        };

        if(params){
            currentQuery = qs.parse(params.toString());
        }

        const url = qs.stringifyUrl({
            url: '/home',
            query: param
        }, {skipNull: true});

        console.log(url);
        // Fly to url
        navigate(url);
        
        dispatch(onGet(true))
    };

    return(
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 px-4 py-3 border-b-2 hover:text-neutral-800 cursor-pointer transition 
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

