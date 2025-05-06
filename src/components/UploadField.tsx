
import { useState, useRef } from "react";
import { X } from "lucide-react";

interface UploadFieldProps {
  onFileSelect: (file: File | null) => void;
}

const UploadField = ({ onFileSelect }: UploadFieldProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect(file);
      
      // Create preview for image files
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    }
  };
  
  const clearFile = () => {
    setSelectedFile(null);
    setPreview(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className="mt-2 space-y-2">
      {/* Upload Button */}
      <div 
        className="flex items-center gap-4 p-4 border border-gray-200 rounded-3xl cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex-shrink-0">
          <CloudUploadIcon />
        </div>
        <div className="text-gray-600 text-lg">
          Upload Image /Video
        </div>
        <input
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFileSelect}
          ref={fileInputRef}
        />
      </div>
      
      {/* Preview */}
      {preview && (
        <div className="relative inline-block mt-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center overflow-hidden">
              <img 
                src={preview} 
                alt="Preview" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <button 
              className="bg-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
              onClick={clearFile}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Custom cloud upload icon component
const CloudUploadIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M19.5 19.5L15 15M15 15L10.5 19.5M15 15V25.5M8.0039 21.0036C6.6321 20.4365 5.50921 19.3582 4.90777 18.0012C4.30634 16.6441 4.28084 15.1072 4.83686 13.731C5.39287 12.3549 6.48707 11.2411 7.85171 10.6612C9.21636 10.0813 10.7504 10.08 12.1159 10.6575V10.6575C12.9328 9.55301 14.075 8.72562 15.3845 8.29895C16.694 7.87229 18.1009 7.86914 19.4124 8.29C20.7238 8.71086 21.8705 9.53339 22.6939 10.6358C23.5173 11.7381 23.9742 13.0742 23.9993 14.4577V14.4577C25.0896 14.9596 25.9818 15.8259 26.5156 16.9005C27.0495 17.9752 27.1927 19.1952 26.921 20.366C26.6493 21.5368 25.9793 22.5861 25.0262 23.3364C24.0732 24.0867 22.8939 24.4918 21.6839 24.4836H19.5" 
      stroke="black" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default UploadField;
