import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./fields.styles";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "@/src/localization/i18n";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

const ShopOwnerFields = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  /* ---------- form state ---------- */
  const [shopName, setShopName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [image, setImage] = useState<string | null>(null);

  /* ---------- map & location ---------- */
  const [shopCoords, setShopCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const [tempRegion, setTempRegion] = useState<Region | null>(null);

  const openMapPicker = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return;

    const loc = await Location.getCurrentPositionAsync({});
    const initial: Region = {
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
    setTempRegion(initial);
    setMapVisible(true);
  };

  const confirmCoords = () => {
    if (!tempRegion) return;
    setShopCoords({
      latitude: tempRegion.latitude,
      longitude: tempRegion.longitude,
    });
    setMapVisible(false);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled && result.assets?.[0]) {
      const uri = result.assets[0].uri;
      setImage(uri);
    }
  };

  return (
    <View style={styles.shopOwnerContainer}>
      <Text style={styles.sectionTitle}>
        {t("auth.register-screen.shopDetails")}
      </Text>
      <View style={styles.card}>
        <View style={{ alignItems: "center", marginBottom: 16 }}>
          <TouchableOpacity onPress={pickImage} activeOpacity={0.85}>
            <View style={styles.avatarWrap}>
              {image ? (
                <Image source={{ uri: image }} style={styles.avatar} />
              ) : (
                <Ionicons
                  name="camera"
                  size={48}
                  color={colors.textSecondary}
                />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.hint}>{t("auth.register-screen.tapToChangePic")}</Text>
        </View>
        <TextInput
          placeholder={t("auth.register-screen.shopName")}
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
          value={shopName}
          onChangeText={setShopName}
          textAlign={i18n.language === "ar" ? "right" : "left"}
        />

        {/* map trigger */}
        <TouchableOpacity style={styles.mapTrigger} onPress={openMapPicker}>
          <Ionicons name="map" size={22} color={colors.primary} />
          <Text style={styles.mapTriggerTxt}>
            {shopCoords
              ? `${shopCoords.latitude.toFixed(
                  5
                )}, ${shopCoords.longitude.toFixed(5)}`
              : t("auth.register-screen.pickLocation")}
          </Text>
        </TouchableOpacity>

        <TextInput
          placeholder={t("auth.register-screen.taxNumber")}
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
          value={taxNumber}
          onChangeText={setTaxNumber}
          keyboardType="numeric"
          textAlign={i18n.language === "ar" ? "right" : "left"}
        />

        {/* map modal */}
        <Modal
          visible={mapVisible}
          animationType="slide"
          onRequestClose={() => setMapVisible(false)}
        >
          <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            {tempRegion && (
              <>
                <MapView
                  style={{ flex: 1 }}
                  initialRegion={tempRegion}
                  onRegionChangeComplete={(r) => setTempRegion(r)}
                  showsUserLocation
                >
                  <Marker coordinate={tempRegion} />
                </MapView>

                <View style={styles.mapButtons}>
                  <TouchableOpacity
                    style={styles.mapBtn}
                    onPress={() => setMapVisible(false)}
                  >
                    <Text style={styles.mapBtnTxt}>
                      {t("common.cancel")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.mapBtn, styles.mapBtnPrimary]}
                    onPress={confirmCoords}
                  >
                    <Text style={[styles.mapBtnTxt, styles.mapBtnTxtLight]}>
                      {t("common.confirm")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  );
};

export default ShopOwnerFields;
