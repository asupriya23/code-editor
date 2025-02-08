import { BrowserRouter, Routes ,Route } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen";
import { PlaygroundScreen } from "./Screens/PlaygroundScreen";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomeScreen />} />
        <Route path = "/Playground" element ={<PlaygroundScreen />}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
