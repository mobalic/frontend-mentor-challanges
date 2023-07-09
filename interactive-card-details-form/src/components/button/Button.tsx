interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: Record<string, string>;
}

export function Button({
  children,
  onClick,
  active = false,
  className,
  style,
  type,
}: ButtonProps) {
  return (
    <button
      style={style}
      type={type}
      onMouseDown={(evt) => {
        evt.preventDefault();
        evt.stopPropagation();
      }}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
