const TripBox = () => {
    return(
        <div className="flex flex-row gap-2 p-2 cursor-pointer hover:bg-neutral-100 rounded-xl">
            <div className='flex flex-row items-center'>
                <img src="./images/208111834.jpg" className=" w-24 h-24 rounded-lg"></img>
            </div>

            <div className='flex flex-col gap-2'>
                <div className=' font-semibold text-balance'>
                    Tâm An Homestay
                </div>
                <div className=' font-semibold text-neutral-400 text-sm'>
                    Chủ nhà Chương Đoàn
                </div>
                <div className=' font-light text-sm text-neutral-400'>
                    tháng 4 năm 2024
                </div>
            </div>
        </div>
    );
}

export default TripBox;