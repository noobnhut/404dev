<template>
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50"
      @click="onclose"
    ></div>

    <div
      class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="flex flex-row py-3 px-4">
        <h5 class="text-lg font-semibold flex-grow">Cài đặt người dùng</h5>
        <i
          class="uil-multiply flex-none cursor-pointer bg-gray-400 rounded-xl"
          @click="onclose"
        ></i>
      </div>
      <div class="mt-4">
        <div class="flex max-h-[400px] w-full flex-col overflow-y-scroll">
          <button
            class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
          >
            <div
              class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
            >
              <span
                class="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900"
                >T</span
              >
            </div>
            <div
              class="flex flex-col items-start justify-between font-light text-gray-600"
            >
              <p class="text-[15px]">Thông tin người dùng</p>
              <span class="text-xs font-light text-gray-400"
                >Hiển thị thông tin của bạn</span
              >
            </div>
          </button>
          <button
            class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
          >
            <div
              class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
            >
              <span
                class="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900"
              >
                <svg
                  class="mx-auto h-6 w-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div
              class="flex flex-col items-start justify-between font-light text-gray-600"
            >
              <p class="text-[15px]">Theo dõi</p>
              <span class="text-xs font-light text-gray-400"
                >Danh sách bài đăng theo dõi</span
              >
            </div>
          </button>
          <button
            class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
          >
            <div
              class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
            >
              <span
                class="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"
              >
               M
              </span>
            </div>
            <div
              class="flex flex-col items-start justify-between font-light text-gray-600"
            >
              <p class="text-[15px]">Nhắn tin</p>
              <span class="text-xs font-light text-gray-400"
                >Chia sẽ và trao đổi</span
              >
            </div>
          </button>

         
          <button
            class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
          >
            <div
              class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
            >
              <span
                class="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900"
              >
                <svg
                  class="mx-auto h-6 w-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div
              class="flex flex-col items-start justify-between font-light text-gray-600"
            >
              <p class="text-[15px]">Đăng xuất</p>
              <span class="text-xs font-light text-gray-400"
                >Tới lúc bạn nghỉ ngơi rùi </span>
            </div>
          </button>
        </div>
      </div>
      <div class="py-3 px-4">
        <a
          href="https://github.com/samansayar"
          target="_blank"
          class="mx-auto flex  items-center justify-start gap-x-3 rounded-lg border border-gray-700 bg-gray-700 px-4 py-2"
        >
          <button
            class="flex items-center space-x-2 rounded-full bg-gray-700 font-semibold text-white"
          ></button>
          <p class="text-sm text-white mx-auto my-auto">404Dev 🙂</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["cancel"],
  data() {
    return {};
  },
  mounted() {},
  components: {},
  methods: {
    onclose() {
      this.$emit("cancel");
    },
  },
};
</script>
