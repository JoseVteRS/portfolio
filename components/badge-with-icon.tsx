import React from 'react'



const BadgeWithIcon = ({ icon: Icon, color = 'fill-black', size = 'w-8 h-8' }: any) => {
  return (
    <div
      className={`${size} p-5 grid place-content-center`}
    >
      <Icon className={`${size} ${color}`} />
    </div>
  );
};

export default BadgeWithIcon