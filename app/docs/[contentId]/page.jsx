import ContentDisplay from "@/components/contentPage/ContentDisplay";

export default function ContentPage({ params: { contentId } }) {
  return <ContentDisplay id={contentId} />;
}
