import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { sidebarTheme } from "./theme";
import styled from "styled-components";
import { themeColors } from "./theme";

library.add(fas);

const Layout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${themeColors.text};
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${themeColors.pagesBackground};
`;

export default function App() {
  const savedMode = localStorage.getItem("themeMode") || "light";
  const [mode, setMode] = useState(savedMode);
  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={{ mode, ...sidebarTheme }}>
      <Layout>
        <Sidebar color={mode} toggleMode={toggleMode} />

        <Pages>
          <Routes>
            <Route path="/" element={<Heading>Home</Heading>} />
            <Route path="/sales" element={<Heading>Sales</Heading>} />
            <Route path="/costs" element={<Heading>Costs</Heading>} />
            <Route path="/payments" element={<Heading>Payments</Heading>} />
            <Route path="/finances" element={<Heading>Finances</Heading>} />
            <Route path="/messages" element={<Heading>Messages</Heading>} />
            <Route path="/settings" element={<Heading>Settings</Heading>} />
            <Route path="/support" element={<Heading>Support</Heading>} />
          </Routes>
        </Pages>
      </Layout>
    </ThemeProvider>
  );
}
