import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirectiopn: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
}


// Comment라는 이름의 리액트 함수 Component 생성
// Comment Component는 댓글에 대한 Component
/* 
function Comment(props) {
    return (
        <div>
            <h1>제가 만든 첫 컴포넌트입니다.</h1>
        </div>
    );
}
*/


// Comment Component 코드 변경하여 CSS 입히기
// 사람 부분에 프로필 이미지를 보여주고, 댓글을 작성한 사람의 이름과 댓글 내용을 함께 보여주도록 변경한 코드
/* 
function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>SJ</span>
                <span style={styles.commentText}>
                    제가 만든 첫 컴포넌트입니다
                </span>
            </div>
        </div>
    );
}
 */



// Comment Component에 Props 추가하도록 기존 함수 Component 변경하기
// props.name과 props.comment가 정의되어 있지 않기에 undefined 이므로 아무것도 나오지 않음
function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}



export default Comment;