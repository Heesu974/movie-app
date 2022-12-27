
import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
 
  return (
   <div>
    <img src={picture} alt={picture}/>
    <h3>{name}</h3>
    <h5>평점: 5 / {rating}</h5>
   </div>
  )
}

const foodILike = [
  {
    id: 1,
  name: "kimchi",
  image: 'https://www.beyondkimchee.com/wp-content/uploads/2022/04/Kimchi-Jjigae-thumbnail.jpg',

},
{
  id: 2,
  name: "kimbab",
  image: 'https://thumbs.dreamstime.com/z/kimbab-asian-style-gimbap-kimbap-korean-dish-made-steamed-white-rice-bap-various-other-ingredients-rolled-gim-81838757.jpg',
  rating: 5,
},
{
  id:3,
  name: "susui",
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/640px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg',
  rating: 5,
},
];

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}
//여기에 내가 얻고 싶은 props에 대한 설명을 적는다.
function App() {

  return (
    <div className="App">
        <h1>Hello</h1>
         {foodILike.map((food) => (
          <Food 
            key={food.id}
            name={food.name}
            picture={food.image}
            rating={food.rating}
          />
         ))}
    </div>
  );
}

export default App;
 
// aim -부모 component로 부터 전달받은 props가 예상되는 props인지 어떻게 알 수 있는가 ?

//prop-types는 내가 전달받은 props가 내가 원하는 props인지를 확인해 준다.

