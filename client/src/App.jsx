import Footer from "./components/Footer";
import Header from "./components/Header";
import Userlist from "./components/Userlist";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Userlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
