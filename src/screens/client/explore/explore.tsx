import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Alert,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import GenericBottomSheet from "@/src/shared/bottom-sheet/bottom-sheet";
import Screen from "@/src/shared/screen/screen";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./explore.styles";

export default function Explore() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [sheetOpen, setSheetOpen] = useState(false);
  const colors = useTheme();
  const styles = getStyles(colors);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Enable location services to use this feature."
        );
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  const { latitude, longitude } = location.coords;

  const shops = [
    {
      id: 1,
      name: "دكان ابو محمد",
      description: "24 ساعة مفتوح",
      latitude: latitude + 0.001,
      longitude: longitude + 0.001,
      image: require("../../../../assets/supermarket.png"),
    },
    {
      id: 2,
      name: "دكان ابو علي",
      description: "12 ساعة مفتوح",
      latitude: latitude + 0.007,
      longitude: longitude + 0.001,
      image: require("../../../../assets/supermarket2.png"),
    },
    {
      id: 3,
      name: "دكان ابو حسن",
      description: "5 ساعة مفتوح",
      latitude: latitude + 0.001,
      longitude: longitude + 0.009,
      image: require("../../../../assets/supermarket3.png"),
    },
  ];

  return (
    <Screen>
      <MapView
        style={styles.map}
        showsUserLocation
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title="أنت هنا" />

        {shops.map((shop) => (
          <Marker
            key={shop.id}
            coordinate={{ latitude: shop.latitude, longitude: shop.longitude }}
            title={shop.name}
            description={shop.description}
            image={shop.image}
            onPress={() => {
              setSheetOpen(true);
            }}
          />
        ))}
      </MapView>

      <GenericBottomSheet
        height={400}
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Hello from the bottom sheet!
        </Text>
        <Text>Put any content you want here.</Text>
      </GenericBottomSheet>
    </Screen>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
