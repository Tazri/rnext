import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

async function ContentDisplay({ id }) {
  const contents = await getDocumentContent(id);

  return (
    <article className="prose dark:prose-invert">
      <h1 className="">{contents?.title}</h1>
      <div>
        <span>Publised on : {contents?.date}</span> by{" "}
        <Link href={`/author/${contents?.author}`}>{contents?.author}</Link>{" "}
        under the{" "}
        <Link href={`/categories/${contents?.category}`}>
          {contents?.category}
        </Link>{" "}
        category.
      </div>
      <div>
        {contents?.tags &&
          contents?.tags?.map((tag) => {
            return <Tag key={tag} tag={tag} />;
          })}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: contents?.contentHtml }}
      ></div>
    </article>
  );
}

export default ContentDisplay;
