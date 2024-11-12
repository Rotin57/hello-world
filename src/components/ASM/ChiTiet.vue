<template>
  <section class="container my-5">
    <div class="row">
      <div class="col-12">
        <h2 class="text-info mb-3 text-center">VIDEO </h2>
        <div class="row">
          <!-- Video Cards Loop -->
          <div v-for="(video, index) in videos" :key="index" class="col-md-4">
            <div class="card mb-3">
              <img :src="video.imgSrc" class="card-img-top" :alt="'Video ' + (index + 1)">
              <div class="card-body">
                <p class="card-text">{{ video.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChiTiet",
  data() {
    return {
      videos: [
        { imgSrc: "path/to/video1.jpg", title: "Đi xa hơn để trưởng thành hơn" },
        { imgSrc: "path/to/video2.jpg", title: "Chắt tạm lẹ những ngày cuối năm" },
        { imgSrc: "path/to/video3.jpg", title: "Ước gì ta được trở về tuổi thơ" }
      ]
    };
  }
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
}

.footer .container p {
  margin-bottom: 0;
}

.footer {
  text-align: center;
  font-size: 14px;
}
</style>
