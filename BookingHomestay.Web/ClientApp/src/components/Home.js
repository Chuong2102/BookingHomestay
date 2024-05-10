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

const Home = () => {

    const [rooms, setRooms] = useState([]);
    const [page, setPage] = useState(1);
    const apiEx = ` https://localhost:7188/api/v1/Rooms`;
    const [hasMore, setHasMore] = useState(true); // Track if there are more posts to load

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");

        console.log("Start call Rooms API");
        console.log("JWTtoken: ");
        console.log(token);

        fetch(apiEx, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`},
        }).then(res => res.json()).then(json => setRooms(json));

    }, []);

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