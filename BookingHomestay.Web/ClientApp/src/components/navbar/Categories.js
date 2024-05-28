import {TbBeach, TbAirConditioning } from 'react-icons/tb';
import {GiWindmill} from 'react-icons/wi';
import { FaWifi, FaSwimmingPool  } from "react-icons/fa";
import { LuRefrigerator, LuParkingCircle } from "react-icons/lu";
import { MdBalcony, MdSoupKitchen  } from "react-icons/md";

import CategoryBox from '../CategoryBox';
import Container from '../Container';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import qs from 'query-string';
import { icon } from '@fortawesome/fontawesome-svg-core';


export const categories = [
    {
        label: 'Biển',
        icon: TbBeach,
        name: 'Beach',
        description: 'Gan bien'
    },
    {
        label: 'Wifi miễn phí',
        name: 'Wifi',
        icon: FaWifi,
        description: 'Co wifi mien phi'
    },
    {
        label: 'Tủ lạnh',
        name: 'Refrigerator',
        icon: LuRefrigerator,
        description: 'Có tủ lạnh miễn phí'
    },
    {
        label: 'Chỗ đỗ xe',
        icon: LuParkingCircle,
        name: 'Parking lot',
        description: 'Có không gian đậu xe'
    },
    {
        label: 'Bể bơi',
        name: 'Swimming pool',
        icon: FaSwimmingPool,
        description: 'Có bể bơi miễn phí'
    },
    {
        label: 'Máy điều hòa',
        name: 'Air condition',
        icon: TbAirConditioning,
        description: 'Có máy điều hòa trong phòng'
    },
    {
        label: 'Ban công',
        name: 'Balcony',
        icon: MdBalcony,
        description: 'Phòng trên tầng có ban công'
    },
    {
        label: 'Bếp riêng',
        name: 'Kitchen',
        icon: MdSoupKitchen,
        description: 'Có bếp riêng phục vụ nấu nướng'
    }
]


const Categories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');

    //console.log(category);

    return(
        <Container>
            <div className=" flex flex-row items-center overflow-x-auto">
                {
                    categories.map((item) => (
                        <CategoryBox key={item.label} label={item.label} name={item.name}
                         description={item.description} icon={item.icon} selected={category == item.name}></CategoryBox>
                    ))
                }
                
            </div>
        </Container>
    );
}

export default Categories;