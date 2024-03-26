import React from 'react'

interface CustomButtonTypes {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  cls?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const CustomButton: React.FC<CustomButtonTypes> = ({
  type,
  onClick,
  children,
  cls=''
}) => {
  return (
    <button type={type} className={`${cls} block text-center pointer rounded-md text-x font-inter hover:scale-95 transition-all`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
