# TIL
## useRef
- 돔에 직접 접근할 때 사용한다.
```
const engRef = useRef(null);
```
변수에 담고
```
<input type="text" placeholder="computer" ref={engRef} />
```
직접 전달하면 된다 폼을 컨트롤 할때 많이 사용한다
## input의 정보를 가져오는 방법
```
engRef.current.value
```
current는 해당 요소에 접근하고 value 는 벨류값을 얻어온다
## useNavigate
리액트 라우터 돔 내장 기능으로 link to 처럼 라우터 사이를 움직일때 매우 유용하다
```
const history = useNavigate();
```
변수에 담고
```
if (res.ok) {
  alert("생성이 완료되었습니다.");
  history(`/`);
}
```
응답이 성공하면 어느 페이지로 이동하게끔 사용하기


