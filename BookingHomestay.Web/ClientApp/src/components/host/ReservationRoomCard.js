import Avatar from "../navbar/Avatar";

const ReservationRoomCard = ({state, roomName, guest, startDate, endDate}) => {
    return(
        <div className='col-span-1 cursor-pointer hover:bg-neutral-100 group rounded-xl border p-2 my-4 mx-2'>
            <div className="p-1 flex flex-col border-b-[1px]">
                <div className=" font-semibold text-balance text-rose-500">
                    {state}
                </div>
                <div className=" font-bold text-sm text-neutral-600">
                    {roomName}
                </div>
                <div className="flex flex-row justify-between">
                    <div className="py-2 flex flex-col">
                        <div className=" font-normal text-balance">
                            {guest}
                        </div>
                        <div className=" font-semibold text-sm text-neutral-500">
                            {startDate} - {endDate}
                        </div>
                    </div>
                    <Avatar/>
                </div>
            </div>
            <div className="p-3 text-center">
                <div className=" text-neutral-400 font-bold text-sm">
                    Nhắn tin
                </div>
            </div>
        </div>
    );
}

export default ReservationRoomCard;