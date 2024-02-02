<template>
    <div class="container mx-auto px-4 pt-[100px] max-w-7xl  flex items-start">
  <div class="">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
      <!--navbar-->
      <div class="post p-5 lg:p-1 rounded-2xl">
        <div class="lg:fixed lg:top-24 lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
          <!--information-->
          <div class="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mb-4">
            <!-- Banner Profile -->
            <div class="relative">
              <img
                src="https://cdn.wallpapersafari.com/55/83/Pl6QHc.jpg"
                alt="Banner Profile"
                class="w-full rounded-t-lg"
              />
              <img
                src="https://cdn.wallpapersafari.com/55/83/Pl6QHc.jpg"
                alt="Profile Picture"
                class="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
            <!-- User Info with Verified Button -->
            <div class="flex items-center mt-20">
              <h2 class="text-xl font-bold text-gray-800">Nguyễn Minh Nhựt</h2>
            </div>
            <!-- Bio -->
            <p class="text-gray-700 mt-2">
              404Social | 404NFP Team | Chill and Relax
            </p>
          </div>
          <!--action update-->
          <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full"></div>
        </div>
      </div>
      <!--list post-->
      <div class="lg:col-span-2 p-4 bg-white mt-3" id="posted">
       <post/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import post from '../../components/client/posts.vue';
export default {
  data() {
    return {};
  },
  mounted() {},
  components: {post},
  methods: {},
};
</script>
