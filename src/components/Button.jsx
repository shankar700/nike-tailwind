const Button = ({ label = "button label", iconURL }) => {
  return (
    <button className="flex jutify-center items-center font-montserrat leading-1 bg-coral-red px-7 py-4 gap-2 rounded-full text-white border border-coral-red">
      {label}
      <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="icon" />
    </button>
  );
};

export default Button;
