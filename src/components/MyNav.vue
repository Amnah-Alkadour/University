<template>
  <div class="navbar">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDmBD1blm97BfOlfvYAoRsZCAOowEGm_tsA&s"
      alt=""
    />
    <a href="/home">الرئيسية</a>
    <a href="/about">عن الجامعة</a>
    <a href="/colleges">الكليات</a>
    <a href="/login">تسجيل دخول</a>
  </div>

  <div style="padding: 20px">
    <h1>مرحبًا بكم في جامعة ادلب</h1>
  </div>
  <!-- <div class="logo">
      <img src="@/assets/nav-logo.png" alt="" />
    </div>
    <div class="links">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
    <div class="btns">
      <button>LOGIN</button>
      <button>SIGN UP</button>
    </div> -->
  <!-- <p>معلومات عن الجامعة والمزيد.</p> -->
</template>

<script>
export default {
  data() {
    return {
      logo: 'My Logo',
      links: ['Link one', 'Link Two', 'Link Three', 'Link Four']
    };
  }
};
</script>
<style scoped lang="scss">
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.navbar {
  background-color: #004080;
  overflow: hidden;
  flex: auto;
}
.navbar img {
  height: 60px;
  margin: 5px;
  padding: auto;
  float: left;
  border-radius: 10px;
  border-color: #003366;
}
.navbar a {
  float: right; /* تغيرت إلى اليمين لتناسب التصميم */
  display: block;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}
.navbar a:hover {
  background-color: #003366;
}
</style>
