/*! kcharts - v1.3 - 2014-01-16 12:24:52 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/basechart/common",function(t,e){function a(e,a){if(e._cfg.title.isShow){var r=e.htmlPaper,n=a+"-title",i=e._cfg,o=e.getInnerContainer(),s=.6*o.y;e._title=r.rect(o.x,0,o.width,s).addClass(n).css(t.mix({"line-height":s+"px"},i.title.css)).html(i.title.content)}}function r(e,a){if(e._cfg.subTitle.isShow){var r=e.htmlPaper,n=a+"-subtitle",i=e._cfg,o=e.getInnerContainer(),s=.4*o.y;e._subTitle=r.rect(o.x,.6*o.y,o.width,s).addClass(n).css(t.mix({"line-height":s+"px"},i.subTitle.css)).html(i.subTitle.content)}}function n(t){if(t._cfg.xAxis.isShow){var e=t.getInnerContainer(),a=e.bl,r=e.width,n=t.htmlPaper,i=t._cfg.themeCls+"-axisx";return t._axisX=n.lineX(a.x,a.y,r).addClass(i).css(t._cfg.xAxis.css||{}),t._axisX}}function i(t){if(t._cfg.yAxis.isShow){var e=t.getInnerContainer(),a=e.tl,r=e.height,n=t.htmlPaper,i=t._cfg.themeCls+"-axisy";return t._axisY=n.lineY(a.x,a.y,r).addClass(i).css(t._cfg.yAxis.css||{}),t._axisY}}function o(t){if(t._cfg.yGrids.isShow){var e=t.getInnerContainer(),a=e.x,r=t._pointsY;t._cfg.yGrids.template;for(var n=0,i=r.length;i>n;n++)t._gridsY[n]={0:l(t,{x:a,y:r[n].y,index:n}),x:a,y:r[n].y,num:r[n].number}}}function s(t){if(t._cfg.xGrids.isShow){var e,a=t._points[0],r=t.getInnerContainer();if(t._gridsX=[],"x"==t._cfg.zoomType){e=function(){var t=a.length,e=[];if(t>1){var r=(a[1].x-a[0].x)/2;e.push({x:a[0].x-r});for(var n in a)e.push({x:a[n].x- -r})}return e}();for(var n=0,i=e.length;i>n;n++)t._gridsX[n]={0:c(t,{index:n,x:e[n].x}),x:e[n].x,y:r.bl.y,index:n,num:t.coordNum[n]}}else for(var n in t._pointsX)t._gridsX[n]={index:n,0:c(t,{index:n,x:t._pointsX[n].x}),x:t._pointsX[n].x,y:r.bl.y,num:t.coordNumX[n]};return t._gridsX}}function c(a,r,n){if(a._cfg.xGrids.isShow){var i=a.getInnerContainer(),n=n||a._cfg.xGrids.css,o=a.htmlPaper,s=a._cfg.themeCls+"-gridsx",c=a._cfg.xGrids.template,l={index:r.index,paper:o,x:r.x,y:i.tl.y,height:i.height,css:n,className:s,chart:a};return c?t.isFunction(c)?c(l):e(c).render({data:l}):o.lineY(r.x,i.tl.y,i.height).addClass(s).css(n)}}function l(a,r,n){if(a._cfg.yGrids.isShow){var i=a.getInnerContainer(),n=n||a._cfg.yGrids.css,o=a.htmlPaper,s=a._cfg.themeCls+"-gridsy",c=a._cfg.yGrids.template,l={index:r.index,paper:o,x:i.x,y:r.y,width:i.width,css:n,className:s,chart:a};return c?t.isFunction(c)?c(l):e(c).render({data:l}):o.lineX(i.x,r.y,i.width).addClass(s).css(n)}}function d(t){if(t._cfg.yLabels.isShow){var e=t.getInnerContainer();for(var a in t._pointsY)t._labelY[a]={0:h(t,a,t._pointsY[a].number),num:t._pointsY[a].number,x:e.x,y:t._pointsY[a].y};return t._labelY}}function f(t){if(t._cfg.xLabels.isShow)for(var e in t._pointsX)t._labelX[e]={0:u(t,e,t._pointsX[e].number),num:t._pointsX[e].number,x:t._pointsX[e].x,y:t._pointsX[e].y}}function u(a,r,n){if(a._cfg.xLabels.isShow){var i,o=a.htmlPaper,s=a._pointsX.length||0,c=a._cfg.themeCls+"-xlabels",l="{{data}}",d="";return s>r?(l=a._cfg.xLabels.template||l,d=t.isFunction(l)?l(r,n):e(l).render({data:n}),i=o.text(a._pointsX[r].x,a._pointsX[r].y,"<span class="+c+">"+d+"</span>","center"),i.children().css(a._cfg.xLabels.css),i):void 0}}function h(a,r,n){if(a._cfg.yLabels.isShow){var i,o=a.htmlPaper,s=a._cfg.themeCls+"-ylabels",c="{{data}}",l="";return c=a._cfg.yLabels.template||c,l=t.isFunction(c)?c(r,n):e(c).render({data:n}),i=o.text(a._pointsY[r].x,a._pointsY[r].y,"<span class="+s+">"+l+"</span>","right","middle"),i.children().css(a._cfg.yLabels.css),i}}function p(t){function e(e,a,r,n,i){for(var o="_grids"+e,d="_label"+e,f=Math.max.apply(null,[t[d].length,t[o].length]),p=function(){t[o]=[],t[d]=[];for(var e in a)t[o][e]={0:a[e].grid,y:r[e].y,x:r[e].x,num:a[e].num},t[d][e]={0:a[e].lbl,y:r[e].y,x:r[e].x,num:a[e].num};for(var e in n)n[e].remove()},x=0;f>x;x++)(function(c){var l=t[d][c]?t[d][c].num:t[o][c].num,f=m(l,r,i);if(f&&void 0!==f.x&&void 0!==f.y){var u="Y"==e?{top:f.y+"px"}:{left:f.x+"px"};a.push({num:l,lbl:t[d][c]&&t[d][c][0]&&t[d][c][0].animate(u,s,"easeNone"),grid:t[o][c]&&t[o][c][0]&&t[o][c][0].animate(u,s,"easeNone")})}else{var u="Y"==e?{top:t[d][c]&&b(t[d][c]).y+"px",opacity:0}:{left:t[d][c]&&b(t[d][c]).x+"px",opacity:0};t[d][c]&&t[d][c][0]&&n.push(t[d][c][0].animate(u,s,"easeNone")),t[o][c]&&t[o][c][0]&&n.push(t[o][c][0].animate(u,s,"easeNone"))}})(x);for(var x in r)if(!_(r[x].number,i)){var g="Y"==e?b(r[x]).y+"px":b(r[x]).x+"px",y="Y"==e?{top:g,opacity:0}:{left:g,opacity:0},v="Y"==e?{top:r[x].y,opacity:1}:{left:r[x].x,opacity:1};if("Y"==e){var w=h(t,x,r[x].number),C=l(t,b(r[x]).y);a.push({num:r[x].number,lbl:w&&w.css(y).animate(v,s,"easeNone"),grid:C&&C.css(y).animate(v,s,"easeNone")})}else{var w=u(t,x,r[x].number),C=c(t,b(r[x]).x);a.push({num:r[x].number,lbl:w&&w.css(y).animate(v,s,"easeNone"),grid:C&&C.css(y).animate(v,s,"easeNone")})}}Array.prototype.sort.call(a,function(t,e){return t.num-e.num}),setTimeout(function(){p()},500)}var a=t._cfg,r=a.zoomType,n=t._pointsY,i=t._pointsX,o=t.getInnerContainer(),s=.5,d=[],f=[],p=[],x=[],g=[],y=[],m=function(t,e,a){for(var r in e)if(t===e[r].number)return a.push(t),e[r]},b=function(t){if(t){var e=Math.min.apply(null,[a.canvasAttr.x,a.canvasAttr.y])/2,n=o.y+o.height/2,i=o.x+o.width/2;switch(r){case"x":return{y:t.y>n?o.bl.y+e:o.y-e,x:t.x};case"y":return{x:t.x>i?o.br.x+e:o.x-e,y:t.y};case"xy":return{y:t.y>n?o.bl.y+e:o.y-e,x:t.x>i?o.br.x+e:o.x-e}}}};switch(r){case"x":e("Y",g,n,p,d);break;case"y":e("X",y,i,x,f);break;case"xy":e("X",y,i,x,f),e("Y",g,n,p,d)}}function x(t){var e=0;for(var a in t)t[a].x&&t[a].y&&e++;return e}function g(t,e){var a="",r=(t._innerContainer.bl.y,x(e)),n=0;if(!e)return"";if(n=function(){for(var a in e)if(!t.isEmptyPoint(e[a]))return Math.round(a)}(),a+="M"+e[n].x+","+e[n].y,"arc"==t._cfg.lineType&&r>2){a+=" R";for(var i=n+1,r=e.length;r>i;i++)e[i].x&&e[i].y&&(a+=e[i].x+","+e[i].y+" ")}else for(var i=n+1,r=e.length;r>i;i++)e[i].x&&e[i].y&&(a+=" L"+e[i].x+","+e[i].y);return a}function _(t,e){for(var a in e)if(e[a]===t)return!0;return!1}return{drawTitle:a,drawSubTitle:r,drawAxisX:n,drawAxisY:i,drawGridsX:s,drawGridX:c,drawGridY:l,drawGridsY:o,drawLabelsX:f,drawLabelsY:d,drawLabelX:u,drawLabelY:h,animateGridsAndLabels:p,getLinePath:g,isInArray:_}},{requires:["gallery/template/1.0/index"]}),KISSY.add("gallery/kcharts/1.3/basechart/index",function(t,e,a,r){var n,i=t.all,o=!1,s=!1,c={init:function(e){e||(e=this.userConfig);var a=this,r=a._cfg;if(e&&e.renderTo){if(!a.__isInited){r=a._cfg=t.mix({autoRender:!0,zIndex:0,yAxis:{spacing:{top:0,bottom:0}},xAxis:{spacing:{left:0,right:0}},canvasAttr:{x:60,y:60},zoomType:"x"},e,void 0,void 0,!0),a._$ctnNode=i("<div></div>").css({position:"absolute",width:i(e.renderTo).width(),height:i(e.renderTo).height(),"-webkit-text-size-adjust":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)"}).prependTo(i(e.renderTo)),a.createContainer(),t.mix(a,{_datas:{cur:{},total:{}},_points:{},_centerPoints:[],_pointsX:[],_pointsY:[],_gridsX:[],_gridsY:[],_areas:[],_axisX:null,_axisY:null,_labelX:[],_labelY:[],_evtEls:[],_gridPoints:[],stackable:!1});for(var n in Array.prototype)delete Array.prototype[n]}"barchart"==a.chartType&&(r.xAxis.min=0,r.yAxis.min=0),a.__setData(),a.onResize(),a.__isInited=1}},__setData:function(){var t=this,e=t._cfg.series;if(e&&!(0>=e.length)&&e[0].data)for(var a in e)t._datas.total[a]={index:a,data:e[a].data},t._datas.cur[a]={index:a,data:e[a].data}},dataFormat:function(){var t,e,a,r,n,i,o,s=this,c=s._cfg,l=c.zoomType,d=s._innerContainer,f=c.xAxis.spacing?s.px2num(c.xAxis.spacing.left):0,u=c.xAxis.spacing?s.px2num(c.xAxis.spacing.right):0,h=c.yAxis.spacing?s.px2num(c.yAxis.spacing.top):0,p=c.yAxis.spacing?s.px2num(c.yAxis.spacing.bottom):0,x=d.width-f-u,g=d.height-h-p,_=d.x/1+f,y=d.y/1+h;switch(s._pointsY=[],s._pointsX=[],l){case"x":t=s.getAllDatas(),o=a=s.coordNum=s._getScales(t,c.yAxis),n=s.data2GrapicData(a,!1,!0);break;case"y":e=s.getAllDatas(),o=r=s.coordNumX=s._getScales(e,c.xAxis),i=s.data2GrapicData(r,!0,!1);break;case"xy":t=s.getAllDatas(0),e=s.getAllDatas(1),o=a=s.coordNum=s._getScales(t,c.xAxis),r=s.coordNumX=s._getScales(e,c.yAxis),n=s.data2GrapicData(a,!1,!1),i=s.data2GrapicData(r,!0,!0)}var m=function(t,e,a){var r=c.series[e],n=Math.max.apply(null,a),i=Math.min.apply(null,a),o=[];switch(s.getDataType(),l){case"x":for(var d in s._pointsX)o[d]=""===t[d]||null===t[d]?{x:s._pointsX[d].x,index:Math.round(d)}:{x:s._pointsX[d].x,y:s.data2Grapic(t[d],n,i,g,y,!0),dataInfo:{y:t[d],x:c.xAxis.text[d]},index:Math.round(d)};break;case"y":for(var d in s._pointsY)o[d]={x:s.data2Grapic(t[d],n,i,x,_),y:s._pointsY[d].y,dataInfo:{y:t[d],x:c.yAxis.text[d]},index:Math.round(d)};break;case"xy":var f=s.data2GrapicData(s.getArrayByKey(r.data,0)),u=s.data2GrapicData(s.getArrayByKey(r.data,1),!0,!0);for(var d in r.data)o[d]={x:f[d],y:u[d],dataInfo:{y:t[d]},index:Math.round(d)}}return o};switch(l){case"x":for(var b in n)s._pointsY[b]={number:a[b]+"",y:n[b],x:_};try{s._gridPoints=s.getSplitPoints(_,y+g,_+x,y+g,c.xAxis.text.length,!0),s._pointsX=s.getCenterPoints(s._gridPoints);for(var b in c.xAxis.text)s._pointsX[b].number=c.xAxis.text[b]}catch(v){throw Error("未配置正确的xAxis.text数组")}break;case"y":for(var b in i)s._pointsX[b]={number:r[b]+"",y:y+g,x:i[b]};try{s._pointsY=s.getSplitPoints(_,y,_,y+g,c.yAxis.text.length+1);for(var b in c.yAxis.text)s._pointsY[b].number=c.yAxis.text[b]}catch(v){throw Error("未配置正确的yAxis.text数组")}break;case"xy":for(var b in i)s._pointsY[b]={number:r[b]+"",y:i[b],x:_};for(var b in n)s._pointsX[b]={number:a[b]+"",y:y+g,x:n[b]}}for(var b in s._datas.cur)s._points[b]=m(s._datas.cur[b].data,b,o)},removeData:function(t){var e=this;delete e._datas.cur[t],e.dataFormat()},recoveryData:function(t){var e=this;e._datas.cur[t]=e._datas.total[t],e.dataFormat()},createContainer:function(){var t=this,e=t._$ctnNode,a=t._cfg.canvasAttr,r=a.width||e.width()-2*a.x,n=a.height||e.height()-2*a.y,i=a.x,o=a.y,s=r,c=n,l={x:i,y:o},d={x:i+r,y:o},f={x:i,y:o+c},u={x:i+r,y:o+c};t._innerContainer={x:i,y:o,width:s,height:c,tl:l,tr:d,bl:f,br:u}},getInnerContainer:function(){return this._innerContainer},getAllDatas:function(){var e,a=this,r=a._cfg,n=[],i=r.zoomType,o=arguments[0];if(a.getDataType(),r.stackable)for(var s in a._datas.cur){t.isArray(a._datas.cur[s].data)&&(e=a._datas.cur[s].data);for(var c in e)n[c]=n[c]?e[c]-0+(n[c]-0):e[c]}else for(var s in a._datas.cur)t.isArray(a._datas.cur[s].data)&&(e="xy"==i?a.getArrayByKey(a._datas.cur[s].data,o):a._datas.cur[s].data),n.push(e.join(","));return n.length?n.join(",").split(","):[]},getDataType:function(){var e=this;if(e._datas.total[0]&&e._datas.total[0].data)for(var a in e._datas.total[0].data){if(t.isPlainObject(e._datas.total[0].data[a]))return"object";if(t.isNumber(e._datas.total[0].data[a]-0))return"number"}},_getScales:function(e,a){var r=this;if(a.text&&t.isArray(a.text))return a.text;var n=a.max/1,i=a.min/1,c=a.num||5,l=Math.max.apply(null,e),d=Math.min.apply(null,e);o=0>=l?1:0,s=d>=0?1:0;var f=.1*(l-d),u=n||0==n?n>=l?n:l+f:l+f,h=i||0==i?d>=i?i:d-f:d-f;return r.getScales(u,h,c)},data2GrapicData:function(e,a,r){if(void 0!==e){var n,i=this,o=i._innerContainer,s=a?o.x:o.y,c=o.height,l=o.width,d=i._cfg.zoomType,f=a?Math.max.apply(null,i.coordNumX):Math.max.apply(null,i.coordNum),u=a?Math.min.apply(null,i.coordNumX):Math.min.apply(null,i.coordNum),h=[];switch(d){case"xy":n=a?c:l;break;case"x":n=c;break;case"y":n=l}if(t.isArray(e)){for(var p in e)h.push(i.data2Grapic(e[p],f,u,n,s,r));return h}return i.data2Grapic(e,f,u,n,s,r)}},data2Grapic:function(t,e,a,r,n,i){return 0>=e-a?void 0:i?r*(1-(t-a)/(e-a))+n:r*(t-a)/(e-a)+n},getSplitPoints:function(t,e,a,r,n,i){var o=(a-t)/n,s=(r-e)/n,c=[];i&&c.push({x:t,y:e});for(var l=0;n-1>l;l++)c.push({x:t+(l+1)*o,y:e+(l+1)*s});return i&&c.push({x:a,y:r}),c},getCenterPoints:function(t){var e=[],a=t.length;if(a>1)for(var r=0;a-1>r;r++)e[r]={x:(t[r].x+t[r+1].x)/2,y:(t[r].y+t[r+1].y)/2};return e},getScales:function(t,e,a){var r,n,i,c,l,d,f,u=this,h=Math.log,p=Math.pow,x=[],g=0;if(!(e>=t)){for(r=(t-e)/a,i=Math.floor(h(r)/h(10))+1,n=r/p(10,i),n=n>0&&.1>=n?.1:n>.1&&.2>=n?.2:n>.2&&.25>=n?.25:n>.25&&.5>=n?.5:1,c=n*p(10,i),f=(t+e)/2-(t+e)/2%c,l=d=f;l>e;)l-=c;for(;t>d;)d+=c;if(u.isFloat(c)){var _=c+"";_.indexOf(".")>-1&&(g=_.split(".")[1].length>4?4:_.split(".")[1].length)}for(var y=l;d>=y;y+=c)x.push(parseFloat(y).toFixed(g));if(o)for(y in x)x[y]>0&&x.splice(y,1);else if(s)for(y in x)0>x[y]&&x.splice(y,1);return x}},arraySort:function(t,e,a){return t.sort(function(t,r){return e?"object"==typeof t&&"object"==typeof r?r[a]-t[a]:r-t:"object"==typeof t&&"object"==typeof r?t[a]-r[a]:t-r})},getArrayByKey:function(e,a){var r=[];for(var n in e)(e[n][a]||t.isNumber(e[n][a]))&&r.push(e[n][a]);return r},isFloat:function(t){return/^([+-]?)\d*\.\d+$/.test(t)},obj2Array:function(t,e){var a=[];for(var r in t)a.push(e?t[e]:t[r]);return a},getObjKeys:function(t){var e=[];for(b in t)e.push(b);return e},isInSide:function(t,e,a,r,n,i){return t>a&&a- -n>t&&e>r&&r- -i>e?!0:!1},px2num:function(t){var t=t||0;return Math.round((t+"").replace(/\s+|px/g,"")),Math.round((t+"").replace(/\s+|px/g,""))},getOffset:function(e){var a=e.currentTarget;if(e.offsetX)return{offsetX:e.offsetX,offsetY:e.offsetY};var r=t.DOM.offset(a);return{offsetX:e.offsetX||e.clientX-r.left,offsetY:e.offsetY||e.clientY-r.top}},getConfig:function(){return this._cfg},setConfig:function(e){this._cfg=t.mix(this._cfg,e,void 0,void 0,!0),this.__setData()},onResize:function(){var t=this,e=t._$ctnNode,a=e.width(),r=e.height();!t.__isResizeBind&&i(window).on("resize",function(){t.__isResizeBind=1,(e.width()!=a||e.height()!=r)&&(a=e.width(),r=e.height(),t.fire("resize"))})}};return e.extend?n=e.extend(c):(n=function(){},t.extend(n,e,c)),n.Common=r,n},{requires:["base","node","./common"]});