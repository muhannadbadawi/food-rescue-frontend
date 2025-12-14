import React, { useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  GestureHandlerRootView,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type ContextType = {
  startY: number;
};

interface BottomSheetProps {
  height?: number; // height of sheet (default 60% screen height)
  isOpen?: boolean; // open initially?
  onClose?: () => void;
  onOpen?: () => void;
  children: React.ReactNode;
}

export default function GenericBottomSheet({
  height = SCREEN_HEIGHT * 0.6,
  isOpen = false,
  onClose,
  onOpen,
  children,
}: BottomSheetProps) {
  const MAX_TRANSLATE_Y = -height;
  const translateY = useSharedValue(isOpen ? MAX_TRANSLATE_Y : 0);

  // Notify open/close state
  useEffect(() => {
    if (isOpen) {
      translateY.value = withSpring(MAX_TRANSLATE_Y);
      onOpen?.();
    } else {
      translateY.value = withSpring(0);
      onClose?.();
    }
  }, [isOpen]);

  // Gesture handler
  const panGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const ctx: ContextType = { startY: translateY.value };

    if (event.nativeEvent.state === 2) { // ACTIVE
      translateY.value = ctx.startY + event.nativeEvent.translationY;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      translateY.value = Math.min(translateY.value, 0);
    }

    if (event.nativeEvent.state === 5) { // END
      if (translateY.value < MAX_TRANSLATE_Y / 2) {
        translateY.value = withSpring(MAX_TRANSLATE_Y);
        onOpen && runOnJS(onOpen)();
      } else {
        translateY.value = withSpring(0);
        onClose && runOnJS(onClose)();
      }
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    borderTopLeftRadius: interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y, 0],
      [20, 5],
      Extrapolate.CLAMP
    ),
    borderTopRightRadius: interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y, 0],
      [20, 5],
      Extrapolate.CLAMP
    ),
    opacity: interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y, 0],
      [1, 0.5],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.sheet, { height }, animatedStyle]}>
          <View style={styles.handleBar} />
          {children}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  handleBar: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 8,
  },
});
