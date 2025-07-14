const SUPABASE_URL = "https://gtoqrlmemebbhhamlvsz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0b3FybG1lbWViYmhoYW1sdn6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjQ0MDksImV4cCI6MjA2ODEwMDQwOX0.7ksgOB6sa6yzbNh1GqK7detDSxd28zisxu7EKVVS27k";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
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
