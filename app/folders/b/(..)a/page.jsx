import Link from "next/link";

function APage() {
  return (
    <div>
      <h1>This is intercept page {'"A"'}</h1>
      <Link href="/folders/b">Go B Page</Link>
    </div>
  );
}

export default APage;
