import classNames from 'classnames/bind';
import RoomCategory from './roomCategory';
import { useState, useEffect, useRef, useCallback } from 'react';
import mapboxgl from '@goongmaps/goong-js';
import '@goongmaps/goong-js/dist/goong-js.css';
import styles from '../../addpost/Room.module.scss';
import Comment from '../../Comment';
import { useSelector, useDispatch } from "react-redux";
import { onGet, onStopGet } from '../../../redux/getLocationSlice';

const cx = classNames.bind(styles);

const RoomInfo = (room) => {
    const isGetLocation= useSelector((state) => state.getLocation.value);
    const dispatch = useDispatch();

    // Map (begin)
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    const [latitude, setLatitude] = useState(16.462325713021514);
    const [longitude, setLongitude] = useState(107.61745585099027);

    useEffect(() => {
        
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'https://tiles.goong.io/assets/goong_map_web.json',
            center: [longitude, latitude],
            zoom: 15,
        });

        markerRef.current = new mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat([longitude, latitude])
            .addTo(mapRef.current);

        markerRef.current.on('dragend', onDragEnd);

        if(room.location){
            console.log("is setting location in useEffect");
            setLatitude(room.location.latitude);
            setLongitude(room.location.longitude);
        }

        return () => {
            mapRef.current.remove();
        };
    }, []);

    function onDragEnd() {
        const lngLat = markerRef.current.getLngLat();
        setLatitude(lngLat.lat);
        setLongitude(lngLat.lng);
    }

    useEffect(() => {
        if (markerRef.current) {
            markerRef.current.setLngLat([longitude, latitude]);
            mapRef.current.flyTo({ center: [longitude, latitude] });
        }

    }, [latitude, longitude]);

    useEffect(() => {
        if(room.location){
            setLatitude(room.location.latitude);
            setLongitude(room.location.longitude);
        }
    },[room.location]);

    // Map (end)

    const handleGetLocation = useCallback(() => {
        dispatch(onStopGet(false));

        setLatitude(room.location.latitude);
        setLongitude(room.location.longitude);
    });

    //
    // if(isGetLocation){
    //     dispatch(onStopGet(false));

    //     console.log(room.location);
    //     setLatitude(room.location.latitude);
    //     setLongitude(room.location.longitude);

    //     markerRef.current.setLngLat([longitude, latitude]);
    //     mapRef.current.flyTo({ center: [longitude, latitude] });
    // }

    return(
        <div className=" col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex flex-row items-center gap-2">
                    Tâm An Homestay
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    <div>
                        3 Khách
                    </div>
                    <div>
                        3 Phòng ngủ
                    </div>
                    <div>
                        8 Giường
                    </div>
                    <div>
                        9 Phòng tắm
                    </div>
                </div>

            </div>
            <hr/>
            {
                // room.category & (
                //     <RoomCategory label={room.category.label} icon={room.category.icon} description={room.category.description}/>
                // )
            }
            <hr/>
            <div className='text-lg font-light text-neutral-800'>
            Cabin hai phòng ngủ mới được xây dựng là một công trình kiến trúc hiện đại giữa thế kỷ.
             Nằm trên đỉnh đồi, chỗ ở có tầm nhìn bao quát 360 độ về Núi Batulao hoàng hôn tuyệt đẹp, làm dịu Vịnh Balayan và các vùng đất nông nghiệp tươi đẹp của Nasugbu.
             Địa hình và độ cao độc đáo của nó cho phép khách ôm theo gió núi trong lành và thời tiết mát mẻ thực tế quanh năm. 
             Bằng cách kết hợp vẻ đẹp thô sơ của vùng nông thôn và sự thoải mái của khách sạn boutique, cabin mang đến trải nghiệm R & R được xác định lại.
            </div>
            {/* Map ---*/}
            <div ref={mapContainerRef} className={cx('map__container', 'shadow-md')} />
            {/* --- */}
            
        </div>
    );
}

export default RoomInfo;