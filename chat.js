// HTML에서 로그인 버튼을 클릭하면 실행되는 함수
function login() {
  // 사용자가 입력한 이메일과 비밀번호를 가져옴
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // 이메일과 비밀번호가 모두 입력되었는지 확인
  if (email === "" || password === "") {
    alert("이메일과 비밀번호를 모두 입력해주세요.");
    return;
  }

  // 서버로 이메일과 비밀번호를 전송하여 로그인 처리
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    // 로그인이 성공적으로 처리되면 메인 페이지로 이동
    if (data.success) {
      window.location.href = "/main";
    } else {
      // 로그인이 실패한 경우 에러 메시지 출력
      alert(data.message);
    }
  })
  .catch(error => {
    console.error(error);
    alert("로그인 중 오류가 발생했습니다.");
  });
}