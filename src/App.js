import React, {useState} from 'react';
import './App.css';
import houses from './houses';

function App() {
  const [house, setHouse]=useState("");
  
  function handleClick(e){
    e.preventDefault();
    
    let housesArray=[1,2,3,4]
    const sortedHouse= housesArray[Math.floor(Math.random()*4)]
    setHouse(sortedHouse)
    if(house){
      getColour()
    }
    console.log(sortedHouse)
  }
  
  function getColour(){
    if(house){
      const selected=houses.find(h => h.id === house );
      const color = selected.color;
      return color;
    }
    else return "white"
    
  }
  
  return (
    <div className="container"  >
      <div className="house" style={{backgroundColor:getColour()}}>
        <button onClick={handleClick}><img src="https://fontmeme.com/permalink/191023/2fa289c871039636615aee62afd87b8d.png" alt="harry-potter-font" border="0"/></button>
        <div className="house__content">
        {house ? houses.filter(h=>h.id===house).map(house=>(
          <div key={house.id}>
            <div style={{textAlign:"center"}} className="house__content">
          <h2 className="welcome">WELCOME TO {house.name.toUpperCase()}</h2>
          </div>
          <div className="house__content">
          <img src={house.img} alt={house.name} className="houseImage"/>
          </div>
          </div>
        )) : (<p>Click to find your house</p>)}
      </div>
      </div>
      
    </div>
  );
}

export default App;
