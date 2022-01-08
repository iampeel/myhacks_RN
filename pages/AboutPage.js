import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
const subImage =
    "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4";

export default function App() {
    return (
        <View style={styles.containerMain}>
            <Text style={styles.textMain}>
                HI! 스파르타코딩 앱 개발 반에 오신것을 환영합니다
            </Text>
            <View style={styles.containerSub}>
                <Image
                    style={styles.imageSub}
                    source={{ uri: subImage }}
                ></Image>
                <Text style={styles.textSub01}>
                    많은 내용을 간결하게 담아내려 노력했습니다!
                </Text>
                <Text style={styles.textSub02}>
                    꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다
                </Text>
                <TouchableOpacity style={styles.textSubBox}>
                    <Text style={styles.textButton}>여러분의 인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: "#1F266A",
        // 중간 배치
        alignItems: "center",
    },

    textMain: {
        fontSize: 30,
        fontWeight: "700",
        color: "#fff",
        paddingLeft: 30,
        paddingTop: 100,
        paddingRight: 30,
    },

    containerSub: {
        width: 300,
        height: 500,
        backgroundColor: "#fff",
        marginTop: 50,
        borderRadius: 30,
        // 중앙 배열
        justifyContent: "center",
        alignItems: "center",
    },

    imageSub: {
        width: 150,
        height: 150,
        borderRadius: 30,
    },

    textSub01: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        paddingLeft: 22,
        paddingRight: 22,
    },

    textSub02: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "700",
        padding: 22,
    },

    textSubBox: {
        backgroundColor: "orange",
        padding: 20,
        borderRadius: 15,
    },

    textButton: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
    },
});
