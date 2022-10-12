import Header from "./components/Header";
import "./style/style.css";
import Footer from "./components/Footer";
import "./style/style.scss"
// import Main from "./components/Main";
import Team from "./components/Gallery/Team";


function App() {
  return(
    <>
    <div>
    <div className="min-h-screen flex flex-col">
      <div className="font-optivenus uppercase">
        <Header />
      </div>
    <Team />
      <Footer/>     
      </div>
      </div>
    
    </>
  );
}

export default App;
