<template>
    <div id="app">
        <vueExcel
          row="5"
          col="5"
        >
        </vueExcel>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        tableData: []
      }
    }
  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
