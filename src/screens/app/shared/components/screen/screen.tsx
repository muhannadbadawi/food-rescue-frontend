import React, { useMemo } from "react";
import { I18nManager, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./screen.styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Splash from "../splash/splash";

type ScreenProps = {
  title?: string;
  showBackButton?: boolean;
  rightSideComponent?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
};

const Screen: React.FC<ScreenProps> = ({
  title,
  showBackButton = false,
  rightSideComponent,
  children,
  loading = false,
}) => {
  const colors = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
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

          <View style={{ width: 24 }}>
            {rightSideComponent ? rightSideComponent : null}
          </View>
        </View>
      )}
      {loading ? <Splash /> : children}
    </SafeAreaView>
  );
};

export default Screen;
