import {BiSearch} from 'react-icons/bi'
import classNames from 'classnames/bind';
import {useCallback, useState, useRef, useEffect} from 'react';
import SearchBar from'../search/Search';
import Calendar from '../Calender/Calender';
import mapboxgl from '@goongmaps/goong-js';
import '@goongmaps/goong-js/dist/goong-js.css';
import styles from '../addpost/Room.module.scss';
import axios from 'axios';
import Counter from '../inputs/Counter';


const goongApi_Rob = 'oC8CNdh20xrH8Dpm0SIkZYQqBijW847QWVmBE0DB';
mapboxgl.accessToken = 'wnicbAmnNkoMHNYUKWnlFHezV189FjmMwkNJ7hKW';

const cx = classNames.bind(styles);

const Search = () => {
  const handleSearchItemClick = (result) => {
    setPlaceId(result.place_id);

    // window.scrollTo({
    //     top: confirmationRef.current.offsetTop - 100,
    //     behavior: 'smooth',
    // });
};

  // Map (begin)
  const mapContainerRef = useRef(null); 
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [latitude, setLatitude] = useState(16.462325713021514); 
  const [longitude, setLongitude] = useState(107.61745585099027);
  const [placeId, setPlaceId] = useState('');
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("load the map");
    
    if(!isOpen){
      console.log("Chua click");
      return;
    }

    if(!document.getElementById("map")){
      console.log("can not get id");
      return;
    }

    mapRef.current = new mapboxgl.Map({
      container: document.getElementById("map"),
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

    return () => {
        mapRef.current.remove();
    };
  }, []);

  const handleOpenMapClick = () => {
      if(!document.getElementById("map")){
        console.log("can not get id");
        return;
      }
      if(isOpen){
        console.log("Chua click");
        return;
      }
      mapRef.current = new mapboxgl.Map({
        container: document.getElementById("map"),
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

      return () => {
          mapRef.current.remove();
      };
  }

  function onDragEnd() {
      
      const lngLat = markerRef.current.getLngLat();
      setLatitude(lngLat.lat);
      setLongitude(lngLat.lng);
    }

    const onCount = (value) => {
      setCount(value);
    }

  useEffect(() => {
      if (markerRef.current) {
        console.log("Fly to");
        markerRef.current.setLngLat([longitude, latitude]);
        mapRef.current.flyTo({ center: [longitude, latitude] });
      }
  }, [latitude, longitude]);
  // Map (end)

  // Xử lý placeId để lấy latitude, longitude
  useEffect(() => {
    if (!placeId.trim()) {
        return;
    }

    const fetchApi = async () => {
        try {
            const response = await axios.get(`https://rsapi.goong.io/Place/Detail`, {
                params: {
                    place_id: placeId,
                    api_key: goongApi_Rob,
                },
            });

            setLatitude(response.data.result.geometry.location.lat);
            setLongitude(response.data.result.geometry.location.lng);
        } catch (error) {
            console.error(error);
        }
    };

    fetchApi();
  }, [placeId]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCalender, setIsOpenCal] = useState(false);
  const [isOpenCounter, setIsCounter] = useState(false);

  const toggleOpen = useCallback(
      () => {
          setIsOpen((value) => !value);
          // delay
          //
          setTimeout(() => {
              handleOpenMapClick();
          }, 1500);
          //
          
      }
  ,[]);

  const toggleOpenCal = useCallback(
    () => {
      setIsOpenCal((value) => !value);
    }, []
  );

  const toggleOpenCounter = useCallback(() => {
    setIsCounter((value) => !value);
  },[]);

  return ( 
      <div
        className="
          border-[1px] 
          w-full 
          rounded-full 
          shadow-sm 
          hover:shadow-md 
          transition 
          cursor-pointer
          md:w-auto
        "
      >
        <div 
          className="
            flex
            flex-row
            items-center
            justify-between
            h-full
            gap-3
          "
        >
          <div onClick={toggleOpen}
            className="
              text-sm 
              font-semibold 
              pr-6
              pl-6
              py-[11px]
              h-full rounded-full hover:bg-neutral-100 
            "
          >
            Địa điểm
          </div>

          {isOpen && (
              <div className=' absolute rounded-xl w-full top-20 left-0 right-0 max-w-[450px] md:w-auto shadow-sm mx-auto text-center overflow-hidden text-sm'>
                  <div className='flex flex-col cursor-pointer bg-white'>
                      <SearchBar onSearchItemClick={handleSearchItemClick}/>
                  </div>
                  {/* Map ---*/}
                  <div id='map' ref={e => {mapContainerRef.current = e;}} className={cx('map_container', 'shadow-md')} />
                  {/* --- */}
              </div>
          )}
          

          {isOpenCalender && (
              <div className=' absolute rounded-xl w-full top-20 left-0 right-0 max-w-[450px] md:w-auto shadow-sm mx-auto text-center overflow-hidden text-sm'>
                  <Calendar/>
              </div>    
          )}

          <div onClick={toggleOpenCal}
            className="
              hidden 
              sm:block 
              text-sm 
              font-semibold 
              px-6 
              py-[11px]
              flex-1 
              text-center rounded-full
            hover:bg-neutral-200
              hover:border-none
            "
          >
            Tuần 
          </div>
          
          <div 
            className="
              text-sm 
              pl-6 
              py-1
              pr-1
              text-gray-600 
              flex 
              flex-row 
              items-center 
              gap-3
            hover:bg-neutral-200 rounded-full
              h-full
            "
          >
            {isOpenCounter && (
              <div className=' absolute bg-white rounded-xl w-full top-20 left-0 right-0 max-w-[450px] md:w-auto shadow-sm mx-auto text-center overflow-hidden text-sm'>
                  <Counter title="Khách" subtitle="Số người 1 phòng" value={count} onChange={(value) => {onCount(value);}}/>
              </div>    
            )}  

            <div onClick={toggleOpenCounter} className="hidden sm:block">Khách</div>
            <div className="p-2 bg-rose-500 rounded-full text-white">
              <BiSearch size={18}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Search;