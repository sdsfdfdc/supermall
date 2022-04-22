import { request } from "../request";
export function getCateGory() {
  return request({
    url: "/category"
  })
}
export function getCateGoryMaitKey(maitKey) {
  return request({
    url: "./subcategory",
    params: {
      maitKey
    }
  })
}
