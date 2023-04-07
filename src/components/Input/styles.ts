import { styled } from "@/styles";

export const Container = styled("div", {
  width: "100%",
  p: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: "19px",
    marginTop: 24,
    marginBottom: 8,
  },

  input: {
    width: "100%",
    border: "1px solid #ccc",
    height: 32,
    borderRadius: 8,
    padding: 8,
  },

  textarea: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 8,
  }
})