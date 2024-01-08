const Button = ({ label = "button label", iconURL = "", transparent = false, fullWidth = false }) => {
  return (
    <button className={`flex justify-center items-center font-montserrat leading-1 ${transparent? "bg-transparent" : "bg-coral-red"} px-7 py-4 gap-2 rounded-full ${transparent? "text-slate-gray" : "text-white"} border ${transparent? "border-slate-gray" : "border-coral-red"}} ${fullWidth && "w-full"}`}>
      {label}
      {iconURL&&<img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="icon" />}
    </button>
  );
};

export default Button;
