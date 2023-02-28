import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day" element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
