import * as React from 'react';
import Button from '../../Button';
import Calender from '../../Calender/Calender';

const RoomReservation = ({price}) => {
    return(
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                </div>
                <div className='font-light text-neutral-600'>
                    Đêm
                </div>
            </div>
            <hr/>
            <div className='text-center'>
                <Calender/>
            </div>
            <div className='p-4'>
                <div className='flex flex-row items-center gap-4 w-full'>
                    <button className=" bg-rose-500 p-2 w-full rounded-md font-md text-white" type="submit">Đặt phòng</button>
                </div>
            </div>
            <hr/>
            <div className='p-4 flex flex-row items-center font-bold justify-between text-lg'>
                <div>Tổng: </div>
                <div>500.000 VNĐ</div>
            </div>
        </div>
    );
}

export default RoomReservation;