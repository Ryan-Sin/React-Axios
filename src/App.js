import React from 'react';
import axios from 'axios';

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}

const App = () => {

  //클라이언트 POST API 요청(데이터 생성)
  const onPost = () => {
    axios.post('http://localhost:3000/api/users/add', {
      id: 4,
      name: '개발이 취미인 사람',
    })
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });

  }

  //클라이언트 GET API 요청(서버에 전달 데이터 없이 데이터 조회 "전체 데이터 조회")
  const onGet = () => {
    axios.get('http://localhost:3000/api/users')
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    })
    //성공이던 실패던 항상 실행
    .then(function () {
      // always executed
    });
  }

  //클라이언트 GET API Param(Path)요청(서버에 특정 데이터 전송 "특정 데이터 조회")
  const onGetParams = () => {
    axios.get(`http://localhost:3000/api/users/${1}`)
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    })
    //성공이던 실패던 항상 실행
    .then(function () {
      // always executed
    });
  }

  //클라이언트 GET API Query String요청(서버에 특정 데이터 전송 "특정 데이터 조회")
  const onGetQuery = () => {
    axios.get(`http://localhost:3000/api/users/user?user_id=${1}`)
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    })
    //성공이던 실패던 항상 실행
    .then(function () {
      // always executed
    });
  }

  //클라이언트 GET API Params 항목 사용 요청(서버에 특정 데이터 전송 "특정 데이터 조회")
  const onGetQuery2 = () => {
    axios.get(`http://localhost:3000/api/users/user`,
    {
      params: {
        user_id: 1
      }
    })
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    })
    //성공이던 실패던 항상 실행
    .then(function () {
      // always executed
    });
  }

  //클라이언트 PUT & PATCH API 요청(데이터 전체 수정 및 단일 수정)

  //전체 데이터 수정
  const onPut = () => {
    axios.put('http://localhost:3000/api/users/update', {
      id: 1,
      name: '개발이 취미인 사람',
    })
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  }

  //특정 데이터 수정
  const onPatch = () => {
    axios.patch(`http://localhost:3000/api/user/update/${1}`, {
      name: '개발이 취미인 사람'
    })
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  }

  //클라이언트 DELETE API 요청(데이터 삭제)
  const onDelete = () =>{
    axios.delete('http://localhost:3000/api/user/delete',{
      params: {
        user_id: 1
      }
    })
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div style={style.container}> 
      <div>Axios를 활용한 API 통신</div>

     <div>
       POST 요청 : <button onClick={onPost}>Post 요청 버튼</button>
     </div>
     <div>
       GET 요청 : <button onClick={onGet}>Get 요청 버튼</button>
     </div> 
     <div>
       GET Params(Path) 요청 : <button onClick={onGetParams}>GET Params(Path) 요청 버튼</button>
     </div> 
     <div>
       GET Query 요청 : <button onClick={onGetQuery}>GET Query 요청 버튼</button>
     </div> 
     <div>
       GET Query 요청2 : <button onClick={onGetQuery2}>GET Query 요청2 버튼</button>
     </div> 
     <div>
       PUT 요청 : <button onClick={onPut}>Put 요청 버튼</button>
     </div> 
     <div>
       PATCH 요청 : <button onClick={onPatch}>Put 요청 버튼</button>
     </div>
     <div>
       Delete 요청 : <button onClick={onDelete}>Delete 요청 버튼</button>
     </div> 
    </div>
  );
};

export default App;