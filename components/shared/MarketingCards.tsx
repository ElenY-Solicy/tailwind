import Image from "next/image";

interface MarketingProps {
  src: string;
  text: string;
}

const MarketingCards = ({ src, text }: MarketingProps) => {
  return (
    <div className="relative flex justify-center">
      <Image src={src} width={368} height={286} alt="image" />
      <div className="shadow-[0px_8px_16px_0px_#ABBED166] absolute -bottom-14 flexCenter w-[85%] flex-col rounded-lg bg-neutral-50 p-4 gap-4">
        <p className="text-xl font-semibold text-neutral-100 text-center">{text}</p>
        <span className="text-primary">
          Read more
          <Image
            src="/svg/right.svg"
            className="inline-block"
            alt="more"
            width={24}
            height={24}
          />
        </span>
      </div>
    </div>
  );
};

export default MarketingCards;
