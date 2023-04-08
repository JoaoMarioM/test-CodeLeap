import { styled } from "..";

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "6rem",
  minHeight: "100vh",
  width: "100%",
})

export const Container = styled("div", {
  padding: "24px",
  border: "1px solid #ccc",
  borderRadius: "1rem",

  h2: {
    fontSize: 22,
    lineHeight: "26px",
    fontWeight: "700"
  },

  button: {
    width: 111,
    height: 32,
    backgroundColor: "#7695EC",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    marginTop: "1rem",
    cursor: "pointer"
  },

  form: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column"
  }

})