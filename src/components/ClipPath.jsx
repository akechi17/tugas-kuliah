import React from "react";

const ClipPath = () => {
  return (
    <button id='js-btn_clipPath' className='btn_clipPath'>
      <span className='btn_clipPath_inner'>
        <span className='btn_clipPath_image btn_clipPath_image__ring'>
          <img src='icons/ic-text-ring.svg' alt='ic-text-ring' />
        </span>
        <span className='btn_clipPath_image btn_clipPath_image__touch'>
          <img src='icons/ic-touch.svg' alt='ic-touch' />
        </span>
      </span>
    </button>
  );
};

export default ClipPath;