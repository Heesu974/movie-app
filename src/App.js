
import React from 'react';

function Food({name, picture}) {
 
  return (
   <div>
    <img src={picture}/>
    <h3>{name}</h3>
   </div>
  )
}

const foodILike = [
  {
  name: "kimchi",
  image: 'https://www.beyondkimchee.com/wp-content/uploads/2022/04/Kimchi-Jjigae-thumbnail.jpg'
},
{
  name: "kimbab",
  image: 'https://thumbs.dreamstime.com/z/kimbab-asian-style-gimbap-kimbap-korean-dish-made-steamed-white-rice-bap-various-other-ingredients-rolled-gim-81838757.jpg'
},
{
  name: "susui",
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/640px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg'
},
];
function App() {

  return (
    <div className="App">
        <h1>Hello</h1>
          {foodILike.map((food, index) => (
          
    <Food key={index} name={food.name} picture={food.image}/>
            
          ))}
    </div>
  );
}

export default App;
 
// 위와 같이 우리는 갖고 있지 않은 데이터를 복사 붙여넣기 할 수 없습니다.
//데이터가 이미 API에서 왔다고 생각해봤을 때, 
//이는 웹사이트에 동적 데이터를 추가하는 방법이다.
//이를 위해 foodILike라고 불리는 array 를 생성한다.
//위의 json 형태를 > array로 가져오고 > food를 이름과 함께 렌더링 하는가? 
//friends.map((friend) => friend + ':)')