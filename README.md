# TIL
## 동적인 url 제어
- 동적인 Url을 제어할때는 경로에 콜론을 붙이면 된다
```
<Route path="/day/:day”
```
## useParams
- url에 들어있는 숫자값을 얻을때는 usePrams를 사용한다
## 라우터 v5 => v6 변동사항
## switch → routes

## useHistory → useNavigate

- useNavigate 는 객체가 아니라 함수이기 때문에 그냥 할당해서 변수로 적으면 된다(abc.push 이렇게 안해도됨)
- history.goBack() → navigate(-1) 숫자를 넣으면 된다 : +는 앞으로 가기 -1은 뒤로가기

## useRouteMatch 삭제 → 대신에 상대경로를 사용하면 됨

- link to = {match.url} → link to = “”
- Link to = {`${match.url}/about`} → link to = “about”
- Route path={match.path} → Route path={””}
- Route path={`${match.url}/about`} → Route path=”about”

## Route에 children 이나 component 대신 element사용

```jsx
<Route>
	<Header />
</Route>
```

을

```jsx
<Route element={<Home />} />
```

으로 수정

## exact props 사라짐!!

> 서브 경로가 필요한 경우 path에 * 사용
> 
- exact의 속성을 기본적으로 가지고 있다!!! (지워도 무방하다)
- exact 가 필요하지 않을때 뒤에 path의 경로 뒤에 /* 를 붙이면 된다

## optional url 파라미터 사라짐!!!!

> 필요하면 route 2개를 만들자
> 

```jsx
<Route path="./optional/:value?" element={<Optional />} />
```

을

```jsx
<Route path="./optional/:value" element={<Optional />} />
<Route path="./optional" element={<Optional />} />
```

이렇게 경로를 두개 만들어 주면 된다

---

# 번외1 : 서브라우트 구현

## Outlet

1. 서브라우트가 구현된 파일의 코드를 지운다
2. App.js로 가서 붙여넣는다(만약 셀프클로징이 되어있다면 닫힘 태그를 적고 그 사이에 적는다)
3. 원래 서브라우트가 구현되어있던 파일에(코드를 지웠던 곳) <Outlet />을 적는다

# 번외2 : NavLink

## NavLink에 activeStyle, activeClassName 사라짐

> NavLink란 현재 페이지가 활성화 되어있으면 링크에 또 다른 스타일을 적용하는것
> 

isActive 라는 스타일이나 className을 넣어서 조건부 랜더링을 사용한다
