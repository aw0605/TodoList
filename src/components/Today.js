import React from 'react';
import styled from 'styled-components';

const Today = () => {
    // 해당 날짜 가져오기
    const date = new Date();

    // 년(yy) - 월(mm) - 일(dd)
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    // getDay을 통해 반환된 숫자를 요일로 변경
    var week = new Array(7);
    week[0] = '(일요일)';
    week[1] = '(월요일)';
    week[2] = '(화요일)';
    week[3] = '(수요일)';
    week[4] = '(목요일)';
    week[5] = '(금요일)';
    week[6] = '(토요일)';
    
    const d = week[date.getDay()];

    const today = yy + '년 ' + mm + '월 ' + dd + '일 ' + d;
    return (
        <TodayWrapper>
            <p>{today}</p>
        </TodayWrapper>
    );
};

const TodayWrapper = styled.div`
    background: #83C1DA;
    padding: 0.101rem 2rem;
    font-size: 1.1rem;
    text-align: right;
    color: #fff;
`;

export default Today;