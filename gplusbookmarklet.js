javascript:
var b=document.body;
if(b&&!document.xmlVersion){
  void(z=document.createElement('iframe'));
  void(z.src='https://plusone.google.com/_/+1/confirm?hl=en&url='+encodeURIComponent(document.location.href));
  void(b.appendChild(z));
  void(z.style.position='fixed');
  void(z.style.top='30px');
  void(z.style.right='10px');
  void(z.style.width='500px');
  void(z.style.height='300px');
  void(z.style.background='white');
  void(z.style.border='2px inset');
  void(z.style.zIndex='998');
  void(y=document.createElement('button'));
  void(y.textContent='Close');
  void(b.appendChild(y));
  void(y.style.position='fixed');
  void(y.style.top='35px');
  void(y.style.right='15px');
  void(y.style.zIndex='999');
  void(y.onclick=function(){b.removeChild(z); b.removeChild(y)});
}