import DetailPage from "./pages/DetailPage";
import "./App.css";
import WdList from "./pages/WdList";
import { Routes, Route } from "react-router-dom";
import Main from "./main/Main_wanted.js";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div className="App">   
      <Routes>
        <Route path="" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="/wdlist" element={<WdList/>} />
          <Route path="/detailpage/:index" element={<DetailPage/>} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
