import Container from '../Container';
import HostNavMenu from '../navbar/HostNavMenu';
import ReservationRoom from './ReservationRoom';
import ReservationRoomCard from './ReservationRoomCard';

const DashboardTabs = () => {
    
    return (
      <div>
        <HostNavMenu/>
        <div>
            <Container>
                <div className='pt-[150px]'>
                    <div className="text-2xl font-bold p-3">
                        Chỗ/phòng được đặt của bạn
                    </div>
                    <div className='flex flex-row'>
                        <ReservationRoom label={'Sắp trả phòng'} selected/>
                        <ReservationRoom label={'Sắp đến'} />
                        <ReservationRoom label={'Sắp tới'} />
                        
                    </div>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8'>
                        <ReservationRoomCard state={'Sắp trả phòng'} roomName={'Tâm An'} guest={'Chương Đoàn'} startDate={'20-05-2024'} endDate={'26-05-2024'}/>
                        <ReservationRoomCard state={'Sắp trả phòng'} roomName={'Tâm An'} guest={'Nhật Nguyễn'} startDate={'20-05-2024'} endDate={'26-05-2024'}/>
                        <ReservationRoomCard state={'Sắp trả phòng'} roomName={'Phinholic'} guest={'Cảnh Hiếu'} startDate={'20-05-2024'} endDate={'26-05-2024'}/>
                        <ReservationRoomCard state={'Sắp trả phòng'} roomName={'Tan. homestay'} guest={'Lộc'} startDate={'20-05-2024'} endDate={'26-05-2024'}/>
                        <ReservationRoomCard state={'Sắp trả phòng'} roomName={'Tan. homestay'} guest={'Đoàn Lê'} startDate={'20-05-2024'} endDate={'26-05-2024'}/>

                    </div>
                </div>
            </Container>
        </div>
      </div>
    );
}

export default DashboardTabs;


