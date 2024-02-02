<template>
  <navbar />
  <router-view />
</template>

<script>
import navbar from "../components/client/navbar.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  components: { navbar },
  methods: {},
};
</script>
