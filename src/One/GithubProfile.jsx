import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function GithubProfile({ user }) {
  const { bio, avatar_url, followers, following, name, public_repos } = user;

  const publicReposText = `Total Public Repos : ${public_repos}`;
  return (
    <Card className="mx-auto my-20" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={avatar_url} />
          </Avatar>
        }
        title={name}
        subheader={publicReposText}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "0.5rem",
            marginTop: "10px",
          }}
          color="text.secondary"
        >
          {`Followers : ${followers} Following : ${following}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
