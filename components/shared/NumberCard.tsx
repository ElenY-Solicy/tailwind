import Image from "next/image";

interface NumberCardProps {
  icon: string;
  number: string;
  name: string;
}

const NumberCard = ({ icon, number, name }: NumberCardProps) => {
  return (
    <div className="flex items-center gap-4 ">
      <Image src={icon} width={48} height={48} alt={name} />
      <div>
        <h3 className="cardTitle !text-start">{number}</h3>
        <span className="cardText">{name}</span>
      </div>
    </div>
  );
};

export default NumberCard;
