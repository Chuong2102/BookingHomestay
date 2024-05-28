import PropTypes from 'prop-types'

const ReservationRoom = ({selected, label}) => {
    return(
        <div className={`m-2 p-2 rounded-full p-y font-normal hover:text-neutral-800
                         cursor-pointer transition ${selected ? 'border-2 border-black bg-neutral-200' : 'border border-neutral-500'} 
                         ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}>
            {label}
        </div>
    );
}
ReservationRoom.propTypes = {
    selected: PropTypes.bool,
    label: PropTypes.string
}

export default ReservationRoom;
