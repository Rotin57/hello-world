<template>
  <div class="container-fluid p-0">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm py-3">
      <div class="container">
        <!-- Logo Section -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="../Lab3/img/logo-energy-pilates.png" alt="Logo" class="logo-img">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <!-- Centered Links Section -->
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/ASM/Trangchu"><i class="fas fa-newspaper"></i> Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ASM/ChiTiet"><i class="fas fa-video"></i> Video</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-info-circle"></i> Giới thiệu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-phone"></i> Liên hệ</a>
            </li>
          </ul>

          <!-- Right-aligned Account & Language Section -->
          <ul class="navbar-nav ms-auto">
            <!-- Account Dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i class="fas fa-user"></i> Tài khoản
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                <li><a class="dropdown-item" href="/ASM/Dangnhap">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="/ASM/Dangnhap">Đăng ký</a></li>
              </ul>
            </li>

            <!-- Language Switcher -->
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Việt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Anh</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <section class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <a href="/ASM/ChiTiet">
              <div class="card mb-3">
                <img src="../Lab3/img/video1.jpg" class="card-img-top" alt="Video 1">
                <div class="card-body">
                  <p class="card-text">Đi xa hơn để trưởng thành hơn</p>
                </div>
              </div>
            </a>
            </div>
            <div class="col-md-4">
              <a href="/ASM/ChiTiet">
              <div class="card mb-3">
                <img src="../Lab3/img/video2.jpg" class="card-img-top" alt="Video 2">
                <div class="card-body">
                  <p class="card-text">Chắt tạm lẹ những ngày cuối năm</p>
                </div>
              </div></a>
            </div>
            <div class="col-md-4">
              <a href="/ASM/ChiTiet">
              <div class="card mb-3">
                <img src="../Lab3/img/video3.jpg" class="card-img-top" alt="Video 3">
                <div class="card-body">
                  <p class="card-text">Ước gì ta được trở về tuổi thơ</p>
                </div>
              </div>
              </a>
            </div>
      </div>
    </section>
    
   
    <footer class="text-center py-4">
      <p>©Copyright by FPT Polytechnic</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TrangChu",
};
</script>

<style scoped>
/* Navbar Background and Styling */
.navbar {
  background: linear-gradient(90deg, #ec3f10, #f2fc31);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.logo-img {
  max-width: 120px;
  margin-right: 15px;
}

.navbar-nav .nav-item {
  padding: 0 15px;
}

.nav-link {
  color: #f8f9fa;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link.active,
.nav-link:hover {
  color: #28a745;
  font-weight: bold;
}

.nav-link i {
  margin-right: 5px;
}

.nav-item.dropdown .nav-link {
  color: #f8f9fa;
}

/* Account Dropdown */
.dropdown-menu {
  min-width: 150px;
}

.dropdown-menu .dropdown-item {
  color: #333;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #f8f9fa;
  color: #28a745;
}

/* Language Links */
.navbar-nav.ms-auto .nav-link {
  font-size: 0.9rem;
  padding-left: 15px;
}

.navbar-nav.ms-auto .nav-link:hover {
  color: #d4af37;
}
footer {
  background-color: #333;
  color: #fff;
  margin-top: 2rem;
}

.footer .container p {
  margin-bottom: 0;
}

.footer {
  text-align: center;
  font-size: 14px;
}
</style>
