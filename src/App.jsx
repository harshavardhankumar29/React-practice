import Accordian from "./components/accordian/index";
import Bg from "./components/bgChanger/Bg";
import RandomColor from "./components/randomColor";
import StarRating from "./components/star-rating";
import PassGen from "./components/passwordGen/PassGen";
import CurrencyConverter from "./components/currencyConverter/CurrencyConverter.jsx";
import InputBox from "./components/currencyConverter/InputBox.jsx";
import Form from "./components/form/Form.jsx";
import UserContextProvider from "./components/miniContext/UserContextProvider.jsx";
import Login from "./components/miniContext/Code/Login.jsx";
import Profile from "./components/miniContext/Code/Profile.jsx";
function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;

// import "./index.css";
// import { CounterProvider } from "./components/context/Rules";
// import Display from "./components/counter/Display";
// import Increment from "./components/counter/Increment";
// import Decrement from "./components/counter/Decrement";
// import Reset from "./components/counter/Reset";

// export default function App() {
//   return (
//     <CounterProvider>
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center">
//           <h1 className="text-2xl font-semibold mb-4">UseContext Counter</h1>
//           <div className="space-y-4">
//             <Display />
//             <div className="flex items-center justify-center space-x-3">
//               <Increment />
//               <Decrement />
//               <Reset />
//             </div>
//           </div>
//         </div>
//       </div>
//     </CounterProvider>
//   );
// }


// <div className="App">
    //   <Accordian />
    //   <Bg />
    //   <RandomColor />
    //   <StarRating />
    //   <PassGen />
    // </div>
   
    {/* <CurrencyConverter/> */}
    {/* <Form/> */}
    
     {/* <InputBox/> */}
