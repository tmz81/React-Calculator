import "../styles/Buttons.css";

export default function Button(props) {
  let classes = "button ";
  classes += props.operation ? "operation" : "";
  classes += props.double ? "double" : "";
  classes += props.triple ? "triple" : "";

  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={classes}
    >
      {props.label}
    </button>
  );
}
