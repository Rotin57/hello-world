<template>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./img/hinh-nen-sieu-xe-1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./img/hinh-nen-sieu-xe-33.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./img/hinh-nen-sieu-xe-44.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      
      <!-- Carousel Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  
      <!-- Pagination -->
      <ul class="pagination justify-content-center mt-3">
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>

      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab3Bai1",
  };
  </script>
  
  <style scoped>
  /* Optional: Center pagination and carousel controls */
  .pagination {
    margin-top: 1rem;
  }
  </style>
  