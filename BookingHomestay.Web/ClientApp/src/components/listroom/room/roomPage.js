import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Container from '../../Container';
import RoomHead from '../RoomHead';
import axios from 'axios';
import TitlebarBelowMasonryImageList from '../../images/listImages';
import RoomInfo from './roomInfo';
import RoomReservation from './RoomServation';
import Comment from '../../Comment';
import { useSelector, useDispatch } from "react-redux";
import { onGet, onStopGet } from '../../../redux/getLocationSlice';

const RoomPage = (r) => {
    // redux GET LCOATION
    const isGetLocation= useSelector((state) => state.getLocation.value);
    const dispatch = useDispatch();

    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [comment, setComment] = useState([]);
    
    const imgSrc = 'https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg';

    const apiEx = `https://localhost:7188/api/v1/Room/?id=${id}`;
    const getCommentAPI = `https://localhost:7188/api/v1/AllCommentsByRoom?id=${id}`;

    const initialDateRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'    
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("jwtToken");

                const response = fetch(apiEx, {
                    method: "GET",
                    headers: {"Authorization": `Bearer ${token}`},
                }).then(res => res.json()).then((json) => {setRoom(json); console.log(json); dispatch(onGet(true))});

                fetch(getCommentAPI, {
                    method: "GET",
                    headers: {"Authorization": `Bearer ${token}`},
                }).then(res => res.json()).then((json) => {setComment(json); });


            } catch (e) {
                console.error('Error fetching data:', e);
            }
        };

        fetchData();
    }, [id]);

    return(
        <Container>
            <div className='pt-[250px] max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6 pb-2'>

                    <RoomHead title = {room.title} id={room.id} imageSrc={imgSrc} userID={room.userID}/>
                    <div className='w-full'>
                        <TitlebarBelowMasonryImageList className="w-full"/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        {isGetLocation && (
                            <RoomInfo category={room.category} location={room.location}/>
                        )}
                        <div className='mb-10 md:order-last md:col-span-3'>
                            <RoomReservation price={room.price} />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='grid grid-cols-2 pt-2 mt-6'>
                    {
                        comment.map(
                            (cmt, index) => (
                                <div className='flex flex-col gap-3 pr-5'>
                                    <Comment cmt={cmt}/>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </Container>
    );
}

export default RoomPage;