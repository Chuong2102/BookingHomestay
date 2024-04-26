import axios from "axios";
import {FcGoogle} from 'react-icons/fc';
import {useCallback, useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import useRegisterModel from "../../hooks/useRegisterModel";
import Model from "./Model";
import { useSelector, useDispatch } from "react-redux";
import {onOpen, onClose} from '../../redux/openModelSlice';
import Heading from '../Heading';
import Button from "../Button";
import { json, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const LoginModel = () => {
    const usenavigate = useNavigate();
    const isOpen = useSelector((state) => state.openModel.value);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const apiUrl = "https://localhost:7188/api/v1/Authentication/Login";

    // Get JWT Token
    // Call API

    const onSubmit = async (data) => {
        console.log(data);
        
        const response = await axios.post(apiUrl, data);
        console.log(response);

        toast.success("Đăng nhập thành công!");

        console.log("Login successfully!");
        usenavigate("/home");
        dispatch(onClose(false));


        // fetch(apiUrl, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(data)
        // }).then((res) => {console.log(res)}).then((data) => {console.log(data)}).catch(errors => console.error(errors));
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <ToastContainer />
            <Heading title="Đăng nhập"/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full relative">
                    <input type="email" name="email" {...register("email")} className={`peer w-full p-4 mb-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}/>
                    <label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400">
                        Email
                    </label>
                </div>

                <div className="w-full relative">
                    <input type="password" name="password" {...register("password")} className={`peer w-full p-4 mb-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}/>
                    <label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400">
                        Mật khẩu
                    </label>
                </div>

                {/* footer */}
                <div className='flex flex-col gap-2 p-1'>
                    <div className='flex flex-row items-center gap-4 w-full'>
                        <button className=" bg-rose-500 p-2 w-full rounded-md font-md text-white" type="submit">Đăng nhập</button>
                    </div>
                </div>
            </form>

        </div>
    );

    const footContent = (
        <div className="flex flex-col gap-4 mt-3 w-full p-4">
            <hr/>
            <button className=" bg-neutral-500 w-full p-2 rounded-md font-medium text-white" type="submit">Quên mật khẩu</button>
        </div>
    );

    

    return(
        <Model body={bodyContent} footer={footContent} disabled={isLoading} isOpen={isOpen} title={"Đăng nhập"} actionLabel={"Đăng nhập"} onClose={() => {dispatch(onClose(false))}}>
            
        </Model>
    );
}

export default LoginModel;