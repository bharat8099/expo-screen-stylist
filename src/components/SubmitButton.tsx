
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SubmitButtonProps {
  onPress: () => void;
}

const SubmitButton = ({ onPress }: SubmitButtonProps) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2a4674",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  }
});

export default SubmitButton;
