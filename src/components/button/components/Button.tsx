const Button = ({ data }: any) => {
  return (
    <div className="relative w-fit cursor-pointer opacity-90 hover:opacity-100 transition-opacity   rounded-[8px] bg-gradient-to-t bg-gray-[600] active:scale-95">
      <span className="w-full h-full flex items-center gap-2 px-4 py-2  text-white  rounded-[8px] dark:bg-[#632115] bg-[#d27785]">
        {data?.name}
      </span>
    </div>
  );
};

export default Button;
