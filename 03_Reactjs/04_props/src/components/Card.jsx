// import React from 'react'

// function Card(props) {
//     console.log(props);
    
//   return (
//     <div>
//       <div className="card">
//       <h1>{props.name}</h1>
//       <img src={props.image} alt="" />
//       <p>{props.description}</p>
//       <button>Click me</button>
//      </div>
//     </div>
//   )
// }

// export default Card



const Card = (props) => {
  return (
    <div className="elegant-card">
      <div className="card-image-container">
        <img 
          src={props.image} 
          alt={props.title} 
          className="card-img" 
        />
        <div className="card-overlay"></div>
      </div>
      
      <div className="card-content">
        <span className="card-category">{props.category || "Lifestyle"}</span>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.description}</p>
        
        <button className="card-link">
          {props.buttonText || "View Details"}
          <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default Card;