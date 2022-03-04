import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Grid from "./components/Grid"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="body-content">
        <Sidebar/>
        <Grid/>
      </div>
    </div>
  );
}

export default App;
