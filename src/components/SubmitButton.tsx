
interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <button 
      className="w-full bg-[#2a4674] text-white py-4 rounded-full text-xl font-semibold"
      onClick={onClick}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
