import Accordian from "./components/accordian/index";
import Bg from "./components/bgChanger/Bg";
import RandomColor from "./components/randomColor";
import StarRating from "./components/star-rating";
import PassGen from "./components/passwordGen/PassGen";

function App() {
  return (
    <>
    <PassGen/>
    </>
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
