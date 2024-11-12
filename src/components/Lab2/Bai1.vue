<template>
    <div class="container my-4">
      <h3 class="table-title">Bảng Thành Phần Dinh Dưỡng</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th rowspan="2">Thành Phần</th>
            <th colspan="2">Giá Trị</th>
          </tr>
          <tr>
            <th>Khối Lượng</th>
            <th>% DV*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>200 kcal</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Béo</td>
            <td>9 g</td>
            <td>14%</td>
          </tr>
          <tr>
            <td>Chất Béo Bão Hòa</td>
            <td>4 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Đạm</td>
            <td>8 g</td>
            <td>16%</td>
          </tr>
          <tr>
            <td>Chất Xơ</td>
            <td>5 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Đường</td>
            <td>12 g</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="2">Vitamin</td>
            <td>Vitamin C</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Vitamin D</td>
            <td>10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab2Bai1"
  }
  </script>
  
  <style scoped>
  .table-title {
    color: #d62941;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
  }
  .table th, .table td {
    vertical-align: middle;
    text-align: center;
  }
  .table thead th {
    background-color: #ffc107;
  }
  </style>