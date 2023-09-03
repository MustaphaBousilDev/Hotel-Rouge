import React, { FC } from 'react';
import CustomIMG from './ImageCom/CustomIMG';
import background from "../assets/backgrounds/backgroundLoading.jpeg"
import Shadow from './Shadow/Shadow';

const LoadingSpinner: FC = () => {
  const style = {
    margin: '10px auto',
    display: 'block',
    shapeRendering: 'auto',
    zIndex: 2,
  };

  return (
    <div className='flex w-screen h-screen  flex-col items-center 
    justify-center  bg-gradient-to-br from-blue-500 to-blue-400'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={style}
        width="200px"
        className='z-10 bg-red'
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50 50)">
          <g transform="scale(0.7)">
            <g transform="translate(-50 -50)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="0.7575757575757576s"
                />
                <path fillOpacity="0.8" fill="#93dbe9" d="M50 50L50 0A50 50 0 0 1 100 50Z" />
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="1.0101010101010102s"
                />
                <path fillOpacity="0.8" fill="#689cc5" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)" />
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="1.5151515151515151s"
                />
                <path fillOpacity="0.8" fill="#bfc9e7" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)" />
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="3.0303030303030303s"
                />
                <path fillOpacity="0.8" fill="#6b80e2" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p className="mt-4 text-5xl font-bold text-white">Fucking Loading.</p>
    </div>
  );
};

export default LoadingSpinner;