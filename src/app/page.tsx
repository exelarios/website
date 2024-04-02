export default function Home() {
  return (
    <main className="px-5">
      <h1 className="font-semibold text-2xl">Deric Kwok</h1>
      <p className="my-2">I like to build things -- mostly software.</p>
      <div className="my-5">
        <p>Things im into:</p>
        <ul>
          <li>tech</li>
          <li>ui/ux</li>
          <li>graphic design</li>
          <li>apple inc</li>
          <li>game dev</li>
          <li>osume</li>
          <li>noodles, soup dumplings, sushi & hotpot</li>
          <li>mechanical keyboards</li>
          <li>skateboarding</li>
          <li>boba drinks, but without the boba</li>
        </ul>
      </div>
      <ul className="flex gap-x-5 my-10">
        <li>
          <a href="https://linkedin.com/in/derickwok">linkedin</a>
        </li>
        <li>
          <a href="https://github.com/exelarios">
            github
          </a>
        </li>
        <li>
          <a href="mailto:derickwok25@gmail.com">
            email
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/urg0ynqt900kvykk1or129aqc">
            spotify
          </a>
        </li>
      </ul>
    </main>
  );
}
