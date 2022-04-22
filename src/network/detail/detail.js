import { request } from "../request.js";
export function getdetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 整合要展示的信息类
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title,
      this.desc = itemInfo.desc,
      this.newPrice = itemInfo.price,
      this.oldPrice = itemInfo.oldPrice,
      this.colums = columns,
      this.services = services,
      this.realPrice = itemInfo.lowNowPrice
  }
}
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
