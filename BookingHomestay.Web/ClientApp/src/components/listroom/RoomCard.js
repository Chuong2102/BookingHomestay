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
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>
                        <img src="./images/208111834.jpg" alt="roomCard0" className=" object-cover h-full w-full hover:scale-110 transition"></img>

                    </Carousel>
                    <div className=" absolute top-3 right-3">
                        <HeartButton/>
                    </div>
                    <div className=" font-semibold text-lg">
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
                    <div className=" font-semibold text-lg ">
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