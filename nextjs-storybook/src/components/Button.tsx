import styles from "./Button.module.css";

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: "S" | "M" | "L" | "LL";
  label?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  primary = false,
  label = "初期ボタン",
  size = "M",
  backgroundColor = "#fff",
  ...props
}) => {
  const mode = primary ? "is--primary" : "is--secondary";
  return (
    <div className={styles.btnWrap}>
      <button
        className={[`test`, `is-${size}`, mode].join(" ")}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
