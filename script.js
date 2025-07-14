function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (!username || !password) {
    alert("יש למלא שם משתמש וסיסמה");
    return;
  }
  localStorage.setItem("fyloUser", username);
  window.location.href = "templates.html";
}