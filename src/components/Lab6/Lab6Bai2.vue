<template>
    <div class="container">
      <h3>Nhập tháng của bạn:</h3>
      <input 
        type="number" 
        v-model.number="month" 
        placeholder="Nhập tháng (1-12)" 
        min="1" 
        max="12" 
      />
      <!-- Error message for invalid months -->
      <p v-if="month < 1 || month > 12" style="color: red">
        Vui lòng nhập tháng từ 1 đến 12!
      </p>
      <!-- Display the corresponding season -->
      <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
      <p v-else-if="month <= 6">Mùa Hè</p>
      <p v-else-if="month <= 9">Mùa Thu</p>
      <p v-else>Mùa Đông</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Reactive variable for the input month
  const month = ref(1);
  </script>
  