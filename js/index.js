// 简易版eventBus
var bus = {
  callbacks: {},
  on(eventName,fn){
    this.callbacks[eventName] = fn
  },
  emit(eventName){
    this.callbacks[eventName]()
  }
}

$('header li').click(function(){
  const index = $(this).index()
  $('.container').css({
    transform: `translateY(-${index*100}vh)`
  })
  if(index === 1){
    bus.emit('play')  
  }
})

