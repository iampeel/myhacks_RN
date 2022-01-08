import React from "react";
import mainImage from "../assets/main.png";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

// json 데이터 가져오기
import data from "../data.json";

export default function MainPage() {
    // json 데이터 할당
    let tip = data.tip;

    let todayWeather = 10 + 17;
    let todayCondition = "흐림";

    return (
        // 전체를 스크롤뷰로 감쌀 예정이라
        <ScrollView style={styles.container}>
            <Text style={styles.title}>나만의 꿀팁</Text>
            {/* 오른쪽 상단 날씨 추가 */}
            <Text style={styles.weather}>
                오늘의 날씨: {todayWeather + "°C " + todayCondition}{" "}
            </Text>
            <Image style={styles.mainImage} source={mainImage}></Image>
            {/* 여긴 버튼이라 좌우로 스크롤 */}
            {/* horizontal={true}를 저렇게 써도 되네 */}
            {/* indicator ?? */}
            <ScrollView
                style={styles.middleContainer}
                horizontal
                indicatorStyle={"white"}
            >
                <TouchableOpacity style={styles.middleButton01}>
                    <Text style={styles.middleButtonText}>생활</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middleButton02}>
                    <Text style={styles.middleButtonText}>재테크</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middleButton03}>
                    <Text style={styles.middleButtonText}>반려견</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middleButton04}>
                    <Text style={styles.middleButtonText}>꿀팁 찜</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.cardContainer}>
                {/*
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
              */}
                {/* content는 내용 하나, i는 index */}
                {tip.map((content, i) => {
                    return (
                        // js로 여러 개를 추출할때는 key값을 줘야 한다고 함
                        <View style={styles.card} key={i}>
                            <Image
                                style={styles.cardImage}
                                source={{ uri: content.image }}
                            />
                            <View style={styles.cardText}>
                                <Text
                                    style={styles.cardTitle}
                                    // 몇 줄을 보여줄것인가
                                    // 1 은 1줄 보여주고 넘어가면 말줄임표 처리
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

    cardContainer: {
        // 영역 확인하기 위해
        // borderWidth: 1,
        marginTop: 10,
        marginLeft: 10,
    },

    card: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "#eee",
        margin: 10,
        paddingBottom: 10,
    },
    cardImage: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    cardText: {
        flex: 2,
        flexDirection: "column",
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "700",
    },
    cardDesc: {
        fontSize: 15,
    },
    cardDate: {
        fontSize: 10,
        color: "#A6A6A6",
    },
});
