<template>
	  <master-brand></master-brand>
    <router-view></router-view>
    <user-basket :basket="userBasket"></user-basket>
</template>

<script>
import Basket from './class/basket';
import userBasket from './view/user-basket';
import masterBrand from './view/master-brand';

export default {
  components:{
    userBasket,
  	masterBrand
  }, 
  replace: false,
  data () {
    return {
      userBasket:new Basket()
    };
  }
};
</script>

<style lang="sass">
#main-logo {
	display: inline-block;
}
</style>