
import React from 'react';

function Food({name}) {
 
  return (<h3>I like {name}</h3>)
}


function App() {

  return (
    <div className="App">
        <h1>Hello</h1>
    <Food 
    name='kimchi'
    />
        <Food 
    name='ramen'
    />
        <Food 
    name='kimbab'
    />
        <Food 
    name='susui'
    />
    </div>
  );
}

export default App;
 
//jsx에서는 component에 정보를 보낼 수 있다.
//component에서 component로, component에서 children component로 정보를 보내는 방법을 알아 봅시다.

//App (application)에서 food component로 정보를 보내고 food Component에서 그 정보를 어떻게 사용하는지 볼 것이다.
//부모와 child 관계 인가 ? 그럼 prop ? food component에 kimchi라는 value로 prop name을 줬다.
//Food component의 argument로 prop을 넣을 것이다. console에 찍혀나오는 props는 props라고 불리는 한 argument의 내부이다.
//object를 연다 = {}
//object를 열어서 name을 꺼낼 것이다. = {name} 
//즉, {name} 이나, props.name이나 같은거