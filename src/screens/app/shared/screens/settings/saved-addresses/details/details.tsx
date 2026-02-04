import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ClientSettingsStackParamList } from "../../client-settings-stack";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./details.styles";
import { useTranslation } from "react-i18next";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import AddressType from "./address-type/address-type";
import { EditableAddressField } from "@/src/constants/types";
import * as Location from "expo-location";

type Props = NativeStackScreenProps<ClientSettingsStackParamList, "Details">;

const Details = ({ route }: Props) => {
  const { address } = route.params;
  const colors = useTheme();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language !== "en";
  const styles = getStyles(colors, isRTL);
  const [addressToEdit, setAddressToEdit] = useState(address);
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (!addressToEdit?.latitude || !addressToEdit?.longitude) {
        try {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            Alert.alert("Permission denied", "Cannot access your location");
            return;
          }
          const location = await Location.getCurrentPositionAsync({});
          setCurrentLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        } catch (e) {
          console.error("Location error", e);
        }
      } else {
        setCurrentLocation({
          latitude: addressToEdit.latitude,
          longitude: addressToEdit.longitude,
        });
      }
    };

    fetchLocation();
  }, [addressToEdit]);

  const onChangeAddressField = (field: EditableAddressField, value: string) => {
    setAddressToEdit((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const onSave = () => {
    // 🔥 لاحقًا: API / Redux / Zustand
  };

  return (
    <Screen
      showBackButton
      title={t("savedAddresses.details")}
      rightSideComponent={
        <TouchableOpacity onPress={onSave}>
          <Ionicons
            name={"checkmark-sharp"}
            size={24}
            color={colors.primary}
            style={{ width: 24 }}
          />
        </TouchableOpacity>
      }
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.container}>
              <AddressType
                type={addressToEdit ? addressToEdit.type : "house"}
                onChangeAddressField={onChangeAddressField}
              />
              {currentLocation && (
                <View
                  style={{
                    height: 200,
                    marginVertical: 16,
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                >
                  <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                      latitude:
                        addressToEdit?.latitude || currentLocation.latitude,
                      longitude:
                        addressToEdit?.longitude || currentLocation.longitude,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}
                  >
                    <Marker
                      coordinate={{
                        latitude:
                          addressToEdit?.latitude || currentLocation.latitude,
                        longitude:
                          addressToEdit?.longitude || currentLocation.longitude,
                      }}
                      title={addressToEdit?.addressLabel || "Address"}
                    />
                  </MapView>
                </View>
              )}

              <View style={styles.fieldContainer}>
                <TextInput
                  placeholder={t("savedAddresses.addressLabel")}
                  placeholderTextColor={colors.textSecondary}
                  style={styles.input}
                  keyboardType="email-address"
                  textAlign={i18n.language === "ar" ? "right" : "left"}
                  value={addressToEdit?.addressLabel}
                  onChangeText={(value) =>
                    onChangeAddressField("addressLabel", value)
                  }
                />
                <TextInput
                  placeholder={t("savedAddresses.streetName")}
                  placeholderTextColor={colors.textSecondary}
                  style={styles.input}
                  keyboardType="email-address"
                  textAlign={i18n.language === "ar" ? "right" : "left"}
                  value={addressToEdit?.streetName}
                  onChangeText={(value) =>
                    onChangeAddressField("streetName", value)
                  }
                />
                <TextInput
                  placeholder={t("savedAddresses.phoneNumber")}
                  placeholderTextColor={colors.textSecondary}
                  style={styles.input}
                  keyboardType="email-address"
                  textAlign={i18n.language === "ar" ? "right" : "left"}
                  value={addressToEdit?.phoneNumber}
                  onChangeText={(value) =>
                    onChangeAddressField("phoneNumber", value)
                  }
                />

                {addressToEdit?.type === "house" && (
                  <TextInput
                    placeholder={t("savedAddresses.houseName")}
                    placeholderTextColor={colors.textSecondary}
                    style={styles.input}
                    textAlign={isRTL ? "right" : "left"}
                    value={addressToEdit?.houseName ?? ""}
                    onChangeText={(value) =>
                      onChangeAddressField("houseName", value)
                    }
                  />
                )}

                {addressToEdit?.type === "apartment" && (
                  <>
                    <TextInput
                      placeholder={t("savedAddresses.buildingName")}
                      placeholderTextColor={colors.textSecondary}
                      style={styles.input}
                      textAlign={isRTL ? "right" : "left"}
                      value={addressToEdit?.buildingName ?? ""}
                      onChangeText={(value) =>
                        onChangeAddressField("buildingName", value)
                      }
                    />
                    <TextInput
                      placeholder={t("savedAddresses.aptNumber")}
                      placeholderTextColor={colors.textSecondary}
                      style={styles.input}
                      textAlign={isRTL ? "right" : "left"}
                      value={addressToEdit?.aptNumber ?? ""}
                      onChangeText={(value) =>
                        onChangeAddressField("aptNumber", value)
                      }
                    />
                    <TextInput
                      placeholder={t("savedAddresses.floorNumber")}
                      placeholderTextColor={colors.textSecondary}
                      style={styles.input}
                      textAlign={isRTL ? "right" : "left"}
                      value={addressToEdit?.floorNumber ?? ""}
                      onChangeText={(value) =>
                        onChangeAddressField("floorNumber", value)
                      }
                    />
                  </>
                )}

                {addressToEdit?.type === "office" && (
                  <TextInput
                    placeholder={t("savedAddresses.companyName")}
                    placeholderTextColor={colors.textSecondary}
                    style={styles.input}
                    textAlign={isRTL ? "right" : "left"}
                    value={addressToEdit?.companyName ?? ""}
                    onChangeText={(value) =>
                      onChangeAddressField("companyName", value)
                    }
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default Details;
// app/shared/screens/settings/saved-addresses/details
