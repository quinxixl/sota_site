import './index.css';
import Header from "./components/UI/Header";
import MainPage from './pages/MainPage'
import Sota from "./animations/Sota";

function App() {
  return (
    <div className="App">
        <Sota
            hexSize={30}
            borderColor="#333"
            hoverFillColor="#FF7514"
            gapX={8}
            gapY={24}
        />
        <Header />
        <MainPage />
    </div>
);
}

export default App;
