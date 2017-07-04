var city=document.querySelector('.city');
var cityBox=document.querySelector('.city-box');
var mask=cityBox.querySelector('.mask');
var cityName=document.querySelector('.city-name');
var names;
city.addEventListener('touchstart',function(){
    cityBox.style.transform='translateX(0)';
})

mask.addEventListener('touchstart',function(){
    if(!names){
        cityName.innerText='太原'
    }else{

        cityName.innerText=names
    }
    cityBox.style.transform='translateX(-100%)';
})


//城市选择
var cityTop=document.querySelector('.city-top');
var span=cityTop.querySelector('span');
var lis=cityBox.querySelectorAll('li');

for(var i=0 ;i<lis.length;i++){
    lis[i].onclick=function(){

        for(var j=0;j<lis.length;j++){
            lis[j].classList.remove('active');
        }
        this.classList.add('active');
        names=this.querySelector('span').innerHTML;
        span.innerHTML=names
    }

}

