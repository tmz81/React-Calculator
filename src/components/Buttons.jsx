import "../styles/Buttons.css";

export default function Buttons(props){
  return(
    <div>
      <button onClick={e => props.click(props.label)} className={`
        button 
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
      `}>{props.label}</button>

    </div>
  )
};
