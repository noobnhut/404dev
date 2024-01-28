<template>
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-[100]"
    v-show="visible"
  >
    <div
      class="bg-white/60 backdrop-blur-xl z-20 max-w-md absolute right-5 top-5 rounded-lg p-6 shadow"
    >
      <h1 class="text-xl text-slate-700 font-medium">Thông báo 👋</h1>
      <div class="flex justify-between items-center">
        <a
          class="text-slate-500 hover:text-slate-700 text-sm inline-flex space-x-1 items-center break-words"
        >
          <span
            >{{ message }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  emits: ["cancel"],
  data() {
    return {
      visible: false,
      message: "",
    };
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 2000); // thời gian đợi 3 giây trước khi ẩn toast
    },
    closeToast() {
      this.visible = !this.visible;
    },
  },
};
</script>
