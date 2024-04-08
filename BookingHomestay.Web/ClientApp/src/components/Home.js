import React, { Component } from 'react';
import Container from './Container';
import RoomCard from './listroom/RoomCard'
import {useCallback} from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {

    const [rooms, setRooms] = useState([]);
    const [page, setPage] = useState(1);
    const apiEx = `https://localhost:7188/api/Room`;
    const [hasMore, setHasMore] = useState(true); // Track if there are more posts to load

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.post(apiEx);
                const data = response.data;

                console.log(data);
                
                // Update posts state with new data
                setRooms(data);

                // Check if there are more posts to load
                if (data.length === 0) {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <Container>
            <div className=' pt-[150px] grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 '>
                {
                    rooms.map(
                        (room, index) => (
                            <RoomCard key={index} Room={room}/>
                        )
                    )
                }
            </div>
        </Container>
    );
}

export default Home;