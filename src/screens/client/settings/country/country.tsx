import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Screen from "@/src/shared/screen/screen";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./country.styles";
import { useTranslation } from "react-i18next";
import countries from "world-countries";

type CountryItem = {
  code: string;
  name: string;
  flag: string;
};

const Country = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState<string>("JO");
  const [searchText, setSearchText] = useState<string>("");

  const countriesList: CountryItem[] = useMemo(
    () =>
      countries
        .map((c) => ({
          code: c.cca2,
          name: c.name.common,
          flag: c.flag,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  // Filter countries based on search text
  const filteredCountries = useMemo(
    () =>
      countriesList.filter((c) =>
        c.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    [searchText, countriesList]
  );

  const renderItem = ({ item }: { item: CountryItem }) => {
    const isSelected = selectedCountry === item.code;

    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => setSelectedCountry(item.code)}
      >
        <Text style={styles.flag}>{item.flag}</Text>
        <Text style={styles.countryName}>{item.name}</Text>

        <View style={styles.radioOuter}>
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Screen showBackButton title={t("settings.country")}>
      <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        {/* Search input */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 8,
            padding: 10,
            marginBottom: 12,
            color: colors.textPrimary,
          }}
          placeholder={t("settings.search")}
          placeholderTextColor={colors.textMuted}
          value={searchText}
          onChangeText={setSearchText}
        />

        {/* Countries list */}
        <FlatList
          data={filteredCountries}
          keyExtractor={(item) => item.code}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </Screen>
  );
};

export default Country;
