import './App.css';
import Tour from './Tour';
function Tours({tours,removeTour}) {

  return (
   <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
     {
      tours.map((tour)=>{
         return <Tour key={tour.id} {...tour} removeTour={removeTour}>
         
             </Tour>
       })
     }
    </div>
   </section>
    );
}

export default Tours;
