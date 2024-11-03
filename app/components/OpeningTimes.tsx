import React from 'react';

type OpeningTimesProps = {
  baantijden?: boolean;
};

const OpeningTimes: React.FC<OpeningTimesProps> = ({ baantijden = false }) => {
  return (
    <div>
      {baantijden ? (
        <>
          <ul>
            <li>Maandag 19:30 - 22:00</li>
            <li>Donderdag 19:30 - 22:00</li>
            <li>Vrijdag 19:30 - 22:30</li>
          </ul>
        </>
      ) : (
        <ul>
          <li>Maandag 19:30 - 22:30</li>
          <li>Donderdag 19:30 - 22:30</li>
          <li>Vrijdag 19:30 - 23:00</li>
        </ul>
      )}
    </div>
  );
};

export default OpeningTimes;
