import  {request} from  "./request"

export function getdetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }

    })

}

export function getRecommend(){
    return request({
        url:'/recommend',
      

    })
}






export class Goods{
    constructor(itemInfo,columns,sevices){
        this.title = itemInfo.title
        this.des = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.lowNowPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.sevices = sevices
        this.realPrice = itemInfo.lowNowPrice
    }

}
export class Shop{
    constructor(shopInfo){
        this.log = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }

}

export class DetailIfo{
    constructor(detailIfo){
        this.desc = detailIfo.desc;
        this.detailImage = detailIfo.detailImage;

      
     
    }

}

export class GoodsParam {
    constructor(info, rule) {
      this.image = info.images;
      this.infos = info.set;
      this.sizes = rule.tables;
      this.rule=rule;
    }
  }