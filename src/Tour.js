import './App.css';
import { useState } from 'react';

function Tour({id,image,info,price,name,removeTour}) {
    const [readmore,setreadmore] = useState(false);
  
    return (
    <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>{readmore ? info:`${info.substring(0,200)}...`}
           <button onClick={()=>setreadmore(!readmore)}>{readmore ? "Show less":"Read More"}</button>
          </p>
          <button className="delete-btn" onClick= {()=>removeTour(id)}>Not Interested</button>
        </footer>
    </article>
  );
}

export default Tour;
