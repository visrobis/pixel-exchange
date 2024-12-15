import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contacts = () => {
  return (
    <div className="fixed flex flex-col gap-4 bottom-10 left-12">
      <Link href={"https://www.facebook.com/killmix8623/"}>
        <Image src={"/images/facebook.png"} width={40} height={50} alt="" />
      </Link>
      <Link href={"https://discord.gg/9K3dGtaD7r"}>
        <Image src={"/images/discord.png"} width={40} height={50} alt="" />
      </Link>
    </div>
  );
};

export default Contacts;
