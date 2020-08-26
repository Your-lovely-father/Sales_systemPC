/*
@name: 格式化img
@description: 主要用于处理后台img拼接
@author: ZhiYuanWang
@time: 2020-08-26 11:24:35
*/
const BaseUrl = 'https://erp-report-shenyang.oss-cn-beijing.aliyuncs.com/';
// const EMPTY = require('../img/logo-ip.png');
export default {
    /**
     * @method 格式化图片
     * */
    formatImg(url) {
        if (url) {
            if (url) return BaseUrl + url;
        }
        // return EMPTY
    },
}
