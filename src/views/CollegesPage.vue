<template>
  <div class="container">
    <h1>الكليات</h1>

    <div class="dropdown">
      <button class="dropbtn">كلية العلوم</button>
      <div class="dropdown-content">
        <a href="#">قسم الفيزياء</a>
        <a href="#">قسم الكيمياء</a>
        <a href="#">قسم الأحياء</a>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">كلية الهندسة</button>
      <div class="dropdown-content">
        <a href="#">قسم الهندسة المدنية</a>
        <a href="#">قسم الهندسة المعلوماتية</a>
        <a href="#">قسم الهندسة الميكانيكية</a>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">كلية الآداب</button>
      <div class="dropdown-content">
        <a href="#">قسم اللغة العربية</a>
        <a href="#">قسم اللغة الإنجليزية</a>
        <a href="#">قسم الفلسفة</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
document.addEventListener('DOMContentLoaded', function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
  });
});
</script>

<style lang="scss" scoped>
body {
  background-color: #f7fafc;
  font-family: Arial, sans-serif;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}
h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 24px;
}
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 25px;
}
.dropbtn {
  background-color: rgb(35, 82, 118);
  border: 1px solid #b6d1ee;
  border-radius: 0.375rem;
  padding: 10px;
  width: 100%;
  text-align: right;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.5rem;
}
.dropbtn:hover {
  background-color: #edf2f7;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 240px;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  z-index: 1;
}
.dropdown-content a {
  color: #4a5568;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #edf2f7;
}
.show {
  display: block;
}
</style>
