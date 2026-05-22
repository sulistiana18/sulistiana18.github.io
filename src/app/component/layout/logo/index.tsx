import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={getImgPath("/images/logo/ST-logo.svg")}
          alt="logo"
          width={60}
          height={60}
        />
      </Link>
    </>
  );
};

export default Logo;
