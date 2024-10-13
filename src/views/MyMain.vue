<template>
  <div class="my-main">
    <h1>Welcome University Of Idlib</h1>
    <div class="gallery">
      <img
        src="https://scontent.fhty1-2.fna.fbcdn.net/v/t39.30808-6/430124442_751536713744139_680388616828921802_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ZSCopWA9Zd4Q7kNvgHucuKv&_nc_ht=scontent.fhty1-2.fna&_nc_gid=AriNa6Yfu61o0zRuX0jJQZk&oh=00_AYDymVqbuM3vhCWayWgluGQGSXgO2fznlKpTBd0vuzhg6w&oe=67111DA7"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  // name: 'MyMain',
  // components: {
  //   MyFrom
  // },
  data() {}
};
</script>
<style>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: gray;
  box-shadow: 0px 0px 0px 0px black;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style-type: none;
}
img {
  width: 15%;
}
button {
  background-color: rgb(42, 112, 112);
  color: white;
  padding: 5px 10px;
}
.gallery img {
  width: 100%;
  height: 600px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 8px;
}
</style>
