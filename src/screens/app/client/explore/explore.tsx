// src/screens/client/explore/explore.tsx
import React, { useEffect, useMemo, useState } from "react";
import { View, ActivityIndicator, Text, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useTranslation } from "react-i18next";

import GenericBottomSheet from "@/src/screens/app/shared/components/bottom-sheet/bottom-sheet";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./explore.styles";
import { shops as mockShops } from "@/src/constants/mockData";
import { Shop } from "@/src/constants/types";

export default function Explore() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  const colors = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "ar" | "en";

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(t("explore.permissionDenied"), t("explore.enableLocation"));
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const { latitude, longitude } = location.coords;

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
        <Marker
          coordinate={{ latitude, longitude }}
          title={t("explore.youAreHere")}
        />
        {mockShops.map((shop) => (
          <Marker
            key={shop.id}
            coordinate={{ latitude: shop.latitude, longitude: shop.longitude }}
            title={shop.name[currentLang]}
            description={shop.description[currentLang]}
            image={shop.image}
            onPress={() => {
              setSelectedShop(shop);
              setSheetOpen(true);
            }}
          />
        ))}
      </MapView>

      <GenericBottomSheet
        height={260}
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
      >
        {selectedShop ? (
          <View style={styles.sheetContent}>
            <Text style={styles.shopName}>
              {selectedShop.name[currentLang]}
            </Text>
            <Text style={styles.shopDescription}>
              {selectedShop.description[currentLang]}
            </Text>
            <Text style={styles.rating}>
              ⭐ {selectedShop.rating} ({selectedShop.reviews}
              {t("explore.reviews")})
            </Text>
            <Text style={styles.distance}>
              📍 {t("explore.distance")}: {selectedShop.distance}
            </Text>
            <Text style={styles.offersTitle}>{t("explore.offers")}</Text>
            {selectedShop.offers.map(
              (offer: { ar: string; en: string }, idx) => (
                <Text key={idx} style={styles.offerItem}>
                  • {offer[currentLang]}
                </Text>
              )
            )}
          </View>
        ) : (
          <Text style={styles.emptyText}>{t("explore.noShopSelected")}</Text>
        )}
      </GenericBottomSheet>
    </Screen>
  );
}
