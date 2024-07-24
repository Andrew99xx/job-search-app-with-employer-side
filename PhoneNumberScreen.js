// PhoneNumberScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase.config';

const PhoneNumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const sendVerification = () => {
    const verifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    signInWithPhoneNumber(auth, phoneNumber, verifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        navigation.navigate('OTPScreen', { verificationId });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter phone number"
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Send OTP" onPress={sendVerification} />
      <View id="recaptcha-container"></View>
    </View>
  );
};

export default PhoneNumberScreen;
