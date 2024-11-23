<template>
    <div class="container mt-5">
      <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
      <div class="row">
        <!-- Loop through the items array -->
        <div 
          class="col-sm-4 mb-4" 
          v-for="(item, index) in items" 
          :key="index"
        >
          <div class="card">
            <img 
              :src="item.image" 
              class="img-fluid" 
              alt="Hình ảnh" 
            />
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.content }}</p>
              <button class="btn btn-info">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Reactive array of items
  const items = [
    {
      image: "https://via.placeholder.com/300x200", // Placeholder image URL
      title: "8 loại rau củ quả giàu canxi",
      content: "Canxi là khoáng chất cần thiết đối với cơ thể người...",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Các loại gia vị tốt cho sức khỏe",
      content: "Một số loại gia vị cung cấp nhiều polyphenol...",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "9 loại đậu bổ dưỡng nên dùng nhiều",
      content: "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ...",
    },
  ];
  </script>
  
  <style>
  /* Add any custom styling here if needed */
  </style>
  