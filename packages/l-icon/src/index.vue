<!--
 * @Author: Louis
 * @Date: 2019-11-05 10:01:07
 * @LastEditors: Louis
 * @LastEditTime: 2019-11-05 10:02:18
 * @Description:
 -->
<template>
    <svg
        class="l-icon"
        aria-hidden="true"
        @click="clickIconInfo"
    >
        <use :xlink:href="'#icon-'+ name"></use>
    </svg>
</template>
<script>
  export default {
    name: "lIcon",
    props: {
      name: {
        type: String,
        default: ""
      }
    },
    methods: {
      clickIconInfo() {
        this.$emit("click")
      }
    }
  };
</script>
<style lang="scss">
.l-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
    box-sizing: border-box;
}
</style>
