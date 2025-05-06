
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useToast } from "react-native-toast-notifications";
import CreateTicketHeader from "../components/CreateTicketHeader";
import InputField from "../components/InputField";
import UploadField from "../components/UploadField";
import SubmitButton from "../components/SubmitButton";

const Index = () => {
  const [dealerName, setDealerName] = useState("");
  const [complaint, setComplaint] = useState("");
  const [vehicleRegNo, setVehicleRegNo] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const toast = useToast();

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      dealerName,
      complaint,
      vehicleRegNo,
      hasUploadedFile: !!uploadedFile
    });
    
    // Show success toast
    toast.show("Ticket submitted successfully", {
      type: "success",
      placement: "bottom",
      duration: 4000,
    });
    
    // Reset form after submission
    setDealerName("");
    setComplaint("");
    setVehicleRegNo("");
    setUploadedFile(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Section */}
        <CreateTicketHeader />
        
        {/* Form Section */}
        <View style={styles.formSection}>
          {/* Dealer/Distributor Input */}
          <InputField 
            icon="user"
            value={dealerName}
            onChangeText={setDealerName}
            placeholder="Write Dealer or Distributor / Salesman Name /username"
          />
          
          {/* Complaint Input */}
          <InputField 
            icon="pen"
            value={complaint}
            onChangeText={setComplaint}
            placeholder="Write Your Complaint Here"
          />
          
          {/* Vehicle Registration Input */}
          <InputField 
            icon="file-text"
            value={vehicleRegNo}
            onChangeText={setVehicleRegNo}
            placeholder="Vehicle Register No."
            specialStyle={true}
          />
          
          {/* Upload Field */}
          <UploadField
            onFileSelect={(uri) => setUploadedFile(uri)} 
          />
          
          {/* Submit Button */}
          <View style={styles.submitContainer}>
            <SubmitButton onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  formSection: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
    gap: 16,
  },
  submitContainer: {
    marginTop: 'auto',
    paddingVertical: 16,
  }
});

export default Index;
