import {Routes, Route} from "react-router-dom"
import Page404 from "./pages/404";
import Index from "./pages/Index";
import Id from "./pages/_Id";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/404" element={<Page404/>}/>
        <Route path="/:id" element={<Id/>}/>
      </Routes>
    </div>
  );
}

export default App;
