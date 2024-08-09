import { cardsLocal } from "@/constants";
import NumberCard from "../shared/NumberCard";

const Local = () => {
  return (
    <section className="bg-neutral-50">
      <div className="max-container padding-container flexCenter md:flexBaseLine w-full flex-col gap-12 py-16 md:flex-row">
        <div>
          <h2 className="subTiles text-center md:text-start">
            Helping a local
          </h2>
          <h2 className="subTiles text-center !text-primary md:text-start">
            business reinvent itself
          </h2>
          <p className="descriptionText md:text-start">
            We reached here with our hard work and dedication.
          </p>
        </div>
        <div className="grid sm:w-1/2 grid-cols-2 gap-4 gap-y-10">
          {cardsLocal.map((el, i) => (
            <NumberCard
              key={i}
              icon={el.icon}
              number={el.number}
              name={el.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Local;
