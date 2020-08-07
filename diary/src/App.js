import React from 'react';
import DiaryBuilder from "./containers/DiaryBuilder/DiaryBuilder.js";
import Layout from "./hoc/Layout/Layout.js";

function App() {
  return (
    <Layout>
      < DiaryBuilder / >
    </Layout>
  );
}

export default App;
