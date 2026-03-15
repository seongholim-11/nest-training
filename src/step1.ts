/**
 * [실습 과제: TypeScript 기본기]
 * 
 * 1. User 인터페이스 정의 (id, username, email, isActive, createdAt)
 * 2. users 배열 (모킹 데이터) 생성
 * 3. getActiveUsernames 함수 작성
 * 4. 결과 출력
 */

// 1. User 인터페이스를 정의하세요.
export interface User {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
}

// 2. 가짜(Mock) 사용자 데이터를 생성하세요.
const users: User[] = [
    {
        id: 1,
        username: 'alice',
        email: '',
        isActive: true,
        createdAt: new Date('2023-01-15'),
    },
    {
        id: 2,
        username: 'bob',
        email: '',
        isActive: false,
        createdAt: new Date('2023-02-20'),
    },
    {
        id: 3,
        username: 'charlie',
        email: '',
        isActive: true,
        createdAt: new Date('2023-03-10'),
    },
];

// 3. getActiveUsernames 함수를 구현하세요.
function getActiveUsernames(users: User[]): string[] {
    return users.filter(v => v.isActive).map(v => v.username)
}


// 4. 실행 결과를 확인하세요.
console.log(getActiveUsernames(users));
