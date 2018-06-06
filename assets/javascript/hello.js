function hello (outputDOM,msg,t,c){
    let message="Hi E10";
    let timeout=0;
    let color='black'

    if(msg!=="" && msg!==undefined) message=msg;
    if(t!=="" && t!==undefined) timeout=t;
    if(c!="" && c!==undefined) color=c;
    
    for(var i=0;i<message.length;i++){
        (function(index) {
            setTimeout(function() {
                $(outputDOM).append(message.charAt(index))
            }, 1000*timeout*index);
        })(i);
    }
    if(color!=='#000000'&& color!=="#000" && color!="black"){
        setTimeout(()=>{
            $(outputDOM).fadeOut("slow", ()=>{
                $(outputDOM).css('color',color).fadeIn('slow')
            })
        },1000*timeout*message.length)
    }
}

