<template>
    <div>
      <Navbar />
      <section class="container my-5">
        <h2 class="text-info mb-5 text-center">Danh sách tin</h2>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action" v-for="(news, index) in newsList" :key="index">
            {{ news.title }}
          </a>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsList: [
          { title: 'Tin 1' },
          { title: 'Tin 2' },
          { title: 'Tin 3' },
          // You can add more news data here
        ]
      };
    }
  };
  </script>
  