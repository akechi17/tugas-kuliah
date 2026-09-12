import React, { useEffect, useState } from 'react';

const SkipToContent = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <a
      href="#main-content"
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        position: 'absolute',
        top: isFocused ? '10px' : '-100px',
        left: '10px',
        padding: '1rem 1.5rem',
        backgroundColor: '#B7AB98',
        color: '#0d0d0d',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        zIndex: 10000,
        transition: 'top 0.3s ease-in-out',
        ':focus': {
          top: '10px'
        }
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
