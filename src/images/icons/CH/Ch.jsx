import React from 'react';

export const Ch = ({ onChange }) => {
  const lang = 'ch';
  const handleClick = () => {
    onChange(lang);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 256 256"
      className='ch'
      onClick={handleClick}
    >
      <g
        className='ch__G'
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <circle
          className='ch__C'
          cx="45"
          cy="45"
          r="45"
          transform=" matrix(1 0 0 1 0 0) "
        />
        <polygon
          className='ch__P'
          points="25.78,27.66 22.93,18.9 20.09,27.66 10.85,27.66 18.32,33.09 15.47,41.87 22.93,36.44 30.4,41.87 27.55,33.09 35.02,27.66 "
          transform=" matrix(1 0 0 1 0 0) "
        />
        <polygon
          className='ch__P'
          points="43.5,20.39 45.09,23.03 45.36,19.96 48.36,19.27 45.53,18.07 45.8,15 43.78,17.32 40.95,16.12 42.53,18.76 40.51,21.07 "
          transform=" matrix(1 0 0 1 0 0) "
        />
        <polygon
          className='ch__P'
          points="51.81,31.5 53.25,28.77 56.29,29.3 54.14,27.09 55.58,24.38 52.82,25.73 50.67,23.52 51.11,26.57 48.35,27.92 51.38,28.45 "
          transform=" matrix(1 0 0 1 0 0) "
        />
        <polygon
          className='ch__P'
          points="54.1,40.5 56.52,38.6 53.45,38.71 52.39,35.82 51.54,38.78 48.48,38.89 51.02,40.6 50.17,43.56 52.6,41.67 55.15,43.39 "
          transform=" matrix(1 0 0 1 0 0) "
        />
        <polygon
          className='ch__P'
          points="45.43,47.63 45.57,44.56 43.65,46.96 40.77,45.88 42.46,48.44 40.54,50.85 43.51,50.03 45.2,52.61 45.34,49.53 48.31,48.72 "
          transform=" matrix(1 0 0 1 0 0) "
        />
      </g>
    </svg>
  );
};
