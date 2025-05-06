
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeft } from "lucide-react-native";

const CreateTicketHeader = () => {
  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <ArrowLeft color="#2a4674" size={24} />
      </TouchableOpacity>
      
      {/* Chat Icon */}
      <View style={styles.iconContainer}>
        <ChatBubbleIcon />
      </View>
      
      {/* Title */}
      <Text style={styles.title}>Create Ticket</Text>
    </View>
  );
};

// Custom chat bubble icon component
const ChatBubbleIcon = () => (
  <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <Svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <Path 
        d="M42 10H14C11.2386 10 9 12.2386 9 15V33C9 35.7614 11.2386 38 14 38H26L35 45V38H42C44.7614 38 47 35.7614 47 33V15C47 12.2386 44.7614 10 42 10Z" 
        stroke="#FFDE59" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Line x1="15" y1="18" x2="41" y2="18" stroke="#FFDE59" strokeWidth="3" strokeLinecap="round"/>
      <Line x1="15" y1="24" x2="41" y2="24" stroke="#FFDE59" strokeWidth="3" strokeLinecap="round"/>
      <Line x1="15" y1="30" x2="31" y2="30" stroke="#FFDE59" strokeWidth="3" strokeLinecap="round"/>
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2a4674",
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 16,
    position: "relative",
  },
  backButton: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  }
});

export default CreateTicketHeader;
