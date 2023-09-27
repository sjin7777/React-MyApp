import { useState, useEffect } from "react";

function UserStatus(props) {
    const [isOnline, setIsOnline ] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    // useEffect에서 서버 API를 사용하여 사용자의 상태를 구독하고 있음
    useEffect(() => {
        // ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        
        // 구독을 해지 API를 호출하는 함수 리턴
        // 즉, 컴포넌트가 UNMOUNT될 때 호출 됨
        return () => {
            // ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if(isOnline === null) {
        return '대기 중....';
    }

    return isOnline ? '온라인' : '오프라인';

}

export default UserStatus;