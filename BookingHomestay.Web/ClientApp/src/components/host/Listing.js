import React from 'react';
import { CiSearch } from "react-icons/ci";
import Container from '../Container';
import HostNavMenu from '../navbar/HostNavMenu';
import { GoPlus } from "react-icons/go";
import './host.css';

const data = [
  { name: 'Tâm An homestay', location: '20 Nguyễn Tri Phương', status: 'Đang hoạt động', image: './images/208111834.jpg' },
  { name: 'ChocoHouse', location: '73 Thạch Hãn', status: 'Đang hoạt động', image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/493749357.jpg?k=32d2416fef73e71c126125b324faee58c5748d384c17f55a773ff85611b3702d&o=&hp=1" },
  { name: 'Dory Homestay homestay', location: '106 Hải Triều', status: 'Đang hoạt động', image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/439654472.jpg?k=c9d53eb080e067b1b84235aa822f264c1188e0ecd1acec5f9aed7238a2f1f3c1&o=&hp=1" },
];

const columns = [{
    header: 'Mục cho thuê',
    accessor: 'name' // Cái này sẽ là đại diện cho giá trị của thuộc tính của phần tử ở cột này. Với thuộc tính đơn giản thì chỉ cần truyền vào key của đối tượng trong data.
  }, {
    header: 'Vị trí',
    accessor: 'location',
    Cell: props => <div className=' font-bold text-sm'>{props.value}</div> // Tùy biến component Cell.
  }, {
    header: 'Trạng thái',
    accessor: 'status' // Tùy biến giá trị đại diện cho giá trị của thuộc tính của phần tử ở cột này.
  }];

const Listing = () => {
  return (
    <div>
        <HostNavMenu/>
        <div>
            <Container>
                <div className='pt-[150px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='text-2xl font-bold'>
                            Nhà/phòng cho thuê của bạn
                        </div>
                        <div className='flex flex-row px-4 gap-2'>
                            <div className=' rounded-full bg-neutral-100 p-[12px] cursor-pointer'>
                                <CiSearch size={'24px'}/>
                            </div>
                            <div className=' rounded-full bg-neutral-100 p-[12px] cursor-pointer'>
                                <GoPlus size={'24px'}/>
                            </div>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <th>Mục cho thuê</th>
                            <th>Vị trí</th>
                            <th>Trạng thái</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr className='cursor-pointer hover:bg-neutral-100 rounded-xl mx-2' key={key}>
                                    <td className='font-bold text-balance'>
                                        <div className='flex flex-row'>
                                            <div>
                                                <img className='h-12 w-12 rounded-md' src={val.image} alt='Avatar'></img>
                                            </div>
                                            <div className='p-2'>
                                                {val.name}
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-light text-balance'>{val.location}</td>
                                    <td className='font-semibold text-balance'>
                                        <div className='flex flex-row'>
                                            <div className='p-1 items-center'>
                                                <svg viewBox="0 0 16 16" width={"12"} height={"12"} xmlns="http://www.w3.org/2000/svg">
                                                    <circle r="8" cx="8" cy="8" fill="red" />
                                                </svg> 
                                            </div>
                                            <div>
                                                {val.status}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </Container>
        </div>
    </div>
  );
};

export default Listing;

