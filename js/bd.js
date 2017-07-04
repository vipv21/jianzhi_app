var aarr=["职位","区域","排序"];
var swiper = new Swiper('.swiper-containerdao', {
	pagination: '.swiper-paginationbottom',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (aarr[index]) + '</span>';
    }
});