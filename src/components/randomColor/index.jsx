import { useEffect, useState } from "react";

export default function RandomColor() {
    const [typeOfColor,setTypeOfColor]=useState("hex");
    const [color,setColor]=useState("");

    function generateRandomHEXColor(){
        const HEX = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i=0;i<6;i++){
            const randomIndex = Math.floor(Math.random()*HEX.length);
            hexColor += HEX[randomIndex];
        }
        setColor(hexColor);
    }

    function generateRandomRGBColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
    }

    useEffect(() => {
        if(typeOfColor==="hex"){
            generateRandomHEXColor();
        }else{
            generateRandomRGBColor();
        }
    },[typeOfColor]);

    return (<div className="container mx-auto p-4 text-center">
         <button className="px-3 py-2 bg-gray-800 m-2 text-white rounded-2xl" onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
         <button className="px-3 py-2 bg-gray-800 m-2 text-white rounded-2xl" onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
         <button className="px-3 py-2 bg-gray-800 m-2 text-white rounded-2xl" onClick={typeOfColor === "rgb" ? () => generateRandomRGBColor() : () => generateRandomHEXColor()}>Generate random color</button>
         <div className="duration-200 text-white"  style={{ backgroundColor: color ,width:"full", height:"50vh"}}>

            {typeOfColor}: {color}
            </div>
    </div>
    )   
}
         