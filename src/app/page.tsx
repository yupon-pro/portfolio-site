import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ArticleCard } from "./artileContent";
import { QiitaArticleProps } from "./definitions";
import Link from "next/link";

export default async function Page(){
  const items = await fetch('https://qiita.com/api/v2/authenticated_user/items',{
    method:"GET",
    cache:"no-store",
    headers:{
      Authorization:"Bearer" + " " + `${process.env.ACCESS_TOKEN}`
    }
  });

  const articles = await items.json() as QiitaArticleProps[];

  return (
    <Box>
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginY:10,}} >
        <Typography variant="h5" >
          成果物一覧
        </Typography>
        <Typography variant="body1" style={{wordWrap:"break-word"}} sx={{width:1/2,"@media screen and (max-width:640px)":{width:"80%"}}} >
          ここにあるのはQiitaの記事をfetchで取得してきたものです。
          カードをクリックすることで、Qiitaの記事に飛ぶことができます。
          私の主要な成果物としてのプロダクトは以下のリンクにも掲載しておきます。
        </Typography>
        <Button component="label" variant="text" >
          <Link href="https://portfolio-pink-omega-28.vercel.app/" >
          入力した漢字が小学何年生で習うかを判定するアプリ
          </Link>
        </Button>
        <Button component="label" variant="text" >
          <Link href="https://api-with-reacthookform.vercel.app/" >
          React Hook Form を活用したフォームUIデモ
          </Link>
        </Button>
        <Button component="label" variant="text" >
          <Link href="https://q-dai-agora.vercel.app/" >
          Q-dai Agora 学内知恵（認証機能付き）
          </Link>
        </Button>
      </Box>
      <Box sx={{maxHeight:"200vh",overflow:"scroll"}} >
        <Stack sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"90%",margin:"auto",border:1,padding:5,}} spacing={3}>
          {articles.map(article => (
            <ArticleCard
              key={article.id}
              rendered_body={article.rendered_body}
              comments_count={article.comments_count}
              created_at={article.created_at}
              id={article.id}    
              likes_count={article.likes_count}
              page_views_count={article.page_views_count}
              private={article.private}
              tags={article.tags}
              title={article.title}
              updated_at={article.updated_at}
              url={article.url}
            />
        ))}
        </Stack>
      </Box> 
    </Box>  
  );
}