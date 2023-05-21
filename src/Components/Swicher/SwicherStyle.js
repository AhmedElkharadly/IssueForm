import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    // width:"400px",
    position: "relative",
    transition: ".5s",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontWeight: "500",
    fontSize: "1rem",
    
  },
  segment: {
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    display:"flex",
    flexWrap:"wrap",
    textDecoration: "none",
    opacity: 0.85,
    "&:hover": {
      scale:"1.01",
      background: "#228be6e6",
      transition: "1s",
    },
  },
  active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      borderRadius: "0px",
    },
  },
}));
