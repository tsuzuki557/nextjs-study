import styles from "./Button.module.css";

type Props = {
  primary?: boolean;
  backgroundColor?: string;
  size?: "S" | "M" | "L" | "LL";
  label?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  primary = false,
  label = "初期ボタン",
  size = "M",
  backgroundColor = "#fff",
  onClick,
  ...props
}) => {
  const mode = primary ? "is--primary" : "is--secondary";
  return (
    <div className={styles.btnWrap}>
      <button
        className={[`test`, `is-${size}`, mode].join(" ")}
        style={{ backgroundColor }}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

export { Button };
