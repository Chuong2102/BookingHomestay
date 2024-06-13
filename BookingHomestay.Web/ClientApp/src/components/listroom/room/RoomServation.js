import * as React from 'react';
import Button from '../../Button';
import Calender from '../../Calender/Calender';
import { differenceInDays } from 'date-fns';
import { json, useNavigate } from "react-router-dom";
import Counter from '../../inputs/Counter';
import qs from 'query-string';

const RoomReservation = ({room}) => {

    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [totalPrice, setTotalPrice] = React.useState(1);
    const [count, setCount] = React.useState(1);

    const navigate = useNavigate();

    React.useEffect(() => {
        if(startDate && endDate){
            const dayCount = differenceInDays(endDate, startDate);
            
            if(dayCount && room.price){
                if(dayCount != 0){
                    setTotalPrice(room.price * dayCount);
                }
                else{
                    setTotalPrice(room.price);
                }
            }
            else{
                setTotalPrice(room.price);
            }
        }
    },)

    let param = {
        startDate: startDate,
        endDate: endDate,
        count: count,
        id: room.id
    };

    const url = qs.stringifyUrl({
        url: '/book',
        query: param
    }, {skipNull: true});

    const handleClick = () => {
        navigate(url);
    }

    const onSetDate = (startDate, endDate) => {
        setStartDate(startDate);
        setEndDate(endDate);
    }

    const onCount = (value) => {
        setCount(value);
      }

    return(
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(room.price)}
                </div>
                <div className='font-light text-neutral-600'>
                    Đêm
                </div>
            </div>
            <hr/>
            <div className='text-center'>
                <Calender value={{startDate: startDate, endDate: endDate}} onChange={(startDate, endDate) => {onSetDate(startDate, endDate)}}/>
            </div>
            <div className='py-2'>
                <Counter title="Khách" subtitle="Số người 1 phòng" value={count} onChange={(value) => {onCount(value);}}/>
            </div>
            <div className='p-4'>
                <div className='flex flex-row items-center gap-4 w-full'>
                    <button onClick={handleClick} className=" bg-rose-600 p-2 w-full rounded-md font-md text-white" type="submit">Yêu cầu đặt phòng</button>
                </div>
            </div>
            <hr/>
            <div className='p-4 flex flex-row items-center font-bold justify-between text-lg'>
                <div>Tổng: </div>
                <div>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</div>
            </div>
        </div>
    );
}

export default RoomReservation;