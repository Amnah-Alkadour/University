<template>
  <footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="footer-content">
      <p>&copy; 2024 جامعة ادلب . جميع الحقوق محفوظة.</p>
      <ul>
        <li><a href="/login">تسجيل الدخول</a></li>
        <li><a href="/about">حول الجامعة</a></li>
        <li><a href="/home">الرئيسية</a></li>
      </ul>
      <div class="social-media">
        <a href="https://www.facebook.com/idleb.univ1/" target="_blank"
          ><i class="fab fa-facebook-f"></i> فيسبوك</a
        >
        <a href="https://twitter.com" target="_blank"
          ><i class="fab fa-twitter"></i>تويتر</a
        >
        <a
          href="https://instagram.com/idlib.university/p/DAW0jJQtCXF/"
          target="_blank"
          ><i class="fab fa-instagram"></i>إنستغرام</a
        >
        <a
          href="https://linkedin.com/https://www.idleb-university.com/"
          target="_blank"
          ><i class="fab fa-linkedin-in"></i>لينكد إن</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #003366;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-top: 60px;
}

.footer-content ul {
  list-style-type: none;
  padding: 0;
}

.footer-content a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

.social-media {
  margin-top: 10px;
}

.social-media a {
  margin: 0 5px;
  display: inline-block;
}
</style>
