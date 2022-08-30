import { useState } from 'react';
import './style.css';
import Images from './Images';

function App() {

  const [selectedImg ,setselectedImg] = useState(Images[0].image);

  return (
    <div>
      <div id="galery">
          <div className="container">
            <div className="main-img">
                <img src={selectedImg} alt="dd" />
            </div>
            <div className="sub-imgs">
               {
                Images.map((item) =>{
                  return <img key={item.id} src={item.image} 
                    onMouseMove = {() => setselectedImg(item.image)}
                  />
                })
               }
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;