<template>


          <tab-bar>
                  <tab-bar-itme  path="/home" activeColor="#d4237a">
                      <img  slot="imte-icom1" src="../../../assets/img/profile/shouye1.png"/>
                      <img slot="imte-icom" src="../../../assets/img/profile/shouye.png"/>
                      <div slot="imte-text">首页</div>
                  </tab-bar-itme  >
                  <tab-bar-itme path="/category" activeColor="#d4237a">
                      <img slot="imte-icom1" src="../../../assets/img/profile/fenlei1.png"/>
                      <img slot="imte-icom" src="../../../assets/img/profile/fenlei.png"/>
                      <div slot="imte-text">分类</div>
                  </tab-bar-itme>
                  <tab-bar-itme path="/cart" activeColor="#d4237a">
                    <img  slot="imte-icom1" src="../../../assets/img/profile/gouwuchekong1.png"/>
                      <img slot="imte-icom" src="../../../assets/img/profile/gouwuchekong.png"/>
                      <div slot="imte-text">购物车</div>
                  </tab-bar-itme>
                  <tab-bar-itme path="/profil" activeColor="#d4237a">
                     <img  slot="imte-icom1" src="../../../assets/img/profile/wode1.png"/>
                      <img slot="imte-icom" src="../../../assets/img/profile/wode.png"/>
                      <div slot="imte-text">我的</div>
                  </tab-bar-itme>
          </tab-bar>
</template>

<script>
    import TabBar from '../../common/tabber/TabBar'
    import TabBarItme from '../../common/tabber/tabbarimte'

    export default {
      name: 'MainTab',

      components:{
          TabBar,
          TabBarItme

      }
}
</script>

<style>
</style>
