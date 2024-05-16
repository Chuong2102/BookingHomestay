import React, { Component } from 'react';
import Container from './Container';
import RoomCard from './listroom/RoomCard'
import {useCallback} from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-feather';
import { NavLink, json } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useSearchParams } from 'react-router-dom';
import getRooms from '../app/actions/getRooms';
import { useSelector, useDispatch } from "react-redux";
import { onGet, onStopGet } from '../redux/getRoomsSlice';

const Home = () => {

    const [rooms, setRooms] = useState([]);
    const [page, setPage] = useState(1);
    const apiEx = `https://localhost:7188/api/v1/SearchRooms`;
    const [hasMore, setHasMore] = useState(true); // Track if there are more posts to load
    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] = useState('');
    
    const isGetRoom= useSelector((state) => state.getRooms.value);
    const dispatch = useDispatch();

    const getListRooms = async () => {
        const category = searchParams.get('category');
        setCategory(category);

        console.log("NGU");
        console.log(category);

        const r = await getRooms(category);
        setRooms(r);
    }

    useEffect(() => {
        getListRooms();
    }, [category]);

    if(isGetRoom){
        dispatch(onStopGet(false));
        getListRooms();
    }

    //console.log(rooms);

    return (
        <Container>
            <ToastContainer />
            <div className=' pt-[200px] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 '>
                {
                    rooms.map(
                        (room, index) => (
                            <NavLink to={`/detail/${room.id}`} key={index}>
                                <RoomCard key={index} Room={room}/>
                            </NavLink>
                        )
                    )
                }
            </div>
        </Container>
    );
}

export default Home;