interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "S" | "M" | "L" | "LL";
  label?: string;
  //onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  label = "初期ボタン",
  size = "M",
  backgroundColor = "#fff",
  ...props
}) => {
  const mode = primary ? "is--primary" : "is--secondary";
  return (
    <button
      className={[`test`, `is-${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
