import Link from "next/link";
import React from "react";

function BPage() {
  return (
    <div>
      <h1>This is page {'"B"'}</h1>
      <Link href="/folders/a">Go A Page</Link>
    </div>
  );
}

export default BPage;
