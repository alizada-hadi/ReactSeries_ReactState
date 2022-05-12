import User from "./components/User";
import Header from "./components/Header";
import Body from "./components/Body";
import { boxes } from "./boxes";
import Box from "./components/Box";
import React from 'react'
function App() {
  // const [user, setUser] = React.useState({name : "Hadi Alizada"})
  const [box, setBox] = React.useState(boxes)
  const toggle = (id) => {
    console.log(`box with id of ${id} get clicked `);
  }
  const boxElements = box.map(item => (
    <Box
    key={item.id} 
    on={item.on}
    id={item.id}
    onHandleClick={toggle}
    />
  ))
  return (
    <div className="App">
        {/* <User /> */}
        {/* <Header username={user.name} />
        <Body username={user.name} /> */}
        {boxElements}
    </div>
  );
}

export default App;
