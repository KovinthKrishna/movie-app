import { icons } from "@/constants/icons";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Saved = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary px-10">
      <View className="flex flex-1 flex-col items-center justify-center gap-5">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-base text-gray-500">Save</Text>
      </View>
    </SafeAreaView>
  );
};

export default Saved;
