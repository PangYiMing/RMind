(this.webpackJsonprmind=this.webpackJsonprmind||[]).push([[0],[,,,function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"f",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"h",(function(){return i})),t.d(n,"g",(function(){return o})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return l})),t.d(n,"a",(function(){return u})),t.d(n,"m",(function(){return s})),t.d(n,"l",(function(){return f})),t.d(n,"j",(function(){return p})),t.d(n,"k",(function(){return m})),t.d(n,"i",(function(){return b}));var a="nodeLeft",r="nodeRight",c="dropArea",i={id:"",children:[]},o="rmind_root_node",d="rmind_mindmap_wrapper",l="\u65b0\u5efa\u8282\u70b9",u="\u672a\u547d\u540d\u5bfc\u56fe",s="--theme-main",f="--theme-light",p="--theme-dark",m="--theme-ex",b="--theme-assist"},function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return d}));var a=t(8),r=function(e){e.stopPropagation()},c=function e(n){if(n instanceof Object){if(Array.isArray(n))return n.map(e);var t={};return Object.entries(n).forEach((function(n){var r=Object(a.a)(n,2),c=r[0],i=r[1];t[c]=e(i)})),t}return n},i=function e(n,t){return n.id===t?n:n.children.map((function(n){return e(n,t)})).find((function(e){return e}))},o=function e(n){n.showChildren=!0,n.children.forEach(e)},d=function(e,n){var t=document.createElement("a");t.href=e,t.download=n,t.click()}},function(e,n,t){"use strict";t.d(n,"a",(function(){return _}));var a=t(8),r=t(0),c=t.n(r),i=t(6),o=t(20),d=t(4),l=JSON.parse(localStorage.getItem("mindmap"))||o.a,u=function(e,n){switch(n.type){case i.h:var t=Object(d.a)(e),a=Object(d.c)(t,n.data.node_id);return a.children.length>0&&a!==t&&Object.assign(a,n.data.node),t;case i.a:var r=Object(d.a)(e);return Object(d.c)(r,n.data.node_id).children.push(n.data.node),r;case i.b:var c=Object(d.a)(e);if(n.data.parent_id){var o=Object(d.c)(c,n.data.parent_id),l=o.children.findIndex((function(e){return e.id===n.data.node_id}))+1;o.children.splice(l,0,n.data.node)}return c;case i.f:var u=Object(d.a)(e),s=Object(d.c)(u,n.data.parent_id),f=s.children.findIndex((function(e){return e.id===n.data.node_id})),p=s.children[f];if(s.children.splice(f,1),n.data.is_sibling){var m=s.children.findIndex((function(e){return e.id===n.data.target_id}))+1||s.children.length+1;s.children.splice(m-1,0,p)}else{Object(d.c)(u,n.data.target_id).children.push(p)}return u;case i.c:var b=Object(d.a)(e),h=Object(d.c)(b,n.data.node_id);return Object.assign(h,n.data.node),b;case i.d:var g=Object(d.a)(e);if(n.data.parent_id){var O=Object(d.c)(g,n.data.parent_id),j=O.children.findIndex((function(e){return e.id===n.data.node_id}));O.children.splice(j,1)}return g;case i.e:var v=Object(d.a)(e),x=Object(d.c)(v,n.data.node_id);return Object(d.e)(x),v;case i.g:return n.data.mindmap;default:return e}},s=t(14),f=t(13),p={cur_select:"",select_by_click:!1,cur_edit:"",cur_node_info:{}},m=function(e,n){switch(n.type){case f.d:return e.cur_select===n.data.cur_select&&delete n.data.cur_node_info,Object(s.a)(Object(s.a)({},e),n.data);case f.c:case f.a:case f.b:return Object(s.a)(Object(s.a)({},e),n.data);default:return e}},b=t(15),h={undo:[],redo:[],last_snapshot:null},g=function(e,n){switch(n.type){case b.b:var t=Object(d.a)(e);return t.last_snapshot&&(t.undo.length>0&&t.undo[t.undo.length-1].mindmap===n.data.mindmap?(t.redo.unshift(t.last_snapshot),t.undo.pop()):t.redo.length>0&&t.redo[0].mindmap===n.data.mindmap?(t.undo.push(t.last_snapshot),t.redo.shift()):(t.undo.push(t.last_snapshot),t.redo=[])),t.last_snapshot=n.data,t;case b.a:return h;default:return e}},O=t(16),j=t(3),v={title:localStorage.getItem("title")||j.a,theme_index:Number(localStorage.getItem("theme_index"))||0,theme_list:[{main:"#eda938",light:"#f4cc87",dark:"#e79021",ex:"#ce7529",assist:"#1980da"},{main:"#ff4c26",light:"#ffcabc",dark:"#e83f1d",ex:"#c12a0f",assist:"#0e95ac"},{main:"#50b843",light:"#c3e5bd",dark:"#28ab17",ex:"#038b00",assist:"#790595"},{main:"#2d99d7",light:"#e2f5ff",dark:"#2786c3",ex:"#2375af",assist:"#ca6c27"},{main:"#b347d2",light:"#e4c0ef",dark:"#a623c9",ex:"#9621c3",assist:"#009000"},{main:"#555555",light:"#e9e9e9",dark:"#434343",ex:"#262626",assist:"#860314"}]},x=function(e,n){switch(n.type){case O.b:case O.a:return Object.assign(Object(d.a)(e),n.data);default:return e}},_=c.a.createContext({});n.b=function(e){var n=Object(r.useReducer)(u,l),t=Object(a.a)(n,2),i=t[0],o=t[1],d=Object(r.useReducer)(m,p),s=Object(a.a)(d,2),f=s[0],b=s[1],O=Object(r.useReducer)(g,h),j=Object(a.a)(O,2),E=j[0],w=j[1],y=Object(r.useReducer)(x,v),k=Object(a.a)(y,2),C={mindmap:{state:i,dispatch:o},nodeStatus:{state:f,dispatch:b},history:{state:E,dispatch:w},global:{state:k[0],dispatch:k[1]}};return c.a.createElement(_.Provider,{value:C},e.children)}},function(e,n,t){"use strict";t.d(n,"h",(function(){return a})),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"f",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return l})),t.d(n,"g",(function(){return u}));var a="mindmap/toggleChildren",r="mindmap/addChild",c="mindmap/addSibling",i="mindmap/moveNode",o="mindmap/changeText",d="mindmap/deleteNode",l="mindmap/expandAll",u="mindmap/setMindmap"},function(e,n,t){"use strict";var a=t(0),r=t(5),c=t(11),i=t(10),o=t(21),d=t(18),l=t.n(d);n.a=function(){var e=Object(a.useContext)(r.a),n=e.mindmap.dispatch,t=e.nodeStatus.dispatch,d=e.history.dispatch;return{toggleChildren:function(e,t){n(c.h(e,t))},addChild:function(e){var a=l()(""+Date.now()+Math.random());n(c.h(e,!0)),n(c.a(e,a)),t(i.c(a))},addSibling:function(e,a){var r=l()(""+Date.now()+Math.random());n(c.b(e,a,r)),t(i.c(r))},moveNode:function(e,a,r,o){n(c.f(e,a,r,o)),t(i.d(e))},editNode:function(e){t(i.c(e))},changeText:function(e,t){n(c.c(e,t))},selectNode:function(e,n){t(i.d(e,n))},deleteNode:function(e,a){n(c.d(e,a)),t(i.d(a))},clearNodeStatus:function(){t(i.a())},setMindmap:function(e,a){a&&(d(Object(o.a)()),t(i.d(e.id))),n(c.g(e))},expandAll:function(e){n(c.e(e)),t(i.d(e))}}}},,function(e,n,t){"use strict";t.d(n,"b",(function(){return p})),t.d(n,"d",(function(){return m})),t.d(n,"c",(function(){return b})),t.d(n,"a",(function(){return h})),t.d(n,"e",(function(){return g}));var a,r,c,i,o,d=t(2),l=t(0),u=t.n(l),s=t(1),f=t(3),p=function(e){return u.a.createElement("div",Object.assign({},e,{className:Object(s.a)(a||(a=Object(d.a)(["\ndisplay: flex;\njustify-content: flex-end;\nmargin-top: 20px;\n\nbutton {\nmargin-left: 20px;\npadding: 10px 20px;\nbackground-color: #ffffff;\nborder-radius: 10px;\noutline: none;\n}\n\nbutton:active {\ntransform: scale(0.95);\n}\n"])))}))},m=function(e){return u.a.createElement("button",Object.assign({},e,{className:Object(s.a)(r||(r=Object(d.a)([" /* button& \u7528\u4e8e\u63d0\u9ad8 CSS \u6743\u91cd */\nbutton& {\ncolor: #ffffff;\nbackground-color: var(",");\nborder: 1px solid var(",");\n}\n"])),f.j,f.m)}))},b=function(e){return u.a.createElement("p",Object.assign({},e,{className:Object(s.a)(c||(c=Object(d.a)(["\nmargin-top: 0;\ncolor: var(",");\nfont-weight: 700;\n"])),f.i)}))},h=function(e){return u.a.createElement("p",Object.assign({},e,{className:Object(s.a)(i||(i=Object(d.a)(["\ncolor: #888888;\nfont-size: 90%;\n"])))}))},g=function(e){return u.a.createElement("a",Object.assign({},e,{className:Object(s.a)(o||(o=Object(d.a)(["\ntext-decoration: underline;\ncursor: pointer;\n"])))}))}},function(e,n,t){"use strict";t.d(n,"d",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var a=t(14),r=t(13),c=function(e,n){return{type:r.d,data:{cur_select:e,select_by_click:n||!1,cur_edit:"",cur_node_info:{}}}},i=function(e){return{type:r.c,data:{cur_select:"",cur_edit:e,cur_node_info:{}}}},o=function(){return{type:r.a,data:{cur_select:"",select_by_click:!1,cur_edit:"",cur_node_info:{}}}},d=function(e,n,t){return{type:r.b,data:{cur_node_info:Object(a.a)(Object(a.a)({},e),{},{parent:n,on_left:t})}}}},function(e,n,t){"use strict";t.d(n,"h",(function(){return c})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"f",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return s})),t.d(n,"g",(function(){return f}));var a=t(6),r=t(3),c=function(e,n){return{type:a.h,data:{node_id:e,node:{showChildren:n}}}},i=function(e,n){return{type:a.a,data:{node_id:e,node:{id:n,text:r.e,showChildren:!0,children:[]}}}},o=function(e,n,t){return{type:a.b,data:{node_id:e,parent_id:n,node:{id:t,text:r.e,showChildren:!0,children:[]}}}},d=function(e,n,t,r){return{type:a.f,data:{node_id:e,target_id:n,parent_id:t,is_sibling:r}}},l=function(e,n){return{type:a.c,data:{node_id:e,node:{text:n}}}},u=function(e,n){return{type:a.d,data:{node_id:e,parent_id:n}}},s=function(e){return{type:a.e,data:{node_id:e}}},f=function(e){return{type:a.g,data:{mindmap:e}}}},,function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return i}));var a="nodeStatus/setSelect",r="nodeStatus/setEdit",c="nodeStatus/getNodeInfo",i="nodeStatus/clearAll"},,function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}));var a="history/setHistory",r="history/clearHistory"},function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}));var a="global/setTitle",r="global/setTheme"},,,,function(e,n,t){"use strict";var a=t(3);n.a={id:a.g,text:"\u4e3b\u9898",showChildren:!0,children:[{id:"Sub1",text:"\u5206\u652f1",showChildren:!0,children:[]},{id:"Sub2",text:"\u5206\u652f2",showChildren:!0,children:[]},{id:"Sub3",text:"\u5206\u652f3",showChildren:!0,children:[]}]}},function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return c}));var a=t(15),r=function(e,n){return{type:a.b,data:e?{mindmap:e,cur_node:n}:null}},c=function(){return{type:a.a}}},,,,,,,,,,function(e,n,t){},,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,d,l,u,s,f,p,m,b,h,g,O,j,v,x,_,E,w,y,k,C,N,S,R,z,T,M,D,L,I,A=t(0),P=t.n(A),W=t(25),H=t.n(W),B=(t(31),t(32),t(5)),J=t(2),K=t(1),U=t(16),F=function(e){return{type:U.b,data:{title:e}}},V=function(){var e=Object(A.useContext)(B.a).global,n=e.state,t=n.theme_index,a=n.theme_list,r=e.dispatch;return{theme:Object(A.useMemo)((function(){return a[t]}),[t]),theme_index:t,theme_list:a,setTheme:function(e){r(function(e){return{type:U.a,data:{theme_index:e}}}(e))}}},X=t(3),G=function(e){var n=e.children,t=V().theme;return P.a.createElement("div",{className:Object(K.a)(a||(a=Object(J.a)(["\n    ",": ",";\n    ",": ",";\n    ",": ",";\n    ",": ",";\n    ",": ",";\n    "])),X.m,t.main,X.l,t.light,X.i,t.assist,X.j,t.dark,X.k,t.ex)},n)},Z=t(8),$=t(7),q=t(11),Q=t(10),Y=function(){var e=Object(A.useContext)(B.a),n=e.mindmap.dispatch,t=e.nodeStatus.dispatch,a=e.history.state,r=function(e){if(e){var a=e.mindmap,r=e.cur_node;n(Object(q.g)(JSON.parse(a))),t(Object(Q.d)(r))}};return{undoHistory:function(){r(a.undo[a.undo.length-1])},redoHistory:function(){r(a.redo[0])}}},ee="none",ne="open",te="export",ae="theme",re=t(4),ce=t(12),ie=(t(35),function(e){var n=e.icon,t=e.onClick,a=e.children,r=e.disabled;return P.a.createElement("button",{onClick:r?re.d:t,className:Object(K.b)(oe,Object(ce.a)({},de,r))},P.a.createElement("i",{className:"zwicon-"+n}),P.a.createElement("span",null,a))}),oe=Object(K.a)(r||(r=Object(J.a)(["\nmargin: 0 0.12em;\npadding: 0 0.24em;\n/* margin \u7528\u4e8e\u589e\u52a0\u95f4\u9694\uff0cpadding \u7528\u4e8e\u589e\u5927\u53ef\u70b9\u51fb\u533a\u57df */\nbackground-color: transparent;\nborder: none;\noutline: none;\ncursor: pointer;\n\ni {\ndisplay: block;\nmargin-bottom: 0.12em;\nfont-size: 100%;\n}\nspan {\ndisplay: block;\nfont-size: 25%;\n}\n\n&:active {\ntransform: scale(0.95);\n}\n\n&:hover {\ncolor: var(",");\n}\n"])),X.i),de=Object(K.a)(c||(c=Object(J.a)(["\n&, &:hover {\ncolor: #cccccc;\n}\n\ncursor: not-allowed;\n"]))),le=function(){var e=Object(A.useRef)(),n=Object(A.useContext)(B.a).global,t=n.state.title,a=n.dispatch;Object(A.useEffect)((function(){document.title="RMind - ".concat(t),localStorage.setItem("title",t)}),[t]);return P.a.createElement("span",{ref:e,className:ue,contentEditable:"true",suppressContentEditableWarning:"true",spellCheck:"false",onKeyDown:function(n){switch(n.key.toUpperCase()){case"ESCAPE":e.current.textContent=t;case"ENTER":e.current.blur()}},onBlur:function(){var n=e.current.textContent.trim();""===n&&(n=t),n.length>30&&(n=n.slice(0,30)),e.current.textContent=n,a(F(n))}},t)},ue=Object(K.a)(i||(i=Object(J.a)(["\nalign-self: center;\npadding: 0 10px; /* \u4e24\u4fa7 padding \u7528\u4e8e\u589e\u5927\u7ec4\u4ef6\u70b9\u51fb\u533a\u57df\uff0c\u907f\u514d\u5c06\u5149\u6807\u5b9a\u4f4d\u81f3\u9996\u5c3e\u5904\u65f6\u610f\u5916 blur */\ncolor: var(",");\nfont-size: 20px;\nfont-weight: 700;\nborder-bottom: 2px solid transparent;\noutline: none;\ntransition: 0.2s;\n\n&:read-write {\ncursor: edit;\n}\n\n&:focus {\nborder-bottom: 2px solid var(",");\n}\n"])),X.j,X.i),se=t(20),fe=t(9),pe=function(e){var n=e.handleClosePopup,t=e.handleDownload,a=Object(A.useContext)(B.a).global.dispatch,r=Object($.a)().setMindmap;return P.a.createElement("div",null,P.a.createElement(fe.c,null,"\u65b0\u5efa\u5bfc\u56fe\u540e\uff0c\u5f53\u524d\u601d\u7ef4\u5bfc\u56fe\u7684\u6570\u636e\u5c06\u4e22\u5931\u3002"),P.a.createElement(fe.a,null,"\u8981\u4fdd\u5b58\u5f53\u524d\u6570\u636e\uff0c\u8bf7\u5c06\u601d\u7ef4\u5bfc\u56fe",P.a.createElement(fe.e,{onClick:t},"\u4e0b\u8f7d\u81f3\u672c\u5730"),"\u3002"),P.a.createElement(fe.b,null,P.a.createElement(fe.d,{onClick:function(){r(se.a,!0),a(F(X.a)),n()}},"\u65b0\u5efa\u5bfc\u56fe"),P.a.createElement("button",{onClick:n},"\u53d6\u6d88")))},me=t(18),be=t.n(me),he=function(e,n){var t,a;switch(n){case"MD":return e.match(/^#{1,6} /)?(t=e.match(/^#{1,6} /)[0].length-2,a=e.replace(/^#{1,6} /,"")):e.match(/^\s*[-*] /)&&(t=e.match(/^\s*[-*] /)[0].length+4,a=e.replace(/^\s*[-*] /,"")),{layer:t,text:a};case"TXT":return{layer:t=e.match(/^\s*/)[0].length,text:a=e.replace(/^\s*/,"")};default:return{layer:t,text:a}}},ge=function e(n,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(0!==n.length||-1!==a){if(-1===a){var c=he(n.shift(),t);a=c.layer||0,r=c.text||"\u672a\u77e5\u6570\u636e"}for(var i={id:0===a?X.g:be()(""+Date.now()+Math.random()+r),text:r,showChildren:!0,children:[]};n.length>0;){var o=he(n[0],t),d=o.layer,l=o.text;if(d<=a)break;n.shift(),d&&i.children.push(e(n,t,d,l))}return i}},Oe=function e(n,t,a,r){switch(n){case"KM":return t.id=r?X.g:a.data.id,t.text=a.data.text,t.showChildren="collapse"!==a.data.expandState,t.children=a.children.map((function(t){return e(n,{},t)})),t;default:return}},je=function(e,n){switch(n){case"RMF":return JSON.parse(e);case"KM":var t=JSON.parse(e);return Oe(n,{},t.root,!0);default:return}},ve=function(e,n){var t;switch(n){case"MD":case"TXT":var a=e.split("\n").filter((function(e){return e}));t=ge(a,n,-1);break;default:t=je(e,n)}return t},xe=function(e){var n=e.handleClosePopup,t=e.handleDownload,a=Object(A.useContext)(B.a).global.dispatch,r=Object($.a)().setMindmap;return P.a.createElement("div",null,P.a.createElement(fe.c,null,"\u6253\u5f00\u5176\u4ed6\u6587\u4ef6\u540e\uff0c\u5f53\u524d\u601d\u7ef4\u5bfc\u56fe\u7684\u6570\u636e\u5c06\u4e22\u5931\u3002"),P.a.createElement(fe.a,null,"\u8981\u4fdd\u5b58\u5f53\u524d\u6570\u636e\uff0c\u8bf7\u5c06\u601d\u7ef4\u5bfc\u56fe",P.a.createElement(fe.e,{onClick:t},"\u4e0b\u8f7d\u81f3\u672c\u5730"),"\u3002"),P.a.createElement("p",{className:_e},"\u652f\u6301\u6253\u5f00\u683c\u5f0f\uff1a"),P.a.createElement("ul",{className:Ee},P.a.createElement("li",null,"RMind\uff08.rmf\uff09"),P.a.createElement("li",null,"\u767e\u5ea6\u8111\u56fe\uff08.km\uff09"),P.a.createElement("li",null,"Markdown\uff08.md\uff09"),P.a.createElement("li",null,"\u6587\u672c\u6587\u4ef6\uff08.txt\uff09")),P.a.createElement(fe.b,null,P.a.createElement(fe.d,{onClick:function(){var e=document.createElement("input");e.type="file",e.accept=".rmf,.km,.txt,.md",e.addEventListener("change",(function(e){for(var t=e.target.files[0],c=t.name,i=c.length-1;i>0&&"."!==c[i];)i--;var o=c.slice(i+1).toUpperCase(),d=c.slice(0,i),l=new FileReader;l.onload=function(e){var t=e.target.result,c=ve(t,o);c&&c.id===X.g?(r(c,!0),a(F(d)),n()):alert("\u4e0d\u662f\u6709\u6548\u7684\u601d\u7ef4\u5bfc\u56fe\u6587\u4ef6")},l.readAsText(t)})),e.click()}},"\u6253\u5f00\u6587\u4ef6"),P.a.createElement("button",{onClick:n},"\u53d6\u6d88")))},_e=Object(K.a)(o||(o=Object(J.a)(["\nmargin: 20px 0 5px;\npadding-bottom: 8px;\nborder-bottom: 1px solid #dddddd;\n"]))),Ee=Object(K.a)(d||(d=Object(J.a)(["\nmargin: 0;\npadding: 0;\nfont-size: 90%;\nlist-style: circle inside;\n\nli {\nline-height: 2em;\n}\n"]))),we=function(e){var n=e.theme,t=e.index,a=e.is_current,r=e.setTheme;return P.a.createElement("li",{className:Object(K.b)(ye,Object(ce.a)({},ke,a)),onClick:function(){r(t)}},P.a.createElement("div",{style:{backgroundColor:n.ex}}),P.a.createElement("div",{style:{backgroundColor:n.dark}}),P.a.createElement("div",{style:{backgroundColor:n.main}}),P.a.createElement("div",{style:{backgroundColor:n.light}}))},ye=Object(K.a)(l||(l=Object(J.a)(["\ndisplay: flex;\nbox-sizing: border-box;\nwidth: 47%;\nheight: 25px;\nmargin: 8px 0;\nborder-radius: 18px;\ncursor: pointer;\noverflow: hidden;\n\ndiv {\nflex: 1;\nz-index: -1;\n}\n"]))),ke=Object(K.a)(u||(u=Object(J.a)(["\nbox-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #000000; /* \u4e24\u5c42\u9634\u5f71\u5b9e\u73b0\u6846\u9009\u6548\u679c\uff0c\u4e5f\u53ef\u7528 inset \u9634\u5f71 + border-color \u505a */\n"]))),Ce=function(e){var n=e.handleClosePopup,t=V(),a=t.theme_index,r=t.theme_list,c=t.setTheme;return Object(A.useEffect)((function(){localStorage.setItem("theme_index",a)}),[a]),P.a.createElement("div",null,P.a.createElement(fe.c,null,"\u8bf7\u9009\u62e9\u4e3b\u9898\uff1a"),P.a.createElement("ul",{className:Ne},r.map((function(e,n){return P.a.createElement(we,{key:e.main,theme:e,index:n,is_current:a===n,setTheme:c})}))),P.a.createElement(fe.b,null,P.a.createElement("button",{onClick:n},"\u5b8c\u6210")))},Ne=Object(K.a)(s||(s=Object(J.a)(["\ndisplay: flex;\njustify-content: space-between;\nflex-wrap: wrap;\npadding: 0;\nlist-style: none;\n"]))),Se=function(e){var n=e.type,a=e.handleClosePopup,r=e.handleDownload,c=function(e){switch(e){case"new":return pe;case ne:return xe;case te:return Object(A.lazy)((function(){return Promise.all([t.e(4),t.e(3)]).then(t.bind(null,38))}));case ae:return Ce;default:return}}(n);return P.a.createElement("div",{className:Re,onClick:re.d},P.a.createElement("div",{className:ze},P.a.createElement("i",{className:"zwicon-close-circle "+Te,onClick:a}),P.a.createElement(A.Suspense,{fallback:P.a.createElement(P.a.Fragment,null)},P.a.createElement(c,{handleClosePopup:a,handleDownload:r}))),P.a.createElement("div",{className:Me,onClick:a}))},Re=Object(K.a)(f||(f=Object(J.a)(["\nposition: fixed;\ntop:0;\nbottom:0;\nleft:0;\nright:0;\n"]))),ze=Object(K.a)(p||(p=Object(J.a)(["\ndisplay: flex;\nflex-direction: column;\nposition: absolute;\ntop:30%;\nleft:0;\nright:0;\nwidth: 400px;\nmargin: auto;\npadding: 40px 40px 20px;\nfont-size: 1rem;\nbackground-color: #ffffff;\nborder-radius: 20px;\nz-index: 1;\n"]))),Te=Object(K.a)(m||(m=Object(J.a)(["\nposition: absolute;\ntop: 10px;\nright: 10px;\nfont-size: 25px;\nfont-weight: 700;\n\n&:active {\ntransform: scale(0.95)\n}\n"]))),Me=Object(K.a)(b||(b=Object(J.a)(["\nposition: absolute;\ntop:0;\nbottom:0;\nleft:0;\nright:0;\nbackground: #000000;\nopacity: 0.2;\n"]))),De=function(){var e=Object(A.useState)(ee),n=Object(Z.a)(e,2),t=n[0],a=n[1],r=Object(A.useContext)(B.a),c=r.mindmap.state,i=r.history.state,o=r.global.state.title,d=Object($.a)().expandAll,l=Y(),u=l.undoHistory,s=l.redoHistory,f=function(){var e="data:text/plain,".concat(encodeURIComponent(JSON.stringify(c)));Object(re.b)(e,"".concat(o,".rmf"))};return P.a.createElement("nav",{className:Le},P.a.createElement("section",{className:Ie,onClick:re.d},P.a.createElement(ie,{icon:"add-item-alt",onClick:function(){a("new")}},"\u65b0\u5efa"),P.a.createElement(ie,{icon:"folder-open",onClick:function(){a(ne)}},"\u6253\u5f00"),P.a.createElement(ie,{icon:"file-download",onClick:f},"\u4e0b\u8f7d\u81f3\u672c\u5730"),P.a.createElement(ie,{icon:"duplicate",onClick:function(){a(te)}},"\u5bfc\u51fa"),P.a.createElement(ie,{icon:"palette",onClick:function(){a(ae)}},"\u4e3b\u9898")),P.a.createElement("section",{className:Ie},P.a.createElement(le,null)),P.a.createElement("section",{className:Ie,onClick:re.d},P.a.createElement(ie,{icon:"undo",disabled:0===i.undo.length,onClick:function(){u()}},"\u64a4\u9500"),P.a.createElement(ie,{icon:"redo",disabled:0===i.redo.length,onClick:function(){s()}},"\u91cd\u505a"),P.a.createElement(ie,{icon:"scale",onClick:function(){d(X.g)}},"\u5c55\u5f00\u6240\u6709\u8282\u70b9")),t!==ee&&P.a.createElement(Se,{type:t,handleClosePopup:function(){a(ee)},handleDownload:f}))},Le=Object(K.a)(h||(h=Object(J.a)(["\ndisplay: flex;\njustify-content: space-between;\nposition: fixed;\ntop:0;\nleft:0;\nright:0;\nheight: 56px;\npadding: 0 50px;\nfont-size: 25px;\nbackground-color: #ffffff;\nbox-shadow: 0 0px 2px #aaaaaa;\nz-index: 10;\n"]))),Ie=Object(K.a)(g||(g=Object(J.a)(["\ndisplay: flex;\n"]))),Ae=t(21),Pe=function(e,n,t){var a=n.addChild,r=n.addSibling,c=n.editNode,i=n.deleteNode,o=n.toggleChildren,d=n.selectNode;return function(n){""===e.cur_edit&&((navigator.platform.toUpperCase().startsWith("MAC")?n.metaKey:n.ctrlKey)&&"Z"===n.key.toUpperCase()&&(n.shiftKey?t.redoHistory():t.undoHistory()));if(""!==e.cur_select)try{!function(n){switch(n.key.toUpperCase()){case"TAB":a(e.cur_select);break;case"ENTER":n.preventDefault(),r(e.cur_select,e.cur_node_info.parent.id);break;case"F2":c(e.cur_select);break;case"BACKSPACE":case"DELETE":i(e.cur_select,e.cur_node_info.parent.id);break;case" ":n.preventDefault(),o(e.cur_select,!e.cur_node_info.showChildren);break;case"ARROWLEFT":n.preventDefault(),e.cur_node_info.parent===X.h?e.cur_node_info.children.length>3&&d(e.cur_node_info.children[Math.trunc(e.cur_node_info.children.length/2)].id):e.cur_node_info.on_left?e.cur_node_info.children.length>0&&d(e.cur_node_info.children[0].id):d(e.cur_node_info.parent.id);break;case"ARROWRIGHT":n.preventDefault(),e.cur_node_info.on_left?d(e.cur_node_info.parent.id):e.cur_node_info.children.length>0&&d(e.cur_node_info.children[0].id);break;case"ARROWUP":n.preventDefault();var t=e.cur_node_info.parent.children.findIndex((function(n){return n.id===e.cur_node_info.id}));t>0&&d(e.cur_node_info.parent.children[t-1].id);break;case"ARROWDOWN":n.preventDefault();var l=e.cur_node_info.parent.children.findIndex((function(n){return n.id===e.cur_node_info.id}));l<e.cur_node_info.parent.children.length-1&&d(e.cur_node_info.parent.children[l+1].id)}}(n)}catch(l){alert("\u5f53\u524d\u7684\u8282\u70b9\u4fe1\u606f\u5b58\u5728\u95ee\u9898\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u8282\u70b9")}}},We=function(e){var n=e.layer,t=e.node,a=e.parent,r=Object($.a)();return P.a.createElement("div",{className:He,onClick:re.d},P.a.createElement(ie,{icon:"git-commit",onClick:function(){r.addChild(t.id)}},"\u6dfb\u52a0\u5b50\u8282\u70b9"),P.a.createElement(ie,{icon:"git-fork",onClick:function(){r.addSibling(t.id,a.id)},disabled:n<1},"\u6dfb\u52a0\u5144\u5f1f\u8282\u70b9"),P.a.createElement(ie,{icon:"delete",onClick:function(){r.deleteNode(t.id,a.id)},disabled:n<1},"\u5220\u9664"),P.a.createElement(ie,{icon:"edit-pencil",onClick:function(){r.editNode(t.id)}},"\u7f16\u8f91"),P.a.createElement(ie,{icon:"split-v",onClick:function(){r.toggleChildren(t.id,!t.showChildren)},disabled:n<1||0===t.children.length},"\u663e\u9690\u5b50\u8282\u70b9"))},He=Object(K.a)(O||(O=Object(J.a)(["\ndisplay: flex;\nposition: absolute;\nbottom: calc(100% + 5px);\nleft:0;\nbackground-color: #ffffff;\nwidth: max-content;\nheight: 50px;\npadding: 0 8px;\nfont-size: 20px;\nbackground-color: #ffffff;\nborder-radius: 10px;\nbox-shadow: 5px 5px 10px #aaaaaa;\n"]))),Be=function(e){var n=e.node_id,t=e.children,a=Object(A.useRef)(),r=Object($.a)(),c=r.changeText,i=r.selectNode;return Object(A.useEffect)((function(){a.current.focus(),document.getSelection().selectAllChildren(a.current)}),[]),P.a.createElement("div",{className:Je,ref:a,contentEditable:"true",suppressContentEditableWarning:"true",onClick:re.d,onKeyDown:function(e){switch(e.key.toUpperCase()){case"ESCAPE":a.current.textContent=t;case"ENTER":a.current.blur()}},onBlur:function(){c(n,a.current.textContent),i(n)}},t)},Je=Object(K.a)(j||(j=Object(J.a)(["\nposition: absolute;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nwidth: fit-content;\nmin-width: 1em;\nmax-width: 10em;\nheight: fit-content;\nmargin: auto;\npadding: 10px;\ncolor: #333333;\nbackground-color: #ffffff;\nbox-shadow: 0 0 20px #aaaaaa;\nborder-radius: 5px;\noutline: none;\nz-index: 3;\nuser-select: text;\n"]))),Ke=function(e){var n=e.layer,t=e.node,a=e.parent,r=e.node_refs,c=e.on_left,i=Object(A.useRef)(),o=Object(A.useContext)(B.a).nodeStatus,d=o.state,l=o.dispatch,u=Object($.a)();return Object(A.useEffect)((function(){return r.add(i),function(){r.delete(i)}}),[]),Object(A.useEffect)((function(){d.cur_select===t.id&&(i.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),l(Object(Q.b)(t,a,c)))}),[d.cur_select,t]),P.a.createElement("div",{className:Object(K.b)(Fe,Ve[n<3?n:3],Object(ce.a)({},Xe,d.cur_select===t.id)),draggable:n>0&&d.cur_edit!==t.id,"data-tag":c?X.c:X.f,"data-parent":a.id,"data-show-children":t.showChildren,id:t.id,ref:i,onClick:re.d},d.cur_edit===t.id&&P.a.createElement(Be,{node_id:t.id},t.text),P.a.createElement("div",{className:Ge,"data-tag":X.b,onClick:function(){u.selectNode(t.id,!0)},onDoubleClick:function(){u.editNode(t.id)}}),P.a.createElement("p",null,t.text),n>0&&t.children.length>0&&P.a.createElement("button",{className:Object(K.b)(Ze,c?$e:qe),onClick:function(){u.toggleChildren(t.id,!t.showChildren),u.clearNodeStatus()}},t.showChildren?"-":"+"),d.cur_select===t.id&&d.select_by_click&&P.a.createElement(We,{layer:n,node:t,parent:a}))},Ue="\nbox-shadow: 0 0 0 3px #ffffff, 0 0 0 6px var(".concat(X.k,"); /* \u53cc\u5c42\u9634\u5f71\u5b9e\u73b0\u9009\u4e2d\u6846 */\n"),Fe=Object(K.a)(v||(v=Object(J.a)(["\nposition: relative;\nmin-width: 10px;\nmax-width: 200px;\nmargin: 20px 40px;\npadding: 15px;\nbackground-color: #ffffff;\nborder: 1px solid var(",");\nborder-radius: 15px;\ncursor: pointer;\n\np {\nmin-height: 18px; /* \u5f53 p \u4e2d\u6ca1\u6709\u5185\u5bb9\u65f6\u6491\u8d77\u5143\u7d20 */\nmargin: 0;\nline-height: 1.5em;\noverflow-wrap: break-word;\n}\n\n&:hover {\n","\n}\n\n&.ondrag {\nbackground-color: var(",");\np {\ncolor: #ffffff;\n}\n}\n"])),X.m,Ue,X.k),Ve=[Object(K.a)(x||(x=Object(J.a)(["\ndiv& {\npadding: 15px 20px;\ncolor: #ffffff;\nfont-size: 120%;\nfont-weight: 700;\nbackground-color: var(",");\nborder:2px solid var(",");\n}\n    "])),X.j,X.k),Object(K.a)(_||(_=Object(J.a)(["\ndiv& {\nbackground-color: var(",");\n}\n    "])),X.l),Object(K.a)(E||(E=Object(J.a)(["\ndiv& {\npadding: 10px 15px;\n}\n    "]))),Object(K.a)(w||(w=Object(J.a)(["\ndiv& {\npadding: 0 15px;\nborder: none;\np {\nfont-size: 90%;\n}\n}\n    "])))],Xe=Object(K.a)(y||(y=Object(J.a)(["\nz-index: 1; /* \u63d0\u9ad8 Node \u9ad8\u5ea6\uff0c\u9632\u6b62\u88ab\u906e\u6321 */\n","\n"])),Ue),Ge=Object(K.a)(k||(k=Object(J.a)(["\nposition: absolute;\ntop:0;\nbottom:0;\nleft:0;\nright:0;\n"]))),Ze=Object(K.a)(C||(C=Object(J.a)(["\nposition: absolute;\ntop:0;\nbottom: 0;\nwidth: 20px;\nheight: 20px;\nmargin: auto 0;\npadding: 0;\ntext-align: center;\nbackground-color: #ffffff;\nborder: 1px solid #cccccc;\nborder-radius: 50%;\noutline: none;\n"]))),$e=Object(K.a)(N||(N=Object(J.a)(["\nleft: -15px;\n"]))),qe=Object(K.a)(S||(S=Object(J.a)(["\nright: -15px;\n"]))),Qe=function e(n){var t=n.layer,a=n.node,r=n.node_refs,c=n.parent,i=n.on_left;return P.a.createElement("div",{className:Object(K.b)(Ye,Object(ce.a)({},en,i))},P.a.createElement(Ke,{layer:t,node:a,node_refs:r,parent:c,on_left:i}),P.a.createElement("div",null,a.showChildren&&a.children.map((function(n){return P.a.createElement(e,{key:n.id,layer:t+1,node:n,node_refs:r,parent:a,on_left:i})}))))},Ye=Object(K.a)(R||(R=Object(J.a)(["\ndisplay: flex;\nalign-items: center;\n"]))),en=Object(K.a)(z||(z=Object(J.a)(["\nflex-direction: row-reverse;\n"]))),nn=function(e){var n=e.layer,t=e.node,a=e.node_refs,r=Object(A.useRef)(),c=t.children.length,i=c>3?Math.trunc(c/2):c;return Object(A.useEffect)((function(){r.current.scrollIntoView({block:"center",inline:"center"})}),[]),P.a.createElement("div",{className:tn},P.a.createElement("div",null,t.showChildren&&t.children.slice(i).map((function(e){return P.a.createElement(Qe,{key:e.id,layer:n+1,node:e,node_refs:a,parent:t,on_left:!0})}))),P.a.createElement("div",{ref:r},P.a.createElement(Ke,{layer:0,node:t,node_refs:a,parent:X.h})),P.a.createElement("div",null,t.showChildren&&t.children.slice(0,i).map((function(e){return P.a.createElement(Qe,{key:e.id,layer:n+1,node:e,node_refs:a,parent:t,on_left:!1})}))))},tn=Object(K.a)(T||(T=Object(J.a)(["\ndisplay: flex;\nalign-items: center;\nwidth: max-content; /* max-content \u624d\u80fd\u4fdd\u8bc1\u6b63\u786e\u8bfb\u53d6\u5e03\u5c40 */\n"]))),an=t(22),rn=function(e,n,t,a,r){e.moveTo(n,t),e.bezierCurveTo(n,r,.9*a+.1*n,r,a,r)},cn=function e(n,t,a){var r=t.id,c=t.children;if(c.length>0){var i=a.get(r),o=Object(Z.a)(i,3),d=o[0],l=o[1],u=o[2];c.forEach((function(t){var r=a.get(t.id);if(r){var c=Object(Z.a)(r,4),i=c[0],o=c[1],s=c[2];c[3]===X.c?rn(n,d,u,o,s):rn(n,l,u,i,s),e(n,t,a)}}))}},on=function(e,n,t,a){e.beginPath(),e.lineWidth="2",e.strokeStyle=n.main,cn(e,t,a),e.stroke(),e.closePath()},dn=function(e,n,t,a,r,c){e.beginPath(),e.strokeStyle=n.main,e.lineWidth="2",e.setLineDash([5,5]);var i,o,d=(a.top+a.bottom)/2,l=(r.top+r.bottom)/2;c?(i=a.left,o=r.right,e.strokeRect(o-50,l-10,50,20)):(i=a.right,o=r.left,e.strokeRect(o,l-10,50,20)),rn(e,i,d,o,l),e.stroke(),e.closePath()},ln=function(e){var n=e.offsetLeft,t=n+e.offsetWidth,a=e.offsetTop;return{left:n,right:t,top:a,bottom:a+e.offsetHeight}},un=function(e,n,t,a,r){var c,i,o,d,l,u,s,f,p,m,b,h,g,O=r.moveNode,j=function(){b=t.scrollLeft,h=t.scrollTop-56};return[{type:"dragstart",listener:function(n){if(c="",i="",o="",d=!1,l=[],u=[],s=[],f=[],p=void 0,m=!1,b=t.scrollLeft,h=t.scrollTop-56,g=!1,t.addEventListener("scroll",j),n.target&&(n.target.dataset.tag===X.c||n.target.dataset.tag===X.f)){c=n.target.id,i=n.target.dataset.parent;var a=Object(re.c)(e,i);m=a===e,p=ln(document.getElementById(i)),l[0]=a.children.map((function(e){return e.id}));var r=[];if(r[0]=l[0].map((function(e){return ln(document.getElementById(e))})),m&&e.children.length>3){var O=Math.trunc(e.children.length/2);l=[l[0].slice(0,O),l[0].slice(O)],r=[r[0].slice(0,O),r[0].slice(O)]}u=r.map((function(e){return Math.min.apply(Math,Object(an.a)(e.map((function(e){return e.left}))))})),s=r.map((function(e){return Math.max.apply(Math,Object(an.a)(e.map((function(e){return e.right}))))})),f=r.map((function(e){return e.map((function(e){return[e.top,e.bottom]})).reduce((function(e,n){return e.concat(n)}),[])}))}}},{type:"drag",listener:function(e){var t=n.getContext("2d");t.clearRect(0,0,n.width,n.height);for(var r=l.length,i=e.x+b,O=e.y+h,j=0;j<r;j++)if(!g&&i>u[j]&&i<s[j]){var v={left:u[j],right:s[j]},x=1===j||!m&&document.getElementById(c).dataset.tag===X.c,_=f[j].length-1;if(O>f[j][0]-100&&O<f[j][0])return v.top=f[j][0]-50,v.bottom=f[j][0],dn(t,a,0,p,v,x),o=l[j][0],void(d=!0);for(var E=2;E<_+1;E+=2)if(O>f[j][E-1]&&O<f[j][E])return v.top=f[j][E-1],v.bottom=f[j][E],dn(t,a,0,p,v,x),o=l[j][E/2],void(d=!0);if(O>f[j][_]&&O<f[j][_]+100)return v.top=f[j][_],v.bottom=f[j][_]+50,dn(t,a,0,p,v,x),o=l[j+1]&&l[j+1][0],void(d=!0)}}},{type:"dragover",listener:function(e){e.preventDefault()}},{type:"dragenter",listener:function(e){e.target&&e.target.dataset.tag===X.b&&(e.target.parentNode.classList.add("ondrag"),o=e.target.parentNode.id,d=!1,g=!0)}},{type:"dragleave",listener:function(e){e.target&&e.target.dataset.tag===X.b&&(e.target.parentNode.classList.remove("ondrag"),o="",d=!1,g=!1)}},{type:"drop",listener:function(e){e.target.parentNode.classList.remove("ondrag"),""!==o&&o!==c&&o!==i&&O(c,o,i,d)}},{type:"dragend",listener:function(){n.getContext("2d").clearRect(0,0,n.width,n.height),t.removeEventListener("scroll",j)}}]},sn=function(e){var n=e.parent_ref,t=e.container_ref,a=e.mindmap,r=Object(A.useRef)(),c=Object(A.useState)(0),i=Object(Z.a)(c,2),o=i[0],d=i[1],l=V().theme,u=Object($.a)(),s=function(){d(Date.now())};return Object(A.useEffect)((function(){return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[]),Object(A.useEffect)((function(){var e=un(a,r.current,t.current,l,u);return e.forEach((function(e){return window.addEventListener(e.type,e.listener)})),function(){e.forEach((function(e){return window.removeEventListener(e.type,e.listener)}))}}),[a,l]),Object(A.useEffect)((function(){var e=r.current;e.width=n.current.offsetWidth,e.height=n.current.offsetHeight}),[a,o]),P.a.createElement("canvas",{ref:r,className:fn})},fn=Object(K.a)(M||(M=Object(J.a)(["\nposition: absolute;\ntop:0;\nleft:0;\nz-index: -1;\n"]))),pn=function(e){var n=e.parent_ref,t=e.mindmap,a=e.node_refs,r=Object(A.useRef)(),c=Object(A.useState)(0),i=Object(Z.a)(c,2),o=i[0],d=i[1],l=V().theme,u=function(){d(Date.now())};return Object(A.useEffect)((function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]),Object(A.useEffect)((function(){var e=r.current;e.width=n.current.offsetWidth,e.height=n.current.offsetHeight;var c=new Map(Array.from(a).map((function(e){return[e.current.id,[e.current.offsetLeft,e.current.offsetLeft+e.current.offsetWidth,e.current.offsetTop+.5*e.current.offsetHeight,e.current.dataset.tag]]}))),i=e.getContext("2d");on(i,l,t,c)}),[t,l,o]),P.a.createElement("canvas",{ref:r,className:mn})},mn=Object(K.a)(D||(D=Object(J.a)(["\nposition: absolute;\ntop:0;\nleft:0;\nz-index: -2;\n"]))),bn=new Set,hn=function(e){var n=e.container_ref,t=Object(A.useRef)(),a=Object(A.useContext)(B.a),r=a.mindmap.state,c=a.nodeStatus.state,i=a.history.dispatch,o=Y(),d=Object($.a)(),l=d.clearNodeStatus,u=Object(A.useMemo)((function(){return JSON.stringify(r)}),[r]);return Object(A.useEffect)((function(){var e=Pe(c,d,o);return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c]),Object(A.useEffect)((function(){return window.addEventListener("click",l),function(){window.removeEventListener("click",l)}}),[]),Object(A.useEffect)((function(){localStorage.setItem("mindmap",u),i(Object(Ae.b)(u,c.cur_select||c.cur_edit))}),[u]),P.a.createElement("div",{className:gn,ref:t,id:X.d},P.a.createElement(nn,{key:r.id,layer:0,node:r,node_refs:bn}),P.a.createElement(sn,{parent_ref:t,container_ref:n,mindmap:r}),P.a.createElement(pn,{parent_ref:t,mindmap:r,node_refs:bn}))},gn=Object(K.a)(L||(L=Object(J.a)(["\nposition: relative;\nwidth: fit-content;\npadding: 30vh 30vw;\n"]))),On=function(){var e=Object(A.useRef)();return P.a.createElement("main",{ref:e,className:jn},P.a.createElement(hn,{container_ref:e}))},jn=Object(K.a)(I||(I=Object(J.a)(["\nheight: calc(100vh - 56px);\nmargin: 56px 0 0;\noverflow: scroll;\n"]))),vn=function(){return P.a.createElement(B.b,null,P.a.createElement(G,null,P.a.createElement(De,null),P.a.createElement(On,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));H.a.render(P.a.createElement(vn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[36,1,2]]]);
//# sourceMappingURL=main.520607d0.chunk.js.map