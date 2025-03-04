import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/get-started" element={<GetStarted />} />
        {/* hello devvvvv */}
      </Routes>
    </Router>
  );
}

export default App;
