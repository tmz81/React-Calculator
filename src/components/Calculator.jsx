import "../styles/Calculator.css";
import Buttons from "./Buttons";

function Calculator(){
  return(
    <div className="main">
      <Buttons label="AC"/>
      <Buttons label="/"/>
      <Buttons label="7"/>
      <Buttons label="8"/>
      <Buttons label="9"/>
      <Buttons label="*"/>
      <Buttons label="4"/>
      <Buttons label="5"/>
      <Buttons label="6"/>
      <Buttons label="-"/>
      <Buttons label="1"/>
      <Buttons label="2"/>
      <Buttons label="3"/>
      <Buttons label="+"/>
      <Buttons label="0"/>
      <Buttons label="."/>
      <Buttons label="="/>
    </div>
  )
};

export default Calculator