import React from "react";
import {
  View,
  Image,
  Text,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from "react-native";
import { getAvatarStyles } from "./avatar.styles";

interface AvatarProps {
  size?: number;
  src?: string;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  name?: string;
  glowColor?: string;
  backgroundColor?: string;
}

const Avatar = ({
  size = 50,
  src,
  imageStyle,
  containerStyle,
  name,
  glowColor = "#7ee787aa",
  backgroundColor = "#4aaf5bff",
}: AvatarProps) => {
  const letter = name?.charAt(0).toUpperCase() ?? "?";
  const styles = getAvatarStyles({ size, glowColor, backgroundColor });

  return (
    <View style={[styles.glowWrapper, containerStyle]}>
      <View style={styles.innerWrapper}>
        {src ? (
          <Image
            source={{ uri: src }}
            style={[styles.image, imageStyle]}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.letter}>{letter}</Text>
        )}
      </View>
    </View>
  );
};

export default Avatar;
