import Search from "./componets/Search";
import Left from './componets/Left'
import Right from './componets/Right'
import "./index.css"
import Box from "./componets/Box";
import One from "./componets/One"

function App() {

const handleDataFromChild = (data) =>{
  console.log(data)
}
 

  return (
    <div className="App" >
      <One />
    </div>
  );
}

export default App;
