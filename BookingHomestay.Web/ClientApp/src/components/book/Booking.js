import { Container } from "reactstrap";
import NavMenu from "../navbar/NavMenu";
import { FaStar } from "react-icons/fa";
import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Booking = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [room, setRoom] = useState({});
    const params = useSearchParams();

    const count = searchParams.get('count');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const id = searchParams.get('id');
    
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);

    const apiEx = `https://localhost:7188/api/v1/Room/?id=${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("jwtToken");

                const response = fetch(apiEx, {
                    method: "GET",
                    headers: {"Authorization": `Bearer ${token}`},
                }).then(res => res.json()).then((json) => {setRoom(json); console.log(json); });

                

            } catch (e) {
                console.error('Error fetching data:', e);
            }
        };

        fetchData();
    }, [id]);

    const handleClick = () => {
        
    }

    return(
        <div>
            <NavMenu/>
            <div className="pt-[250px]">
                <Container>
                    <div className=" text-2xl font-bold">
                        Yêu cầu đặt phòng/chỗ
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <div className="col-span-4">
                            <div className="shadow p-3">
                                <div className="py-2 border-b-[1px]">
                                    <div className="font-bold text-xl">
                                        Chuyến đi sắp tới của bạn
                                    </div>
                                    <div className="py-3">
                                        <div className="text-balance font-bold">Ngày</div>
                                        <div className="text-balance font-light">{sDate.toLocaleDateString('vi-VN')} - {eDate.toLocaleDateString('vi-VN')}</div>
                                    </div>
                                    <div className="py-1">
                                        <div className="text-balance font-bold">Số người</div>
                                        <div className="text-balance font-light">{count}</div>
                                    </div>
                                </div>
                                <div className="py-3 border-b-[1px]">
                                    <div className="font-bold text-xl">
                                        Thanh toán bằng
                                    </div>
                                    <div className="py-3">
                                        <div className="text-balance font-bold">VNPAY</div>
                                    </div>
                                </div>
                                <div className="py-3 border-b-[1px]">
                                    <div className="font-bold text-xl">
                                        Chính sách hủy
                                    </div>
                                    <div className="py-3">
                                        <div className="text-balance font-bold">VNPAY</div>
                                        <div className="text-balance font-light">BLABLA</div>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <button onClick={handleClick} className=" bg-rose-600 p-3 rounded-md font-md text-white" type="submit">Yêu cầu đặt phòng</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:order-last md:col-span-3">
                            <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden p-2'>
                                <div className="flex flex-row">
                                    <div className="p-1 text-white text-center text-sm">
                                        <img className=' h-44 w-44 rounded-md' src='./images/410907703_599251852334887_438075514808965379_n.jpg' alt='Avatar'></img>
                                    </div>
                                    <div className="flex flex-col p-2">
                                        <div className=" text-balance font-bold">
                                            {room.title}
                                        </div>
                                        <div className=" text-sm font-semibold py-1">
                                            {room.address && (room.address.addressLine1)}
                                        </div>
                                        <div className="flex flex-row text-sm font-semibold py-1">
                                            <FaStar />
                                            <div>
                                                4.6
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Booking;