// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For social icons

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Title and Subtitle */}
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>

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

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Sign in Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      {/* Create new account */}
      <TouchableOpacity>
        <Text style={styles.createAccountText}>Create new account</Text>
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
  forgotPasswordText: {
    color: '#2242A6',
    textAlign: 'right',
    marginBottom: 24,
  },
  signInButton: {
    backgroundColor: '#2242A6',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  signInButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountText: {
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

export default LoginScreen;