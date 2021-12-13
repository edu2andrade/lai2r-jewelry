// import react from "react";

const Button = ({ text, textColor, bgColor }) => (
  <button className={`my-2 px-2 h-8 w-36 flex items-center justify-around ${bgColor} text-sm ${textColor} border hover:border-darkGray hover:bg-transparent hover:text-darkGray duration-300 ease-in-out cursor-pointer`}>
    {text}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
)

export default Button;