import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./profile.styles";
import { useTranslation } from "react-i18next";
import Avatar from "@/src/screens/app/shared/components/avatar/avatar";

const Profile = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Avatar name="Mohannad Badawi" size={150} containerStyle={styles.avatar}/>

        <Text style={styles.name}>Mohannad Badawi</Text>
        <Text style={styles.email}>mohannadbadawi@yahoo.com</Text>
      </View>
    </View>
  );
};

export default Profile;
