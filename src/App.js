import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Countries from "./pages/Countries";
import Home from "./pages/Home";
import Details from "./pages/Details";


 function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/"component={Home} exact/>
        <Route path="/Countries" component={Countries} exact />
        < Route path=" /Details/:name" component ={Details} />
        </Switch>      
    </main>
  );
}


export default App;
