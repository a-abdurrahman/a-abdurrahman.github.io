import '../../../styles/login.css'

const Login = {
  async renderPage() {
    return `<div class="login-container">
    <form class="login-form">
      <h2>Login</h2>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" required>

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" required>

      <button type="submit">Login</button>
      <p class="signup">Don't have an account? <a href="#">Sign up</a></p>
      <a>Project Brief</a>
    </form>
  </div>`;
  },
  async afterRenderPage() {
    const loginContainer = document.querySelector('.login-container')
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
  },
};

export default Login;
