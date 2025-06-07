import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/create.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export default function Index() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.headerTitle}>spotlight</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.
            white} />

        </TouchableOpacity>
      </View>
    </View>
  );
}
