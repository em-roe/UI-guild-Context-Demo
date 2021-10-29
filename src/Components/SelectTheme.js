import React, { useContext } from "react";
import { theme } from "./Theme";
import { ThemeContext } from "./Provider";

const getStyles = (mode) => ({
  select: {
    // backgroundColor: theme[mode].background,
    // border: `2px solid ${theme[mode].highlight}`,
    // color: theme[mode].text,
    borderRadius: "30px",
    padding: "0.6rem",
    paddingRight: "5px",
  },
});

const SelectTheme = () => {
  const { colorTheme, setColorTheme } = useContext(ThemeContext);
  const styles = getStyles(theme);

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
      {/* <option value="light">light</option>
      <option value="dark">dark</option>
      <option value="purple">purple</option>
      <option value="rainbow">rainbow</option> */}
    </select>
  );
};

export default SelectTheme;
