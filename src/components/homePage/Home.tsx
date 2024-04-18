import { useEffect, useState } from "react";
import MainTitle from "./MainTitle";
import HomePostList from "./HomePostList";
import Header from "../myblogPage/myblogItems/Header";
import HomeSideMenu from "./HomeSideMenu";
import * as S from "../homePage/styles/MainStyle";

const Home = () => {
    // 공지사항 팝업 띄우기 여부 useState
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <S.HomeContainer>
            <Header setShowSideMenu={setShowSideMenu} />
            <S.MainContainer>
                <MainTitle />
                <div>BEST</div>
                <HomePostList />
            </S.MainContainer>
            {showSideMenu && (
                <HomeSideMenu />
            )}
        </S.HomeContainer>
    );
}

export default Home;