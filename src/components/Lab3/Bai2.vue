<template>
  <div>
    <!-- Header Image -->
    <div class="header-image">
      <img src="./img/hinh-nen-sieu-xe-33.jpg" class="w-100" alt="Header image">
    </div>

    <!-- Main Content Section -->
    <section class="container my-5">
      <div class="row">
        
        <!-- Về Tôi (About Me) Section -->
        <div class="col-md-4">
          <h2 class="text-info mb-3">Về Tôi</h2>
          <div class="card">
            <div class="card-body text-center">
              <img src="" alt="Avatar" class="avatar">
              <h5 class="card-title mt-3">Giới Thiệu Bản Thân</h5>
              <p class="card-text">
                SV. :> <br> 
                <strong>Châm Ngôn:</strong> Ăn cơm thì nhớ húp canh
              </p>
            </div>
          </div>
        </div>

        <!-- Blog Section -->
        <div class="col-md-8">
          <h2 class="text-info mb-3">Blog của tôi</h2>
          <div class="card mb-3">
            <img src="" class="card-img-top" alt="Blog image">
            <div class="card-body">
              <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h5>
              <p class="card-text">Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, độ dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dẻo dai hơn, kéo giãn hơn...</p>
            </div>
          </div>

          <!-- Related Articles Section -->
          <div class="related-articles">
            <div class="d-flex align-items-start mb-3">
              <img src="" alt="Article image" width="20%" class="rounded mr-3">
              <div>
                <p class="mb-1 font-weight-bold">Biết ơn đời, đời sẽ thương ta</p>
              </div>
            </div>
            <div class="d-flex align-items-start mb-3">
              <img src="" alt="Tác dụng của quả cam" width="20%" class="rounded mr-3">
              <div>
                <p class="mb-1 font-weight-bold">9 tác dụng tuyệt vời của quả cam</p>
              </div>
            </div>
            <div class="d-flex align-items-start mb-3">
              <img src="" width="20%" alt="Dầu dừa" class="rounded mr-3">
              <div>
                <p class="mb-1 font-weight-bold">10 công dụng bất ngờ từ dầu dừa</p>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <img src="" width="20%" alt="Rau mỗi ngày" class="rounded mr-3">
              <div>
                <p class="mb-1 font-weight-bold">Lợi ích khi ăn rau mỗi ngày</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Xem Thêm Button -->
        <div class="text-center mt-4 col-12">
          <button class="btn btn-info">Xem thêm</button>
        </div>

      </div>

      <!-- Additional Content Section -->
      <div class="row mt-5">
        <div class="col-12">
          <h2 class="text-info mb-3 text-center">VIDEO - ĐỪNG BỎ LỠ</h2>
          <div class="row">
            <!-- Video Cards -->
            <div class="col-md-4">
              <div class="card mb-3">
                <img src="" class="card-img-top" alt="Video 1">
                <div class="card-body">
                  <p class="card-text">Đi xa hơn để trưởng thành hơn</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3">
                <img src="" class="card-img-top" alt="Video 2">
                <div class="card-body">
                  <p class="card-text">Chắt tạm lẹ những ngày cuối năm</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-3">
                <img src="" class="card-img-top" alt="Video 3">
                <div class="card-body">
                  <p class="card-text">Ước gì ta được trở về tuổi thơ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="text-center py-4">
      <p>©Copyright by FPT Polytechnic</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Lab3Bai2",
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
  width: 50%;
  border-radius: 50%;
}

.pagination {
  margin-top: 1rem;
}

/* Footer Styling */
footer {
  background-color: #333;
  color: #fff;
  margin-top: 2rem;
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
</style>
