
import { ArrowLeft } from "lucide-react";

const CreateTicketHeader = () => {
  return (
    <div className="bg-[#2a4674] text-white p-4 pb-20 relative">
      {/* Back Button */}
      <button className="p-2 bg-white rounded-full absolute top-4 left-4">
        <ArrowLeft className="text-[#2a4674]" size={24} />
      </button>
      
      {/* Chat Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <ChatBubbleIcon />
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">Create Ticket</h1>
    </div>
  );
};

// Custom chat bubble icon component
const ChatBubbleIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M42 10H14C11.2386 10 9 12.2386 9 15V33C9 35.7614 11.2386 38 14 38H26L35 45V38H42C44.7614 38 47 35.7614 47 33V15C47 12.2386 44.7614 10 42 10Z" 
      stroke="#FFDE59" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line x1="15" y1="18" x2="41" y2="18" stroke="#FFDE59" strokeWidth="3" strokeLinecap="round"/>
    <line x1="15" y1="24" x2="41" y2="24" stroke="#FFDE59" strokeWidth="3" strokeLinecap="round"/>
    <line x1="15" y1="30" x2="31" y2="30" stroke="#FFDE59" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export default CreateTicketHeader;
