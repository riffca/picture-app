<template>

	  <master-brand></master-brand>	

    <router-view></router-view>
    
</template>

<script>
import masterBrand from './view/master-brand';
export default {
  components:{
  	masterBrand
  }, 
  replace: false,
  data () {
    return {
    };
  }
};
</script>

<style lang="sass">
#main-logo{
	display: inline-block;
}
</style>