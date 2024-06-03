import Container from "../Container";
import NavMenu from "../navbar/HostNavMenu";
import { useState, useEffect, useRef } from 'react';
import UploadImage from "../uploadimage/UploadImage";
import CategoryInput from "../inputs/CategoryInput";
import {categories} from '../navbar/Categories';

const ManageSpace = () => {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = (e) => {
        if (images.length === 0) {
            //handleSnackbarMessage('Cần thêm ảnh!', 'warning');
            console.log('Cần thêm ảnh!');
            return;
        }

    }

    const handleImagesChange = (imageFiles) => {
        const base64Images = imageFiles.map((file) => file.preview);
        setImages(base64Images);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    return(
        <div>
            <NavMenu/>
            <Container>
                <div className="pt-[150px]">
                    <div className="mb-[20px]">
                        <div className=" font-bold text-lg">
                            Ảnh
                        </div>
                        <UploadImage onImagesChange={handleImagesChange} images={images} />
                    </div>
                    <div className="mb-[20px]">
                        <label className="block text-gray-700 text-[15px] font-bold mb-2" htmlFor="title">
                            Tiêu đề
                        </label>
                        <input
                            className={
                                'shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight'
                            }
                            id="title"
                            type="text"
                            autoComplete="off"
                            value={title}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>
                    <div className="mb-[20px]">
                        <label className="block text-gray-700 text-[15px] font-bold mb-2" htmlFor="description">
                            Tiêu đề
                        </label>
                        <input
                            className={
                                'shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight'
                            }
                            id="description"
                            type="text"
                            autoComplete="off"
                            value={description}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>
                    <div className="mb-[20px]">
                        <label className="block text-gray-700 text-[15px] font-bold mb-2" htmlFor="rules">
                            Nội quy
                        </label>
                        <input
                            className={
                                'shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight'
                            }
                            id="rules"
                            type="text"
                            autoComplete="off"
                            value={description}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>
                    <div className="mb-[20px]">
                        <label className="block text-gray-700 text-[15px] font-bold mb-2" htmlFor="rules">
                            Trạng thái
                        </label>
                        <div className='flex flex-row'>
                            <div className='p-[6px] items-center'>
                                <svg viewBox="0 0 16 16" width={"12"} height={"12"} xmlns="http://www.w3.org/2000/svg">
                                    <circle r="8" cx="8" cy="8" fill="green" />
                                </svg> 
                            </div>
                            <div className=" font-light text-balance p-[1px]">
                                Đang hoạt động
                            </div>
                        </div>
                        <div className=" rounded-lg border-[1px] p-2">
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-between">
                                    <div className=" text-sm font-semibold">
                                        Danh sách trạng thái
                                    </div>
                                    <div className="text-sm font-normal cursor-pointer">
                                        Chỉnh sửa
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <input type="radio" value={'active'} name="active"/>
                                    <div className='flex flex-row'>
                                        <div className='p-[8px] items-center'>
                                            <svg viewBox="0 0 16 16" width={"12"} height={"12"} xmlns="http://www.w3.org/2000/svg">
                                                <circle r="6" cx="6" cy="6" fill="green" />
                                            </svg> 
                                        </div>
                                        <div className=" font-light text-balance p-[1px]">
                                            Đang hoạt động
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <input type="radio" value={'active'} name="active"/>
                                    <div className='flex flex-row'>
                                        <div className='p-[8px] items-center'>
                                            <svg viewBox="0 0 16 16" width={"12"} height={"12"} xmlns="http://www.w3.org/2000/svg">
                                                <circle r="6" cx="6" cy="6" fill="green" />
                                            </svg> 
                                        </div>
                                        <div className=" font-light text-balance p-[1px]">
                                            Đang hoạt động
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <input type="radio" value={'active'} name="active"/>
                                    <div className='flex flex-row'>
                                        <div className='p-[8px] items-center'>
                                            <svg viewBox="0 0 16 16" width={"12"} height={"12"} xmlns="http://www.w3.org/2000/svg">
                                                <circle r="6" cx="6" cy="6" fill="green" />
                                            </svg> 
                                        </div>
                                        <div className=" font-light text-balance p-[1px]">
                                            Đang hoạt động
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <input type="radio" value={'active'} name="active"/>
                                    <div className='flex flex-row'>
                                        <div className='p-[8px] items-center'>
                                            <svg viewBox="0 0 16 16" width={"12"} height={"12"} xmlns="http://www.w3.org/2000/svg">
                                                <circle r="6" cx="6" cy="6" fill="green" />
                                            </svg> 
                                        </div>
                                        <div className=" font-light text-balance p-[1px]">
                                            Đang hoạt động
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-[15px] font-bold mb-2" htmlFor="rules">
                            Tiện nghi
                        </label>
                        <div>
                            <div className=' font-light text-balance border-b-[1px] '>
                                Chọn các tiện nghi của phòng
                            </div>
                            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 gap-3 max-h-[50vh] overflow-y-auto mt-[40px]'>
                                {
                                    categories.map((item) => (
                                        <div key={item.label} className='col-span-1'>
                                            <CategoryInput icon={item.icon} onClick={() =>{}} selected={false} label={item.label}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ManageSpace;