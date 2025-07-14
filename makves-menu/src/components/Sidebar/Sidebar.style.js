import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { themeColors, sidebarTheme } from "../../theme";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme, $opened }) =>
    $opened ? theme.dimensions.openWidth : theme.dimensions.closedWidth};
  background-color: ${themeColors.sidebarBackground};
  height: 100vh;
  transition: width ${sidebarTheme.transitions.default};
  box-shadow: 2px 0 6px ${sidebarTheme.colors.border};
  position: absolute;
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${sidebarTheme.dimensions.headerPadding};
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  position: relative;

  img {
    height: 32px;
    width: 32px;
  }

  span {
    flex: 1;
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    color: ${themeColors.logo};
    width: ${({ $opened }) => ($opened ? "176px" : "0")};
    opacity: ${({ $opened }) => ($opened ? 1 : 0)};
    transition: width ${sidebarTheme.transitions.default},
      opacity ${sidebarTheme.transitions.fast};
    margin-left: "-25px";
  }

  .toggle-icon {
    transform: ${({ $opened }) => $opened && "rotate(0)"};
    transition: transform ${sidebarTheme.transitions.default};
    background: ${({ $opened }) =>
      $opened ? themeColors.buttonActive : themeColors.buttonBackground};
    border-radius: 50%;
    padding: 7px 10px;
    color: ${themeColors.text};
    position: absolute;
    right: ${({ $opened }) => ($opened ? "-10px" : "-44px")};
    top: 17px;
  }
`;

const Menu = styled.nav`
  flex: 1;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${({ $opened }) => ($opened ? "10px 16px" : "10px")};
  margin: 4px 16px;
  border-radius: 16px;
  color: ${themeColors.text};
  text-decoration: none;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &.active {
    background-color: ${themeColors.sidebarActive};
    color: ${themeColors.textActive};
  }

  &:hover {
    background-color: ${themeColors.sidebarHover};
    color: ${themeColors.textHover};
  }

  svg {
    width: ${sidebarTheme.dimensions.iconSize};
    height: ${sidebarTheme.dimensions.iconSize};
    margin-right: ${({ $opened }) => ($opened ? "12px" : "0")};
  }

  span {
    font-size: 15px;
    opacity: ${({ $opened }) => ($opened ? 1 : 0)};
    transition: opacity ${sidebarTheme.transitions.fast};
    white-space: nowrap;
  }
`;

const BottomMenu = styled(Menu)`
  border-top: 1px solid ${sidebarTheme.colors.border};
  padding-top: 16px;
`;

const ToggleButton = styled.button`
  margin: 16px;
  background-color: ${themeColors.buttonBackground};
  color: ${themeColors.text};
  border: none;
  cursor: pointer;
  text-align: right;
  font-size: 20px;
`;

export { SidebarContainer, Header, Menu, MenuItem, BottomMenu, ToggleButton };
