import "./App.css";
import ItemListCointainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
 return (
    <main className="main">
      <Navbar/>
      <ItemListCointainer greetings="Hola Bienvenidos a la page de NEWART la ropa más duradera y de calidad para vos!😎✨👕"/>
    </main>
  );
}
export default App;
