//收集数据
var letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//字母下落屏幕
var screen=$('.screen');
//计分器
var counters =$('.score');
//分数
var score=0;
//初始字母下落值
var len=3;
//初始关卡
var level =1;

function init_game(){
    $('.failed').hide();
    $('.success').hide();
    create_letter();
    down_letter();

    //绑定键盘事件
    window.onkeydown=key_down;
}
//暂停创建字母标记
var create_flag;
//创建字母
function create_letter(){
    create_flag=window.setInterval(function (){
        var divs=screen.children();
        if(len!=divs.length){
            var letter =$('<div class="letter"></div>')
            var math_left=Math.round(Math.random()*1600);
            var l=Math.random()*26+"";
            l=l.split('.')[0];

            letter.css({
                "background":"url(image/letters/"+letters[l]+".png) no-repeat",
                "top":"0px",
                "left":math_left+"px"
            });
            screen.append(letter);
        }
        else {}



    },1000);
}
//暂停字母下落标记
var down_flag;
//让字母下落
function down_letter(){
    down_flag=window.setInterval(function (){
        //获取所有div字母
        var divs=screen.children();
        for (var i = 0; i < divs.length; i++) {
            var div=$(divs[i]);
            //console.log(div);
            var top=div.css('top');
            top=parseInt(top)+1;
            if(700>top){
                div.css({
                    "top":top+"px"
                });
            }else{
                //游戏失败
                $('.screen').html('');
                stop_game();
                $('.failed').show();

                $('.score').html(0);
                score=0;
                len=3;
                level=1;
                $('.level_span').text(1);
            }
        }
    },20)
}
//暂停游戏
function stop_game(){
    clearInterval(create_flag);
    clearInterval(down_flag);
    //取消绑定事件
    window.onkeydown=null;
}

// window.onkeydown=function (){
//     console.log(event.cancelable)
// }
//按下键盘清除字母
function key_down(){
    //console.log(letters[event.keyCode-65]);
    //获取图片的字母值
    var divs=screen.children();
    for (var i = 0; i < divs.length; i++) {
        var div=$(divs[i]);
        var _str=div.css("background")[div.css("background").indexOf(letters[event.keyCode-65])];
        if(letters[event.keyCode-65]==_str){
            div.remove();
            score++;
            counters.html(score);
            //如果分数大于十分
            if(score>=10){
                len+=1;
                level+=1;
                $('.screen').html('');
                $('.score').html(0);
                score=0;
                $('.success').show();
                stop_game();
                $('.level_span').text(level);
            }
        }
    }

}