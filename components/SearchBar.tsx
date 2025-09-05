import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center gap-2 rounded-full bg-searchBar px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#A8B5DB"
        className="flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;
