import Avatar from './navbar/Avatar';
import { FaStar } from "react-icons/fa";

const Comment = () => {
    return(
        <div className="flex flex-col gap-2 py-2">
            <div className='flex flex-row items-center'>
                <Avatar/>
                <div className='flex flex-col px-2'>
                    <div className=' font-bold p'>
                        Bạch Cầu
                    </div>
                    <div className=' font-light text-sm'>
                        Huế
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-row'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className=' font-medium text-sm'>
                    tháng 4 năm 2024
                </div>
            </div>
            <div>
            Khung cảnh tuyệt vời, trang trí tuyệt vời, nhân viên thân thiện, 
            điều duy nhất còn thiếu là nước tắm rất nhỏ, nước nóng không ổn định, 
            gần như được rửa sạch trong nước lạnh. <br/> 
                <div className=' font-bold'>
                    Yêu Chương nhìu nhắm chụt chụt :3
                </div>
            </div>
        </div>
    );
}

export default Comment;