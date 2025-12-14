import { StyleSheet } from "react-native";

export const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      color: "#666",
      marginBottom: 24,
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: "#f2f2f2",
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 16,
    },
    button: {
      backgroundColor: "#28a745",
      paddingVertical: 14,
      borderRadius: 8,
      width: "100%",
      alignItems: "center",
      marginBottom: 16,
      marginTop: 16,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    loginContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    loginText: {
      fontSize: 14,
      color: "#333",
    },
    loginLink: {
      fontSize: 14,
      color: "#007bff",
      fontWeight: "bold",
    },
  });
