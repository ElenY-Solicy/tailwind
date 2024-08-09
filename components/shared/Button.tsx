import Image from "next/image";

interface BtnProps {
  text: string;
  className: string;
  icon?: string;
}

const Button = ({ text, className, icon }: BtnProps) => {
  return (
    <button className={className}>
      {text}
      {icon && (
        <Image
          className="inline-block"
          src={icon}
          alt={text}
          width={16}
          height={16}
        />
      )}
    </button>
  );
};

export default Button;
