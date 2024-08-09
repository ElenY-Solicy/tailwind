import Button from "../shared/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-neutral-50">
      <div className="padding-container max-container flexBetween flex-col py-24 sm:flex-row">
        <div>
          <h2 className="semibold-mobile lg:semibold text-neutral-200">
            Lessons and insights
          </h2>
          <h2 className="semibold-mobile lg:semibold text-primary">
            from 8 years
          </h2>
          <p className="mb-8 mt-4 text-base text-neutral-100">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button text="Register" className="btn_green" />
        </div>
        <Image
          src="/images/Illustration.png"
          width={391}
          height={407}
          alt="Illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
