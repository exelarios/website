"use client";

import useTime from "@/hooks/useTime";

function Navbar(props: { city: string }) {
  const { city } = props;

  const time = useTime(1000);

  return (
    <nav className="my-5 p-3">
      <span>
        {time} @ {city}
      </span>
    </nav>
  );
}

export default Navbar;