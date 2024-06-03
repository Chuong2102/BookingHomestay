import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import PropTypes from 'prop-types';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';

import {useState, useCallback} from 'react';

const Calender = ({value, onChange, disableDates}) => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const onSetDate = useCallback((data) => {
      onChange(data.startDate, data.endDate);
    }, [state]);
      
    return(
        <DateRange
            editableDateInputs={true}
            onChange={item => {setState([item.selection]); onSetDate(item.selection); }}
            moveRangeOnFirstSelection={false}
            ranges={state}
            rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']}
        />
    );
}

Calender.propTypes = {
  onChange: PropTypes.func,
  
}

export default Calender;