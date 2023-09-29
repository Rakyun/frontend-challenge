import Header from "./components/Header";
import Layer1 from "./components/Layer1";
import Layer2 from "./components/Layer2/Layer2";
import Layer3 from "./components/Layer3";
import Faq from "./components/FAQ/Faq";
const App = () => {
  return (
    <div className="font-body">
      <Header />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Faq />
    </div>
  );
};

export default App;
