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
            <h5 class="mb-1">Quản lý người dùng</h5>
          </div>
        </div>
        <div
          class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"
        >
          <div class="relative right-0">
            <ul
              class="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl flex-col on-resize h-20"
            >
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between mb-4">
    <h2 class="text-xl font-bold text-gray-800">Quản lý người dùng</h2>
  </div>  
    
    <!--render list-->
  <div class="overflow-x-auto bg-white rounded-lg shadow m-2">
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
            Username:
          </th>

          <th
            class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
          >
            Fullname:
          </th>

          <th
            class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
          >
            Email:
          </th>

          <th
            class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
          >
            Chức năng:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="focus-within:bg-gray-200 overflow-hidden"
          v-for="(user, index) in users"
          :key="index"
        >
          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              index + 1
            }}</span>
          </td>

          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              user.username
            }}</span>
          </td>

          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              user.fullname
            }}</span>
          </td>

          <td class="border-t">
            <span class="text-gray-700 px-6 py-4 flex items-center">{{
              user.email
            }}</span>
          </td>

          <td class="border-t">
            <span class="px-6 py-4 flex items-center">
              <span
                class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold bg-red-200 text-red-800 cursor-pointer"
                @click="
                  select(user);
                "
                >Khóa tài khoản</span
              >
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div><p class="sr-only mt-2">aaa</p></div>
  </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
          users:[]
      };
    },
    mounted() {
     this.getUser()
    },
    components: {},
    methods: {
     async getUser()
     {
      try {
        const result = await this.$axios('user/get')
        if(result.data.success == true)
        {
          this.users = result.data.user
        }
      } catch (error) {
        console.log(error)
      }
     }
    },
  };
  </script>