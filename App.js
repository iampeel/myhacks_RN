// 번호 진행 1, 2, 3, 4, 5
import React from "react";

// 5. 컴퍼넌트를 메인에 연결할 예정으로 여기로 안 부름
// import MainPage from "./pages/MainPage";
// import AboutPage from "./pages/AboutPage";
// import DetailPage from "./pages/DetailPage";

// 4. 상단 상태바 쓰기 위함
// MainPage에서만 썼는데 5번하면서 여기도 추가
import { StatusBar } from "expo-status-bar";

// 5. 메인에 세팅할 네비게이션 도구들 가져옴
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
    // return <MainPage />;
    // return <AboutPage />;
    // return <DetailPage />;
    // 5. 네비게이션 도입
    return (
        <NavigationContainer>
            {/* 5. 상단 상태바 */}
            <StatusBar style="black" />
            <StackNavigator />
        </NavigationContainer>
    );
}
