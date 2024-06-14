// import React from 'react';
// import dayjs from 'dayjs';
// import { TimePicker } from 'antd';
// const format = 'HH:mm';
// const TimePic = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
// export {TimePic};

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';

const format = 'HH:mm';

const TimePic = () => {
  const [selectedTime, setSelectedTime] = useState(dayjs('12:08', format)); // Initial time

  // Function to handle time change
  const handleTimeChange = async(time) => {
    const finaltime = time.format(format);
    alert(finaltime)
    await setSelectedTime(finaltime);
  };

  return (
    <div>
      <TimePicker
      className='time'
      style={{
        border: '1px solid #000',
        outline: 0,
        backgroundColor: 'var(--color-white)',
        height: '51px',
        borderRadius: 8,
        width: '30%',
        padding: '8px'
      }}
        defaultValue={selectedTime} // Set default time
        format={format} // Set the display format
        onChange={handleTimeChange} // Handle time change
      />
      </div>
  );
};

export {TimePic};

