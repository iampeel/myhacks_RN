// 2: 카드 컴포넌트화
// 5: 네비게이션
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// 2. 비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
// 5. 인자로 navigation 추가
export default function Card({ content, navigation }) {
    return (
        // 2. js로 여러 개를 추출할때는 key값을 줘야 한다고 함
        // 컴포넌트화 하면서 key={i}는 지움
        // 5. TouchableOpacity로 바꿈, onPress부분 추가
        // <View style={styles.card}>
        <TouchableOpacity
            style={styles.card}
            onPress={() => {
                navigation.navigate("DetailPage", content);
            }}
        >
            {/* // */}
            <Image style={styles.cardImage} source={{ uri: content.image }} />
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
                <Text style={styles.cardDate}>{content.date}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        //컨텐츠들을 가로로 나열
        //세로로 나열은 column <- 디폴트 값임
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
