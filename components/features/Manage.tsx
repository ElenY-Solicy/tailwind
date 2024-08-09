import { cardsManage } from "@/constants";
import Card from "../shared/Card";

const Manage = () => {
  return (
    <section className="max-container padding-container flexCenter flex-col">
      <h2 className="subTiles text-center">
        Manage your entire community
        <br className="hidden xl:block"  /> in a single system
      </h2>
      <p className="descriptionText">Who is Nextcent suitable for?</p>
      <div className="flexBetween w-full flex-col gap-y-6 lg:flex-row py-2.5">
        {cardsManage.map((el, i) => (
          <Card key={i} text={el.text} title={el.title} icon={el.icon} />
        ))}
      </div>
    </section>
  );
};

export default Manage;
