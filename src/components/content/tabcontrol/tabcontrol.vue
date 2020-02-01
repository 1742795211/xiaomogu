<template>
    <div class="tabcontrol">
        <div    class="tabcontrol-item"      
        v-for="(item, index) in titles"  
        :key="index"  
        :class="{active:index === cuttentIndex}"
        @click="itmeclick(index)"
        >
            <span>{{item}}</span>
        </div>
    </div>

</template>
<script>


export default {
  name: 'tabcontrol',
    props:{
        titles:{
            type:Array,
            default(){
                return[];
            }
        }
    },
    data(){
        return{
            cuttentIndex:0
        }
    },
    methods:{
        itmeclick(index){
            this.cuttentIndex=index;
            this.$emit('tabClick',index)//向外部传参数
        }

    }
}
</script>

<style  scoped>
    .tabcontrol{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        


    }
    span{
        padding: 4px;

    }
    .tabcontrol-item{
        flex: 1;
        
    }

    .active{
        color: var(--color-tint);
    }
    .active span {
        border-bottom: 3px solid var(--color-tint);
        
    }


</style>