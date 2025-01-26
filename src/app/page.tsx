import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="px-5">
        <h1 className="md:text-right font-semibold text-2xl text-white">Deric Kwok</h1>
        <p className="md:text-right mt-2 text-white">I like to build things -- mostly software.</p>
        <p className="md:text-right text-white">
          Building at <Link href="https://getfiber.ai" className="underline">Clerkie</Link>,
          previously at <Link href="https://coinbase.com" className="underline">Coinbase</Link> & <Link className="underline" href="https://garden.zendesk.com">Zendesk</Link>
        </p>
        <details className="md:text-right my-5 text-white">
          <summary>Things im into</summary>
          <ul>
            <li className="ml-6">tech</li>
            <li className="ml-6">ui/ux</li>
            <li className="ml-6">graphic design</li>
            <li className="ml-6">game dev</li>
            <li className="ml-6">noodles, soup dumplings <br/> sushi, hotpot & pancakes</li>
            <li className="ml-6">mechanical keyboards</li>
            <li className="ml-6">falling off my skateboard</li>
            <li className="ml-6">boba drinks, without the boba</li>
          </ul>
        </details>
      </main>
      <div className="-z-10 absolute right-0 w-screen h-screen md:bg-gradient-to-tr from-transparent to-95% to-black/70"></div>
      <Image
        fill
        className="object-left md:object-center object-cover -z-20 grayscale-50 saturate-150"
        src="/background.jpg"
        alt="man walking within a coffee shop"
      />
    </>
  );
}
