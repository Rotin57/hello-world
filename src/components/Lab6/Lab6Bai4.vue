<template>
    <div class="container mt-5">
      <h1 class="text-center">Quản lý học sinh</h1>
      
      <!-- Form to Add/Update Students -->
      <div class="card mb-4">
        <div class="card-body">
          <h3>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh mới' }}</h3>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Họ tên:</label>
              <input 
                type="text" 
                id="name" 
                v-model="studentForm.name" 
                class="form-control" 
                placeholder="Nhập họ tên" 
                required 
              />
            </div>
            <div class="mb-3">
              <label for="score" class="form-label">Điểm:</label>
              <input 
                type="number" 
                id="score" 
                v-model="studentForm.score" 
                class="form-control" 
                placeholder="Nhập điểm" 
                required 
              />
            </div>
            <div class="mb-3">
              <label for="dob" class="form-label">Ngày sinh:</label>
              <input 
                type="date" 
                id="dob" 
                v-model="studentForm.dob" 
                class="form-control" 
                required 
              />
            </div>
            <button type="submit" class="btn btn-primary">
              {{ isEditing ? 'Cập nhật' : 'Thêm' }}
            </button>
            <button 
              type="button" 
              class="btn btn-secondary ms-2" 
              v-if="isEditing" 
              @click="cancelEdit"
            >
              Hủy
            </button>
          </form>
        </div>
      </div>
  
      <!-- Student List -->
      <div class="card">
        <div class="card-body">
          <h3>Danh sách học sinh</h3>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Họ tên</th>
                <th>Điểm</th>
                <th>Ngày sinh</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.score }}</td>
                <td>{{ student.dob }}</td>
                <td>
                  <button 
                    class="btn btn-warning btn-sm" 
                    @click="editStudent(index)"
                  >
                    Sửa
                  </button>
                  <button 
                    class="btn btn-danger btn-sm ms-2" 
                    @click="deleteStudent(index)"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";
  
  // Reactive state for the student list and form
  const students = reactive([]); // List of students
  const studentForm = reactive({ name: "", score: "", dob: "" }); // Form data
  const isEditing = ref(false); // Editing mode
  const editingIndex = ref(null); // Index of the student being edited
  
  // Add or Update Student
  const handleSubmit = () => {
    if (isEditing.value) {
      // Update student
      students[editingIndex.value] = { ...studentForm };
      isEditing.value = false;
      editingIndex.value = null;
    } else {
      // Add new student
      students.push({ ...studentForm });
    }
    resetForm();
  };
  
  // Edit Student
  const editStudent = (index) => {
    isEditing.value = true;
    editingIndex.value = index;
    Object.assign(studentForm, students[index]); // Populate form with student data
  };
  
  // Delete Student
  const deleteStudent = (index) => {
    students.splice(index, 1);
  };
  
  // Reset Form
  const resetForm = () => {
    studentForm.name = "";
    studentForm.score = "";
    studentForm.dob = "";
  };
  
  // Cancel Edit
  const cancelEdit = () => {
    isEditing.value = false;
    editingIndex.value = null;
    resetForm();
  };
  </script>
  
  <style>
  /* Add any custom styles if needed */
  </style>
  