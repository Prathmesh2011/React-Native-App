// CreateAccountScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For social icons

const Register = () => {
  return (
    <View style={styles.container}>
      {/* Title and Subtitle */}
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#9A9A9A"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9A9A9A"
        secureTextEntry
      />

      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#9A9A9A"
        secureTextEntry
      />

      {/* Sign up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <TouchableOpacity>
        <Text style={styles.alreadyHaveAccountText}>Already have an account</Text>
      </TouchableOpacity>

      {/* Or continue with */}
      <Text style={styles.orText}>Or continue with</Text>

      {/* Social Media Login Options */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FD',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2242A6',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#1C1C1C',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#F5F7FF',
    borderRadius: 8,
    borderColor: '#2242A6',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#1C1C1C',
  },
  signUpButton: {
    backgroundColor: '#2242A6',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyHaveAccountText: {
    textAlign: 'center',
    color: '#1C1C1C',
    marginBottom: 24,
  },
  orText: {
    textAlign: 'center',
    color: '#9A9A9A',
    marginBottom: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#F5F7FF',
  },
});

export default Register;