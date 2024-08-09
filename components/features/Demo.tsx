import React from "react";
import Button from "../shared/Button";

const Demo = () => {
  return (
    <section className="bg-neutral-50">
      <div className="max-container padding-container flexCenter flex-col gap-8 py-8">
        <h2 className="semibold-mobile lg:semibold text-center">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h2>
        <Button
          text="Get a Demo"
          className="btn_green"
          icon="/svg/whiteArrow.svg"
        />
      </div>
    </section>
  );
};

export default Demo;
