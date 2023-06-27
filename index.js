
// import React from 'react';

// import ReactDom from 'react-dom';

// const flname = "PRASUNA DASH"
// const fname = "PRASUNA"
// const lname = "DASH"

// ReactDom.render(
//   <React.Fragment>

//     <h1>Hello my name is {flname}</h1>

//     <h1>my name is {fname} {lname}</h1>

//      <h1>my name is { `${fname} ${lname}` }</h1>

//      {/* template literals */}

//     <p>addition of 5 and 6 is {5+6}</p>
//     <p>random number is {Math.random ()}</p>
//     <h3>Please visit my website</h3>

//     <ol>
//       <li>jhowiow</li>
//       <li>jhowiow</li>
//       <li>jhowiow</li>
//     </ol>
//   </React.Fragment>,

//   document.getElementById('root'));

// import React from 'react';
// import ReactDOM  from 'react-dom';

// const date = new Date ().toLocaleDateString()
// const time = new Date ().toLocaleTimeString()
// ReactDOM.render(
//   <>
//   <h1 contentEditable = "true">Hello, My name is Prasuna dash</h1>
//   <img src="https://picsum.photos/200/300" alt='random img'></img>
//   <p>Today Date is = { `${date}`}</p>
//   <p>Today time is = { `${time}` }</p>
//   </>
// ,
// document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const name = "PRASUNA DASH";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/280/300";
// const img3 = "https://picsum.photos/300/300";
// const img4 = "https://picsum.photos/310/310";

// const headingStyle = {
//   color: '#fa9191',
//   textTransform: 'capitalize',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #fff',
//   margin: '70px 70px' ,
//   fontFamily: '"Josefin Sans", sans-serif'
// };  


// ReactDOM.render(
//   <>
//     <h1 style={headingStyle}>My name is {name}</h1>
//     <div className='img_div'>
//       <img src={img1} alt="Image 1" />
//       <img src={img2} alt="Image 2" />
//       <img src={img3} alt="Image 3" />
//       <img src={img4} alt="Image 4" />
//     </div>
//   </>,
//   document.getElementById('root')
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading";
// import List from "./List";
// import App from "./App";   
// ReactDOM.render(

//   <>
//      <App></App>

//   </>
//     , document.getElementById('root')
// );


import React from "react";
import ReactDOM from "react-dom";
import  "./index.css";
import App from "./App";



ReactDOM.render(<App/>, document.getElementById('root'));

