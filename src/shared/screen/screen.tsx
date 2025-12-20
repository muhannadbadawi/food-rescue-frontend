import React from "react";
import { I18nManager, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./screen.styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type ScreenProps = {
  title?: string;
  showBackButton?: boolean;
  children?: React.ReactNode;
};

const Screen: React.FC<ScreenProps> = ({
  title,
  showBackButton = false,
  children,
}) => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const navigation = useNavigation<NavigationProp<any>>(); 
  const isRTL = I18nManager.isRTL;

  return (
    <SafeAreaView style={styles.container}>
      {(title || showBackButton) && (
        <View style={styles.headerContainer}>
          {showBackButton ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name={isRTL ? "arrow-forward" : "arrow-back"}
                size={24}
                color={colors.primary}
                style={{ width: 24 }}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 24 }} />
          )}

          {title && <Text style={styles.headerTitle}>{title}</Text>}

          <View style={{ width: 24 }} />
        </View>
      )}

      {children}
    </SafeAreaView>
  );
};

export default Screen;
