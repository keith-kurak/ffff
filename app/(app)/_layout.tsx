import { useState } from "react";
import { Slot, router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { LoadingShade } from "@/components/LoadingShade";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
    // TODO: add real auth
    if (!true) {
      router.replace("/(sign-in)");
    }
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <LoadingShade isLoading={true} />
      </View>
    );
  }

  return (
    <Slot />
  );
}