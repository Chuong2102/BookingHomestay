import Container from "../Container";
import NavMenu from "../navbar/NavMenu";
import TripBox from "./TripBox";
import { NavLink, json } from "react-router-dom";

const Trips = () => {
    return(
        <div>
            <NavMenu/>
            <Container>
            <div className="pt-[250px]">
                <div className="text-2xl font-bold p-3">
                    Chuyến đi
                </div>
                <div className="flex flex-row rounded-2xl border-[1px]">
                    <div className="w-2/6">
                        <div className="flex flex-col">
                            <div>
                                <img className=" w-28 h-28 rounded-2xl" src="./images/balo.png"></img>
                            </div>
                            <div className=" font-normal text-balance p-2">
                                Đã đến lúc phủi bụi vali và bắt đầu chuẩn bị cho chuyến phiêu lưu tiếp theo của bạn rồi.
                            </div>
                            <button className="m-4 bg-rose-500 text-white rounded-lg w-[170px] h-[50px] hover:bg-rose-600">Bắt đầu tìm kiếm</button>
                        </div>
                    </div>
                    <div className="w-4/6">
                        <img className="w-full h-full fit rounded-r-2xl" src="https://statics.vinpearl.com/dai-noi-hue-2_1690354537.jpg"></img>
                    </div>
                </div>
                <div>
                    <div className="p-2 font-medium text-lg">
                        Các nơi đã đặt
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        <NavLink to={`/trips/detail`}>
                            <TripBox/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    );
}

export default Trips;