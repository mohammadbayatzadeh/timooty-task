import Link from "next/link";

//mui
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function PostCard(props: any) {
  const { id, index, slug, title, content, image, publishedAt, thumbnail } =
    props;

  return (
    <Link href={`/posts/${id}`}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <CardMedia
                component="img"
                height="50"
                image={thumbnail}
                alt={slug}
              />
            </Avatar>
          }
          title={`${index}. ${title}`}
          subheader={publishedAt}
        />
        <CardMedia component="img" height="194" image={image} alt="image" />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
