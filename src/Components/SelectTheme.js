import React, { useContext } from "react";
import { theme } from "./Theme";
import { ThemeContext } from "./Provider";

const getStyles = (mode) => ({
  select: {
    backgroundColor: mode.background,
    border: `2px solid ${mode.highlight}`,
    color: mode.text,
    borderRadius: "30px",
    padding: "0.6rem",
    paddingRight: "5px",
  },
});

const SelectTheme = () => {
  const { colorTheme, setColorTheme } = useContext(ThemeContext);
  const styles = getStyles(colorTheme);

  const changeTheme = (value) => {
    setColorTheme(theme[value]);
  };

  const options = Object.keys(theme);

  return (
    <select
      style={styles.select}
      value={colorTheme.value}
      onChange={(event) => changeTheme(event.target.value)}
    >
      {options.map((option, i) => {
        return (
          <option key={i + option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default SelectTheme;
