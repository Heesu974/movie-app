
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <h1>Time for State</h1>
    )
  }
}

export default App;
 
// aim - state

//state는 보통 우리가 동적 데이터와 함께 작업할 때 만들어진다. 
//변하는 데이터와 존재하지 않는 데이터, 즉,  dynamic data를 이용한다.
//따라서 prop의 예제에서 사용했던 custom 데이터를 사용할 수 없는 것이다.

//지금까지는 functional component를 사용해봤습니다. 

//aim - 드디어 class component를 배워볼 차례입니다.
//class를 작성하고 이름을 App을 같습니다.

//class App extends React.Component = " class App은 React Component입니다. "
//react class component는 뒤에 많은 것을 가지고 있는데, 그 중 하나가 state입니다. 
//component를 만들 때마다 모든 것을 다 구현할 필요가 없기 때문에  extends 한 이유입니다.

//App component는 class이기 때문에 return을 가지고 있지 않습니다. 대신 render method를 갖고 있다.
//react component는 render method를 가지고 있고, 내가 App component를 만들 때, extends 로 
//react component에서 확장했기 때문에,
//App component에서 render method를 사용할 수 있는 겁니다.

