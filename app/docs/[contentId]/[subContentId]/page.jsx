import ContentDisplay from "@/components/contentPage/ContentDisplay";

function SubContentPage({ params: { subContentId } }) {
  return <ContentDisplay id={subContentId} />;
}

export default SubContentPage;
