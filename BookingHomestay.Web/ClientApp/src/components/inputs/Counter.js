import { useCallback } from "react";
import PropTypes from 'prop-types';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Counter = ({title, subtitle, value, onChange}) => {
    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange, value])

    const onReduce = useCallback(() => {
        if(value == 1)
            return;

        onChange(value - 1);
    }, [value, onChange])
    
    return(
        <div className="flex flex-row items-center justify-between p-3">
            <div className="flex flex-col">
                <div className="font-bold text-left">
                    {title}
                </div>
                <div className="font-light text-gray-600">
                    {subtitle}
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div onClick={onReduce} className="w-7 h-7 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition">
                        <AiOutlineMinus/>
                    </div>
                    <div className="font-light text-lg text-neutral-600 ">
                        {value}
                    </div>
                    <div onClick={onAdd} className="w-7 h-7 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition">
                        <AiOutlinePlus/>
                </div>
            </div>
        </div>
    )
}

Counter.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func
}

export default Counter;