<template>
  <div class="container mx-auto px-4 pt-[100px] max-w-7xl">
    <QuillEditor
      class="editor-form"
      ref="commonRef"
      :options="options"
      v-model.trim="content"
      @input="handleInput"
      @change="handleChange($event)"
    />
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  data() {
    return {
      content: "",
      options: {
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              ["formula"],
            ],
          },
        },
        placeholder: "",
        theme: "snow",
        readOnly: false,
      },
    };
  },

  components: { QuillEditor },
  methods: {
    handleInput() {},
    handleChange(event) {},
  },
};
</script>
