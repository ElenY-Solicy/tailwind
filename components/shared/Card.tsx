import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  text: string;
}

const Card = ({ icon, title, text }: CardProps) => {
  return (
    <div className="flexCenter max-w-[18.5rem] flex-col py-6 px-8 border-2 border-[#d8ebff33] shadow-[0px_2px_4px_0px_#ABBED133] rounded-lg">
      <Image src={icon} width={65} height={56} alt="icon" />
      <h3 className="cardTitle mb-2 mt-4 whitespace-pre-line text-center">
        {title}
      </h3>
      <p className="cardText">{text}</p>
    </div>
  );
};

export default Card;
