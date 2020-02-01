<template>
   <goodslist  :goods="categorydetail.data"></goodslist>
</template>

<script>
    import gridview from '../../../components/common/gridView/GridView'
    import goodsitem from '../../../components/content/goods/goodsitme'
    import goodslist from '../../../components/content/goods/goodslist'

	export default {
        name: "",
        components:{
            gridview,
            goodslist
        },
    created(){
    console.log(categorydetail)

    },
    props: {
        categorydetail: {
        type: Array,
        default() {
          return []
        }
      }
	
    },
    
    methods: {
    },
    
	}
</script>

<style scoped>
  
</style>