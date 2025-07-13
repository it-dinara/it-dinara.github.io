import theme from "styled-theming";

export const sidebarTheme = {
  colors: {
    border: "rgba(0, 0, 0, 0.1)",
  },
  dimensions: {
    closedWidth: "72px",
    openWidth: "240px",
    headerPadding: "16px",
    iconSize: "20px",
  },
  transitions: {
    default: "0.4s ease",
    fast: "0.2s ease",
  },
};

export const themeColors = {
  sidebarBackground: theme("mode", {
    light: "var(--color-sidebar-background-light-default)",
    dark: "var(--color-sidebar-background-dark-default)",
  }),
  sidebarHover: theme("mode", {
    light: "var(--color-sidebar-background-light-hover)",
    dark: "var(--color-sidebar-background-dark-hover)",
  }),
  sidebarActive: theme("mode", {
    light: "var(--color-sidebar-background-light-active)",
    dark: "var(--color-sidebar-background-dark-active)",
  }),
  text: theme("mode", {
    light: "var(--color-text-light-default)",
    dark: "var(--color-text-dark-default)",
  }),
  textHover: theme("mode", {
    light: "var(--color-text-light-hover)",
    dark: "var(--color-text-dark-hover)",
  }),
  textActive: theme("mode", {
    light: "var(--color-text-light-active)",
    dark: "var(--color-text-dark-active)",
  }),
  logo: theme("mode", {
    light: "var(--color-text-logo-light-default)",
    dark: "var(--color-text-logo-dark-default)",
  }),
  buttonBackground: theme("mode", {
    light: "var(--color-button-background-light-default)",
    dark: "var(--color-button-background-dark-default)",
  }),
  buttonActive: theme("mode", {
    light: "var(--color-button-background-light-active)",
    dark: "var(--color-button-background-dark-active)",
  }),
  pagesBackground: theme("mode", {
    light: "var(--color-pages-background-light-default)",
    dark: "var(--color-pages-background-dark-default)",
  }),
};
