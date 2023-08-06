import { useEffect, useState } from "react"; //리액트패키지에서 useEffect, useState 함수를 불러옴

export default function InfoList() {
  const [info, setInfos] = useState([]);  //useState로 state 관리(배열의 첫번째 값은 현재상태, 두번째 값은 state를 변경해주는 함수)

  useEffect(() => {     // useEffect 첫번째 매개변수는 함수, 두번째 매개변수는 배열
    fetch("http://localhost:3001/info") //API 호출-> fetch('API경로')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setInfos(data);
      });
  }, []);

  return (

    <div class="container">
        {info.map(info => (  
            <div class="info2"><b>{info.info}</b></div>     
        ))}
    </div>

  );
}