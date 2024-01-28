<template>
  <div class="container mx-auto px-4 pt-[100px] max-w-7xl  flex items-start">
     <button
       @click="toggleSidebar"
       class="md:hidden fixed bottom-4 right-4 p-2 rounded-full bg-blue-500 text-white"
     >
       <i class="ri-menu-line text-lg"></i>
     </button>
             <!-- start: Sidebar -->
             <div :class="{ 'hidden': !isSidebarVisible }" class=" sidebar md:block  lg:sticky top-0 lg:top-14 left-0 bg-white lg:bg-transparent  w-64 flex-shrink-0 mr-4 h-full lg:h-[calc(100vh-56px)] overflow-y-auto  py-4 px-4 lg:px-0 ">
                 <div class="mb-4">
                     <ul>
                         <li class="group active">
                             <router-link to="/" class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                 <i class="ri-home-2-line text-lg mr-3"></i>
                                 <span>Trang chủ</span>
                             </router-link>
                         </li>
                         <li class="group cursor-pointer">
                             <router-link to="/messenger" class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                 <i class="ri-chat-3-line text-lg mr-3"></i>
                                 <span>Nhắn tin</span>
                                 
                             </router-link>
                         </li>
 
                         <li class="group cursor-pointer">
                             <router-link to="/video" class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                 <i class="ri-video-line text-lg mr-3"></i>
                                 <span>Videos</span>
                             </router-link>
                         </li>
                         <li class="group cursor-pointer">
                             <router-link to="/information" class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                 <i class="ri-user-4-line text-lg mr-3"></i>
                                 <span>Trang cá nhân</span>
                             </router-link>
                         </li>
                         
                     </ul>
                 </div>
                 <div>
                     <div class="text-[12px] uppercase font-semibold text-gray-400 tracking-wide mb-2">Lạ à nghe</div>
                     <ul>
                         <li class="group cursor-pointer">
                             <router-link to="/tag" class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                 <i class="ri-home-2-line text-lg mr-3"></i>
                                 <span>Tag</span>
                             </router-link>
                         </li>
                         <li class="group cursor-pointer">
                             <router-link to="/link" class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                 <i class="ri-chat-3-line text-lg mr-3"></i>
                                 <span>Links</span>
                                 
                             </router-link>
                         </li>
                         <li class="group cursor-pointer">
                             <router-link to="/tip" class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                 <i class="ri-user-follow-line text-lg mr-3"></i>
                                 <span>Tips</span>
                             </router-link>
                         </li>
                     </ul>
                 </div>
             </div>
             <!-- end: Sidebar -->
             <!-- start: Content -->
             <div class="flex py-4 min-w-0 w-full">
                 <div class="w-full min-w-0">
                    <!--input new -->
                     <div class="p-4 rounded-md shadow-md shadow-black/5 flex items-center bg-white mb-4">
                         <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" class="w-9 h-9 object-cover rounded-md mr-3">
                         <div  class="flex items-center w-full ">
                             <input type="text" placeholder="Đăng một cái gì đó nào?" class="outline-none text-sm w-full">
                             <button class="ml-3 py-1.5 px-3 rounded-md bg-blue-500 text-white font-semibold text-[12px] hover:bg-blue-600 ">Đăng</button>
                         </div>
                     </div>
                    <!--post-->
                    <post/>
                 </div>
             </div>
             <!-- end: Content -->
         </div>
 </template>
 
 
 <script>
 import post from '../../components/client/posts.vue';
 export default {
   data() {
     return {
         isSidebarVisible:false
     };
   },
   components:{post},
   methods: {
     toggleSidebar()
     {
         this.isSidebarVisible = !this.isSidebarVisible
     }
   },
 };
 </script>