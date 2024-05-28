import Container from "../Container";
import { FaStar } from "react-icons/fa";
import NavMenu from "../navbar/NavMenu";

const TripDetail = () => {
    return(
        <div>
            <NavMenu/>
            <Container>
                <div className="pt-[250px]">
                    <div className="border-b-[1px] pb-4">
                        <div className=" font-semibold text-sm text-neutral-500">
                            Hoàn thành
                        </div>
                        <div className="text-2xl font-bold ">
                            Tâm An Homestay
                        </div>
                        <div className="flex flex-row">
                            <div className="font-semibold text-balance text-neutral-500 pr-2">
                                2 người
                            </div>
                            <div className="font-semibold text-balance text-neutral-500 pr-2">
                                5 đêm
                            </div>
                        </div>
                    </div>
                    <div className=" rounded-md border-[2px] my-4 p-2 shadow-sm">
                        <div className="flex flex-row p-2">
                            <div className="font-semibold text-neutral-400 text-sm">
                                Đánh giá
                            </div>
                            <div className='flex flex-row mx-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div className="font-semibold text-neutral-500 text-sm p-2">
                            Địa điểm đáng tới, ở đây tôi đã có nhiều trải nghiệm thú vị. Nhân viên vui tính, tận tình. Cơ sở vật chất rất oke!
                        </div>
                    </div>
                    <div className="border-b-[1px] w-full"></div>
                    
                    <div className="flex flex-row">
                        <div className="rounded-sm border-[2px] my-4 p-2 shadow-sm w-1/2 m-1">
                            <div className="py-3 flex flex-row justify-between border-b-[1px]">
                                <div className="font-bold text-neutral-500 text-sm">
                                    Số người
                                </div>
                                <div className="font-semibold text-neutral-600 text-sm">
                                    2 người
                                </div>
                            </div>
                            <div className="py-3 flex flex-row justify-between border-b-[1px]">
                                <div className="font-bold text-neutral-500 text-sm">
                                    Ngày nhận
                                </div>
                                <div className="font-semibold text-neutral-600 text-sm">
                                    Thứ 7, ngày 25-5-2024
                                </div>
                            </div>
                            <div className="py-3 flex flex-row justify-between border-b-[1px]">
                                <div className="font-bold text-neutral-500 text-sm">
                                    Ngày trả
                                </div>
                                <div className="font-semibold text-neutral-600 text-sm">
                                    Chủ nhật, ngày 26-5-2024
                                </div>
                            </div>
                            <div className="py-3 flex flex-row justify-between border-b-[1px]">
                                <div className="font-bold text-neutral-500 text-sm">
                                    Ngày đặt
                                </div>
                                <div className="font-semibold text-neutral-600 text-sm">
                                    Thứ 5, ngày 16-5-2024
                                </div>
                            </div>
                            <div className="py-3 flex flex-row justify-between border-b-[1px]">
                                <div className="font-bold text-neutral-500 text-sm">
                                    Mã đặt
                                </div>
                                <div className="font-semibold text-neutral-600 text-sm">
                                    101100111
                                </div>
                            </div>
                        </div>
                        <div className=" rounded-sm border-[2px] my-4 p-2 shadow-sm w-1/2 m-1">
                            <div className=" font-bold text-balance pb-3">
                                Thanh toán
                            </div>
                            
                            <div className="flex flex-row justify-between">
                                <div className="font-bold text-neutral-500 text-sm">
                                    2 người x 1 đêm
                                </div>
                                <div className="font-semibold text-neutral-600 text-sm">
                                    210.000 VND
                                </div>
                            </div>

                            <div className="flex flex-row justify-between border-b-[1px] py-1">
                                <div className="font-bold text-neutral-500 text-sm">
                                    Phí dịch vụ
                                </div>
                                <div className="font-semibold text-neutral-600 text-sm">
                                    15.000 VND
                                </div>
                            </div>
                            
                            <div className="flex flex-row justify-between py-3">
                                <div className="font-bold text-balance">
                                    Tổng
                                </div>
                                <div className="flex flex-col text-right">
                                    <div className="font-semibold text-neutral-600 text-sm">
                                        225.000 VND
                                    </div>
                                    <div className="font-bold text-neutral-500 text-sm">
                                        Trả bằng ví VNPAY
                                    </div>
                                    <div className="font-semibold text-neutral-400 text-[12px]">
                                        Thứ 5, ngày 16-5-2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
}

export default TripDetail;