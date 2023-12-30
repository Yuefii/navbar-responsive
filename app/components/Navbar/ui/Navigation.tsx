import Link from "next/link";
import { NavbarItems } from "@/constants/NavbarItems";
import {motion} from "framer-motion"

const Navigation = () => {
  return (
    <>
    {NavbarItems.map((NI, index)=> (
      <ul key={index}>
        <Link href={NI.href}>
          <motion.li whileHover={{ scale: 1.1 }} className="py-2 sm:py-0 hover:underline">{NI.label}</motion.li>
        </Link>
      </ul>
    ))}
    </>
  );
};

export default Navigation;
