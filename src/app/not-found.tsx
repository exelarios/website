import Image from "next/image";
import Link from "next/link";

import Rat from "@/assets/images/rat.jpg";

function NotFound() {
  return (
    <main className="px-5 grow">
      <Image className="mx-auto" src={Rat} alt="very lost rat"/>
      <Link href="/">
        <p className="my-5 text-center">Go Back</p>
      </Link>
    </main>
  );
}

export default NotFound;