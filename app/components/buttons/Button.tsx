interface ButtonProps {
  text: string;
  action?: () => void;
}

const Button = ({ text, action }: ButtonProps) => {
  return (
    <button 
      onClick={action} 
      className="app-button"
    >
      <div>{text}</div>
    </button>
  );
};

export default Button;
