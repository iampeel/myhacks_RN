// 번호 5.
import React from "react";
// 5. 설치한 스택 네비게이션 라이브러리를 가져옴
import { createStackNavigator } from "@react-navigation/stack";

// 5. 페이지로 만든 컴포넌트들을 불러옴
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";

//5. 스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용하기 위함
// 그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        // 5. 컴포넌트들을 페이지처럼 여기게끔 해주기 위함
        // Stack은 위에서 선언한 거
        // Navigator는 페이지(화면)를 스타일링
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height: 100,
                },
                // 5. 헤더의 텍스트 정렬
                headerTitleAlign: "left",
                headerTintColor: "#000",
                headerBackTitleVisible: false,
            }}
        >
            {/* 5. name은 상단에 표시되는 이름
            component는 연결시킬 페이지*/}
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="DetailPage" component={DetailPage} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
