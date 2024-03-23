const Star = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-[13.63px] w-[14.26px] ${
        filled ? "text-[#FC5185]" : "text-[#FC5185]"
      }`}
      fill={filled ? "#FC5185" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2l3.09 6.32L22 9.27l-5 4.86 1.18 6.88L12 17.77l-6.18 3.24L7 14.13l-5-4.86 6.91-.95L12 2z"
      />
    </svg>
  );
};

export default Star;
