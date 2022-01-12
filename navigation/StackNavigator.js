// 1: 초기 세팅
// 2: 소개 페이지 추가
// 3: 꿀팁찜 페이지 추가

// 1.
import React from "react";

// 1. 설치한 스택 네비게이션 라이브러리를 가져옴
import { createStackNavigator } from "@react-navigation/stack";

// 1. 페이지로 만든 컴포넌트들을 불러옴
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";

// 2.
import AboutPage from "../pages/AboutPage";

// 3.
import LikePage from "../pages/LikePage";

// 1. 라이브러리 선언 및 할당
// 스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용하기 위함
// 그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙
const Stack = createStackNavigator();

// 1.
const StackNavigator = () => {
    return (
        // 1. 컴포넌트들을 페이지처럼 여기게끔 해주기 위함
        // Stack은 위에서 선언한 거
        // Navigator는 페이지(화면)를 스타일링
        <Stack.Navigator
            screenOptions={{
                // 1. 상단
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height: 100,
                },
                // 1. 헤더의 텍스트 정렬
                headerTitleAlign: "left",
                headerTintColor: "#000",
                headerBackTitleVisible: false,
            }}
        >
            {/* 1. name은 상단에 표시되는 이름이면서
            다른 페이지에서 연결할 때 쓰임
            , component는 연결시킬 페이지 파일명*/}
            {/* 순차적으로 읽는 거 같음. MainPage와 DetailPage의 순서를 바꾸면 에러남 */}
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="DetailPage" component={DetailPage} />

            {/* 2. */}
            <Stack.Screen name="AboutPage" component={AboutPage} />

            {/* 3. */}
            <Stack.Screen name="LikePage" component={LikePage} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
