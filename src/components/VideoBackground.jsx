import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative w-full">
      <div className='flex flex-col justify-center items-center py-20 relative z-20'>
        <p className='text-white w-[60vw] text-center font-bold text-[3rem]'>How does our Recruitment process help in hiring?</p>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-[40vh] object-cover"
          autoPlay
          loop
          muted
        >
          <source src='/videoAssets/laptopBG.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default VideoBackground;
