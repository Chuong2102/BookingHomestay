import {AiOutlineMenu} from 'react-icons/ai';
import {useCallback, useState} from 'react';
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import {onOpen, onClose} from '../../redux/openModelSlice';
import {onLogin, onSignUp} from '../../redux/authenSlice';
import { useSelector, useDispatch } from "react-redux";
import { json, useNavigate } from "react-router-dom";

const UserMenu = () => {
    const dispatch = useDispatch();
    const usenavigate = useNavigate();

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
                <div className=' absolute rounded-xl shadow-sm w-60 top-18 right-0 overflow-hidden text-sm'>
                    <div className='flex flex-col cursor-pointer bg-white'>
                        <MenuItem onClick={() => {dispatch(onOpen(true)); dispatch(onLogin(true))}} label="Đăng nhập"/>
                        <MenuItem onClick={() => {dispatch(onOpen(true)); dispatch(onSignUp(false))}} label="Đăng ký"/>
                        {localStorage.getItem('username') && (
                            <MenuItem onClick={() => { usenavigate("/AddRoom") }} label="Thêm phòng"/>
                        )}
                        {localStorage.getItem('username') && (
                            <MenuItem onClick={() => { usenavigate("/profile")}} label="Tài khoản cá nhân"/>
                        )}
                        {localStorage.getItem('username') && (
                            <MenuItem onClick={() => { usenavigate("/trips")}} label="Chuyến đi"/>
                        )}
                        {localStorage.getItem('username') && (
                            <MenuItem onClick={() => { usenavigate("/host")}} label="Quản lý homestay"/>
                        )}
                        
                        
                    </div>
                </div>    
            )}
        </div>
    );
}

export default UserMenu;