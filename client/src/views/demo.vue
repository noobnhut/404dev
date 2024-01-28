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
                            <a  class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                <i class="ri-home-2-line text-lg mr-3"></i>
                                <span>Trang chủ</span>
                            </a>
                        </li>
                        <li class="group">
                            <a  class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                <i class="ri-chat-3-line text-lg mr-3"></i>
                                <span>Nhắn tin</span>
                                
                            </a>
                        </li>

                        <li class="group">
                            <a  class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                <i class="ri-video-line text-lg mr-3"></i>
                                <span>Videos</span>
                            </a>
                        </li>
                        <li class="group">
                            <a  class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                <i class="ri-user-4-line text-lg mr-3"></i>
                                <span>Trang cá nhân</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <div class="text-[12px] uppercase font-semibold text-gray-400 tracking-wide mb-2">Lạ à nghe</div>
                    <ul>
                        <li class="group">
                            <a  class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                <i class="ri-home-2-line text-lg mr-3"></i>
                                <span>Tag</span>
                            </a>
                        </li>
                        <li class="group">
                            <a  class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                <i class="ri-chat-3-line text-lg mr-3"></i>
                                <span>Links</span>
                                
                            </a>
                        </li>
                        <li class="group">
                            <a  class="flex items-center py-2 px-4 text-sm rounded-md text-gray-500 hover:text-gray-600 group-[.active]:bg-gray-200 group-[.active]:text-gray-800 font-medium">
                                <i class="ri-user-follow-line text-lg mr-3"></i>
                                <span>Tips</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end: Sidebar -->
            <!-- start: Content -->
            <div class="flex py-4 min-w-0 w-full">
                <div class="w-full min-w-0">

                    <div class="p-4 rounded-md shadow-md shadow-black/5 flex items-center bg-white mb-4">
                        <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" class="w-9 h-9 object-cover rounded-md mr-3">
                        <div  class="flex items-center w-full ">
                            <input type="text" placeholder="Đăng một cái gì đó nào?" class="outline-none text-sm w-full">
                            <button class="ml-3 py-1.5 px-3 rounded-md bg-blue-500 text-white font-semibold text-[12px] hover:bg-blue-600 ">Đăng</button>
                        </div>
                    </div>
                    
                    <div class="p-4 rounded-md shadow-md shadow-black/5 bg-white mb-4">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center mr-4">
                                <img src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" class="w-9 h-9 object-cover rounded-md mr-3">
                                <div>
                                    <a  class="font-semibold text-sm">John Doe</a>
                                    <div class="text-gray-400 text-[12px]">1 hours ago</div>
                                </div>
                            </div>
                            <div class="action group">
                                <button type="button" class="flex items-center justify-center w-5 h-5 text-sm rounded bg-gray-100 text-gray-400 group-[.active]:text-gray-500">
                                    <i class="ri-more-fill"></i>
                                </button>
                            </div>
                        </div>
                        <div class="mb-4">
                            <p class="text-gray-500 text-sm leading-normal mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores ipsum perspiciatis velit, ex molestias tempore? Ut quam dicta dolore!</p>
                            <div class="grid grid-cols-2 gap-4">
                                <a >
                                    <img src="https://images.fptplay.net/media/OTT/VOD/2023/12/28/solo-leveling-toi-thang-cap-mot-minh-phan-1-fpt-play-1703737812530_Landscape.jpg" alt="" class="w-full h-full object-cover rounded-md">
                                </a>
                                <a >
                                    <img src="https://images.fptplay.net/media/OTT/VOD/2023/12/28/solo-leveling-toi-thang-cap-mot-minh-phan-1-fpt-play-1703737812530_Landscape.jpg" alt="" class="w-full h-full object-cover rounded-md">
                                </a>
                                <a >
                                    <img src="https://images.fptplay.net/media/OTT/VOD/2023/12/28/solo-leveling-toi-thang-cap-mot-minh-phan-1-fpt-play-1703737812530_Landscape.jpg" alt="" class="w-full h-full object-cover rounded-md">
                                </a>
                                <a >
                                    <img src="https://images.fptplay.net/media/OTT/VOD/2023/12/28/solo-leveling-toi-thang-cap-mot-minh-phan-1-fpt-play-1703737812530_Landscape.jpg" alt="" class="w-full h-full object-cover rounded-md">
                                </a>
                            </div>
                        </div>
                        <div class="-ml-4 -mr-4 border-t border-b border-gray-100 pt-1 px-4 flex items-center flex-wrap">
                            <a  class="flex items-center p-2 rounded-md hover:bg-gray-100 font-semibold text-gray-500 text-[13px] hover:text-gray-800 mr-auto mb-1">
                                <div class="flex items-center mr-2">
                                    <img src="https://placehold.co/24x24" alt="" class="w-6 h-6 rounded-full">
                                    <img src="https://placehold.co/24x24" alt="" class="w-6 h-6 rounded-full -ml-3">
                                    <img src="https://placehold.co/24x24" alt="" class="w-6 h-6 rounded-full -ml-3">
                                </div>
                                <span>5 Comments</span>
                            </a>
                            <div class="flex items-center mb-1">
                                <a  class="flex items-center p-2 rounded-md hover:bg-gray-100 font-semibold text-gray-500 text-[13px] hover:text-gray-800 mr-2">
                                    <i class="ri-thumb-up-line mr-2"></i>
                                    <span>27 Likes</span>
                                </a>
                                <a  class="flex items-center p-2 rounded-md hover:bg-gray-100 font-semibold text-gray-500 text-[13px] hover:text-gray-800">
                                    <i class="ri-share-line mr-2"></i>
                                    <span>10 Share</span>
                                </a>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <!-- end: Content -->
        </div>
</template>


<script>
export default {
  data() {
    return {
        isSidebarVisible:false
    };
  },
  methods: {
    toggleSidebar()
    {
        this.isSidebarVisible = !this.isSidebarVisible
    }
  },
};
</script>