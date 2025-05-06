
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { User, Pen, FileText } from "lucide-react-native";

interface InputFieldProps {
  icon: "user" | "pen" | "file-text";
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  specialStyle?: boolean;
}

const InputField = ({ 
  icon, 
  value, 
  onChangeText, 
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
    <View style={[
      styles.container,
      specialStyle ? styles.specialContainer : null
    ]}>
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8E9196"
        style={styles.input}
      />
    </View>
  );
};

// Custom user icon component
const UserIcon = () => (
  <View style={styles.userIcon}>
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <Circle cx="18" cy="12" r="6" fill="white"/>
      <Path d="M8 28C8 22.4772 12.4772 18 18 18C23.5228 18 28 22.4772 28 28V32H8V28Z" fill="white"/>
    </Svg>
  </View>
);

// Custom license plate icon component
const LicensePlateIcon = () => (
  <View style={styles.licensePlate}>
    <Text style={styles.licensePlateText}>ACF-245</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 24,
    backgroundColor: "white",
    marginBottom: 12,
  },
  specialContainer: {
    backgroundColor: "#fffaf0",
    borderColor: "#ffde59",
  },
  iconContainer: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  userIcon: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  licensePlate: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 2,
    paddingHorizontal: 4,
  },
  licensePlateText: {
    fontSize: 10,
    fontFamily: "monospace",
  }
});

export default InputField;
