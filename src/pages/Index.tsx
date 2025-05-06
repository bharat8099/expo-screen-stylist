
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import CreateTicketHeader from "@/components/CreateTicketHeader";
import InputField from "@/components/InputField";
import UploadField from "@/components/UploadField";
import SubmitButton from "@/components/SubmitButton";

const Index = () => {
  const [dealerName, setDealerName] = useState("");
  const [complaint, setComplaint] = useState("");
  const [vehicleRegNo, setVehicleRegNo] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      dealerName,
      complaint,
      vehicleRegNo,
      hasUploadedFile: !!uploadedFile
    });
    
    // Reset form after submission
    setDealerName("");
    setComplaint("");
    setVehicleRegNo("");
    setUploadedFile(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <CreateTicketHeader />
      
      {/* Form Section */}
      <div className="flex-1 p-4 pt-6 flex flex-col gap-4">
        {/* Dealer/Distributor Input */}
        <InputField 
          icon="user"
          value={dealerName}
          onChange={(e) => setDealerName(e.target.value)}
          placeholder="Write Dealer or Distributor / Salesman Name /username"
        />
        
        {/* Complaint Input */}
        <InputField 
          icon="pen"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Write Your Complaint Here"
        />
        
        {/* Vehicle Registration Input */}
        <InputField 
          icon="file-text"
          value={vehicleRegNo}
          onChange={(e) => setVehicleRegNo(e.target.value)}
          placeholder="Vehicle Register No."
          specialStyle={true}
        />
        
        {/* Upload Field */}
        <UploadField
          onFileSelect={(file) => setUploadedFile(file)} 
        />
        
        {/* Submit Button */}
        <div className="mt-auto">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Index;
