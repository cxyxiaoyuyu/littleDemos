css = `
/* 
  大家好 这个页面送给大家一个皮卡丘 
  首先将背景置为皮卡丘的黄色
*/
.page2 {
  background: #f8f0a9;
}
/* 准备放置皮卡丘的容器 */
.pikachuWrap {
  width: 420px; 
  height: 235px;
  margin: 150px auto;
  position: relative;
}
/* 先画一个鼻子 */
.nose {
  position: absolute;
  top: 38px;
  left: calc(50% - 14px);
  border-radius: 40%;
  border: 14px solid;
  border-color: black transparent transparent transparent;
}
/* 接着画它的两个眼睛 */
.eye {
  position: absolute;
  width: 57px;
  height: 57px;
  border-radius: 100%;
  background: #2e2e2e;
  border: 3px solid black;
}
.eye.left {
  left: 60px;
}
.eye.right {
  right: 60px;
}
/* 这是皮卡丘的眼珠 */
.eye:after {
  width: 25px;
  height: 25px;
  border: 2px solid black;
  background: #fff;
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
  left: 7px;
  top: -1px;
}
/* 这是皮卡丘的腮红 哈哈 */
.face {
  background: #f00;
  width: 82px;
  height: 82px; 
  border-radius: 50%;
  position: absolute;
  top: 110px;
  border: 3px solid black;
}
.face.right {
  right: 0;
}
/* 再画皮卡丘的上嘴唇 */
.uplip {
  width: 80px;
  height: 25px;
  border: 3px solid black;
  position: absolute;
  top: 60px;
  background: #f8f0a9;
}
.uplip.left {
  border-bottom-left-radius: 60px 30px;
  right: 50%;
  border-right: none;
  border-top: none;
  transform: rotate(-25deg);
}
.uplip.left:after {
  display: block;
  content: '';
  position: absolute;
  width: 28px;
  height: 20px;
  background: #f8f0a9;
  bottom: 14px;
  left: 8px;
}
.uplip.right {
  border-bottom-right-radius: 60px 30px;
  left: 50%;
  border-left: none;
  border-top: none;
  transform: rotate(25deg);
}
.uplip.right:after {
  display: block;
  content: '';
  position: absolute;
  width: 28px;
  height: 20px;
  background: #f8f0a9;
  bottom: 14px;
  right: 8px;
}
/* 这是皮卡丘的嘴巴 */
.month {
  height: 169px;
  width: 228px;
  position: absolute;
  overflow: hidden;
  top: 65px;
  left: 50%;
  margin-left: -114px;
}
.lowlip {
  width: 228px;
  height: 800px;
  border: 4px solid black;
  background: red;
  border-bottom-left-radius: 7em 48em;
  border-bottom-right-radius: 7em 48em;
  bottom: 0;
  position: absolute;
  overflow: hidden;
}
/* 最后 这是它的舌头 */
.tongue {
  width: 216px;
  height: 231px;
  position: absolute;
  background: #ff485f;
  bottom: -96px;
  border-radius: 51%;
}`;

let clock 

bus.on('play',function(){
  if(clock) return
  play()
})

$(".replay").click(function () {
  console.log("xxxx");
  code.innerHTML = ''
  style.innerHTML = ''
  code.scrollTop = 0
  play()
});

function play() {
  clock && clearInterval(clock) 

  var n = 0;
  clock = setInterval(() => {
    n += 1;
    code.innerHTML = css.substring(0, n);
    code.scrollTop = code.scrollHeight;
    style.innerHTML = css.substring(0, n);
    if (n === css.length) {
      clearInterval(clock);
    }
  }, 10);
}
