<template>
  <div
    class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
  >
    <h2>LOGIN PAGE</h2>
  </div>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-7 w-auto"
        src="data:image/png;base64,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"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          ><br />
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="text-sm">
          <a
            href="#"
            class="font-semibold text-indigo-400 hover:text-indigo-300"
            >Forgot password?</a
          >
        </div>
        <br />

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a
          href="#"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn'
};
</script>

<style lang="scss" scoped>
input {
  border-radius: 8px; // قم بتعديل القيمة حسب الحاجة
}

button {
  border-radius: 8px; // نفس الشيء هنا
}

input,
button {
  padding: 10px; // أو أي قيمة أصغر
  margin: 5px 0; // قم بتقليل المسافة بين العناصر
}
form {
  background-color: #f9f9f9; // لون خلفية خفيف
  border-radius: 12px; // حواف ناعمة للنموذج
  padding: 20px; // مساحة داخلية حول المحتوى
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // إضافة ظل لطيف
}
</style>
