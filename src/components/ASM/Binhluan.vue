<template>
    <div>
      <h4>Bình luận</h4>
      <div class="mb-3">
        <textarea class="form-control" rows="3" v-model="comment" placeholder="Viết bình luận của bạn..."></textarea>
      </div>
      <button @click="submitComment" class="btn btn-primary">Gửi</button>
      <div v-if="comments.length" class="mt-4">
        <ul>
          <li v-for="(comment, index) in comments" :key="index">
            {{ comment }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comment: '',
        comments: []
      };
    },
    methods: {
      submitComment() {
        if (this.comment) {
          this.comments.push(this.comment);
          this.comment = '';
        }
      }
    }
  };
  </script>
  