javascript:
var b=document.body;
if(b&&!document.xmlVersion){
  z=document.createElement('iframe');
  z.src='https://plusone.google.com/_/+1/confirm?hl=en&url='+encodeURIComponent(document.location.href);
  b.appendChild(z);
  z.style.position='fixed';
  z.style.top='30px';
  z.style.right='10px';
  z.style.width='500px';
  z.style.height='500px';
  z.style.background='white';
  z.style.border='2px inset';
  z.style.zIndex='998';
  y=document.createElement('button');
  y.textContent='Close';
  b.appendChild(y);
  y.style.position='fixed';
  y.style.top='35px';
  y.style.right='15px';
  y.style.zIndex='999';
  y.onclick=function(){b.removeChild(z); b.removeChild(y)};
}
void(0)