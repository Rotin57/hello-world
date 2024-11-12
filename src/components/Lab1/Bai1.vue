<template>

    <div class="container">
      <header class="row bg-warning p-2">Header</header>
      <nav class="row bg-primary p-2">Nav</nav>
      <section class="row">
        <aside class="col-sm-4 bg-success p-5">Side bar</aside>
        <article class="col-sm-8 bg-info p-5">Main content</article>
      </section>
      <footer class="row bg-danger p-3">Footer</footer>
  
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><i class="fas fa-leaf"></i><img src="/src/assets/images/logo-energy-pilates.png" alt="" width="20%"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Giới thiệu</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Sản phẩm
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Sản phẩm 1</a></li>
                  <li><a class="dropdown-item" href="#">Sản phẩm 2</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Sản phẩm 3</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
    <section class="container my-5">
    <div class="row">
      <!-- Phần Giới thiệu -->
      <div class="col-md-4">
        <h2 class="text-info mb-3">Về Tôi</h2>
        <div class="card">
          <div class="card-body text-center">
            <img src="/src/assets/images/avatar.png" alt="" style="width: 50%; border-radius: 50%;">
            <h5 class="card-title mt-3">Giới Thiệu Bản Thân</h5>
            <p class="card-text">
              SV. :> <br> 
              <strong>Châm Ngôn:</strong> Ăn cơm thì nhớ húp canh
            </p>
          </div>
        </div>
      </div>
  
      <!-- Phần Blog và Bài Viết Liên Quan -->
      <div class="col-md-8">
        <!-- Blog của tôi -->
        <h2 class="text-info mb-3">Blog của tôi</h2>
        <div class="card mb-3">
          <img src="/src/assets/images/tap-piltes.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h5>
            <p class="card-text">Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, độ dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dẻo dai hơn, kéo giãn hơn...</p>
          </div>
        </div>
  
        <!-- Bài viết liên quan -->
        <div class="related-articles">
          <div class="d-flex align-items-start mb-3">
            <img src="/src/assets/images/corevalue.jpg" alt="" width="20%" class="rounded mr-3">
            <div>
              <p class="mb-1 font-weight-bold">Biết ơn đời, đời sẽ thương ta</p>
            </div>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/src/assets/images/orange_300x300.jpg" alt="Tác dụng của quả cam" width="20%" class="rounded mr-3">
            <div>
              <p class="mb-1 font-weight-bold">9 tác dụng tuyệt vời của quả cam</p>
            </div>
          </div>
          <div class="d-flex align-items-start mb-3">
            <img src="/src/assets/images/sesameoil_300x300.jpg" width="20%" alt="" class="rounded mr-3">
            <div>
              <p class="mb-1 font-weight-bold">10 công dụng bất ngờ từ dầu dừa</p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img src="/src/assets/images/spinach_300x300.jpg" width="20%" alt="" class="rounded mr-3">
            <div>
              <p class="mb-1 font-weight-bold">Lợi ích khi ăn rau mỗi ngày</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Nút Xem thêm -->
      <div class="text-center mt-4 col-12">
        <button class="btn btn-info">Xem thêm</button>
      </div>
    </div>
  </section>
  
      <aside class="container my-5">
        <div class="card">
          <div class="card-header">Danh mục</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Ăn chay</li>
            <li class="list-group-item">Ăn chay dinh dưỡng</li>
            <li class="list-group-item">Cuộc đời</li>
          </ul>
        </div>
      </aside>
  
      <footer class="bg-dark text-white text-center p-3">
        <p>© 2023 Trang Web của Tôi</p>
      </footer>
    </div>
  
  </template>
  
  <script >
  export default {
      name : "Lab1Bai1"
  }
  
  </script>
  
  <style>
  
  </style>
  