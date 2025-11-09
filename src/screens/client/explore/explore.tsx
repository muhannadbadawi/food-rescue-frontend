import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import GenericBottomSheet from "@/src/shared/bottom-sheet/bottom-sheet";

export default function Explore() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        Alert.alert(
          "Permission Denied",
          "Enable location services to use this feature."
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
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
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={() => {
          setSheetOpen(false);
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title="أنت هنا" />

        {shops.map((shop) => (
          <React.Fragment key={shop.id}>
            <Marker
              coordinate={{
                latitude: shop.latitude,
                longitude: shop.longitude,
              }}
              title={shop.name}
              description={shop.description}
              image={shop.image}
              onPress={() => setSheetOpen(true)}
            />
          </React.Fragment>
        ))}
      </MapView>
      {/* <GenericBottomSheet
        height={400}
        isOpen={sheetOpen}
        onOpen={() => console.log("Sheet opened")}
        onClose={() => setSheetOpen(false)}
        children={
          <>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Hello from the bottom sheet!
            </Text>
            <Text>Put any content you want here.</Text>
          </>
        }
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#FF3B30",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sheetText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
