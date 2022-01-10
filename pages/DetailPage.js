// 1: 초기 세팅
// 2: 상세 페이지 구현
// 3: 공유하기
// 4: 링크 접속

// 2. { useState, useEffect } 추가
// 1.
// import React from "react";
import React, { useState, useEffect } from "react";

// 3. Share 추가
// 1.
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

// 4.
import * as Linking from "expo-linking";

// 2. 인자로 { navigation, route } 추가
// 1.
// export default function DetailPage() {
export default function DetailPage({ navigation, route }) {
    // 2. 초기 컴포넌트의 상태값을 설정
    // const tip = {
    const [tip, setTip] = useState({
        // 2. 안에 내용은 데이터가 없을 때 에러가 발생하니깐
        // 아무 의미 없는 값을 넣어놓은 것임
        // 이게 싫으면 로딩화면 구현
        idx: 9,
        category: "재테크",
        title: "렌탈 서비스 금액 비교해보기",
        image: "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        desc: "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        date: "2020.09.09",
    });

    // 2. 내용이 바뀌면 화면도 바뀌게
    useEffect(() => {
        // 2.route에서 뭘받는지 알아보려고
        // 저런 걸 받아오네
        /*         Object {
            "key": "DetailPage-71CR-KbzFWWQ__95C5qvn",
            "name": "DetailPage",
            "params": Object {
              "category": "재테크",
              "date": "2020.09.09",
              "desc": "‘새는 돈’에는 미처 몰랐던 카드 포인트, 휴면예금이나 환급금도 포함됩니다. 확실히 파악하지 못한 잠자는 돈을 찾아보고 자투리 돈들을 모 
          으는 것도 중요합니다. 케이블방송, 위성방송 서비스를 이용하면서 중복 납부한 요금, 셋톱박스 보증금 등 돌려받지 않은 돈이 있는지 확인 해보세요. 또, 
          카드 포인트 통합 조회 서비스를 이용해 여러 개의 카드 포인트가 모두 얼마인지 체크해두는 것이 좋습니다. 보험해약 환급금, 휴면 보험금이나 휴면 예금 
          을 찾아보고 돌려받는 일도 요즘에는 어렵지 않습니다.",
              "idx": 3,
              "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
              "title": "잠자는 내 돈을 찾아라",
            },
            "path": undefined,
          } */
        /* 참고로 console.log(navigation);는 다음 내용을 찍는다.
          Object {
            "addListener": [Function addListener],
            "canGoBack": [Function canGoBack],
            "dispatch": [Function dispatch],
            "getParent": [Function getParent],
            "getState": [Function anonymous],
            "goBack": [Function anonymous],
            "isFocused": [Function isFocused],
            "navigate": [Function anonymous],
            "pop": [Function anonymous],
            "popToTop": [Function anonymous],
            "push": [Function anonymous],
            "removeListener": [Function removeListener],
            "replace": [Function anonymous],
            "reset": [Function anonymous],
            "setOptions": [Function setOptions],
            "setParams": [Function anonymous],
          } */
        // console.log(route);

        // 2. setOptions로 페이지 스타일링
        navigation.setOptions({
            // 2. 타이틀 변경
            title: route.params.title,

            // 2. StackNavigator에서 작성했던 옵션을 다시 수정 가능
            headerStyle: {
                backgroundColor: "#000",
                shadowColor: "#000",
            },

            // 2. 타이틀 색상
            headerTintColor: "white",
        });

        // 2. 변수 tip의 내용 바꾸기
        setTip(route.params);
    }, []);

    // 1. 팁 찜하기
    const popup = () => {
        Alert.alert("팝업!!");
    };

    // 3. 공유하기
    const share = () => {
        Share.share({
            message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    };

    // 4. 링크 접속
    const link = () => {
        Linking.openURL("https://spartacodingclub.kr");
    };

    // 1.
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: tip.image }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                {/* 3. 버튼 추가하면서 버튼을 하나의 view로 묶음 */}
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

                    {/* 3. */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => share()}
                    >
                        <Text style={styles.buttonText}>팁 공유하기</Text>
                    </TouchableOpacity>

                    {/*4.  */}
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
    // 3. 공유하기 하면서 버튼 그룹 추가
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
