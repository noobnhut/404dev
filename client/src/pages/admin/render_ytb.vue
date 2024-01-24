<template>
  <div class="w-full px-6 mx-auto mb-10">
    <div
      class="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
      style="
        background-image: url('https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-Macbook-3D-moi-nhat.jpg');
        background-position-y: 50%;
      "
    >
      <span
        class="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"
      ></span>
    </div>
    <div
      class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200"
    >
      <div class="flex flex-wrap -mx-3">
        <div class="flex-none w-auto max-w-full px-3"></div>
        <div class="flex-none w-auto max-w-full px-3 my-auto">
          <div class="h-full">
            <h5 class="mb-1">Quản lý Youtube</h5>
          </div>
        </div>
        <div
          class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"
        >
          <div class="relative right-0">
            <ul
              class="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl flex-col on-resize h-20"
            >
              <div class="absolute right-10">
                <button
                  @click="openShowAdd"
                  class="shadow inline-flex items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-4 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      stroke="none"
                    ></rect>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Thêm
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between mb-4">
    <h2 class="text-xl font-bold text-gray-800">Quản lý Youtube</h2>
  </div>


  <!--render list-->
  <div class="overflow-x-auto bg-white rounded-lg shadow">
    <table
      class="w-full whitespace-no-wrap bg-white overflow-hidden table-striped"
    >
      <thead>
        <tr class="text-left">
          <th
            class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
          >
            STT:
          </th>
          <th
            class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
          >
            Tiêu đề:
          </th>
          <th
            class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
          >
            Nội dung:
          </th>
          <th
            class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
          >
            Link video:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="focus-within:bg-gray-200 overflow-hidden"
          v-for="(ytb, index) in ytbs"
          :key="index"
        >
          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              index + 1
            }}</span>
          </td>

          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              ytb.title
            }}</span>
          </td>

          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              ytb.content
            }}</span>
          </td>

          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              ytb.link_video
            }}</span>
          </td>

          <td class="border-t">
            <span class="px-6 py-4 flex items-center">
              <span
                class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-green-200 text-green-800 cursor-pointer"
                @click="
                  openShowUpdate();
                  select(ytb);
                "
                >Sửa</span
              >
              <span
                class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800 cursor-pointer"
                @click="
                  openShowDelete();
                  select(ytb);
                "
                >Xóa</span
              >
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div><p class="sr-only mt-2">aaa</p></div>
  </div>

  <!--model thêm-->
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
    v-show="isShowAdd"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50"
      @click="openShowAdd"
    ></div>

    <div
      class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="flex flex-row py-3 px-4">
        <h5 class="text-lg font-semibold flex-grow">Thêm clip Youtube</h5>
        <i
          class="uil-multiply flex-none cursor-pointer bg-gray-400 rounded-xl"
          @click="openShowAdd"
        ></i>
      </div>

      <div class="px-4">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Tiêu đề</label
          >
          <input
            type="text"
            class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            v-model="title"
            required
          />
          <p
            class="text-red-500 text-sm ml-1"
            v-if="!title && titleFocused"
          >
            Không được để trống.
          </p>
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Nội dung</label
          >
          <input
            type="text"
            class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            v-model="content"
            required
          />
          <p
            class="text-red-500 text-sm ml-1"
            v-if="!content && contentFocused"
          >
            Không được để trống.
          </p>
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Link video</label
          >
          <input
            type="text"
            class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            v-model="link_video"
            required
          />
          <p
            class="text-red-500 text-sm ml-1"
            v-if="!link_video && link_videoFocused"
          >
            Không được để trống.
          </p>
        </div>
      </div>

      <div class="py-3 px-4">
        <button
          class="py-2 px-4 bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-200 text-white rounded-lg cursor-pointer mr-4"
          @click="addYTB"
        >
          Thêm
        </button>
        <button
          class="py-2 px-4 bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-200 text-white rounded-lg cursor-pointer"
          @click="openShowAdd()"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>

  <!--modal sửa-->
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
    v-show="isShowUpdate"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50"
      @click="openShowUpdate"
    ></div>

    <div
      class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="flex flex-row py-3 px-4">
        <h5 class="text-lg font-semibold flex-grow">Cập nhập Youtube</h5>
        <i
          class="uil-multiply flex-none cursor-pointer bg-gray-400 rounded-xl"
          @click="openShowUpdate"
        ></i>
      </div>

      <div class="px-4">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Tiêu đề</label
          >
          <input
            type="text"
            class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            v-model="title"
            required
          />
          <p
            class="text-red-500 text-sm ml-1"
            v-if="!title && titleFocused"
          >
            Không được để trống.
          </p>
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Nội dung</label
          >
          <input
            type="text"
            class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            v-model="content"
            required
          />
          <p
            class="text-red-500 text-sm ml-1"
            v-if="!content && contentFocused"
          >
            Không được để trống.
          </p>
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Link video</label
          >
          <input
            type="text"
            class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            v-model="link_video"
            required
          />
          <p
            class="text-red-500 text-sm ml-1"
            v-if="!link_video && link_videoFocused"
          >
            Không được để trống.
          </p>
        </div>
      </div>

      <div class="py-3 px-4">
        <button
          class="py-2 px-4 bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-200 text-white rounded-lg cursor-pointer mr-4"
          @click="updateYTB"
        >
          Cập nhập
        </button>
        <button
          class="py-2 px-4 bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-200 text-white rounded-lg cursor-pointer"
          @click="openShowUpdate()"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>

  <!--modal xóa-->
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
    v-show="isShowDelete"
  >
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50"
      @click="openShowDelete"
    ></div>

    <div
      class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="flex flex-row py-3 px-4">
        <h5 class="text-lg font-semibold flex-grow">Xóa Youtube</h5>
        <i
          class="uil-multiply flex-none cursor-pointer bg-gray-400 rounded-xl"
          @click="openShowDelete"
        ></i>
      </div>
      <div class="px-4">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Bạn có muốn xóa Youtube:
            <span class="font-bold">{{ title }}</span>
          </label>
        </div>
      </div>
      <div class="py-3 px-4">
        <button
          class="py-2 px-4 bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-200 text-white rounded-lg cursor-pointer mr-4"
          @click="deleteYTB"
        >
          Xóa
        </button>
        <button
          class="py-2 px-4 bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-200 text-white rounded-lg cursor-pointer"
          @click="openShowDelete()"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>

  <toast ref="toast"></toast>
</template>

<script>
import toast from "../../components/toast.vue";
export default {
  data() {
    return {
      isShowAdd: false,
      isShowDelete: false,
      isShowUpdate: false,
      title: "", content: "", link_video: "",
      ytbs: [],
      ytb: "",
      titleFocused: false, contentFocused: false, link_videoFocused: false
    };
  },
  mounted() {
    this.getYTB();
  },
  components: {toast},
  methods: {
    async getYTB() {
      try {
        const result = await this.$axios.get("YTB/get");
        if (result.data.success == true) {
          this.ytbs = result.data.result;
        }
       
      } catch (error) {
        console.log(error);
      }
    },

    async addYTB() {
      try {
        this.titleFocused = true;
        this.contentFocused = true;
        this.link_videoFocused = true;
        if (this.title && this.content && this.link_video) {
          const result = await this.$axios.post("YTB/add", {
            title: this.title,
            content: this.content,
            link_video: this.link_video
          });
          if (result.data.success == true) {
            this.$refs.toast.showToast(result.data.message);
            setTimeout(() => {
              this.getYTB();
              this.title = "";
              this.content = "";
              this.link_video = "";
              this.titleFocused = false;
              this.contentFocused = false;
              this.link_videoFocused = false;
              this.openShowAdd();
            }, 1000);
          } else {
            this.$refs.toast.showToast(result.data.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    async updateYTB() {
      try {
        this.titleFocused = true;
        this.contentFocused = true;
        this.link_videoFocused = true;
        if (this.title && this.content && this.link_video) {
          const result = await this.$axios.put(`YTB/update/${this.ytb.id}`, {
            title: this.title,
            content: this.content,
            link_video: this.link_video
          });
          if (result.data.success == true) {
            this.$refs.toast.showToast(result.data.message);
            setTimeout(() => {
              this.getYTB();
              this.title = "";
              this.content = "";
              this.link_video = "";
              this.titleFocused = false;
              this.contentFocused = false;
              this.link_videoFocused = false;
              this.openShowUpdate();
            }, 1000);
          } else {
            this.$refs.toast.showToast(result.data.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteYTB() {
      const result = await this.$axios.delete(`YTB/delete/${this.ytb.id}`);
      if (result.data.success == true) {
        this.$refs.toast.showToast(result.data.message);
        setTimeout(() => {
          this.getYTB();
          this.openShowDelete();
        }, 1000);
      } else {
        this.$refs.toast.showToast(result.data.message);
      }
    },


    select(ytb) {
      this.ytb = ytb;
      this.title = ytb.title;
      this.content = ytb.content;
      this.link_video = ytb.link_video;
    },

    openShowAdd() {
      this.isShowAdd = !this.isShowAdd;
      this.title = "";
      this.content = "";
      this.link_video = "";
    },

    openShowUpdate() {
      this.isShowUpdate = !this.isShowUpdate;
    },

    openShowDelete() {
      this.isShowDelete = !this.isShowDelete;
    },
  },
};
</script>
