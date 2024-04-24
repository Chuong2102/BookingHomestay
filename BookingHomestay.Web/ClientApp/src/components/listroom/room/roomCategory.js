import PropTypes from 'prop-types'
import React from 'react';
import {TbBeach} from 'react-icons/tb';

const RoomCategory = (icon, label, description) => {
    return(
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                {React.createElement(TbBeach, { size: 20, className: 'text-neutral-600'})}
                <div className="flex flex-col">
                    /*label */
                    <div className=" text-lg font-semibold">
                        Bien
                    </div>
                    /*description */
                    <div className=" text-neutral-500 font-light">
                        Gan bien
                    </div>
                </div>
            </div>
        </div>
    );
}



export default RoomCategory;