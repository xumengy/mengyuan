<template>
	<div id="app">
		<div class="title">Hello</div>
    <div class="title">{{en_var}}</div>
	</div>
</template>

<script>
  export default{
    name: 'APP',
    data() {
      return {
        en_var: ''
      }
    },
    created() {
      this.en_var = BASE_API
    },
    methods: {

    }
  }
</script>
<style>
.title{
  color: #f938ab;
}
</style>