import {TbBeach} from 'react-icons/tb';
import {GiWindmill} from 'react-icons/wi';
import CategoryBox from '../CategoryBox';
import Container from '../Container';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import qs from 'query-string';


const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Gan bien'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    },
    {
        label: 'Windmill',
        icon: TbBeach,
        description: 'Gan coi xoay gio'
    }
]


const Categories = () => {
    const params = useSearchParams();
    
    return(
        <Container>
            <div className=" flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map((item) => (
                        <CategoryBox key={item.label} label={item.label}
                         description={item.description} icon={item.icon}></CategoryBox>
                    ))
                }
                
            </div>
        </Container>
    );
}

export default Categories;