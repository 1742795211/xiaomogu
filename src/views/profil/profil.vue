<template>
  <div id="profil">
    <navbar class="navbar"><div slot="center">小蘑菇</div></navbar>
      <userinfo></userinfo>
     <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    
      <div id="list">
        <div class="item">
          <span class="icon">
            <img src="../../assets/img/profile/xiaoxi.png">
          </span>
        </div>
        <div class="info">我的消息</div>
      </div>
       <div id="list">

        <div class="item">
          <span class="icon">
            <img src="../../assets/img/profile/shangcheng.png">
          </span>
        </div>
        <div class="info">积分商城</div>
      </div>

       <div id="list" class="list">
        <div class="item">
          <span class="icon">
            <img src="../../assets/img/profile/huiyuan.png">
          </span>
        </div>
        <div class="info">会员卡</div>
      </div>

      <div id="list" >
        <div class="item">
          <span class="icon">
            <img src="../../assets/img/profile/ziliao.png">
          </span>
        </div>
        <div class="info">账户信息</div>
      </div>

      <div id="list" >
        <div class="item">
          <span class="icon">
            <img src="../../assets/img/profile/xingxing.png">
          </span>
        </div>
        <div class="info">应用版本</div>
      </div>
      

     



     

    
    
   
  </div>
</template>

<script>
  
  import navbar from '../../components/common/navbar/navbar'
  import userinfo from './profilchild/userinfo'
 
	export default {
		name: "profil",
    components: {
      navbar,
      userinfo,
     
    },
    data: function () {
		  return {
		    orderlist: [
          '我的消息',
         '积分商城',
          '会员卡',
          '我的购物车',
         '下载购物APP',
        ],
       
      }
    },
    mounted: function () {
    }
	}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .account {
    display: flex;
     border-bottom: 10px solid rgba(100, 100, 100, .1);
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }



  #list {
    background-color:#fff;
    font-size: 15px;
    color: #333;
    position: relative;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  
  .icon img {
    width: 18px;
    height: 18px;
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }
  .info{
    position: absolute;
    left: 50px;
    top: 0px;
    line-height: 44px;
    height: 44px;
    width: 80%;
   border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .item .info {
    margin-left: 40px;
    
    padding-left: 5px;
  }
  

  .item:last-of-type .info {
    border-bottom: none;
  }
  .list{
     border-bottom: 10px solid rgba(100, 100, 100, .1);
  }

</style>
