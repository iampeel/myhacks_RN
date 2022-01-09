// 5: 네비게이션
// 3. { useState, useEffect }
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

// 1. 이미지 주소
const main =
    "https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png";

// 2. json 데이터 가져오기
import data from "../data.json";
// 2. Card 컴포넌트 가져오기
import Card from "../components/Card";
// 3. Loading 컴포넌트 가져오기
// Loadong 은 앱이 데이터를 가져오는데 버퍼링이 생기는 경우
// 보여주는 화면
import Loading from "../components/Loading";
// 4. 상단 상태바 쓰기 위함
// 지워도 되지 않을까? App.js에서 처리했는데
import { StatusBar } from "expo-status-bar";

// 5. 네이게이션 인자 넣기
// export default function MainPage() {
export default function MainPage({ navigation, route }) {
    // 3. state라는 변수를 []로 초기화 해주겠다.
    // state값을 바꿀때는 setState를 사용해라.
    // 상태값이 바뀌면 화면이 다시 로딩된다.
    const [state, setState] = useState([]);
    // 3
    const [cateState, setCateState] = useState([]);
    // 3. loading 화면을 보여주기위한 세팅
    const [ready, setReady] = useState(true);

    // 3. useEffect()에 있는 내용은
    // 화면이 그려진 다음 가장 먼저 실행
    useEffect(() => {
        // 3. 1000은 1초, 1초 뒤에 실행하라는 함수
        setTimeout(() => {
            // 5. 헤더의 타이틀 변경
            navigation.setOptions({
                title: "나만의 꿀팁",
            });
            // data에서 key값이 tip인 내용으로 초기화
            setState(data.tip);
            // 이내용은 없어도 되는 거 같음
            setCateState(data.tip);
            // 1초 뒤에 false로 초기화
            setReady(false);
        }, 2000);
    }, []);

    // 3. 밑에 버튼을 이런 식으로 구현했음
    // onPress={() => {
    //     category("생활");
    // }}
    // cate에 "생활"이 들어옴
    const category = (cate) => {
        if (cate == "전체보기") {
            // 3. 전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
            // 아래 view는 이렇게 쓰여있음
            // <View style={styles.cardContainer}>
            //     {cateState.map((content, i) => {
            //         return <Card content={content} key={i} />;
            //     })}
            // </View>
            setCateState(state);
        } else {
            // 3. filetr()라는 함수는 state에 담겨있는 내용을 차례로 가져온다.
            // 가져온 항목에서 caterfory값이 "생활"인 것만 리턴시켜서
            // cateState 변수에 넣음
            setCateState(
                state.filter((d) => {
                    return d.category == cate;
                })
            );
        }
    };

    // 2. json 데이터 할당
    // 3. state 작업하면서 삭제
    // let tip = data.tip;

    let todayWeather = 10 + 17;
    let todayCondition = "흐림";

    // 3. 삼항 연산자를 통해 로딩 페이지 진입
    return ready ? (
        <Loading />
    ) : (
        // 1. 전체를 스크롤뷰로 감쌀 예정이라
        <ScrollView style={styles.container}>
            {/* 4. 상단 상태바 */}
            <StatusBar style="dark" />
            {/* 5. 네비게이션 도입하면서 제목 중복으로 삭제 */}
            {/* <Text style={styles.title}>나만의 꿀팁</Text> */}
            {/* 2. 오른쪽 상단 날씨 추가 */}
            <Text style={styles.weather}>
                오늘의 날씨: {todayWeather + "°C " + todayCondition}{" "}
            </Text>
            <Image style={styles.mainImage} source={{ uri: main }} />
            {/* 1. 여긴 버튼이라 좌우로 스크롤 */}
            {/* horizontal={true}를 저렇게 써도 되네 */}
            {/* indicator ?? */}
            <ScrollView
                style={styles.middleContainer}
                horizontal
                indicatorStyle={"white"}
            >
                <TouchableOpacity
                    style={styles.middleButtonAll}
                    onPress={() => {
                        category("전체보기");
                    }}
                >
                    <Text style={styles.middleButtonTextAll}>전체보기</Text>
                </TouchableOpacity>

                {/* 1.             
                <TouchableOpacity style={styles.middleButton01}>
                    <Text style={styles.middleButtonText}>생활</Text>
                </TouchableOpacity>
                 */}

                <TouchableOpacity
                    style={styles.middleButton01}
                    // 3. 카데고리 함수로 던지게 함
                    onPress={() => {
                        category("생활");
                    }}
                >
                    <Text style={styles.middleButtonText}>생활</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.middleButton02}
                    onPress={() => {
                        category("재테크");
                    }}
                >
                    <Text style={styles.middleButtonText}>재테크</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.middleButton03}
                    onPress={() => {
                        category("반려견");
                    }}
                >
                    <Text style={styles.middleButtonText}>반려견</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.middleButton04}
                    onPress={() => {
                        category("꿀팁 찜");
                    }}
                >
                    <Text style={styles.middleButtonText}>꿀팁 찜</Text>
                </TouchableOpacity>
            </ScrollView>
            {/* tip은 이렇게 생겼음
            {
    "tip":[
        {
            "idx":0,
            "category":"생활",
            "title":"먹다 남은 피자를 촉촉하게!",
            "image":"https://storage.googleapis.com/sparta-image.appspot.com/lecture/pizza.png",
            "desc":"먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.",
            "date":"2020.09.09"
        },
        ......
              */}
            <View style={styles.cardContainer}>
                {/* 2. content는 내용 하나, i는 index */}
                {/* {tip.map((content, i) => {
                    // 카드 컴포넌트화
                    return <Card content={content} key={i} />;
                })} */}
                {/* 3. cateState에 있는 내용 가져옴 */}
                {cateState.map((content, i) => {
                    // 5. navigation={navigation} 추가
                    return (
                        <Card
                            content={content}
                            key={i}
                            navigation={navigation}
                        />
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 50,
        marginLeft: 20,
    },

    weather: {
        alignSelf: "flex-end",
        paddingRight: 20,
        marginTop: 10,
    },

    mainImage: {
        width: "90%",
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        // 아이템을 가운데 배치
        alignSelf: "center",
    },

    middleContainer: {
        // 영역 확인하기 위해
        // borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        height: 60,
    },

    // 3. 전체보기 추가
    middleButtonAll: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#20b2aa",
        borderRadius: 15,
        margin: 7,
    },

    middleButton01: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fdc453",
        borderRadius: 15,
        margin: 7,
    },

    middleButton02: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#9adbc5",
        borderRadius: 15,
        margin: 7,
    },

    middleButton03: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#ce93d8",
        borderRadius: 15,
        margin: 7,
    },

    middleButton04: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#b39ddb",
        borderRadius: 15,
        margin: 7,
    },

    middleButtonText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
    },

    // 3. 전체보기 추가
    middleButtonTextAll: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
    },

    cardContainer: {
        // 영역 확인하기 위해
        // borderWidth: 1,
        marginTop: 10,
        marginLeft: 10,
    },

    // 3. card 컨테이너로 보냄
    // card: {
    //     flex: 1,
    //     flexDirection: "row",
    //     borderBottomWidth: 0.5,
    //     borderBottomColor: "#eee",
    //     margin: 10,
    //     paddingBottom: 10,
    // },
    // cardImage: {
    //     flex: 1,
    //     width: 100,
    //     height: 100,
    //     borderRadius: 10,
    // },
    // cardText: {
    //     flex: 2,
    //     flexDirection: "column",
    //     marginLeft: 10,
    // },
    // cardTitle: {
    //     fontSize: 20,
    //     fontWeight: "700",
    // },
    // cardDesc: {
    //     fontSize: 15,
    // },
    // cardDate: {
    //     fontSize: 10,
    //     color: "#A6A6A6",
    // },
});
