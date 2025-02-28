import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Playground from './Screens/Playground';
import Error404 from './Screens/Error404';
import { GlobalStyle } from './style/global';
import ModalProvider from './context/ModalProvider';
import PlaygroundProvider from './context/PlaygroundProvider';

function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground/:folderId/:playgroundId" element={<Playground />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;