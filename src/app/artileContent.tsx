import { Card, CardActions, CardContent, Avatar, Paper, Typography, IconButton, Grid, Icon, Link, Button, Box } from "@mui/material";
import { QiitaItem, QiitaTag } from "./definitions";
import { Favorite, Message, RemoveRedEye } from "@mui/icons-material";

export const ArticleCard = ({
  comments_count,
  id,
  likes_count,
  page_views_count,
  title,
  rendered_body,
  tags,
  url,
}: QiitaItem) => {

  return (
    <Box sx={{width:"60%", "@media screen and (max-width:640px)":{width:"80%"}  ,margin:"auto"}} >
      <Card id={id} elevation={6}>
        <CardContent>
          <Typography component="div" variant="subtitle1" style={{ margin: "0.5rem", fontWeight: "bold" } }>
            {title}
          </Typography>
          <Typography variant="body2" style={{ wordWrap:"break-word"}} >
            {rendered_body.replace(/<\/?[^>]+(>|$)/gi, '').substring(0,200)}......
          </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" component="label"  >
                <Link href={url} color="inherit" style={{marginLeft:0}} underline="none">
                    {`Go Page`}
                </Link>
            </Button>
          <>
            <Icon style={{marginLeft:20, color:"red"}}>
            <Favorite />
            </Icon>
            <p>{likes_count}</p>  
          </>
          <>
            <Icon style={{marginLeft:20}}>
              <RemoveRedEye/>
            </Icon>
            <p>{page_views_count}</p>   
          </>
          <>
            <Icon style={{marginLeft:20, color:"white"}}>
              <Message/>
            </Icon>
            <p>{comments_count}</p>  
          </>  
        </CardActions>
      </Card>
    </Box>
  );
};
