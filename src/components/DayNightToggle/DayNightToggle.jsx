import { useState } from "react";
import PropTypes from "prop-types";
import {
  ToggleWrapper,
  HiddenCheckbox,
  ToggleLabel,
  ToggleItem,
  Star1,
  Star2,
  Star3,
  Star4,
  Star5,
  Star6,
} from "./DayNightToggle.style";

const DayNightToggle = ({ toggleMode, mode, opened }) => {
  const [checked, setChecked] = useState(mode === "light" ? false : true);
  function handleChange() {
    setChecked(!checked);
    toggleMode();
  }

  return (
    <ToggleWrapper>
      <HiddenCheckbox id="dn" checked={checked} onChange={handleChange} />

      <ToggleLabel htmlFor="dn" $checked={checked} >
        <ToggleItem $checked={checked} $opened={opened}>
          <span className="crater--1" />
          <span className="crater--2" />
          <span className="crater--3" />
        </ToggleItem>

        <Star1 $checked={checked} />
        <Star2 $checked={checked} />
        <Star3 $checked={checked} />
        <Star4 $checked={checked} />
        <Star5 $checked={checked} />
        <Star6 $checked={checked} />
      </ToggleLabel>
    </ToggleWrapper>
  );
};
DayNightToggle.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["light", "dark"]).isRequired,
  opened: PropTypes.bool,
};

export default DayNightToggle;
