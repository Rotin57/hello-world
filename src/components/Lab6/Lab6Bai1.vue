<template>
  <div style="padding: 20px;">
    <label for="score">Nhập điểm của bạn:</label>
    <input 
      id="score" 
      type="number" 
      v-model.number="score" 
      placeholder="Nhập điểm trung bình" 
      min="0" 
      max="10" 
    />
    <p>Kết quả xếp loại: <strong>{{ classification }}</strong></p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const score = ref(0); // Giá trị ban đầu là 0

// Computed property để xếp loại dựa vào điểm
const classification = computed(() => {
  if (score.value < 5.0) return "Yếu";
  if (score.value < 6.5) return "Trung bình";
  if (score.value < 8.0) return "Khá";
  if (score.value < 9.0) return "Giỏi";
  return "Xuất sắc";
});
</script>
