import React from "react";
import main from "./assets/main.png";
import pizza from "./assets/pizza.png";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export default function App() {
    return (
        // 전체를 스크롤뷰로 감쌀 예정이라
        <ScrollView style={styles.container}>
            <Text style={styles.title}>나만의 꿀팁</Text>
            <Image style={styles.mainImage} source={main}></Image>
            {/* 여긴 버튼이라 좌우로 스크롤 */}
            <ScrollView style={styles.middleContainer} horizontal={true}>
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
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={pizza}></Image>
                    <Text style={styles.cardText}>
                        <Text style={styles.cardTitle}>
                            먹다 남은 피자를 촉촉하게!
                        </Text>
                        {/* 말줄임표 */}
                        <Text style={styles.cardDesc} numberOfLines={3}>
                            먹다 남은 피자는 수분이 날라가기 때문에 처음처럼
                            맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아
                            전자레인지 안에서 1분 30초에서 2분 정도 함께
                            돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지
                            안에서 수증기를 일으키고, 피자에 촉촉함을
                            더해줍니다.
                        </Text>
                        <Text style={styles.cardDate}>2020.09.09</Text>
                    </Text>
                </View>
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
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 10,
    },

    card: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "#eee",
        margin: 10,
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
