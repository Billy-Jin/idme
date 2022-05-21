import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contents from "./components/contents/Contents";
import { Route } from "react-router-dom";
import mydata from "./data.js";
import { useState } from "react";

function App() {
  const [data, setData] = useState(mydata);

  return (
    <div className="App">
      <Header />
      <Route path="/content/:g_no" component={Contents} />
      <Route path="/content" component={Contents} />
      {/* 데이터DB 넣은 후 삭제 해야함 ↑ */}
      <Route exact={true} path="/" render={() => <Main data={data} />} />
      <Footer />
    </div>
  );
}

export default App;
