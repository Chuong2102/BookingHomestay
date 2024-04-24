import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import {IoMdClose} from 'react-icons/io';
import Button from '../Button';


const Model = ({isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryLabel, secondaryAction}) => {
    const [showModel, setShowModel] = useState(false);
    
    useEffect(() => {
        setShowModel(isOpen);
    }, [isOpen]);

    const handleSubmit = useCallback(() => {
       if(disabled){    
        return;
       } 
    });

    const handleClose = useCallback(() => {
        if(disabled){
            return;
        }

        setShowModel(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSecondaryaction = useCallback(() => {
        if(disabled || !secondaryAction){
            return;
        }

        secondaryAction();
    }, [disabled, secondaryAction]);

    if(!isOpen){
        return null;
    }

    return(
        <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
                <div className={`translate duration-300 h-full ${showModel ? 'translate-y-0' : 'translate-y-full'} ${showModel ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='translate h-full lg:h-auto md:h-auto border-0 shadow-lg rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        {/* Header */}
                        <div className=''>
                            <div className='flex items-center p-6 rounded-t justify-center relative border-b-[1px]'>
                                <button className='p-1 border-0 hover:opacity-70 transition absolute left-9' onClick={handleClose}>
                                    <IoMdClose size={14}/>
                                </button>
                                <div className='text-lg font-semibold'>{title}</div>
                            </div>
                            {/* Body*/}
                            <div className=' relative p-6 flex-auto'>
                                {body}
                            </div>
                            {/* Footer */}
                            <div className='flex flex-row items-center gap-4 w-full'>
                                {footer}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Model.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    secondaryAction: PropTypes.func
}

export default Model;