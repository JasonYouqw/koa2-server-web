<template>
  <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
    <div>
      <div @click="onPush">click1</div>
      <div @click="onPush2">click2</div>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      onPush() {
        this.$router.push('/claim');
      },
      onPush2() {
        this.$router.push('/claim/claimDetail');
      }
    },
  };
</script>
