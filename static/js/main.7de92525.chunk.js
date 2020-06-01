(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(3),i=a.n(r),c=(a(24),a(6)),s=a(7),l=a(10),m=a(8),g=a(11),u=a(9),h=a(4),d=a(5),p=(a(16),{toptext:"",bottomtext:"",watermark:"",isTopDragging:!1,isBottomDragging:!1,isWatermarkDragging:!1,topY:"10px",topX:"7px",bottomX:"50%",bottomY:"90%",watermarkX:"25%",watermarkY:"45%",fontSize:30,opacity:.5,watermarkColor:"#FFFFFF",watermarkSize:25}),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).convertToBase64=function(e){var t=new FileReader;t.onload=function(){var e=new Image;e.src=t.result,e.onload=function(){var t=e.height/e.width;e.width=500,e.height=500*t;var n=document.createElement("canvas");n.width=e.width,n.height=e.height+e.height/3;var o=n.getContext("2d");o.fillStyle="white",o.fillRect(0,0,n.width+200,n.height),o.drawImage(e,0,e.height/3,e.width,e.height);var r=n.toDataURL();console.log(r),a.setState(function(){return Object(h.a)({currentImagebase64:r,newHeight:n.height,newWidth:n.width},p)})}},t.readAsDataURL(e)},a.openImage=function(e){URL.createObjectURL(e.target.files[0]);var t=e.target.files[0];a.convertToBase64(t)},a.changeWatermarkColor=function(e){a.setState({watermarkColor:e.target.value})},a.changeFontSize=function(e){a.setState({fontSize:e.target.value})},a.changeWatermarkSize=function(e){a.setState({watermarkFontSize:e.target.value})},a.changeOpacity=function(e){a.setState({opacity:e.target.value/100})},a.changeText=function(e){a.setState(Object(u.a)({},e.currentTarget.name,e.currentTarget.value))},a.getStateObj=function(e,t){var n=a.imageRef.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,i={};return"bottom"===t?i={isBottomDragging:!0,isTopDragging:!1,isWatermarkDragging:!1,bottomX:"".concat(o,"px"),bottomY:"".concat(r,"px")}:"top"===t?i={isTopDragging:!0,isBottomDragging:!1,isWatermarkDragging:!1,topX:"".concat(o,"px"),topY:"".concat(r,"px")}:"watermark"===t&&(i={isTopDragging:!1,isBottomDragging:!1,isWatermarkDragging:!0,watermarkX:"".concat(o,"px"),watermarkY:"".concat(r,"px")}),i},a.handleMouseDown=function(e,t){var n=a.getStateObj(e,t);document.addEventListener("mousemove",function(e){return a.handleMouseMove(e,t)}),a.setState(Object(h.a)({},n))},a.handleMouseMove=function(e,t){if(a.state.isTopDragging||a.state.isBottomDragging||a.state.isWatermarkDragging){var n={};"bottom"===t&&a.state.isBottomDragging?n=a.getStateObj(e,t):"top"===t&&a.state.isTopDragging?n=a.getStateObj(e,t):"watermark"===t&&a.state.isWatermarkDragging&&(n=a.getStateObj(e,t)),a.setState(Object(h.a)({},n))}},a.handleMouseUp=function(e){document.removeEventListener("mousemove",a.handleMouseMove),a.setState({isTopDragging:!1,isBottomDragging:!1,isWatermarkDragging:!1})},a.convertSvgToImage=function(){var e=a.svgRef,t=(new XMLSerializer).serializeToString(e),n=document.createElement("canvas");n.setAttribute("id","canvas");var o=e.getBoundingClientRect();n.width=o.width,n.height=o.height;var r=document.createElement("img");r.setAttribute("src","data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t)))),r.onload=function(){n.getContext("2d").drawImage(r,0,0);var e=n.toDataURL("image/png"),t=document.createElement("a");t.download="meme.png",t.href=e,document.body.appendChild(t),t.click()}},a.state=Object(h.a)({currentImagebase64:null},p),a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t={fontFamily:"Helvetica",fontSize:"".concat(this.state.fontSize,"px"),fontWeight:.1,fill:"#000",userSelect:"none",color:"black",padding:0,margin:0},a={fontFamily:"Arial",fontSize:"".concat(this.state.watermarkFontSize,"px"),userSelect:"none",opacity:"".concat(this.state.opacity),fill:"".concat(this.state.watermarkColor)};return o.a.createElement("div",{className:"ui raised very padded text container segment"},o.a.createElement("div",{className:"ui two column centered grid"},o.a.createElement("div",{className:"column"},o.a.createElement("input",{type:"file",id:"image",alt:"Select Image",onChange:function(t){return e.openImage(t)}})),o.a.createElement("div",{className:" four column center row"},o.a.createElement("div",{className:"column"},o.a.createElement(d.a,null,o.a.createElement(d.b,{for:"toptext"},"Top Text"),o.a.createElement("input",{className:"form-control",type:"text",name:"toptext",id:"toptext",placeholder:"Add text to the top",onChange:this.changeText}))),o.a.createElement("div",{className:"column"},o.a.createElement(d.a,null,o.a.createElement(d.b,{for:"resizebottomtext"},"Top Text Size"),o.a.createElement("input",{type:"range",min:"1",max:"100",name:"resizebottom text",onChange:this.changeFontSize})))),o.a.createElement("div",{className:" four column center row"},o.a.createElement("div",{className:"column"},o.a.createElement(d.a,null,o.a.createElement("input",{className:"form-control",type:"text",name:"watermark",id:"watermark",placeholder:"Add watermark",onChange:this.changeText}))),o.a.createElement("div",{className:"column"},o.a.createElement("button",{onClick:this.changeWatermarkColor,value:"#FFFFFF",className:"ui basic button"},"White"),o.a.createElement("button",{onClick:this.changeWatermarkColor,value:"#000000",className:"ui secondary button"},"Black")),o.a.createElement("div",{className:"column"},o.a.createElement("p",null,"Watermark Opacity"),o.a.createElement("input",{type:"range",min:"0",max:"100",onChange:this.changeOpacity}),o.a.createElement("p",null,"Watermark Size"),o.a.createElement("input",{type:"range",min:"0",max:"100",onChange:this.changeWatermarkSize}))),o.a.createElement("div",{className:" four column center row"},o.a.createElement("div",{className:"column"},o.a.createElement("button",{onClick:function(){return e.convertSvgToImage()},className:"ui button primary"},"Download Meme!"))),o.a.createElement("svg",{width:this.state.newWidth,height:this.state.newHeight,id:"svg_ref",ref:function(t){e.svgRef=t},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},o.a.createElement("image",{ref:function(t){e.imageRef=t},href:this.state.currentImagebase64,width:this.state.newWidth,height:this.state.newHeight}),o.a.createElement("foreignObject",{width:this.state.newWidth-50,height:this.state.newHeight,x:this.state.topX,y:this.state.topY,onMouseDown:function(t){return e.handleMouseDown(t,"top")},onMouseUp:function(t){return e.handleMouseUp(t,"top")}},o.a.createElement("code",null,o.a.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{overflow:"auto",align:"left",textAnchor:"start"}},o.a.createElement("text",{style:Object(h.a)({},t,{zIndex:this.state.isTopDragging?4:1}),"dominant-baseline":"middle","text-anchor":"middle",onMouseDown:function(t){return e.handleMouseDown(t,"top")},onMouseUp:function(t){return e.handleMouseUp(t,"top")}},this.state.toptext)))),o.a.createElement("text",{style:a,dominantBaseline:"middle",textAnchor:"middle",x:this.state.watermarkX,y:this.state.watermarkY,onMouseDown:function(t){return e.handleMouseDown(t,"watermark")},onMouseUp:function(t){return e.handleMouseUp(t,"watermark")}},this.state.watermark))))}}]),t}(o.a.Component),f=(a(30),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(w,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.7de92525.chunk.js.map