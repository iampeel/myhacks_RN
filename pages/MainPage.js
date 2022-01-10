// 1: 초기 화면 구성
// 2: json 데이터 불러오기
// 3: 카드 파일 분리
// 4: 버튼에 따른 카드 구성(useState, useEffect), 로딩화면 적용
// 5: 상단에 상태바 스타일링
// 6: 페이지 이동(navigation)
// 7: 소개 페이지 버튼

// 4. { useState, useEffect } 추가
// 1.
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

// 1. 버튼 위 메인 이미지 주소
const main =
    "https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png";

// 2.
import data from "../data.json";

// 3.
import Card from "../components/Card";

// 4.
// Loadong 은 앱이 데이터를 가져오는데 버퍼링이 생기는 경우
// 보여주는 화면
import Loading from "../components/Loading";

// 5. 상단 상태바 쓰기 위함
// 지워도 되지 않을까? App.js에서 처리했는데
import { StatusBar } from "expo-status-bar";

// 6. 네이게이션 인자 넣기, 넣어야 다른 페이지로 이동 가능
// export default function MainPage() {
// 1.
export default function MainPage({ navigation, route }) {
    // 1. 화면 하단에 노란색 박스가 보이면 아래 코드 삽입
    // console.disableYellowBox = true;

    // 4. 삭제
    // 2.
    // let tip = data.tip;

    // 4. state라는 변수를 []로 초기화, state값을 바꿀때는 setState를 사용
    // 상태값이 바뀔 때마다 렌더링
    const [state, setState] = useState([]);

    // 4. 데이터를 매번 DB에서 가져오기 싫어서
    // 일단 state에 전체 데이터를 넣어놓고 거기서 꺼내서 쓰겠다는 얘기
    const [cateState, setCateState] = useState([]);

    // 4. loading 화면을 보여주기위한 세팅
    // ready의 상태가 true이면 로딩페이지
    // ready의 상태가 false이면 메인페이지
    const [ready, setReady] = useState(true);

    // 4. useEffect()에 있는 내용 렌더링이 끝나면 실행됨
    // ready = true --> 로딩화면 --> setTimeout함수 실행
    // --> 2초 뒤에 상태 바꿈(ready도 false로 바꿈) --> 다시 렌더링
    // --> ready가 false니깐 메인페이지
    useEffect(() => {
        // 4. 1000은 1초, 1초 뒤에 실행하라는 함수
        setTimeout(() => {
            // 6. 네비게이션 헤더의 타이틀 변경할 수 있음
            navigation.setOptions({
                title: "나만의 꿀팁",
            });

            // 4. data에서 key값이 tip인 내용으로 초기화
            setState(data.tip);

            // 4. 이내용은 없어도 되는 거 같음
            setCateState(data.tip);

            // 4. 1초 뒤에 false로 초기화
            setReady(false);
        }, 2000);

        // 4. []를 안 쓰면 렌더링 될 때마다 이게 실행됨
        // []: 처음 1번만 실행
        // [state]: state라는 변수의 상태가 바뀔때만
    }, []);

    // 4. 밑에 버튼을 이런 식으로 구현했음
    // onPress={() => {
    //     category("생활");
    // }}
    // 그래서 버튼을 누르면 cate에 "생활"이 들어감
    const category = (cate) => {
        if (cate == "전체보기") {
            // 4. 전체보기하면 가지고 온 데이터 전체를 보여줌
            setCateState(state);
        } else {
            // 4. filetr()라는 함수는 state에 담겨있는 내용을 차례로 가져오는 기능
            // d는 인자를 받아오려고 쓴 키워드
            // 가져온 항목의 caterfory값이 "생활"인 것만 리턴시켜서
            // cateState 변수에 넣음
            setCateState(
                state.filter((d) => {
                    return d.category == cate;
                })
            );
        }
    };

    // 4. 적용하면서 삭제
    // 2. json 데이터 할당
    // let tip = data.tip;
    let todayWeather = 10 + 17;
    let todayCondition = "흐림";

    // 4. 삼항 연산자를 통해 로딩 페이지와 메인 페이지 진입
    // 1. return에서 화면 구성
    return ready ? (
        <Loading />
    ) : (
        // 1. 전체를 스크롤뷰로 감쌀 예정이라
        <ScrollView style={styles.container}>
            {/* 5. 상단 상태바 */}
            <StatusBar style="dark" />

            {/* 6. 제목 중복으로 삭제 */}
            {/* 1. 타이틀 */}
            {/* <Text style={styles.title}>나만의 꿀팁</Text> */}

            {/* 1. 오른쪽 상단 날씨 */}
            <Text style={styles.weather}>
                오늘의 날씨: {todayWeather + "°C " + todayCondition}{" "}
            </Text>

            {/* 7.  */}
            <TouchableOpacity
                style={styles.aboutButton}
                onPress={() => {
                    navigation.navigate("AboutPage");
                }}
            >
                <Text style={styles.aboutButtonText}>소개 페이지</Text>
            </TouchableOpacity>

            {/* 1. 이미지 */}
            <Image style={styles.mainImage} source={{ uri: main }} />

            {/* 1. 여긴 버튼인데 좌우로 스크롤 */}
            {/* horizontal={true}를 저렇게 써도 되네 */}
            {/* indicator ?? */}
            <ScrollView
                style={styles.middleContainer}
                horizontal
                indicatorStyle={"white"}
            >
                {/* 4. 전체보기 추가 */}
                <TouchableOpacity
                    style={styles.middleButtonAll}
                    onPress={() => {
                        category("전체보기");
                    }}
                >
                    <Text style={styles.middleButtonTextAll}>전체보기</Text>
                </TouchableOpacity>

                {/* 1. 중간 버튼 */}
                <TouchableOpacity
                    style={styles.middleButton01}
                    // 4. onPress로 바꿈, category로 인자를 던짐
                    // <Text style={styles.middleButtonText}>생활</Text>
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

            {/* 1. 하단에 카드 묶음 */}
            <View style={styles.cardContainer}>
                {/* 2. json 데이터 가져오면서 삭제
                {/* 1. 이미지 
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3",
                    }}
                />  
                {/* 1. 이미지 옆에 텍스트
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>
                        먹다 남은 피자를 촉촉하게!
                    </Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>
                        먹다 남은 피자는 수분이 날라가기 때문에 처음처럼
                        맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아
                        전자레인지 안에서 1분 30초에서 2분 정도 함께
                        돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지
                        안에서 수증기를 일으키고, 피자에 촉촉함을
                        더해줍니다.
                    </Text>
                    <Text style={styles.cardDate}>2020.05.09</Text>
                </View> */}

                {/* tip은 이렇게 생겼음
                {
                    "tip":[
                        {
                            "idx":0,
                            "category":"생활",
                            "title":"먹다 남은 피자를 촉촉하게!",
                            "image":"https://storage.googleapis.com/sparta-image.appspot.com/lecture/pizza.png",
                            "desc":"먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.",
                            "date":"2020.05.09"
                        },
                    이런식으로 데이터 이어짐 */}
                {/* 3. 카드 파일 분리하면서 카드 파일로 보냄 */}
                {/* 2. json 데이터 불러오기 
                content는 tip바로 밑에 있는 내용 하나, i는 index */}
                {/*
                tip.map((content, i) => {
                    return (
                        <View style={styles.card} key={i}>
                            <Image
                                style={styles.cardImage}
                                source={{ uri: content.image }}
                            />
                            <View style={styles.cardText}>
                                <Text
                                    style={styles.cardTitle}
                                    numberOfLines={1}
                                >
                                    {content.title}
                                </Text>
                                <Text style={styles.cardDesc} numberOfLines={3}>
                                    {content.desc}
                                </Text>
                                <Text style={styles.cardDate}>
                                    {content.date}
                                </Text>
                            </View>
                        </View>
                    );
                })} */}
                {/* 4. 적용하면서 삭제
                {tip.map((content, i) => {
                    // 3. 카드 파일 분리하면서 안에 내용은 Card 파일로 던짐
                    // 인자를 줄 때 i는 받는 쪽에서 안 쓰지만 꼭 보내야 함
                    return <Card content={content} key={i} />;
                })} */}

                {/* 4. 위 버튼에 따라 변수 category에서 cateState 내용을 바꿈
                그래서 cateState에 있는 내용 가져옴 */}
                {cateState.map((content, i) => {
                    return (
                        // 4. 인자를 줄 때 i는 받는 쪽에서 안 쓰지만 꼭 보내야 함
                        <Card
                            content={content}
                            key={i}
                            // 6. 추가
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

    // 지워도 될 거 같은데..
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginTop: 50,
        marginLeft: 20,
    },

    weather: {
        alignSelf: "flex-end",
        paddingRight: 20,
        // 7.
        // marginTop: 10,
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

    // 4. 전체보기 추가
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

    // 4. 전체보기 추가
    middleButtonTextAll: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
    },

    cardContainer: {
        // 1. 작업하면서 영역 확인하기 위해
        // borderWidth: 1,
        marginTop: 10,
        marginLeft: 10,
    },

    // 7.
    aboutButton: {
        backgroundColor: "pink",
        width: 100,
        height: 40,
        borderRadius: 10,
        alignSelf: "flex-end",
        marginRight: 20,
        marginTop: 10,
    },

    // 7.
    aboutButtonText: {
        color: "#fff",
        textAlign: "center",
        marginTop: 10,
    },

    // 4. card 컨테이너로 보냄
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
