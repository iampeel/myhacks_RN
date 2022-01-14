// 1: 초기 세팅
// 2: DB내용 보여주기
// 3: 데이터가 없을 때 에러 처리
// 4: 찜 해제 버튼을 눌렀을 때 화면 reload 기능 구현

// 1.
import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import LikeCard from "../components/LikeCard";

// 2.
import Constants from "expo-constants";

// 2. firebase 연결
import { firebase_db } from "../firebaseConfig";

// 3.
import Loading from "../components/Loading";

// 1.
export default function LikePage({ navigation, route }) {
    // 2. 안에 내용 삭제
    const [tip, setTip] = useState([
        // {
        //     idx: 3,
        //     category: "재테크",
        //     title: "잠자는 내 돈을 찾아라",
        //     image: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmoney1.png?alt=media&token=491096e7-0b57-40a3-991b-b984193f8018",
        //     desc: "‘새는 돈’에는 미처 몰랐던 카드 포인트, 휴면예금이나 환급금도 포함됩니다. 확실히 파악하지 못한 잠자는 돈을 찾아보고 자투리 돈들을 모으는 것도 중요합니다. 케이블방송, 위성방송 서비스를 이용하면서 중복 납부한 요금, 셋톱박스 보증금 등 돌려받지 않은 돈이 있는지 확인 해보세요. 또, 카드 포인트 통합 조회 서비스를 이용해 여러 개의 카드 포인트가 모두 얼마인지 체크해두는 것이 좋습니다. 보험해약 환급금, 휴면 보험금이나 휴면 예금을 찾아보고 돌려받는 일도 요즘에는 어렵지 않습니다.",
        //     date: "2020.09.09",
        // },
        // {
        //     idx: 4,
        //     category: "재테크",
        //     title: "할인행사, 한정할인판매 문구의 함정 탈출!",
        //     image: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmoney2.png?alt=media&token=9c9df304-16e8-4a6f-8ae4-1d3f9ad58134",
        //     desc: "‘안 사면 100% 할인’이라는 말 들어보셨나요? 견물생심, 좋은 물건을 보면 사고 싶기 마련입니다. 특히 대대적인 ‘할인 행사’ 중인 대형 마트에 갔을 때는 말할 것도 없겠죠. 따라서 생필품을 살 때, 한꺼번에 사서 사용하는 것보다 필요할 때 조금씩 구매하는 편이 좋습니다. 장을 보면서 대형마트에 자주 가다 보면 지금 필요한 것뿐 아니라 앞으로 필요할 것까지 사게 되어 지출이 커지기 때문입니다. 특히 할인 품목을 보면 뜻하지 않은 소비를 하는 경우도 많아진다. 홈쇼핑, 대형마트 등의 ‘할인행사’, ‘한정할인판매’ 등의 문구를 조심하세요. ",
        //     date: "2020.09.09",
        // },
    ]);

    // 3.
    const [ready, setReady] = useState(true);

    // 2.
    useEffect(() => {
        navigation.setOptions({
            title: "꿀팁 찜",
        });

        // 2.
        const user_id = Constants.installationId;
        firebase_db
            .ref("/like/" + user_id)
            .once("value")
            .then((snapshot) => {
                let tip = snapshot.val();
                // 2. 객체의 key값만 추출 후 배열로 처리
                let tip_list = Object.values(tip);

                // 3. 변경
                // setTip(tip);
                if (tip_list.length > 0) {
                    setTip(tip_list);
                    setReady(false);
                }
            });
    }, []);

    // 4.
    const reload = () => {
        const user_id = Constants.installationId;
        firebase_db
            .ref("/like/" + user_id)
            .once("value")
            .then((snapshot) => {
                //snapshot에 값이 있는지 없는지 체크하는 exists 함수 사용
                if (snapshot.exists()) {
                    let tip = snapshot.val();
                    let tip_list = Object.values(tip);
                    setTip(tip_list);
                } else {
                    setReady(true);
                    setTip([]);
                }
            });
    };

    // 3. loading 삼항연산자로 교체
    // 1.
    // return (
    //     <ScrollView style={styles.container}>
    //         {tip.map((content, i) => {
    //             return (
    //                 <LikeCard
    //                     key={i}
    //                     content={content}
    //                     navigation={navigation}
    //                 />
    //             );
    //         })}
    //     </ScrollView>
    // );
    return ready ? (
        <Loading />
    ) : (
        <ScrollView style={styles.container}>
            {tip.map((content, i) => {
                return (
                    <LikeCard
                        key={i}
                        content={content}
                        navigation={navigation}
                    />
                );
            })}
        </ScrollView>
    );
}

// 1.
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
});
