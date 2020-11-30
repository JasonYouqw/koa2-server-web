<template>
  <div>
    <div @click="onLoginIn">Login Page GET</div>
    <div @click="onLoginIn2">Login Page POST JSON</div>
    <div @click="onLoginIn3">Login Page FORMDATA</div>
    <div @click="onLoginIn4">Login Page UPLOAD</div>
  </div>
</template>
<script>
  import api from '../api/index.js';
  import qs from 'qs';
  export default {
    data() {
      return {

      }
    },
    methods: {
      onLoginIn() {
        this.$axios.get({
          url: api.API_QUERY_CLAIM,
          data: {
            id: 12
          }
        });
      },
      onLoginIn2() {
        this.$axios.post({
          url: api.API_QUERY_CLAIM,
          data: {
            id: 12
          }
        });
      },
      onLoginIn3() {
        this.$axios.post({
          url: api.API_USER_LOGIN,
          data: qs.stringify({
            id: 12
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
      },
      onLoginIn4() {
        const filePath = '/images/show.png'
        const data = new FormData();
        data.append('file', filePath);
        this.$axios.post({
          url: api.API_UPLOAD_IMAGE_SHOW,
          data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
    },
  }
</script>