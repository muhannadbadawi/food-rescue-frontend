import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./profile.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
import Avatar from "@/src/shared/avatar/avatar";

const Profile = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <Screen showBackButton title={t("profile.title")}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Avatar name="Mohannad Badawi" />

          <Text style={styles.name}>Mohannad Badawi</Text>
          <Text style={styles.email}>mohannadbadawi@yahoo.com</Text>
        </View>
      </View>
    </Screen>
  );
};

export default Profile;
