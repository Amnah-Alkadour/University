<template>
  <div class="about">
    <h1>معلومات حول جامعة أدلب</h1>
    <div class="info-box w-45">
      <h2>تاريخ الجامعة</h2>
      <p>
        تأسست جامعة أدلب في عام 2006، وتهدف إلى تقديم تعليم أكاديمي متميز في
        مختلف التخصصات.
      </p>
    </div>

    <div class="info-box">
      <h2>الرؤية والرسالة</h2>
      <p>
        تهدف الجامعة إلى تحقيق التميز الأكاديمي من خلال تطوير برامج تعليمية
        مبتكرة وإجراء أبحاث ذات تأثير.
      </p>
      <div>
        <img
          src="https://www.mu.edu.sa/sites/default/files/content/2020/04/333_0.jpg"
          style="width: 50%"
          alt=""
        />
      </div>
    </div>

    <div class="info-box">
      <h2>الكليات</h2>
      <ul>
        <div>
          <li>كلية الهندسة</li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkAInX4UYqrY3nb_Awp-Kj8uB3DB2KRB_6g&s"
            style="width: 100%"
            alt=""
          />
        </div>
        <div>
          <li>كلية العلوم الطبية</li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzyqCB_vEzPC6yThsDjjqs6ikWks9vVj3Fw&s"
            style="width: 100%"
            alt=""
          />
        </div>
        <div>
          <li>كلية الآداب والعلوم الإنسانية</li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISLKoBpdRZsJ0yeRRQpCK-JGwzXcLKui7VQ&s"
            style="width: 100%"
            alt=""
          />
        </div>
        <div>
          <li>كلية الاقتصاد وإدارة الأعمال</li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzj7zKYTUTWae3s5HEBxVPNvhU0ZHq_uirw&s"
            style="width: 100%"
            alt=""
          />
        </div>
      </ul>
    </div>

    <div class="info-box">
      <h2>الأنشطة الطلابية</h2>
      <p>
        تقدم الجامعة مجموعة من الأنشطة الثقافية والرياضية التي تهدف إلى تعزيز
        التفاعل بين الطلاب.
      </p>
      <ul>
        <li>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZA-zW3TPi4BInIO2QF_DJuJVCTmLH8UAmQ&s"
              style="width: 100%"
              alt=""
            />
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrnD88snPaKwLNqZ-PpWRY0hf_4Ra94DDAQ&s"
              style="width: 100%"
              alt=""
            />
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7vc4x4QV4nvRrDQGppf-qxIrpmQXRB0tOw&s"
              style="width: 100%"
              alt=""
            />
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_Y3KVneAe3kHKJP0F8Q-XOJTLGftw6ZLRw&s"
              style="width: 100%"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.navbar {
  background-color: #004080;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 10px;
}
.navbar img {
  height: 50px;
  margin: 5px;
}
.navbar a {
  float: right;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}
.navbar a:hover {
  background-color: #003366;
}
.about {
  padding: 20px;
}
h1 {
  color: #004080;
}
.info-box {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
