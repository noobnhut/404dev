<template>
  <!-- component -->
  <nav class=" bg-white w-full flex fixed z-[100] justify-between items-center mx-auto px-8 h-20 shadow-xl ">
    <!-- logo -->
    <div class="inline-flex">
      <a class="_o6689fn" href="">
        <div class="hidden md:block">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../../assets/login.gif" class="h-10" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">404Dev</span>
          </a>
        </div>
      </a>
    </div>

    <!-- end logo -->

    <!-- search bar -->
    <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2 ">
      <div class="inline-block">
        <div class="inline-flex items-center max-w-full">
          <button class="flex items-center justify-between pl-2 relative w-[24rem] border rounded-full px-1  py-1"
            type="button">
            <div class="block overflow-hidden px-2">Tìm kiếm ?</div>
            <div class="flex items-center justify-center relative  h-10 w-10 rounded-full px-2">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false" style="
                                display: block;
                                fill: none;
                                height: 12px;
                                width: 12px;
                                stroke: currentcolor;
                                stroke-width: 5.33333;
                                overflow: visible;
                            ">
                <g fill="none">
                  <path
                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                  </path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- end search bar -->

    <!-- login -->
    <div class="flex-initial">
      <div class="flex justify-end items-center relative">

        <div class="flex mr-4 items-center">
          <a class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
            <div class="flex items-center relative cursor-pointer whitespace-nowrap">404Dev chia sẽ ?</div>
          </a>
          <div class="block relative">
            <button type="button" class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
              <div class="flex items-center h-5">
                <div class="_xpkakx">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    style="display: block; height: 16px; width: 16px; fill: currentcolor;" viewBox="0 0 24 24" role="img"
                    aria-labelledby="apb5h1ao20vx2gwmtnktvtlytqzyi4sy" class="crayons-icon">
                    <title id="apb5h1ao20vx2gwmtnktvtlytqzyi4sy">Notifications</title>
                    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                  </svg>


                </div>
              </div>
            </button>
          </div>
        </div>

        <div class="block">
          <div class="inline relative">
            <button type="button" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
              <div class="pl-1">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                  focusable="false"
                  style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                  <g fill="none" fill-rule="nonzero">
                    <path d="m2 16h28"></path>
                    <path d="m2 24h28"></path>
                    <path d="m2 8h28"></path>
                  </g>
                </svg>
              </div>

              <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                  focusable="false" style="display: block; height: 100%; width: 100%; fill: currentcolor;">
                  <path
                    d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                  </path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end login -->
  </nav>
  <toast ref="toast"/>
</template>

<script>
import toast from '../toast.vue';
export default {
  data() {
    return {

    };
  },
  mounted() { },
  components: {toast},
  methods: {},
};
</script>
