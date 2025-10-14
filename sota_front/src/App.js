import './index.css';
import Header from "./components/UI/Header";
import MainPage from './pages/MainPage'
import Sota from "./animations/Sota";
import Services from "./sections/MainPage/Services";

function App() {
  return (
    <div className="App">
        <Sota
            hexSize={25}
            borderColor="#333"
            hoverFillColor="#FF7514"
            gapX={5}
            gapY={18.5}
        />
        <Header />
        <MainPage />
        <Services />
    </div>
);
}

export default App;
