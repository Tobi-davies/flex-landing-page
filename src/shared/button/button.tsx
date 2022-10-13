interface Props {
  type: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  // onClick: () => void;
  // className?: string;
}

const Button = ({ children, type, className }: Props) => {
  return (
    <button
      className={`rounded-md font-medium ${className} ${
        type === "primary"
          ? "bg-green text-primaryBtnText"
          : "bg-white text-secBtnText border border-slate-300"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
