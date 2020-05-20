<template lang="pug">
  div.container.py-5
    form.w-100.form-signin(@submit.prevent.stop="handleSubmit")
      .text-center.mb-4
        h1.h3.mb-3.font-weight-normal Sign In
      .form-label-group
        label(for='inputEmail') Email
        input.form-control(type='text',v-model='email', name='email', placeholder='Email', required='', autofocus='')
      .form-label-group
        label(for='inputPassword') Password
        input.form-control(type='password',v-model='password', name='password', placeholder='Password', required='')
      br
      button.btn.btn-lg.btn-primary.btn-block(type='submit' ) Submit
      .text-center.mb-4
        p
          router-link(to="/signup") Sign Up
      p.mt-5.mb-3.text-muted.text-center © 2017-2018
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        email: this.email,
        password: this.password
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    }
  }
};
</script>