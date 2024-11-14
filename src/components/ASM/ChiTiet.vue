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
              <a class="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown">
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

    <!-- Video Section -->
    <section class="container my-5">
      <div class="row mt-5">
        <div class="col-12">
          <h2 class="text-info mb-3 text-center">VIDEO</h2>
          <div class="video-player mb-4 shadow-lg rounded">
            <iframe
              width="100%"
              height="500px"
              :src="videoSrc"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-info mb-4">
            <h2 class="text-info fw-bold">{{ videoTitle }}</h2>
            <p class="text-muted">{{ videoViews }} lượt xem • {{ videoPosted }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comment Section -->
    <section class="container my-5">
      <div class="row">
        <div class="col-12">
          <h3 class="text-info mb-3">Bình luận</h3>

          <!-- Comment Input -->
          <div class="mb-3">
            <textarea v-model="newComment" class="form-control" rows="3" placeholder="Thêm bình luận..."></textarea>
            <button @click="addComment" class="btn btn-info mt-2">Gửi</button>
          </div>

          <!-- Comments List -->
          <div v-if="comments.length">
            <ul class="list-unstyled">
              <li v-for="(comment, index) in comments" :key="index" class="mb-4">
                <div class="d-flex align-items-center mb-2">
                  <div class="avatar me-3">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="img-fluid rounded-circle">
                  </div>
                  <div>
                    <p class="mb-0"><strong>{{ comment.user }}</strong></p>
                    <p class="text-muted mb-1">{{ comment.timestamp }}</p>
                  </div>
                </div>
                <p>{{ comment.text }}</p>
              </li>
            </ul>
          </div>
          <p v-else class="text-muted">Chưa có bình luận nào.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-4">
      <p>© Copyright by FPT Polytechnic</p>
    </footer>
  </div>
</template>

<script>
export default {
 
  name: "ChiTiet",
  props: {
    videoId: {
      type: String,
      default: "exampleVideoID", // Thay bằng ID video mặc định nếu cần
    },
  },
  data() {
    return {
      videoSrc: `https://www.youtube.com/embed/${this.videoId}`, // URL nhúng chuẩn
      videoTitle: "Tiêu đề video",
      videoViews: "1,000",
      videoPosted: "1 ngày trước",
      newComment: "",
      comments: [
        { user: "Nguyễn Văn A", text: "Video rất hay!", timestamp: "1 giờ trước" },
        { user: "Trần Thị B", text: "Cảm ơn chia sẻ!", timestamp: "3 giờ trước" },
      ],
    };
  },
};

</script>

<style scoped>
/* General Styling */
.header-image img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Related Articles */
.related-articles img {
  width: 100%;
  max-width: 60px;
}

.related-articles p {
  margin-left: 10px;
}

.btn-info {
  background-color: #17a2b8;
  border: none;
}

.card-body p {
  color: #6c757d;
}

.text-info {
  color: #17a2b8 !important;
}

/* Footer Styling */
footer {
  background-color: #333;
  color: #fff;
  margin-top: 2rem;
  padding: 10px 0;
}

.footer .container p {
  margin-bottom: 0;
}

.footer {
  text-align: center;
  font-size: 14px;
}

/* Navbar Styling */
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

/* Comment Section Styling */
textarea {
  resize: none;
}

.comment {
  margin-bottom: 20px;
}

.comment .user {
  font-weight: bold;
}

.comment .timestamp {
  font-size: 0.9rem;
  color: #6c757d;
}

.comment .text {
  margin-top: 5px;
}
</style>
