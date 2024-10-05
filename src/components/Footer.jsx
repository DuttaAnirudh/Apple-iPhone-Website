import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More was to shop:{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you.
          </p>

          <p className="font-semibold text-gray text-xs">
            Or call 00800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex gap-2 flex-col items-center justify-center">
          <p className="font-semibold text-gray text-xs text-center">
            Copyright @ {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p className="font-semibold text-gray text-xs" key={link}>
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="max-[425px]:mx-0.5 mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
