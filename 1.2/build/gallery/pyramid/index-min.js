/*! kcharts - v1.2 - 2013-10-18 5:12:47 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/gallery/pyramid/index",function(t){function e(t,e,l,i,r,n){this._init(t,e,l,i,r,n)}var l=t.all;return t.augment(e,{_init:function(t,e,i,r,n,s){function a(t,l,i,n,a,o,c,h,x,y){w=g.path("M "+e/2+" 0 l 0 "+h*t+" l "+c*t/2+" 0 ").attr({fill:l,stroke:i});var f=200*e/330-4;x||(x="#fff"),10>Math.round(100*o)&&(r?f=-1e4:(x=s,f+=9*(c*t/2)/10));var u="14px";y&&(u="12px"),g.text(f,n,a+":"+Math.round(100*o)+"%").attr({fill:x,"font-size":u})}l("#"+t).html(""),i[0].d.sort(function(t,e){return t[0]-e[0]}),i[1].d.sort(function(t,e){return t[0]-e[0]});for(var o=0,c=[],h=0;i[0].d.length>h;h++)o+=i[0].d[h][0];for(var h=0;i[0].d.length>h;h++)c[h]=i[0].d[h][0]/o;for(var x=0,y=[],h=0;i[1].d.length>h;h++)x+=i[1].d[h][0];for(var h=0;i[1].d.length>h;h++)y[h]=i[1].d[h][0]/x;var e=e,f=.88,u=Math.round(e*f),d=i[0].p[0],p=i[1].p[0],g=new Raphael(t,e,u),v="",m="",_="",b="";n||(n="#ee5949"),s||(s="#74aed2"),r?(v=n,m="rgb(209,209,209)",_="#000",b="#fff"):(v="rgb(209,209,209)",m=s,_="rgb(154,154,154)",b="#fff");var w=g.path("M "+e/2+" 0 l "+e/2+" "+u+" l -"+e+" 0");w.attr({fill:"#ccc",stroke:"none"}),w=g.path("M "+e/2+" 0 l 0 "+u+" l -"+e/2+" 0").attr({fill:m,stroke:m}),g.text(90*e/330,260*u/290,i[1].p[1]).attr({fill:b,"font-size":"22px"}),g.text(90*e/330,280*u/290,i[1].p[2]+" : "+Math.round(100*p)+"%").attr({fill:b,"font-size":"16px"}),w=g.path("M "+e/2+" 0 l 0 "+d*u+" l -"+d*e/2+" 0").attr({fill:v,stroke:v}),g.text(120*e/330,d*u-50,i[0].p[1]).attr({fill:_,"font-size":"22px"}),g.text(120*e/330,d*u-30,i[0].p[2]+":").attr({fill:_,"font-size":"16px"}),g.text(120*e/330,d*u-10,Math.round(100*d)+"%").attr({fill:_,"font-size":"16px"});var k=i[0].d.length,C=i[1].d.length;a(1,m,m,280*u/290+3,i[1].d[C-1][1],i[1].d[C-1][0],e,u,b,!0);for(var S=0,h=C-2;h>=0;h--)S+=y[h+1]*p,a(1-S,m,"#fff",(1-S)*u-6,i[1].d[h][1],i[1].d[h][0],e,u,b,!0);a(1,v,"#fff",d*u-8,i[0].d[k-1][1],i[0].d[k-1][0],d*e,d*u,_);for(var L=0,h=k-2;h>0;h--)L+=c[h+1],a(1-L,v,"#fff",(1-L)*u*d-8,i[0].d[h][1],i[0].d[h][0],d*e,d*u,_);var A=i[0].d[0][0];a(c[0],v,"#fff",A*d*u-8,i[0].d[0][1],i[0].d[0][0],d*e,d*u,_);var w=g.path("M "+e/2+" 0 l 0 "+u);w.attr({stroke:"#fff"})}}),e},{requires:["gallery/kcharts/1.2/raphael/index"]});