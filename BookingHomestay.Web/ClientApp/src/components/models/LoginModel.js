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
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';


const LoginModel = () => {
    const usenavigate = useNavigate();
    const isOpen = useSelector((state) => state.openModel.value);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleReloadPage = () => {
        window.location.reload();
    }

    const googleResponse = (response) => {
        console.log(response);
        const tokenBlob = new Blob([JSON.stringify({ credential: response.credential }, null, 2)], { type: 'application/json' });
        const options = {
          method: 'POST',
          body: tokenBlob,
          mode: 'cors',
          cache: 'default'
        };
        fetch("https://localhost:7188/api/v1/google", options)
          .then(r => {
            r.json().then(user => {
                // Get token
                const token = user.token;
                console.log(user);

                // Save the jwt token
                localStorage.setItem("jwtToken", token);
                localStorage.setItem("username", user.username);
                // Open message dialog
                toast.success("Đăng nhập thành công!");
                // Navigate to Home
                usenavigate("/home");
                // Close the model
                dispatch(onClose(false));
            });
          })
      };


    useEffect(
        () => {
            if (user) {
                
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };


    

    const apiUrl = "https://localhost:7188/api/v1/Login";

    // Get JWT Token
    // Call API

    const onSubmit = async (data) => {
        console.log(data);
        
        // LOGIN API
        await axios.post(apiUrl, data)
        .then((response) => {
            localStorage.setItem("jwtToken", response.data.token);
            localStorage.setItem("username", response.data.email);

            //axios.defaults.headers.common = {'Authorization': `bearer ${response.data.token}`}

            // Close the model
            toast.success("Đăng nhập thành công!");

            console.log("Login successfully!");
            console.log(response.data.token);
            usenavigate("/home");
            dispatch(onClose(false));
            
        }).catch((err) => { console.log(err); toast.error("Đăng nhập thất bại"); });

       
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            
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
            <GoogleLogin buttonText="Đăng nhập với Google" onSuccess={googleResponse} onError={googleResponse}></GoogleLogin>
        </div>
        
    );

    

    return(
        <Model body={bodyContent} footer={footContent} disabled={isLoading} isOpen={isOpen} title={"Đăng nhập"} actionLabel={"Đăng nhập"} onClose={() => {dispatch(onClose(false))}}>
            
        </Model>
    );
}

export default LoginModel;