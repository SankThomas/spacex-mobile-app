import { StyleSheet } from "react-native";

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fee9d7",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  heading: {
    color: "#34222e",
    fontSize: 42,
    fontFamily: "productsansregular",
    marginBottom: 32,
    textAlign: "center",
    textTransform: "capitalize",
  },
  text: {
    color: "#34222e",
    fontSize: 15,
    fontFamily: "productsansregular",
    lineHeight: 26,
    textTransform: "capitalize",
  },
  cards: {
    gap: 32,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 350,
    borderRadius: 16,
    marginBottom: 16,
  },
  active: {
    color: "#10b581",
  },
  inactive: {
    color: "#f43f5e",
  },
  customButton: {
    alignItems: "center",
    maxWidth: 150,
    backgroundColor: "#34222e",
    padding: 20,
    borderRadius: 8,
    marginTop: 24,
  },
  customButtonText: {
    color: "#fee9d7",
    fontFamily: "productsansregular",
    fontSize: 15,
  },
});
