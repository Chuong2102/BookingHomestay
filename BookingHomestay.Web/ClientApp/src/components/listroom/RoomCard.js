import HeartButton from "../HeartButton";
import Carousel from "../Carousel/Carousel";

const RoomCard = ({Room}) => {
    if(Room.address != null)
    {
        return(
            <div className=" col-span-1 cursor-pointer group rounded-xl p-1 hover:bg-neutral-200">
                <div className="flex flex-col w-full gap-2 cursor-pointer">
                    <Carousel autoSlide={true}>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/493749357.jpg?k=32d2416fef73e71c126125b324faee58c5748d384c17f55a773ff85611b3702d&o=&hp=1" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/439654472.jpg?k=c9d53eb080e067b1b84235aa822f264c1188e0ecd1acec5f9aed7238a2f1f3c1&o=&hp=1" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/214724497.jpg?k=cbd831b856fcd4e641e59f1e5ddd3a6ac3e554a2286c9b05e354b996523c9817&o=&hp=1" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>

                    </Carousel>
                    <div className=" absolute top-3 right-3">
                        <HeartButton/>
                    </div>
                    <div className=" font-semibold text-lg min-h-7">
                        {Room.title}
                    </div>
                    <div className=" font-light text-sm text-neutral-500">
                        {Room.address.addressLine1}
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <div className=" font-semibold text-sm">
                            {Room.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className=" col-span-1 cursor-pointer group rounded-xl p-1 hover:bg-neutral-200">
                <div className="flex flex-col w-full gap-2 cursor-pointer">
                    <Carousel autoSlide={true}>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>

                    </Carousel>
                    <div className=" absolute top-3 right-3">
                        <HeartButton/>
                    </div>
                    <div className=" font-semibold text-lg min-h-14">
                        {Room.title}
                    </div>
                    <div className=" font-light text-sm text-neutral-500">
                        56/93 An Duong Vuong
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <div className=" font-semibold text-sm">
                            {Room.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomCard;