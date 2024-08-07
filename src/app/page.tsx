import Link from "next/link";

export default function Home() {
  return (
    <main className="px-5">
      <h1 className="font-semibold text-2xl">Deric Kwok</h1>
      <p className="mt-2">I like to build things -- mostly software.</p>
      <p>
        Building at <Link href="https://clerkie.io" className="underline">Clerkie</Link>,
        previously at <Link href="https://coinbase.com" className="underline">Coinbase</Link> & <Link className="underline" href="https://garden.zendesk.com">Zendesk</Link>
      </p>
      <details className="my-5">
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
  );
}
