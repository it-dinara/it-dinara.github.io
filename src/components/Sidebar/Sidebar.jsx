import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import { sidebarTheme } from "../../theme";
import {
  SidebarContainer,
  Header,
  Menu,
  MenuItem,
  BottomMenu,
} from "./Sidebar.style";
import DayNightToggle from "../DayNightToggle/";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = ({ color, toggleMode }) => {
  const savedOpened = localStorage.getItem("sidebarOpened") === "true";
  const [opened, setOpened] = useState(savedOpened || false);

  useEffect(() => {
    localStorage.setItem("sidebarOpened", opened);
  }, [opened]);

  return (
    <ThemeProvider theme={{ mode: color, ...sidebarTheme }}>
      <SidebarContainer $opened={opened}>
        <DayNightToggle toggleMode={toggleMode} mode={color} opened={opened} />
        <Header
          $opened={opened}
          aria-expanded={opened}
          onClick={() => setOpened(!opened)}
          type="button"
        >
          <img src={logo} alt="Logo" />
          <span>TensorFlow</span>
          <FontAwesomeIcon
            className="toggle-icon"
            icon={opened ? "angle-left" : "angle-right"}
          />
        </Header>

        <Menu>
          {routes.map((route) => (
            <MenuItem to={route.path} key={route.title} $opened={opened}>
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </MenuItem>
          ))}
        </Menu>

        <BottomMenu>
          {bottomRoutes.map((route) => (
            <MenuItem to={route.path} key={route.title} $opened={opened}>
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </MenuItem>
          ))}
        </BottomMenu>
      </SidebarContainer>
    </ThemeProvider>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
  toggleMode: PropTypes.func,
};

export default Sidebar;
