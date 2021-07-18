import './App.css';
import { useState,useEffect } from 'react';
import Loading from './loading';
import Tours from './Tours';
function App() {
    const [loading,setloading] = useState(true);
    const [tours,settours] = useState([]);
    const url = 'https://course-api.com/react-tours-project';

    const removeTour = (id) => {
      const newTours = tours.filter( (tour) => tour.id !== id );
      settours(newTours);
      console.log(newTours)
    }
    
    const fetchTours = async () => {
      setloading(true);
      
      try{
        const respose = await fetch(url);
        const tours = await respose.json();
        setloading(false);
        settours(tours);
      }catch(error){
        setloading(false);
        
        console.log(error);
      }

    } 

    useEffect(() => {
      fetchTours()
    },[]);

    if(loading){
      return (
        <main>
          <Loading />
        </main>
      )
    }
    
    if(tours.length === 0){
      return (
        <main className="App">
          <div className="title">
           <h2> No Tours left </h2>
           <button onClick = {fetchTours} className="btn">Refresher</button>
           </div> 
        </main>
      );
             
    }

 return (
    <main className="App">
        <Tours tours = {tours} removeTour={removeTour}/>
    </main>
  );

}
export default App;