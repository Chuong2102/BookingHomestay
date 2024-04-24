import {AiOutlineMenu} from 'react-icons/ai';
import {useCallback, useState} from 'react';
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import useRegisterModel from '../../hooks/useRegisterModel';
import {onOpen, onClose} from '../../redux/openModelSlice';
import { useSelector, useDispatch } from "react-redux";

const UserMenu = () => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(
        () => {
            setIsOpen((value) => !value);
        }
    ,[])

    return(
        <div className="relative">
            <div onClick={toggleOpen} className="flex flex-row p-2 border-[1px]  items-center gap-3 cursor-pointer transition hover:bg-neutral-100 rounded-full">
                <Avatar></Avatar>
                <div className="transition rounded">
                    <AiOutlineMenu/>
                </div>
            </div>
            {isOpen && (
                <div className=' absolute rounded-xl shadow-sm w-36 top-14 right-0 overflow-hidden text-sm'>
                    <div className='flex flex-col cursor-pointer bg-white'>
                        <MenuItem label="Đăng nhập"/>
                        <MenuItem onClick={() => {dispatch(onOpen(true))}} label="Đăng ký"/>
                    </div>
                </div>    
            )}
        </div>
    );
}

export default UserMenu;