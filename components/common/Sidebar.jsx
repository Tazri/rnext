import Link from "next/link";

function Sidebar({ docs }) {
  const roots = docs.filter((doc) => !doc.parent);
  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );
  console.log(roots[0]);

  return (
    <nav class="hidden lg:mt-10 lg:block">
      <ul role="list" class="border-l border-transparent">
        {roots.map((root) => {
          return (
            <li key={root?.id} class="relative">
              <Link
                class="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 "
                href={`/docs/${root?.id}`}
              >
                <span class="truncate">{root?.title}</span>
              </Link>
              {nonRoots[root?.id] && (
                <ul role="list" style={{ opacity: 1 }}>
                  {nonRoots[root?.id]?.map((nonRoot) => {
                    return (
                      <li key={nonRoot?.id}>
                        <Link
                          class="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 "
                          href={`/docs/${root?.id}/${nonRoot?.id}`}
                        >
                          <span class="truncate">{nonRoot?.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
