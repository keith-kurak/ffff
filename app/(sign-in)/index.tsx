import { useState } from 'react';
import { View, Button } from 'react-native';
import { Redirect } from 'expo-router';
import { LoadingShade } from '@/components/LoadingShade';

export default function SignInScreen() {
  const [isLoading, setIsLoading] = useState(false)

  async function onPressLogin() {
    setIsLoading(true)
    // TODO: login
  }

  if (false) {
    return <Redirect href="/(app)/" />
  }

  return (
    <View className="flex-1">
      <Button onPress={onPressLogin} title="Login" />
      <LoadingShade isLoading={isLoading} />
    </View>
  );
}