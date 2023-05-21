import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "80%",
        borderRadius: "20px",
        padding: "2rem 2rem",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
  inputWrapper: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    // flex:"5"
  },
  swichersContainer:{
    width:"100%",
    display: "grid",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  issueLabel: {
    display: "flex",
    justifyContent: "start",
    width: "fit-content",
    padding: "10px",
    borderRadius: "5px",
    letterSpacing: "1px",
    fontWeight: 700,
  },
  segment: {
    textDecoration: "none",
    color: theme.white,
    opacity: 0.85,
  },
  active: {
    opacity: 1,
    "&:hover": {
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      borderRadius: "0px",
    },
  },
}));
