import Typography from "typography";
import lincolnTheme from "typography-theme-lincoln";

lincolnTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: "none",
    backgroundImage: "none",
  },
  pre: {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
  body: {
    padding: 0,
  },
});

const typography = new Typography(lincolnTheme);

typography.injectStyles();

export default typography;
