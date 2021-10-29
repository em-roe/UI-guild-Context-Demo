import "./App.css";
import React, { useContext } from "react";
import { ThemeContext } from "./Components/Provider";
import SelectTheme from "./Components/SelectTheme";

const getStyles = (colorTheme) => ({
  header: {
    fontSize: 34,
  },
  app: {
    height: "100vh",
    width: "100%",
    padding: 16,
    backgroundColor: colorTheme.background,
  },
  text: {
    fontWeight: "400",
    color: colorTheme.text,
  },
  themeText: {
    color: colorTheme.highlight,
  },
});

const App = () => {
  const { colorTheme } = useContext(ThemeContext);
  //   console.log(colorTheme);
  const styles = getStyles(colorTheme);
  return (
    <div style={styles.app}>
      <h1 style={(styles.header, styles.text)}>Hello to the UI Guild</h1>
      <h2 style={styles.text}>
        Current theme is {colorTheme.emoji}
        <span style={styles.themeText}>{colorTheme.value} </span>
        mode
      </h2>
      <SelectTheme />
    </div>
  );
};

export default App;
