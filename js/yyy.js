var zhez=document.querySelector('.y-zhez');
var rent=document.querySelector('.y-return');
var rentimg=document.querySelector('.y-return>img');
var setz=document.querySelector('.y-set');
var setzimg=document.querySelector('.y-set>img');

zhez.addEventListener('touchend',function(){
	zhez.style.display='none';
})

rent.addEventListener('touchstart',function(){
	rentimg.src="images/jl/zuojicon.png";
})
rent.addEventListener('touchend',function(){
	rentimg.src="images/jl/zuojicon2.png";
})

setzimg.addEventListener('touchstart',function(){
	setzimg.src="images/jl/zhezicon.png";
})
setzimg.addEventListener('touchend',function(){
	setzimg.src="images/jl/zhezicon2.png";
})



// 摇一摇
var sphoto=document.querySelector('.y-bphoto');
var sous=document.querySelector('.y-sous');
sphoto.addEventListener('touchend',function(){
	sous.style.display='block';
    var num=3;
    // clearInterval(t);
    var t=setInterval(function(){

        num--;
        if(num==0){
            window.location.href='grzx.html'
        }
    },1000)
})

//运动事件监听
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion',deviceMotionHandler,false);
}
var ops=document.querySelector('.y-som2 a')
//获取加速度信息
//通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
//而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
var SHAKE_THRESHOLD = 4000;
var last_update = 0;
var x, y, z, last_x = 0, last_y = 0, last_z = 0;
function deviceMotionHandler(eventData) {
        var acceleration =eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime-last_update)> 10) {
            var diffTime = curTime -last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {
                sous.style.display='block';  // Do something
            	
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
}