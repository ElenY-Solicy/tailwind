import Image from "next/image";
import Button from "../shared/Button";

const Pixel = () => {
  return (
    <section className="max-container padding-container flexBetween w-full flex-col py-10 gap-12 md:flex-row">
      <Image src="/images/frame.png" width={442} height={433} alt="frame" />
      <div className="flex flex-col w-4/5">
        <h2 className="subTiles text-center md:text-start">
          The unseen of spending three
          <br className="hidden xl:block" /> years at Pixelgrade
        </h2>
        <p className="descriptionText pb-8 pt-4 md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button text="Lean More" className="btn_green self-center md:self-start" />
      </div>
    </section>
  );
};

export default Pixel;
