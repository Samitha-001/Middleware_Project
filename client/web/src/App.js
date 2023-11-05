import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {

  // const billDetails = () => {
  //   console.log("hey I am the bill details")
  // }



  
    const billDetails = async () => {
 
    console.log("bill Details clickerd");
   try {
    await axios.get('http://localhost:9000/test')
    .then((res) => {
      console.log("hey " + res.data.title)
      // window.location.href= res.data.url;
    }).catch((error) => {console.log("Error in checkout", error)})
   } catch (error) {
    console.log("Error in catch in try catch" + error)
   }
}
  return (
   <>
      <button onClick={billDetails}>
          Click for the bill details
      </button>
   </>
  );
}

export default App;
