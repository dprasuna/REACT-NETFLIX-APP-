// import React, { useState } from "react";



// const App = () =>{
    
//   const state = useState();
// // console.log(state);

// const [count , setCount] = useState(0);

// const IncNum = () =>{
// setCount(count + 1);
//   // console.log("Clicked" + count++ );
// };
// return (
//   <>
//     <h1>{count}</h1>
//     <button onClick={IncNum}>Click Me</button>
//   </>

// );

// };

// export default App;


// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const App = () => {
  
//    let time = new Date().toLocaleTimeString();
   
//    const [ctime , setCtime] = useState(time);
  
//    const UpdateTime = () => {
//     time = new Date().toLocaleTimeString();
//     setCtime(time);
//    }

//    setInterval(UpdateTime,1000)

//   return(
//   <>
//     <h1>{ctime}</h1>
//     {/* <button onClick={UpdateTime}>Get TIME</button> */}
//   </>
//   );
// };
// export default App;

import React, { useState } from "react";

const App = () => {
  const purple = '"#8e44ad"';
  const [bg, setBg] = useState(purple);
  const [ Name, setName]  = useState('click me');

  const bgChange = () => {
    // console.log("clicked");
    let newBg = '#34495e';
    setBg(newBg);
    setName('You clicked it ');
  };

  const bgBack = () =>{
     setBg(purple);
     setName('You Double clicked it ');
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{Name}</button>
      </div>
    </>
  );
};

export default App;
