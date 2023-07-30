import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#cac7ff" }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Varnika Mishra"
        subheader="July 30,2023"
      />
      <CardMedia
        component="img"
        
        height="50%"
        
        image="https://i.ibb.co/sqNqkgs/matt-c-j6o-Whh7l4-Ig-unsplash.jpg" 
        alt="News1"
       
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        30/7/2023: Factory Fire in Delhi, India
       A massive fire erupted at a factory in Delhi, India, at 4:00 PM, causing significant damage. Emergency services are on the scene. Updates to follow.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;