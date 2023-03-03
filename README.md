# TIL
## UPDATE
```
fetch(`http://localhost:3001/words${word.id}`, {
			// 메소드는 풋
      method: "PUT",
			// 헤더에는 컨텐트 타입 : 우리는 json으로 보낼거라서 이렇게
      headers: {
        "Content-Type": "application/json",
      },
			// 바디에는 기존 word배열에 isDone을 반대로 설정, 그걸 json 언어로 보냄
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
			// 응답을 받아서 ok면 상태를 변경해줘라
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
```
## props를 새로운 변수명으로 할당하는 방법
```
export default function Word({ word: w }) {
```
## 리액트에서 새로고침 방지
```
function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmit}>
```
