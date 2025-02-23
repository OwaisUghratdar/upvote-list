import React from 'react'

const Upvote = ({ isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        cursor: "pointer"
      }}
    >
      <svg 
        fill="#000000" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect 
          x="2" 
          y="2" 
          width="20" 
          height="20" 
          rx="2" 
          style={{ fill: isSelected ? "#E5E8FD" : "#F4F6F8" }}
        />
        <path 
          d="M15.71,9.29l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,9.29Z" 
          style={{ fill: isSelected ? "#253CF2" : "#343A40" }}
        />
      </svg>
    </div>
  )
}

export default Upvote