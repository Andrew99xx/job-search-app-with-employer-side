// OTPScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { signInWithCredential, PhoneAuthProvider } from 'firebase/auth';
import { auth } from './firebase.config';

const OTPScreen = ({ route }) => {
  const [otp, setOtp] = useState('');
  const { verificationId } = route.params;

  const verifyOtp = () => {
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    signInWithCredential(auth, credential)
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter OTP"
        onChangeText={setOtp}
        keyboardType="number-pad"
      />
      <Button title="Verify OTP" onPress={verifyOtp} />
    </View>
  );
};

export default OTPScreen;
