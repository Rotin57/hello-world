<template>
  <div class="container mt-5">
    <h2 class="text-info text-center mb-5">ĐĂNG NHẬP / ĐĂNG KÝ</h2>
    
    <!-- Tabs for Login and Register -->
    <ul class="nav nav-tabs justify-content-center mb-4">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: isLogin }"
          @click.prevent="isLogin = true"
        >
          Đăng Nhập
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: !isLogin }"
          @click.prevent="isLogin = false"
        >
          Đăng Ký
        </a>
      </li>
    </ul>

    <!-- Tab Content for Forms -->
    <div class="tab-content mt-3">
      <!-- Login Form -->
      <div v-if="isLogin" class="card p-4">
        <h5 class="card-title">Form Đăng Nhập</h5>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="loginEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="loginEmail" v-model="loginEmail" required />
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Mật Khẩu</label>
            <input type="password" class="form-control" id="loginPassword" v-model="loginPassword" required />
          </div>
          <button type="submit" class="btn btn-primary">Đăng Nhập</button>
          <div v-if="loginMessage" class="alert alert-success mt-3">
            {{ loginMessage }}
          </div>
        </form>
      </div>

      <!-- Registration Form -->
      <div v-else class="card p-4">
        <h5 class="card-title">Form Đăng Ký Thông Tin</h5>
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label for="name" class="form-label">Họ và Tên</label>
            <input type="text" class="form-control" id="name" v-model="name" required />
          </div>
          <div class="mb-3">
            <label for="registerEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="registerEmail" v-model="registerEmail" required />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Số Điện Thoại</label>
            <input type="tel" class="form-control" id="phone" v-model="phone" required />
          </div>
          <div class="mb-3">
            <label for="registerPassword" class="form-label">Mật Khẩu</label>
            <input type="password" class="form-control" id="registerPassword" v-model="registerPassword" required />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Xác Nhận Mật Khẩu</label>
            <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Giới Tính:</label>
            <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="male" value="Nam" v-model="gender" />
                <label class="form-check-label" for="male">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="female" value="Nữ" v-model="gender" />
                <label class="form-check-label" for="female">Nữ</label>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="language" class="form-label">Ngôn Ngữ</label>
            <select class="form-select" id="language" v-model="language">
              <option>Tiếng Việt</option>
              <option>English</option>
              <option>日本語</option>
            </select>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="terms" v-model="agreedToTerms" />
            <label class="form-check-label" for="terms">Tôi đồng ý với các điều khoản và điều kiện</label>
          </div>
          <button type="submit" class="btn btn-success">Đăng Ký</button>
          <div v-if="registerMessage" class="alert alert-success mt-3">
            {{ registerMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DangNhapComponent",

  data() {
    return {
      isLogin: true,
      // Login form data
      loginEmail: '',
      loginPassword: '',
      loginMessage: '',
      // Registration form data
      name: '',
      registerEmail: '',
      phone: '',
      registerPassword: '',
      confirmPassword: '',
      gender: '',
      language: 'Tiếng Việt',
      agreedToTerms: false,
      registerMessage: ''
    };
  },
  methods: {
    handleLogin() {
      if (this.loginEmail === 'test@example.com' && this.loginPassword === '123456') {
        this.loginMessage = 'Đăng nhập thành công!';
      } else {
        this.loginMessage = 'Thông tin đăng nhập không đúng!';
      }
    },
    handleRegister() {
      if (this.registerPassword !== this.confirmPassword) {
        this.registerMessage = 'Mật khẩu xác nhận không khớp!';
      } else if (!this.agreedToTerms) {
        this.registerMessage = 'Bạn cần đồng ý với các điều khoản!';
      } else {
        this.registerMessage = 'Đăng ký thành công!';
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin-top: 50px;
}
.card-title {
  font-weight: bold;
  color: #007bff;
}
.nav-tabs .nav-link.active {
  background-color: #007bff;
  color: white;
}
</style>
