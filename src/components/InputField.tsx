
import { User, Pen, FileText } from "lucide-react";
import { ChangeEvent } from "react";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  icon: "user" | "pen" | "file-text";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  specialStyle?: boolean;
}

const InputField = ({ 
  icon, 
  value, 
  onChange, 
  placeholder,
  specialStyle = false 
}: InputFieldProps) => {
  const renderIcon = () => {
    switch(icon) {
      case "user":
        return <UserIcon />;
      case "pen":
        return <Pen size={24} color="#000" />;
      case "file-text":
        return <LicensePlateIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "flex items-center gap-4 p-4 border rounded-3xl",
      specialStyle ? "bg-[#fffaf0] border-[#ffde59]" : "bg-white border-gray-200"
    )}>
      <div className="flex-shrink-0">
        {renderIcon()}
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent border-none outline-none text-gray-600 placeholder-gray-500 text-lg",
          specialStyle ? "placeholder-[#8E9196]" : "placeholder-[#8E9196]"
        )}
      />
    </div>
  );
};

// Custom user icon component
const UserIcon = () => (
  <div className="w-[30px] h-[30px] bg-black rounded-full overflow-hidden flex items-center justify-center">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="12" r="6" fill="white"/>
      <path d="M8 28C8 22.4772 12.4772 18 18 18C23.5228 18 28 22.4772 28 28V32H8V28Z" fill="white"/>
    </svg>
  </div>
);

// Custom license plate icon component
const LicensePlateIcon = () => (
  <div className="border-2 border-black rounded-sm px-1">
    <span className="text-xs font-mono">ACF-245</span>
  </div>
);

export default InputField;
