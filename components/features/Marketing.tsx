import MarketingCards from "../shared/MarketingCards";
import { cardMarketing } from "@/constants";

const Marketing = () => {
  return (
    <section className="max-container padding-container flexBetween w-full flex-col gap-4 pb-32 pt-12">
      <div className="flexCenter flex-col">
        <h2 className="subTiles text-center md:text-start">
          Caring is the new marketing
        </h2>
        <p className="descriptionText md:w-7/12 ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flexBetween flex-col w-full lg:flex-row gap-y-28">
        {cardMarketing.map((el, i) => (
          <MarketingCards key={i} src={el.src} text={el.text} />
        ))}
      </div>
    </section>
  );
};

export default Marketing;
