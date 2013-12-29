/*! kcharts - v1.3 - 2013-12-24 11:57:25 AM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/barchart/theme",function(){var e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return e}),KISSY.add("gallery/kcharts/1.3/barchart/index",function(e,t,r,a,i,n,s,o,c,l,d,f,h){var _,p,g=e.all,u="ks-chart-",b=u+"default",x=b+"-canvas",m=u+"evtlayout",v=m+"-bars",w="{COLOR}",y={initializer:function(){this.init()},init:function(){this._cfg||(this._cfg=this.userConfig);var t=this;if(t.chartType="barchart",i.prototype.init.call(t,t._cfg),t._$ctnNode[0]){var r={themeCls:b,autoRender:!0,colors:[],stackable:!1,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{color:"#eee",zIndex:10},min:0},yAxis:{isShow:!0,css:{zIndex:10},num:5,min:0},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,css:{}},bars:{isShow:!0,css:{background:w,border:"1px solid #fff"},barsRatio:.6,barRatio:.5},legend:{isShow:!1},tip:{isShow:!0,template:"",css:{},anim:{easing:"easeOut",duration:.3},offset:{x:0,y:0},boundryDetect:!0,alignX:"right",alignY:"bottom"}};t._bars={},t._finished=[],b=t._cfg.themeCls||r.themeCls,t._cfg=e.mix(e.mix(r,l[b],d,d,!0),t._cfg,d,d,!0),t.color=_=new s({themeCls:b}),t._cfg.colors.length>0&&_.removeAllColors();for(var a in t._cfg.colors)_.setColor(t._cfg.colors[a]);t._cfg.autoRender&&t.render(!0)}},drawTitle:function(){if(this._cfg.title.isShow){var t=this,r=t.htmlPaper,a=b+"-title",i=t._cfg,n=t._innerContainer,s=.6*n.y;t._title=r.rect(0,0,t._$ctnNode.width(),s).addClass(a).css(e.mix({"line-height":s+"px"},i.title.css)).html(i.title.content)}},drawSubTitle:function(){if(this._cfg.subTitle.isShow){var t=this,r=t.htmlPaper,a=b+"-subtitle",i=t._cfg,n=t._innerContainer,s=.4*n.y;t._subTitle=r.rect(0,.6*n.y,t._$ctnNode.width(),s).addClass(a).css(e.mix({"line-height":s+"px"},i.subTitle.css)).html(i.subTitle.content)}},drawBar:function(t,r,a){var n,s=this,o=s._cfg,c=s.paper,l=x+"-bars",d=s._innerContainer,f=s.color.getColor(t).DEFAULT,h=s.processAttr(o.bars.css,f),_="x"==o.zoomType?!1:!0,p=s._barsPos[t][r],g=(p.x-0).toFixed(2),u=(p.y-0).toFixed(2),b=(p.width-0).toFixed(2),m=(p.height-0).toFixed(2);if(o.anim){var v=o.anim.duration?e.isNumber(o.anim.duration)?o.anim.duration:.5:.5,w=o.anim.easing?o.anim.easing:"easeOut";if(_){var y=i.prototype.data2GrapicData.call(s,0,!0,!1);n=c.rect(y,u,0,m).attr({posx:g,posy:u}).addClass(l).css(h).animate({width:b,marginLeft:g-d.x},v,w,function(){a&&a()})}else{var C=i.prototype.data2GrapicData.call(s,0,!1,!0);n=c.rect(g,C,b,0).attr({posx:g,posy:u}).addClass(l).css(h).animate({height:m,marginTop:u-d.y},v,w,function(){a&&a()})}}else n=c.rect(g,u,b,m).attr({posx:g,posy:u}).addClass(l).css(h),a&&a();return n},getBarsPos:function(){var e=this,t=e._cfg.zoomType,r=e._cfg.stackable,a=e._innerContainer,n="y"==t,s=r?1:i.prototype.obj2Array(e._clonePoints).length,o=e._cfg.bars.barsRatio,c=e._cfg.bars.barRatio,l=n?e._pointsY.length>1?e._pointsY[1].y-e._pointsY[0].y:a.height:e._pointsX.length>1?e._pointsX[1].x-e._pointsX[0].x:a.width,d=l*o,f=c>=1?0:(1-c)/c,h=d/(s+(s-1)*f),_=h*(1-c)/c,p=r?0:h+_,g=(e._innerContainer.bl.y,e._innerContainer.bl.x),u=(l*(1-o)-l)/2,b=[];e._barsPos={};for(var x in e._points){var m=[];if(n){var v=i.prototype.data2GrapicData.call(e,0,!0,!1);for(var w in e._points[x]){var y={},C=e._points[x][w].x,L=Math.abs(C-v);y.y=u+e._points[x][w].y,r?(y.x=g+(b[w]||0),b[w]=b[w]?b[w]+L:L):y.x=C>v?C-L:v-L,y.width=L,y.height=h,m.push(y)}}else{var A=i.prototype.data2GrapicData.call(e,0,!1,!0);for(var w in e._points[x]){var y={},Y=e._points[x][w].y,X=Math.abs(A-Y);y.x=u+e._points[x][w].x,r?(y.y=Y-(b[w]||0),b[w]=b[w]?b[w]+X:X):y.y=Y>A?A:Y,y.width=h,y.height=X,m.push(y)}}u+=p,e._barsPos[x]=m}},drawBars:function(e){var t=this;t._cfg;for(var r in t._barsPos){var a=[],i=[];for(var n in t._barsPos[r]){var s=t._barsPos[r][n];i[n]=s,a[n]=t.drawBar(r,n,function(){t._finished.push(!0),e&&t._finished.length==t._cfg.series.length&&e()}).attr({barGroup:r,barIndex:n,defaultColor:_.getColor(r).DEFAULT,hoverColor:_.getColor(r).HOVER})}var o={bars:a,posInfos:i,color:_.getColor(r)};t._bars[r]=o}return t._bars},drawGridsX:function(){if(this._cfg.xGrids.isShow){var e,t=this,r=t._points[0];if(t._gridsX=[],"x"==t._cfg.zoomType){e=function(){var e=r.length,t=[];if(e>1){var a=(r[1].x-r[0].x)/2;t.push({x:r[0].x-a});for(var i in r)t.push({x:r[i].x- -a})}return t}();for(var a=0,i=e.length;i>a;a++)t._gridsX.push(t.drawGridX(e[a]))}else for(var a in t._pointsX)t._gridsX.push(t.drawGridX(t._pointsX[a]));return t._gridsX}},drawGridX:function(e,t){var r=this,a=r._innerContainer.tl.y,i=r._innerContainer.height,t=t||r._cfg.xAxis.css,n=r.htmlPaper,s=r._cfg.themeCls+"-gridsx";return n.lineY(e.x,a,i).addClass(s).css(r._cfg.xGrids.css)},drawGridY:function(e,t){var r=this,a=r._innerContainer.width,t=t||r._cfg.yGrids.css,i=r.htmlPaper,n=r._cfg.themeCls+"-gridsy";return i.lineX(e.x,e.y,a).addClass(n).css(t)},drawGridsY:function(){if(this._cfg.yGrids.isShow){var e=this,t=e._innerContainer.tl.x,r="x"==e._cfg.zoomType?!1:!0;e._gridsY=[];for(var a=0,i=e._pointsY.length;i>a;a++)e._gridsY[a]={0:e.drawGridY({x:t,y:e._pointsY[a].y}),num:r?e.coordNumX[a]:e.coordNum[a]}}},drawAxisX:function(){if(this._cfg.xAxis.isShow){var e=this,t=e._innerContainer,r=t.bl,a=t.width,i=e.htmlPaper,n=e._cfg.themeCls+"-axisx";return e._axisX=i.lineX(r.x,r.y,a).addClass(n).css(e._cfg.xAxis.css||{}),e._axisX}},drawAxisY:function(){if(this._cfg.yAxis.isShow){var e=this,t=e._innerContainer,r=t.tl,a=t.height,i=e.htmlPaper,n=e._cfg.themeCls+"-axisy";return e._axisY=i.lineY(r.x,r.y,a).addClass(n).css(e._cfg.yAxis.css||{}),e._axisY}},drawLabelsX:function(){if(this._cfg.xLabels.isShow){var e=this,t=e._cfg,r="y"==t.zoomType?!0:!1;if(r)for(var a in e._pointsX)e._labelX[a]={0:e.drawLabelX(a,e._pointsX[a].number)};else for(var a in e._cfg.xAxis.text)e._labelX[a]={0:e.drawLabelX(a,e._cfg.xAxis.text[a])}}},drawLabelsY:function(){if(this._cfg.yLabels.isShow){var e=this,t=e._cfg,r="x"==t.zoomType?!1:!0;if(r)for(var a in e._cfg.yAxis.text)e._labelY[a]={0:e.drawLabelY(a,e._cfg.yAxis.text[a])};else for(var a in e._pointsY)e._labelY[a]={0:e.drawLabelY(a,e._pointsY[a].number),num:e._pointsY[a].number}}},drawLabelX:function(t,r){var i,n=this,s=n.htmlPaper,o=n._pointsX,c=o.length||0,l=n._cfg.themeCls+"-xlabels",f="{{data}}",h="";return c>t?(f=n._cfg.xLabels.template||f,h=e.isFunction(f)?f(t,r):a(f).render({data:r}),i=o[t],i[0]=s.text(i.x,i.y,"<span class="+l+">"+h+"</span>","center").children().css(n._cfg.xLabels.css),i[0]):d},drawLabelY:function(t,r){var i=this,n=i.htmlPaper,s=i._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=i._cfg.yLabels.template||o,c=e.isFunction(o)?o(t,r):a(o).render({data:r}),c&&n.text(i._pointsY[t].x,i._pointsY[t].y,"<span class="+s+">"+c+"</span>","right","middle").children().css(i._cfg.yLabels.css)},renderTip:function(){if(this._cfg.tip.isShow){var t=this,r=t._cfg,a=t._innerContainer,i=r.tip.boundryDetect?{x:a.tl.x,y:a.tl.y,width:a.width,height:a.height}:{},n=e.mix(r.tip,{rootNode:t._$ctnNode,clsName:r.themeCls,boundry:i});return t.tip=new f(n),t.tip}},renderEvtLayout:function(){var e,t=this,r=t._innerContainer,a=(r.tl.y,t._points[0],r.height);t._multiple,t._evtEls._bars=[],e=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new o(t._$ctnNode,{clsName:m,prependTo:!1,width:r.width,height:a,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var i in t._barsPos){var n=[];for(var s in t._barsPos[i]){var c=t._barsPos[i][s];n[s]=e.rect(c.x,c.y,c.width,c.height).addClass(v).attr({barGroup:i,barIndex:s})}t._evtEls._bars.push(n)}return e},clearEvtLayout:function(){var e=this;if(e._evtEls._bars)for(var t in e._evtEls._bars)for(var r in e._evtEls._bars[t])e._evtEls._bars[t][r].remove()},renderLegend:function(){if(this._cfg.legend.isShow){var t=this,r=t._cfg.legend,a=r.container&&g(r.container)[0]?g(r.container):t._$ctnNode,i=t._innerContainer,n=t.color._colors,s=n.length,o=t._cfg,l=t._cfg.series,d=e.map(l,function(e,t){t%=s;var r={},a=n[t];return r.text=e.text,r.DEFAULT=a.DEFAULT,r.HOVER=a.HOVER,r}),f=e.merge({interval:20,iconright:5,showicon:!0},o.legend.globalConfig);return t.legend=new c({container:a,bbox:{width:i.width,height:i.height,left:i.x,top:i.y},align:o.legend.align||"bc",offset:o.legend.offset||(/t/g.test(o.legend.align)?[0,0]:[0,20]),globalConfig:f,config:d}),t.legend.on("click",function(e){var t=e.index,r=(e.text,e.icon,e.el);1!=r.hide?(this.hideBar(t),r.hide=1,r.disable()):(this.showBar(t),r.hide=0,r.enable())},this),t.legend}},render:function(t){var r=this,a=r._cfg,i=r._innerContainer,s=a.themeCls;t&&r._$ctnNode.html(""),r.raphaelPaper=n(r._$ctnNode[0],a.width,a.height),r.paper=new o(r._$ctnNode,{clsName:x,width:i.width,height:i.height,left:i.tl.x,top:i.tl.y}),r._clonePoints=r._points,r.getBarsPos(),r.htmlPaper=new o(r._$ctnNode,{clsName:s}),r.drawTitle(),r.drawSubTitle(),r.renderEvtLayout(),r.renderTip(),r.drawGridsX(),r.drawGridsY(),r.drawAxisX(),r.drawAxisY(),r.drawLabelsX(),r.drawLabelsY(),r.renderLegend(),r.drawBars(function(){r.afterRender(),r.fix2Resize()}),r.bindEvt(),e.log(r)},bindEvt:function(){var e=this,t=e._cfg;h.detach(g("."+v,e._$ctnNode),"mouseenter"),h.on(g("."+v,e._$ctnNode),"mouseenter",function(r){var a=g(r.currentTarget),i=a.attr("barIndex"),n=a.attr("barGroup");t.tip.isShow&&e.tipHandler(n,i),e.barChange(n,i)}),h.detach(g("."+v,e._$ctnNode),"click"),h.on(g("."+v,e._$ctnNode),"click",function(t){var r=g(t.currentTarget),a=r.attr("barIndex"),i=r.attr("barGroup");e.barClick(i,a)}),h.detach(g("."+v,e._$ctnNode),"mouseleave"),h.on(g("."+v,e._$ctnNode),"mouseleave",function(t){var r=g(t.currentTarget),a=r.attr("barIndex"),i=r.attr("barGroup"),n=e._bars[i].bars[a];n.css({background:n.attr("defaultColor")})}),h.detach(e._evtEls.paper.$paper,"mouseleave"),h.on(e._evtEls.paper.$paper,"mouseleave",function(){e.tip&&e.tip.hide(),e.paperLeave()})},paperLeave:function(){var e=this;e.fire("paperLeave",e)},barChange:function(t,r){var a=this,i=a._bars[t],n=e.mix({target:i.bars[r],currentTarget:i.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barChange",n)},barClick:function(t,r){var a=this,i=a._bars[t],n=e.mix({target:i.bars[r],currentTarget:i.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barClick",n)},tipHandler:function(t,r){var a=this,i=a._cfg,n=a.tip,s="y"==i.zoomType?!0:!1,o=(n.getInstance(),a._bars[t].bars[r]),c=o.attr("defaultColor"),l=a._cfg.tip.template,d=s?o.attr("posx")- -o.width()- -a._innerContainer.x:o.attr("posx"),f=o.attr("posy"),h=e.merge(a._points[t][r].dataInfo,i.series[t]);delete h.data,a._points[t][r].dataInfo,o.css({background:o.attr("hoverColor")}),l&&(e.mix(h,{groupindex:t,barindex:r}),n.fire("setcontent",{data:h}),n.fire("move",{x:d,y:f,style:a.processAttr(i.tip.css,c)}))},animateGridsAndLabels:function(){var e=this,t=e._cfg,r=t.zoomType;if("y"==r){for(var a in e._labelX)e._labelX[a]&&e._labelX[a][0]&&g(e._labelX[a][0]).remove();for(var a in e._gridsX)e._gridsX[a]&&e._gridsX[a][0]&&g(e._gridsX[a][0]).remove();e.drawLabelsX(),e.drawGridsX()}else if("x"==r){for(var a in e._labelY)e._labelY[a]&&e._labelY[a][0]&&e._labelY[a][0].remove();for(var a in e._gridsY)e._gridsY[a]&&e._gridsY[a][0]&&e._gridsY[a][0].remove();e.drawGridsY(),e.drawLabelsY()}},processAttr:function(t,r){var a=e.clone(t);for(var i in a)a[i]&&"string"==typeof a[i]&&(a[i]=a[i].replace(w,r));return a},showBar:function(t){var r=this,a=r._innerContainer;i.prototype.recoveryData.call(r,t),r._clonePoints[t]=r._points[t],r.animateGridsAndLabels(),r.getBarsPos();for(var n in r._bars)if(n!=t)for(var s in r._bars[n].bars)if(r._barsPos[n]){var o=r._barsPos[n][s];o&&r._bars[n].bars[s].stop().animate({height:o.height,width:o.width,marginTop:o.y-a.y,marginLeft:o.x-a.x},.4,"easeOut",function(){}),r._bars[n].bars[s].attr({posx:o.x,posy:o.y})}var c=[],l=[];for(var s in r._barsPos[t]){var o=r._barsPos[t][s];c[s]=o,l[s]=r.drawBar(t,s).attr({barGroup:t,barIndex:s,defaultColor:_.getColor(t).DEFAULT,hoverColor:_.getColor(t).HOVER})}r._bars[t]={bars:l,posInfos:c,color:_.getColor(n)},r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),e.log(r)},fix2Resize:function(){var t=this;t._$ctnNode,t._cfg.anim="";var r=e.buffer(function(){t.init()},200);!t.__isFix2Resize&&t.on("resize",function(){t.__isFix2Resize=1,r()})},hideBar:function(t){var r=this,a=r._innerContainer;i.prototype.removeData.call(r,t),delete r._clonePoints[t],r.animateGridsAndLabels(),r.getBarsPos();for(var n in r._bars[t].bars)r._bars[t].bars[n].remove();for(var n in r._bars)if(n!=t)for(var s in r._bars[n].bars){var o=r._barsPos[n]?r._barsPos[n][s]:"";o&&r._bars[n].bars[s].stop().animate({height:o.height,width:o.width,marginTop:o.y-a.y,marginLeft:o.x-a.x},.4,"easeOut",function(){}),r._bars[n].bars[s].attr({posx:o.x,posy:o.y})}r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),e.log(r)},afterRender:function(){var e=this;e.fire("afterRender",e)},getHtmlPaper:function(){return this.paper},getRaphaelPaper:function(){return this.raphaelPaper},clear:function(){this._$ctnNode.html("")}};return r.extend?p=i.extend(y):(p=function(e){var t=this;t._cfg=e,t.init()},e.extend(p,i,y)),p},{requires:["node","base","gallery/template/1.0/index","gallery/kcharts/1.3/basechart/index","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/tools/color/index","gallery/kcharts/1.3/tools/htmlpaper/index","gallery/kcharts/1.3/legend/index","./theme","gallery/kcharts/1.3/tools/touch/index","gallery/kcharts/1.3/tip/index","event"]});