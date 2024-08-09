import { logos } from "@/constants";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="max-container padding-container flexCenter flex-col gap-4 py-10">
      <h2 className="subTiles">Our Clients</h2>
      <p className="descriptionText">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flexAround sm:flexBetween w-full flex-wrap py-6">
        {logos.map((img, index) => (
          <Image src={img} key={index} width={48} height={48} alt="logo" />
        ))}
      </div>
    </section>
  );
};

export default Clients;
