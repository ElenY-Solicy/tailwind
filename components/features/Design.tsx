import Image from "next/image";
import Button from "../shared/Button";

const Design = () => {
  return (
    <section className="max-container padding-container flexBetween w-full flex-col gap-12 py-10 md:flex-row">
      <Image src="/images/pana.png" width={442} height={433} alt="frame" />
      <div className="flex w-4/5 flex-col">
        <h2 className="subTiles text-center md:text-start">
          How to design your site footer like
          <br className="hidden xl:block" /> we did
        </h2>
        <p className="descriptionText pb-8 pt-4 md:text-start">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button
          text="Lean More"
          className="btn_green self-center md:self-start"
        />
      </div>
    </section>
  );
};

export default Design;
