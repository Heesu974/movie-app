
import React from 'react';

function Food({name, picture}) {
 
  return (
   <div>
    <img src={picture} alt={picture}/>
    <h3>{name}</h3>
   </div>
  )
}

const foodILike = [
  {
    id: 1,
  name: "kimchi",
  image: 'https://www.beyondkimchee.com/wp-content/uploads/2022/04/Kimchi-Jjigae-thumbnail.jpg'
},
{
  id: 2,
  name: "kimbab",
  image: 'https://thumbs.dreamstime.com/z/kimbab-asian-style-gimbap-kimbap-korean-dish-made-steamed-white-rice-bap-various-other-ingredients-rolled-gim-81838757.jpg'
},
{
  id:3,
  name: "susui",
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/640px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg'
},
];



function App() {

  return (
    <div className="App">
        <h1>Hello</h1>
         {foodILike.map((food) => (
          <Food 
            key={food.id}
            name={food.name}
            picture={food.image}
          />
         ))}
    </div>
  );
}

export default App;
 
//map은 각 item 별로 function을 호출
//