import React from "react";
import Comment from "./Comment";

// CommentList라는 이름의 리액트 함수 Component 생성
// CommentList Component는 댓글 목록에 대한 Component
/* 
function CommentList(props) {
    return (
        <div>
            <Comment />
        </div>
    );
}
*/


// props 추가
/* 
function CommentList(props) {
    return (
        <div>
            <Comment name={"SJ"} comment={"안녕하세요. SJ입니다"}/>
            <Comment name={"유재석"} comment={"리액트 재미있나여"}/>
        </div>
    );
}
 */



// Comment 데이터를 별도의 객체로 분리하기
const comments = [
    {
        name: 'SJ',
        comment: '안녕하세요 SJ입니다!',
    },
    {
        name: '유재석',
        comment: '리액트 재밌나여??',
    },
    {
        name: '장도연',
        comment: '저도 리액트 배워보고 싶어요',
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    )
}


export default CommentList;