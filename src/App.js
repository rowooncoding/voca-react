import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";
import CreatWord from "./component/CreateWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/creat_word">
            <CreatWord />
          </Route>
          <Route element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
