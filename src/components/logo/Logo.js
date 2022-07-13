import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 13">
  <path d="M 0 0 L 5 6 L 10 0 L 10 13 L 0 13" stroke="#6f839c" stroke-width="0.2" fill="none"/>
</svg>
      
    );
};
