
import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { X } from "lucide-react-native";

interface UploadFieldProps {
  onFileSelect: (uri: string | null) => void;
}

const UploadField = ({ onFileSelect }: UploadFieldProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    
    if (!result.canceled) {
      setPreview(result.assets[0].uri);
      onFileSelect(result.assets[0].uri);
    }
  };
  
  const clearFile = () => {
    setPreview(null);
    onFileSelect(null);
  };
  
  return (
    <View style={styles.container}>
      {/* Upload Button */}
      <TouchableOpacity 
        style={styles.uploadButton}
        onPress={pickImage}
      >
        <View style={styles.iconContainer}>
          <CloudUploadIcon />
        </View>
        <Text style={styles.uploadText}>Upload Image /Video</Text>
      </TouchableOpacity>
      
      {/* Preview */}
      {preview && (
        <View style={styles.previewContainer}>
          <View style={styles.preview}>
            <Image 
              source={{ uri: preview }} 
              style={styles.previewImage} 
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity 
            style={styles.clearButton}
            onPress={clearFile}
          >
            <X size={16} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Custom cloud upload icon component
const CloudUploadIcon = () => (
  <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <Path 
      d="M19.5 19.5L15 15M15 15L10.5 19.5M15 15V25.5M8.0039 21.0036C6.6321 20.4365 5.50921 19.3582 4.90777 18.0012C4.30634 16.6441 4.28084 15.1072 4.83686 13.731C5.39287 12.3549 6.48707 11.2411 7.85171 10.6612C9.21636 10.0813 10.7504 10.08 12.1159 10.6575V10.6575C12.9328 9.55301 14.075 8.72562 15.3845 8.29895C16.694 7.87229 18.1009 7.86914 19.4124 8.29C20.7238 8.71086 21.8705 9.53339 22.6939 10.6358C23.5173 11.7381 23.9742 13.0742 23.9993 14.4577V14.4577C25.0896 14.9596 25.9818 15.8259 26.5156 16.9005C27.0495 17.9752 27.1927 19.1952 26.921 20.366C26.6493 21.5368 25.9793 22.5861 25.0262 23.3364C24.0732 24.0867 22.8939 24.4918 21.6839 24.4836H19.5" 
      stroke="black" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </Svg>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 24,
  },
  iconContainer: {
    flexShrink: 0,
  },
  uploadText: {
    color: "#666",
    fontSize: 16,
  },
  previewContainer: {
    marginTop: 8,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  preview: {
    width: 48,
    height: 48,
    borderRadius: 4,
    backgroundColor: "#E6F0FF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  clearButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 50,
    elevation: 2,
  }
});

export default UploadField;
