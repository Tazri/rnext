import ErrorComponent from "./ErrorComponent";
import GithubProfile from "./GithubProfile";
import Loading from "./Loading";
import Notfound from "./Notfound";
import useGithub from "./useGithub";

export default function One() {
  const { user, loading, error } = useGithub("tazri");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return user ? <GithubProfile user={user} /> : <Notfound />;
}
