import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around items-center cursor-pointer text-neutral-200 mb-3">
        <FaInstagram size={23} />
        <FaTiktok size={23} />
        <FaYoutube size={23} />
      </div>
      <div className="border-b dark:border-white" />
      <p className="text-center text-xs text-white pt-2">
        Copyright 2024 YOIIII
      </p>
    </>
  );
};

export default Footer;
