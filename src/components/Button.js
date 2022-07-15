const Button = (props) => {
  return (
    <button
      type="button"
      className="button"
      style={{ backgroundColor: props.color }}
      onClick={props.getData}
    >
      {props.text}
    </button>
  );
};

export default Button;
