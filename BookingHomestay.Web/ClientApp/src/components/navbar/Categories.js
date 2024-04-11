import {TbBeach} from 'react-icons/tb';
import {GiWindmill} from 'react-icons/wi';
import CategoryBox from '../CategoryBox';
import Container from '../Container';
import { useParams } from 'react-router-dom';


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
    const param = useParams();


    return(
        <Container>
            <div className=" flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map((item) => (
                        <CategoryBox key={item.label} label={item.label}
                         description={item.description} icon={item.icon} selected={item.label}></CategoryBox>
                    ))
                }
                
            </div>
        </Container>
    );
}

export default Categories;