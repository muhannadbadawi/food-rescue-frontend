import React, { useMemo, useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./profile.styles";
import { useAuth } from "@/src/screens/auth/auth-context";
import Avatar from "@/src/screens/app/shared/components/avatar/avatar";
import { getUserByUserId as apiGetUserByUserId } from "@/src/api/user-service";
import { User } from "@/src/constants/types";

const Profile = () => {
  const colors = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const { userId } = useAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const userData = await apiGetUserByUserId(userId);
          setUser(userData);
          console.log("user: ", userData);
        } catch (err) {
          console.error("Failed to fetch user", err);
        }
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Avatar
          name={user?.firstName ?? user?.email}
          size={150}
          containerStyle={styles.avatar}
        />
        {user?.firstName ? (
          <Text
            style={styles.name}
          >{`${user.firstName} ${user.lastName}`}</Text>
        ) : null}
        <Text style={styles.email}>{user?.email}</Text>
      </View>
    </View>
  );
};
export default Profile;
