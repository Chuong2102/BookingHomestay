import axios from "axios";
import {FcGoogle} from 'react-icons/fc';
import {useSate, useCallback, useState} from 'react';
import { useForm } from "react-hook-form";
import useRegisterModel from "../../hooks/useRegisterModel";
import Model from "./Model";
import { useSelector, useDispatch } from "react-redux";
import {onOpen, onClose} from '../../redux/openModelSlice';
import Heading from '../Heading';
import Button from "../Button";


const RegisterModel = () => {
    const isOpen = useSelector((state) => state.openModel.value);
    const dispatch = useDispatch();

    const registerModel = useRegisterModel();

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Đăng ký tài khoản mới"/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full relative">
                    <input type="text" name="email" {...register("email")} className={`peer w-full p-4 mb-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}/>
                    <label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400">
                        Email
                    </label>
                </div>

                <div className="w-full relative">
                    <input type="text" name="username" {...register("username")} className={`peer w-full p-4 mb-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}/>
                    <label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400">
                        Tên tài khoản
                    </label>
                </div>

                <div className="w-full relative">
                    <input type="text" name="password" {...register("password")} className={`peer w-full p-4 mb-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}/>
                    <label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400">
                        Mật khẩu
                    </label>
                </div>

                {/* footer */}
                <div className='flex flex-col gap-2 p-1'>
                    <div className='flex flex-row items-center gap-4 w-full'>
                        <button className=" bg-rose-500 p-2 w-full rounded-md font-md text-white" type="submit">Tiếp tục</button>
                    </div>
                </div>
            </form>

        </div>
    );

    const footContent = (
        <div className="flex flex-col gap-4 mt-3 w-full p-4">
            <hr/>
            <Button outline label={"Tiếp tục với Google"} icon={FcGoogle}/>
        </div>
    );

    

    return(
        <Model body={bodyContent} footer={footContent} disabled={isLoading} isOpen={isOpen} title={"Đăng ký"} actionLabel={"Tiếp tục"} onClose={() => {dispatch(onClose(false))}}>
            
        </Model>
    );
}

export default RegisterModel;