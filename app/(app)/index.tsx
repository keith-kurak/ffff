import { View, Text, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View className="flex-1">
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => (
          <Pressable>
            <Link href="/(app)/modal" style={{ padding: 10 }}>
              <Text>{item.key}</Text>
            </Link>
          </Pressable>
        )}
      />
    </View>
  );
}
