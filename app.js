setInterval(() => {
    let date=document.querySelector('.date')
    let hours=document.querySelector('.hours');
    let minutes=document.querySelector('.minutes');
    let seconds=document.querySelector('.seconds');
    let ampm=document.querySelector('.ampm');
    
    date.innerHTML = new Date().toDateString().slice(4);
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let am=h<=12?'am':'pm';
    
    h=h>12?h-12:h;
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    
    
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=am;
    
}, );

