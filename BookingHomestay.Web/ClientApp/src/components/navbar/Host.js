import Container from '../Container';
import { useParams, useSearchParams } from 'react-router-dom';
import HostBox from './HostBox';
import {useLocation } from 'react-router-dom';

const Host = () => {
    const location = useLocation();
    const { hash, pathname, search } = location;
    console.log(pathname);

    return(
        <Container>
            <div className=" flex flex-row items-center overflow-x-auto">
                <HostBox label={'Hôm nay'} name={'today'} />
                <HostBox label={'Nhà/phòng cho thuê'} name={'listing'} />
            </div>  
        </Container>
    );
}

export default Host;