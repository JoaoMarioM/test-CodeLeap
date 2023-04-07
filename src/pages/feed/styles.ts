import { Roboto } from "next/font/google";

import { styled } from "../../styles";

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
});

export const Header = styled("header", {
  width: "100%",
  height: 80,
  backgroundColor: "#7695EC",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "27px 37px",

  h1: {
    color: "#fff",
    fontSize: 22,
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
  },
});

export const Container = styled("div", {
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",

  form: {
    marginTop: 24,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "1rem",
    border: "1px solid #ccc",
    padding: 24,
    alignItems: "flex-end",
  },

  button: {
    width: 120,
    height: 32,
    backgroundColor: "#7695EC",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    marginTop: "1rem",
    cursor: "pointer",
  },

  h2: {
    fontSize: 22,
    lineHeight: "26px",
    fontWeight: "700",
    width: "100%",
  },
});

export const Content = styled("div", {
  maxWidth: 1200,
  width: "100%",
  margin: "24px auto",
  border: "1px solid #ccc",
  borderRadius: "1rem",
  paddingBottom: 24,
});

export const ContentHeader = styled("div", {
  width: "100%",
  borderRadius: "1rem 1rem 0px 0px",
  padding: 24,
  display: "flex",
  backgroundColor: "#7695EC",
  alignItems: "center",
  justifyContent: "space-between",

  span: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  div: {
    display: "flex",
    alignItems: "center",
  },

  button: {
    backgroundColor: "transparent",
    border: "none",
    margin: "0 10px",
    cursor: "pointer",
  },
});

export const InformationHeader = styled("div", {
  width: "100%",
  marginTop: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 24px",

  span: {
    fontSize: 18,
    fontWeight: "400",
    color: "#777",
  },
});

export const Information = styled("span", {
  fontSize: 18,
  fontWeight: "400",
  color: "#000",
  padding: "0 24px",
  width: "100%",
  wordBreak: "break-all",
  display: "block",
  marginTop: "1rem",
});

export const ModalContainer = styled("div", {
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
});

export const ModalContent = styled("div", {
  maxWidth: 660,
  width: "100%",
  backgroundColor: "#fff",
  padding: 24,
  borderRadius: "1rem",
  flexDirection: "column"
});

export const ModalTitle = styled("span", {
  fontWeight: 700,
  fontSize: 22,
});

export const ButtonContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: 24,
  width: "100%",
  columnGap: "1rem",

  button: {
    backgroundColor: "transparent",
    border: "1px solid #999",
    borderRadius: 8,
    padding: "6px 20px",
    cursor: "pointer",

    '&.danger': {
      backgroundColor: "#FF5151",
      borderColor: "#FF5151",
      color: "#fff"
    },

    '&.success': {
      backgroundColor: "#47B960",
      borderColor: "#47B960",
      color: "#fff"
    }
  }
})