import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Container from '../../Container';
import RoomHead from '../RoomHead';
import axios from 'axios';
import TitlebarBelowMasonryImageList from '../../images/listImages';
import RoomInfo from './roomInfo';

const RoomPage = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const imgSrc = 'https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg';

    const apiEx = `https://localhost:7188/api/Room/?id=${id}`;
    console.log(id);

    const initialDateRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEx);

                setRoom(response.data);

                console.log(response.data);
            } catch (e) {
                console.error('Error fetching data:', e);
            }
        };

        fetchData();
    }, [id]);

    return(
        <Container>
            <div className='pt-[150px] max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <RoomHead title = {room.title} id={room.id} imageSrc={imgSrc} userID={room.userID}/>
                    <div className='w-full'>
                        <TitlebarBelowMasonryImageList className="w-full"/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo category={room.category}/>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default RoomPage;