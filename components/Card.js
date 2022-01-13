// 1: 초기 세팅
// 2: 카드 터치하면 상세 페이지로 이동
// 3: 터치하면 content 몽땅 보냈는데, idx만 보내줌
// 이유는 DB도 실시간으로 변경될 수 있고
// 큰 데이터를 이동하는 것은 앱 퍼포먼스 저하

// 1.
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// 2. 인자로 navigation 추가
// export default function Card({content}) {
// 1. 비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({ content, navigation }) {
    return (
        // 2. TouchableOpacity로 바꿈, onPress부분 추가
        // <View style={styles.card}>
        <TouchableOpacity
            style={styles.card}
            // 2. 터치하면 StackNavigator에
            // DetailPage라는 name에 정의되어 있는 페이지로 이동
            // 내용도 보냄
            onPress={() => {
                // 3.
                // navigation.navigate("DetailPage", content);
                navigation.navigate("DetailPage", { idx: content.idx });
            }}
        >
            {/* 1. */}
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
                    이런식으로 데이터 이어짐 */}
            <Image style={styles.cardImage} source={{ uri: content.image }} />
            <View style={styles.cardText}>
                <Text
                    style={styles.cardTitle}
                    // 1. 몇 줄을 보여줄것인가
                    // {1} 1줄 보여주고 넘어가면 말줄임표 처리
                    numberOfLines={1}
                >
                    {content.title}
                </Text>
                <Text style={styles.cardDesc} numberOfLines={3}>
                    {content.desc}
                </Text>
                <Text style={styles.cardDate}>{content.date}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        // 1. 컨텐츠들을 가로로 나열
        // 세로로 나열은 column <- 디폴트 값임
        flexDirection: "row",
        margin: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#eee",
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
