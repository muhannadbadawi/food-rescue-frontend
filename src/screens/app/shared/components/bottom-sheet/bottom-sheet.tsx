import { useTheme } from "@/src/theme/theme-context";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";
import { getStyles } from "./bottom-sheet.styles";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface BottomSheetProps {
  height?: number;
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  children: React.ReactNode;
}

export default function GenericBottomSheet({
  height = SCREEN_HEIGHT * 0.6,
  isOpen,
  onClose,
  onOpen,
  children,
}: BottomSheetProps) {
  const translateY = useSharedValue(height);
  const startY = useSharedValue(0);
  const colors = useTheme();
  const styles = getStyles(colors);

  useEffect(() => {
    translateY.value = withSpring(isOpen ? 0 : height, {
      damping: 50,
      stiffness: 80,
      mass: 0.8,
    });
  }, [isOpen]);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateY.value = startY.value + event.translationY;
      translateY.value = Math.max(0, Math.min(translateY.value, height));
    })
    .onEnd((event) => {
      if (translateY.value > height / 2 || event.velocityY > 800) {
        translateY.value = withSpring(height);
        runOnJS(onClose)();
      } else {
        translateY.value = withSpring(0);
        onOpen && runOnJS(onOpen)();
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    borderTopLeftRadius: interpolate(
      translateY.value,
      [0, height],
      [20, 8],
      Extrapolate.CLAMP
    ),
    borderTopRightRadius: interpolate(
      translateY.value,
      [0, height],
      [20, 8],
      Extrapolate.CLAMP
    ),
    opacity: interpolate(
      translateY.value,
      [0, height],
      [1, 0.6],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <Animated.View style={[styles.sheet, { height }, animatedStyle]}>
        <GestureDetector gesture={panGesture}>
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
        </GestureDetector>
        <ScrollView>{children}</ScrollView>
      </Animated.View>
    </View>
  );
}
