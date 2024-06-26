import { useEffect, useState } from "react";
import * as S from "../myblogPage/styles/MyblogCss";
import Titlebackground from "../../assets/myblog/Titlebackground.jpg";
import MyblogWidget from "./MyblogWidget";
import AccountBook from "./AccountBook";
import MyblogPostList from "./MyblogPostList";
import MyblogCategoryWidget from "./MyblogCategoryWidget";
import Report from "../reportPage/Report";
import { useBlogStore } from "../homePage/login/state";

export default function Myblog() {
  const [contents, setContents] = useState<string>("postList");
  const { blogInfo } = useBlogStore();
  const [blogName, setBlogName] = useState("");
  const [blogAbout, setBlogAbout] = useState("");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(Titlebackground);

  useEffect(() => {
    if (blogInfo) {
      const storedBlogInfo = JSON.parse(blogInfo);
      setBlogName(storedBlogInfo.blogName);
      setBlogAbout(storedBlogInfo.about);

      if (storedBlogInfo.headerImage) {
        setBackgroundImageUrl(storedBlogInfo.headerImage);
      }
    }
  }, [blogInfo]);

  return (
    <S.MyBlogContainer>
      <S.Picturecontainer imageUrl={backgroundImageUrl}>
        <S.TitleContainer>
          <S.TitleBox>{blogName}</S.TitleBox>
          <S.SubTitleBox>{blogAbout}</S.SubTitleBox>
        </S.TitleContainer>
      </S.Picturecontainer>
      <S.PostContainer>
        <S.LeftSection>
          <MyblogWidget />
          <MyblogCategoryWidget setContents={setContents} />
        </S.LeftSection>
        <S.RightSection>
          {contents === "postList" && <MyblogPostList />}
          {contents === "accountBook" && <AccountBook />}
          {contents === "report" && <Report />}
        </S.RightSection>
      </S.PostContainer>
    </S.MyBlogContainer>
  );
}
