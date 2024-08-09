import { company, social, support } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-300">
      <div className="max-container padding-container xl:flexAround flex w-full flex-col gap-32 py-24 md:flex-row">
        <div className="flexCenter w-full md:w-2/12 flex-col">
          <div>
            <Image
              src="/images/logoFooter.png"
              width={191}
              height={30}
              alt="logo"
            />
            <p className="my-10">
              <span className="block text-sm text-neutral-50">
                Copyright &copy; 2020 Nexcent ltd.
              </span>
              <span className="text-sm text-neutral-50">
                All rights reserved
              </span>
            </p>
          </div>
          <div className="flexBetween gap-4">
            {social.map((el, i) => (
              <Image key={i} src={el} alt="social" width={32} height={32} />
            ))}
          </div>
        </div>
        <div className="flexCenter w-full md:flexBaseLine flex-wrap md:flex-nowrap md:w-4/5 gap-11 xl:w-2/4">
          <div className="flexStart flex-col gap-6">
            <h5 className="text-xl font-semibold text-white">Company</h5>
            <div className="flexStart flex-col gap-3">
              {company.map((el, i) => (
                <span className="text-sm text-neutral-50" key={i}>
                  {el}
                </span>
              ))}
            </div>
          </div>
          <div className="flexStart flex-col gap-6">
            <h5 className="text-xl font-semibold text-white">Support</h5>
            <div className="flexStart flex-col gap-3">
              {support.map((el, i) => (
                <span className="text-sm text-neutral-50" key={i}>
                  {el}
                </span>
              ))}
            </div>
          </div>
          <div className="flexStart flex-col gap-6">
            <h5 className="text-xl font-semibold text-white">
              Stay up to date
            </h5>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                id="price"
                name="price"
                type="text"
                placeholder="Your email address"
                className="block w-full rounded-md border-0 bg-[#515B60] py-1.5 pl-7 pr-20 text-neutral-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <Image
                  src="/images/send.png"
                  alt="send"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
