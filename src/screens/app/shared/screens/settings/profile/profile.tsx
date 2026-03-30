  import React, { useMemo } from "react";
  import { View, Text } from "react-native";
  import { useTheme } from "@/src/theme/theme-context";
  import { getStyles } from "./profile.styles";
  import Avatar from "@/src/screens/app/shared/components/avatar/avatar";
  import { User } from "@/src/constants/types";

  interface ProfileProps {
    user: User;
  }
  const Profile = ({ user }: ProfileProps) => {
    const colors = useTheme();
    const styles = useMemo(() => getStyles(colors), [colors]);

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Avatar
            name={user.firstName ?? user.email}
            size={150}
            containerStyle={styles.avatar}
          />
          {user.firstName ? (
            <Text
              style={styles.name}
            >{`${user.firstName} ${user.lastName}`}</Text>
          ) : null}
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
    );
  };
  export default Profile;
