interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="app-button">
      <div>{text}</div>
    </button>
  );
};

export default Button;
