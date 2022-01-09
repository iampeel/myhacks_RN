// 5: 네비게이터
// 6: 공유하기
// 7. 외부 링크

// 5.
// import React from "react";
import React, { useState, useEffect } from "react";
// 6. Share 추가
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
    Share,
} from "react-native";
// 7.
import * as Linking from "expo-linking";

// 5.
// export default function DetailPage() {
export default function DetailPage({ navigation, route }) {
    // 5. 초기 컴포넌트의 상태값을 설정
    // const tip = {
    const [tip, setTip] = useState({
        // 안에 내용은 데이터가 없을 때 에러가 발생하니깐
        // 아무 의미 없는 값을 넣어놓은 것임
        // 이게 싫으면 로딩화면 구현
        idx: 9,
        category: "재테크",
        title: "렌탈 서비스 금액 비교해보기",
        image: "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        desc: "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        date: "2020.09.09",
    });

    // 5. 내용이 바뀌면 화면도 바뀌게
    useEffect(() => {
        // 뭘받는지 알아보려고
        // console.log(route);

        //Card.js에서 navigation.navigate 함수를 쓸때 두번째 인자로 content를 넘겨줬죠?
        //content는 딕셔너리 그 자체였으므로 route.params에 고대~로 남겨옵니다.
        //즉, route.params 는 content죠!

        navigation.setOptions({
            //setOptions로 페이지 타이틀도 지정 가능하고
            title: route.params.title,
            //StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있습니다.
            headerStyle: {
                backgroundColor: "#000",
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        });
        setTip(route.params);
    }, []);

    const popup = () => {
        Alert.alert("팝업!!");
    };

    // 6.
    const share = () => {
        Share.share({
            message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    };

    // 7.
    const link = () => {
        Linking.openURL("https://spartacodingclub.kr");
    };

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: tip.image }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                {/* 6. 공유하기 버튼 추가, 그러면서 버튼을 하나로 묶음 */}
                {/* 
                <TouchableOpacity style={styles.button} onPress={() => popup()}>
                    <Text style={styles.buttonText}>팁 찜하기</Text>
                </TouchableOpacity> */}
                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => popup()}
                    >
                        <Text style={styles.buttonText}>팁 찜하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => share()}
                    >
                        <Text style={styles.buttonText}>팁 공유하기</Text>
                    </TouchableOpacity>
                    {/*7.  */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => link()}
                    >
                        <Text style={styles.buttonText}>외부 링크</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    },
    image: {
        height: 400,
        margin: 10,
        marginTop: 40,
        borderRadius: 20,
    },
    textContainer: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#eee",
    },
    desc: {
        marginTop: 10,
        color: "#eee",
    },
    // 6. 공유하기 하면서 버튼 그룹 추가
    buttonGroup: {
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "deeppink",
        borderRadius: 7,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
});
