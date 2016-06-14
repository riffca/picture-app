<template>
    <div id="master-brand">
	    <h1>Художественная мастерская
			<div id="brand-logo">
				<span>Краски</span>
				<span>Рисунки</span>
			</div>
		</h1>
		<div>
			<a v-link="{name: 'dry-brush'}">Сухая кисть</a>
			<a v-link="{name: 'oil'}">Масло</a>
			<a v-link="{name: 'contacts'}">Контакты</a>
			<a v-link="{name: 'index'}">Главная</a>
	    </div>
    </div>
</template>

<script>
export default {

  data () {
    return {

    };
  }
};
</script>
<style lang="sass">
	#master-brand{

	}
</style>