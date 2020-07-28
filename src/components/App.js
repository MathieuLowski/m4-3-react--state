import React from "react";
import data from "../data";
import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";

const App = (props) => {
  console.log(data);
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Typeahead
        suggestions={data.books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
        categories={data.categories}
      />
    </>
  );
};

export default App;
