import classNames from 'classnames/bind';
import RoomCategory from './roomCategory';
import { useState, useEffect, useRef } from 'react';
import mapboxgl from '@goongmaps/goong-js';
import '@goongmaps/goong-js/dist/goong-js.css';
import styles from '../../addpost/Room.module.scss';

const cx = classNames.bind(styles);

const RoomInfo = (category) => {
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
            zoom: 18,
        });

        markerRef.current = new mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat([longitude, latitude])
            .addTo(mapRef.current);

        markerRef.current.on('dragend', onDragEnd);

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
    // Map (end)

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
            {category & (
                <RoomCategory label={category.label} icon={category.icon} description={category.description}/>
            )}
            <hr/>
            <div className='text-lg font-light text-neutral-500'>
                My description
            </div>
            {/* Map ---*/}
            <div ref={mapContainerRef} className={cx('map__container', 'shadow-md')} />
            {/* --- */}
        </div>
    );
}

export default RoomInfo;