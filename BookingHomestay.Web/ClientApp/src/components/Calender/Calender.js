import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, Range, RangeKeyDict } from 'react-date-range';

import {useState} from 'react';

const Calender = ({value, onChange, disableDates}) => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
      
    return(
        <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']}
        />
    );
}

export default Calender;