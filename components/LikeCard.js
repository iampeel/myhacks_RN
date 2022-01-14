// 1: 초기 세팅
// 2: 자세히 보기 버튼 구현
// 3: 찜 해제 버튼 구현
// 4: 찜 해제 기능 구현

// 1.
import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    // 4.
    Alert,
} from "react-native";

// 4.
import { firebase_db } from "../firebaseConfig";

// 4.
import Constants from "expo-constants";

// 4.
// 1.
export default function LikeCard({ content, navigation, reload }) {
    // 2.
    const detail = () => {
        navigation.navigate("DetailPage", { idx: content.idx });
    };

    // 4.
    // 3.
    // const remove = () => {};
    const remove = () => {
        const user_id = Constants.installationId;
        firebase_db
            .ref("/like/" + user_id + "/" + content.idx)
            .remove()
            .then(function () {
                Alert.alert("삭제 완료");
                // 4. 아래 한 줄 쓰면 된다는데
                // 안되서 reload() 추가하고 Likepage에 기능 구현
                // navigation.navigate("LikePage");
                reload();
            });
    };

    // 1.
    return (
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{ uri: content.image }} />
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                    {content.title}
                </Text>
                <Text style={styles.cardDesc} numberOfLines={3}>
                    {content.desc}
                </Text>
                <Text style={styles.cardDate}>{content.date}</Text>

                {/* 3. 그룹으로 묶음 */}
                <View style={styles.buttonGroup}>
                    {/* 2. */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => detail()}
                    >
                        <Text style={styles.buttonText}>자세히보기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => remove()}
                    >
                        <Text style={styles.buttonText}>찜 해제</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
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
    // 3.
    buttonGroup: {
        flexDirection: "row",
    },

    // 2.
    button: {
        width: 90,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "deeppink",
        borderRadius: 7,
    },
    // 2.
    buttonText: {
        color: "deeppink",
        textAlign: "center",
    },
});
