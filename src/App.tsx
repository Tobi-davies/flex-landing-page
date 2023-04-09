import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { split } from "./animations/text";
import React from "react";
// import scroll from "./animations/scroll";

function App() {
  React.useEffect(() => {
    split();
  });
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
