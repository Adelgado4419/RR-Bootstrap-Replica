import './App.css';
import CenterPiece from './Components/CenterPiece';
import NavBar from './Components/NavBar'
import StoreLocations from './Components/StoreLocations';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <CenterPiece/>
      <StoreLocations/>
    </div>
  );
}

export default App;



// Need to find the following components 

// The Navbar component (the base examples in the Bootstrap documentation give us a great place to start)
// The Instacart logo from the web (or a placeholder that does the trick for now)
// The "Login" NavLink (Nav.Link) in the Navbar
// The "Sign Up" button in the Navbar