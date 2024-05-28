import Container from "../Container";
import { useState, useEffect, useCallback } from 'react';
import { useForm } from "react-hook-form";
import Avatar from './AvatarProfile';

const Profile = () => {
    
    const [isEdit, setEdit] = useState(false);
    
    const toggleOpen = useCallback(
        () => {
            setEdit((value) => !value);
        }
    ,[]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return(
        <Container>
            <div className="pt-[250px] w-full">
                <div className=" text-2xl font-bold pb-5">
                    Thông tin cá nhân
                </div>
                <Avatar/>
                <div className="flex flex-row w-full max-w-[700px] justify-between items-center gap-2 border-b-[1px] p-2">
                    <div className="flex flex-col">
                        <div className=" font-medium text-balance">
                            Tên pháp lý
                        </div>
                        {!isEdit && (
                            <div className=" font-light text-balance">
                                Ngô Thị Hậu
                            </div>
                        )}
                        {isEdit && (
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <div className="relative mr-2">
                                        <input type="text" placeholder="Ngô Thị" name="lastName" {...register("lastName")} className={`peer w-full p-4 mb-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}/>
                                        <label className="absolute text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-85 peer-focus:-translate-y-4 text-zinc-600">
                                            Họ, họ đệm
                                        </label>
                                    </div>
                                    <div className="relative" >
                                        <input type="text" placeholder="Hậu" name="firstName" {...register("firstName")} className={`peer w-full p-4 mb-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}/>
                                        <label className="absolute text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-85 peer-focus:-translate-y-4 text-zinc-600">
                                            Tên
                                        </label>
                                    </div>
                                </div>
                                <button className="bg-black p-2 rounded-md font-md text-white w-14" type="submit">Lưu</button>
                            </div>
                        )}
                    </div>
                    <div className=" font-bold text-sm pointer p-2" onClick={toggleOpen}>
                        Chỉnh sửa
                    </div>
                </div>

                <div className="flex flex-row w-full max-w-[700px] justify-between items-center gap-2 border-b-[1px] p-2">
                    <div className="flex flex-col">
                        <div className=" font-medium text-balance">
                            Email
                        </div>
                        <div className=" font-light text-balance">
                            nthau@gmail.com
                        </div>
                    </div>
                    <div className=" font-bold text-sm pointer p-2">
                        Chỉnh sửa
                    </div>
                </div>

                <div className="flex flex-row w-full max-w-[700px] justify-between items-center gap-2 border-b-[1px] p-2">
                    <div className="flex flex-col">
                        <div className=" font-medium text-balance">
                            Số điện thoại
                        </div>
                        <div className=" font-light text-balance">
                            0707770007
                        </div>
                    </div>
                    <div className=" font-bold text-sm pointer p-2">
                        Chỉnh sửa
                    </div>
                </div>

                <div className="flex flex-row w-full max-w-[700px] justify-between items-center gap-2 border-b-[1px] p-2">
                    <div className="flex flex-col">
                        <div className=" font-medium text-balance">
                            Giấy tờ tùy thân do chính phủ cấp
                        </div>
                        <div className=" font-light text-balance">
                            Chưa được cung cấp
                        </div>
                    </div>
                    <div className=" font-bold text-sm pointer p-2">
                        Chỉnh sửa
                    </div>
                </div>

                <div className="flex flex-row w-full max-w-[700px] justify-between items-center gap-2 border-b-[1px] p-2">
                    <div className="flex flex-col">
                        <div className=" font-medium text-balance">
                            Địa chỉ
                        </div>
                        <div className=" font-light text-balance">
                            Chưa được cung cấp
                        </div>
                    </div>
                    <div className=" font-bold text-sm pointer p-2">
                        Chỉnh sửa
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profile;