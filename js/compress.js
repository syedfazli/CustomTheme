/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes-cssclassprefix:md_
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" md_"+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" md_js md_"+q.join(" md_"):""),e}(this,this.document);;
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){var t=0,i={},a={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),undefined):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t),undefined)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,a=this.headers.length,s=this.headers.index(t.target),n=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:n=this.headers[(s+1)%a];break;case i.LEFT:case i.UP:n=this.headers[(s-1+a)%a];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:n=this.headers[0];break;case i.END:n=this.headers[a-1]}n&&(e(t.target).attr("tabIndex",-1),e(n).attr("tabIndex",0),n.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,a=this.options,s=a.heightStyle,n=this.element.parent(),r=this.accordionId="ui-accordion-"+(this.element.attr("id")||++t);this.active=this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var i=e(this),a=i.attr("id"),s=i.next(),n=s.attr("id");a||(a=r+"-header-"+t,i.attr("id",a)),n||(n=r+"-panel-"+t,s.attr("id",n)),i.attr("aria-controls",n),s.attr("aria-labelledby",a)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(a.event),"fill"===s?(i=n.height(),this.element.siblings(":visible").each(function(){var t=e(this),a=t.css("position");"absolute"!==a&&"fixed"!==a&&(i-=t.outerHeight(!0))}),this.headers.each(function(){i-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(i=0,this.headers.next().each(function(){i=Math.max(i,e(this).css("height","").height())}).height(i))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,a=this.active,s=e(t.currentTarget),n=s[0]===a[0],r=n&&i.collapsible,o=r?e():s.next(),h=a.next(),d={oldHeader:a,oldPanel:h,newHeader:r?e():s,newPanel:o};t.preventDefault(),n&&!i.collapsible||this._trigger("beforeActivate",t,d)===!1||(i.active=r?!1:this.headers.index(s),this.active=n?e():s,this._toggle(d),a.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),n||(s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),s.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,a=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=a,this.options.animate?this._animate(i,a,t):(a.hide(),i.show(),this._toggleComplete(t)),a.attr({"aria-hidden":"true"}),a.prev().attr("aria-selected","false"),i.length&&a.length?a.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(e,t,s){var n,r,o,h=this,d=0,c=e.length&&(!t.length||e.index()<t.index()),l=this.options.animate||{},u=c&&l.down||l,v=function(){h._toggleComplete(s)};return"number"==typeof u&&(o=u),"string"==typeof u&&(r=u),r=r||u.easing||l.easing,o=o||u.duration||l.duration,t.length?e.length?(n=e.show().outerHeight(),t.animate(i,{duration:o,easing:r,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(a,{duration:o,easing:r,complete:v,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?d+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(n-t.outerHeight()-d),d=0)}}),undefined):t.animate(i,o,r,v):e.animate(a,o,r,v)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e){e.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(e){var t,i="ui-button ui-widget ui-state-default ui-corner-all",n="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",s=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},a=function(t){var i=t.name,n=t.form,s=e([]);return i&&(i=i.replace(/'/g,"\\'"),s=n?e(n).find("[name='"+i+"']"):e("[name='"+i+"']",t.ownerDocument).filter(function(){return!this.form})),s};e.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,s),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var n=this,o=this.options,r="checkbox"===this.type||"radio"===this.type,h=r?"":"ui-state-active";null===o.label&&(o.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){o.disabled||this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){o.disabled||e(this).removeClass(h)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),r&&this.element.bind("change"+this.eventNamespace,function(){n.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return o.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),n.buttonElement.attr("aria-pressed","true");var t=n.element[0];a(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return o.disabled?!1:(e(this).addClass("ui-state-active"),t=this,n.document.one("mouseup",function(){t=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return o.disabled?!1:(e(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(t){return o.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.element.prop("disabled",!!t),t&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?a(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var t=this.buttonElement.removeClass(n),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,a=s.primary&&s.secondary,o=[];s.primary||s.secondary?(this.options.text&&o.push("ui-button-text-icon"+(a?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(o.push(a?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):o.push("ui-button-text-only"),t.addClass(o.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){e.datepicker._isDisabledDatepicker(n.inline?t.parent()[0]:n.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function s(t,i){e.extend(t,i);for(var a in i)null==i[a]&&(t[a]=i[a]);return t}e.extend(e.ui,{datepicker:{version:"1.10.4"}});var n,r="datepicker";e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return s(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var a,s,n;a=t.nodeName.toLowerCase(),s="div"===a||"span"===a,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),s),n.settings=e.extend({},i||{}),"input"===a?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var a=e(t);i.append=e([]),i.trigger=e([]),a.hasClass(this.markerClassName)||(this._attachments(a,i),a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,r,i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var a,s,n,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),a=this._get(i,"showOn"),("focus"===a||"both"===a)&&t.focus(this._showDatepicker),("button"===a||"both"===a)&&(s=this._get(i,"buttonText"),n=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:s,title:s}):s)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,a,s,n=new Date(2009,11,20),r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(i=0,a=0,s=0;e.length>s;s++)e[s].length>i&&(i=e[s].length,a=s);return a},n.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,i){var a=e(t);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(i.dpDiv),e.data(t,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,a,n,o){var u,c,h,l,d,p=this._dialogInst;return p||(this.uuid+=1,u="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+u+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],r,p)),s(p.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(c=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+l,h/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(t){var i,a=e(t),s=e.data(t,r);a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,r),"input"===i?(s.append.remove(),s.trigger.remove(),a.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&a.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,a,n){var r,o,u,c,h=this._getInst(i);return 2===arguments.length&&"string"==typeof a?"defaults"===a?e.extend({},e.datepicker._defaults):h?"all"===a?e.extend({},h.settings):this._get(h,a):null:(r=a||{},"string"==typeof a&&(r={},r[a]=n),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),u=this._getMinMaxDate(h,"min"),c=this._getMinMaxDate(h,"max"),s(h.settings,r),null!==u&&r.dateFormat!==t&&r.minDate===t&&(h.settings.minDate=this._formatDate(h,u)),null!==c&&r.dateFormat!==t&&r.maxDate===t&&(h.settings.maxDate=this._formatDate(h,c)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(e(i),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),t)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,a,s,n=e.datepicker._getInst(t.target),r=!0,o=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;case 13:return s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),s[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),i=e.datepicker._get(n,"onSelect"),i?(a=e.datepicker._formatDate(n),i.apply(n.input?n.input[0]:null,[a,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;default:r=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(i){var a,s,n=e.datepicker._getInst(i.target);return e.datepicker._get(n,"constrainInput")?(a=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">s||!a||a.indexOf(s)>-1):t},_doKeyUp:function(t){var i,a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a)),i&&(e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(s){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,a,n,r,o,u,c;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),a=e.datepicker._get(i,"beforeShow"),n=a?a.apply(t,[t,i]):{},n!==!1&&(s(i.settings,n),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),r=!1,e(t).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),o=e.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(u=e.datepicker._get(i,"showAnim"),c=e.datepicker._get(i,"duration"),i.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[u]?i.dpDiv.show(u,e.datepicker._get(i,"showOptions"),c):i.dpDiv[u||"show"](u?c:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,n=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,a=this._getNumberOfMonths(t),s=a[1],r=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",r*s+"em"),t.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,a){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,u=document.documentElement.clientWidth+(a?0:e(document).scrollLeft()),c=document.documentElement.clientHeight+(a?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?s-r:0,i.left-=a&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=a&&i.top===t.input.offset().top+o?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>u&&u>s?Math.abs(i.left+s-u):0),i.top-=Math.min(i.top,i.top+n>c&&c>n?Math.abs(n+o):0),i},_findPos:function(t){for(var i,a=this._getInst(t),s=this._get(a,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,a,s,n,o=this._curInst;!o||t&&o!==e.data(t,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),a=this._get(o,"duration"),s=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),a,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),a=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==a)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,a){var s=e(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,i+("M"===a?this._get(n,"showCurrentAtPos"):0),a),this._updateDatepicker(n))},_gotoToday:function(t){var i,a=e(t),s=this._getInst(a[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(a)},_selectMonthYear:function(t,i,a){var s=e(t),n=this._getInst(s[0]);n["selected"+("M"===a?"Month":"Year")]=n["draw"+("M"===a?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,i,a,s){var n,r=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(n=this._getInst(r[0]),n.selectedDay=n.currentDay=e("a",s).html(),n.selectedMonth=n.currentMonth=i,n.selectedYear=n.currentYear=a,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var a,s=e(t),n=this._getInst(s[0]);i=null!=i?i:this._formatDate(n),n.input&&n.input.val(i),this._updateAlternate(n),a=this._get(n,"onSelect"),a?a.apply(n.input?n.input[0]:null,[i,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,a,s,n=this._get(t,"altField");n&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),a=this._getDate(t),s=this.formatDate(i,a,this._getFormatConfig(t)),e(n).each(function(){e(this).val(s)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(i,a,s){if(null==i||null==a)throw"Invalid arguments";if(a="object"==typeof a?""+a:a+"",""===a)return null;var n,r,o,u,c=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,l="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,p=(s?s.dayNames:null)||this._defaults.dayNames,g=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,m=(s?s.monthNames:null)||this._defaults.monthNames,f=-1,_=-1,v=-1,k=-1,y=!1,b=function(e){var t=i.length>n+1&&i.charAt(n+1)===e;return t&&n++,t},D=function(e){var t=b(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=RegExp("^\\d{1,"+i+"}"),n=a.substring(c).match(s);if(!n)throw"Missing number at position "+c;return c+=n[0].length,parseInt(n[0],10)},w=function(i,s,n){var r=-1,o=e.map(b(i)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,i){var s=i[1];return a.substr(c,s.length).toLowerCase()===s.toLowerCase()?(r=i[0],c+=s.length,!1):t}),-1!==r)return r+1;throw"Unknown name at position "+c},M=function(){if(a.charAt(c)!==i.charAt(n))throw"Unexpected literal at position "+c;c++};for(n=0;i.length>n;n++)if(y)"'"!==i.charAt(n)||b("'")?M():y=!1;else switch(i.charAt(n)){case"d":v=D("d");break;case"D":w("D",d,p);break;case"o":k=D("o");break;case"m":_=D("m");break;case"M":_=w("M",g,m);break;case"y":f=D("y");break;case"@":u=new Date(D("@")),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"!":u=new Date((D("!")-this._ticksTo1970)/1e4),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"'":b("'")?M():y=!0;break;default:M()}if(a.length>c&&(o=a.substr(c),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(l>=f?0:-100)),k>-1)for(_=1,v=k;;){if(r=this._getDaysInMonth(f,_-1),r>=v)break;_++,v-=r}if(u=this._daylightSavingAdjust(new Date(f,_-1,v)),u.getFullYear()!==f||u.getMonth()+1!==_||u.getDate()!==v)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,u=function(t){var i=e.length>a+1&&e.charAt(a+1)===t;return i&&a++,i},c=function(e,t,i){var a=""+t;if(u(e))for(;i>a.length;)a="0"+a;return a},h=function(e,t,i,a){return u(e)?a[t]:i[t]},l="",d=!1;if(t)for(a=0;e.length>a;a++)if(d)"'"!==e.charAt(a)||u("'")?l+=e.charAt(a):d=!1;else switch(e.charAt(a)){case"d":l+=c("d",t.getDate(),2);break;case"D":l+=h("D",t.getDay(),s,n);break;case"o":l+=c("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=c("m",t.getMonth()+1,2);break;case"M":l+=h("M",t.getMonth(),r,o);break;case"y":l+=u("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=1e4*t.getTime()+this._ticksTo1970;break;case"'":u("'")?l+="'":d=!0;break;default:l+=e.charAt(a)}return l},_possibleChars:function(e){var t,i="",a=!1,s=function(i){var a=e.length>t+1&&e.charAt(t+1)===i;return a&&t++,a};for(t=0;e.length>t;t++)if(a)"'"!==e.charAt(t)||s("'")?i+=e.charAt(t):a=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":a=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,i){return e.settings[i]!==t?e.settings[i]:this._defaults[i]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),a=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),n=s,r=this._getFormatConfig(e);try{n=this.parseDate(i,a,r)||s}catch(o){a=t?"":a}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=a?n.getDate():0,e.currentMonth=a?n.getMonth():0,e.currentYear=a?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,a){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(a){}for(var s=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=s.getFullYear(),r=s.getMonth(),o=s.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,c=u.exec(i);c;){switch(c[2]||"d"){case"d":case"D":o+=parseInt(c[1],10);break;case"w":case"W":o+=7*parseInt(c[1],10);break;case"m":case"M":r+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r));break;case"y":case"Y":n+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r))}c=u.exec(i)}return new Date(n,r,o)},r=null==i||""===i?a:"string"==typeof i?n(i):"number"==typeof i?isNaN(i)?a:s(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?a:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s===e.selectedMonth&&n===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),a="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(a,-i,"M")},next:function(){e.datepicker._adjustDate(a,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(a)},selectDay:function(){return e.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(a,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,a,s,n,r,o,u,c,h,l,d,p,g,m,f,_,v,k,y,b,D,w,M,C,x,I,N,T,A,E,S,Y,F,P,O,j,K,R,H=new Date,W=this._daylightSavingAdjust(new Date(H.getFullYear(),H.getMonth(),H.getDate())),L=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),z=this._get(e,"navigationAsDateFormat"),q=this._getNumberOfMonths(e),G=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),Q=1!==q[0]||1!==q[1],V=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-G,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-q[0]*q[1]+1,X.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=z?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):i,a=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>",s=this._get(e,"nextText"),s=z?this.formatDate(s,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):s,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?V:W,r=z?this.formatDate(r,o,this._getFormatConfig(e)):r,u=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",c=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(L?u:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(L?"":u)+"</div>":"",h=parseInt(this._get(e,"firstDay"),10),h=isNaN(h)?0:h,l=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),v=this._get(e,"selectOtherMonths"),k=this._getDefaultDate(e),y="",D=0;q[0]>D;D++){for(w="",this.maxRows=4,M=0;q[1]>M;M++){if(C=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),x=" ui-corner-all",I="",Q){if(I+="<div class='ui-datepicker-group",q[1]>1)switch(M){case 0:I+=" ui-datepicker-group-first",x=" ui-corner-"+(L?"right":"left");break;case q[1]-1:I+=" ui-datepicker-group-last",x=" ui-corner-"+(L?"left":"right");break;default:I+=" ui-datepicker-group-middle",x=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===D?L?n:a:"")+(/all|right/.test(x)&&0===D?L?a:n:"")+this._generateMonthYearHeader(e,Z,et,$,X,D>0||M>0,g,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=l?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",b=0;7>b;b++)T=(b+h)%7,N+="<th"+((b+h+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[T]+"'>"+p[T]+"</span></th>";for(I+=N+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),E=(this._getFirstDayOfMonth(et,Z)-h+7)%7,S=Math.ceil((E+A)/7),Y=Q?this.maxRows>S?this.maxRows:S:S,this.maxRows=Y,F=this._daylightSavingAdjust(new Date(et,Z,1-E)),P=0;Y>P;P++){for(I+="<tr>",O=l?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(F)+"</td>":"",b=0;7>b;b++)j=f?f.apply(e.input?e.input[0]:null,[F]):[!0,""],K=F.getMonth()!==Z,R=K&&!v||!j[0]||$&&$>F||X&&F>X,O+="<td class='"+((b+h+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(F.getTime()===C.getTime()&&Z===e.selectedMonth&&e._keyEvent||k.getTime()===F.getTime()&&k.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!_?"":" "+j[1]+(F.getTime()===V.getTime()?" "+this._currentClass:"")+(F.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(K&&!_||!j[2]?"":" title='"+j[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+F.getMonth()+"' data-year='"+F.getFullYear()+"'")+">"+(K&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+F.getDate()+"</span>":"<a class='ui-state-default"+(F.getTime()===W.getTime()?" ui-state-highlight":"")+(F.getTime()===V.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+"' href='#'>"+F.getDate()+"</a>")+"</td>",F.setDate(F.getDate()+1),F=this._daylightSavingAdjust(F);I+=O+"</tr>"}Z++,Z>11&&(Z=0,et++),I+="</tbody></table>"+(Q?"</div>"+(q[0]>0&&M===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=I}y+=w}return y+=c,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var u,c,h,l,d,p,g,m,f=this._get(e,"changeMonth"),_=this._get(e,"changeYear"),v=this._get(e,"showMonthAfterYear"),k="<div class='ui-datepicker-title'>",y="";if(n||!f)y+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(u=a&&a.getFullYear()===i,c=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;12>h;h++)(!u||h>=a.getMonth())&&(!c||s.getMonth()>=h)&&(y+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+o[h]+"</option>");y+="</select>"}if(v||(k+=y+(!n&&f&&_?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!_)k+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(l=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);
return isNaN(t)?d:t},g=p(l[0]),m=Math.max(g,p(l[1]||"")),g=a?Math.max(g,a.getFullYear()):g,m=s?Math.min(m,s.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=g;g++)e.yearshtml+="<option value='"+g+"'"+(g===i?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",k+=e.yearshtml,e.yearshtml=null}return k+=this._get(e,"yearSuffix"),v&&(k+=(!n&&f&&_?"":"&#xa0;")+y),k+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"===i?t:0),s=e.drawMonth+("M"===i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"===i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i,a,s=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),r=null,o=null,u=this._get(e,"yearRange");return u&&(i=u.split(":"),a=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=a),i[1].match(/[+\-].*/)&&(o+=a)),(!s||t.getTime()>=s.getTime())&&(!n||t.getTime()<=n.getTime())&&(!r||t.getFullYear()>=r)&&(!o||o>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.4"})(jQuery);(function(e){var t={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,a=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(s){}this._hide(this.uiDialog,this.options.hide,function(){a._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!t&&this._trigger("focus",e),i},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),undefined;if(t.keyCode===e.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),a=i.filter(":first"),s=i.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==a[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(s.focus(1),t.preventDefault()):(a.focus(1),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(e.each(i,function(i,a){var s,n;a=e.isFunction(a)?{click:a,text:i}:a,a=e.extend({type:"button"},a),s=a.click,a.click=function(){s.apply(t.element[0],arguments)},n={icons:a.icons,text:a.showText},delete a.icons,delete a.showText,e("<button></button>",a).button(n).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,a=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(a,s){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",a,t(s))},drag:function(e,a){i._trigger("drag",e,t(a))},stop:function(s,n){a.position=[n.position.left-i.document.scrollLeft(),n.position.top-i.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",s,t(n))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,a=this.options,s=a.resizable,n=this.uiDialog.css("position"),r="string"==typeof s?s:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:a.maxWidth,maxHeight:a.maxHeight,minWidth:a.minWidth,minHeight:this._minHeight(),handles:r,start:function(a,s){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",a,t(s))},resize:function(e,a){i._trigger("resize",e,t(a))},stop:function(s,n){a.height=e(this).height(),a.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",s,t(n))}}).css("position",n)},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(a){var s=this,n=!1,r={};e.each(a,function(e,a){s._setOption(e,a),e in t&&(n=!0),e in i&&(r[e]=a)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",r)},_setOption:function(e,t){var i,a,s=this.uiDialog;"dialogClass"===e&&s.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=s.is(":data(ui-draggable)"),i&&!t&&s.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(a=s.is(":data(ui-resizable)"),a&&!t&&s.resizable("destroy"),a&&"string"==typeof t&&s.resizable("option","handles",t),a||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,a=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),a.minWidth>a.width&&(a.width=a.minWidth),e=this.uiDialog.css({height:"auto",width:a.width}).outerHeight(),t=Math.max(0,a.minHeight-e),i="number"==typeof a.maxHeight?Math.max(0,a.maxHeight-e):"none","auto"===a.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,a.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=this,i=this.widgetFullName;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(a){t._allowInteraction(a)||(a.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t,i=this.options.position,a=[],s=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(a=i.split?i.split(" "):[i[0],i[1]],1===a.length&&(a[1]=a[0]),e.each(["left","top"],function(e,t){+a[e]===a[e]&&(s[e]=a[e],a[e]=t)}),i={my:a[0]+(0>s[0]?s[0]:"+"+s[0])+" "+a[1]+(0>s[1]?s[1]:"+"+s[1]),at:a.join(" ")}),i=e.extend({},e.ui.dialog.prototype.options.position,i)):i=e.ui.dialog.prototype.options.position,t=this.uiDialog.is(":visible"),t||this.uiDialog.show(),this.uiDialog.position(i),t||this.uiDialog.hide()}})})(jQuery);(function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=e.pageX,h=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,a=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,a))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,a,o,r,l,h,c,u,d,p=t(this).data("ui-draggable"),g=p.options,f=g.snapTolerance,m=i.offset.left,_=m+p.helperProportions.width,v=i.offset.top,b=v+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,l=r+p.snapElements[u].width,h=p.snapElements[u].top,c=h+p.snapElements[u].height,r-f>_||m>l+f||h-f>b||v>c+f||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==g.snapMode&&(s=f>=Math.abs(h-b),n=f>=Math.abs(c-v),a=f>=Math.abs(r-_),o=f>=Math.abs(l-m),s&&(i.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l}).left-p.margins.left)),d=s||n||a||o,"outer"!==g.snapMode&&(s=f>=Math.abs(h-v),n=f>=Math.abs(c-b),a=f>=Math.abs(r-m),o=f>=Math.abs(l-_),s&&(i.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||a||o||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],undefined):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},t.ui.ddmanager.droppables[i.scope]=t.ui.ddmanager.droppables[i.scope]||[],t.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,a,o=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,l=o+t.helperProportions.width,h=r+t.helperProportions.height,c=i.offset.left,u=i.offset.top,d=c+i.proportions().width,p=u+i.proportions().height;switch(s){case"fit":return o>=c&&d>=l&&r>=u&&p>=h;case"intersect":return o+t.helperProportions.width/2>c&&d>l-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&p>h-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,a=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(a,u,i.proportions().height)&&e(n,c,i.proportions().width);case"touch":return(r>=u&&p>=r||h>=u&&p>=h||u>r&&h>p)&&(o>=c&&d>=o||l>=c&&d>=l||c>o&&l>d);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,a=t.ui.ddmanager.droppables[e.options.scope]||[],o=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||e&&!a[s].accept.call(a[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue t}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=t.ui.intersect(e,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),a.length&&(s=t.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}})(jQuery);(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,a){var o,r=a.re.exec(i),l=r&&a.parse(r),h=a.space||"rgba";return l?(o=s[h](l),s[c[h].cache]=o[c[h].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,o,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,l],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),a=c[n],o=0===this.alpha()?h("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],h=s[a],c=u[n.type]||{};null!==h&&(null===o?l[a]=h:(c.mod&&(h-o>c.mod/2?o+=c.mod:o-h>c.mod/2&&(o-=c.mod)),l[a]=i((h-o)*e+o,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),l=Math.min(s,n,a),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-a)/h+360:n===r?60*(a-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[o]&&(this[o]=l(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[o]=d,n):h(d)},f(a,function(e,i){h.fn[e]||(h.fn[e]=function(n){var a,o=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=h(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",h=l.children?o.find("*").addBack():o;h=h.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),h=h.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);(function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var a,o,r,l=t(this),h=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(l,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",g=i.test(u),m={},v="show"===c;l.parent().is(".ui-effects-wrapper")?t.effects.save(l.parent(),h):t.effects.save(l,h),l.show(),a=t.effects.createWrapper(l).css({overflow:"hidden"}),o=a[p](),r=parseFloat(a.css(f))||0,m[p]=v?o:0,g||(l.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:o+r),v&&(a.css(p,0),g||a.css(f,r+o)),a.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&l.hide(),t.effects.restore(l,h),t.effects.removeWrapper(l),n()}})}})(jQuery);(function(t){t.effects.effect.bounce=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"effect"),h="hide"===l,c="show"===l,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||h?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=o.queue(),y=b.length;for((c||h)&&r.push("opacity"),t.effects.save(o,r),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,_?2*-d:2*d).animate(a,g,m)),h&&(d/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,o.animate(n,g,m).animate(a,g,m),d=h?2*d:d/2;h&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,o.animate(n,g,m)),o.queue(function(){h&&o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),o.dequeue()}})(jQuery);(function(t){t.effects.effect.clip=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"hide"),h="show"===l,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(o,r),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[d](),h&&(n.css(d,0),n.css(p,a/2)),f[d]=h?a:0,f[p]=h?0:a/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){h||o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(n,e.mode||"hide"),r="show"===o,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,a),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(h,"pos"===c?-s:s),u[h]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),g||p.hide(),i()}var a,o,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(a=0;u>a;a++)for(l=m.top+a*_,c=a-(u-1)/2,o=0;d>o;o++)r=m.left+o*v,h=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?h*v:0),top:l+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:h*v),top:l+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,s)}})(jQuery);(function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}})(jQuery);(function(t){t.effects.effect.fold=function(e,i){var s,n,a=t(this),o=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(a,e.mode||"hide"),l="show"===r,h="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=l!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(a,o),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[h?0:1]),l&&s.css(d?{height:0,width:c}:{height:c,width:0}),m[f[0]]=l?n[0]:c,v[f[1]]=l?n[1]:0,s.animate(m,g,e.easing).animate(v,g,e.easing,function(){h&&a.hide(),t.effects.restore(a,o),t.effects.removeWrapper(a),i()})}})(jQuery);(function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],a=t.effects.setMode(s,e.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,n),i()}})}})(jQuery);(function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),a=t.effects.setMode(n,e.mode||"show"),o="show"===a,r="hide"===a,l=o||"hide"===a,h=2*(e.times||5)+(l?1:0),c=e.duration/h,u=0,d=n.queue(),p=d.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;h>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,h+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),a="hide"===n,o=parseInt(e.percent,10)||150,r=o/100,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?l:{height:l.height*r,width:l.width*r,outerHeight:l.outerHeight*r,outerWidth:l.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),a=t.effects.setMode(s,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===a?0:100),r=e.direction||"both",l=e.origin,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=l||["middle","center"],n.restore=!0),n.from=e.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:h),n.to={height:h.height*c.y,width:h.width*c.x,outerHeight:h.outerHeight*c.y,outerWidth:h.outerWidth*c.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=o.css("position"),_=f?r:l,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===p?(o.from=e.to||b,o.to=e.from||s):(o.from=e.from||("show"===p?b:s),o.to=e.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===g||"both"===g)&&(a.from.y!==a.to.y&&(_=_.concat(u),o.from=t.effects.setTransition(o,u,a.from.y,o.from),o.to=t.effects.setTransition(o,u,a.to.y,o.to)),a.from.x!==a.to.x&&(_=_.concat(d),o.from=t.effects.setTransition(o,d,a.from.x,o.from),o.to=t.effects.setTransition(o,d,a.to.x,o.to))),("content"===g||"both"===g)&&a.from.y!==a.to.y&&(_=_.concat(c).concat(h),o.from=t.effects.setTransition(o,c,a.from.y,o.from),o.to=t.effects.setTransition(o,c,a.to.y,o.to)),t.effects.save(o,_),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(n=t.effects.getBaseline(m,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===g||"both"===g)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),h=r.concat(u).concat(d),o.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,h),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=t.effects.setTransition(i,u,a.from.y,i.from),i.to=t.effects.setTransition(i,u,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=t.effects.setTransition(i,d,a.from.x,i.from),i.to=t.effects.setTransition(i,d,a.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,h)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,_),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var s=parseInt(i,10),n=t?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",l=e.distance||20,h=e.times||3,c=2*h+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,a),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+l,g[d]=(p?"+=":"-=")+2*l,m[d]=(p?"-=":"+=")+2*l,n.animate(f,u,e.easing),s=1;h>s;s++)n.animate(g,u,e.easing).animate(m,u,e.easing);n.animate(g,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(h,c?isNaN(s)?"-"+s:-s:s),u[h]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),a="fixed"===n.css("position"),o=t("body"),r=a?o.scrollTop():0,l=a?o.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-l,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,l=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:l=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}l&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);(function(t,e){t.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})})(jQuery);(function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),a="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,a;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,a),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(t(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),o.containment&&(s+=t(o.containment).scrollLeft()||0,n+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-a.left||0,d=e.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,a=s?0:c.sizeDiff.width,o={width:c.helper.width()-a,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(o,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,a=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return o&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),a&&(t.height=e.maxHeight),o&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),a&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,a=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:o,h=t.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,a,o=t(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,c=o._aspectRatio||e.shiftKey,u={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-u.left),c&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),c&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-u.left:o.offset.left-u.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-u.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=Math.abs(o.parentData.left)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,c&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,c&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,a=e.containerElement,o=t(e.helper),r=o.offset(),h=o.outerWidth()-e.sizeDiff.width,l=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(a[e]=i||null)}),e.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,a=e.originalPosition,o=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),v&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(o)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(o)?(e.size.width=d,e.size.height=p,e.position.top=a.top-u):/^(sw)$/.test(o)?(e.size.width=d,e.size.height=p,e.position.left=a.left-c):(p-l>0?(e.size.height=p,e.position.top=a.top-u):(e.size.height=l,e.position.top=a.top+n.height-l),d-h>0?(e.size.width=d,e.position.left=a.left-c):(e.size.width=h,e.position.left=a.left+n.width-h))}})})(jQuery);(function(t){t.widget("ui.selectable",t.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=e.pageX,l=e.pageY;return a>r&&(i=r,r=a,a=i),o>l&&(i=l,l=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:l-o}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?h=!(i.left>r||a>i.right||i.top>l||o>i.bottom):"fit"===n.tolerance&&(h=i.left>a&&r>i.right&&i.top>o&&l>i.bottom),h?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):undefined}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return n?this.floating?a&&"right"===a||"down"===o?2:1:o&&("down"===o?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,o,a,r,h,l,c,u,d,p,f=null,g=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],g=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[g].containerCache.over||(this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1);else{for(a=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],o=this.items.length-1;o>=0;o--)t.contains(this.containers[g].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(d=!0,u+=this.items[o][l]),a>Math.abs(u-c)&&(a=Math.abs(u-c),r=this.items[o],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[g])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[g].element,!0),this._trigger("change",s,this._uiHash()),this.containers[g]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);(function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})})(jQuery);(function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,c))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);;
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);;
(function(c){var M=function(a){a=c.extend(c.Event(a),function(){for(var a={},z=c.address.parameterNames(),d=0,e=z.length;d<e;d++)a[z[d]]=c.address.parameter(z[d]);return{value:c.address.value(),path:c.address.path(),pathNames:c.address.pathNames(),parameterNames:z,parameters:a,queryString:c.address.queryString()}}.call(c.address));c(c.address).trigger(a);return a},u=function(a){return Array.prototype.slice.call(a)},A=function(a,b,z){c().bind.apply(c(c.address),Array.prototype.slice.call(arguments)); return c.address},$=function(a,b){c().unbind.apply(c(c.address),Array.prototype.slice.call(arguments));return c.address},B=function(){return v.pushState&&d.state!==j},Q=function(){return("/"+k.pathname.replace(RegExp(d.state),"")+k.search+(I()?"#"+I():"")).replace(P,"/")},I=function(){var a=k.href.indexOf("#");return-1!=a?p(k.href.substr(a+1),h):""},q=function(){return B()?Q():I()},N=function(a){a=a.toString();return(d.strict&&"/"!=a.substr(0,1)?"/":"")+a},p=function(a,b){return d.crawlable&&b?(""!== a?"!":"")+a:a.replace(/^\!/,"")},r=function(a,b){return parseInt(a.css(b),10)},E=function(){if(!t){var a=q();decodeURI(e)!=decodeURI(a)&&(s&&7>w?k.reload():(s&&(!C&&d.history)&&n(J,50),_old=e,e=a,D(h)))}},D=function(a){var b=M(R);a=M(a?S:T);n(aa,10);if(b.isDefaultPrevented()||a.isDefaultPrevented())e=_old,B()?v.popState({},"",d.state.replace(/\/$/,"")+(""===e?"/":e)):(t=l,x?d.history?k.hash="#"+p(e,l):k.replace("#"+p(e,l)):e!=q()&&(d.history?k.hash="#"+p(e,l):k.replace("#"+p(e,l))),s&&!C&&d.history&& n(J,50),x?n(function(){t=h},1):t=h)},aa=function(){if("null"!==d.tracker&&d.tracker!==F){var a=c.isFunction(d.tracker)?d.tracker:f[d.tracker],b=(k.pathname+k.search+(c.address&&!B()?c.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");c.isFunction(a)?a(b):c.isFunction(f.urchinTracker)?f.urchinTracker(b):f.pageTracker!==j&&c.isFunction(f.pageTracker._trackPageview)?f.pageTracker._trackPageview(b):f._gaq!==j&&c.isFunction(f._gaq.push)&&f._gaq.push(["_trackPageview",decodeURI(b)])}},J=function(){var a= "javascript:"+h+";document.open();document.writeln('<html><head><title>"+m.title.replace(/\'/g,"\\'")+"</title><script>var "+y+' = "'+encodeURIComponent(q()).replace(/\'/g,"\\'")+(m.domain!=k.hostname?'";document.domain="'+m.domain:"")+"\";\x3c/script></head></html>');document.close();";7>w?g.src=a:g.contentWindow.location.replace(a)},V=function(){if(G&&-1!=U){var a,b,c=G.substr(U+1).split("&");for(a=0;a<c.length;a++)b=c[a].split("="),/^(autoUpdate|crawlable|history|strict|wrap)$/.test(b[0])&&(d[b[0]]= isNaN(b[1])?/^(true|yes)$/i.test(b[1]):0!==parseInt(b[1],10)),/^(state|tracker)$/.test(b[0])&&(d[b[0]]=b[1]);G=F}_old=e;e=q()},X=function(){if(!W){W=l;V();var a=function(){var a,b=c("a"),e=b.size(),f=-1,j=function(){++f!=e&&(a=c(b.get(f)),a.is('[rel*="address:"]')&&a.address('[rel*="address:"]'),n(j,1))};n(j,1);if(d.crawlable){var h=k.pathname.replace(/\/$/,"");-1!=c("body").html().indexOf("_escaped_fragment_")&&c('a[href]:not([href^=http]), a[href*="'+document.domain+'"]').each(function(){var a= c(this).attr("href").replace(/^http:/,"").replace(RegExp(h+"/?$"),"");(""===a||-1!=a.indexOf("_escaped_fragment_"))&&c(this).attr("href","#"+encodeURI(decodeURIComponent(a.replace(/\/(.*)\?_escaped_fragment_=(.*)$/,"!$2"))))})}},b=c("body").ajaxComplete(a);a();d.wrap&&(c("body > *").wrapAll('<div style="padding:'+(r(b,"marginTop")+r(b,"paddingTop"))+"px "+(r(b,"marginRight")+r(b,"paddingRight"))+"px "+(r(b,"marginBottom")+r(b,"paddingBottom"))+"px "+(r(b,"marginLeft")+r(b,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+ y+'" style="height:100%;overflow:auto;position:relative;'+(x&&!window.statusbar.visible?"resize:both;":"")+'" />'),c("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"}),x&&c('<style type="text/css" />').appendTo("head").text("#"+y+"::-webkit-resizer { background-color: #fff; }"));s&&!C&&(a=m.getElementsByTagName("frameset")[0],g=m.createElement((a?"":"i")+"frame"),g.src="javascript:"+h,a?(a.insertAdjacentElement("beforeEnd",g),a[a.cols?"cols":"rows"]+=",0",g.noResize=l,g.frameBorder= g.frameSpacing=0):(g.style.display="none",g.style.width=g.style.height=0,g.tabIndex=-1,m.body.insertAdjacentElement("afterBegin",g)),n(function(){c(g).bind("load",function(){var a=g.contentWindow;_old=e;e=a[y]!==j?a[y]:"";e!=q()&&(D(h),k.hash=p(e,l))});g.contentWindow[y]===j&&J()},50));n(function(){M("init");D(h)},1);B()||(s&&7<w||!s&&C?f.addEventListener?f.addEventListener(H,E,h):f.attachEvent&&f.attachEvent("on"+H,E):ba(E,50));"state"in window.history&&c(window).trigger("popstate")}},j,F=null,y= "jQueryAddress",H="hashchange",R="change",S="internalChange",T="externalChange",l=!0,h=!1,d={autoUpdate:l,crawlable:h,history:l,strict:l,wrap:h},K=navigator.userAgent.toLowerCase(),w=9,s=-1!==K.search("msie"),x=-1!==K.search("webkit"),f;try{f=top.document!==j&&top.document.title!==j?top:window}catch(da){f=window}var m=f.document,v=f.history,k=f.location,ba=setInterval,n=setTimeout,P=/\/{2,9}/g,C="on"+H in f,g,G=c("script:last").attr("src"),U=G?G.indexOf("?"):-1,O=m.title,t=h,W=h,Y=l,L=h,e=q();_old= e;if(s){w=parseFloat(K.substr(K.indexOf("msie")+4));m.documentMode&&m.documentMode!=w&&(w=8!=m.documentMode?7:8);var Z=m.onpropertychange;m.onpropertychange=function(){Z&&Z.call(m);m.title!=O&&-1!=m.title.indexOf("#"+q())&&(m.title=O)}}v.navigationMode&&(v.navigationMode="compatible");if("complete"==document.readyState)var ca=setInterval(function(){c.address&&(X(),clearInterval(ca))},50);else V(),c(X);c(window).bind("popstate",function(){decodeURI(e)!=decodeURI(q())&&(_old=e,e=q(),D(h))}).bind("unload", function(){f.removeEventListener?f.removeEventListener(H,E,h):f.detachEvent&&f.detachEvent("on"+H,E)});c.address={bind:function(a,b,c){return A.apply(this,u(arguments))},unbind:function(a,b){return $.apply(this,u(arguments))},init:function(a,b){return A.apply(this,["init"].concat(u(arguments)))},change:function(a,b){return A.apply(this,[R].concat(u(arguments)))},internalChange:function(a,b){return A.apply(this,[S].concat(u(arguments)))},externalChange:function(a,b){return A.apply(this,[T].concat(u(arguments)))}, baseURL:function(){var a=k.href;-1!=a.indexOf("#")&&(a=a.substr(0,a.indexOf("#")));/\/$/.test(a)&&(a=a.substr(0,a.length-1));return a},autoUpdate:function(a){return a!==j?(d.autoUpdate=a,this):d.autoUpdate},crawlable:function(a){return a!==j?(d.crawlable=a,this):d.crawlable},history:function(a){return a!==j?(d.history=a,this):d.history},state:function(a){if(a!==j){d.state=a;var b=Q();d.state!==j&&(v.pushState?"/#/"==b.substr(0,3)&&k.replace(d.state.replace(/^\/$/,"")+b.substr(2)):"/"!=b&&b.replace(/^\/#/, "")!=I()&&n(function(){k.replace(d.state.replace(/^\/$/,"")+"/#"+b)},1));return this}return d.state},strict:function(a){return a!==j?(d.strict=a,this):d.strict},tracker:function(a){return a!==j?(d.tracker=a,this):d.tracker},wrap:function(a){return a!==j?(d.wrap=a,this):d.wrap},update:function(){L=l;this.value(e);L=h;return this},title:function(a){return a!==j?(n(function(){O=m.title=a;Y&&(g&&g.contentWindow&&g.contentWindow.document)&&(g.contentWindow.document.title=a,Y=h)},50),this):m.title},value:function(a){if(a!== j){a=N(a);"/"==a&&(a="");if(e==a&&!L)return;_old=e;e=a;if(d.autoUpdate||L)if(D(l),B())v[d.history?"pushState":"replaceState"]({},"",d.state.replace(/\/$/,"")+(""===e?"/":e));else t=l,x?d.history?k.hash="#"+p(e,l):k.replace("#"+p(e,l)):e!=q()&&(d.history?k.hash="#"+p(e,l):k.replace("#"+p(e,l))),s&&!C&&d.history&&n(J,50),x?n(function(){t=h},1):t=h;return this}return N(e)},path:function(a){if(a!==j){var b=this.queryString(),c=this.hash();this.value(a+(b?"?"+b:"")+(c?"#"+c:""));return this}return N(e).split("#")[0].split("?")[0]}, pathNames:function(){var a=this.path(),b=a.replace(P,"/").split("/");("/"==a.substr(0,1)||0===a.length)&&b.splice(0,1);"/"==a.substr(a.length-1,1)&&b.splice(b.length-1,1);return b},queryString:function(a){if(a!==j){var b=this.hash();this.value(this.path()+(a?"?"+a:"")+(b?"#"+b:""));return this}a=e.split("?");return a.slice(1,a.length).join("?").split("#")[0]},parameter:function(a,b,d){var e,f;if(b!==j){var h=this.parameterNames();f=[];b=b===j||b===F?"":b.toString();for(e=0;e<h.length;e++){var k=h[e], g=this.parameter(k);"string"==typeof g&&(g=[g]);k==a&&(g=b===F||""===b?[]:d?g.concat([b]):[b]);for(var l=0;l<g.length;l++)f.push(k+"="+g[l])}-1==c.inArray(a,h)&&(b!==F&&""!==b)&&f.push(a+"="+b);this.queryString(f.join("&"));return this}if(b=this.queryString()){d=[];f=b.split("&");for(e=0;e<f.length;e++)b=f[e].split("="),b[0]==a&&d.push(b.slice(1).join("="));if(0!==d.length)return 1!=d.length?d:d[0]}},parameterNames:function(){var a=this.queryString(),b=[];if(a&&-1!=a.indexOf("="))for(var a=a.split("&"), d=0;d<a.length;d++){var e=a[d].split("=")[0];-1==c.inArray(e,b)&&b.push(e)}return b},hash:function(a){if(a!==j)return this.value(e.split("#")[0]+(a?"#"+a:"")),this;a=e.split("#");return a.slice(1,a.length).join("#")}};c.fn.address=function(a){var b;"string"==typeof a&&(b=a,a=void 0);c(this).attr("address")||c(b?b:this).live("click",function(b){if(b.shiftKey||b.ctrlKey||b.metaKey||2==b.which)return!0;c(this).is("a")&&(b.preventDefault(),b=a?a.call(this):/address:/.test(c(this).attr("rel"))?c(this).attr("rel").split("address:")[1].split(" ")[0]: void 0!==c.address.state()&&!/^\/?$/.test(c.address.state())?c(this).attr("href").replace(RegExp("^(.*"+c.address.state()+"|\\.)"),""):c(this).attr("href").replace(/^(#\!?|\.)/,""),c.address.value(b))}).live("submit",function(b){c(this).is("form")&&(b.preventDefault(),b=c(this).attr("action"),b=a?a.call(this):(-1!=b.indexOf("?")?b.replace(/&$/,""):b+"?")+c(this).serialize(),c.address.value(b))}).attr("address",!0);return this}})(jQuery);

(function(){function z(){G=!1;for(V=t;V--;){A=h[V];if(!A)break;A.isCSS||(A.cycle()?G=!0:A.stop(!1,A.complete,!1,!0))}O?G?O(z):(H(z),A=F=null):G?u||(W=setInterval(z,na)):(clearInterval(W),A=F=null);u=G}function X(a){a.cjFadeIn?(delete a.cjFadeIn,a.style.opacity=1,a.style.visibility="visible"):a.cjFadeOut&&(delete a.cjFadeOut,a.style.display="none")}function Y(){u||z()}function P(a,b,c,d){h.splice(h.indexOf(a),1);t=h.length;c&&c(b,d)}function fa(a){a.stopPropagation();(a=this.cj)&&a.stop(a.complete)} function ga(a,b,c){var d={},n;b=b.to;for(n in b)b.hasOwnProperty(n)&&(d[n]=b[n]);Jacked.tween(a,d,c)}function ha(a,b){return this["webkit"+a+b]||this["moz"+a+b]||this["o"+a+b]||this[a+b]||null}function ia(a){var b;if(b=oa.exec(a))return[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1];if(b=pa.exec(a))return[17*parseInt(b[1],16),17*parseInt(b[2],16),17*parseInt(b[3],16),1]}function ja(){for(var a in I)if(I.hasOwnProperty(a)&&a===Q){Z=I[a];break}}function qa(){if("ontouchend"in document){if(-1!== y.search("iphone")||-1!==y.search("ipad"))return"ios";if(-1!==y.search("android")||-1!==y.search("applewebkit"))return"android";if(-1!==y.search("msie"))return"winMobile"}return null}var R=window.getComputedStyle?document.defaultView.getComputedStyle:null,O=ha("Request","AnimationFrame"),H=ha("Cancel","AnimationFrame"),s=document.createElement("span").style,y=navigator.userAgent.toLowerCase(),J="Quint.easeOut",K=500,f;f=y.search("msie");-1===f?f=[33.3,0]:(f=parseInt(y.substr(f+4,f+5),10),f=[9<=f? 16.6:33.3,f]);var h=[],l="WebkitTransition"in s?["webkitTransitionEnd","-webkit-transition",-1!==y.search("chrome")?"chrome":"safari"]:"MozTransition"in s?["transitionend","-moz-transition","firefox"]:"MSTransition"in s?["transitionend","-ms-transition","ie"]:"OTransition"in s?["otransitionend","-o-transition","opera"]:"transition"in s?["transitionend","transition",null]:null,u,L,t=0,ka,Q,Z,$,W,F,G,V,aa,A,ba,S,T,ca,la,ra=/,/g,sa=/[A-Z]/g,ta=/ cj-tween/g,ua=/^\s+|\s+$/g,va=/{props}/,wa=/{easing}/, xa=/{duration}/,ma=/(right|bottom|center)/,pa=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,oa=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/,I={ios:!1,android:!1,winMobile:!1,firefox:!1,chrome:!1,safari:!1,opera:!1,ie:!1},na=f[0];f=f[1];var E=0!==f&&9>f;if(!O||!H)O=H=null;if(l){var U=l[1],da=document.createElement("style");L="WebkitTransform"in s?"WebkitTransform":"MozTransform"in s?"MozTransform":"msTransform"in s?"msTransform":"OTransform"in s?"OTransform":"transform"in s?"transform":null;S= qa();da.type="text/css";da.innerHTML=".cj-tween{"+U+"-property:none !important;}";document.getElementsByTagName("head")[0].appendChild(da);ka=U+"-property:{props};"+U+"-duration:{duration}s;"+U+"-timing-function:cubic-bezier({easing});";Q=!S?l[2]:S;la=/(chrome|opera)/.test(Q);l=l[0];ja()}if(E)if(8===f)ba=/(#|rgb|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/,T=/(auto|inherit|rgb|%|#|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/,ca={red:"#F00",blue:"#00F",green:"#0F0", black:"#000",white:"#FFF",yellow:"#FF0",pink:"#FFC0CB",gray:"#808080",grey:"#808080",orange:"#FFA500",purple:"#800080"};else return;else ba=/(#|rgb)/,T=/(auto|inherit|rgb|%|#)/;Array.prototype.indexOf||(Array.prototype.indexOf=function(a){for(var b=this.length;b--;)if(this[b]===a)return b;return-1});Date.now||(Date.now=function(){return+new Date});this.Jacked={ready:function(a){window.onload=a},setEngines:function(a){for(var b in a)I.hasOwnProperty(b)&&(I[b]=a[b]);ja()},tween:function(a,b,c){a.cj&& a.cj.stop();c||(c={});c.mode?"timeline"===c.mode||!l?new CJ(a,b,c):new CJcss(a,b,c):!l||!Z?new CJ(a,b,c):new CJcss(a,b,c)},fadeIn:function(a,b){b||(b={});b.fadeIn=!0;Jacked.tween(a,{opacity:1},b)},fadeOut:function(a,b){b||(b={});b.fadeOut=!0;Jacked.tween(a,{opacity:0},b)},percentage:function(a,b,c){a.cj&&a.cj.stop();if("from"in b&&"to"in b){c||(c={});var d=c.mode;d?"css3"===d&&l?ga(a,b,c):new CJpercentage(a,b,c):l&&Z?ga(a,b,c):new CJpercentage(a,b,c)}},special:function(a,b){a.cj&&a.cj.stop();new CJspecial(a, b)},transform:function(a,b,c,d){a.cj&&a.cj.stop();l&&L?(c||(c={}),c.mode="css3","transform"in b&&(b[L]=b.transform,delete b.transform),new Jacked.tween(a,b,c)):d&&new Jacked.tween(a,d,c)},stopTween:function(a,b,c){(a=a.cj)&&(a.isCSS?a.stop(c):a.stop(b,c))},stopAll:function(a){H?H(z):clearInterval(W);var b=h.length,c;for(t=0;b--;)c=h[b],c.isCSS?c.stop(!1,!0):c.stop(a,!1,!0,!0);h=[];u=!1;F=null},setEase:function(a){var b=a.toLowerCase().split(".");2>b.length||M[b[0]]&&M[b[0]][b[1]]&&(J=a)},setDuration:function(a){isNaN(a)|| (K=a)},getMobile:function(){return S},getIE:function(){return E},getBrowser:function(){return Q},getTransition:function(){return l},getEngine:function(){return u},getTransform:function(){return L}};this.CJ=function(a,b,c){t=h.length;var d=a.cj=h[t++]=this;this.runner=function(n){d.obj=a;d.complete=c.callback;d.completeParams=c.callbackParams;if(!0===n)d.transitions=[];else{var m;n=0;var g=[],e=a.style,p=c.duration||K,r=(c.ease||J).toLowerCase().split("."),r=M[r[0]][r[1]];e.visibility="visible";c.fadeIn&& (e.display=c.display||"block",e.opacity=0);E&&"opacity"in b&&(e.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+(c.fadeIn?0:100)+")");b.borderColor&&!la&&(e=b.borderColor,b.borderTopColor=e,b.borderRightColor=e,b.borderBottomColor=e,b.borderLeftColor=e,delete b.borderColor);for(m in b)b.hasOwnProperty(m)&&("backgroundPosition"!==m?g[n++]=d.animate(a,m,b[m],p,r):g[n++]=d.bgPosition(a,m,b[m],p,r));d.transitions=g;u?setTimeout(Y,10):z()}};c.fadeOut?a.cjFadeOut=!0:c.fadeIn&&(a.cjFadeIn=!0); 0===c.duration?(this.runner(!0),this.stop()):c.delay?this.delayed=setTimeout(this.runner,c.delay):this.runner()};CJ.prototype.cycle=function(){F=this.transitions;if(!F)return!0;aa=F.length;for($=!1;aa--;)F[aa]()&&($=!0);return $};CJ.prototype.animate=function(a,b,c,d,n){function m(){t=Date.now();ea+=t-f;e=n(ea,h,N,d);f=t;e=!k||E?q?e+0.5|0:e-0.5|0:e.toFixed(2);if(e===l)return!0;if(q){if(e>=c)return p[b]=v,!1}else if(e<=c)return p[b]=v,!1;l=e;p[b]=e+B;return!0}function g(){return!1}var e,p,r,k="opacity"=== b,j=!0;!k||!E?(p=a.style,r=p[b],e=""!==r?r:R?R(a,null)[b]:a.currentStyle[b]):(p=a.filters.item("DXImageTransform.Microsoft.Alpha"),b="Opacity",e=p[b],c*=100);if(T.test(e))if(ba.test(e)){if(-1===c.search("rgb"))return E&&e in ca&&(e=ca[e]),this.color(a,b,e,c,d,n);j=!1}else e=0;else e=parseFloat(e);var B=!k?"px":0,N=c-e,q=e<c,f=Date.now(),h=e,ea=0,v,l,t;v=c+B;!k||E?q?c-=0.25:c+=0.25:q?c-=0.025:c+=0.025;if(j)return m.stored=[b,v],m;g.stored=[b,v];return g};CJ.prototype.color=function(a,b,c,d,n,m){function g(){f= Date.now();N+=f-r;r=f;c=m(N,0,1,n);if(0.99>c){q=-1;for(l="rgb(";3>++q;)h=j[q],l+=h+c*(B[q]-h)|0,2>q&&(l+=",");k[b]=l+")";return!0}k[b]=p;return!1}function e(){return!1}var p=(-1!==d.search("#")?"":"#")+d,r=Date.now(),k=a.style;a=!1;var j=[],B=[],N=0,q=-1,f,h,l;if(-1!==c.search("rgb")){q=-1;for(j=c.split("(")[1].split(")")[0].split(",");3>++q;)j[q]=parseInt(j[q],10)}else j=ia(c);B=ia(d);for(q=-1;3>++q;)j[q]!==B[q]&&(a=!0);if(a)return g.stored=[b,p],g;e.stored=[b,p];return e};CJ.prototype.bgPosition= function(a,b,c,d,n){function m(){y=Date.now();B+=y-r;r=y;u=n(B,0,1,d);if(0.99>u){v&&(C=w+z*u+0.5|0);s&&(D=x+A*u+0.5|0);if(C===h&&D===t)return!0;h=C;t=D;j?(e.backgroundPositionX=C+"px",e.backgroundPositionY=D+"px"):e.backgroundPosition=C+"px "+D+"px";return!0}j?(e.backgroundPositionX=f,e.backgroundPositionY=q):e[b]=l;return!1}function g(){return!1}var e=a.style,p=e[b],r=Date.now(),k=!0,j=E,B=0,f,q,l,h,t,v,s,z,A,u,y,C,D,w,x;if(j){w=a.currentStyle.backgroundPositionX;x=a.currentStyle.backgroundPositionY; if(ma.test(w)||ma.test(x))k=!1;"left"===w&&(w=0);"top"===x&&(x=0)}else u=""!==p?p.split(" "):R(a,null).backgroundPosition.split(" "),w=u[0],x=u[1];-1!==w.search("%")&&"0%"!==w&&(k=!1);-1!==x.search("%")&&"0%"!==x&&(k=!1);w=parseInt(w,10);x=parseInt(x,10);c.hasOwnProperty("x")?(C=c.x,v=!0):(C=w,v=!1);c.hasOwnProperty("y")?(D=c.y,s=!0):(D=x,s=!1);v=v&&w!==C;s=s&&x!==D;!v&&!s&&(k=!1);z=C-w;A=D-x;f=C+"px";q=D+"px";l=!j?f+" "+q:[f,q];if(k)return m.stored=[b,l],m;g.stored=[b,l];return g};CJ.prototype.stop= function(a,b,c){var d=this.obj;if(d){delete d.cj;if(a){a=this.transitions;for(var n=a.length,m,g;n--;)if(m=a[n].stored,g=m[0],E)switch(g){case "Opacity":d.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=100*m[1];break;case "backgroundPosition":g=d.style;g.backgroundPositionX=m[1][0];g.backgroundPositionY=m[1][1];break;default:d.style[g]=m[1]}else d.style[g]=m[1]}X(d);b&&(b=this.complete);c||P(this,d,b,this.completeParams)}else clearTimeout(this.delayed),this.runner(!0),this.stop(a,b)};this.CJcss= function(a,b,c){t=h.length;var d=a.cj=h[t++]=this,n=a.style,m=L in b;this.isCSS=!0;this.storage=a;this.complete=c.callback;this.completeParams=c.callbackParams;this.runner=function(){c.cssStep?(n.visibility="visible",d.stepped=setTimeout(d.step,30)):d.step()};this.step=function(g){d.obj=a;if(!0===g)d.moves="";else{var e,p,r,k,j,f=0,h;h=[];var q=[];g=a.getAttribute("style")||"";var t=c.duration||K,s=(c.ease||J).toLowerCase().split(".");for(p in b)if(b.hasOwnProperty(p)){r=p;if(j=r.match(sa))for(e= j.length;e--;)k=j[e],r=r.replace(RegExp(k,"g"),"-"+k.toLowerCase());k=e=b[p];j="backgroundPosition"===p;if(!T.test(k)&&"opacity"!==p&&!j&&!m)k+="px;";else if(j){k=e.x;e=e.y;j=isNaN(k);var u=isNaN(e);if(!j&&!u)k+="px",e+="px";else{var v=n.backgroundPosition,v=""!==v?v.split(" "):R(a,null).backgroundPosition.split(" ");!j?k+="px":k=v[0];!u?e+="px":e=v[1]}k=k+" "+e+";"}else k+=";";h[f]=r+":"+k;q[f++]=r;if(g&&(j=g.search(r),-1!==j)){r=g.length-1;for(e=j-1;++e<r&&";"!==g[e];);g=g.split(g.substring(j,e+ 1)).join("")}}d.moves=p=ka.replace(va,q.toString()).replace(xa,(0.001*t).toFixed(2)).replace(wa,ya[s[0]][s[1]]);h=h.toString();m||(h=h.replace(ra,""));a.className=a.className.replace(ta,"");a.addEventListener(l,fa,!1);a.setAttribute("style",g.replace(ua,"")+p+h)}};c.fadeIn?(a.cjFadeIn=!0,n.display=c.display||"block",n.opacity=0):c.fadeOut&&(a.cjFadeOut=!0);0===c.duration?(this.runner(!0),this.stop()):(c.cssStep||(n.visibility="visible"),this.delayed=c.delay?setTimeout(this.runner,30<c.delay?c.delay: 30):setTimeout(this.runner,30))};CJcss.prototype.stop=function(a,b){var c=this.obj;a&&(a=this.complete);c?(delete c.cj,c.removeEventListener(l,fa,!1),c.className+=" cj-tween",c.setAttribute("style",c.getAttribute("style").split(this.moves).join(";").split(";;").join(";")),X(c)):(clearTimeout(this.delayed),clearTimeout(this.stepped),X(this.storage));b||P(this,c,a,this.completeParams)};this.CJpercentage=function(a,b,c){t=h.length;var d=a.cj=h[t++]=this;this.obj=a;this.complete=c.callback;this.completeParams= c.callbackParams;this.runner=function(){var n=0,m=[],g,e,p,h=b.to,k=b.from,j=c.duration||K,f=(c.ease||J).toLowerCase().split("."),f=M[f[0]][f[1]];for(g in k)k.hasOwnProperty(g)&&(p=parseInt(h[g],10),e=parseInt(k[g],10),m[n++]=[p>e,g,p,e]);a.style.visibility="visible";d.transitions=d.animate(a,m,j,f);u?setTimeout(Y,10):z()};0===c.duration?this.stop():c.delay?this.delayed=setTimeout(this.runner,c.delay):this.runner()};CJpercentage.prototype.cycle=function(){return this.transitions()};CJpercentage.prototype.animate= function(a,b,c,d){var n,m=0,g=Date.now(),e,f,h=a.style,k=b.length,j,l;return function(a){e=Date.now();m+=e-g;g=e;n=d(m,0,1,c);f=k;if(0.99>n&&!a){for(;f--;)j=b[f],l=j[3],h[j[1]]=j[0]?l+(j[2]-l)*n+"%":l-(l-j[2])*n+"%";return!0}for(;f--;)j=b[f],h[j[1]]=j[2]+"%";return!1}};CJpercentage.prototype.stop=function(a,b,c){"delayed"in this&&clearTimeout(this.delayed);var d=this.obj;delete d.cj;a&&this.transitions&&this.transitions(!0);b&&(b=this.complete);c||P(this,d,b,this.completeParams)};this.CJspecial=function(a, b){if(b&&b.callback){t=h.length;h[t++]=a.cj=this;var c=this.complete=b.callback,d=b.ease||J,d=d.toLowerCase().split("."),d=M[d[0]][d[1]];this.obj=a;this.transitions=this.numbers(a,b.duration||K,d,c);u?setTimeout(Y,10):z()}};CJspecial.prototype.cycle=function(){return this.transitions()};CJspecial.prototype.numbers=function(a,b,c,d){var f,h=0,g=Date.now(),e;return function(){e=Date.now();h+=e-g;g=e;f=c(h,0,1,b);return 0.97>f?(d(a,f),!0):!1}};CJspecial.prototype.stop=function(a,b,c,d){var f=this.obj; f&&(delete f.cj,c||P(this),(a||d)&&this.complete(f,1,b))};var M={linear:{easenone:function(a,b,c,d){return c*a/d+b},easein:function(a,b,c,d){return c*a/d+b},easeout:function(a,b,c,d){return c*a/d+b},easeinout:function(a,b,c,d){return c*a/d+b}},quint:{easeout:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easein:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}},quad:{easein:function(a,b,c,d){return c*(a/=d)*a+ b},easeout:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}},quart:{easein:function(a,b,c,d){return c*(a/=d)*a*a*a+b},easeout:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}},cubic:{easein:function(a,b,c,d){return c*(a/=d)*a*a+b},easeout:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a+ b:c/2*((a-=2)*a*a+2)+b}},circ:{easein:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeout:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}},sine:{easein:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeout:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeinout:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b}},expo:{easein:function(a,b,c,d){return 0=== a?b:c*Math.pow(2,10*(a/d-1))+b},easeout:function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeinout:function(a,b,c,d){return 0===a?b:a===d?b+c:1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}}},ya={linear:{easenone:"0.250, 0.250, 0.750, 0.750",easein:"0.420, 0.000, 1.000, 1.000",easeout:"0.000, 0.000, 0.580, 1.000",easeinout:"0.420, 0.000, 0.580, 1.000"},quint:{easein:"0.755, 0.050, 0.855, 0.060",easeout:"0.230, 1.000, 0.320, 1.000",easeinout:"0.860, 0.000, 0.070, 1.000"}, quad:{easein:"0.550, 0.085, 0.680, 0.530",easeout:"0.250, 0.460, 0.450, 0.940",easeinout:"0.455, 0.030, 0.515, 0.955"},quart:{easein:"0.895, 0.030, 0.685, 0.220",easeout:"0.165, 0.840, 0.440, 1.000",easeinout:"0.770, 0.000, 0.175, 1.000"},cubic:{easein:"0.550, 0.055, 0.675, 0.190",easeout:"0.215, 0.610, 0.355, 1.000",easeinout:"0.645, 0.045, 0.355, 1.000"},circ:{easein:"0.600, 0.040, 0.980, 0.335",easeout:"0.075, 0.820, 0.165, 1.000",easeinout:"0.785, 0.135, 0.150, 0.860"},sine:{easein:"0.470, 0.000, 0.745, 0.715", easeout:"0.390, 0.575, 0.565, 1.000",easeinout:"0.445, 0.050, 0.550, 0.950"},expo:{easein:"0.950, 0.050, 0.795, 0.035",easeout:"0.190, 1.000, 0.220, 1.000",easeinout:"1.000, 0.000, 0.000, 1.000"}};f=s=null})(window);

(function(m){function h(a,b){b||(delete a.swipeLeft,delete a.swipeRight,delete a.stopProp);delete a.newPageX;delete a.pageX}function g(a){var b=a.touches?a.touches[0]:a;this.stopProp&&a.stopImmediatePropagation();this.pageX=b.pageX;this.addEventListener(e,j);this.addEventListener(f,k)}function k(a){var b=this.newPageX=(a.touches?a.touches[0]:a).pageX;10<Math.abs(this.pageX-b)&&a.preventDefault()}function j(){var a=this.newPageX,b=this.pageX,c=this.cjThumbs;this.removeEventListener(f,k);this.removeEventListener(e, j);30>Math.abs(b-a)||(c||this.removeEventListener(d,g),b>a?this.swipeLeft&&(a=this.swipeLeft,h(this,c),a()):this.swipeRight&&(a=this.swipeRight,h(this,c),a(1)))}var e,f,d,l={touchSwipe:function(a,b){l.touchSwipeLeft(a,b);l.touchSwipeRight(a,b)},touchSwipeLeft:function(a,b,c){c&&(a.stopProp=!0);a.swipeLeft||(a.swipeLeft=b);a.swipeRight||a.addEventListener(d,g)},touchSwipeRight:function(a,b,c){c&&(a.stopProp=!0);a.swipeRight||(a.swipeRight=b);a.swipeLeft||a.addEventListener(d,g)},unbindSwipe:function(a){a.removeEventListener(d, g);a.removeEventListener(f,k);a.removeEventListener(e,j);h(a)}};"ontouchend"in document?(e="touchend",f="touchmove",d="touchstart"):(e="mouseup",f="mousemove",d="mousedown");m.fn.cjSwipe=function(a,b,c){l[a](this[0],b,c)}})(jQuery);

(function(){function I(){this.a=this.b=this.g=this.r=0;this.next=null}var K=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374, 367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312, 310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],L=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23, 23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];window.StackBlurImage=function(m,E,r){var y=document.getElementById(m),m=y.naturalWidth,w=y.naturalHeight,c=document.getElementById(E);c.style.width= m+"px";c.style.height=w+"px";c.width=m;c.height=w;c=c.getContext("2d");c.clearRect(0,0,m,w);c.drawImage(y,0,0);if(!(isNaN(r)||1>r))if(!(isNaN(r)||1>r)){var r=r|0,E=document.getElementById(E).getContext("2d"),y=E.getImageData(0,0,m,w),c=y.data,s,x,a,d,e,F,f,g,h,t,u,v,i,j,k,n,p,q,z,b=a=null,A=K[r],B=L[r];s=r+r+1;var G=m-1,H=w-1,l=r+1,C=l*(l+1)/2,D=new I,b=D;for(a=1;a<s;a++)if(b=b.next=new I,a==l)var J=b;b.next=D;for(x=F=e=0;x<w;x++){i=j=k=f=g=h=0;t=l*(n=c[e]);u=l*(p=c[e+1]);v=l*(q=c[e+2]);f+=C*n;g+= C*p;h+=C*q;b=D;for(a=0;a<l;a++)b.r=n,b.g=p,b.b=q,b=b.next;for(a=1;a<l;a++)d=e+((G<a?G:a)<<2),f+=(b.r=n=c[d])*(z=l-a),g+=(b.g=p=c[d+1])*z,h+=(b.b=q=c[d+2])*z,i+=n,j+=p,k+=q,b=b.next;a=D;b=J;for(s=0;s<m;s++)c[e]=f*A>>B,c[e+1]=g*A>>B,c[e+2]=h*A>>B,f-=t,g-=u,h-=v,t-=a.r,u-=a.g,v-=a.b,d=F+((d=s+r+1)<G?d:G)<<2,i+=a.r=c[d],j+=a.g=c[d+1],k+=a.b=c[d+2],f+=i,g+=j,h+=k,a=a.next,t+=n=b.r,u+=p=b.g,v+=q=b.b,i-=n,j-=p,k-=q,b=b.next,e+=4;F+=m}for(s=0;s<m;s++){j=k=i=g=h=f=0;e=s<<2;t=l*(n=c[e]);u=l*(p=c[e+1]);v=l* (q=c[e+2]);f+=C*n;g+=C*p;h+=C*q;b=D;for(a=0;a<l;a++)b.r=n,b.g=p,b.b=q,b=b.next;d=m;for(a=1;a<=r;a++)e=d+s<<2,f+=(b.r=n=c[e])*(z=l-a),g+=(b.g=p=c[e+1])*z,h+=(b.b=q=c[e+2])*z,i+=n,j+=p,k+=q,b=b.next,a<H&&(d+=m);e=s;a=D;b=J;for(x=0;x<w;x++)d=e<<2,c[d]=f*A>>B,c[d+1]=g*A>>B,c[d+2]=h*A>>B,f-=t,g-=u,h-=v,t-=a.r,u-=a.g,v-=a.b,d=s+((d=x+l)<H?d:H)*m<<2,f+=i+=a.r=c[d],g+=j+=a.g=c[d+1],h+=k+=a.b=c[d+2],a=a.next,t+=n=b.r,u+=p=b.g,v+=q=b.b,i-=n,j-=p,k-=q,b=b.next,e+=m}E.putImageData(y,0,0)}}})();

(function(c){function ub(){J=c(window);ac=c("body");$a=c("body, html");v=c("<div />").addClass("jackbox-modal");w=c("<div />").addClass("jackbox-holder");ia=c("<div />").addClass("jackbox-wrapper");Z=c("<div />").addClass("jackbox-preloader");ja=c("<span />").addClass("jackbox-panel jackbox-panel-left");ta=c("<span />").addClass("jackbox-panel jackbox-panel-right");var a=r.createDocumentFragment();a.appendChild(ia[0]);a.appendChild(Z[0]);v[0].appendChild(a);a=r.createDocumentFragment();a.appendChild(ja[0]); a.appendChild(ta[0]);a.appendChild(w[0]);ia[0].appendChild(a);ka=c("<div />").addClass("jackbox-container");ua||(a=c("<span />").addClass("jackbox-pre-outside").appendTo(Z),c("<span />").addClass("jackbox-pre-inside").appendTo(a));$*=2;Oa=0;a=r.createDocumentFragment();vb&&(B=c(vb).hide(),a.appendChild(B[0]));a.appendChild(ka[0]);wb&&(C=c(wb).hide(),a.appendChild(C[0]));w[0].appendChild(a);xb=-(G+Ea);va=[];Pa=[];K=[];L=[];yb.each(Vc);W&&(c.address.internalChange(zb),c.address.externalChange(Wc)); bc=!0;Qa&&(W?setTimeout(Qa,250):Qa(),Qa=null);yb=Pa=vb=wb=va=null}function cc(a,b){var d=c(this),m=L.length,g=-1,e,l;if(a&&"object"===typeof a){var f,h=d.attr("href");for(l in a)a.hasOwnProperty(l)&&"trigger"!==l&&(f=a[l],"href"===l&&h||d.attr("data-"+l,f),"group"===l&&(e=f))}e||(e=d.attr("data-group"));if(e){for(e=e.split(" ").join("").toLowerCase();m--;)if(L[m]===e){g=m;break}if(-1<g){e=K[g];for(m=e.length;m--;)if(l=e[m],l[0]===d[0]){if(b)if(e.splice(m,1),l.off("click.jackbox"),d=e.length)for(g= 0;g<d;g++)e[g].data("id",g);else K.splice(g,1),L.splice(g,1),Ra--;return}m=e.length;e[m]=d}else{if(b)return;g=L.length;m=K.length;L[g]=e;Ra++;K[m]=[d];m=0}dc(d);d.data({id:m,cat:g});a&&a.trigger&&d.trigger("click")}}function Vc(){var a=c(this).attr("data-group").split(" ").join("").toLowerCase();if(ua){for(var b=L.length,d=!1;b--;)if(L[b]===a){d=!0;break}d||ec(a)}else-1===L.indexOf(a)&&ec(a)}function ec(a){L[L.length]=a;Pa=[];c(fc+"[data-group="+a+"]").each(dc);K[K.length]=Pa;Ra++}function dc(a){isNaN(a)? e=a:(e=c(this).data({id:a,cat:Ra}),Pa[a]=e);if(p=e.attr("href")||e.attr("data-href")){var b;a="#"!==p.charAt(0)?p.toLowerCase().split(".").pop():"inline";b=p;if(b=-1!==b.search("youtube.com")?"youtube":-1!==b.search("vimeo.com")?"vimeo":"mp4"===a?"local":!1)e.data("type",b),e.attr("data-thumbnail")||("vimeo"===b?Xc(e,p):"youtube"===b&&e.attr("data-thumbnail","http://img.youtube.com/vi/"+p.split("http://www.youtube.com/watch?v=")[1]+"/1.jpg"));else if("jpg"===a||"png"===a||"jpeg"===a||"gif"===a)e.data("type", "image");else switch(a){case "mp3":e.data("type","audio");break;case "swf":e.data("type","swf");break;case "inline":e.data("type","inline");break;default:e.data("type","iframe")}e.on("click.jackbox",Yc);if(Q=e.attr("data-description")){if(va)if(a=va.indexOf(Q),-1===a){Q=c(Q);if(!Q.length)return;va[va.length]=Q}else Q=va[a];else if(Q=c(Q),!Q.length)return;e.data("description",Q)}}}function Wc(a){if(gc){gc=!1;var b=r.URL.split("?url=");if(2===b.length){window.location=b[0]+"#/"+b[1];return}}clearTimeout(Sa); hc(a.value);-1!==H?ic?(ic=!1,zb()):Sa=setTimeout(zb,750):aa&&Ab()}function zb(a){"object"===typeof a&&(clearTimeout(Sa),hc(a.value));-1!==H?jc():aa&&Ab()}function hc(a){!M||la||Fa||x[f].removeClass("jb-thumb-active");"/"!==a?(a=a.split("/"),3===a.length?(f=parseInt(a[2],10)-1,isNaN(f)&&(f=0),ma=a[1]):isNaN(a[1])?(f=0,ma=a[1]):(f=parseInt(a[1],10)-1,ma="/")):(ma="/",f=0);if("/"!==ma)for(a=Ra;a--;){if(L[a]===ma){H=a;R=K[H].length;X=1!==R;break}}else H=-1;Fa=!1}function ab(){clearTimeout(kc);kc=setTimeout(na, 100)}function Yc(a){a.stopPropagation();a.preventDefault();a=c(this).data();bb(a.cat,a.id,!0)}function bb(a,b,d){clearTimeout(Sa);if(!d){if(M)for(d=x.length;d--;)x[d].off("click.jackbox");ja.off(".jackbox");ta.off(".jackbox");Ga&&Ha.off("keydown.jackbox");s&&Bb&&h.cjSwipe("unbindSwipe")}W?c.address.value(L[a]+"/"+(b+1)):(!M||la||Fa||x[f].removeClass("jb-thumb-active"),f=b,H=a,R=K[H].length,X=1!==R,jc())}function cb(a){if(a&&(a.stopPropagation(),Ta))return!1;aa&&(M&&!la&&x[f].removeClass("jb-thumb-active"), f<K[H].length-1?f++:f=0,Fa=!0,bb(H,f))}function db(a){if(a&&(a.stopPropagation(),Ta))return!1;aa&&(M&&!la&&x[f].removeClass("jb-thumb-active"),0<f?f--:f=K[H].length-1,Fa=!0,bb(H,f))}function lc(){for(var a=[v[0],ia[0],w[0],ka[0]],b=4;b--;)a[b].removeEventListener("touchstart",D,!1),a[b].removeEventListener("touchmove",D,!1),a[b].removeEventListener("touchend",D,!1)}function jc(){eb=K[H];if(e=eb[f]){if(s)for(var a=[v[0],ia[0],w[0],ka[0]],b=4;b--;)a[b].addEventListener("touchstart",D,!1),a[b].addEventListener("touchmove", D,!1),a[b].addEventListener("touchend",D,!1);p=e.attr("href")||e.attr("data-href");if(aa)Ta=!0,mc(),nc();else{aa=!0;s||$a.stop();Oa=J.scrollTop();v.appendTo(ac).one("click.jackbox",Cb);Ia||(oc=v.parents().each(Zc));if(Ga)Ha.on("keydown.jackbox_keyboard",$c);pc||(pc=!0,fb=parseInt(w.css("padding-left"),10)+parseInt(w.css("padding-right"),10),Ja=parseInt(w.css("padding-top"),10)+parseInt(w.css("padding-bottom"),10),Db=parseInt(ja.css("width"),10)+14,gb=Ja+$,Eb=G+(Ea<<1),hb=parseInt(Z.css("margin-top"), 10),qc=hb-(Eb>>1),rc=parseInt(w.css("padding-left"),10),sc=parseInt(w.css("padding-top"),10),S=c(".jackbox-fullscreen"),S.length||(S=null),wa=!s&&"safari"!==ib&&("webkitRequestFullScreen"in v[0]||"mozFullScreenEnabled"in r));oa=!Fb&&jb&&X?0:xb;I=J.width();N=J.height();w.css({width:I,height:N,marginLeft:-(I>>1)-rc,marginTop:-(N>>1)-sc});Jacked.fadeIn(v[0],{callback:ad});tc=setTimeout(nc,250);ia.on("click.jackbox",uc)}}}function Zc(){c(this).addClass("jackbox-overflow")}function bd(){c(this).removeClass("jackbox-overflow")} function ad(){Ia||J[0].scrollTo(0,0)}function nc(){M&&(x[f].addClass("jb-thumb-active"),la?la=!1:vc(!1,!0));var a;a=e.attr("data-autoplay")?e.attr("data-autoplay"):wc;a="true"===a||!0===a;var b=e.data("description")||null,d=e.attr("data-title")||"",m;kb="true"===e.attr("data-scaleUp");lb=b&&"string"!==typeof b?b.html():!1;O=e.data("type");a="true"===a||!0===a;d?(Gb=d,pa=escape(Gb)):(pa=!1,"undefined"!==typeof E&&(E.data("links")&&E.data("links").off(".jackbox"),E.empty()));s&&(Bb="image"===O,"inline"!== O&&"iframe"!==O&&r.addEventListener("touchmove",D,!1));"image"!==O&&xc();Ua=!1;568<I?Z.css("margin-top",0===oa?qc:hb):Z.css("margin-top",hb);ia.show();Z.addClass("jackbox-spin-preloader");switch(O){case "image":Va=!0;h=c("<img />").addClass("jackbox-content").one("load.jackbox",mb).prependTo(ka);s&&(h[0].addEventListener("touchstart",D,!1),h[0].addEventListener("touchmove",D,!1),h[0].addEventListener("touchend",D,!1));h.attr("src",p);break;case "youtube":s&&(Ua=!0);Ka(cd.split("{url}").join(p.split("watch?v=")[1]).split("{autoplay}").join(a? 1:0));break;case "vimeo":s&&(Ua=!0);Ka(dd.split("{url}").join(p.substring(p.lastIndexOf("/"))).split("{autoplay}").join(a));break;case "local":var b=Hb(),d="true"===e.attr("data-firefoxUsesFlash")?"true":"false",g=e.attr("data-flashHasPriority")?e.attr("data-flashHasPriority"):yc.toString();m="false"===g&&wa&&"firefox"!==ib;b=e.attr("data-poster")?b+e.attr("data-poster"):"false";Ka(Ib+"?video="+p+"&autoplay="+a+"&flashing="+g+"&width="+T+"&height="+U+"&poster="+b+"&firefox="+d,!0);break;case "audio":Hb(); Ka(Jb+"?audio="+p+"&title="+(e.attr("data-audiotitle")?e.attr("data-audiotitle"):pa)+"&autoplay="+a);break;case "swf":Hb();Ka(Kb+"?swf="+p+"&width="+(q.toString()+"&height="+n.toString()));break;case "inline":a=c(p);a=a.length?a.html():"";h=c("<div />").addClass("jackbox-content jackbox-html").html(a).prependTo(ka);h.css("width",q).find("a").on("click",qa);e.attr("data-height",h.outerHeight(!0));xc();mb();break;default:Ka(p,!1,!0)}wa&&(m?S.hide():S.show())}function Hb(){if(-1!==p.search("http"))return""; var a=r.URL.split("#")[0];"/"!==a[a.length-1]&&(a=a.substring(0,a.lastIndexOf("/")+1));p=a+p;return a}function ed(a){switch(a.keyCode){case 39:cb();break;case 37:db();break;case 40:Lb();break;case 38:Lb()}}function $c(a){27===a.keyCode&&Cb(a)}function fd(){F.css("visibility","hidden")}function gd(){u.data("offLeft",u.offset().left)}function zc(){La.css({opacity:0,visibility:"hidden"})}function Ac(a){"object"===typeof a&&a.stopPropagation();y<R-ra&&(y++,Mb(!1,!0))}function Bc(a){"object"===typeof a&& a.stopPropagation();0<y&&(y--,Mb(!1,!0))}function hd(a){a.stopPropagation();a=c(this).parent();a.addClass("jb-thumb-fadein");s||a.addClass("jb-thumb-hover");a.data("id")===f&&a.addClass("jb-thumb-active")}function Cc(a){a.stopPropagation();if(Ta)return!1;a=c(this).data("id");a!==f&&(M&&x[f].removeClass("jb-thumb-active"),f=a,la=!0,bb(H,f))}function id(){Wa?Dc():(J.off(".jackbox"),Wa=!0,r.mozFullScreenEnabled?(r.addEventListener("mozfullscreenchange",nb,!1),v[0].mozRequestFullScreen()):v[0].webkitRequestFullScreen&& (r.addEventListener("webkitfullscreenchange",nb,!1),v[0].webkitRequestFullScreen()))}function nb(){r.webkitIsFullScreen||r.mozFullScreen?na():Dc(!0)}function Nb(a){r.removeEventListener(a.type,Nb,!1);na();J.on("resize.jackbox",ab)}function Dc(a){Wa=!1;r.mozFullScreenEnabled?(r.removeEventListener("mozfullscreenchange",nb,!1),a?(na(),J.on("resize.jackbox",ab)):(r.addEventListener("mozfullscreenchange",Nb,!1),r.mozCancelFullScreen())):v[0].webkitRequestFullScreen&&(r.removeEventListener("webkitfullscreenchange", nb,!1),a?(na(),J.on("resize.jackbox",ab)):(r.addEventListener("webkitfullscreenchange",Nb,!1),r.webkitCancelFullScreen()))}function xc(){Va=!1;T=e.attr("data-width")?parseInt(e.attr("data-width"),10):Ec;U=e.attr("data-height")?parseInt(e.attr("data-height"),10):Fc;kb="true"===e.attr("data-scaleUp");Gc()}function Gc(){ob=T+fb+Db+$;Ob=U+gb;na("true")}function mc(){clearTimeout(tc);Jacked.stopTween(w[0]);J.off(".jackbox");s&&r.removeEventListener("touchmove",D,!1);h&&(Jacked.stopTween(h[0]),h.remove(), h=null);pb&&(pb.remove(),pb=null);B&&(Jacked.stopTween(B[0],!0),B.hide());C&&(Jacked.stopTween(C[0],!0),C.hide());z&&(z.removeClass("jb-info-inactive"),Jacked.stopTween(P[0]),P.empty().hide())}function Cb(a){a.stopPropagation();W?c.address.value(""):Ab()}function Ab(){clearTimeout(Sa);mc();v.unbind(".jackbox");Ga&&Ha.off("keydown.jackbox_keyboard");if(X){Ga&&Ha.off("keydown.jackbox");xa&&xa.off(".jackbox");ya&&ya.off(".jackbox");Xa&&u&&u.off(".jackbox");Jacked.stopTween(ta[0],!0);Jacked.stopTween(ja[0], !0);var a={opacity:0,visibility:"hidden"};ta.off(".jackbox").css(a);ja.off(".jackbox").css(a)}else za&&za.show(),A&&A.show();ia.hide().off(".jackbox");Z.removeClass("jackbox-spin-preloader");"undefined"!==typeof E&&(E.data("links")&&E.data("links").off(".jackbox"),E.empty());wa&&S.off(".jackbox");Aa&&Aa.unbind(".jackbox");z&&z.off(".jackbox");if(M){Jacked.stopTween(ba[0]);for(ba.off(".jackbox").hide();x.length;)a=x[0],Jacked.stopTween(a[0]),a.remove(),x.shift();ca.off(".jackbox").hide();da.off(".jackbox").hide(); s&&u.cjSwipe("unbindSwipe");Jacked.stopTween(V[0]);V.empty().css("margin-left",0);A&&(A.off(".jackbox"),A&&(Y.hide(),ea.show()));M=x=null}Ia||oc.each(bd);Jacked.fadeOut(v[0],{duration:1E3,callback:jd});w.css({marginLeft:kd,marginTop:ld});s&&(lc(),r.removeEventListener("touchmove",D,!1));setTimeout(md,10);F&&(F.css("visibility","hidden"),s&&(F[0].removeEventListener("touchstart",qa,!1),F[0].removeEventListener("touchmove",qa,!1),F[0].removeEventListener("touchend",qa,!1)));e=aa=Wa=la=Pb=qb=Fa=Qb=Ma= null}function md(){0!==Oa&&(Ia||s?$a.scrollTop(Oa):$a.animate({scrollTop:Oa},{duration:300,queue:!1}))}function jd(){v.detach()}function nd(a){a?db():cb()}function D(a){a.preventDefault()}function od(a,b){if(!aa&&"success"===b.toLowerCase()&&a){var d=a.length,m=document.URL;for(m.substring(0,m.lastIndexOf("/"));d--;)c("<img />").attr("src",sa+"/"+a[d].split("../").join(""))}}function Xc(a,b){c.getJSON("http://vimeo.com/api/v2/video/"+b.split("http://vimeo.com/")[1]+".json?callback=?",{format:"json"}, function(b){a.attr("data-thumbnail",b[0].thumbnail_small)})}function pd(){var a=c(this),b=a.next("img"),d=b.attr("src");b.length&&(a=c("<img />").attr({width:b.attr("width"),height:b.attr("height")}).data("parent",a).one("load.jackbox",qd).insertAfter(b),b.remove(),a.attr("src",d))}function qd(){var a=c(this),b=a.data("parent"),d=parseInt(b.css("width"),10)||b.width(),m=parseInt(b.css("height"),10)||b.height(),b=c("<canvas />").addClass("jackbox-canvas-blur").attr({width:d,height:m}).insertBefore(b), m=Date.now(),d=m+1,m=m+2;a.attr("id",d);b.attr("id",m);StackBlurImage(d,m,29)}function rd(){var a=c(this);a.parent().data({tip:a,tipWidth:a.width()-27,tipHeight:a.height()+17}).on("mouseenter.jackbox",sd).on("mouseleave.jackbox",td)}function sd(){var a=c(this),b=a.offset(),d=a.data();d.tipX=b.left;d.tipY=b.top;d.tip.css({opacity:1,visibility:"visible"});a.on("mousemove.jackbox",ud)}function td(){var a=c(this).off("mousemove.jackbox");ua?a.data("tip").css("opacity",0):a.data("tip").css({opacity:0, visibility:"hidden"})}function qa(a){a.stopImmediatePropagation()}function uc(a){c(a.target).is("a")||(a.stopPropagation(),a.preventDefault())}var k={useThumbs:!0,deepLinking:!0,autoPlayVideo:!1,flashVideoFirst:!1,defaultVideoWidth:960,defaultVideoHeight:540,thumbnailWidth:75,thumbnailHeight:50,useThumbTooltips:!0,dynamic:!1,baseName:"jackbox",className:".jackbox",preloadGraphics:!0,showInfoByDefault:!1,thumbsStartHidden:!1,showPageScrollbar:!1,useKeyboardControls:!0,fullscreenScalesContent:!0,defaultShareImage:"jackbox/img/default_share.jpg"}, $=10,Ea=2,Rb="/php/graphics.php",Kb="/modules/jackbox_swf.html",Sb="/img/thumbs/default.jpg",Ib="/modules/jackbox_video.html",Jb="/modules/jackbox_audio.html",Tb="/jackbox_social.php",dd="http://player.vimeo.com/video{url}?title=0&byline=0&portrait=0&autoplay={autoplay}&color=FFFFFF&wmode=transparent",cd="http://www.youtube.com/embed/{url}?autoplay={autoplay}&autohide=1&hd=1&iv_load_policy=3&showinfo=0&showsearch=0&wmode=transparent",vb='<div class="jackbox-top clearfix"><div class="jackbox-social"></div><div class="jackbox-top-icons"><span class="jackbox-fullscreen"><span class="jackbox-button jackbox-fs"></span><span class="jackbox-button jackbox-ns"></span></span><span class="jackbox-button jackbox-button-margin jackbox-close"></span></div><div />', wb='<div class="jackbox-bottom clearfix"><div class="jackbox-controls"><span class="jackbox-button jackbox-arrow-left"></span><span class="jackbox-button jackbox-arrow-right"></span></div><div class="jackbox-title-text"><span class="jb-current"></span><span class="jb-divider">/</span><span class="jb-total"></span><span class="jackbox-title-txt"></span></div><div class="jackbox-bottom-icons"><span class="jackbox-button jackbox-info"></span><span class="jackbox-button-margin jackbox-button-thumbs"><span class="jackbox-button jackbox-hide-thumbs"></span><span class="jackbox-button jackbox-show-thumbs"></span></span></div></div>', kc,C,wa,rc,sc,Ub,Eb,rb,xb,Wa,Vb,Hc,Ja,fb,Ic,F,Db,Wb,V,u,Xb,da,B,P,fa,Y,ea,ta,S,Oa,ja,pa,ca,ka,Z,ra,va,Yb,Gb,Bb,fc,sa,Ma,La,oa,A,Aa,lb,za,Jc,Xa,Kc,Ba,Na,y,ia,Ca,ya,X,hb,xa,kb,Lc,s,gb,sb,Ya,v,E,e,Pa,z,Ha,r,p,q,J,R,Mc,L,n,ma,K,ua,Da,Zb,tc,Qa,x,ac,w,yb,T,tb,Sa,Nc,h,U,Va,I,N,ob,Ob,O,oc,ib,ga,Q,aa,pc,$a,Ga,Ua,jb,Ta,la,M,ld,Pb,eb,Ia,W,Za,pb,ba,qb,qc,kd,Oc,Fa,$b,Qb,wc,ha,bc,G,yc,Pc,Qc,Fb,Ec,Fc,f=1,H=-1,Ra=0,ic=!0,gc=!0,Rc={init:function(a,b){Oc||"undefined"===typeof Jacked||(b&&c.extend(k,b),fc=k.className, jb=k.useThumbs,W=k.deepLinking,Xa=k.useThumbTooltips,wc=k.autoPlayVideo,Ga=k.useKeyboardControls,Ia=k.showPageScrollbar,ha=k.thumbnailWidth,Nc=k.fullscreenScalesContent,G=k.thumbnailHeight,yc=k.flashVideoFirst,Qc=k.showInfoByDefault,Fb=k.thumbsStartHidden,Pc=k.defaultShareImage,Ec=k.defaultVideoWidth,Fc=k.defaultVideoHeight,sa=k.baseName,Kb=sa+Kb,Ib=sa+Ib,Jb=sa+Jb,Rb=sa+Rb,Sb=sa+Sb,Tb=sa+Tb,r=document,Ha=c(document),Oc=!0,ga=ha+Ea,tb=-1!==r.URL.search("file:///"),Jacked.setEngines({ios:!0,safari:!0, opera:!0,firefox:!0}),k.preloadGraphics&&!tb&&c.getJSON(Rb+"?jackbox_path=../img/graphics/",od),yb=a,ua=Jacked.getIE(),s=Jacked.getMobile(),ib=Jacked.getBrowser(),Mc="ie"===ib,s&&(Ia=!1),"undefined"!==typeof c.address&&W?Mc||k.dynamic?(ub(),c.address.update()):c.address.init(ub):(W=!1,ub()),"undefined"===typeof StackBlurImage||tb||ua||c(".jackbox-hover-blur").each(pd),c(".jackbox-tooltip").each(rd),k=null)},frameReady:function(){aa&&mb()},newItem:function(a,b){a.each(cc,[b])},removeItem:function(a){a.each(cc, [!1,!0])}},Ka=function(){var a={type:"text/html",frameborder:0,mozallowfullscreen:"mozallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",allowfullscreen:"allowfullscreen"};return function(b,d,m){a.width=q;a.height=n;a.scrolling=m?"auto":"no";h=c("<iframe />").attr(a);Ua?h.addClass("jackbox-youtube"):h.addClass("jackbox-content");h.prependTo(ka);if(!d)h.one("load.jackbox",mb);h.attr("src",b)}}(),mb=function(){var a={};return function(b){b&&b.stopPropagation();Va&&(T=this.width||h.width(), U=this.height||h.height(),Gc());a.width=q;a.height=n;h.css(a);Sc(!0);Vb&&Vb();J.on("resize.jackbox",ab)}}(),Sc=function(){var a={},b={},d={};return function(c){if(c){260>q&&(Da+=260-q);c=Math.max(q,260);if(c===Ma&&n===Yb){Tc();return}a.callback=Tc;a.duration=Ma?50<Math.abs(c-Ma)||50<Math.abs(n-Yb)?600:300:600}else c=q,d.width=c,a.duration=300,delete a.callback,B&&Jacked.tween(B[0],d,a),C&&Jacked.tween(C[0],d,a),d.height=n,Jacked.stopTween(h[0],!0),Jacked.tween(h[0],d,a);b.marginLeft=-((Da>>1)+0.5| 0);b.marginTop=-((Zb>>1)+0.5|0);b.height=n;b.width=c;Ma||(b.opacity=1);Jacked.tween(w[0],b,a);Ma=c;Yb=n}}(),Tc=function(){var a={},b={opacity:1,visibility:"visible"};return function(){vd();Z.removeClass("jackbox-spin-preloader");var d=Math.max(q,260);a.duration=600;Va&&!ua?Jacked.fadeIn(h[0],a):(Ua?h.css("visibility","visible"):h.show(),"audio"!==O&&"local"!==O||h[0].contentWindow.cjInit());a.duration=300;ua?(B&&B.css("width",d).show(),C&&C.css("width",d).show()):(B&&(B.css("width",d),Jacked.fadeIn(B[0], a)),C&&(C.css("width",d),Jacked.fadeIn(C[0],a)));z&&lb?(z.show(),P.html(lb).show(),fa=-P.outerHeight(),F.css("height",-fa<n?-fa:n),Qc?(Na=!0,z.addClass("jb-info-inactive"),P.css({visibility:"visible",marginTop:0})):(Na=!1,P.css("margin-top",fa))):z&&(z.hide(),P.hide());Ta=!1;!qb&&X&&(ja.css(b),ta.css(b));if(!Qb&&jb&&X){var d=K[H],e=[],g=R,f,l,k,t,p;for(Qb=!0;g--;)k=d[g],k.attr("data-thumbnail")?e[g]=!1:(f=k.children("img"),f.length?(k.attr("data-thumbnail",f.attr("src")),e[g]=f):("image"===k.data("type")? k.attr("data-thumbnail",k.attr("href")||k.attr("data-href")):k.attr("data-thumbnail",Sb),e[g]=!1));x=[];ba||(g=r.createDocumentFragment(),k=G>>1,ba=c("<div />").addClass("jackbox-thumb-holder").css("height",G).appendTo(v),u=c("<div />").addClass("jackbox-thumb-panel").css("height",G),da=c("<div />").addClass("jackbox-thumb-right"),ca=c("<div />").addClass("jackbox-thumb-left"),g.appendChild(u[0]),g.appendChild(da[0]),g.appendChild(ca[0]),u[0].cjThumbs=!0,ba[0].appendChild(g),V=c("<div />").addClass("jackbox-thumb-strip").appendTo(u), ca.css("top",k),da.css("top",k));k=r.createDocumentFragment();for(g=0;g<R;g++){l=x[g]=c("<div />").data("id",g).addClass("jackbox-thumb").css({width:ha,height:G,left:ga*g}).on("click.jackbox",Cc);if(Xa&&(f=eb[g].attr("data-thumbTooltip")||eb[g].attr("data-title")))l.data("theTitle",f).on("mouseenter.jackbox",wd).on("mouseleave.jackbox",zc);k.appendChild(l[0]);f=c("<img />").addClass("jb-thumb").one("load.jackbox",hd).appendTo(l);l.data("theThumb",f);e[g]?(l=e[g].attr("width")||e[g].width(),t=e[g].attr("height")|| e[g].height()):(l=ha,t=G);l>ha&&t>G&&(p=l>t?ha/l:G/t,l*=p,t*=p,t<G&&(p=(G-t)/G,l+=l*p,t+=t*p),l<ha&&(p=(ha-l)/ha,l+=l*p,t+=t*p),l!==(l|0)&&(l=l+1|0),t!==(t|0)&&(t=t+1|0));f.attr({width:l,height:t,src:d[g].attr("data-thumbnail")})}V[0].appendChild(k);Ic=x.length;Xb=ga*g;M=!0;y=0;ba.on("click.jackbox",uc).show();Uc();A&&(Fb?(ea.hide(),Y.show(),ba.css("bottom",oa)):(Y.hide(),ea.show(),ba.css("bottom",0)),A.on("click.jackbox",Lb))}if(!qb){qb=!0;if(wa)S.on("click.jackbox",id);if(Aa)Aa.one("click.jackbox", Cb);if(z)z.on("click.jackbox",xd);if(X){if(ya)ya.on("click.jackbox",cb);if(xa)xa.on("click.jackbox",db);if(Xa&&u)u.on("mouseenter.jackbox",gd);s&&F&&(F[0].addEventListener("touchstart",qa,!1),F[0].addEventListener("touchmove",qa,!1),F[0].addEventListener("touchend",qa,!1))}}s&&(h[0].removeEventListener("touchstart",D,!1),h[0].removeEventListener("touchmove",D,!1),h[0].removeEventListener("touchend",D,!1),lc());if(X){if(M)for(d=x.length;d--;)x[d].on("click.jackbox",Cc);ja.on("click.jackbox",db);ta.on("click.jackbox", cb);if(Ga)Ha.on("keydown.jackbox",ed);s&&Bb&&h.cjSwipe("touchSwipe",nd)}"inline"===O&&na()}}(),vd=function(){var a={type:"text/html",frameborder:0,mozallowfullscreen:"mozallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",allowfullscreen:"allowfullscreen",scrolling:"no"};return function(){Jc||(Jc=!0,Ya=c(".jb-total"),z=c(".jackbox-info"),Ba=c(".jb-divider"),Ca=c(".jb-current"),Aa=c(".jackbox-close"),sb=c(".jackbox-title-text"),E=c(".jackbox-title-txt"),za=c(".jackbox-controls"),xa=c(".jackbox-arrow-left"), Za=c(".jackbox-social"),ya=c(".jackbox-arrow-right"),A=c(".jackbox-button-thumbs"),Y=c(".jackbox-show-thumbs"),ea=c(".jackbox-hide-thumbs"),E.length||(E=null),sb.length||(sb=null),xa.length||(xa=null),Ba.length||(Ba=null),ya.length||(ya=null),za.length||(za=null),Aa.length||(Aa=null),Za.length||(Za=null),Ca.length&&Ya.length||(Ca=null),wa?(c(".jackbox-ns").hide(),S.length||(S=wa=null)):S&&S.hide(),jb?A.length&&Y.length&&ea.length?Y.hide():A=Y=ea=null:(A.hide(),A=Y=ea=null),z.length?(F=c("<div />").addClass("jackbox-info-text").appendTo(ka).css("visibility", "hidden"),P=c("<div />").addClass("jackbox-description-text").appendTo(F)):z=null,Xa&&(La=c("<span />").addClass("jackbox-thumb-tip").css("bottom",G),Ub=c("<span />").addClass("jackbox-thumb-tip-text").text("render me").appendTo(La),La.appendTo(v),Hc=(parseInt(La.css("padding-left"),10)<<1)-(Ea<<1)));X||(za&&za.hide(),A&&A.hide());if(sb){"false"===pa&&(pa=!1);var b=E&&pa,d=b?" -&nbsp;":"";Ca&&X?(Ca.text(f+1).show(),Ya.html(R+d).show(),Ba&&Ba.show()):(Ya&&Ya.hide(),Ca&&Ca.hide(),Ba&&Ba.hide());b&& (E.html(Gb),b=E.find("a"),b.length&&(b.on("click.jackbox",qa),E.data("links",b)))}if(Za&&!tb){var m,b=r.URL.split("#")[0],d=b.length-1;-1!==b.search("/")&&("/"!==b.charAt(d)?(W?m=b+"#/"+ma+"/"+(f+1):m=b,b=b.substring(0,b.lastIndexOf("/"))):(b=b.substring(0,d),W?m=b+"/#/"+ma+"/"+(f+1):m=b));Va?d=e.attr("href")||e.attr("data-href"):(d=e.children("img"),d=d.length?d.attr("src"):Pc);-1===d.search("http")&&(d="/"!==d.charAt(0)?b+"/"+d:b+d);b=pa?pa.replace(/(<([^>]+)>)/ig,""):r.title;b=b.split(".").join(""); a.width=200;a.height=21;a.src=Tb+"?url="+encodeURIComponent(m)+"&poster="+encodeURIComponent(d)+"&title="+escape(b);pb=c("<iframe />").attr(a).appendTo(Za)}}}(),xd=function(){var a={},b={duration:300};return function(d){d&&d.stopPropagation();Na?(a.marginTop=fa,b.callback=fd,z.removeClass("jb-info-inactive")):(z.addClass("jb-info-inactive"),F.css("visibility","visible"),a.marginTop=0,delete b.callback);Jacked.tween(P[0],a,b);Na=!Na}}(),wd=function(){var a={opacity:1,visibility:"visible"};return function(){s&& (clearTimeout(Lc),Lc=setTimeout(zc,2E3));var b=c(this),d,e,g;Ub.text(b.data("theTitle"));d=parseInt(Ub.css("width"),10);g=u.data("offLeft");b=b.offset().left;e=g+u.width()-d-Hc;a.width=d;a.left=b<g?g:b>e?e:b;La.css(a)}}(),Lb=function(){var a={},b={duration:300};return function(d){d&&d.stopPropagation();0===oa?(oa=xb,A&&(ea.hide(),Y.show())):(oa=0,A&&(Y.hide(),ea.show()));a.bottom=oa;Jacked.tween(ba[0],a,b);569>I||(na("true"),Sc())}}(),Uc=function(){var a={};return function(b){var d=I-160;Xb<d?(ra= Ic,$b=!1):(ra=d/ga|0,$b=!0);rb=ga*ra-Ea;Wb=ra-1;a.marginLeft=-(rb>>1)-Ea;a.width=rb;u.css(a);V.css("width",Xb);vc(b)}}(),vc=function(){var a={},b={duration:300};return function(d,c){if(d)y=f,0!==f&&f+ra>R&&(y=R-ra),Jacked.stopTween(V[0]),V.css("left",y*-ga);else{if(0===f)y=0;else if(f>y+Wb)for(;f>y+Wb;)y++;c?(a.left=y*-ga,Jacked.tween(V[0],a,b)):(Jacked.stopTween(V[0]),V.css("left",y*-ga))}Mb(d,!1)}}(),Mb=function(){var a={},b={duration:300};return function(d,c){ca.off(".jackbox");da.off(".jackbox"); if($b)if(s&&u.cjSwipe("unbindSwipe"),y<R-ra?(da.on("click.jackbox",Ac).show(),s&&u.cjSwipe("touchSwipeLeft",Ac,!0)):da.hide(),0<y?(ca.on("click.jackbox",Bc).show(),s&&u.cjSwipe("touchSwipeRight",Bc,!0)):ca.hide(),c)a.left=y*-ga,Jacked.tween(V[0],a,b);else{if(d||!Pb){var e=u.offset().left;ca.css("left",e);da.css("left",e+rb);Pb=!0}}else ca.hide(),da.hide()}}(),na=function(){var a={opacity:1},b={};return function(d){I=J.width();N=Math.max(J.height(),226);var c=568<I&&0===oa?Eb:0;Kc="audio"!==O&&"inline"!== O?Wa?kb||Nc:kb:!1;if(ob<I&&Ob+c<N&&!Kc)q=T,n=U;else{q=I/ob;n=N/Ob;var e=q>n?n:q;q=T*e;n=U*e;I>N?n+gb+c>N&&(n=N-Ja-$-c,q=n/U*T):q>n?q+ob>I&&(q=I-$,n=q/T*U):n+gb+c>N&&(n=N-Ja-$-c,q=n/U*T);q!==(q|0)&&(q=q+1|0);n!==(n|0)&&(n=n+1|0)}if("inline"===O){var e=I-fb-Db-$,f=N-Ja-$-c;q=T>e?e:T;n=U<f?U:n}Da=q+fb;Zb=n+Ja+c;"true"!==d&&(Jacked.stopTween(w[0],!1,!0),h&&Jacked.stopTween(h[0],!0,!0),260>q&&(Da+=260-q),d=Math.max(260,q),a.width=d,a.height=n,b.marginLeft=-(0.5*Da+0.5|0),b.marginTop=-(0.5*Zb+0.5|0),b.width= d,b.height=n,w.css(b),h.css(a),C&&(Jacked.stopTween(C[0]),C.css("width",d)),B&&(Jacked.stopTween(B[0]),B.css("width",d)),z&&lb&&(fa=-P.outerHeight(),F.css("height",-fa<n?-fa:n),Na||(Jacked.stopTween(P[0],!1,!0),P.css("margin-top",fa))),M&&Uc(!0))}}(),ud=function(){var a={};return function(b){var d=c(this).data();a.left=b.pageX-d.tipX-d.tipWidth;a.top=b.pageY-d.tipY-d.tipHeight;d.tip.css(a)}}();c.fn.jackBox=function(a,b){if(Rc.hasOwnProperty(a))Rc[a](this,b);return this};c.jackBox={available:function(a){a&& (bc?W?setTimeout(a,250):a():Qa=a)},itemLoaded:function(a){Vb=a}}})(jQuery);function jackboxFrameReady(){jQuery.fn.jackBox("frameReady")};;
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(g,l){var a=d(g);a.vars=d.extend({},d.flexslider.defaults,l);var e=a.vars.namespace,v=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,t=("ontouchstart"in window||v||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,m="",u,p="vertical"===a.vars.direction,n=a.vars.reverse,h=0<a.vars.itemWidth,r="fade"===a.vars.animation,q=""!==a.vars.asNavFor,c={};d.data(g,"flexslider",a);c={init:function(){a.animating=!1;a.currentSlide=parseInt(a.vars.startAt?
a.vars.startAt:0,10);isNaN(a.currentSlide)&&(a.currentSlide=0);a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" "));a.slides=d(a.vars.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(a.vars.sync).length;"slide"===a.vars.animation&&(a.vars.animation="swing");a.prop=p?"top":"marginLeft";a.args={};a.manualPause=!1;a.stopped=!1;a.started=!1;a.startTimeout=null;
a.transitions=!a.vars.video&&!r&&a.vars.useCSS&&function(){var b=document.createElement("div"),f=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],k;for(k in f)if(void 0!==b.style[f[k]])return a.pfx=f[k].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}();""!==a.vars.controlsContainer&&(a.controlsContainer=0<d(a.vars.controlsContainer).length&&d(a.vars.controlsContainer));""!==a.vars.manualControls&&(a.manualControls=0<d(a.vars.manualControls).length&&
d(a.vars.manualControls));a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();a.setup("init");a.vars.controlNav&&c.controlNav.setup();a.vars.directionNav&&c.directionNav.setup();a.vars.keyboard&&(1===d(a.containerSelector).length||a.vars.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;a.animating||39!==b&&37!==b||(b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,a.vars.pauseOnAction))});
a.vars.mousewheel&&a.bind("mousewheel",function(b,f,k,d){b.preventDefault();b=0>f?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,a.vars.pauseOnAction)});a.vars.pausePlay&&c.pausePlay.setup();a.vars.slideshow&&a.vars.pauseInvisible&&c.pauseInvisible.init();a.vars.slideshow&&(a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&c.pauseInvisible.isHidden()||(0<a.vars.initDelay?a.startTimeout=
setTimeout(a.play,a.vars.initDelay):a.play()));q&&c.asNav.setup();t&&a.vars.touch&&c.touch();(!r||r&&a.vars.smoothHeight)&&d(window).bind("resize orientationchange focus",c.resize);a.find("img").attr("draggable","false");setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");if(v)g._slider=a,a.slides.each(function(){this._gesture=
new MSGesture;this._gesture.target=this;this.addEventListener("MSPointerDown",function(a){a.preventDefault();a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1);this.addEventListener("MSGestureTap",function(b){b.preventDefault();b=d(this);var f=b.index();d(a.vars.asNavFor).data("flexslider").animating||b.hasClass("active")||(a.direction=a.currentItem<f?"next":"prev",a.flexAnimate(f,a.vars.pauseOnAction,!1,!0,!0))})});else a.slides.on("click touchend MSPointerUp",function(b){b.preventDefault();
b=d(this);var f=b.index();0>=b.offset().left-d(a).scrollLeft()&&b.hasClass(e+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):d(a.vars.asNavFor).data("flexslider").animating||b.hasClass(e+"active-slide")||(a.direction=a.currentItem<f?"next":"prev",a.flexAnimate(f,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?c.controlNav.setupManual():c.controlNav.setupPaging()},setupPaging:function(){var b=1,f,k;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===
a.vars.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var g=0;g<a.pagingCount;g++)k=a.slides.eq(g),f="thumbnails"===a.vars.controlNav?'<img src="'+k.attr("data-thumb")+'"/>':"<a>"+b+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions&&(k=k.attr("data-thumbcaption"),""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")),a.controlNavScaffold.append("<li>"+f+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):
a.append(a.controlNavScaffold);c.controlNav.set();c.controlNav.active();a.controlNavScaffold.delegate("a, img","click touchend MSPointerUp",function(b){b.preventDefault();if(""===m||m===b.type){var f=d(this),k=a.controlNav.index(f);f.hasClass(e+"active")||(a.direction=k>a.currentSlide?"next":"prev",a.flexAnimate(k,a.vars.pauseOnAction))}""===m&&(m=b.type);c.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls;c.controlNav.active();a.controlNav.bind("click touchend MSPointerUp",
function(b){b.preventDefault();if(""===m||m===b.type){var f=d(this),k=a.controlNav.index(f);f.hasClass(e+"active")||(k>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(k,a.vars.pauseOnAction))}""===m&&(m=b.type);c.setToClearWatchedEvent()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===a.vars.controlNav?"img":"a"),a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,
f){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(f).closest("li").remove();c.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(f,b):c.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+a.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+a.vars.nextText+"</a></li></ul>");
a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));c.directionNav.update();a.directionNav.bind("click touchend MSPointerUp",function(b){b.preventDefault();var k;if(""===m||m===b.type)k=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev"),a.flexAnimate(k,a.vars.pauseOnAction);""===m&&(m=b.type);c.setToClearWatchedEvent()})},update:function(){var b=e+"disabled";
1===a.pagingCount?a.directionNav.addClass(b).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(b).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b).attr("tabindex","-1"):a.directionNav.removeClass(b).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));c.pausePlay.update(a.vars.slideshow?e+"pause":e+"play");a.pausePlay.bind("click touchend MSPointerUp",function(b){b.preventDefault();if(""===m||m===b.type)d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play());""===m&&(m=b.type);c.setToClearWatchedEvent()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+
"pause").addClass(e+"play").html(a.vars.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").html(a.vars.pauseText)}},touch:function(){var b,f,k,d,c,e,m=!1,l=0,q=0,s=0;if(v){g.style.msTouchAction="none";g._gesture=new MSGesture;g._gesture.target=g;g.addEventListener("MSPointerDown",t,!1);g._slider=a;g.addEventListener("MSGestureChange",u,!1);g.addEventListener("MSGestureEnd",y,!1);var t=function(b){b.stopPropagation();a.animating?b.preventDefault():(a.pause(),g._gesture.addPointer(b.pointerId),
s=0,d=p?a.h:a.w,e=Number(new Date),k=h&&n&&a.animatingTo===a.last?0:h&&n?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*d:(a.currentSlide+a.cloneOffset)*d)},u=function(a){a.stopPropagation();var b=a.target._slider;if(b){var f=-a.translationX,h=-a.translationY;c=s+=p?h:f;m=p?Math.abs(s)<Math.abs(-f):Math.abs(s)<Math.abs(-h);if(a.detail===a.MSGESTURE_FLAG_INERTIA)setImmediate(function(){g._gesture.stop()});
else if(!m||500<Number(new Date)-e)a.preventDefault(),!r&&b.transitions&&(b.vars.animationLoop||(c=s/(0===b.currentSlide&&0>s||b.currentSlide===b.last&&0<s?Math.abs(s)/d+2:1)),b.setProps(k+c,"setTouch"))}},y=function(a){a.stopPropagation();if(a=a.target._slider){if(a.animatingTo===a.currentSlide&&!m&&null!==c){var g=n?-c:c,h=0<g?a.getTarget("next"):a.getTarget("prev");a.canAdvance(h)&&(550>Number(new Date)-e&&50<Math.abs(g)||Math.abs(g)>d/2)?a.flexAnimate(h,a.vars.pauseOnAction):r||a.flexAnimate(a.currentSlide,
a.vars.pauseOnAction,!0)}k=c=f=b=null;s=0}}}else{g.addEventListener("touchstart",z,!1);var z=function(c){if(a.animating)c.preventDefault();else if(window.navigator.msPointerEnabled||1===c.touches.length)a.pause(),d=p?a.h:a.w,e=Number(new Date),l=c.touches[0].pageX,q=c.touches[0].pageY,k=h&&n&&a.animatingTo===a.last?0:h&&n?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*
d:(a.currentSlide+a.cloneOffset)*d,b=p?q:l,f=p?l:q,g.addEventListener("touchmove",w,!1),g.addEventListener("touchend",x,!1)},w=function(g){l=g.touches[0].pageX;q=g.touches[0].pageY;c=p?b-q:b-l;m=p?Math.abs(c)<Math.abs(l-f):Math.abs(c)<Math.abs(q-f);if(!m||500<Number(new Date)-e)g.preventDefault(),!r&&a.transitions&&(a.vars.animationLoop||(c/=0===a.currentSlide&&0>c||a.currentSlide===a.last&&0<c?Math.abs(c)/d+2:1),a.setProps(k+c,"setTouch"))},x=function(h){g.removeEventListener("touchmove",w,!1);if(a.animatingTo===
a.currentSlide&&!m&&null!==c){h=n?-c:c;var l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-e&&50<Math.abs(h)||Math.abs(h)>d/2)?a.flexAnimate(l,a.vars.pauseOnAction):r||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}g.removeEventListener("touchend",x,!1);k=c=f=b=null}}},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?c.smoothHeight():h?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):p?(a.viewport.height(a.h),a.setProps(a.h,
"setTotal")):(a.vars.smoothHeight&&c.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!p||r){var f=r?a:a.viewport;b?f.animate({height:a.slides.eq(a.animatingTo).height()},b):f.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var f=d(a.vars.sync).data("flexslider"),c=a.animatingTo;switch(b){case "animate":f.flexAnimate(c,a.vars.pauseOnAction,!1,!0);break;case "play":f.playing||f.asNav||f.play();break;case "pause":f.pause()}},
uniqueID:function(a){a.find("[id]").each(function(){var a=d(this);a.attr("id",a.attr("id")+"_clone")});return a},pauseInvisible:{visProp:null,init:function(){var b=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var f=0;f<b.length;f++)b[f]+"Hidden"in document&&(c.pauseInvisible.visProp=b[f]+"Hidden");c.pauseInvisible.visProp&&(b=c.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange",document.addEventListener(b,function(){c.pauseInvisible.isHidden()?a.startTimeout?
clearTimeout(a.startTimeout):a.pause():a.started?a.play():0<a.vars.initDelay?setTimeout(a.play,a.vars.initDelay):a.play()}))},isHidden:function(){return document[c.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(u);u=setTimeout(function(){m=""},3E3)}};a.flexAnimate=function(b,f,k,g,m){a.vars.animationLoop||b===a.currentSlide||(a.direction=b>a.currentSlide?"next":"prev");q&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,
m)||k)&&a.is(":visible")){if(q&&g)if(k=d(a.vars.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,k.flexAnimate(b,!0,!1,!0,m),a.direction=a.currentItem<b?"next":"prev",k.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;
f&&a.pause();a.vars.before(a);a.syncExists&&!m&&c.sync("animate");a.vars.controlNav&&c.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;a.vars.directionNav&&c.directionNav.update();b===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause());if(r)t?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.wrapup(l)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,
a.vars.easing),a.slides.eq(b).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing,a.wrapup));else{var l=p?a.slides.filter(":first").height():a.computedW;h?(b=a.vars.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*l:0:a.currentSlide===a.last&&0===b&&a.vars.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*l:n?(a.count-1-b+a.cloneOffset)*
l:(b+a.cloneOffset)*l;a.setProps(b,"",a.vars.animationSpeed);a.transitions?(a.vars.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(l)})):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(l)})}a.vars.smoothHeight&&c.smoothHeight(a.vars.animationSpeed)}};a.wrapup=function(b){r||h||(0===a.currentSlide&&a.animatingTo===
a.last&&a.vars.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;a.vars.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.animatedSlides=null;a.playing=!1;a.vars.pausePlay&&c.pausePlay.update("play");a.syncExists&&c.sync("pause")};a.play=function(){a.playing&&clearInterval(a.animatedSlides);
a.animatedSlides=a.animatedSlides||setInterval(a.animateSlides,a.vars.slideshowSpeed);a.started=a.playing=!0;a.vars.pausePlay&&c.pausePlay.update("pause");a.syncExists&&c.sync("play")};a.stop=function(){a.pause();a.stopped=!0};a.canAdvance=function(b,f){var c=q?a.pagingCount-1:a.last;return f?!0:q&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:q&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b!==a.currentSlide||q?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===
c&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===c&&0===b&&"next"===a.direction?!1:!0:!1};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,f,c){var d=function(){var c=b?b:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo;return-1*function(){if(h)return"setTouch"===f?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:
c;switch(f){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px"}();a.transitions&&(d=p?"translate3d(0,"+d+",0)":"translate3d("+d+",0,0)",c=void 0!==c?c/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",c),a.container.css("transition-duration",c));a.args[a.prop]=d;(a.transitions||void 0===c)&&a.container.css(a.args);
a.container.css("transform",d)};a.setup=function(b){if(r)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(t?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&c.smoothHeight();else{var f,
g;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,n&&(g=d.makeArray(a.slides).reverse(),a.slides=d(g),a.container.empty().append(a.slides)));a.vars.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),c.uniqueID(a.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(a.container),c.uniqueID(a.slides.last().clone().addClass("clone").attr("aria-hidden",
"true")).prependTo(a.container));a.newSlides=d(a.vars.selector,a);f=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;p&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(f*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(f*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,
"float":"left",display:"block"});a.vars.smoothHeight&&c.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide");a.vars.init(a)};a.doMath=function(){var b=a.slides.first(),c=a.vars.itemMargin,d=a.vars.minItems,e=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=a.vars.itemWidth+c,a.minW=d?d*a.itemT:a.w,a.maxW=e?e*a.itemT-c:a.w,a.itemW=a.minW>a.w?(a.w-
c*(d-1))/d:a.maxW<a.w?(a.w-c*(e-1))/e:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=0<a.vars.move&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+c*(a.count-1):(a.itemW+c)*a.count-a.w-c):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?
a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(a.vars.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)c.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),c.controlNav.update("remove",a.last);a.vars.directionNav&&c.directionNav.update()};a.addSlide=function(b,c){var e=d(b);a.count+=1;a.last=a.count-1;p&&n?void 0!==c?a.slides.eq(a.count-
c).after(e):a.container.prepend(e):void 0!==c?a.slides.eq(c).before(e):a.container.append(e);a.update(c,"add");a.slides=d(a.vars.selector+":not(.clone)",a);a.setup();a.vars.added(a)};a.removeSlide=function(b){var c=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():p&&n?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(c,"remove");a.slides=d(a.vars.selector+":not(.clone)",a);a.setup();a.vars.removed(a)};c.init()};d(window).blur(function(d){focused=
!1}).focus(function(d){focused=!0});d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,
pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};d.fn.flexslider=function(g){void 0===g&&(g={});if("object"===typeof g)return this.each(function(){var a=d(this),e=a.find(g.selector?g.selector:".slides > li");1===e.length&&!0===g.allowOneSlide||0===e.length?
(e.fadeIn(400),g.start&&g.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,g)});var l=d(this).data("flexslider");switch(g){case "play":l.play();break;case "pause":l.pause();break;case "stop":l.stop();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof g&&l.flexAnimate(g,!0)}}})(jQuery);;
(function() {

  var root = (typeof exports == 'undefined' ? window : exports);

  var config = {
    // Ensure Content-Type is an image before trying to load @2x image
    // https://github.com/imulus/retinajs/pull/45)
    check_mime_type: true
  };



  root.Retina = Retina;

  function Retina() {}

  Retina.configure = function(options) {
    if (options == null) options = {};
    for (var prop in options) config[prop] = options[prop];
  };

  Retina.init = function(context) {
    if (context == null) context = root;

    var existing_onload = context.onload || new Function;

    context.onload = function() {
      var images = document.getElementsByTagName("img"), retinaImages = [], i, image;
      for (i = 0; i < images.length; i++) {
        image = images[i];
        retinaImages.push(new RetinaImage(image));
      }
      existing_onload();
    }
  };

  Retina.isRetina = function(){
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                      (min--moz-device-pixel-ratio: 1.5),\
                      (-o-min-device-pixel-ratio: 3/2),\
                      (min-resolution: 1.5dppx)";

    if (root.devicePixelRatio > 1)
      return true;

    if (root.matchMedia && root.matchMedia(mediaQuery).matches)
      return true;

    return false;
  };


  root.RetinaImagePath = RetinaImagePath;

  function RetinaImagePath(path, at_2x_path) {
    this.path = path;
    if (typeof at_2x_path !== "undefined" && at_2x_path !== null) {
      this.at_2x_path = at_2x_path;
      this.perform_check = false;
    } else {
      this.at_2x_path = path.replace(/\.\w+$/, function(match) { return "@2x" + match; });
      this.perform_check = true;
    }
  }

  RetinaImagePath.confirmed_paths = [];

  RetinaImagePath.prototype.is_external = function() {
    return !!(this.path.match(/^https?\:/i) && !this.path.match('//' + document.domain) )
  }

  RetinaImagePath.prototype.check_2x_variant = function(callback) {
    var http, that = this;
    if (this.is_external()) {
      return callback(false);
    } else if (!this.perform_check && typeof this.at_2x_path !== "undefined" && this.at_2x_path !== null) {
      return callback(true);
    } else if (this.at_2x_path in RetinaImagePath.confirmed_paths) {
      return callback(true);
    } else {
      http = new XMLHttpRequest;
      http.open('HEAD', this.at_2x_path);
      http.onreadystatechange = function() {
        if (http.readyState != 4) {
          return callback(false);
        }

        if (http.status >= 200 && http.status <= 399) {
          if (config.check_mime_type) {
            var type = http.getResponseHeader('Content-Type');
            if (type == null || !type.match(/^image/i)) {
              return callback(false);
            }
          }

          RetinaImagePath.confirmed_paths.push(that.at_2x_path);
          return callback(true);
        } else {
          return callback(false);
        }
      }
      http.send();
    }
  }



  function RetinaImage(el) {
    this.el = el;
    this.path = new RetinaImagePath(this.el.getAttribute('src'), this.el.getAttribute('data-at2x'));
    var that = this;
    this.path.check_2x_variant(function(hasVariant) {
      if (hasVariant) that.swap();
    });
  }

  root.RetinaImage = RetinaImage;

  RetinaImage.prototype.swap = function(path) {
    if (typeof path == 'undefined') path = this.path.at_2x_path;

    var that = this;
    function load() {
      if (! that.el.complete) {
        setTimeout(load, 5);
      } else {
        that.el.setAttribute('width', that.el.offsetWidth);
        that.el.setAttribute('height', that.el.offsetHeight);
        that.el.setAttribute('src', path);
      }
    }
    load();
  }




  if (Retina.isRetina()) {
    Retina.init(root);
  }

})();

;
/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function"!==typeof Object.create&&(Object.create=function(d){function h(){}h.prototype=d;return new h});
(function(d,h,l,m){var k={init:function(b,a){var c=this;c.elem=a;c.$elem=d(a);c.imageSrc=c.$elem.data("zoom-image")?c.$elem.data("zoom-image"):c.$elem.attr("src");c.options=d.extend({},d.fn.elevateZoom.options,b);c.options.tint&&(c.options.lensColour="none",c.options.lensOpacity="1");"inner"==c.options.zoomType&&(c.options.showLens=!1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage=c.imageSrc;c.refresh(1);d("."+c.options.gallery+" a").click(function(a){c.options.galleryActiveClass&&
(d("."+c.options.gallery+" a").removeClass(c.options.galleryActiveClass),d(this).addClass(c.options.galleryActiveClass));a.preventDefault();d(this).data("zoom-image")?c.zoomImagePre=d(this).data("zoom-image"):c.zoomImagePre=d(this).data("image");c.swaptheimage(d(this).data("image"),c.zoomImagePre);return!1})},refresh:function(b){var a=this;setTimeout(function(){a.fetch(a.imageSrc)},b||a.options.refresh)},fetch:function(b){var a=this,c=new Image;c.onload=function(){a.largeWidth=c.width;a.largeHeight=
c.height;a.startZoom();a.currentImage=a.imageSrc;a.options.onZoomedImageLoaded(a.$elem)};c.src=b},startZoom:function(){var b=this;b.nzWidth=b.$elem.width();b.nzHeight=b.$elem.height();b.isWindowActive=!1;b.isLensActive=!1;b.isTintActive=!1;b.overWindow=!1;b.options.imageCrossfade&&(b.zoomWrap=b.$elem.wrap('<div style="height:'+b.nzHeight+"px;width:"+b.nzWidth+'px;" class="zoomWrapper" />'),b.$elem.css("position","absolute"));b.zoomLock=1;b.scrollingLock=!1;b.changeBgSize=!1;b.currentZoomLevel=b.options.zoomLevel;
b.nzOffset=b.$elem.offset();b.widthRatio=b.largeWidth/b.currentZoomLevel/b.nzWidth;b.heightRatio=b.largeHeight/b.currentZoomLevel/b.nzHeight;"window"==b.options.zoomType&&(b.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(b.options.zoomWindowBgColour)+";width: "+String(b.options.zoomWindowWidth)+"px;height: "+String(b.options.zoomWindowHeight)+"px;float: left;background-size: "+b.largeWidth/b.currentZoomLevel+"px "+b.largeHeight/b.currentZoomLevel+
"px;display: none;z-index:100;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;");if("inner"==b.options.zoomType){var a=b.$elem.css("border-left-width");b.zoomWindowStyle="overflow: hidden;margin-left: "+String(a)+";margin-top: "+String(a)+";background-position: 0px 0px;width: "+String(b.nzWidth)+"px;height: "+String(b.nzHeight)+"px;float: left;display: none;cursor:"+b.options.cursor+";px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==
b.options.zoomType&&(lensHeight=b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?b.nzHeight:String(b.options.zoomWindowHeight/b.heightRatio),lensWidth=b.largeWidth<b.options.zoomWindowWidth?b.nzWidth:b.options.zoomWindowWidth/b.widthRatio,b.lensStyle="background-position: 0px 0px;width: "+String(b.options.zoomWindowWidth/b.widthRatio)+"px;height: "+String(b.options.zoomWindowHeight/b.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+
b.options.lensOpacity+";filter: alpha(opacity = "+100*b.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+b.options.lensColour+";cursor:"+b.options.cursor+";border: "+b.options.lensBorderSize+"px solid "+b.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;");b.tintStyle="display: block;position: absolute;background-color: "+b.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+b.nzWidth+"px;height: "+b.nzHeight+"px;";
b.lensRound="";"lens"==b.options.zoomType&&(b.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";width:"+String(b.options.lensSize)+"px;height:"+String(b.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;");"round"==b.options.lensShape&&(b.lensRound="border-top-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-top-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+
"px;border-bottom-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;");b.zoomContainer=d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+b.nzOffset.left+"px;top:"+b.nzOffset.top+"px;height:"+b.nzHeight+"px;width:"+b.nzWidth+'px;"></div>');d("body").append(b.zoomContainer);b.options.containLensZoom&&"lens"==b.options.zoomType&&b.zoomContainer.css("overflow",
"hidden");"inner"!=b.options.zoomType&&(b.zoomLens=d("<div class='zoomLens' style='"+b.lensStyle+b.lensRound+"'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")}),b.options.tint&&(b.tintContainer=d("<div/>").addClass("tintContainer"),b.zoomTint=d("<div class='zoomTint' style='"+b.tintStyle+"'></div>"),b.zoomLens.wrap(b.tintContainer),b.zoomTintcss=b.zoomLens.after(b.zoomTint),b.zoomTintImage=d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+
b.nzWidth+"px; height: "+b.nzHeight+'px;" src="'+b.imageSrc+'">').appendTo(b.zoomLens).click(function(){b.$elem.trigger("click")})));isNaN(b.options.zoomWindowPosition)?b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){b.$elem.trigger("click")}):b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+
"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")});b.zoomWindowContainer=d("<div/>").addClass("zoomWindowContainer").css("width",b.options.zoomWindowWidth);b.zoomWindow.wrap(b.zoomWindowContainer);"lens"==b.options.zoomType&&b.zoomLens.css({backgroundImage:"url('"+b.imageSrc+"')"});"window"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+"')"});"inner"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+
"')"});b.$elem.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchmove",function(a){"inner"==b.options.zoomType&&b.showHideWindow("show");a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});
b.$elem.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});b.options.showLens&&(b.zoomLens.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}),b.zoomLens.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")}));
b.$elem.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"!=b.options.zoomType&&b.zoomLens.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),
b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.options.tint&&"inner"!=b.options.zoomType&&b.zoomTint.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"==b.options.zoomType&&b.zoomWindow.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.add(b.$elem).mouseenter(function(){!1==b.overWindow&&
b.setElements("show")}).mouseleave(function(){b.scrollLock||b.setElements("hide")});"inner"!=b.options.zoomType&&b.zoomWindow.mouseenter(function(){b.overWindow=!0;b.setElements("hide")}).mouseleave(function(){b.overWindow=!1});b.minZoomLevel=b.options.minZoomLevel?b.options.minZoomLevel:2*b.options.scrollZoomIncrement;b.options.scrollZoom&&b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){b.scrollLock=!0;clearTimeout(d.data(this,"timer"));d.data(this,"timer",
setTimeout(function(){b.scrollLock=!1},250));var e=a.originalEvent.wheelDelta||-1*a.originalEvent.detail;a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();0<e/120?b.currentZoomLevel>=b.minZoomLevel&&b.changeZoomLevel(b.currentZoomLevel-b.options.scrollZoomIncrement):b.options.maxZoomLevel?b.currentZoomLevel<=b.options.maxZoomLevel&&b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement):b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement);
return!1})},setElements:function(b){if(!this.options.zoomEnabled)return!1;"show"==b&&this.isWindowSet&&("inner"==this.options.zoomType&&this.showHideWindow("show"),"window"==this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&"inner"!=this.options.zoomType&&this.showHideTint("show"));"hide"==b&&("window"==this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),
this.options.tint&&this.showHideTint("hide"))},setPosition:function(b){if(!this.options.zoomEnabled)return!1;this.nzHeight=this.$elem.height();this.nzWidth=this.$elem.width();this.nzOffset=this.$elem.offset();this.options.tint&&"inner"!=this.options.zoomType&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0}));this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/
this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!=this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/
this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),"lens"==this.options.zoomType&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"}));this.zoomContainer.css({top:this.nzOffset.top});this.zoomContainer.css({left:this.nzOffset.left});this.mouseLeft=parseInt(b.pageX-this.nzOffset.left);this.mouseTop=
parseInt(b.pageY-this.nzOffset.top);"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize);"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-
this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize);0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),
this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),
"lens"==this.options.zoomType&&(this.windowLeftPos=String(-1*((b.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((b.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+
"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(b)),this.options.tint&&"inner"!=this.options.zoomType&&
this.setTintPosition(b),"window"==this.options.zoomType&&this.setWindowPostition(b),"inner"==this.options.zoomType&&this.setWindowPostition(b),this.options.showLens&&(this.fullwidth&&"lens"!=this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"})))},showHideWindow:function(b){"show"!=b||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=
!0);"hide"==b&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(b){"show"!=b||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0);"hide"==b&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),
this.isLensActive=!1)},showHideTint:function(b){"show"!=b||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0);"hide"==b&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(b){},
setWindowPostition:function(b){var a=this;if(isNaN(a.options.zoomWindowPosition))a.externalContainer=d("."+a.options.zoomWindowPosition),a.externalContainerWidth=a.externalContainer.width(),a.externalContainerHeight=a.externalContainer.height(),a.externalContainerOffset=a.externalContainer.offset(),a.windowOffsetTop=a.externalContainerOffset.top,a.windowOffsetLeft=a.externalContainerOffset.left;else switch(a.options.zoomWindowPosition){case 1:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=
+a.nzWidth;break;case 2:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=a.nzWidth);break;case 3:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=a.nzWidth;break;case 4:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth;break;case 5:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 6:a.options.zoomWindowHeight>
a.nzHeight&&(a.windowOffsetTop=a.nzHeight,a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 7:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=0;break;case 8:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 9:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 10:a.options.zoomWindowHeight>a.nzHeight&&
(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize));break;case 11:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 12:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 13:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=
0;break;case 14:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize),a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 15:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 16:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth;break;default:a.windowOffsetTop=
a.options.zoomWindowOffety,a.windowOffsetLeft=a.nzWidth}a.isWindowSet=!0;a.windowOffsetTop+=a.options.zoomWindowOffety;a.windowOffsetLeft+=a.options.zoomWindowOffetx;a.zoomWindow.css({top:a.windowOffsetTop});a.zoomWindow.css({left:a.windowOffsetLeft});"inner"==a.options.zoomType&&(a.zoomWindow.css({top:0}),a.zoomWindow.css({left:0}));a.windowLeftPos=String(-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2));a.windowTopPos=String(-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/
2));a.Etoppos&&(a.windowTopPos=0);a.Eloppos&&(a.windowLeftPos=0);a.Eboppos&&(a.windowTopPos=-1*(a.largeHeight/a.currentZoomLevel-a.zoomWindow.height()));a.Eroppos&&(a.windowLeftPos=-1*(a.largeWidth/a.currentZoomLevel-a.zoomWindow.width()));a.fullheight&&(a.windowTopPos=0);a.fullwidth&&(a.windowLeftPos=0);if("window"==a.options.zoomType||"inner"==a.options.zoomType)1==a.zoomLock&&(1>=a.widthRatio&&(a.windowLeftPos=0),1>=a.heightRatio&&(a.windowTopPos=0)),a.largeHeight<a.options.zoomWindowHeight&&(a.windowTopPos=
0),a.largeWidth<a.options.zoomWindowWidth&&(a.windowLeftPos=0),a.options.easing?(a.xp||(a.xp=0),a.yp||(a.yp=0),a.loop||(a.loop=setInterval(function(){a.xp+=(a.windowLeftPos-a.xp)/a.options.easingAmount;a.yp+=(a.windowTopPos-a.yp)/a.options.easingAmount;a.scrollingLock?(clearInterval(a.loop),a.xp=a.windowLeftPos,a.yp=a.windowTopPos,a.xp=-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2),a.yp=-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/2),a.changeBgSize&&(a.nzHeight>
a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),
a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+"px "+a.windowTopPos+"px"}),a.scrollingLock=!1,a.loop=!1):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+
"px "+a.largeHeight/a.newvaluewidth+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.xp+"px "+a.yp+"px"}))},16))):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/
a.newvalueheight+"px"})):("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}),a.largeHeight/a.newvaluewidth<a.options.zoomWindowHeight?a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}):a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+
"px "+a.windowTopPos+"px"}))},setTintPosition:function(b){this.nzOffset=this.$elem.offset();this.tintpos=String(-1*(b.pageX-this.nzOffset.left-this.zoomLens.width()/2));this.tintposy=String(-1*(b.pageY-this.nzOffset.top-this.zoomLens.height()/2));this.Etoppos&&(this.tintposy=0);this.Eloppos&&(this.tintpos=0);this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize));this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize));
this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(b,a){var c=this,e=new Image;c.options.loadingIcon&&(c.spinner=d("<div style=\"background: url('"+c.options.loadingIcon+"') no-repeat center;height:"+c.nzHeight+"px;width:"+c.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),c.$elem.after(c.spinner));
c.options.onImageSwap(c.$elem);e.onload=function(){c.largeWidth=e.width;c.largeHeight=e.height;c.zoomImage=a;c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.swapAction(b,a)};e.src=a},swapAction:function(b,a){var c=this,e=new Image;e.onload=function(){c.nzHeight=e.height;c.nzWidth=e.width;c.options.onImageSwapComplete(c.$elem);c.doneCallback()};e.src=b;c.currentZoomLevel=c.options.zoomLevel;c.options.maxZoomLevel=
!1;"lens"==c.options.zoomType&&c.zoomLens.css({backgroundImage:"url('"+a+"')"});"window"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});"inner"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});c.currentImage=a;if(c.options.imageCrossfade){var f=c.$elem,g=f.clone();c.$elem.attr("src",b);c.$elem.after(g);g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()});c.$elem.width("auto").removeAttr("width");c.$elem.height("auto").removeAttr("height");
f.fadeIn(c.options.imageCrossfade);c.options.tint&&"inner"!=c.options.zoomType&&(f=c.zoomTintImage,g=f.clone(),c.zoomTintImage.attr("src",a),c.zoomTintImage.after(g),g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()}),f.fadeIn(c.options.imageCrossfade),c.zoomTint.css({height:c.$elem.height()}),c.zoomTint.css({width:c.$elem.width()}));c.zoomContainer.css("height",c.$elem.height());c.zoomContainer.css("width",c.$elem.width());"inner"!=c.options.zoomType||c.options.constrainType||
(c.zoomWrap.parent().css("height",c.$elem.height()),c.zoomWrap.parent().css("width",c.$elem.width()),c.zoomWindow.css("height",c.$elem.height()),c.zoomWindow.css("width",c.$elem.width()))}else c.$elem.attr("src",b),c.options.tint&&(c.zoomTintImage.attr("src",a),c.zoomTintImage.attr("height",c.$elem.height()),c.zoomTintImage.css({height:c.$elem.height()}),c.zoomTint.css({height:c.$elem.height()})),c.zoomContainer.css("height",c.$elem.height()),c.zoomContainer.css("width",c.$elem.width());c.options.imageCrossfade&&
(c.zoomWrap.css("height",c.$elem.height()),c.zoomWrap.css("width",c.$elem.width()));c.options.constrainType&&("height"==c.options.constrainType&&(c.zoomContainer.css("height",c.options.constrainSize),c.zoomContainer.css("width","auto"),c.options.imageCrossfade?(c.zoomWrap.css("height",c.options.constrainSize),c.zoomWrap.css("width","auto"),c.constwidth=c.zoomWrap.width()):(c.$elem.css("height",c.options.constrainSize),c.$elem.css("width","auto"),c.constwidth=c.$elem.width()),"inner"==c.options.zoomType&&
(c.zoomWrap.parent().css("height",c.options.constrainSize),c.zoomWrap.parent().css("width",c.constwidth),c.zoomWindow.css("height",c.options.constrainSize),c.zoomWindow.css("width",c.constwidth)),c.options.tint&&(c.tintContainer.css("height",c.options.constrainSize),c.tintContainer.css("width",c.constwidth),c.zoomTint.css("height",c.options.constrainSize),c.zoomTint.css("width",c.constwidth),c.zoomTintImage.css("height",c.options.constrainSize),c.zoomTintImage.css("width",c.constwidth))),"width"==
c.options.constrainType&&(c.zoomContainer.css("height","auto"),c.zoomContainer.css("width",c.options.constrainSize),c.options.imageCrossfade?(c.zoomWrap.css("height","auto"),c.zoomWrap.css("width",c.options.constrainSize),c.constheight=c.zoomWrap.height()):(c.$elem.css("height","auto"),c.$elem.css("width",c.options.constrainSize),c.constheight=c.$elem.height()),"inner"==c.options.zoomType&&(c.zoomWrap.parent().css("height",c.constheight),c.zoomWrap.parent().css("width",c.options.constrainSize),c.zoomWindow.css("height",
c.constheight),c.zoomWindow.css("width",c.options.constrainSize)),c.options.tint&&(c.tintContainer.css("height",c.constheight),c.tintContainer.css("width",c.options.constrainSize),c.zoomTint.css("height",c.constheight),c.zoomTint.css("width",c.options.constrainSize),c.zoomTintImage.css("height",c.constheight),c.zoomTintImage.css("width",c.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide();this.nzOffset=this.$elem.offset();this.nzWidth=this.$elem.width();
this.nzHeight=this.$elem.height();this.currentZoomLevel=this.options.zoomLevel;this.widthRatio=this.largeWidth/this.nzWidth;this.heightRatio=this.largeHeight/this.nzHeight;"window"==this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",
lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var b=this;b.gallerylist=[];b.options.gallery?d("."+b.options.gallery+" a").each(function(){var a="";d(this).data("zoom-image")?a=d(this).data("zoom-image"):d(this).data("image")&&(a=d(this).data("image"));a==b.zoomImage?b.gallerylist.unshift({href:""+a+"",title:d(this).find("img").attr("title")}):b.gallerylist.push({href:""+a+"",title:d(this).find("img").attr("title")})}):
b.gallerylist.push({href:""+b.zoomImage+"",title:d(this).find("img").attr("title")});return b.gallerylist},changeZoomLevel:function(b){this.scrollingLock=!0;this.newvalue=parseFloat(b).toFixed(2);newvalue=parseFloat(b).toFixed(2);maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight);maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth);"inner"!=this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),"lens"==this.options.zoomType&&(maxheightnewvalue<=newvalue?
(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)));"inner"==this.options.zoomType&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=
newvalue,this.fullwidth=!1));scrcontinue=!1;"inner"==this.options.zoomType&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)));"inner"!=this.options.zoomType&&(scrcontinue=!0);scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&
(this.currentZoomLevel=this.newvalueheight,"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!=this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!=this.options.zoomType&&
"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),"inner"==this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth)));this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide();
self.zoomLens&&self.zoomLens.hide();self.zoomTint&&self.zoomTint.hide()},changeState:function(b){"enable"==b&&(this.options.zoomEnabled=!0);"disable"==b&&(this.options.zoomEnabled=!1)}};d.fn.elevateZoom=function(b){return this.each(function(){var a=Object.create(k);a.init(b,this);d.data(this,"elevateZoom",a)})};d.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:0.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,
zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:0.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:0.4,gallery:!1,
galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:d.noop,onZoomedImageLoaded:function(){},onImageSwap:d.noop,onImageSwapComplete:d.noop}})(jQuery,window,document);;

    eval(function (p, a, c, k, e, r) {
        e = function (c) {
            return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--)r[e(c)] = k[c] || e(c);
            k = [function (e) {
                return r[e]
            }];
            e = function () {
                return'\\w+'
            };
            c = 1
        }
        ;
        while (c--)if (k[c])p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)', 62, 382, '||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'), 0, {}))

;
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);;
// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
// Modified by Stan Scates for https://github.com/StanScates/Tweet.js-Mod
(function(factory){if(typeof define==='function'&&define.amd)define(['jquery'],factory);else factory(jQuery)}(function($){$.fn.tweet=function(o){var s=$.extend({modpath:"/twitter/",username:null,list_id:null,list:null,favorites:false,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:true,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"api.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(tweet1,tweet2){return tweet2["tweet_time"]-tweet1["tweet_time"]},filter:function(tweet){return true}},o);var url_regexp=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/gi;function t(template,info){if(typeof template==="string"){var result=template;for(var key in info){var val=info[key];result=result.replace(new RegExp('{'+key+'}','g'),val===null?'':val)}return result}else return template(info)}$.extend({tweet:{t:t}});function replacer(regex,replacement){return function(){var returning=[];this.each(function(){returning.push(this.replace(regex,replacement))});return $(returning)}}function escapeHTML(s){return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;")}$.fn.extend({linkUser:replacer(/(^|[\W])@(\w+)/gi,"$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),linkHash:replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+((s.username&&s.username.length==1&&!s.list)?'&from='+s.username.join("%2BOR%2B"):'')+'" class="tweet_hashtag">#$1</a>'),makeHeart:replacer(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});function linkURLs(text,entities){return text.replace(url_regexp,function(match){var url=(/^[a-z]+:/i).test(match)?match:"http://"+match;var text=match;for(var i=0;i<entities.length;++i){var entity=entities[i];if(entity.url==url&&entity.expanded_url){url=entity.expanded_url;text=entity.display_url;break}}return"<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>"})}function parse_date(date_str){return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,'$1,$2$4$3'))}function relative_time(date){var relative_to=(arguments.length>1)?arguments[1]:new Date();var delta=parseInt((relative_to.getTime()-date)/1000,10);var r='';if(delta<1){r='just now'}else if(delta<60){r=delta+' seconds ago'}else if(delta<120){r='about a minute ago'}else if(delta<(45*60)){r='about '+(parseInt(delta/60,10)).toString()+' minutes ago'}else if(delta<(2*60*60)){r='about an hour ago'}else if(delta<(24*60*60)){r='about '+(parseInt(delta/3600,10)).toString()+' hours ago'}else if(delta<(48*60*60)){r='about a day ago'}else{r='about '+(parseInt(delta/86400,10)).toString()+' days ago'}return r}function build_auto_join_text(text){if(text.match(/^(@([A-Za-z0-9-_]+)) .*/i)){return s.auto_join_text_reply}else if(text.match(url_regexp)){return s.auto_join_text_url}else if(text.match(/^((\w+ed)|just) .*/im)){return s.auto_join_text_ed}else if(text.match(/^(\w*ing) .*/i)){return s.auto_join_text_ing}else{return s.auto_join_text_default}}function build_api_request(){var modpath=s.modpath,count=(s.fetch===null)?s.count:s.fetch,defaults={include_entities:1};if(s.list){return{host:s.twitter_api_url,url:"/1.1/lists/statuses.json",parameters:$.extend({},defaults,{list_id:s.list_id,slug:s.list,owner_screen_name:s.username,page:s.page,count:count,include_rts:(s.retweets?1:0)})}}else if(s.favorites){return{host:s.twitter_api_url,url:"/1.1/favorites/list.json",parameters:$.extend({},defaults,{list_id:s.list_id,screen_name:s.username,page:s.page,count:count})}}else if(s.query===null&&s.username.length===1){return{host:s.twitter_api_url,url:"/1.1/statuses/user_timeline.json",parameters:$.extend({},defaults,{screen_name:s.username,page:s.page,count:count,include_rts:(s.retweets?1:0)})}}else{var query=(s.query||'from:'+s.username.join(' OR from:'));return{host:s.twitter_search_url,url:"/1.1/search/tweets.json",parameters:$.extend({},defaults,{q:query,rpp:count})}}}function extract_avatar_url(item,secure){if(secure){return('user'in item)?item.user.profile_image_url_https:extract_avatar_url(item,false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/")}else{return item.profile_image_url||item.user.profile_image_url}}function extract_template_data(item){var o={};o.item=item;o.source=item.source;o.name=item.from_user_name||item.user.name;o.screen_name=item.from_user||item.user.screen_name;o.avatar_size=s.avatar_size;o.avatar_url=extract_avatar_url(item,(document.location.protocol==='https:'));o.retweet=typeof(item.retweeted_status)!='undefined';o.tweet_time=parse_date(item.created_at);o.join_text=s.join_text=="auto"?build_auto_join_text(item.text):s.join_text;o.tweet_id=item.id_str;o.twitter_base="http://"+s.twitter_url+"/";o.user_url=o.twitter_base+o.screen_name;o.tweet_url=o.user_url+"/status/"+o.tweet_id;o.reply_url=o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;o.retweet_url=o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;o.favorite_url=o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;o.retweeted_screen_name=o.retweet&&item.retweeted_status.user.screen_name;o.tweet_relative_time=relative_time(o.tweet_time);o.entities=item.entities?(item.entities.urls||[]).concat(item.entities.media||[]):[];o.tweet_raw_text=o.retweet?('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text):item.text;o.tweet_text=$([linkURLs(o.tweet_raw_text,o.entities)]).linkUser().linkHash()[0];o.tweet_text_fancy=$([o.tweet_text]).makeHeart()[0];o.user=t('<a class="tweet_user" href="{user_url}">{screen_name}</a>',o);o.join=s.join_text?t(' <span class="tweet_join">{join_text}</span> ',o):' ';o.avatar=o.avatar_size?t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',o):'';o.time=t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',o);o.text=t('<span class="tweet_text">{tweet_text_fancy}</span>',o);o.reply_action=t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',o);o.retweet_action=t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',o);o.favorite_action=t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',o);return o}return this.each(function(i,widget){var list=$('<ul class="tweet_list">');var intro='<p class="tweet_intro">'+s.intro_text+'</p>';var outro='<p class="tweet_outro">'+s.outro_text+'</p>';var loading=$('<p class="loading">'+s.loading_text+'</p>');if(s.username&&typeof(s.username)=="string"){s.username=[s.username]}$(widget).unbind("tweet:load").bind("tweet:load",function(){if(s.loading_text)$(widget).empty().append(loading);$.ajax({dataType:"json",type:"post",async:false,url:s.modpath||"/twitter/",data:{request:build_api_request()},success:function(data,status){if(data.message){console.log(data.message)}var response=data.response;$(widget).empty().append(list);if(s.intro_text)list.before(intro);list.empty();if(response.statuses!==undefined){resp=response.statuses}else if(response.results!==undefined){resp=response.results}else{resp=response}var tweets=$.map(resp,extract_template_data);tweets=$.grep(tweets,s.filter).sort(s.comparator).slice(0,s.count);list.append($.map(tweets,function(o){return"<li>"+t(s.template,o)+"</li>"}).join('')).children('li:first').addClass('tweet_first').end().children('li:odd').addClass('tweet_even').end().children('li:even').addClass('tweet_odd');if(s.outro_text)list.after(outro);$(widget).trigger("loaded").trigger((tweets?"empty":"full"));if(s.refresh_interval){window.setTimeout(function(){$(widget).trigger("tweet:load")},1000*s.refresh_interval)}}})}).trigger("tweet:load")})}}));;
(function ($) {

  $.fn.customScrollbar = function (options, args) {

    var defaultOptions = {
      skin: undefined,
      hScroll: true,
      vScroll: true,
      updateOnWindowResize: false,
      animationSpeed: 300,
      onCustomScroll: undefined,
      swipeSpeed: 1,
      wheelSpeed: 40,
      fixedThumbWidth: undefined,
      fixedThumbHeight: undefined,
      preventDefaultScroll: false
    }

    var Scrollable = function (element, options) {
      this.$element = $(element);
      this.options = options;
      this.addScrollableClass();
      this.addSkinClass();
      this.addScrollBarComponents();
      if (this.options.vScroll)
        this.vScrollbar = new Scrollbar(this, new VSizing());
      if (this.options.hScroll)
        this.hScrollbar = new Scrollbar(this, new HSizing());
      this.$element.data("scrollable", this);
      this.initKeyboardScrolling();
      this.bindEvents();
    }

    Scrollable.prototype = {

      addScrollableClass: function () {
        if (!this.$element.hasClass("scrollable")) {
          this.scrollableAdded = true;
          this.$element.addClass("scrollable");
        }
      },

      removeScrollableClass: function () {
        if (this.scrollableAdded)
          this.$element.removeClass("scrollable");
      },

      addSkinClass: function () {
        if (typeof(this.options.skin) == "string" && !this.$element.hasClass(this.options.skin)) {
          this.skinClassAdded = true;
          this.$element.addClass(this.options.skin);
        }
      },

      removeSkinClass: function () {
        if (this.skinClassAdded)
          this.$element.removeClass(this.options.skin);
      },

      addScrollBarComponents: function () {
        this.assignViewPort();
        if (this.$viewPort.length == 0) {
          this.$element.wrapInner("<div class=\"viewport\" />");
          this.assignViewPort();
          this.viewPortAdded = true;
        }
        this.assignOverview();
        if (this.$overview.length == 0) {
          this.$viewPort.wrapInner("<div class=\"overview\" />");
          this.assignOverview();
          this.overviewAdded = true;
        }
        this.addScrollBar("vertical", "prepend");
        this.addScrollBar("horizontal", "append");
      },

      removeScrollbarComponents: function () {
        this.removeScrollbar("vertical");
        this.removeScrollbar("horizontal");
        if (this.overviewAdded)
          this.$element.unwrap();
        if (this.viewPortAdded)
          this.$element.unwrap();
      },

      removeScrollbar: function (orientation) {
        if (this[orientation + "ScrollbarAdded"])
          this.$element.find(".scroll-bar." + orientation).remove();
      },

      assignViewPort: function () {
        this.$viewPort = this.$element.find(".viewport");
      },

      assignOverview: function () {
        this.$overview = this.$viewPort.find(".overview");
      },

      addScrollBar: function (orientation, fun) {
        if (this.$element.find(".scroll-bar." + orientation).length == 0) {
          this.$element[fun]("<div class='scroll-bar " + orientation + "'><div class='thumb'></div></div>")
          this[orientation + "ScrollbarAdded"] = true;
        }
      },

      resize: function (keepPosition) {
        if (this.vScrollbar)
          this.vScrollbar.resize(keepPosition);
        if (this.hScrollbar)
          this.hScrollbar.resize(keepPosition);
      },

      scrollTo: function (element) {
        if (this.vScrollbar)
          this.vScrollbar.scrollToElement(element);
        if (this.hScrollbar)
          this.hScrollbar.scrollToElement(element);
      },

      scrollToXY: function (x, y) {
        this.scrollToX(x);
        this.scrollToY(y);
      },

      scrollToX: function (x) {
        if (this.hScrollbar)
          this.hScrollbar.scrollOverviewTo(x, true);
      },

      scrollToY: function (y) {
        if (this.vScrollbar)
          this.vScrollbar.scrollOverviewTo(y, true);
      },

      scrollByX: function (x) {
        if (this.hScrollbar)
          this.scrollToX(this.hScrollbar.overviewPosition() + x);
      },

      scrollByY: function (y) {
        if (this.vScrollbar)
          this.scrollToY(this.vScrollbar.overviewPosition() + y);
      },

      remove: function () {
        this.removeScrollableClass();
        this.removeSkinClass();
        this.removeScrollbarComponents();
        this.$element.data("scrollable", null);
        this.removeKeyboardScrolling();
        if (this.vScrollbar)
          this.vScrollbar.remove();
        if (this.hScrollbar)
          this.hScrollbar.remove();
      },

      setAnimationSpeed: function (speed) {
        this.options.animationSpeed = speed;
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) && (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height()) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width())
      },

      initKeyboardScrolling: function () {
        var _this = this;

        this.elementKeydown = function (event) {
          if (document.activeElement === _this.$element[0]) {
            if (_this.vScrollbar)
              _this.vScrollbar.keyScroll(event);
            if (_this.hScrollbar)
              _this.hScrollbar.keyScroll(event);
          }
        }

        this.$element
          .attr('tabindex', '-1')
          .keydown(this.elementKeydown);
      },

      removeKeyboardScrolling: function () {
        this.$element
          .removeAttr('tabindex')
          .unbind("keydown", this.elementKeydown);
      },

      bindEvents: function () {
        if (this.options.onCustomScroll)
          this.$element.on("customScroll", this.options.onCustomScroll);
      }

    }

    var Scrollbar = function (scrollable, sizing) {
      this.scrollable = scrollable;
      this.sizing = sizing
      this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element);
      this.$thumb = this.$scrollBar.find(".thumb");
      this.setScrollPosition(0, 0);
      this.resize();
      this.initMouseMoveScrolling();
      this.initMouseWheelScrolling();
      this.initTouchScrolling();
      this.initMouseClickScrolling();
      this.initWindowResize();
    }

    Scrollbar.prototype = {

      resize: function (keepPosition) {
        this.overviewSize = this.sizing.size(this.scrollable.$overview);
        this.calculateViewPortSize();
        this.sizing.size(this.scrollable.$viewPort, this.viewPortSize);
        this.ratio = this.viewPortSize / this.overviewSize;
        this.sizing.size(this.$scrollBar, this.viewPortSize);
        this.thumbSize = this.calculateThumbSize();
        this.sizing.size(this.$thumb, this.thumbSize);
        this.maxThumbPosition = this.calculateMaxThumbPosition();
        this.maxOverviewPosition = this.calculateMaxOverviewPosition();
        this.enabled = (this.overviewSize > this.viewPortSize);
        if (this.scrollPercent === undefined)
          this.scrollPercent = 0.0;
        if (this.enabled)
          this.rescroll(keepPosition);
        else
          this.setScrollPosition(0, 0);
        this.$scrollBar.toggle(this.enabled);
      },

      calculateViewPortSize: function () {
        var elementSize = this.sizing.size(this.scrollable.$element);
        if (elementSize > 0 && !this.maxSizeUsed) {
          this.viewPortSize = elementSize;
          this.maxSizeUsed = false;
        }
        else {
          var maxSize = this.sizing.maxSize(this.scrollable.$element);
          this.viewPortSize = Math.min(maxSize, this.overviewSize);
          this.maxSizeUsed = true;
        }
      },

      calculateThumbSize: function () {
        var fixedSize = this.sizing.fixedThumbSize(this.scrollable.options)
        var size;
        if (fixedSize)
          size = fixedSize;
        else
          size = this.ratio * this.viewPortSize
        return Math.max(size, this.sizing.minSize(this.$thumb));
      },

      initMouseMoveScrolling: function () {
        var _this = this;
        this.$thumb.mousedown(function (event) {
          if (_this.enabled)
            _this.startMouseMoveScrolling(event);
        });
        this.documentMouseup = function (event) {
          _this.stopMouseMoveScrolling(event);
        };
        $(document).mouseup(this.documentMouseup);
        this.documentMousemove = function (event) {
          _this.mouseMoveScroll(event);
        };
        $(document).mousemove(this.documentMousemove);
        this.$thumb.click(function (event) {
          event.stopPropagation();
        });
      },

      removeMouseMoveScrolling: function () {
        this.$thumb.unbind();
        $(document).unbind("mouseup", this.documentMouseup);
        $(document).unbind("mousemove", this.documentMousemove);
      },

      initMouseWheelScrolling: function () {
        var _this = this;
        this.scrollable.$element.mousewheel(function (event, delta, deltaX, deltaY) {
          if (_this.enabled) {
            var scrolled = _this.mouseWheelScroll(deltaX, deltaY);
            _this.stopEventConditionally(event, scrolled);
          }
        });
      },

      removeMouseWheelScrolling: function () {
        this.scrollable.$element.unbind("mousewheel");
      },

      initTouchScrolling: function () {
        if (document.addEventListener) {
          var _this = this;
          this.elementTouchstart = function (event) {
            if (_this.enabled)
              _this.startTouchScrolling(event);
          }
          this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart);
          this.documentTouchmove = function (event) {
            _this.touchScroll(event);
          }
          document.addEventListener("touchmove", this.documentTouchmove);
          this.elementTouchend = function (event) {
            _this.stopTouchScrolling(event);
          }
          this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend);
        }
      },

      removeTouchScrolling: function () {
        if (document.addEventListener) {
          this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart);
          document.removeEventListener("touchmove", this.documentTouchmove);
          this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend);
        }
      },

      initMouseClickScrolling: function () {
        var _this = this;
        this.scrollBarClick = function (event) {
          _this.mouseClickScroll(event);
        };
        this.$scrollBar.click(this.scrollBarClick);
      },

      removeMouseClickScrolling: function () {
        this.$scrollBar.unbind("click", this.scrollBarClick);
      },

      initWindowResize: function () {
        if (this.scrollable.options.updateOnWindowResize) {
          var _this = this;
          this.windowResize = function () {
            _this.resize();
          };
          $(window).resize(this.windowResize);
        }
      },

      removeWindowResize: function () {
        $(window).unbind("resize", this.windowResize);
      },

      isKeyScrolling: function (key) {
        return this.keyScrollDelta(key) != null;
      },

      keyScrollDelta: function (key) {
        for (var scrollingKey in this.sizing.scrollingKeys)
          if (scrollingKey == key)
            return this.sizing.scrollingKeys[key](this.viewPortSize);
        return null;
      },

      startMouseMoveScrolling: function (event) {
        this.mouseMoveScrolling = true;
        $("body").addClass("not-selectable");
        this.setUnselectable($("body"), "on");
        this.setScrollEvent(event);
        event.preventDefault();
      },

      stopMouseMoveScrolling: function (event) {
        this.mouseMoveScrolling = false;
        $("body").removeClass("not-selectable");
        this.setUnselectable($("body"), null);
      },

      setUnselectable: function (element, value) {
        if (element.attr("unselectable") != value) {
          element.attr("unselectable", value);
          element.find(':not(input)').attr('unselectable', value);
        }
      },

      mouseMoveScroll: function (event) {
        if (this.mouseMoveScrolling) {
          var delta = this.sizing.mouseDelta(this.scrollEvent, event);
          this.scrollThumbBy(delta);
          this.setScrollEvent(event);
        }
      },

      startTouchScrolling: function (event) {
        if (event.touches && event.touches.length == 1) {
          this.setScrollEvent(event.touches[0]);
          this.touchScrolling = true;
          event.stopPropagation();
        }
      },

      touchScroll: function (event) {
        if (this.touchScrolling && event.touches && event.touches.length == 1) {
          var delta = -this.sizing.mouseDelta(this.scrollEvent, event.touches[0]) * this.scrollable.options.swipeSpeed;
          var scrolled = this.scrollOverviewBy(delta);
          if (scrolled)
            this.setScrollEvent(event.touches[0]);
          this.stopEventConditionally(event, scrolled);
        }
      },

      stopTouchScrolling: function (event) {
        this.touchScrolling = false;
        event.stopPropagation();
      },

      mouseWheelScroll: function (deltaX, deltaY) {
        var delta = -this.sizing.wheelDelta(deltaX, deltaY) * this.scrollable.options.wheelSpeed;
        if (delta != 0)
          return this.scrollOverviewBy(delta);
      },

      mouseClickScroll: function (event) {
        var delta = this.viewPortSize - 20;
        if (event["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()])
        // mouse click over thumb
          delta = -delta;
        this.scrollOverviewBy(delta);
      },

      keyScroll: function (event) {
        var keyDown = event.which;
        if (this.enabled && this.isKeyScrolling(keyDown)) {
          var scrolled = this.scrollOverviewBy(this.keyScrollDelta(keyDown));
          this.stopEventConditionally(event, scrolled);
        }
      },

      scrollThumbBy: function (delta) {
        var thumbPosition = this.thumbPosition();
        thumbPosition += delta;
        thumbPosition = this.positionOrMax(thumbPosition, this.maxThumbPosition);
        var oldScrollPercent = this.scrollPercent;
        this.scrollPercent = thumbPosition / this.maxThumbPosition;
        if (oldScrollPercent != this.scrollPercent) {
          var overviewPosition = (thumbPosition * this.maxOverviewPosition) / this.maxThumbPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
          this.triggerCustomScroll(oldScrollPercent);
          return true
        }
        else
          return false;
      },

      thumbPosition: function () {
        return this.$thumb.position()[this.sizing.offsetComponent()];
      },

      scrollOverviewBy: function (delta) {
        var overviewPosition = this.overviewPosition() + delta;
        return this.scrollOverviewTo(overviewPosition, false);
      },

      overviewPosition: function () {
        return -this.scrollable.$overview.position()[this.sizing.offsetComponent()];
      },

      scrollOverviewTo: function (overviewPosition, animate) {
        overviewPosition = this.positionOrMax(overviewPosition, this.maxOverviewPosition);
        var oldScrollPercent = this.scrollPercent;
        this.scrollPercent = overviewPosition / this.maxOverviewPosition;
        if (oldScrollPercent != this.scrollPercent) {
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          if (animate)
            this.setScrollPositionWithAnimation(overviewPosition, thumbPosition);
          else
            this.setScrollPosition(overviewPosition, thumbPosition);
          this.triggerCustomScroll(oldScrollPercent);
          return true;
        }
        else
          return false;
      },

      positionOrMax: function (p, max) {
        if (p < 0)
          return 0;
        else if (p > max)
          return max;
        else
          return p;
      },

      triggerCustomScroll: function (oldScrollPercent) {
        this.scrollable.$element.trigger("customScroll", {
            scrollAxis: this.sizing.scrollAxis(),
            direction: this.sizing.scrollDirection(oldScrollPercent, this.scrollPercent),
            scrollPercent: this.scrollPercent * 100
          }
        );
      },

      rescroll: function (keepPosition) {
        if (keepPosition) {
          var overviewPosition = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
          this.scrollPercent = overviewPosition / this.maxOverviewPosition;
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
        }
        else {
          var thumbPosition = this.scrollPercent * this.maxThumbPosition;
          var overviewPosition = this.scrollPercent * this.maxOverviewPosition;
          this.setScrollPosition(overviewPosition, thumbPosition);
        }
      },

      setScrollPosition: function (overviewPosition, thumbPosition) {
        this.$thumb.css(this.sizing.offsetComponent(), thumbPosition + "px");
        this.scrollable.$overview.css(this.sizing.offsetComponent(), -overviewPosition + "px");
      },

      setScrollPositionWithAnimation: function (overviewPosition, thumbPosition) {
        var thumbAnimationOpts = {};
        var overviewAnimationOpts = {};
        thumbAnimationOpts[this.sizing.offsetComponent()] = thumbPosition + "px";
        this.$thumb.animate(thumbAnimationOpts, this.scrollable.options.animationSpeed);
        overviewAnimationOpts[this.sizing.offsetComponent()] = -overviewPosition + "px";
        this.scrollable.$overview.animate(overviewAnimationOpts, this.scrollable.options.animationSpeed);
      },

      calculateMaxThumbPosition: function () {
        return Math.max(0, this.sizing.size(this.$scrollBar) - this.thumbSize);
      },

      calculateMaxOverviewPosition: function () {
        return Math.max(0, this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort));
      },

      setScrollEvent: function (event) {
        var attr = "page" + this.sizing.scrollAxis();
        if (!this.scrollEvent || this.scrollEvent[attr] != event[attr])
          this.scrollEvent = {pageX: event.pageX, pageY: event.pageY};
      },

      scrollToElement: function (element) {
        var $element = $(element);
        if (this.sizing.isInside($element, this.scrollable.$overview) && !this.sizing.isInside($element, this.scrollable.$viewPort)) {
          var elementOffset = $element.offset();
          var overviewOffset = this.scrollable.$overview.offset();
          var viewPortOffset = this.scrollable.$viewPort.offset();
          this.scrollOverviewTo(elementOffset[this.sizing.offsetComponent()] - overviewOffset[this.sizing.offsetComponent()], true);
        }
      },

      remove: function () {
        this.removeMouseMoveScrolling();
        this.removeMouseWheelScrolling();
        this.removeTouchScrolling();
        this.removeMouseClickScrolling();
        this.removeWindowResize();
      },

      stopEventConditionally: function (event, condition) {
        if (condition || this.scrollable.options.preventDefaultScroll) {
          event.preventDefault();
          event.stopPropagation();
        }
      }

    }

    var HSizing = function () {
    }

    HSizing.prototype = {
      size: function ($el, arg) {
        if (arg)
          return $el.width(arg);
        else
          return $el.width();
      },

      minSize: function ($el) {
        return parseInt($el.css("min-width")) || 0;
      },

      maxSize: function ($el) {
        return parseInt($el.css("max-width")) || 0;
      },

      fixedThumbSize: function (options) {
        return options.fixedThumbWidth;
      },

      scrollBar: function ($el) {
        return $el.find(".scroll-bar.horizontal");
      },

      mouseDelta: function (event1, event2) {
        return event2.pageX - event1.pageX;
      },

      offsetComponent: function () {
        return "left";
      },

      wheelDelta: function (deltaX, deltaY) {
        return deltaX;
      },

      scrollAxis: function () {
        return "X";
      },

      scrollDirection: function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "right" : "left";
      },

      scrollingKeys: {
        37: function (viewPortSize) {
          return -10; //arrow left
        },
        39: function (viewPortSize) {
          return 10; //arrow right
        }
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.left >= wrappingElementOffset.left) &&
          (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width());
      }

    }

    var VSizing = function () {
    }

    VSizing.prototype = {

      size: function ($el, arg) {
        if (arg)
          return $el.height(arg);
        else
          return $el.height();
      },

      minSize: function ($el) {
        return parseInt($el.css("min-height")) || 0;
      },

      maxSize: function ($el) {
        return parseInt($el.css("max-height")) || 0;
      },

      fixedThumbSize: function (options) {
        return options.fixedThumbHeight;
      },

      scrollBar: function ($el) {
        return $el.find(".scroll-bar.vertical");
      },

      mouseDelta: function (event1, event2) {
        return event2.pageY - event1.pageY;
      },

      offsetComponent: function () {
        return "top";
      },

      wheelDelta: function (deltaX, deltaY) {
        return deltaY;
      },

      scrollAxis: function () {
        return "Y";
      },

      scrollDirection: function (oldPercent, newPercent) {
        return oldPercent < newPercent ? "down" : "up";
      },

      scrollingKeys: {
        38: function (viewPortSize) {
          return -10; //arrow up
        },
        40: function (viewPortSize) {
          return 10; //arrow down
        },
        33: function (viewPortSize) {
          return -(viewPortSize - 20); //page up
        },
        34: function (viewPortSize) {
          return viewPortSize - 20; //page down
        }
      },

      isInside: function (element, wrappingElement) {
        var $element = $(element);
        var $wrappingElement = $(wrappingElement);
        var elementOffset = $element.offset();
        var wrappingElementOffset = $wrappingElement.offset();
        return (elementOffset.top >= wrappingElementOffset.top) &&
          (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height());
      }

    }

    return this.each(function () {
      if (options == undefined)
        options = defaultOptions;
      if (typeof(options) == "string") {
        var scrollable = $(this).data("scrollable");
        if (scrollable)
          scrollable[options](args);
      }
      else if (typeof(options) == "object") {
        options = $.extend(defaultOptions, options);
        new Scrollable($(this), options);
      }
      else
        throw "Invalid type of options";
    });

  }
  ;

})
  (jQuery);

(function ($) {

  var types = ['DOMMouseScroll', 'mousewheel'];

  if ($.event.fixHooks) {
    for (var i = types.length; i;) {
      $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
  }

  $.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) {
        for (var i = types.length; i;) {
          this.addEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      }
    },

    teardown: function () {
      if (this.removeEventListener) {
        for (var i = types.length; i;) {
          this.removeEventListener(types[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      }
    }
  };

  $.fn.extend({
    mousewheel: function (fn) {
      return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function (fn) {
      return this.unbind("mousewheel", fn);
    }
  });


  function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if (orgEvent.wheelDelta) {
      delta = orgEvent.wheelDelta / 120;
    }
    if (orgEvent.detail) {
      delta = -orgEvent.detail / 3;
    }

    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;

    // Gecko
    if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaY = 0;
      deltaX = delta;
    }

    // Webkit
    if (orgEvent.wheelDeltaY !== undefined) {
      deltaY = orgEvent.wheelDeltaY / 120;
    }
    if (orgEvent.wheelDeltaX !== undefined) {
      deltaX = orgEvent.wheelDeltaX / 120;
    }

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

})(jQuery);
;
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function($) {
	var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right,

		selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [],

		ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i,

		loadingTimer, loadingFrame = 1,

		titleHeight = 0, titleStr = '', start_pos, final_pos, busy = false, fx = $.extend($('<div/>')[0], { prop: 0 }),

		isIE6 = $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest,

		/*
		 * Private methods 
		 */

		_abort = function() {
			loading.hide();

			imgPreloader.onerror = imgPreloader.onload = null;

			if (ajaxLoader) {
				ajaxLoader.abort();
			}

			tmp.empty();
		},

		_error = function() {
			if (false === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts)) {
				loading.hide();
				busy = false;
				return;
			}

			selectedOpts.titleShow = false;

			selectedOpts.width = 'auto';
			selectedOpts.height = 'auto';

			tmp.html( '<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>' );

			_process_inline();
		},

		_start = function() {
			var obj = selectedArray[ selectedIndex ],
				href, 
				type, 
				title,
				str,
				emb,
				ret;

			_abort();

			selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data('fancybox') == 'undefined' ? selectedOpts : $(obj).data('fancybox')));

			ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts);

			if (ret === false) {
				busy = false;
				return;
			} else if (typeof ret == 'object') {
				selectedOpts = $.extend(selectedOpts, ret);
			}

			title = selectedOpts.title || (obj.nodeName ? $(obj).attr('title') : obj.title) || '';

			if (obj.nodeName && !selectedOpts.orig) {
				selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
			}

			if (title === '' && selectedOpts.orig && selectedOpts.titleFromAlt) {
				title = selectedOpts.orig.attr('alt');
			}

			href = selectedOpts.href || (obj.nodeName ? $(obj).attr('href') : obj.href) || null;

			if ((/^(?:javascript)/i).test(href) || href == '#') {
				href = null;
			}

			if (selectedOpts.type) {
				type = selectedOpts.type;

				if (!href) {
					href = selectedOpts.content;
				}

			} else if (selectedOpts.content) {
				type = 'html';

			} else if (href) {
				if (href.match(imgRegExp)) {
					type = 'image';

				} else if (href.match(swfRegExp)) {
					type = 'swf';

				} else if ($(obj).hasClass("iframe")) {
					type = 'iframe';

				} else if (href.indexOf("#") === 0) {
					type = 'inline';

				} else {
					type = 'ajax';
				}
			}

			if (!type) {
				_error();
				return;
			}

			if (type == 'inline') {
				obj	= href.substr(href.indexOf("#"));
				type = $(obj).length > 0 ? 'inline' : 'ajax';
			}

			selectedOpts.type = type;
			selectedOpts.href = href;
			selectedOpts.title = title;

			if (selectedOpts.autoDimensions) {
				if (selectedOpts.type == 'html' || selectedOpts.type == 'inline' || selectedOpts.type == 'ajax') {
					selectedOpts.width = 'auto';
					selectedOpts.height = 'auto';
				} else {
					selectedOpts.autoDimensions = false;	
				}
			}

			if (selectedOpts.modal) {
				selectedOpts.overlayShow = true;
				selectedOpts.hideOnOverlayClick = false;
				selectedOpts.hideOnContentClick = false;
				selectedOpts.enableEscapeButton = false;
				selectedOpts.showCloseButton = false;
			}

			selectedOpts.padding = parseInt(selectedOpts.padding, 10);
			selectedOpts.margin = parseInt(selectedOpts.margin, 10);

			tmp.css('padding', (selectedOpts.padding + selectedOpts.margin));

			$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
				$(this).replaceWith(content.children());				
			});

			switch (type) {
				case 'html' :
					tmp.html( selectedOpts.content );
					_process_inline();
				break;

				case 'inline' :
					if ( $(obj).parent().is('#fancybox-content') === true) {
						busy = false;
						return;
					}

					$('<div class="fancybox-inline-tmp" />')
						.hide()
						.insertBefore( $(obj) )
						.bind('fancybox-cleanup', function() {
							$(this).replaceWith(content.children());
						}).bind('fancybox-cancel', function() {
							$(this).replaceWith(tmp.children());
						});

					$(obj).appendTo(tmp);

					_process_inline();
				break;

				case 'image':
					busy = false;

					$.fancybox.showActivity();

					imgPreloader = new Image();

					imgPreloader.onerror = function() {
						_error();
					};

					imgPreloader.onload = function() {
						busy = true;

						imgPreloader.onerror = imgPreloader.onload = null;

						_process_image();
					};

					imgPreloader.src = href;
				break;

				case 'swf':
					selectedOpts.scrolling = 'no';

					str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
					emb = '';

					$.each(selectedOpts.swf, function(name, val) {
						str += '<param name="' + name + '" value="' + val + '"></param>';
						emb += ' ' + name + '="' + val + '"';
					});

					str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';

					tmp.html(str);

					_process_inline();
				break;

				case 'ajax':
					busy = false;

					$.fancybox.showActivity();

					selectedOpts.ajax.win = selectedOpts.ajax.success;

					ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {
						url	: href,
						data : selectedOpts.ajax.data || {},
						error : function(XMLHttpRequest, textStatus, errorThrown) {
							if ( XMLHttpRequest.status > 0 ) {
								_error();
							}
						},
						success : function(data, textStatus, XMLHttpRequest) {
							var o = typeof XMLHttpRequest == 'object' ? XMLHttpRequest : ajaxLoader;
							if (o.status == 200) {
								if ( typeof selectedOpts.ajax.win == 'function' ) {
									ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest);

									if (ret === false) {
										loading.hide();
										return;
									} else if (typeof ret == 'string' || typeof ret == 'object') {
										data = ret;
									}
								}

								tmp.html( data );
								_process_inline();
							}
						}
					}));

				break;

				case 'iframe':
					_show();
				break;
			}
		},

		_process_inline = function() {
			var
				w = selectedOpts.width,
				h = selectedOpts.height;

			if (w.toString().indexOf('%') > -1) {
				w = parseInt( ($(window).width() - (selectedOpts.margin * 2)) * parseFloat(w) / 100, 10) + 'px';

			} else {
				w = w == 'auto' ? 'auto' : w + 'px';	
			}

			if (h.toString().indexOf('%') > -1) {
				h = parseInt( ($(window).height() - (selectedOpts.margin * 2)) * parseFloat(h) / 100, 10) + 'px';

			} else {
				h = h == 'auto' ? 'auto' : h + 'px';	
			}

			tmp.wrapInner('<div style="width:' + w + ';height:' + h + ';overflow: ' + (selectedOpts.scrolling == 'auto' ? 'auto' : (selectedOpts.scrolling == 'yes' ? 'scroll' : 'hidden')) + ';position:relative;"></div>');

			selectedOpts.width = tmp.width();
			selectedOpts.height = tmp.height();

			_show();
		},

		_process_image = function() {
			selectedOpts.width = imgPreloader.width;
			selectedOpts.height = imgPreloader.height;

			$("<img />").attr({
				'id' : 'fancybox-img',
				'src' : imgPreloader.src,
				'alt' : selectedOpts.title
			}).appendTo( tmp );

			_show();
		},

		_show = function() {
			var pos, equal;

			loading.hide();

			if (wrap.is(":visible") && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
				$.event.trigger('fancybox-cancel');

				busy = false;
				return;
			}

			busy = true;

			$(content.add( overlay )).unbind();

			$(window).unbind("resize.fb scroll.fb");
			$(document).unbind('keydown.fb');

			if (wrap.is(":visible") && currentOpts.titlePosition !== 'outside') {
				wrap.css('height', wrap.height());
			}

			currentArray = selectedArray;
			currentIndex = selectedIndex;
			currentOpts = selectedOpts;

			if (currentOpts.overlayShow) {
				overlay.css({
					'background-color' : currentOpts.overlayColor,
					'opacity' : currentOpts.overlayOpacity,
					'cursor' : currentOpts.hideOnOverlayClick ? 'pointer' : 'auto',
					'height' : $(document).height()
				});

				if (!overlay.is(':visible')) {
					if (isIE6) {
						$('select:not(#fancybox-tmp select)').filter(function() {
							return this.style.visibility !== 'hidden';
						}).css({'visibility' : 'hidden'}).one('fancybox-cleanup', function() {
							this.style.visibility = 'inherit';
						});
					}

					overlay.show();
				}
			} else {
				overlay.hide();
			}

			final_pos = _get_zoom_to();

			_process_title();

			if (wrap.is(":visible")) {
				$( close.add( nav_left ).add( nav_right ) ).hide();

				pos = wrap.position(),

				start_pos = {
					top	 : pos.top,
					left : pos.left,
					width : wrap.width(),
					height : wrap.height()
				};

				equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);

				content.fadeTo(currentOpts.changeFade, 0.3, function() {
					var finish_resizing = function() {
						content.html( tmp.contents() ).fadeTo(currentOpts.changeFade, 1, _finish);
					};

					$.event.trigger('fancybox-change');

					content
						.empty()
						.removeAttr('filter')
						.css({
							'border-width' : currentOpts.padding,
							'width'	: final_pos.width - currentOpts.padding * 2,
							'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
						});

					if (equal) {
						finish_resizing();

					} else {
						fx.prop = 0;

						$(fx).animate({prop: 1}, {
							 duration : currentOpts.changeSpeed,
							 easing : currentOpts.easingChange,
							 step : _draw,
							 complete : finish_resizing
						});
					}
				});

				return;
			}

			wrap.removeAttr("style");

			content.css('border-width', currentOpts.padding);

			if (currentOpts.transitionIn == 'elastic') {
				start_pos = _get_zoom_from();

				content.html( tmp.contents() );

				wrap.show();

				if (currentOpts.opacity) {
					final_pos.opacity = 0;
				}

				fx.prop = 0;

				$(fx).animate({prop: 1}, {
					 duration : currentOpts.speedIn,
					 easing : currentOpts.easingIn,
					 step : _draw,
					 complete : _finish
				});

				return;
			}

			if (currentOpts.titlePosition == 'inside' && titleHeight > 0) {	
				title.show();	
			}

			content
				.css({
					'width' : final_pos.width - currentOpts.padding * 2,
					'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
				})
				.html( tmp.contents() );

			wrap
				.css(final_pos)
				.fadeIn( currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish );
		},

		_format_title = function(title) {
			if (title && title.length) {
				if (currentOpts.titlePosition == 'float') {
					return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>';
				}

				return '<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + '</div>';
			}

			return false;
		},

		_process_title = function() {
			titleStr = currentOpts.title || '';
			titleHeight = 0;

			title
				.empty()
				.removeAttr('style')
				.removeClass();

			if (currentOpts.titleShow === false) {
				title.hide();
				return;
			}

			titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr);

			if (!titleStr || titleStr === '') {
				title.hide();
				return;
			}

			title
				.addClass('fancybox-title-' + currentOpts.titlePosition)
				.html( titleStr )
				.appendTo( 'body' )
				.show();

			switch (currentOpts.titlePosition) {
				case 'inside':
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'marginLeft' : currentOpts.padding,
							'marginRight' : currentOpts.padding
						});

					titleHeight = title.outerHeight(true);

					title.appendTo( outer );

					final_pos.height += titleHeight;
				break;

				case 'over':
					title
						.css({
							'marginLeft' : currentOpts.padding,
							'width'	: final_pos.width - (currentOpts.padding * 2),
							'bottom' : currentOpts.padding
						})
						.appendTo( outer );
				break;

				case 'float':
					title
						.css('left', parseInt((title.width() - final_pos.width - 40)/ 2, 10) * -1)
						.appendTo( wrap );
				break;

				default:
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'paddingLeft' : currentOpts.padding,
							'paddingRight' : currentOpts.padding
						})
						.appendTo( wrap );
				break;
			}

			title.hide();
		},

		_set_navigation = function() {
			if (currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) {
				$(document).bind('keydown.fb', function(e) {
					if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
						e.preventDefault();
						$.fancybox.close();

					} else if ((e.keyCode == 37 || e.keyCode == 39) && currentOpts.enableKeyboardNav && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {
						e.preventDefault();
						$.fancybox[ e.keyCode == 37 ? 'prev' : 'next']();
					}
				});
			}

			if (!currentOpts.showNavArrows) { 
				nav_left.hide();
				nav_right.hide();
				return;
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex !== 0) {
				nav_left.show();
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length -1)) {
				nav_right.show();
			}
		},

		_finish = function () {
			if (!$.support.opacity) {
			 	//content.get(0).style.removeAttribute('filter');
				// wrap.get(0).style.removeAttribute('filter');
			}

			if (selectedOpts.autoDimensions) {
				content.css('height', 'auto');
			}

			wrap.css('height', 'auto');

			if (titleStr && titleStr.length) {
				title.show();
			}

			if (currentOpts.showCloseButton) {
				close.show();
			}

			_set_navigation();
	
			if (currentOpts.hideOnContentClick)	{
				content.bind('click', $.fancybox.close);
			}

			if (currentOpts.hideOnOverlayClick)	{
				overlay.bind('click', $.fancybox.close);
			}

			$(window).bind("resize.fb", $.fancybox.resize);

			if (currentOpts.centerOnScroll) {
				$(window).bind("scroll.fb", $.fancybox.center);
			}

			if (currentOpts.type == 'iframe') {
				$('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + ' scrolling="' + selectedOpts.scrolling + '" src="' + currentOpts.href + '"></iframe>').appendTo(content);
			}

			wrap.show();

			busy = false;

			$.fancybox.center();

			currentOpts.onComplete(currentArray, currentIndex, currentOpts);

			_preload_images();
		},

		_preload_images = function() {
			var href, 
				objNext;

			if ((currentArray.length -1) > currentIndex) {
				href = currentArray[ currentIndex + 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}

			if (currentIndex > 0) {
				href = currentArray[ currentIndex - 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}
		},

		_draw = function(pos) {
			var dim = {
				width : parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10),
				height : parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10),

				top : parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10),
				left : parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)
			};

			if (typeof final_pos.opacity !== 'undefined') {
				dim.opacity = pos < 0.5 ? 0.5 : pos;
			}

			wrap.css(dim);

			content.css({
				'width' : dim.width - currentOpts.padding * 2,
				'height' : dim.height - (titleHeight * pos) - currentOpts.padding * 2
			});
		},

		_get_viewport = function() {
			return [
				$(window).width() - (currentOpts.margin * 2),
				$(window).height() - (currentOpts.margin * 2),
				$(document).scrollLeft() + currentOpts.margin,
				$(document).scrollTop() + currentOpts.margin
			];
		},

		_get_zoom_to = function () {
			var view = _get_viewport(),
				to = {},
				resize = currentOpts.autoScale,
				double_padding = currentOpts.padding * 2,
				ratio;

			if (currentOpts.width.toString().indexOf('%') > -1) {
				to.width = parseInt((view[0] * parseFloat(currentOpts.width)) / 100, 10);
			} else {
				to.width = currentOpts.width + double_padding;
			}

			if (currentOpts.height.toString().indexOf('%') > -1) {
				to.height = parseInt((view[1] * parseFloat(currentOpts.height)) / 100, 10);
			} else {
				to.height = currentOpts.height + double_padding;
			}

			if (resize && (to.width > view[0] || to.height > view[1])) {
				if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
					ratio = (currentOpts.width ) / (currentOpts.height );

					if ((to.width ) > view[0]) {
						to.width = view[0];
						to.height = parseInt(((to.width - double_padding) / ratio) + double_padding, 10);
					}

					if ((to.height) > view[1]) {
						to.height = view[1];
						to.width = parseInt(((to.height - double_padding) * ratio) + double_padding, 10);
					}

				} else {
					to.width = Math.min(to.width, view[0]);
					to.height = Math.min(to.height, view[1]);
				}
			}

			to.top = parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - to.height - 40) * 0.5)), 10);
			to.left = parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - to.width - 40) * 0.5)), 10);

			return to;
		},

		_get_obj_pos = function(obj) {
			var pos = obj.offset();

			pos.top += parseInt( obj.css('paddingTop'), 10 ) || 0;
			pos.left += parseInt( obj.css('paddingLeft'), 10 ) || 0;

			pos.top += parseInt( obj.css('border-top-width'), 10 ) || 0;
			pos.left += parseInt( obj.css('border-left-width'), 10 ) || 0;

			pos.width = obj.width();
			pos.height = obj.height();

			return pos;
		},

		_get_zoom_from = function() {
			var orig = selectedOpts.orig ? $(selectedOpts.orig) : false,
				from = {},
				pos,
				view;

			if (orig && orig.length) {
				pos = _get_obj_pos(orig);

				from = {
					width : pos.width + (currentOpts.padding * 2),
					height : pos.height + (currentOpts.padding * 2),
					top	: pos.top - currentOpts.padding - 20,
					left : pos.left - currentOpts.padding - 20
				};

			} else {
				view = _get_viewport();

				from = {
					width : currentOpts.padding * 2,
					height : currentOpts.padding * 2,
					top	: parseInt(view[3] + view[1] * 0.5, 10),
					left : parseInt(view[2] + view[0] * 0.5, 10)
				};
			}

			return from;
		},

		_animate_loading = function() {
			if (!loading.is(':visible')){
				clearInterval(loadingTimer);
				return;
			}

			$('div', loading).css('top', (loadingFrame * -40) + 'px');

			loadingFrame = (loadingFrame + 1) % 12;
		};

	/*
	 * Public methods 
	 */

	$.fn.fancybox = function(options) {
		if (!$(this).length) {
			return this;
		}

		$(this)
			.data('fancybox', $.extend({}, options, ($.metadata ? $(this).metadata() : {})))
			.unbind('click.fb')
			.bind('click.fb', function(e) {
				e.preventDefault();

				if (busy) {
					return;
				}

				busy = true;

				$(this).blur();

				selectedArray = [];
				selectedIndex = 0;

				var rel = $(this).attr('rel') || '';

				if (!rel || rel == '' || rel === 'nofollow') {
					selectedArray.push(this);

				} else {
					selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "]");
					selectedIndex = selectedArray.index( this );
				}

				_start();

				return;
			});

		return this;
	};

	$.fancybox = function(obj) {
		var opts;

		if (busy) {
			return;
		}

		busy = true;
		opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};

		selectedArray = [];
		selectedIndex = parseInt(opts.index, 10) || 0;

		if ($.isArray(obj)) {
			for (var i = 0, j = obj.length; i < j; i++) {
				if (typeof obj[i] == 'object') {
					$(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
				} else {
					obj[i] = $({}).data('fancybox', $.extend({content : obj[i]}, opts));
				}
			}

			selectedArray = jQuery.merge(selectedArray, obj);

		} else {
			if (typeof obj == 'object') {
				$(obj).data('fancybox', $.extend({}, opts, obj));
			} else {
				obj = $({}).data('fancybox', $.extend({content : obj}, opts));
			}

			selectedArray.push(obj);
		}

		if (selectedIndex > selectedArray.length || selectedIndex < 0) {
			selectedIndex = 0;
		}

		_start();
	};

	$.fancybox.showActivity = function() {
		clearInterval(loadingTimer);

		loading.show();
		loadingTimer = setInterval(_animate_loading, 66);
	};

	$.fancybox.hideActivity = function() {
		loading.hide();
	};

	$.fancybox.next = function() {
		return $.fancybox.pos( currentIndex + 1);
	};

	$.fancybox.prev = function() {
		return $.fancybox.pos( currentIndex - 1);
	};

	$.fancybox.pos = function(pos) {
		if (busy) {
			return;
		}

		pos = parseInt(pos);

		selectedArray = currentArray;

		if (pos > -1 && pos < currentArray.length) {
			selectedIndex = pos;
			_start();

		} else if (currentOpts.cyclic && currentArray.length > 1) {
			selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1;
			_start();
		}

		return;
	};

	$.fancybox.cancel = function() {
		if (busy) {
			return;
		}

		busy = true;

		$.event.trigger('fancybox-cancel');

		_abort();

		selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);

		busy = false;
	};

	// Note: within an iframe use - parent.$.fancybox.close();
	$.fancybox.close = function() {
		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		if (currentOpts && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
			busy = false;
			return;
		}

		_abort();

		$(close.add( nav_left ).add( nav_right )).hide();

		$(content.add( overlay )).unbind();

		$(window).unbind("resize.fb scroll.fb");
		$(document).unbind('keydown.fb');

		content.find('iframe').attr('src', isIE6 && /^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank');

		if (currentOpts.titlePosition !== 'inside') {
			title.empty();
		}

		wrap.stop();

		function _cleanup() {
			overlay.fadeOut('fast');

			title.empty().hide();
			wrap.hide();

			$.event.trigger('fancybox-cleanup');

			content.empty();

			currentOpts.onClosed(currentArray, currentIndex, currentOpts);

			currentArray = selectedOpts	= [];
			currentIndex = selectedIndex = 0;
			currentOpts = selectedOpts	= {};

			busy = false;
		}

		if (currentOpts.transitionOut == 'elastic') {
			start_pos = _get_zoom_from();

			var pos = wrap.position();

			final_pos = {
				top	 : pos.top ,
				left : pos.left,
				width :	wrap.width(),
				height : wrap.height()
			};

			if (currentOpts.opacity) {
				final_pos.opacity = 1;
			}

			title.empty().hide();

			fx.prop = 1;

			$(fx).animate({ prop: 0 }, {
				 duration : currentOpts.speedOut,
				 easing : currentOpts.easingOut,
				 step : _draw,
				 complete : _cleanup
			});

		} else {
			wrap.fadeOut( currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
		}
	};

	$.fancybox.resize = function() {
		if (overlay.is(':visible')) {
			overlay.css('height', $(document).height());
		}

		$.fancybox.center(true);
	};

	$.fancybox.center = function() {
		var view, align;

		if (busy) {
			return;	
		}

		align = arguments[0] === true ? 1 : 0;
		view = _get_viewport();

		if (!align && (wrap.width() > view[0] || wrap.height() > view[1])) {
			return;	
		}

		wrap
			.stop()
			.animate({
				'top' : parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - content.height() - 40) * 0.5) - currentOpts.padding)),
				'left' : parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - content.width() - 40) * 0.5) - currentOpts.padding))
			}, typeof arguments[0] == 'number' ? arguments[0] : 200);
	};

	$.fancybox.init = function() {
		if ($("#fancybox-wrap").length) {
			return;
		}

		$('body').append(
			tmp	= $('<div id="fancybox-tmp"></div>'),
			loading	= $('<div id="fancybox-loading"><div></div></div>'),
			overlay	= $('<div id="fancybox-overlay"></div>'),
			wrap = $('<div id="fancybox-wrap"></div>')
		);

		outer = $('<div id="fancybox-outer"></div>')
			.append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>')
			.appendTo( wrap );

		outer.append(
			content = $('<div id="fancybox-content"></div>'),
			close = $('<a id="fancybox-close"></a>'),
			title = $('<div id="fancybox-title"></div>'),

			nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
			nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
		);

		close.click($.fancybox.close);
		loading.click($.fancybox.cancel);

		nav_left.click(function(e) {
			e.preventDefault();
			$.fancybox.prev();
		});

		nav_right.click(function(e) {
			e.preventDefault();
			$.fancybox.next();
		});

		if ($.fn.mousewheel) {
			wrap.bind('mousewheel.fb', function(e, delta) {
				if (busy) {
					e.preventDefault();

				} else if ($(e.target).get(0).clientHeight == 0 || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) {
					e.preventDefault();
					$.fancybox[ delta > 0 ? 'prev' : 'next']();
				}
			});
		}

		if (!$.support.opacity) {
			wrap.addClass('fancybox-ie');
		}

		if (isIE6) {
			loading.addClass('fancybox-ie6');
			wrap.addClass('fancybox-ie6');

			$('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank' ) + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer);
		}
	};

	$.fn.fancybox.defaults = {
		padding : 10,
		margin : 40,
		opacity : false,
		modal : false,
		cyclic : false,
		scrolling : 'auto',	// 'auto', 'yes' or 'no'

		width : 560,
		height : 340,

		autoScale : true,
		autoDimensions : true,
		centerOnScroll : false,

		ajax : {},
		swf : { wmode: 'transparent' },

		hideOnOverlayClick : true,
		hideOnContentClick : false,

		overlayShow : true,
		overlayOpacity : 0.7,
		overlayColor : '#000',

		titleShow : true,
		titlePosition : 'float', // 'float', 'outside', 'inside' or 'over'
		titleFormat : null,
		titleFromAlt : false,

		transitionIn : 'fade', // 'elastic', 'fade' or 'none'
		transitionOut : 'fade', // 'elastic', 'fade' or 'none'

		speedIn : 300,
		speedOut : 300,

		changeSpeed : 300,
		changeFade : 'fast',

		easingIn : 'swing',
		easingOut : 'swing',

		showCloseButton	 : true,
		showNavArrows : true,
		enableEscapeButton : true,
		enableKeyboardNav : true,

		onStart : function(){},
		onCancel : function(){},
		onComplete : function(){},
		onCleanup : function(){},
		onClosed : function(){},
		onError : function(){}
	};

	$(document).ready(function() {
		$.fancybox.init();
	});

})(jQuery);;
jQuery(window).on("load",function(){
	var sw = jQuery('#styleswitcher'),
		swB = sw.children('.open_sw'),
		layout = jQuery('[class*="_layout"]'),
		sc = jQuery('#select_color'),
		hSelect = jQuery('[name="header_type"]'),
		fSelect = jQuery('[name="footer_type"]'),
		bgSelect = jQuery('select[name="bg_color"]'),
		color = jQuery('.bg_select_color'),
		image = jQuery('.bg_select_image'),
		bgImagebutton = jQuery('.bg_image_button'),
		reset = sw.find('button[type="reset"]');

	var t = setTimeout(function(){
		sw.addClass('closed');	
		clearTimeout(t);
		sw.trigger('open/close');
	},700);

	sw.on('open/close',function(){
		var $this = jQuery(this);
		swB.on('click',function(){
			$this.toggleClass('closed');
		});
	});

	sc.ColorPicker({
		color: '#232830',
		onShow: function (colpkr){
			jQuery(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			jQuery(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb){
			jQuery('body').css('background-image','none');
			jQuery('#select_color,body').css('backgroundColor', '#' + hex);
		}
	});

	sw.find('[data-layout]').on('click',function(){
		var self = jQuery(this),
		data = self.data('layout');
		self.addClass('active').siblings('[data-layout]').removeClass('active');
		if(!(self.hasClass('homepage'))){
			switch(data){
				case "wide" :
				 if(layout.hasClass('wide_layout')){
				 	break;
				 }else{
				 	layout.removeClass('boxed_layout').addClass('wide_layout');
				 	jQuery('#go_to_top').addClass('type_2');
				 }
			 	break;
			 	case "boxed" :
			 		if(layout.hasClass('boxed_layout')){
				 		break;
					}else{
						layout.removeClass('wide_layout').addClass('boxed_layout');
						jQuery('#go_to_top').removeClass('type_2');
					}
			 	break;
			}
		}else{
			switch(data){
				case "wide" :
				 	window.location.href = "index_layout_wide.html"
			 	break;
			 	case "boxed" :
			 		window.location.href = "index.html"
			 	break;
			}
		}
	});

	jQuery('.select_list').each(function(){

		var t = jQuery(this).prev('.select_title').text();
		jQuery(this).find('li').each(function(){
			var self = jQuery(this);
			if(self.text() == t){
				self.addClass('active');
			}
		});

	});

	hSelect.prev('.select_list').on('click','li:not(.active)',function(){
		var val = jQuery(this).text(),
			h = jQuery('[role="banner"]');

		jQuery(this).addClass('active').siblings().removeClass('active');

		var pathname = window.location.pathname;
        console.log(pathname);

		switch(val){
			case "Header 1" :
				document.location = pathname+'?header=header_1'
				break;
			case "Header 2" :
				document.location = pathname+'?header=header_2'
				break;
			case "Header 3" :
				document.location = pathname+'?header=header_3'
				break;
			case "Header 4" :
				document.location = pathname+'?header=header_4'
				break;
            case "Header 5" :
                document.location = pathname+'?header=header_5'
                break;
			default:
				break;
		}

		// 

		/*
		h.slideUp(function(){
			jQuery(this).html("");
			switch(val){
				case "Header 1" : 
					h.load('inc/header_1.html',function(){
						jQuery(this).removeClass('type_4 type_5').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
				case "Header 2" : 
					h.load('inc/header_2.html',function(){
						jQuery(this).removeClass('type_4').addClass('type_5').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
				case "Header 3" : 
					h.load('inc/header_3.html',function(){
						jQuery(this).removeClass('type_4 type_5').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
				case "Header 4" : 
					h.load('inc/header_4.html',function(){
						jQuery(this).removeClass('type_5').addClass('type_4').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
			}
		});
		*/

	});


	fSelect.prev('.select_list').on('click','li:not(.active)',function(){
		var val = jQuery(this).text(),
			h = jQuery('.footer_top_part'),
			body = jQuery('html,body');

		jQuery(this).addClass('active').siblings().removeClass('active');
        var pathname = window.location.pathname;
        console.log(pathname);

        switch(val){

            case "Footer 1" :
                document.location = pathname+'?footer=footer_1#footer';
                break;
            case "Footer 2" :
                document.location = pathname+'?footer=footer_2#footer';
                break;
            case "Footer 3" :
                document.location = pathname+'?footer=footer_3#footer';
                break;
            case "Footer 4" :
                document.location = pathname+'?footer=footer_4#footer';
                break;
            case "Footer 5" :
                document.location = pathname+'?footer=footer_5#footer';
                break;
            case "Footer 6" :
                document.location = pathname+'?footer=footer_6#footer';
                break;
            default:
                break;
        }
		/*h.slideUp(function(){
			jQuery(this).html("");
			switch(val){
				case "Footer 1" : 
					h.load('inc/footer_1.html',function(){
						jQuery(this).removeClass('p_vr_0').closest('#footer').removeClass('type_2');
						jQuery(this).slideDown();
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 2" : 
					h.load('inc/footer_2.html',function(){
						jQuery(this).removeClass('p_vr_0').closest('#footer').addClass('type_2');
						jQuery(this).slideDown();
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 3" : 
					h.load('inc/footer_3.html',function(){
						jQuery(this).addClass('p_vr_0').closest('#footer').removeClass('type_2');
						jQuery(this).slideDown();
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 4" : 
					h.load('inc/footer_4.html',function(){
						jQuery(this).removeClass('p_vr_0').slideDown().closest('#footer').removeClass('type_2');
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 5" : 
					h.load('inc/footer_5.html',function(){
						jQuery(this).addClass('p_vr_0').slideDown().closest('#footer').addClass('type_2');
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
			}
		});*/

	});


	bgSelect.prev('.select_list').on('click','li',function(){
		var val = jQuery(this).text();

		switch(val){

			case "Image" : 
				color.slideUp(function(){
					image.slideDown();
				});
			break;

			case "Color" : 
				image.slideUp(function(){
					color.slideDown();
				});
			break;

		}

	});
	bgImagebutton.each(function(){
		jQuery(this).css('background-image','url('+jQuery(this).data('image')+')');
	});

	bgImagebutton.on('click',function(){
		var bg = jQuery(this).data('image');
		jQuery('body').css('backgroundImage','url('+bg+')');
	});

	/*
	reset.on('click',function(){
		var h = jQuery('[role="banner"]'),
			f = jQuery('.footer_top_part');

		jQuery('body,#select_color').css({
			'backgroundImage' : 'none',
			'backgroundColor' : '#232830'
		});

		if(!(sw.find('.homepage').length)){
			layout.removeClass('boxed_layout').addClass('wide_layout');
			sw.find('[data-layout]').removeClass('active').first().addClass('active');
		}

		image.slideUp(function(){
			color.slideDown();
		});

		bgSelect.prevAll(".select_title").text('Color');
		bgSelect.prev('.select_list').children('li').removeClass('active').first().addClass('active');

		
		if(hSelect.prevAll(".select_title").text() !== "Header 1"){
			hSelect.prevAll(".select_title").text('Header 1');
			hSelect.prev('.select_list').children('li').removeClass('active').first().addClass('active');
			h.slideUp(function(){
				jQuery(this).html("");
				h.load('inc/header_1.html',function(){
					jQuery(this).removeClass('type_4').slideDown();
					window.sticky();
					jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
					jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
					jQuery('#shopping_button').css3Animate(jQuery('#shopping_button').next('.shopping_cart'));
					window.rmenu();
				});
			});
		}


		if(fSelect.prevAll(".select_title").text() !== "Footer 1"){
			fSelect.prevAll(".select_title").text('Footer 1');
			fSelect.prev('.select_list').children('li').removeClass('active').first().addClass('active');
			f.slideUp(function(){
				jQuery(this).html("");
				f.load('inc/footer_1.html',function(){
					jQuery(this).removeClass('p_vr_0').closest('#footer').removeClass('type_2');
					jQuery(this).slideDown();
				});
			});
		}

	});
	*/
	
});;
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
// Camera slideshow v1.3.3 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.4+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
;(function(a){a.fn.camera=function(b,c){function e(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)){return true}}function H(){var b=a(s).width();a("li",s).removeClass("camera_visThumb");a("li",s).each(function(){var c=a(this).position(),d=a("ul",s).outerWidth(),e=a("ul",s).offset().left,f=a("> div",s).offset().left,g=f-e;if(g>0){a(".camera_prevThumbs",V).removeClass("hideNav")}else{a(".camera_prevThumbs",V).addClass("hideNav")}if(d-g>b){a(".camera_nextThumbs",V).removeClass("hideNav")}else{a(".camera_nextThumbs",V).addClass("hideNav")}var h=c.left,i=c.left+a(this).width();if(i-g<=b&&h-g>=0){a(this).addClass("camera_visThumb")}})}function K(){function d(){t=f.width();if(b.height.indexOf("%")!=-1){var c=Math.round(t/(100/parseFloat(b.height)));if(b.minHeight!=""&&c<parseFloat(b.minHeight)){u=parseFloat(b.minHeight)}else{u=c}f.css({height:u})}else if(b.height=="auto"){u=f.height()}else{u=parseFloat(b.height);f.css({height:u})}a(".camerarelative",k).css({width:t,height:u});a(".imgLoaded",k).each(function(){var c=a(this),d=c.attr("width"),e=c.attr("height"),f=c.index(),g,h,i=c.attr("data-alignment"),j=c.attr("data-portrait");if(typeof i==="undefined"||i===false||i===""){i=b.alignment}if(typeof j==="undefined"||j===false||j===""){j=b.portrait}if(j==false||j=="false"){if(d/e<t/u){var k=t/d;var l=Math.abs(u-e*k)*.5;switch(i){case"topLeft":g=0;break;case"topCenter":g=0;break;case"topRight":g=0;break;case"centerLeft":g="-"+l+"px";break;case"center":g="-"+l+"px";break;case"centerRight":g="-"+l+"px";break;case"bottomLeft":g="-"+l*2+"px";break;case"bottomCenter":g="-"+l*2+"px";break;case"bottomRight":g="-"+l*2+"px";break}c.css({height:e*k,"margin-left":0,"margin-top":g,position:"absolute",visibility:"visible",width:t})}else{var k=u/e;var l=Math.abs(t-d*k)*.5;switch(i){case"topLeft":h=0;break;case"topCenter":h="-"+l+"px";break;case"topRight":h="-"+l*2+"px";break;case"centerLeft":h=0;break;case"center":h="-"+l+"px";break;case"centerRight":h="-"+l*2+"px";break;case"bottomLeft":h=0;break;case"bottomCenter":h="-"+l+"px";break;case"bottomRight":h="-"+l*2+"px";break}c.css({height:u,"margin-left":h,"margin-top":0,position:"absolute",visibility:"visible",width:d*k})}}else{if(d/e<t/u){var k=u/e;var l=Math.abs(t-d*k)*.5;switch(i){case"topLeft":h=0;break;case"topCenter":h=l+"px";break;case"topRight":h=l*2+"px";break;case"centerLeft":h=0;break;case"center":h=l+"px";break;case"centerRight":h=l*2+"px";break;case"bottomLeft":h=0;break;case"bottomCenter":h=l+"px";break;case"bottomRight":h=l*2+"px";break}c.css({height:u,"margin-left":h,"margin-top":0,position:"absolute",visibility:"visible",width:d*k})}else{var k=t/d;var l=Math.abs(u-e*k)*.5;switch(i){case"topLeft":g=0;break;case"topCenter":g=0;break;case"topRight":g=0;break;case"centerLeft":g=l+"px";break;case"center":g=l+"px";break;case"centerRight":g=l+"px";break;case"bottomLeft":g=l*2+"px";break;case"bottomCenter":g=l*2+"px";break;case"bottomRight":g=l*2+"px";break}c.css({height:e*k,"margin-left":0,"margin-top":g,position:"absolute",visibility:"visible",width:t})}}})}var c;if(I==true){clearTimeout(c);c=setTimeout(d,200)}else{d()}I=true}function X(a){for(var b,c,d=a.length;d;b=parseInt(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}function Y(a){return Math.ceil(a)==Math.floor(a)}function hb(){if(a(s).length&&!a(r).length){var b=a(s).outerWidth(),c=a("ul > li",s).outerWidth(),d=a("li.cameracurrent",s).length?a("li.cameracurrent",s).position():"",e=a("ul > li",s).length*a("ul > li",s).outerWidth(),g=a("ul",s).offset().left,h=a("> div",s).offset().left,i;if(g<0){i="-"+(h-g)}else{i=h-g}if(gb==true){a("ul",s).width(a("ul > li",s).length*a("ul > li",s).outerWidth());if(a(s).length&&!a(r).lenght){f.css({marginBottom:a(s).outerHeight()})}H();a("ul",s).width(a("ul > li",s).length*a("ul > li",s).outerWidth());if(a(s).length&&!a(r).lenght){f.css({marginBottom:a(s).outerHeight()})}}gb=false;var j=a("li.cameracurrent",s).length?d.left:"",k=a("li.cameracurrent",s).length?d.left+a("li.cameracurrent",s).outerWidth():"";if(j<a("li.cameracurrent",s).outerWidth()){j=0}if(k-i>b){if(j+b<e){a("ul",s).animate({"margin-left":"-"+j+"px"},500,H)}else{a("ul",s).animate({"margin-left":"-"+(a("ul",s).outerWidth()-b)+"px"},500,H)}}else if(j-i<0){a("ul",s).animate({"margin-left":"-"+j+"px"},500,H)}else{a("ul",s).css({"margin-left":"auto","margin-right":"auto"});setTimeout(H,100)}}}function ib(){bb=0;var c=a(".camera_bar_cont",V).width(),d=a(".camera_bar_cont",V).height();if(h!="pie"){switch(U){case"leftToRight":a("#"+i).css({right:c});break;case"rightToLeft":a("#"+i).css({left:c});break;case"topToBottom":a("#"+i).css({bottom:d});break;case"bottomToTop":a("#"+i).css({top:d});break}}else{db.clearRect(0,0,b.pieDiameter,b.pieDiameter)}}function jb(c){j.addClass("camerasliding");R=false;var d=parseFloat(a("div.cameraSlide.cameracurrent",k).index());if(c>0){var l=c-1}else if(d==B-1){var l=0}else{var l=d+1}var m=a(".cameraSlide:eq("+l+")",k);var n=a(".cameraSlide:eq("+(l+1)+")",k).addClass("cameranext");if(d!=l+1){n.hide()}a(".cameraContent",g).fadeOut(600);a(".camera_caption",g).show();a(".camerarelative",m).append(a("> div ",j).eq(l).find("> div.camera_effected"));a(".camera_target_content .cameraContent:eq("+l+")",f).append(a("> div ",j).eq(l).find("> div"));if(!a(".imgLoaded",m).length){var o=v[l];var p=new Image;p.src=o+"?"+(new Date).getTime();m.css("visibility","hidden");m.prepend(a(p).attr("class","imgLoaded").css("visibility","hidden"));var q,w;if(!a(p).get(0).complete||q=="0"||w=="0"||typeof q==="undefined"||q===false||typeof w==="undefined"||w===false){a(".camera_loader",f).delay(500).fadeIn(400);p.onload=function(){q=p.naturalWidth;w=p.naturalHeight;a(p).attr("data-alignment",z[l]).attr("data-portrait",y[l]);a(p).attr("width",q);a(p).attr("height",w);k.find(".cameraSlide_"+l).hide().css("visibility","visible");K();jb(l+1)}}}else{if(v.length>l+1&&!a(".imgLoaded",n).length){var x=v[l+1];var A=new Image;A.src=x+"?"+(new Date).getTime();n.prepend(a(A).attr("class","imgLoaded").css("visibility","hidden"));A.onload=function(){q=A.naturalWidth;w=A.naturalHeight;a(A).attr("data-alignment",z[l+1]).attr("data-portrait",y[l+1]);a(A).attr("width",q);a(A).attr("height",w);K()}}b.onLoaded.call(this);if(a(".camera_loader",f).is(":visible")){a(".camera_loader",f).fadeOut(400)}else{a(".camera_loader",f).css({visibility:"hidden"});a(".camera_loader",f).fadeOut(400,function(){a(".camera_loader",f).css({visibility:"visible"})})}var C=b.rows,D=b.cols,F=1,G=0,H,I,J,N,O,P=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0;if(b.opacityOnGrid==true){opacityOnGrid=0}else{opacityOnGrid=1}var Q=a(" > div",j).eq(l).attr("data-fx");if(e()&&b.mobileFx!=""&&b.mobileFx!="default"){N=b.mobileFx}else{if(typeof Q!=="undefined"&&Q!==false&&Q!=="default"){N=Q}else{N=b.fx}}if(N=="random"){N=X(P);N=N[0]}else{N=N;if(N.indexOf(",")>0){N=N.replace(/ /g,"");N=N.split(",");N=X(N);N=N[0]}}dataEasing=a(" > div",j).eq(l).attr("data-easing");mobileEasing=a(" > div",j).eq(l).attr("data-mobileEasing");if(e()&&b.mobileEasing!=""&&b.mobileEasing!="default"){if(typeof mobileEasing!=="undefined"&&mobileEasing!==false&&mobileEasing!=="default"){O=mobileEasing}else{O=b.mobileEasing}}else{if(typeof dataEasing!=="undefined"&&dataEasing!==false&&dataEasing!=="default"){O=dataEasing}else{O=b.easing}}H=a(" > div",j).eq(l).attr("data-slideOn");if(typeof H!=="undefined"&&H!==false){T=H}else{if(b.slideOn=="random"){var T=new Array("next","prev");T=X(T);T=T[0]}else{T=b.slideOn}}var Y=a(" > div",j).eq(l).attr("data-time");if(typeof Y!=="undefined"&&Y!==false&&Y!==""){I=parseFloat(Y)}else{I=b.time}var Z=a(" > div",j).eq(l).attr("data-transPeriod");if(typeof Z!=="undefined"&&Z!==false&&Z!==""){J=parseFloat(Z)}else{J=b.transPeriod}if(!a(j).hasClass("camerastarted")){N="simpleFade";T="next";O="";J=400;a(j).addClass("camerastarted")}switch(N){case"simpleFade":D=1;C=1;break;case"curtainTopLeft":if(b.slicedCols==0){D=b.cols}else{D=b.slicedCols}C=1;break;case"curtainTopRight":if(b.slicedCols==0){D=b.cols}else{D=b.slicedCols}C=1;break;case"curtainBottomLeft":if(b.slicedCols==0){D=b.cols}else{D=b.slicedCols}C=1;break;case"curtainBottomRight":if(b.slicedCols==0){D=b.cols}else{D=b.slicedCols}C=1;break;case"curtainSliceLeft":if(b.slicedCols==0){D=b.cols}else{D=b.slicedCols}C=1;break;case"curtainSliceRight":if(b.slicedCols==0){D=b.cols}else{D=b.slicedCols}C=1;break;case"blindCurtainTopLeft":if(b.slicedRows==0){C=b.rows}else{C=b.slicedRows}D=1;break;case"blindCurtainTopRight":if(b.slicedRows==0){C=b.rows}else{C=b.slicedRows}D=1;break;case"blindCurtainBottomLeft":if(b.slicedRows==0){C=b.rows}else{C=b.slicedRows}D=1;break;case"blindCurtainBottomRight":if(b.slicedRows==0){C=b.rows}else{C=b.slicedRows}D=1;break;case"blindCurtainSliceTop":if(b.slicedRows==0){C=b.rows}else{C=b.slicedRows}D=1;break;case"blindCurtainSliceBottom":if(b.slicedRows==0){C=b.rows}else{C=b.slicedRows}D=1;break;case"stampede":G="-"+J;break;case"mosaic":G=b.gridDifference;break;case"mosaicReverse":G=b.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":G=b.gridDifference;F=1.7;break;case"mosaicSpiralReverse":G=b.gridDifference;F=1.7;break;case"topLeftBottomRight":G=b.gridDifference;F=6;break;case"bottomRightTopLeft":G=b.gridDifference;F=6;break;case"bottomLeftTopRight":G=b.gridDifference;F=6;break;case"topRightBottomLeft":G=b.gridDifference;F=6;break;case"scrollLeft":D=1;C=1;break;case"scrollRight":D=1;C=1;break;case"scrollTop":D=1;C=1;break;case"scrollBottom":D=1;C=1;break;case"scrollHorz":D=1;C=1;break}var _=0;var ab=C*D;var eb=t-Math.floor(t/D)*D;var fb=u-Math.floor(u/C)*C;var gb;var kb;var lb=0;var mb=0;var nb=new Array;var ob=new Array;var pb=new Array;while(_<ab){nb.push(_);ob.push(_);E.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var qb=a(".cameraappended:eq("+_+")",k);if(N=="scrollLeft"||N=="scrollRight"||N=="scrollTop"||N=="scrollBottom"||N=="scrollHorz"){S.eq(l).clone().show().appendTo(qb)}else{if(T=="next"){S.eq(l).clone().show().appendTo(qb)}else{S.eq(d).clone().show().appendTo(qb)}}if(_%D<eb){gb=1}else{gb=0}if(_%D==0){lb=0}if(Math.floor(_/D)<fb){kb=1}else{kb=0}qb.css({height:Math.floor(u/C+kb+1),left:lb,top:mb,width:Math.floor(t/D+gb+1)});a("> .cameraSlide",qb).css({height:u,"margin-left":"-"+lb+"px","margin-top":"-"+mb+"px",width:t});lb=lb+qb.width()-1;if(_%D==D-1){mb=mb+qb.height()-1}_++}switch(N){case"curtainTopLeft":break;case"curtainBottomLeft":break;case"curtainSliceLeft":break;case"curtainTopRight":nb=nb.reverse();break;case"curtainBottomRight":nb=nb.reverse();break;case"curtainSliceRight":nb=nb.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":nb=nb.reverse();break;case"blindCurtainSliceTop":break;case"blindCurtainTopRight":break;case"blindCurtainBottomRight":nb=nb.reverse();break;case"blindCurtainSliceBottom":nb=nb.reverse();break;case"stampede":nb=X(nb);break;case"mosaic":break;case"mosaicReverse":nb=nb.reverse();break;case"mosaicRandom":nb=X(nb);break;case"mosaicSpiral":var rb=C/2,sb,tb,ub,vb=0;for(ub=0;ub<rb;ub++){tb=ub;for(sb=ub;sb<D-ub-1;sb++){pb[vb++]=tb*D+sb}sb=D-ub-1;for(tb=ub;tb<C-ub-1;tb++){pb[vb++]=tb*D+sb}tb=C-ub-1;for(sb=D-ub-1;sb>ub;sb--){pb[vb++]=tb*D+sb}sb=ub;for(tb=C-ub-1;tb>ub;tb--){pb[vb++]=tb*D+sb}}nb=pb;break;case"mosaicSpiralReverse":var rb=C/2,sb,tb,ub,vb=ab-1;for(ub=0;ub<rb;ub++){tb=ub;for(sb=ub;sb<D-ub-1;sb++){pb[vb--]=tb*D+sb}sb=D-ub-1;for(tb=ub;tb<C-ub-1;tb++){pb[vb--]=tb*D+sb}tb=C-ub-1;for(sb=D-ub-1;sb>ub;sb--){pb[vb--]=tb*D+sb}sb=ub;for(tb=C-ub-1;tb>ub;tb--){pb[vb--]=tb*D+sb}}nb=pb;break;case"topLeftBottomRight":for(var tb=0;tb<C;tb++)for(var sb=0;sb<D;sb++){pb.push(sb+tb)}ob=pb;break;case"bottomRightTopLeft":for(var tb=0;tb<C;tb++)for(var sb=0;sb<D;sb++){pb.push(sb+tb)}ob=pb.reverse();break;case"bottomLeftTopRight":for(var tb=C;tb>0;tb--)for(var sb=0;sb<D;sb++){pb.push(sb+tb)}ob=pb;break;case"topRightBottomLeft":for(var tb=0;tb<C;tb++)for(var sb=D;sb>0;sb--){pb.push(sb+tb)}ob=pb;break}a.each(nb,function(c,e){function o(){a(this).addClass("cameraeased");if(a(".cameraeased",k).length>=0){a(s).css({visibility:"visible"})}if(a(".cameraeased",k).length==ab){hb();a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",g).each(function(){a(this).css("visibility","hidden")});S.eq(l).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent");S.eq(d).css("z-index","1").removeClass("cameracurrent");a(".cameraContent",g).eq(l).addClass("cameracurrent");if(d>=0){a(".cameraContent",g).eq(d).removeClass("cameracurrent")}b.onEndTransition.call(this);if(a("> div",j).eq(l).attr("data-video")!="hide"&&a(".cameraContent.cameracurrent .imgFake",g).length){a(".cameraContent.cameracurrent .imgFake",g).click()}var c=S.eq(l).find(".fadeIn").length;var e=a(".cameraContent",g).eq(l).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;if(c!=0){a(".cameraSlide.cameracurrent .fadeIn",g).each(function(){if(a(this).attr("data-easing")!=""){var b=a(this).attr("data-easing")}else{var b=O}var d=a(this);if(typeof d.attr("data-outerWidth")==="undefined"||d.attr("data-outerWidth")===false||d.attr("data-outerWidth")===""){var e=d.outerWidth();d.attr("data-outerWidth",e)}else{var e=d.attr("data-outerWidth")}if(typeof d.attr("data-outerHeight")==="undefined"||d.attr("data-outerHeight")===false||d.attr("data-outerHeight")===""){var f=d.outerHeight();d.attr("data-outerHeight",f)}else{var f=d.attr("data-outerHeight")}var g=d.position();var h=g.left;var i=g.top;var j=d.attr("class");var k=d.index();var l=d.parents(".camerarelative").outerHeight();var m=d.parents(".camerarelative").outerWidth();if(j.indexOf("fadeIn")!=-1){d.animate({opacity:0},0).css("visibility","visible").delay(I/c*.1*(k-1)).animate({opacity:1},I/c*.15,b)}else{d.css("visibility","visible")}})}a(".cameraContent.cameracurrent",g).show();if(e!=0){a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",g).each(function(){if(a(this).attr("data-easing")!=""){var b=a(this).attr("data-easing")}else{var b=O}var c=a(this);var d=c.position();var f=d.left;var g=d.top;var h=c.attr("class");var i=c.index();var j=c.outerHeight();if(h.indexOf("moveFromLeft")!=-1){c.css({left:"-"+t+"px",right:"auto"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left},I/e*.15,b)}else if(h.indexOf("moveFromRight")!=-1){c.css({left:t+"px",right:"auto"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left},I/e*.15,b)}else if(h.indexOf("moveFromTop")!=-1){c.css({top:"-"+u+"px",bottom:"auto"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({top:d.top},I/e*.15,b,function(){c.css({top:"auto",bottom:0})})}else if(h.indexOf("moveFromBottom")!=-1){c.css({top:u+"px",bottom:"auto"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({top:d.top},I/e*.15,b)}else if(h.indexOf("fadeFromLeft")!=-1){c.animate({opacity:0},0).css({left:"-"+t+"px",right:"auto"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left,opacity:1},I/e*.15,b)}else if(h.indexOf("fadeFromRight")!=-1){c.animate({opacity:0},0).css({left:t+"px",right:"auto"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({left:d.left,opacity:1},I/e*.15,b)}else if(h.indexOf("fadeFromTop")!=-1){c.animate({opacity:0},0).css({top:"-"+u+"px",bottom:"auto"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({top:d.top,opacity:1},I/e*.15,b,function(){c.css({top:"auto",bottom:0})})}else if(h.indexOf("fadeFromBottom")!=-1){c.animate({opacity:0},0).css({bottom:"-"+j+"px"});c.css("visibility","visible").delay(I/e*.1*(i-1)).animate({bottom:"0",opacity:1},I/e*.15,b)}else if(h.indexOf("fadeIn")!=-1){c.animate({opacity:0},0).css("visibility","visible").delay(I/e*.1*(i-1)).animate({opacity:1},I/e*.15,b)}else{c.css("visibility","visible")}})}a(".cameraappended",k).remove();j.removeClass("camerasliding");S.eq(d).hide();var f=a(".camera_bar_cont",V).width(),m=a(".camera_bar_cont",V).height(),o;if(h!="pie"){o=.05}else{o=.005}a("#"+i).animate({opacity:b.loaderOpacity},200);L=setInterval(function(){if(j.hasClass("stopped")){clearInterval(L)}if(h!="pie"){if(bb<=1.002&&!j.hasClass("stopped")&&!j.hasClass("paused")&&!j.hasClass("hovered")){bb=bb+o}else if(bb<=1&&(j.hasClass("stopped")||j.hasClass("paused")||j.hasClass("stopped")||j.hasClass("hovered"))){bb=bb}else{if(!j.hasClass("stopped")&&!j.hasClass("paused")&&!j.hasClass("hovered")){clearInterval(L);W();a("#"+i).animate({opacity:0},200,function(){clearTimeout(M);M=setTimeout(ib,n);jb();b.onStartLoading.call(this)})}}switch(U){case"leftToRight":a("#"+i).animate({right:f-f*bb},I*o,"linear");break;case"rightToLeft":a("#"+i).animate({left:f-f*bb},I*o,"linear");break;case"topToBottom":a("#"+i).animate({bottom:m-m*bb},I*o,"linear");break;case"bottomToTop":a("#"+i).animate({bottom:m-m*bb},I*o,"linear");break}}else{cb=bb;db.clearRect(0,0,b.pieDiameter,b.pieDiameter);db.globalCompositeOperation="destination-over";db.beginPath();db.arc(b.pieDiameter/2,b.pieDiameter/2,b.pieDiameter/2-b.loaderStroke,0,Math.PI*2,false);db.lineWidth=b.loaderStroke;db.strokeStyle=b.loaderBgColor;db.stroke();db.closePath();db.globalCompositeOperation="source-over";db.beginPath();db.arc(b.pieDiameter/2,b.pieDiameter/2,b.pieDiameter/2-b.loaderStroke,0,Math.PI*2*cb,false);db.lineWidth=b.loaderStroke-b.loaderPadding*2;db.strokeStyle=b.loaderColor;db.stroke();db.closePath();if(bb<=1.002&&!j.hasClass("stopped")&&!j.hasClass("paused")&&!j.hasClass("hovered")){bb=bb+o}else if(bb<=1&&(j.hasClass("stopped")||j.hasClass("paused")||j.hasClass("hovered"))){bb=bb}else{if(!j.hasClass("stopped")&&!j.hasClass("paused")&&!j.hasClass("hovered")){clearInterval(L);W();a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},200,function(){clearTimeout(M);M=setTimeout(ib,n);jb();b.onStartLoading.call(this)})}}}},I*o)}}if(e%D<eb){gb=1}else{gb=0}if(e%D==0){lb=0}if(Math.floor(e/D)<fb){kb=1}else{kb=0}switch(N){case"simpleFade":height=u;width=t;opacityOnGrid=0;break;case"curtainTopLeft":height=0,width=Math.floor(t/D+gb+1),marginTop="-"+Math.floor(u/C+kb+1)+"px";break;case"curtainTopRight":height=0,width=Math.floor(t/D+gb+1),marginTop="-"+Math.floor(u/C+kb+1)+"px";break;case"curtainBottomLeft":height=0,width=Math.floor(t/D+gb+1),marginTop=Math.floor(u/C+kb+1)+"px";break;case"curtainBottomRight":height=0,width=Math.floor(t/D+gb+1),marginTop=Math.floor(u/C+kb+1)+"px";break;case"curtainSliceLeft":height=0,width=Math.floor(t/D+gb+1);if(e%2==0){marginTop=Math.floor(u/C+kb+1)+"px"}else{marginTop="-"+Math.floor(u/C+kb+1)+"px"}break;case"curtainSliceRight":height=0,width=Math.floor(t/D+gb+1);if(e%2==0){marginTop=Math.floor(u/C+kb+1)+"px"}else{marginTop="-"+Math.floor(u/C+kb+1)+"px"}break;case"blindCurtainTopLeft":height=Math.floor(u/C+kb+1),width=0,marginLeft="-"+Math.floor(t/D+gb+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(u/C+kb+1),width=0,marginLeft=Math.floor(t/D+gb+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(u/C+kb+1),width=0,marginLeft="-"+Math.floor(t/D+gb+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(u/C+kb+1),width=0,marginLeft=Math.floor(t/D+gb+1)+"px";break;case"blindCurtainSliceBottom":height=Math.floor(u/C+kb+1),width=0;if(e%2==0){marginLeft="-"+Math.floor(t/D+gb+1)+"px"}else{marginLeft=Math.floor(t/D+gb+1)+"px"}break;case"blindCurtainSliceTop":height=Math.floor(u/C+kb+1),width=0;if(e%2==0){marginLeft="-"+Math.floor(t/D+gb+1)+"px"}else{marginLeft=Math.floor(t/D+gb+1)+"px"}break;case"stampede":height=0;width=0;marginLeft=t*.2*(c%D-(D-Math.floor(D/2)))+"px";marginTop=u*.2*(Math.floor(c/D)+1-(C-Math.floor(C/2)))+"px";break;case"mosaic":height=0;width=0;break;case"mosaicReverse":height=0;width=0;marginLeft=Math.floor(t/D+gb+1)+"px";marginTop=Math.floor(u/C+kb+1)+"px";break;case"mosaicRandom":height=0;width=0;marginLeft=Math.floor(t/D+gb+1)*.5+"px";marginTop=Math.floor(u/C+kb+1)*.5+"px";break;case"mosaicSpiral":height=0;width=0;marginLeft=Math.floor(t/D+gb+1)*.5+"px";marginTop=Math.floor(u/C+kb+1)*.5+"px";break;case"mosaicSpiralReverse":height=0;width=0;marginLeft=Math.floor(t/D+gb+1)*.5+"px";marginTop=Math.floor(u/C+kb+1)*.5+"px";break;case"topLeftBottomRight":height=0;width=0;break;case"bottomRightTopLeft":height=0;width=0;marginLeft=Math.floor(t/D+gb+1)+"px";marginTop=Math.floor(u/C+kb+1)+"px";break;case"bottomLeftTopRight":height=0;width=0;marginLeft=0;marginTop=Math.floor(u/C+kb+1)+"px";break;case"topRightBottomLeft":height=0;width=0;marginLeft=Math.floor(t/D+gb+1)+"px";marginTop=0;break;case"scrollRight":height=u;width=t;marginLeft=-t;break;case"scrollLeft":height=u;width=t;marginLeft=t;break;case"scrollTop":height=u;width=t;marginTop=u;break;case"scrollBottom":height=u;width=t;marginTop=-u;break;case"scrollHorz":height=u;width=t;if(d==0&&l==B-1){marginLeft=-t}else if(d<l||d==B-1&&l==0){marginLeft=t}else{marginLeft=-t}break}var m=a(".cameraappended:eq("+e+")",k);if(typeof L!=="undefined"){clearInterval(L);clearTimeout(M);M=setTimeout(ib,J+G)}if(a(r).length){a(".camera_pag li",f).removeClass("cameracurrent");a(".camera_pag li",f).eq(l).addClass("cameracurrent")}if(a(s).length){a("li",s).removeClass("cameracurrent");a("li",s).eq(l).addClass("cameracurrent");a("li",s).not(".cameracurrent").find("img").animate({opacity:.5},0);a("li.cameracurrent img",s).animate({opacity:1},0);a("li",s).hover(function(){a("img",this).stop(true,false).animate({opacity:1},150)},function(){if(!a(this).hasClass("cameracurrent")){a("img",this).stop(true,false).animate({opacity:.5},150)}})}var n=parseFloat(J)+parseFloat(G);if(N=="scrollLeft"||N=="scrollRight"||N=="scrollTop"||N=="scrollBottom"||N=="scrollHorz"){b.onStartTransition.call(this);n=0;m.delay((J+G)/ab*ob[c]*F*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(u/C+kb+1),"margin-top":0,"margin-left":0,width:Math.floor(t/D+gb+1)},J-G,O,o);S.eq(d).delay((J+G)/ab*ob[c]*F*.5).animate({"margin-left":marginLeft*-1,"margin-top":marginTop*-1},J-G,O,function(){a(this).css({"margin-top":0,"margin-left":0})})}else{b.onStartTransition.call(this);n=parseFloat(J)+parseFloat(G);if(T=="next"){m.delay((J+G)/ab*ob[c]*F*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(u/C+kb+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(t/D+gb+1)},J-G,O,o)}else{S.eq(l).show().css("z-index","999").addClass("cameracurrent");S.eq(d).css("z-index","1").removeClass("cameracurrent");a(".cameraContent",g).eq(l).addClass("cameracurrent");a(".cameraContent",g).eq(d).removeClass("cameracurrent");m.delay((J+G)/ab*ob[c]*F*.5).css({display:"block",height:Math.floor(u/C+kb+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(t/D+gb+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},J-G,O,o)}}})}}var d={alignment:"center",autoAdvance:true,mobileAutoAdvance:true,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:true,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:true,navigationHover:true,mobileNavHover:true,opacityOnGrid:false,overlayer:true,pagination:true,playPause:true,pauseOnClick:true,pieDiameter:38,piePosition:"rightTop",portrait:false,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:false,time:7e3,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}};var b=a.extend({},d,b);var f=a(this).addClass("camera_wrap");f.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var g=a(".camera_fakehover",f);g.append('<div class="camera_target"></div>');if(b.overlayer==true){g.append('<div class="camera_overlayer"></div>')}g.append('<div class="camera_target_content"></div>');var h;if(b.loader=="pie"&&a.browser.msie&&a.browser.version<9){h="bar"}else{h=b.loader}if(h=="pie"){g.append('<div class="camera_pie"></div>')}else if(h=="bar"){g.append('<div class="camera_bar"></div>')}else{g.append('<div class="camera_bar" style="display:none"></div>')}if(b.playPause==true){g.append('<div class="camera_commands"></div>')}if(b.navigation==true){g.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>')}if(b.thumbnails==true){f.append('<div class="camera_thumbs_cont" />')}if(b.thumbnails==true&&b.pagination!=true){a(".camera_thumbs_cont",f).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />')}if(b.pagination==true){f.append('<div class="camera_pag"></div>')}f.append('<div class="camera_loader"></div>');a(".camera_caption",f).each(function(){a(this).wrapInner("<div />")});var i="pie_"+f.index(),j=a(".camera_src",f),k=a(".camera_target",f),l=a(".camera_target_content",f),m=a(".camera_pie",f),n=a(".camera_bar",f),o=a(".camera_prev",f),p=a(".camera_next",f),q=a(".camera_commands",f),r=a(".camera_pag",f),s=a(".camera_thumbs_cont",f);var t,u;var v=new Array;a("> div",j).each(function(){v.push(a(this).attr("data-src"))});var w=new Array;a("> div",j).each(function(){if(a(this).attr("data-link")){w.push(a(this).attr("data-link"))}else{w.push("")}});var x=new Array;a("> div",j).each(function(){if(a(this).attr("data-target")){x.push(a(this).attr("data-target"))}else{x.push("")}});var y=new Array;a("> div",j).each(function(){if(a(this).attr("data-portrait")){y.push(a(this).attr("data-portrait"))}else{y.push("")}});var z=new Array;a("> div",j).each(function(){if(a(this).attr("data-alignment")){z.push(a(this).attr("data-alignment"))}else{z.push("")}});var A=new Array;a("> div",j).each(function(){if(a(this).attr("data-thumb")){A.push(a(this).attr("data-thumb"))}else{A.push("")}});var B=v.length;a(l).append('<div class="cameraContents" />');var C;for(C=0;C<B;C++){a(".cameraContents",l).append('<div class="cameraContent" />');if(w[C]!=""){var D=a("> div ",j).eq(C).attr("data-box");if(typeof D!=="undefined"&&D!==false&&D!=""){D='data-box="'+a("> div ",j).eq(C).attr("data-box")+'"'}else{D=""}a(".camera_target_content .cameraContent:eq("+C+")",f).append('<a class="camera_link" href="'+w[C]+'" '+D+' target="'+x[C]+'"></a>')}}a(".camera_caption",f).each(function(){var b=a(this).parent().index(),c=f.find(".cameraContent").eq(b);a(this).appendTo(c)});k.append('<div class="cameraCont" />');var E=a(".cameraCont",f);var F;for(F=0;F<B;F++){E.append('<div class="cameraSlide cameraSlide_'+F+'" />');var G=a("> div:eq("+F+")",j);k.find(".cameraSlide_"+F).clone(G)}a(window).bind("load resize pageshow",function(){hb();H()});E.append('<div class="cameraSlide cameraSlide_'+F+'" />');var I;f.show();var t=k.width();var u=k.height();var J;a(window).bind("resize pageshow",function(){if(I==true){K()}a("ul",s).animate({"margin-top":0},0,hb);if(!j.hasClass("paused")){j.addClass("paused");if(a(".camera_stop",V).length){a(".camera_stop",V).hide();a(".camera_play",V).show();if(h!="none"){a("#"+i).hide()}}else{if(h!="none"){a("#"+i).hide()}}clearTimeout(J);J=setTimeout(function(){j.removeClass("paused");if(a(".camera_play",V).length){a(".camera_play",V).hide();a(".camera_stop",V).show();if(h!="none"){a("#"+i).fadeIn()}}else{if(h!="none"){a("#"+i).fadeIn()}}},1500)}});var L,M;var N,O,P,q,r;var Q,R;if(e()&&b.mobileAutoAdvance!=""){O=b.mobileAutoAdvance}else{O=b.autoAdvance}if(O==false){j.addClass("paused")}if(e()&&b.mobileNavHover!=""){P=b.mobileNavHover}else{P=b.navigationHover}if(j.length!=0){var S=a(".cameraSlide",k);S.wrapInner('<div class="camerarelative" />');var T;var U=b.barDirection;var V=f;a("iframe",g).each(function(){var b=a(this);var c=b.attr("src");b.attr("data-src",c);var d=b.parent().index(".camera_src > div");a(".camera_target_content .cameraContent:eq("+d+")",f).append(b)});function W(){a("iframe",g).each(function(){a(".camera_caption",g).show();var c=a(this);var d=c.attr("data-src");c.attr("src",d);var e=b.imagePath+"blank.gif";var h=new Image;h.src=e;if(b.height.indexOf("%")!=-1){var i=Math.round(t/(100/parseFloat(b.height)));if(b.minHeight!=""&&i<parseFloat(b.minHeight)){u=parseFloat(b.minHeight)}else{u=i}}else if(b.height=="auto"){u=f.height()}else{u=parseFloat(b.height)}c.after(a(h).attr({"class":"imgFake",width:t,height:u}));var j=c.clone();c.remove();a(h).bind("click",function(){if(a(this).css("position")=="absolute"){a(this).remove();if(d.indexOf("vimeo")!=-1||d.indexOf("youtube")!=-1){if(d.indexOf("?")!=-1){autoplay="&autoplay=1"}else{autoplay="?autoplay=1"}}else if(d.indexOf("dailymotion")!=-1){if(d.indexOf("?")!=-1){autoplay="&autoPlay=1"}else{autoplay="?autoPlay=1"}}j.attr("src",d+autoplay);R=true}else{a(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(j);j.css({position:"absolute",top:0,left:0,zIndex:9})}})})}W();if(b.hover==true){if(!e()){g.hover(function(){j.addClass("hovered")},function(){j.removeClass("hovered")})}}if(P==true){a(o,f).animate({opacity:0},0);a(p,f).animate({opacity:0},0);a(q,f).animate({opacity:0},0);if(e()){g.live("vmouseover",function(){a(o,f).animate({opacity:1},200);a(p,f).animate({opacity:1},200);a(q,f).animate({opacity:1},200)});g.live("vmouseout",function(){a(o,f).delay(500).animate({opacity:0},200);a(p,f).delay(500).animate({opacity:0},200);a(q,f).delay(500).animate({opacity:0},200)})}else{g.hover(function(){a(o,f).animate({opacity:1},200);a(p,f).animate({opacity:1},200);a(q,f).animate({opacity:1},200)},function(){a(o,f).animate({opacity:0},200);a(p,f).animate({opacity:0},200);a(q,f).animate({opacity:0},200)})}}a(".camera_stop",V).live("click",function(){O=false;j.addClass("paused");if(a(".camera_stop",V).length){a(".camera_stop",V).hide();a(".camera_play",V).show();if(h!="none"){a("#"+i).hide()}}else{if(h!="none"){a("#"+i).hide()}}});a(".camera_play",V).live("click",function(){O=true;j.removeClass("paused");if(a(".camera_play",V).length){a(".camera_play",V).hide();a(".camera_stop",V).show();if(h!="none"){a("#"+i).show()}}else{if(h!="none"){a("#"+i).show()}}});if(b.pauseOnClick==true){a(".camera_target_content",g).mouseup(function(){O=false;j.addClass("paused");a(".camera_stop",V).hide();a(".camera_play",V).show();a("#"+i).hide()})}a(".cameraContent, .imgFake",g).hover(function(){Q=true},function(){Q=false});a(".cameraContent, .imgFake",g).bind("click",function(){if(R==true&&Q==true){O=false;a(".camera_caption",g).hide();j.addClass("paused");a(".camera_stop",V).hide();a(".camera_play",V).show();a("#"+i).hide()}})}if(h!="pie"){n.append('<span class="camera_bar_cont" />');a(".camera_bar_cont",n).animate({opacity:b.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":b.loaderBgColor}).append('<span id="'+i+'" />');a("#"+i).animate({opacity:0},0);var Z=a("#"+i);Z.css({position:"absolute","background-color":b.loaderColor});switch(b.barPosition){case"left":n.css({right:"auto",width:b.loaderStroke});break;case"right":n.css({left:"auto",width:b.loaderStroke});break;case"top":n.css({bottom:"auto",height:b.loaderStroke});break;case"bottom":n.css({top:"auto",height:b.loaderStroke});break}switch(U){case"leftToRight":Z.css({left:0,right:0,top:b.loaderPadding,bottom:b.loaderPadding});break;case"rightToLeft":Z.css({left:0,right:0,top:b.loaderPadding,bottom:b.loaderPadding});break;case"topToBottom":Z.css({left:b.loaderPadding,right:b.loaderPadding,top:0,bottom:0});break;case"bottomToTop":Z.css({left:b.loaderPadding,right:b.loaderPadding,top:0,bottom:0});break}}else{m.append('<canvas id="'+i+'"></canvas>');var _;var Z=document.getElementById(i);Z.setAttribute("width",b.pieDiameter);Z.setAttribute("height",b.pieDiameter);var ab;switch(b.piePosition){case"leftTop":ab="left:0; top:0;";break;case"rightTop":ab="right:0; top:0;";break;case"leftBottom":ab="left:0; bottom:0;";break;case"rightBottom":ab="right:0; bottom:0;";break}Z.setAttribute("style","position:absolute; z-index:1002; "+ab);var bb;var cb;if(Z&&Z.getContext){var db=Z.getContext("2d");db.rotate(Math.PI*(3/2));db.translate(-b.pieDiameter,0)}}if(h=="none"||O==false){a("#"+i).hide();a(".camera_canvas_wrap",V).hide()}if(a(r).length){a(r).append('<ul class="camera_pag_ul" />');var eb;for(eb=0;eb<B;eb++){a(".camera_pag_ul",f).append('<li class="pag_nav_'+eb+'" style="position:relative; z-index:1002"><span><span>'+eb+"</span></span></li>")}a(".camera_pag_ul li",f).hover(function(){a(this).addClass("camera_hover");if(a(".camera_thumb",this).length){var b=a(".camera_thumb",this).outerWidth(),c=a(".camera_thumb",this).outerHeight(),d=a(this).outerWidth();a(".camera_thumb",this).show().css({top:"-"+c+"px",left:"-"+(b-d)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200);a(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){a(this).removeClass("camera_hover");a(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()});a(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()})})}if(a(s).length){var fb;if(!a(r).length){a(s).append("<div />");a(s).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');a("> div",s).append("<ul />");a.each(A,function(b,c){if(a("> div",j).eq(b).attr("data-thumb")!=""){var d=a("> div",j).eq(b).attr("data-thumb"),e=new Image;e.src=d;a("ul",s).append('<li class="pix_thumb pix_thumb_'+b+'" />');a("li.pix_thumb_"+b,s).append(a(e).attr("class","camera_thumb"))}})}else{a.each(A,function(b,c){if(a("> div",j).eq(b).attr("data-thumb")!=""){var d=a("> div",j).eq(b).attr("data-thumb"),e=new Image;e.src=d;a("li.pag_nav_"+b,r).append(a(e).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0));a("li.pag_nav_"+b+" > img",r).after('<div class="thumb_arrow" />');a("li.pag_nav_"+b+" > .thumb_arrow",r).animate({opacity:0},0)}});f.css({marginBottom:a(r).outerHeight()})}}else if(!a(s).length&&a(r).length){f.css({marginBottom:a(r).outerHeight()})}var gb=true;if(a(q).length){a(q).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');if(O==true){a(".camera_play",V).hide();a(".camera_stop",V).show()}else{a(".camera_stop",V).hide();a(".camera_play",V).show()}}ib();a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",g).each(function(){a(this).css("visibility","hidden")});b.onStartLoading.call(this);jb();if(a(o).length){a(o).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L);W();a("#"+i+", .camera_canvas_wrap",f).animate({opacity:0},0);ib();if(c!=0){jb(c)}else{jb(B)}b.onStartLoading.call(this)}})}if(a(p).length){a(p).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L);W();a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0);ib();if(c==B-1){jb(1)}else{jb(c+2)}b.onStartLoading.call(this)}})}if(e()){g.bind("swipeleft",function(c){if(!j.hasClass("camerasliding")){var d=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L);W();a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0);ib();if(d==B-1){jb(1)}else{jb(d+2)}b.onStartLoading.call(this)}});g.bind("swiperight",function(c){if(!j.hasClass("camerasliding")){var d=parseFloat(a(".cameraSlide.cameracurrent",k).index());clearInterval(L);W();a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0);ib();if(d!=0){jb(d)}else{jb(B)}b.onStartLoading.call(this)}})}if(a(r).length){a(".camera_pag li",f).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(this).index());var d=parseFloat(a(".cameraSlide.cameracurrent",k).index());if(c!=d){clearInterval(L);W();a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0);ib();jb(c+1);b.onStartLoading.call(this)}}})}if(a(s).length){a(".pix_thumb img",s).click(function(){if(!j.hasClass("camerasliding")){var c=parseFloat(a(this).parents("li").index());var d=parseFloat(a(".cameracurrent",k).index());if(c!=d){clearInterval(L);W();a("#"+i+", .camera_canvas_wrap",V).animate({opacity:0},0);a(".pix_thumb",s).removeClass("cameracurrent");a(this).parents("li").addClass("cameracurrent");ib();jb(c+1);hb();b.onStartLoading.call(this)}}});a(".camera_thumbs_cont .camera_prevThumbs",V).hover(function(){a(this).stop(true,false).animate({opacity:1},250)},function(){a(this).stop(true,false).animate({opacity:.7},250)});a(".camera_prevThumbs",V).click(function(){var b=0,c=a(s).outerWidth(),d=a("ul",s).offset().left,e=a("> div",s).offset().left,f=e-d;a(".camera_visThumb",s).each(function(){var c=a(this).outerWidth();b=b+c});if(f-b>0){a("ul",s).animate({"margin-left":"-"+(f-b)+"px"},500,H)}else{a("ul",s).animate({"margin-left":0},500,H)}});a(".camera_thumbs_cont .camera_nextThumbs",V).hover(function(){a(this).stop(true,false).animate({opacity:1},250)},function(){a(this).stop(true,false).animate({opacity:.7},250)});a(".camera_nextThumbs",V).click(function(){var b=0,c=a(s).outerWidth(),d=a("ul",s).outerWidth(),e=a("ul",s).offset().left,f=a("> div",s).offset().left,g=f-e;a(".camera_visThumb",s).each(function(){var c=a(this).outerWidth();b=b+c});if(g+b+b<d){a("ul",s).animate({"margin-left":"-"+(g+b)+"px"},500,H)}else{a("ul",s).animate({"margin-left":"-"+(d-c)+"px"},500,H)}})}}})(jQuery);(function(a){a.fn.cameraStop=function(){var b=a(this),c=a(".camera_src",b),d="pie_"+b.index();c.addClass("stopped");if(a(".camera_showcommands").length){var e=a(".camera_thumbs_wrap",b)}else{var e=b}}})(jQuery);(function(a){a.fn.cameraPause=function(){var b=a(this);var c=a(".camera_src",b);c.addClass("paused")}})(jQuery);(function(a){a.fn.cameraResume=function(){var b=a(this);var c=a(".camera_src",b);if(typeof autoAdv==="undefined"||autoAdv!==true){c.removeClass("paused")}}})(jQuery);;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/**
 * Isotope v1.5.26
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2014 Metafizzy
 */
!function(t,i){"use strict";var s,e=t.document,n=e.documentElement,o=t.Modernizr,r=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},a="Moz Webkit O Ms".split(" "),h=function(t){var i,s=n.style;if("string"==typeof s[t])return t;t=r(t);for(var e=0,o=a.length;o>e;e++)if(i=a[e]+t,"string"==typeof s[i])return i},l=h("transform"),u=h("transitionProperty"),c={csstransforms:function(){return!!l},csstransforms3d:function(){var t=!!h("perspective");if(t&&"webkitPerspective"in n.style){var s=i("<style>@media (transform-3d),(-webkit-transform-3d){#modernizr{height:3px}}</style>").appendTo("head"),e=i('<div id="modernizr" />').appendTo("html");t=3===e.height(),e.remove(),s.remove()}return t},csstransitions:function(){return!!u}};if(o)for(s in c)o.hasOwnProperty(s)||o.addTest(s,c[s]);else{o=t.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var d,f=" ";for(s in c)d=c[s](),o[s]=d,f+=" "+(d?"":"no-")+s;i("html").addClass(f)}if(o.csstransforms){var m=o.csstransforms3d?{translate:function(t){return"translate3d("+t[0]+"px, "+t[1]+"px, 0) "},scale:function(t){return"scale3d("+t+", "+t+", 1) "}}:{translate:function(t){return"translate("+t[0]+"px, "+t[1]+"px) "},scale:function(t){return"scale("+t+") "}},p=function(t,s,e){var n,o,r=i.data(t,"isoTransform")||{},a={},h={};a[s]=e,i.extend(r,a);for(n in r)o=r[n],h[n]=m[n](o);var u=h.translate||"",c=h.scale||"",d=u+c;i.data(t,"isoTransform",r),t.style[l]=d};i.cssNumber.scale=!0,i.cssHooks.scale={set:function(t,i){p(t,"scale",i)},get:function(t){var s=i.data(t,"isoTransform");return s&&s.scale?s.scale:1}},i.fx.step.scale=function(t){i.cssHooks.scale.set(t.elem,t.now+t.unit)},i.cssNumber.translate=!0,i.cssHooks.translate={set:function(t,i){p(t,"translate",i)},get:function(t){var s=i.data(t,"isoTransform");return s&&s.translate?s.translate:[0,0]}}}var y,g;o.csstransitions&&(y={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[u],g=h("transitionDuration"));var v,_=i.event,A=i.event.handle?"handle":"dispatch";_.special.smartresize={setup:function(){i(this).bind("resize",_.special.smartresize.handler)},teardown:function(){i(this).unbind("resize",_.special.smartresize.handler)},handler:function(t,i){var s=this,e=arguments;t.type="smartresize",v&&clearTimeout(v),v=setTimeout(function(){_[A].apply(s,e)},"execAsap"===i?0:100)}},i.fn.smartresize=function(t){return t?this.bind("smartresize",t):this.trigger("smartresize",["execAsap"])},i.Isotope=function(t,s,e){this.element=i(s),this._create(t),this._init(e)};var w=["width","height"],C=i(t);i.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},i.Isotope.prototype={_create:function(t){this.options=i.extend({},i.Isotope.settings,t),this.styleQueue=[],this.elemCount=0;var s=this.element[0].style;this.originalStyle={};var e=w.slice(0);for(var n in this.options.containerStyle)e.push(n);for(var o=0,r=e.length;r>o;o++)n=e[o],this.originalStyle[n]=s[n]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var a={"original-order":function(t,i){return i.elemCount++,i.elemCount},random:function(){return Math.random()}};this.options.getSortData=i.extend(this.options.getSortData,a),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var h=this;setTimeout(function(){h.element.addClass(h.options.containerClass)},0),this.options.resizable&&C.bind("smartresize.isotope",function(){h.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(t){var i=this.options.itemSelector,s=i?t.filter(i).add(t.find(i)):t,e={position:"absolute"};return s=s.filter(function(t,i){return 1===i.nodeType}),this.usingTransforms&&(e.left=0,e.top=0),s.css(e).addClass(this.options.itemClass),this.updateSortData(s,!0),s},_init:function(t){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(t)},option:function(t){if(i.isPlainObject(t)){this.options=i.extend(!0,this.options,t);var s;for(var e in t)s="_update"+r(e),this[s]&&this[s]()}},_updateAnimationEngine:function(){var t,i=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(i){case"css":case"none":t=!1;break;case"jquery":t=!0;break;default:t=!o.csstransitions}this.isUsingJQueryAnimation=t,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var t=this.usingTransforms=this.options.transformsEnabled&&o.csstransforms&&o.csstransitions&&!this.isUsingJQueryAnimation;t||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=t?this._translate:this._positionAbs},_filter:function(t){var i=""===this.options.filter?"*":this.options.filter;if(!i)return t;var s=this.options.hiddenClass,e="."+s,n=t.filter(e),o=n;if("*"!==i){o=n.filter(i);var r=t.not(e).not(i).addClass(s);this.styleQueue.push({$el:r,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:o,style:this.options.visibleStyle}),o.removeClass(s),t.filter(i)},updateSortData:function(t,s){var e,n,o=this,r=this.options.getSortData;t.each(function(){e=i(this),n={};for(var t in r)n[t]=s||"original-order"!==t?r[t](e,o):i.data(this,"isotope-sort-data")[t];i.data(this,"isotope-sort-data",n)})},_sort:function(){var t=this.options.sortBy,i=this._getSorter,s=this.options.sortAscending?1:-1,e=function(e,n){var o=i(e,t),r=i(n,t);return o===r&&"original-order"!==t&&(o=i(e,"original-order"),r=i(n,"original-order")),(o>r?1:r>o?-1:0)*s};this.$filteredAtoms.sort(e)},_getSorter:function(t,s){return i.data(t,"isotope-sort-data")[s]},_translate:function(t,i){return{translate:[t,i]}},_positionAbs:function(t,i){return{left:t,top:i}},_pushPosition:function(t,i,s){i=Math.round(i+this.offset.left),s=Math.round(s+this.offset.top);var e=this.getPositionStyles(i,s);this.styleQueue.push({$el:t,style:e}),this.options.itemPositionDataEnabled&&t.data("isotope-item-position",{x:i,y:s})},layout:function(t,i){var s=this.options.layoutMode;if(this["_"+s+"Layout"](t),this.options.resizesContainer){var e=this["_"+s+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:e})}this._processStyleQueue(t,i),this.isLaidOut=!0},_processStyleQueue:function(t,s){var e,n,r,a,h=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",l=this.options.animationOptions,u=this.options.onLayout;if(n=function(t,i){i.$el[h](i.style,l)},this._isInserting&&this.isUsingJQueryAnimation)n=function(t,i){e=i.$el.hasClass("no-transition")?"css":h,i.$el[e](i.style,l)};else if(s||u||l.complete){var c=!1,d=[s,u,l.complete],f=this;if(r=!0,a=function(){if(!c){for(var i,s=0,e=d.length;e>s;s++)i=d[s],"function"==typeof i&&i.call(f.element,t,f);c=!0}},this.isUsingJQueryAnimation&&"animate"===h)l.complete=a,r=!1;else if(o.csstransitions){for(var m,p=0,v=this.styleQueue[0],_=v&&v.$el;!_||!_.length;){if(m=this.styleQueue[p++],!m)return;_=m.$el}var A=parseFloat(getComputedStyle(_[0])[g]);A>0&&(n=function(t,i){i.$el[h](i.style,l).one(y,a)},r=!1)}}i.each(this.styleQueue,n),r&&a(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(t){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,t)},addItems:function(t,i){var s=this._getAtoms(t);this.$allAtoms=this.$allAtoms.add(s),i&&i(s)},insert:function(t,i){this.element.append(t);var s=this;this.addItems(t,function(t){var e=s._filter(t);s._addHideAppended(e),s._sort(),s.reLayout(),s._revealAppended(e,i)})},appended:function(t,i){var s=this;this.addItems(t,function(t){s._addHideAppended(t),s.layout(t),s._revealAppended(t,i)})},_addHideAppended:function(t){this.$filteredAtoms=this.$filteredAtoms.add(t),t.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:t,style:this.options.hiddenStyle})},_revealAppended:function(t,i){var s=this;setTimeout(function(){t.removeClass("no-transition"),s.styleQueue.push({$el:t,style:s.options.visibleStyle}),s._isInserting=!1,s._processStyleQueue(t,i)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(t,i){this.$allAtoms=this.$allAtoms.not(t),this.$filteredAtoms=this.$filteredAtoms.not(t);var s=this,e=function(){t.remove(),i&&i.call(s.element)};t.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:t,style:this.options.hiddenStyle}),this._sort(),this.reLayout(e)):e()},shuffle:function(t){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(t)},destroy:function(){var t=this.usingTransforms,i=this.options;this.$allAtoms.removeClass(i.hiddenClass+" "+i.itemClass).each(function(){var i=this.style;i.position="",i.top="",i.left="",i.opacity="",t&&(i[l]="")});var s=this.element[0].style;for(var e in this.originalStyle)s[e]=this.originalStyle[e];this.element.unbind(".isotope").undelegate("."+i.hiddenClass,"click").removeClass(i.containerClass).removeData("isotope"),C.unbind(".isotope")},_getSegments:function(t){var i,s=this.options.layoutMode,e=t?"rowHeight":"columnWidth",n=t?"height":"width",o=t?"rows":"cols",a=this.element[n](),h=this.options[s]&&this.options[s][e]||this.$filteredAtoms["outer"+r(n)](!0)||a;i=Math.floor(a/h),i=Math.max(i,1),this[s][o]=i,this[s][e]=h},_checkIfSegmentsChanged:function(t){var i=this.options.layoutMode,s=t?"rows":"cols",e=this[i][s];return this._getSegments(t),this[i][s]!==e},_masonryReset:function(){this.masonry={},this._getSegments();var t=this.masonry.cols;for(this.masonry.colYs=[];t--;)this.masonry.colYs.push(0)},_masonryLayout:function(t){var s=this,e=s.masonry;t.each(function(){var t=i(this),n=Math.ceil(t.outerWidth(!0)/e.columnWidth);if(n=Math.min(n,e.cols),1===n)s._masonryPlaceBrick(t,e.colYs);else{var o,r,a=e.cols+1-n,h=[];for(r=0;a>r;r++)o=e.colYs.slice(r,r+n),h[r]=Math.max.apply(Math,o);s._masonryPlaceBrick(t,h)}})},_masonryPlaceBrick:function(t,i){for(var s=Math.min.apply(Math,i),e=0,n=0,o=i.length;o>n;n++)if(i[n]===s){e=n;break}var r=this.masonry.columnWidth*e,a=s;this._pushPosition(t,r,a);var h=s+t.outerHeight(!0),l=this.masonry.cols+1-o;for(n=0;l>n;n++)this.masonry.colYs[e+n]=h},_masonryGetContainerSize:function(){var t=Math.max.apply(Math,this.masonry.colYs);return{height:t}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(t){var s=this,e=this.element.width(),n=this.fitRows;t.each(function(){var t=i(this),o=t.outerWidth(!0),r=t.outerHeight(!0);0!==n.x&&o+n.x>e&&(n.x=0,n.y=n.height),s._pushPosition(t,n.x,n.y),n.height=Math.max(n.y+r,n.height),n.x+=o})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(t){var s=this,e=this.cellsByRow;t.each(function(){var t=i(this),n=e.index%e.cols,o=Math.floor(e.index/e.cols),r=(n+.5)*e.columnWidth-t.outerWidth(!0)/2,a=(o+.5)*e.rowHeight-t.outerHeight(!0)/2;s._pushPosition(t,r,a),e.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(t){var s=this;t.each(function(){var t=i(this);s._pushPosition(t,0,s.straightDown.y),s.straightDown.y+=t.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var t=this.masonryHorizontal.rows;for(this.masonryHorizontal.rowXs=[];t--;)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(t){var s=this,e=s.masonryHorizontal;t.each(function(){var t=i(this),n=Math.ceil(t.outerHeight(!0)/e.rowHeight);if(n=Math.min(n,e.rows),1===n)s._masonryHorizontalPlaceBrick(t,e.rowXs);else{var o,r,a=e.rows+1-n,h=[];for(r=0;a>r;r++)o=e.rowXs.slice(r,r+n),h[r]=Math.max.apply(Math,o);s._masonryHorizontalPlaceBrick(t,h)}})},_masonryHorizontalPlaceBrick:function(t,i){for(var s=Math.min.apply(Math,i),e=0,n=0,o=i.length;o>n;n++)if(i[n]===s){e=n;break}var r=s,a=this.masonryHorizontal.rowHeight*e;this._pushPosition(t,r,a);var h=s+t.outerWidth(!0),l=this.masonryHorizontal.rows+1-o;for(n=0;l>n;n++)this.masonryHorizontal.rowXs[e+n]=h},_masonryHorizontalGetContainerSize:function(){var t=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:t}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(t){var s=this,e=this.element.height(),n=this.fitColumns;t.each(function(){var t=i(this),o=t.outerWidth(!0),r=t.outerHeight(!0);0!==n.y&&r+n.y>e&&(n.x=n.width,n.y=0),s._pushPosition(t,n.x,n.y),n.width=Math.max(n.x+o,n.width),n.y+=r})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(t){var s=this,e=this.cellsByColumn;t.each(function(){var t=i(this),n=Math.floor(e.index/e.rows),o=e.index%e.rows,r=(n+.5)*e.columnWidth-t.outerWidth(!0)/2,a=(o+.5)*e.rowHeight-t.outerHeight(!0)/2;s._pushPosition(t,r,a),e.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(t){var s=this;t.each(function(){var t=i(this);s._pushPosition(t,s.straightAcross.x,0),s.straightAcross.x+=t.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},i.fn.imagesLoaded=function(t){function s(){t.call(n,o)}function e(t){var n=t.target;n.src!==a&&-1===i.inArray(n,h)&&(h.push(n),--r<=0&&(setTimeout(s),o.unbind(".imagesLoaded",e)))}var n=this,o=n.find("img").add(n.filter("img")),r=o.length,a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",h=[];return r||s(),o.bind("load.imagesLoaded error.imagesLoaded",e).each(function(){var t=this.src;this.src=a,this.src=t}),n};var z=function(i){t.console&&t.console.error(i)};i.fn.isotope=function(t,s){if("string"==typeof t){var e=Array.prototype.slice.call(arguments,1);this.each(function(){var s=i.data(this,"isotope");return s?i.isFunction(s[t])&&"_"!==t.charAt(0)?void s[t].apply(s,e):void z("no such method '"+t+"' for isotope instance"):void z("cannot call methods on isotope prior to initialization; attempted to call method '"+t+"'")})}else this.each(function(){var e=i.data(this,"isotope");e?(e.option(t),e._init(s)):i.data(this,"isotope",new i.Isotope(t,this,s))});return this}}(window,jQuery);;
!function (t) {
    function e(a) {
        if (i[a])return i[a].exports;
        var o = i[a] = {exports: {}, id: a, loaded: !1};
        return t[a].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }

    var a = window.atwpjp;
    window.atwpjp = function (n, s) {
        for (var l, r, h = 0, c = []; h < n.length; h++)r = n[h], o[r] && c.push.apply(c, o[r]), o[r] = 0;
        for (l in s)t[l] = s[l];
        for (a && a(n, s); c.length;)c.shift().call(null, e);
        return s[0] ? (i[0] = 0, e(0)) : void 0
    };
    var i = {}, o = {6: 0};
    return e.e = function (t, a) {
        if (0 === o[t])return a.call(null, e);
        if (void 0 !== o[t])o[t].push(a); else {
            o[t] = [a];
            var i = document.getElementsByTagName("head")[0], n = document.createElement("script");
            n.type = "text/javascript", n.charset = "utf-8", n.async = !0, n.src = e.p + "" + ({0: "menu", 1: "mobilecompactexpand", 2: "low-res-32-all-css", 3: "high-res-all-css", 4: "layers", 5: "socialsignin", 7: "counter-ie", 8: "lightbox", 9: "box", 10: "low-res-32-all-white-css", 11: "low-res-20-all-css", 12: "low-res-css", 13: "embed", 14: "counter", 15: "high-res-all-white-css", 16: "ie67-css", 17: "floating-css", 18: "hi-res-css", 20: "getcounts", 21: "test", 22: "api", 23: "fbshare", 24: "pinit", 25: "link", 26: "tweet", 27: "linkedin", 28: "bookmark", 29: "pinterest_frame_tests", 30: "fancy_frame_tests", 31: "sh"}[t] || t) + "." + {0: "5ec49640f0b2fe6be6c4", 1: "a53f0df2347ee985603d", 2: "c8e22d1d04e5171dfff2", 3: "a00ef2429b9673b7796b", 4: "93e76a48c68827fb48e9", 5: "c6cc636bf6fe7117bf3f", 7: "b07f7b564443e213ff2d", 8: "a5631b180b09bb149b18", 9: "aa59c965adba228ca3a9", 10: "dc2e9b15dab6c9629d7e", 11: "349a962f84e03bd00f5d", 12: "e147452ce973bd67b475", 13: "457e16de7717cd11e8a4", 14: "a036dfcbaea7a16aeb29", 15: "76425db950eb37eacd1c", 16: "4331fe559220bb98c4bc", 17: "784686bc5153cc738af2", 18: "0691a432ed2c025caeca", 19: "fcae316cd19bf9725cdf", 20: "302217db01d613fa9d6f", 21: "50e22278c6ab7bbdbc1c", 22: "592597a602bc72f1672d", 23: "91fa5f621d8e8dd01c16", 24: "19bd8191565dbf4ae967", 25: "9e00b023c45fa9166af8", 26: "d6fc57ac52200d2662b8", 27: "9cd9997c443718920645", 28: "f4fcdbf28b6486231d62", 29: "20bad98b074fde3fc707", 30: "d2448142b5d02e02e70f", 31: "33fdd9d1addcaf1e6864"}[t] + ".js", i.appendChild(n)
        }
    }, e.m = t, e.c = i, e.p = "//s7.addthis.com/static/", e(0)
}([function (t, e, a) {
    a(289), t.exports = a(88)
}, function (t) {
    t.exports = function (t, e, a) {
        var i, o;
        if (a = a || this, t && e)for (i in t)if (t.hasOwnProperty instanceof Function) {
            if (t.hasOwnProperty(i) && (o = e.call(a, i, t[i], t), o === !1))break
        } else if (o = e.call(a, i, t[i], t), o === !1)break
    }
}, function (t, e, a) {
    var i = a(72), o = navigator.userAgent.toLowerCase(), n = {win: function (t) {
        return/windows/.test(t)
    }, xp: function (t) {
        return/windows nt 5.1/.test(t) || /windows nt 5.2/.test(t)
    }, osx: function (t) {
        return/os x/.test(t)
    }, chb: function (t) {
        return/chrome/.test(t) && parseInt(/chrome\/(.+?)\./.exec(t).pop(), 10) > 13
    }, chr: function (t) {
        return/chrome/.test(t) && !/rockmelt/.test(t)
    }, cho: function (t) {
        return/chrome\/(1[2345678]|2\d)/.test(t)
    }, iph: function (t) {
        return/iphone/.test(t) || /ipod/.test(t)
    }, dro: function (t) {
        return/android/.test(t)
    }, wph: function (t) {
        return/windows phone/.test(t)
    }, ipa: function (t) {
        return/ipad/.test(t)
    }, saf: function (t) {
        return/safari/.test(t) && !/chrome/.test(t)
    }, opr: function (t) {
        return/opera/.test(t)
    }, ffx: function (t) {
        return/firefox/.test(t)
    }, ff2: function (t) {
        return/firefox\/2/.test(t)
    }, ffn: function (t) {
        return/firefox\/((3.[6789][0-9a-z]*)|(4.[0-9a-z]*))/.test(t)
    }, ie6: function (t) {
        return/msie 6.0/.test(t)
    }, ie7: function (t) {
        return/msie 7.0/.test(t)
    }, ie8: function (t) {
        return/msie 8.0/.test(t)
    }, ie9: function (t) {
        return/msie 9.0/.test(t)
    }, ie10: function (t) {
        return/msie 10.0/.test(t)
    }, ie11: function (t) {
        return/trident\/7.0/.test(t)
    }, msi: function (t) {
        return/msie/.test(t) && !/opera/.test(t)
    }, mob: function (t) {
        return/mobile|ip(hone|od|ad)|android|blackberry|iemobile|kindle|netfront|silk-accelerated|(hpw|web)os|fennec|minimo|opera m(obi|ini)|blazer|dolfin|dolphin|skyfire|zune/.test(t)
    }};
    t.exports = function (t, e) {
        return e = e ? e.toLowerCase() : o, n[t](e)
    }, i(n, function (e, a) {
        t.exports[a] = e(o)
    }), function () {
        var e = document.compatMode, a = 1;
        "BackCompat" === e ? a = 2 : "CSS1Compat" === e && (a = 0), t.exports.mode = a, t.exports.msi && (t.exports.mod = a)
    }()
}, function (t) {
    function e() {
        return(r / 1e3 & l).toString(16) + ("00000000" + Math.floor(Math.random() * (l + 1)).toString(16)).slice(-8)
    }

    function a(t) {
        var e;
        try {
            e = new Date(1e3 * parseInt(t.substr(0, 8), 16))
        } catch (a) {
            e = new Date
        } finally {
            return e
        }
    }

    function i(t) {
        var e = a(t);
        return e.getTime() - 864e5 > (new Date).getTime()
    }

    function o(t, e) {
        var i = a(t);
        return(new Date).getTime() - i.getTime() > 1e3 * e
    }

    function n(t) {
        return t && t.match(/^[0-9a-f]{16}$/) && !i(t)
    }

    function s(t) {
        return n(t) && t.match(/^0{16}$/)
    }

    t.exports = {makeCUID: e, isValidCUID: n, isOptOutCUID: s, isCUIDOlderThan: o};
    var l = 4294967295, r = (new Date).getTime()
}, function (t, e, a) {
    var i = a(38), o = {}, n = document, s = window;
    t.exports = function (t, e, a, l, r, h) {
        if (!o[t] || h) {
            var c = n.createElement("script"), d = "https:" === s.location.protocol, v = "", f = r ? r : n.getElementsByTagName("head")[0] || n.documentElement;
            return c.setAttribute("type", "text/javascript"), a && c.setAttribute("async", "async"), l && c.setAttribute("id", l), (s.chrome && s.chrome.self || s.safari && s.safari.extension) && (v = d ? "https:" : "http:", 0 === t.indexOf("//") && (t = v + t)), c.src = (e || 0 === t.indexOf("//") ? "" : v + i()) + t, f.insertBefore(c, f.firstChild), o[t] = 1, c
        }
        return 1
    }
}, function (t, e, a) {
    function i(t) {
        var e = s(document.cookie, ";");
        return e[t]
    }

    function o(t, e, a, i, o) {
        var n = t + "=" + e;
        o || (o = new Date, o.setYear(o.getFullYear() + 2)), a || (n += "; expires=" + o.toUTCString()), n += "; path=/;", i || (n += " domain=", n += l("msi") ? ".addthis.com" : "addthis.com"), document.cookie = n
    }

    function n(t, e) {
        o(t, "", !1, !Boolean(e), new Date(0))
    }

    var s = a(6), l = a(2);
    t.exports = {read: i, write: o, kill: n}
}, function (t, e, a) {
    var i = a(249), o = a(216);
    t.exports = function (t, e) {
        return e = void 0 !== e ? e : "&", t = void 0 !== t ? t : "", o(t.split(e), function (t, e) {
            try {
                var a = e.split("="), o = i(window.decodeURIComponent(a[0])), n = i(window.decodeURIComponent(a.slice(1).join("=")));
                o && (t[o] = n)
            } catch (s) {
            }
            return t
        }, {})
    }
}, function (t) {
    function e(t) {
        return t.match(/(([^\/\/]*)\/\/|\/\/)?([^\/\?\&\#]+)/i)[0]
    }

    function a(t) {
        return t.replace(e(t), "")
    }

    function i(t) {
        return t.replace(/^(http|https):\/\//, "").split("/").shift()
    }

    function o(t) {
        var e, a;
        if (t) {
            if (-1 !== t.search(/(?:\:|\/\/)/))return t;
            if (-1 !== t.search(/^\//))return window.location.origin + t;
            if (-1 !== t.search(/(?:^\.\/|^\.\.\/)/)) {
                e = /\.\.\//g;
                var i = 0 === t.search(e) && t.match(e).length || 1, o = window.location.href.replace(/\/$/, "").split("/");
                return t = t.replace(e, "").replace(a, ""), o.slice(0, o.length - i).join("/") + "/" + t
            }
            return window.location.href.match(/(.*\/)/)[0] + t
        }
    }

    function n(t) {
        return t.split("//").pop().split("/").shift().split("#").shift().split("?").shift().split(".").slice(-2).join(".")
    }

    t.exports = {getDomain: e, getQueryString: a, getDomainNoProtocol: i, getAbsoluteFromRelative: o, getHost: n}
}, function (t, e, a) {
    function i(t) {
        return t === Object(t)
    }

    function o(t) {
        return"[object Array]" === Object.prototype.toString.call(t)
    }

    function n(t) {
        var e;
        for (e in t)if (t.hasOwnProperty(e))return!1;
        return!0
    }

    var s = a(303), l = a(1), r = {};
    l(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t, e) {
        r[e.toLowerCase()] = function (t) {
            return s(t) === "[object " + e + "]"
        }
    }), r["function"] = function (t) {
        return"function" == typeof t
    }, t.exports = {string: r.string, "function": r["function"], number: r.number, emptyObj: n, object: i, array: Array.isArray || o}
}, function (t) {
    function e(t, e, a, i) {
        e && (e.attachEvent ? e[(t ? "detach" : "attach") + "Event"]("on" + a, i) : e[(t ? "remove" : "add") + "EventListener"](a, i, !1))
    }

    function a(t, a, i) {
        e(0, t, a, i)
    }

    function i(t, a, i) {
        e(1, t, a, i)
    }

    t.exports = {listen: a, unlisten: i}
}, function (t, e, a) {
    var i = a(6);
    t.exports = function (t) {
        var e, a = t.indexOf("#");
        return e = -1 !== a ? t.substring(a) : "", i(e.replace(/^[^\#]+\#?|^\#?/, ""))
    }
}, function (t) {
    t.exports = function (t, e) {
        var a, i = 291;
        for (e = e || 32, a = 0; t && a < t.length; a++)i = i * (t.charCodeAt(a) + a) + 3 & 1048575;
        return(16777215 & i).toString(e)
    }
}, function (t) {
    function e(t) {
        return"number" == typeof t && t > -1 && t % 1 == 0 && a >= t
    }

    var a = Math.pow(2, 53) - 1;
    t.exports = e
}, function (t) {
    var e, a = window, i = a.console, o = 0, n = !i || "undefined" == typeof i.log, s = (Array.prototype.slice, ["error", "warn", "info", "debug"]), l = s.length;
    try {
        !n && a.location.hash.indexOf("atlog=1") > -1 && (o = 1)
    } catch (r) {
    }
    for (e = {level: o}; --l >= 0;)!function (t, a) {
        e[a] = n ? function () {
        } : function () {
        }
    }(l, s[l]);
    t.exports = e
}, function (t) {
    t.exports = function () {
        var t = [];
        return t.toString = function () {
            for (var t = [], e = 0; e < this.length; e++) {
                var a = this[e];
                t.push(a[2] ? "@media " + a[2] + "{" + a[1] + "}" : a[1])
            }
            return t.join("")
        }, t
    }
}, function (t) {
    function e(t, e) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a], n = r[i.id];
            if (n) {
                n.refs++;
                for (var s = 0; s < n.parts.length; s++)n.parts[s](i.parts[s]);
                for (; s < i.parts.length; s++)n.parts.push(o(i.parts[s], e))
            } else {
                for (var l = [], s = 0; s < i.parts.length; s++)l.push(o(i.parts[s], e));
                r[i.id] = {id: i.id, refs: 1, parts: l}
            }
        }
    }

    function a(t) {
        for (var e = [], a = {}, i = 0; i < t.length; i++) {
            var o = t[i], n = o[0], s = o[1], l = o[2], r = o[3], h = {css: s, media: l, sourceMap: r};
            a[n] ? a[n].parts.push(h) : e.push(a[n] = {id: n, parts: [h]})
        }
        return e
    }

    function i() {
        var t = document.createElement("style"), e = d();
        return t.type = "text/css", e.appendChild(t), t
    }

    function o(t, e) {
        var a, o, n;
        if (e.singleton) {
            var r = f++;
            a = v || (v = i()), o = s.bind(null, a, r, !1), n = s.bind(null, a, r, !0)
        } else a = i(), o = l.bind(null, a), n = function () {
            a.parentNode.removeChild(a)
        };
        return o(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)return;
                o(t = e)
            } else n()
        }
    }

    function n(t, e, a) {
        var i = ["/** >>" + e + " **/", "/** " + e + "<< **/"], o = t.lastIndexOf(i[0]), n = a ? i[0] + a + i[1] : "";
        if (t.lastIndexOf(i[0]) >= 0) {
            var s = t.lastIndexOf(i[1]) + i[1].length;
            return t.slice(0, o) + n + t.slice(s)
        }
        return t + n
    }

    function s(t, e, a, i) {
        var o = a ? "" : i.css;
        if (t.styleSheet)t.styleSheet.cssText = n(t.styleSheet.cssText, e, o); else {
            var s = document.createTextNode(o), l = t.childNodes;
            l[e] && t.removeChild(l[e]), l.length ? t.insertBefore(s, l[e]) : t.appendChild(s)
        }
    }

    function l(t, e) {
        var a = e.css, i = e.media, o = e.sourceMap;
        if (o && "function" == typeof btoa)try {
            a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(o)) + " */", a = '@import url("data:text/css;base64,' + btoa(a) + '")'
        } catch (n) {
        }
        if (i && t.setAttribute("media", i), t.styleSheet)t.styleSheet.cssText = a; else {
            for (; t.firstChild;)t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(a))
        }
    }

    var r = {}, h = function (t) {
        var e;
        return function () {
            return"undefined" == typeof e && (e = t.apply(this, arguments)), e
        }
    }, c = h(function () {
        return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), d = h(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), v = null, f = 0;
    t.exports = function (t, i) {
        i = i || {}, "undefined" == typeof i.singleton && (i.singleton = c());
        var o = a(t);
        return e(o, i), function (t) {
            for (var n = [], s = 0; s < o.length; s++) {
                var l = o[s], h = r[l.id];
                h.refs--, n.push(h)
            }
            if (t) {
                var c = a(t);
                e(c, i)
            }
            for (var s = 0; s < n.length; s++) {
                var h = n[s];
                if (0 === h.refs) {
                    for (var d = 0; d < h.parts.length; d++)h.parts[d]();
                    delete r[h.id]
                }
            }
        }
    }
}, function (t) {
    t.exports = function e(t) {
        if (null == t || "object" != typeof t)return t;
        if (t instanceof Object) {
            var a = {};
            if ("function" == typeof t.hasOwnProperty)for (var i in t)a[i] !== t && t.hasOwnProperty(i) && void 0 !== t[i] && (a[i] = e(t[i]));
            return a
        }
        return null
    }
}, function (t, e, a) {
    function i(t, e) {
        var a = {};
        return c(t, function (t, i) {
            a[i] = void 0 !== t ? t : e(i)
        }), a
    }

    function o() {
        return i(s("name", "list"), h)
    }

    function n() {
        function t() {
            return""
        }

        return i(l("url"), t)
    }

    function s(t, e) {
        var a, i, o = v[t], n = {};
        return o && o[e] ? o[e] : (a = l(t), i = l(e), c(a, function (t, e) {
            i[e] !== !1 && (n[e] = t)
        }), void 0 === o && (o = {}), o[e] = n, n)
    }

    function l(t) {
        var e = {};
        return d[t] ? d[t] : (c(r, function (a, i) {
            e[i] = a[t]
        }), d[t] = e, e)
    }

    var r = a(32), h = a(95), c = a(72), d = {}, v = {};
    t.exports = {getObjectWithProp: l, list: o(), map: n()}
}, , function (t, e, a) {
    function i(t) {
        return h(g.cookie, ";")[t]
    }

    function o() {
        return u ? 1 : (r("xtc", 1), 1 == i("xtc") && (u = 1), l("xtc", 1), u)
    }

    function n(t) {
        var e, a, i, o = t || _ate.dh || _ate.du || (_ate.dl ? _ate.dl.hostname : ""), n = v.getDomain(o);
        if (f.test(n))return!0;
        a = d(), i = ["usarmymedia", "govdelivery"];
        for (e in i)if (a == i[e])return!0;
        return!1
    }

    function s(t) {
        _atc.xck || n(t) && (_atc.xck = 1)
    }

    function l(t, e) {
        g.cookie && (g.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/" + (e ? "; domain=" + (c("msi") ? "" : ".") + "addthis.com" : ""))
    }

    function r(t, e, a, i, o) {
        p.at_sub || n(), _atc.xck || i && (p.addthis_config || {}).data_use_cookies_ondomain === !1 || (p.addthis_config || {}).data_use_cookies === !1 || (o || (o = new Date, o.setYear(o.getFullYear() + 2)), document.cookie = t + "=" + e + (a ? "" : "; expires=" + o.toUTCString()) + "; path=/;" + (i ? "" : " domain=" + (c("msi") ? "" : ".") + "addthis.com"))
    }

    var h = a(6), c = a(2), d = a(98), v = a(7), f = /(?:\.mil|\.gov)$/, g = document, p = window, u = 0;
    t.exports = {rck: i, sck: r, kck: l, cww: o, gov: s, isgv: n}
}, function (t, e, a) {
    var i = a(2), o = a(16), n = a(35), s = a(28), l = a(111), r = a(81), h = a(83), c = window, d = c.encodeURIComponent;
    t.exports = function (t, e, a, c) {
        var v = _ate.share.uadd, f = h(_ate).clearOurFragment;
        if ("more" === t && s() >= 300 && !i("wph") && !i("iph") && !i("dro")) {
            var g = o(a || ("undefined" == typeof _atw ? addthis_share : _atw.share));
            g.url = d(g.url), g.title = d(g.title || (addthis_share || {}).title || "");
            var c = "undefined" == typeof _atw ? c : _atw.conf, p = _atc.rsrcs.bookmark + "#ats=" + d(n(g)) + "&atc=" + d(n(c));
            if (i("msi") && p.length > 2e3) {
                p = p.split("&atc")[0];
                var u = {product: c.product, data_track_clickback: c.data_track_clickback, pubid: c.pubid, username: c.username, pub: c.pub, ui_email_to: c.ui_email_to, ui_email_from: c.ui_email_from, ui_email_note: c.ui_email_note};
                _atw.ics(t) && (u.services_custom = _atw.ics(t)), p += "&atc=" + d(n(u))
            }
            return p
        }
        return l() + (e ? "feed.php" : "email" === t && s() >= 300 ? "tellfriend.php" : "bookmark.php") + "?v=" + s() + "&winname=addthis&" + v(t, e, a, c) + (r.dr ? "&pre=" + d(f(r.dr)) : "") + "&tt=0" + ("more" === t && i("ipa") ? "&imore=1" : "") + "&captcha_provider=" + (i("msi") ? "recaptcha" : "nucaptcha") + (_ate.pro === !0 ? "&pro=1" : "")
    }
}, function (t, e, a) {
    var i = a(30), o = a(43);
    t.exports = function n(t, e, a) {
        var s = window.decodeURIComponent;
        return t = t || "", e = e || "&", a = a || "=", i(t.split(e), function (t, i) {
            try {
                var l = i.split(a), r = o(s(l[0])), h = o(s(l.slice(1).join(a)));
                (h.indexOf(e) > -1 || h.indexOf(a) > -1) && (h = n(h, e, a)), r && (t[r] = h)
            } catch (c) {
            }
            return t
        }, {})
    }
}, function (t, e, a) {
    var i = a(30), o = a(43);
    t.exports = function (t, e) {
        return e = void 0 !== e ? e : "&", i(t,function (t, e, a) {
            return a = o(a), a && t.push(window.encodeURIComponent(a) + "=" + window.encodeURIComponent(o(e))), t
        }, []).join(e)
    }
}, function (t, e, a) {
    var i = a(12), o = a(24), n = a(47), s = "[object Array]", l = Object.prototype, r = l.toString, h = o(h = Array.isArray) && h, c = h || function (t) {
        return n(t) && i(t.length) && r.call(t) == s || !1
    };
    t.exports = c
}, function (t, e, a) {
    function i(t) {
        return null == t ? !1 : c.call(t) == s ? d.test(h.call(t)) : n(t) && l.test(t) || !1
    }

    var o = a(248), n = a(47), s = "[object Function]", l = /^\[object .+?Constructor\]$/, r = Object.prototype, h = Function.prototype.toString, c = r.toString, d = RegExp("^" + o(c).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = i
}, function (t) {
    function e(t) {
        var e = typeof t;
        return"function" == e || t && "object" == e || !1
    }

    t.exports = e
}, function (t, e, a) {
    var i = a(20), o = a(110).clickifyURL, n = a(44), s = a(3).makeCUID, l = a(16);
    t.exports = function (t, e, a, r, h, c) {
        var d = n(), v = r || e.url || "", f = e.xid || s(), g = l(e), p = a.data_track_clickback !== !1 || a.data_track_linkback || "AddThis" === d || !d;
        return 0 === v.toLowerCase().indexOf("http%3a%2f%2f") && (v = window.decodeURIComponent(v)), h && (g.xid = f, setTimeout(function () {
            (new Image).src = i("twitter" === t && c ? "tweet" : t, 0, g, a)
        }, 100)), p ? o(v, t, f) : v
    }
}, function (t, e, a) {
    var i = a(3).isValidCUID, o = a(50);
    t.exports = function (t) {
        var e;
        return t = t || "", e = o(t).shift().split("=").pop(), i(e) || t.indexOf("#at_pco=") > -1 ? t.split("#").shift() : (e = t.split("#").slice(1).join("#").split(";").shift(), 3 === e.split(".").length && (e = e.split(".").slice(0, -1).join(".")), 12 === e.length && "." === e.substr(0, 1) && /[a-zA-Z0-9\-_]{11}/.test(e.substr(1)) ? t.split("#").shift() : t)
    }
}, function (t) {
    t.exports = function () {
        return!_atc.noup && _atc.ver >= 152 ? 300 : _atc.ver
    }
}, function (t) {
    function e(t) {
        for (var e, a, i, o, s, l, r, h = "", c = 0; c < t.length;)e = t.charCodeAt(c++), a = t.charCodeAt(c++), i = t.charCodeAt(c++), o = e >> 2, s = (3 & e) << 4 | a >> 4, l = (15 & a) << 2 | i >> 6, r = 63 & i, isNaN(a) ? l = r = 64 : isNaN(i) && (r = 64), h += n.charAt(o) + n.charAt(s) + n.charAt(l) + n.charAt(r);
        return h
    }

    function a(t) {
        var e, a, i, o, s, l, r, h = "", c = 0;
        for (t = t.replace(/[^A-Za-z0-9\-_\=]/g, ""); c < t.length;)o = n.indexOf(t.charAt(c++)), s = n.indexOf(t.charAt(c++)), l = n.indexOf(t.charAt(c++)), r = n.indexOf(t.charAt(c++)), e = o << 2 | s >> 4, a = (15 & s) << 4 | l >> 2, i = (3 & l) << 6 | r, h += String.fromCharCode(e), 64 != l && (h += String.fromCharCode(a)), 64 != r && (h += String.fromCharCode(i));
        return h
    }

    function i(t) {
        var e, a, i, o, s, l = "", r = 0;
        if (/^[0-9a-fA-F]+$/.test(t))for (; r < t.length;)e = parseInt(t.charAt(r++), 16), a = parseInt(t.charAt(r++), 16), i = parseInt(t.charAt(r++), 16), o = e << 2 | (isNaN(i) ? 3 & a : a >> 2), s = (3 & a) << 4 | i, l += n.charAt(o) + (isNaN(i) ? "" : n.charAt(s));
        return l
    }

    function o(t) {
        for (var e, a, i, o, s, l = "", r = 0; r < t.length;)o = n.indexOf(t.charAt(r++)), s = r >= t.length ? 0 / 0 : n.indexOf(t.charAt(r++)), e = o >> 2, a = isNaN(s) ? 3 & o : (3 & o) << 2 | s >> 4, i = 15 & s, l += e.toString(16) + a.toString(16) + (isNaN(s) ? "" : i.toString(16));
        return l
    }

    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", s = window;
    t.exports = {atob: s.atob ? function () {
        return s.atob.apply(s, arguments)
    } : a, btoa: s.btoa ? function () {
        return s.btoa.apply(s, arguments)
    } : e, hbtoa: i, atohb: o}
}, function (t) {
    t.exports = function (t, e, a, i) {
        if (!t)return a;
        if (t instanceof Array)for (var o = 0, n = t.length, s = t[0]; n > o; s = t[++o])a = e.call(i || t, a, s, o, t); else for (var l in t)t instanceof Object ? t.hasOwnProperty(l) && (a = e.call(i || t, a, t[l], l, t)) : void 0 !== t[l] && (a = e.call(i || t, a, t[l], l, t));
        return a
    }
}, , function (t) {
    t.exports = {"100zakladok": {url: "100zakladok.ru"}, "2tag": {url: "2tag.nl", name: "2 Tag"}, "2linkme": {bg: "d8e8e8"}, flipboard: {bg: "af2026"}, tapiture: {bg: "2f5070"}, internetarchive: {bg: "fff", name: "Wayback Machine"}, whatsapp: {url: "whatsapp.com", bg: "29a628", name: "WhatsApp"}, facebook: {bg: "305891", top: 1}, twitter: {bg: "2ca8d2", top: 1}, reddit: {top: 1}, stumbleupon: {bg: "e65229", name: "StumbleUpon", top: 1}, gmail: {url: "mail.google.com", bg: "484848", top: 1}, blogger: {bg: "f8883d", top: 1}, linkedin: {bg: "4498c8", name: "LinkedIn", top: 1}, tumblr: {bg: "384853", top: 1}, delicious: {bg: "19559e", top: 1}, yahoomail: {url: "compose.mail.yahoo.com", bg: "3a234f", name: "Y! Mail", top: 1}, hotmail: {url: "hotmail.msn.com", bg: "f89839", name: "Outlook"}, a97abi: {bg: "d8e8e8"}, menu: {bg: "f8694d", url: "api.addthis.com", list: !1}, adfty: {bg: "9dcb43"}, adifni: {bg: "3888c8"}, amazonwishlist: {url: "amazon.com", name: "Amazon"}, amenme: {bg: "0872d8", name: "Amen Me!"}, aim: {url: "lifestream.aol.com", bg: "8db81d", name: "Lifestream", top: 1}, aolmail: {url: "webmail.aol.com", bg: "282828", name: "AOL Mail"}, arto: {bg: "8db81d"}, baang: {url: "baang.ir", bg: "f8ce2c"}, baidu: {url: "cang.baidu.com", bg: "1d2fe3"}, biggerpockets: {bg: "5f729d", name: "BiggerPockets"}, bitly: {url: "bit.ly", bg: "f26e2a", name: "Bit.ly"}, bizsugar: {bg: "2878ee", name: "BizSugar"}, blinklist: {}, bloggy: {url: "bloggy.se", bg: "ee2271"}, blogmarks: {url: "blogmarks.net"}, blurpalicious: {bg: "33b8f8"}, bobrdobr: {url: "bobrdobr.ru", bg: "c8e8f8", top: 1}, bonzobox: {bg: "c83828", name: "BonzoBox"}, socialbookmarkingnet: {url: "social-bookmarking.net", name: "BookmarkingNet"}, bookmarkycz: {url: "bookmarky.cz", bg: "a81818", name: "Bookmarky.cz"}, bookmerkende: {url: "bookmerken.de", bg: "558c15", name: "Bookmerken"}, box: {url: "box.net", bg: "3088b1"}, brainify: {bg: "2878ee"}, bryderi: {url: "bryderi.se", bg: "191819", name: "Bryderi.se"}, buddymarks: {name: "BuddyMarks"}, buzzzy: {}, camyoo: {bg: "ace8f7"}, care2: {bg: "d8e8e8"}, chiq: {bg: "ee2271"}, cirip: {url: "cirip.ro"}, citeulike: {url: "citeulike.org", bg: "0888c8", name: "CiteULike"}, classicalplace: {bg: "102831", name: "ClassicalPlace"}, cndig: {url: "cndig.org", bg: "d56a32"}, colivia: {url: "colivia.de", bg: "88b748", name: "Colivia.de"}, technerd: {bg: "316896", name: "Communicate"}, cosmiq: {url: "cosmiq.de", bg: "4ca8d8", name: "COSMiQ"}, curateus: {url: "curate.us", name: "Curate.us"}, digaculturanet: {url: "digacultura.net", name: "DigaCultura"}, digg: {bg: "080808", top: 1}, diggita: {url: "diggita.it", bg: "88b748"}, digo: {url: "digo.it", bg: "abd4ec"}, diigo: {bg: "0888d8"}, domelhor: {bg: "29a628", url: "domelhor.net", name: "DoMelhor"}, dotnetshoutout: {bg: "ed490d", name: ".netShoutout"}, douban: {bg: "0e7512"}, draugiem: {url: "draugiem.lv", bg: "f47312", name: "Draugiem.lv"}, dropjack: {bg: "c8e8f8"}, dzone: {}, efactor: {bg: "7797b7", name: "EFactor"}, ekudos: {url: "ekudos.nl", bg: "0c58aa", name: "eKudos"}, elefantapl: {url: "elefanta.pl", name: "elefanta.pl"}, embarkons: {bg: "f8b016"}, evernote: {bg: "7fce2c"}, extraplay: {bg: "61af2b", name: "extraplay"}, ezyspot: {bg: "d8e8f8", name: "EzySpot"}, stylishhome: {bg: "bfd08d", name: "FabDesign"}, fabulously40: {bg: "620e18"}, informazione: {url: "fai.informazione.it"}, fark: {bg: "5f729d"}, farkinda: {bg: "8808f8"}, fashiolista: {bg: "383838"}, favable: {bg: "666666", name: "FAVable"}, faves: {bg: "08aed9"}, favlogde: {url: "favlog.de", bg: "6e6e6e", name: "favlog"}, favoritende: {url: "favoriten.de", bg: "f88817", name: "Favoriten"}, favoritus: {bg: "97462e"}, financialjuice: {name: "Financial Juice"}, flaker: {url: "flaker.pl", bg: "383838"}, folkd: {}, formspring: {url: "formspring.me", bg: "4798d8"}, thefreedictionary: {bg: "4891b7", name: "FreeDictionary"}, fresqui: {bg: "4798d8"}, friendfeed: {bg: "75aaeb", name: "FriendFeed"}, funp: {bg: "d8e8e8", name: "funP"}, fwisp: {name: "fwisp"}, gamekicker: {bg: "282828"}, givealink: {url: "givealink.org", bg: "0872d8", name: "GiveALink"}, govn: {url: "my.go.vn", bg: "0ca8ec", name: "Go.vn"}, goodnoows: {bg: "884989", name: "Good Noows"}, googletranslate: {url: "translate.google.com", bg: "2c72c8", name: "Translate"}, greaterdebater: {bg: "666666", name: "GreaterDebater"}, hackernews: {url: "news.ycombinator.com", bg: "f47312", name: "Hacker News"}, hatena: {url: "b.hatena.ne.jp", bg: "08aed9", top: 1}, gluvsnap: {url: "healthimize.com", bg: "a82868", name: "Healthimize"}, hedgehogs: {url: "hedgehogs.net", bg: "080808"}, historious: {url: "historio.us", bg: "b84949", name: "historious"}, hotklix: {}, hootsuite: {}, w3validator: {url: "validator.w3.org", bg: "165496", name: "HTML Validator"}, identica: {url: "identi.ca", name: "Identi.ca"}, ihavegot: {name: "ihavegot"}, indexor: {url: "indexor.co.uk", bg: "8bd878"}, instapaper: {}, iorbix: {bg: "384853", name: "iOrbix"}, isociety: {url: "isociety.be", bg: "096898", name: "iSociety"}, iwiw: {url: "iwiw.hu", name: "iWiW"}, jamespot: {bg: "f8b034"}, jappy: {url: "jappy.de", bg: "d8d8d8", name: "Jappy Ticker", top: 1}, jumptags: {bg: "0898c7"}, kaboodle: {bg: "b0282a"}, kaevur: {bg: "080808"}, kaixin: {url: "kaixin001.com", bg: "dd394e", name: "Kaixin Repaste"}, kindleit: {url: "fivefilters.org", bg: "282828", name: "Kindle It"}, kledy: {url: "kledy.de", bg: "8db81d"}, kommenting: {}, latafaneracat: {url: "latafanera.cat", name: "La tafanera"}, librerio: {}, linksgutter: {bg: "a15fa0", name: "Links Gutter"}, linkshares: {url: "linkshares.net", bg: "0888c8", name: "LinkShares"}, linkuj: {url: "linkuj.cz", bg: "5898d9", name: "Linkuj.cz"}, livejournal: {bg: "0ca8ec", name: "LiveJournal", top: 1}, lockerblogger: {name: "LockerBlogger"}, logger24: {bg: "d83838"}, mymailru: {url: "connect.mail.ru", bg: "165496", name: "Mail.ru", top: 1}, markme: {url: "markme.me", bg: "d80808"}, margarin: {url: "mar.gar.in", name: "mar.gar.in"}, mashbord: {}, meinvz: {url: "meinvz.net", name: "meinVZ"}, mekusharim: {url: "mekusharim.walla.co.il"}, memonic: {bg: "083568"}, memori: {url: "memori.ru", bg: "ee2271", name: "Memori.ru"}, meneame: {url: "meneame.net", name: "MenÃ©ame", top: 1}, myvidster: {bg: "93F217", name: "myVidster"}, live: {url: "profile.live.com", bg: "d8e8f8", name: "Messenger", top: 1}, misterwong: {url: "mister-wong.com", bg: "a81818", name: "Mister Wong"}, misterwong_de: {url: "mister-wong.de", name: "Mister Wong DE", bg: "080808", list: !1, top: 1}, moemesto: {url: "moemesto.ru", name: "Moemesto.ru"}, moikrug: {url: "moikrug.ru", bg: "72aed0"}, mrcnetworkit: {url: "mrcnetwork.it", bg: "abd4ec", name: "mRcNEtwORK"}, myspace: {bg: "282828", top: 1}, n4g: {bg: "d80808", name: "N4G"}, naszaklasa: {url: "nk.pl", bg: "4077a7", name: "Nasza-klasa"}, netlog: {bg: "282828", name: "NetLog"}, netvibes: {bg: "48d828"}, netvouz: {}, newsmeback: {bg: "316896", name: "NewsMeBack"}, newstrust: {url: "newstrust.net", name: "NewsTrust"}, newsvine: {bg: "64a556"}, nujij: {url: "nujij.nl", bg: "c8080a"}, odnoklassniki_ru: {url: "odnoklassniki.ru", bg: "d57819", name: "Odnoklassniki", top: 1}, oknotizie: {url: "oknotizie.virgilio.it", name: "OKNOtizie", top: 1}, openthedoor: {url: "otd.to", name: "OpenTheDoor"}, dashboard: {bg: "f8694d", url: "api.addthis.com", list: !1}, oyyla: {bg: "f6cf0e"}, packg: {}, pafnetde: {url: "pafnet.de", bg: "f4080d", name: "Pafnet"}, pdfonline: {url: "savepageaspdf.pdfonline.com", name: "PDF Online"}, pdfmyurl: {bg: "f89823", name: "PDFmyURL"}, phonefavs: {name: "PhoneFavs"}, planypus: {url: "planyp.us", bg: "0872d8"}, plaxo: {bg: "318ef6"}, plurk: {bg: "d56a32"}, posteezy: {bg: "f8ce2c"}, printfriendly: {bg: "88b748", name: "PrintFriendly"}, pusha: {url: "pusha.se", bg: "0878ba"}, qrfin: {url: "qrf.in", name: "QRF.in"}, quantcast: {bg: "0878ba"}, qzone: {url: "sns.qzone.qq.com"}, pocket: {url: "getpocket.com"}, rediff: {url: "share.rediff.com", bg: "d80808", name: "Rediff MyPage"}, redkum: {bg: "f4080d", name: "RedKum"}, scoopat: {url: "scoop.at", bg: "d80819", name: "Scoop.at"}, scoopit: {url: "scoop.it", bg: "9dcb43", name: "Scoop.it"}, sekoman: {url: "sekoman.lv", bg: "2a58a9"}, select2gether: {url: "www2.select2gether.com", bg: "f8b016", name: "Select2Gether"}, shaveh: {url: "shaveh.co.il"}, shetoldme: {name: "She Told Me"}, sinaweibo: {url: "v.t.sina.com.cn", bg: "f5ca59", name: "Sina Weibo"}, smiru: {url: "smi2.ru", bg: "af122b", name: "SMI"}, sodahead: {name: "SodaHead"}, sonico: {bg: "0ca8ec"}, spinsnap: {bg: "9dcb43", name: "SpinSnap"}, sulia: {}, yiid: {url: "spread.ly", bg: "984877", name: "Spreadly"}, springpad: {url: "springpadit.com", bg: "f5ca59", name: "springpad"}, startaid: {bg: "4498c8"}, startlap: {url: "startlap.hu", bg: "4891b7"}, storyfollower: {bg: "f8ce2c", name: "StoryFollower"}, studivz: {url: "studivz.net", name: "studiVZ"}, stuffpit: {bg: "2c72c8"}, stumpedia: {}, sunlize: {bg: "d80808"}, svejo: {url: "svejo.net", bg: "f89823"}, symbaloo: {bg: "4077a7"}, taaza: {bg: "b52918", name: "TaazaShare"}, tagza: {bg: "4888f8"}, thewebblend: {bg: "bfd08d", name: "The Web Blend"}, thinkfinity: {url: "community.thinkfinity.org", bg: "bfd08d"}, thisnext: {bg: "282828", name: "ThisNext"}, thrillon: {bg: "191919", name: "Thrill On"}, throwpile: {bg: "f8b034"}, topsitelernet: {url: "ekle.topsiteler.net", name: "TopSiteler"}, transferr: {bg: "263847"}, tuenti: {bg: "5f729d", top: 1}, tulinq: {bg: "0e7512"}, tvinx: {bg: "0878a7"}, twitthis: {name: "TwitThis"}, typepad: {bg: "080808"}, upnews: {url: "upnews.it", bg: "666666", name: "Upnews.it"}, urlaubswerkde: {url: "urlaubswerk.de", bg: "f89823", name: "Urlaubswerk"}, viadeo: {top: 1}, virb: {bg: "08aed9"}, visitezmonsite: {bg: "e8f8f8", name: "VisitezMonSite"}, vk: {url: "vkontakte.ru", name: "VKontakte", bg: "325078", top: 1}, vkrugudruzei: {url: "vkrugudruzei.ru", bg: "e65229", name: "vKruguDruzei"}, voxopolis: {bg: "1097eb", name: "VOX Social"}, vybralisme: {url: "vybrali.sme.sk", bg: "318ef6", name: "VybraliSME"}, webnews: {url: "webnews.de", bg: "f4080d"}, domaintoolswhois: {url: "domaintools.com", bg: "305891", name: "Whois Lookup"}, wanelo: {}, windows: {url: "api.addthis.com", name: "Windows Gadget"}, wirefan: {bg: "d8f8f8", name: "WireFan"}, wishmindr: {name: "WishMindr"}, wordpress: {bg: "585858", name: "WordPress", top: 1}, wykop: {url: "wykop.pl", bg: "5898c7", top: 1}, xanga: {}, xing: {name: "XING"}, yahoobkm: {url: "bookmarks.yahoo.com", bg: "3a234f", name: "Y! Bookmarks", top: 1}, yammer: {bg: "2ca8d2"}, yardbarker: {}, yigg: {url: "yigg.de"}, yoolink: {url: "go.yoolink.to", bg: "9dcb43"}, yorumcuyum: {bg: "666666"}, youmob: {bg: "191847", name: "YouMob"}, yuuby: {bg: "290838"}, zakladoknet: {url: "zakladok.net", name: "Zakladok.net"}, ziczac: {url: "ziczac.it", name: "ZicZac"}, zingme: {url: "link.apps.zing.vn", name: "ZingMe"}, advqr: {name: "ADV QR"}, apsense: {bg: "d78818", name: "APSense"}, azadegi: {}, balltribe: {bg: "620e18", name: "BallTribe"}, beat100: {bg: "d8d8d8"}, bland: {name: "Bland takkinn"}, blogkeen: {bg: "db69b6"}, buffer: {}, cleanprint: {bg: "97ba7a", name: "CleanPrint"}, cleansave: {bg: "64a556", name: "CleanSave"}, cssbased: {bg: "394918", name: "CSS Based"}, dudu: {bg: "3d3d3d"}, email: {bg: "738a8d", top: 1}, favorites: {bg: "f5ca59", top: 1}, foodlve: {name: "Cherry Share"}, gg: {name: "GG"}, giftery: {bg: "484848", name: "Giftery.me"}, gigbasket: {bg: "f8b034", name: "GigBasket"}, google: {bg: "0868b9", top: 1}, google_plusone_share: {bg: "ce4d39", name: "Google+", top: 1}, irepeater: {name: "IRepeater"}, jolly: {bg: "666666"}, ketnooi: {bg: "1888b9"}, lidar: {bg: "2ca8d2", name: "LiDAR Online"}, link: {bg: "8e8e8e", name: "Copy Link"}, mailto: {name: "Email App", top: 1}, mashant: {bg: "085878"}, me2day: {bg: "7858c8", name: "me2day"}, mendeley: {bg: "af122b"}, mixi: {}, pinterest_share: {bg: "c82828", name: "Pinterest", top: 1}, pinterest: {bg: "c82828", name: "Pinterest", list: !1, top: 1}, print: {bg: "738a8d", top: 1}, qrsrc: {name: "QRSrc.com"}, raiseyourvoice: {bg: "666666", name: "Write Your Rep"}, researchgate: {bg: "6e6e6e", name: "ResearchGate"}, safelinking: {bg: "3888c8"}, sharer: {bg: "0888C8", name: "WebMoney"}, skyrock: {bg: "282828", name: "Skyrock Blog"}, supbro: {bg: "383838", name: "SUP BRO"}, surfingbird: {bg: "0ca8ec"}, taringa: {bg: "165496", name: "Taringa!"}, thefancy: {bg: "4ca8d8", name: "The Fancy"}, toly: {name: "to.ly"}, webshare: {bg: "080808", name: "WebShare"}, werkenntwen: {bg: "72aed0", name: "WerKenntWen"}, wowbored: {bg: "738a8d", name: "WowBored"}, yookos: {bg: "0898d8"}}
}, , function (t, e, a) {
    var i = a(30), o = a(42);
    t.exports = function (t, e) {
        return e || (e = t.object || t.obj, t = t.subject || t.subj), i(o(arguments, 1), function (t, e) {
            return i(e, function (t, e, a) {
                return t && (t[a] = e), t
            }, t)
        }, t)
    }
}, function (t, e, a) {
    var i = a(30), o = a(43);
    t.exports = function n(t, e, a) {
        var s = window.encodeURIComponent;
        return e = e || "&", a = a || "=", i(t,function (t, i, l) {
            return l = o(l), l && t.push(s(l) + a + s(o("object" == typeof i ? n(i, e, a) : i))), t
        }, []).join(e)
    }
}, function (t, e, a) {
    var i = a(112);
    t.exports = function (t) {
        i().push(t)
    }
}, function (t, e, a) {
    var i = window.encodeURIComponent, o = a(26), n = a(27), s = a(53), l = a(2);
    t.exports = function (t, e, a) {
        var r = t.share_url_transforms || t.url_transforms || {}, h = n(s(t.url, r, t, "mailto")), c = t.title || h;
        return e = e || {}, "mailto:?body=" + i(o("mailto", t, e, h, a)) + "&subject=" + (l("iph") ? c : i(c))
    }
}, function (t) {
    t.exports = function () {
        return window.addthis_cdn || window._atr
    }
}, function (t) {
    t.exports = []
}, function (t, e, a) {
    function i(t) {
        var e = t.params || {};
        return t.sendViewID && (e.uid = c()), t.sendVisitID && (e.uvs = n.getID()), t.sendPubID && (e.pub = l()), t.sendDomainPort && (e.dp = s(d.du)), t.sendClientVersion && window._atc.rev && (e.rev = window._atc.rev), e
    }

    function o(t, e) {
        var a = i(e || {}), o = r(a), n = new Image(1, 1);
        return n.src = t.indexOf("?") > -1 ? t + "&" + o : t + "?" + o, h.push(n), n
    }

    var n = a(130), s = a(7).getDomainNoProtocol, l = a(44), r = a(35), h = a(118), c = a(270), d = a(81);
    t.exports = o
}, function (t) {
    t.exports = function (t) {
        t.style && (t.style.width = t.style.height = "1px", t.style.position = "absolute", t.style.top = "-9999px", t.style.zIndex = 1e5)
    }
}, function (t) {
    t.exports = function (t) {
        var e = Array.prototype.slice;
        return e.apply(t, e.call(arguments, 1))
    }
}, function (t) {
    t.exports = function (t) {
        return t += "", t.replace(/(^\s+|\s+$)/g, "")
    }
}, function (t) {
    t.exports = function () {
        var t = window, e = t.addthis_config_msg || {}, a = t.addthis_config || {};
        return encodeURIComponent(e.pubid || e.username || e.pub || a.pubid || a.username || t.addthis_pub || "")
    }
}, function (t) {
    t.exports = function () {
        return window.addthis_language || (window.addthis_config || {}).ui_language || (_ate.bro.msi ? navigator.userLanguage : navigator.language) || "en"
    }
}, function (t, e, a) {
    var i = a(1);
    t.exports = function (t, e, o) {
        var n = a(8), s = n.array, l = n.object, r = n["function"], h = l(t), c = s(t), d = c ? [] : {}, v = o || this;
        if (!r(e))throw new TypeError(e + " is not a function");
        return c || h ? (i(t, function (t, a, i) {
            e && e.call(v, t, a, i) && (s(d) ? d.push(a) : d[t] = a)
        }), d) : []
    }
}, function (t) {
    function e(t) {
        return t && "object" == typeof t || !1
    }

    t.exports = e
}, function (t, e, a) {
    var i = a(12), o = a(24), n = a(25), s = a(242), l = o(l = Object.keys) && l, r = l ? function (t) {
        if (t)var e = t.constructor, a = t.length;
        return"function" == typeof e && e.prototype === t || "function" != typeof t && a && i(a) ? s(t) : n(t) ? l(t) : []
    } : s;
    t.exports = r
}, function (t, e, a) {
    var i = a(2);
    t.exports = function () {
        return!(i("msi") && "backcompat" === document.compatMode.toLowerCase()) && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
    }()
}, function (t, e, a) {
    var i = a(3).isValidCUID, o = a(2), n = a(1);
    t.exports = function (t) {
        var e;
        if (t = t || "", o("msi") && t instanceof Object && !t.length) {
            var a = "";
            n(t, function (t, e) {
                a ? a += "&" + t + "=" + e : a = t + "=" + e
            }), t = a
        }
        return e = t.split("#").pop().split(",").shift().split("=").pop(), i(e) ? t.split("#").pop().split(",") : [""]
    }
}, function (t) {
    t.exports = function (t) {
        var e, a, i = t.split("?").pop().toLowerCase().split("&"), o = /^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i;
        for (a = 0; a < i.length; a++)if (e = o.exec(i[a]))return e[1];
        return!1
    }
}, function (t, e, a) {
    var i = a(89).wasRequestMade, o = a(38), n = a(40), s = a(2), l = a(89).get, r = (a(4), !1), h = window;
    t.exports = function () {
        var t = o();
        try {
            l(), r || (s("ie6") && (n(_atc.rsrcs.widgetpng), n(t + "static/t00/logo1414.gif"), n(t + "static/t00/logo88.gif"), h.addthis_feed && n("static/r05/feed00.gif", 1)), i() && !h.addthis_translations ? setTimeout(function () {
                r = 1, a.e(0, function () {
                    a(18)
                })
            }) : (r = 1, a.e(0, function () {
                a(18)
            })))
        } catch (e) {
        }
    }
}, function (t, e, a) {
    var i = a(274), o = a(268), n = a(27), s = a(265);
    t.exports = function (t, e, a, l) {
        return e || (e = {}), e.remove || (e.remove = []), e.remove.push && (e.remove.push("sms_ss"), e.remove.push("at_xt"), e.remove.push("at_pco"), e.remove.push("fb_ref"), e.remove.push("fb_source")), e.remove && (t = i(t, e.remove)), e.clean && (t = o(t)), e.defrag && (t = n(t)), e.add && (t = s(t, e.add, a, l)), t
    }
}, function (t) {
    t.exports = function (t, e) {
        var a = window;
        a.addthis_share || (a.addthis_share = {}), (e || t !== addthis_share.url) && (addthis_share.imp_url = 0)
    }
}, function (t) {
    t.exports = function () {
        return{DIRECT: 0, SEARCH: 1, ON_DOMAIN: 2, OFF_DOMAIN: 4}
    }
}, , function (t, e, a) {
    var i = a(121), o = a(84)().PINTEREST;
    t.exports = function () {
        i(o)
    }
}, function (t, e, a) {
    function i(t, e, a, i, o) {
        this.type = t, this.triggerType = e || t, this.target = a || i, this.triggerTarget = i || a, this.data = o || {}, this.serialize = function () {
            if (f) {
                var t = g({}, this.data);
                return t.element = null, JSON.stringify({remoteEvent: {data: t, type: this.type, triggerType: this.triggerType, target: {}, triggerTarget: {}}})
            }
            return""
        }
    }

    function o(t, e) {
        this.target = t, this.queues = {}, this.remoteDispatcher = null, this.remoteFilter = null, this.defaultEventType = e || i
    }

    function n(t) {
        var e = this.queues;
        return e[t] || (e[t] = []), e[t]
    }

    function s(t, e) {
        this.getQueue(t).push(e)
    }

    function l(t, e) {
        t && t.postMessage && (this.remoteDispatcher = t, this.remoteFilter = e)
    }

    function r(t, e) {
        var a = this, i = function () {
            var o = Array.prototype.slice.call(arguments, 0);
            e.apply(this, o), a.removeEventListener(t, i)
        };
        a.addEventListener(t, i)
    }

    function h(t, e) {
        var a = this.getQueue(t), i = "string" == typeof a ? a.indexOf(e) : -1;
        -1 !== i && a.splice(i, 1)
    }

    function c(t, e, a, i) {
        var o = this;
        i ? o.dispatchEvent(new o.defaultEventType(t, t, e, o.target, a)) : setTimeout(function () {
            o.dispatchEvent(new o.defaultEventType(t, t, e, o.target, a))
        })
    }

    function d(t) {
        var e, a = t.target, i = this.getQueue(t.type);
        for (e = 0; e < i.length; e++)i[e].call(a, t.clone());
        try {
            !f || !this.remoteDispatcher || "function" != typeof this.remoteDispatcher.postMessage || this.remoteFilter && 0 !== t.type.indexOf(this.remoteFilter) || this.remoteDispatcher.postMessage(t.serialize(), "*")
        } catch (o) {
        }
    }

    function v(t) {
        return t ? (u(w, function (e, a) {
            t[e] = p(a, this)
        }, this), t) : void 0
    }

    var f = a(253), g = a(34), p = a(69), u = a(1), m = function () {
    }, w = {constructor: o, getQueue: n, addEventListener: s, once: r, removeEventListener: h, addRemoteDispatcher: l, dispatchEvent: d, fire: c, decorate: v}, D = {constructor: i, bubbles: !1, preventDefault: m, stopPropagation: m, clone: function () {
        return new this.constructor(this.type, this.triggerType, this.target, this.triggerTarget, g({}, this.data))
    }};
    t.exports = {PolyEvent: i, EventDispatcher: o}, g(i.prototype, D), g(o.prototype, w)
}, function (t, e, a) {
    var i = a(51);
    t.exports = function (t) {
        var e = ".com/", a = ".org/", o = (t || "").toLowerCase(), n = 0;
        return o && o.match(/ws\/results\/(web|images|video|news)/) ? n = 1 : o && o.indexOf(!1) && (o.match(/google.*\/(search|url|aclk|m\?)/) || o.indexOf("/pagead/aclk?") > -1 || o.indexOf(e + "url") > -1 || o.indexOf(e + "l.php") > -1 || o.indexOf("/search?") > -1 || o.indexOf("/search/?") > -1 || o.indexOf("search?") > -1 || o.indexOf("yandex.ru/clck/jsredir?") > -1 || o.indexOf(e + "search") > -1 || o.indexOf(a + "search") > -1 || o.indexOf("/search.html?") > -1 || o.indexOf("search/results.") > -1 || o.indexOf(e + "s?bs") > -1 || o.indexOf(e + "s?wd") > -1 || o.indexOf(e + "mb?search") > -1 || o.indexOf(e + "mvc/search") > -1 || o.indexOf(e + "web") > -1 || o.match(/aol.*\/aol/) || o.indexOf("hotbot" + e) > -1) && 0 != i(t) && (n = 1), Boolean(n)
    }
}, function (t) {
    t.exports = function (t, e, a) {
        var i, o = [];
        if (a = void 0 !== a ? a : this, null === t || void 0 === t)return o;
        for (i in t)t.hasOwnProperty(i) && o.push(e.call(a, t[i], i));
        return o
    }
}, function (t) {
    var e = window, a = !!e.postMessage && -1 !== ("" + e.postMessage).toLowerCase().indexOf("[native code]");
    t.exports = a
}, function (t, e, a) {
    var i = a(32), o = a(77), n = "e8e8e8";
    t.exports = function (t) {
        var e = i[t] || o[t];
        return("#" + (e && e.bg || n)).toLowerCase()
    }
}, function (t, e, a) {
    var i = a(6);
    t.exports = function (t) {
        var e, a = t.indexOf("?");
        return e = -1 !== a ? t.substring(a) : "", i(e.replace(/^[^\?]+\??|^\??/, ""))
    }
}, function (t, e, a) {
    function i(t) {
        var e = l[t] && l[t].top, a = r[t] && r[t].top;
        return e || a
    }

    function o(t) {
        var e, a = {};
        return v[t] ? v[t] : (e = c(s(t)), h(e, function (t, e) {
            t && (a[e] = t)
        }), v[t] = a, a)
    }

    function n(t) {
        var e = !1;
        return h(d, function (a) {
            a === t && (e = !0)
        }), e
    }

    var s = a(17).getObjectWithProp, l = a(32), r = a(77), h = a(72), c = a(245), d = ["tweet", "google_plusone", "stumbleupon_badge", "pinterest_pinit", "facebook_send", "linkedin_counter", "facebook_share", "counter"], v = {};
    t.exports = {isTop: i, top: o("top"), isNative: n}
}, , , , function (t, e, a) {
    var i = a(57), o = a(91), n = a(139), s = a(20), l = a(279), r = a(298), h = a(37), c = a(27), d = a(109), v = a(26), f = a(2), g = a(120), p = a(82), u = a(78), m = a(117), w = a(53), D = a(44), F = a(16), x = a(148), b = a(297), C = window, E = document;
    t.exports = function (t, e) {
        var a = C.addthis_config ? F(C.addthis_config) : {}, z = C.addthis_share ? F(C.addthis_share) : {};
        switch (e = e || {}, a.product = e.product, a.pubid = D(), z.service = t, z.url = void 0 !== e.url ? e.url : z.url, z.title = void 0 !== e.title ? e.title : z.title, z.description = void 0 !== e.description ? e.description : z.description, t) {
            case"addthis":
            case"more":
            case"bkmore":
            case"compact":
                a.ui_pane = "", f.mob ? b() : u(E.body, "more", "", "", a, z);
                break;
            case"mailto":
                C.location.href = h(z, a, 1);
                break;
            case"email":
                f("mob") ? C.location.href = h(z, a, 1) : (a.ui_pane = "email", -1 === document.location.href.search(/bookmark\.php/) ? _ate.share.inBm() && _ate.xf.upm ? _ate.xf.send(window.parent, "addthis.expanded.pane", {pane: "email"}) : _ate.menu.open((_ate.maf || {}).sib, a, z) : (l(t, z, a), a.ui_pane = "email", u(E.body, "more", "", "", a, z)));
                break;
            case"pinterest":
            case"pinterest_share":
                l("pinterest_share", z, a), i(), _ate.menu.close();
                break;
            case"thefancy":
                l(t, z, a), o(), _ate.menu.close();
                break;
            case"favorites":
                var _ = z.url, M = z.title, k = f("win") ? "Control" : "Command", y = z.share_url_transforms || z.url_transforms, A = "Press <" + k + ">+D to bookmark in ";
                M = x(M), _ = c(_), _ = w(_, y, z, t), _ = v(t, z, a, _, 1), f("ipa") ? alert("Tap the <plus> to bookmark in Safari") : f("saf") || f("chr") ? alert(A + (f("chr") ? "Chrome" : "Safari")) : f("opr") ? alert(A + "Opera") : f("ffx") && !C.sidebar.addPanel ? alert(A + "Firefox") : E.all ? C.external.AddFavorite(_, M) : C.sidebar.addPanel(M, _, "");
                break;
            case"print":
                l(t, z, a), r();
                break;
            case"link":
                a.ui_pane = "link", -1 === document.location.href.search(/bookmark\.php/) ? _ate.share.inBm() && _ate.xf.upm ? _ate.xf.send(window.parent, "addthis.expanded.pane", {pane: "link"}) : _ate.menu.open((_ate.maf || {}).sib, a, z) : u(E.body, "link", "", "", a, z);
                break;
            case"whatsapp":
                n(z, a), _ate.menu.close();
                break;
            default:
                "twitter" === t && (z.title = window.encodeURIComponent(z.title)), d(t) ? p(t, z, a) : _ate.share.inBm() ? m(s(t, 0, z, a), "_blank") : g(t, z, a)
        }
        _ate.ed.fire("addthis.menu.share", addthis, z), _ate.gat(t, z.url, a, z)
    }
}, function (t, e, a) {
    var i = a(42);
    t.exports = function () {
        var t = i(arguments, 0), e = t.shift(), a = t.shift();
        return function () {
            return e.apply(a, t.concat(i(arguments, 0)))
        }
    }
}, , , function (t, e, a) {
    t.exports = a(215)
}, function (t, e, a) {
    function i(t, e, a) {
        if ("function" != typeof t)return o;
        if ("undefined" == typeof e)return t;
        switch (a) {
            case 1:
                return function (a) {
                    return t.call(e, a)
                };
            case 3:
                return function (a, i, o) {
                    return t.call(e, a, i, o)
                };
            case 4:
                return function (a, i, o, n) {
                    return t.call(e, a, i, o, n)
                };
            case 5:
                return function (a, i, o, n, s) {
                    return t.call(e, a, i, o, n, s)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }

    var o = a(76);
    t.exports = i
}, function (t) {
    function e(t, e) {
        return t = +t, e = null == e ? a : e, t > -1 && t % 1 == 0 && e > t
    }

    var a = Math.pow(2, 53) - 1;
    t.exports = e
}, function (t, e, a) {
    (function (e) {
        var i = a(24), o = /\bthis\b/, n = Object.prototype, s = (s = e.window) && s.document, l = n.propertyIsEnumerable, r = {};
        !function () {
            r.funcDecomp = !i(e.WinRTError) && o.test(function () {
                return this
            }), r.funcNames = "string" == typeof Function.name;
            try {
                r.dom = 11 === s.createDocumentFragment().nodeType
            } catch (t) {
                r.dom = !1
            }
            try {
                r.nonEnumArgs = !l.call(arguments, 1)
            } catch (t) {
                r.nonEnumArgs = !0
            }
        }(0, 0), t.exports = r
    }).call(e, function () {
        return this
    }())
}, function (t) {
    function e(t) {
        return t
    }

    t.exports = e
}, function (t) {
    t.exports = {addthis: {bg: "FC6D4C", top: 1}, behance: {bg: "1377FF"}, compact: {bg: "FC6D4C", top: 1}, disqus: {bg: "2E9FFF"}, etsy: {bg: "EA6D24"}, expanded: {bg: "FC6D4C", top: 1}, flickr: {bg: "E7EDEF"}, foursquare: {bg: "81D5F2"}, google_follow: {bg: "CF4832", top: 1}, instagram: {bg: "285A85", top: 1}, more: {bg: "FC6D4C", top: 1}, rss: {bg: "EF8647", top: 1}, vimeo: {bg: "8AC8EB"}, youtube: {bg: "CC1F1F", top: 1}}
}, function (t, e, a) {
    var i = a(36), o = a(52);
    t.exports = function n(t, e, a, s, l, r) {
        _ate.ao === n ? (i(["open", t, e, a, s, l, r]), o()) : _ate.ao.apply(this, arguments)
    }
}, function (t, e, a) {
    var i = a(7).getHost, o = a(55)(), n = a(59);
    t.exports = function (t, e, a) {
        var s = o.DIRECT;
        return a = void 0 === a || a || "https:" == window.location.protocol, e = i(void 0 === e ? window.location.href : e), t && (s |= e === i(t) ? o.ON_DOMAIN : o.OFF_DOMAIN), !a && n(t) && (s |= o.SEARCH), s
    }
}, function (t, e, a) {
    var i = a(11), o = window;
    t.exports = function () {
        var t, e = i(navigator.userAgent, 16), a = (new Date).getTimezoneOffset() + "" + navigator.javaEnabled() + (navigator.userLanguage || navigator.language), n = o.screen.colorDepth + "" + o.screen.width + o.screen.height + o.screen.availWidth + o.screen.availHeight, s = navigator.plugins;
        try {
            if (t = s.length, t > 0)for (var l = 0; l < Math.min(10, t); l++)5 > l ? a += s[l].name + s[l].description : n += s[l].name + s[l].description
        } catch (r) {
        }
        return e.substr(0, 2) + i(a, 16).substr(0, 3) + i(n, 16).substr(0, 3)
    }
}, function (t) {
    var e = document;
    t.exports = {du: e.location.href, dh: e.location.hostname, dr: e.referrer}
}, function (t, e, a) {
    var i = a(20), o = a(116), n = a(37), s = a(28), l = a(2), r = window;
    t.exports = function (t, e, a, h, c, d) {
        var v = {wordpress: {width: 720, height: 570}, linkedin: {width: 600, height: 475}, facebook: {width: 675, height: 375}, hootsuite: {width: 800, height: 500}, email: s() >= 300 ? {width: 660, height: 660} : {width: 735, height: 450}, more: s() >= 300 ? {width: 660, height: 716} : {width: 735, height: 450}, vk: {width: 720, height: 290}, raiseyourvoice: {width: 480, height: 635}, "default": {width: 550, height: 450}}, f = i(t, 0, e, a);
        return a.ui_use_same_window ? r.location.href = f : "email" === t && l("mob") ? r.location.href = n(e, a, 1) : "more" !== t ? o(f, h || (v[t] || v["default"]).width, c || (v[t] || v["default"]).height, d) : _ate.share.imgOcw(o(f, h || (v[t] || v["default"]).width, c || (v[t] || v["default"]).height, d, !0)), !1
    }
}, function (t, e, a) {
    var i, o = a(40), n = a(41), s = a(3).makeCUID, l = (a(3).isValidCUID, a(122)), r = a(44), h = (a(22), a(1), a(13)), c = a(4), d = a(136), v = a(50), f = a(27), g = a(53), p = (new Date).getTime(), u = 0, m = null, w = window.encodeURIComponent, D = 1;
    t.exports = function (t) {
        function e() {
            return Math.floor(((new Date).getTime() - p) / 100).toString(16)
        }

        function a(t) {
            return 0 === u && (u = t || s()), u
        }

        function F(t, e, a) {
            null !== m && clearTimeout(m), t && (m = setTimeout(function () {
                e(!!a)
            }, l))
        }

        function x(t, a) {
            return w(t) + "=" + w(a) + ";" + e()
        }

        function b() {
            var e = r() || "unknown";
            return"AT-" + e + "/-/" + t.ab + "/" + a() + "/" + D++ + (null !== t.uid ? "/" + t.uid : "")
        }

        function C(e) {
            e = e.split("/");
            var a = (e.shift(), e.shift(), e.shift()), i = e.shift(), o = e.shift(), n = e.shift();
            a && (t.ab = t.ab), i && (t.sid = u = i), o && (D = o), n && (t.uid = n)
        }

        function E(t) {
            "string" == typeof t && (t = {url: t});
            var e = t.url, a = t.params, i = t.js, s = t.rand, l = t.close, r = e + (a ? "?" + (s ? d() + (2 == s ? "&colc=" + (new Date).getTime() : "") : "") + "&" + a : "");
            if (i)c(r, 1); else if (l) {
                var v = document, f = v.createElement("iframe");
                f.id = "_atf", f.src = r, n(f), v.body.appendChild(f), f = v.getElementById("_atf")
            } else o(r);
            h.debug("u=" + r)
        }

        function z(e) {
            return i ? i : i = t.ad.getPixelatorParameters(e, 1)
        }

        function _(e) {
            var a = t.ljep || "//m.addthis.com/live/red_lojson/", i = 2, o = "100eng", n = t.getPixelatorParameters(o, null, "ev=" + e), s = (z(t.ad.type.ENGAGEMENT) || {})._str || "";
            E({url: a + o + ".json", params: n + "&callback=_ate.track.her" + s, rand: i, js: 1})
        }

        function M() {
        }

        return{formatCustomEvent: x, handleEngagementResponse: M, clearOurFragment: f, getOurFragment: v, mungeURL: g, ssid: a, sta: b, uns: C, loadPixel: E, scheduleTransmit: F, sendEngagement: _}
    }
}, function (t) {
    t.exports = function () {
        return{PINTEREST: "//assets.pinterest.com/js/pinmarklet.js", FANCY: "//fancy.com/bookmarklet/fancy_tagger.js"}
    }
}, function (t, e, a) {
    var i = a(9).listen, o = {};
    t.exports = function (t) {
        function e(e, a) {
            return function () {
                var i, o, n = Array.prototype.slice.call(arguments, 0), r = n[n.length - 1];
                r && r.constructor === Function && (o = n.pop(), i = s++, l[e] ? l[e][i] = o : (l[e] = {}, l[e][i] = o)), t.contentWindow.postMessage(JSON.stringify({type: "api.request", api: e, method: a, args: n, id: i}), t.src)
            }
        }

        function a(e) {
            r[e] ? n(this, e, r[e]) : (c[e] ? c[e].push(this) : c[e] = [this], t.contentWindow.postMessage(JSON.stringify({type: "api.info.request", api: e}), "*")), this.addReadyListener = function (t) {
                r[e] ? t() : h[e] ? h[e].push(t) : h[e] = [t]
            }
        }

        function n(t, a, i) {
            var o, n;
            for (o = 0; o < i.length; o++)n = i[o], t[n] = e(a, n)
        }

        if (t.__apiID && o[t.__apiID])return o[t.__apiID];
        t.__apiID = String(Math.random());
        var s = 0, l = {}, r = {}, h = {}, c = {};
        return i(window, "message", function (e) {
            var a, i, o = e.data, s = e.source;
            if (s === t.contentWindow) {
                try {
                    o = JSON.parse(o)
                } catch (d) {
                    o = o || {}
                }
                if ("api.response" === o.type)l[o.api] && l[o.api][o.id] && (l[o.api][o.id].call(this, o.result), delete l[o.api][o.id]); else if ("api.info" === o.type) {
                    for (a = c[o.api], r[o.api] = o.methods; a && a.length;)n(a.pop(), o.api, r[o.api]);
                    for (; h[o.api] && h[o.api].length;)(i = h[o.api].pop())()
                }
            }
        }), o[t.__apiID] = a, a
    }
}, function (t, e, a) {
    function i(t, e) {
        var a = this, i = 0, c = 0, d = !!e, v = (d ? l : "") + t, f = {}, g = s.encodeURIComponent, p = s.decodeURIComponent;
        this.toString = function () {
            var t = "";
            return n(f, function (e, a) {
                t += (t.length ? r : "") + g(e) + h + (void 0 === a || null === a ? "" : g(a))
            }), t
        }, this.get = function () {
            return a.load(), f
        }, this.load = function () {
            if (!i) {
                var t = o.rck(v) || "", e = "";
                if (t) {
                    var a = t.split(r);
                    n(a, function (t, a) {
                        e = a.split(h), 2 === e.length && (c++, f[p(e[0])] = p(e[1]))
                    })
                }
                i = 1
            }
            return f
        }, this.save = function () {
            this.load(), c ? o.sck(v, a.toString(), d, d) : o.kck(v)
        }, this.add = function (t, e) {
            a.load(), c++, f[t] = e, a.save()
        }, this.remove = function (t) {
            a.load(), f[t] && (delete f[t], c--), a.save()
        }, this.reset = function () {
            f = {}, c = 0, a.save()
        }
    }

    var o = a(19), n = a(1);
    t.exports = i;
    var s = window, l = "__at", r = "|", h = "/"
}, , function (t, e, a) {
    function i(t, e, a) {
        return"<span " + (e === !0 ? "class" : "id") + '="' + t + '"' + (a ? a : "") + ">"
    }

    function o() {
        function t() {
            z || (z = new A(i.contentWindow, Ma))
        }

        if (Aa.gov(), !aa("addthis_widget.js").library) {
            Ya.addthis && Ya.addthis.timer && (Ya.addthis.timer.main = (new Date).getTime());
            var e, i, o, n = _ate, s = (n.bro.msi, Ya.addthis_config || {}), l = Pa.title, r = "undefined" != typeof n.rdr ? n.rdr : Pa.referer || Pa.referrer || "", h = Wa ? Wa.href : null, c = (Wa.hostname, h), d = 0, v = (Z().split("-").shift(), _ate.track.eop(Wa, r)), f = [], g = !!n.cookie.rck("nabc"), p = v.cfc, u = v.ab, m = v.pos ? parseInt(v.pos, 10) : null, w = v.tot ? parseInt(v.tot, 10) : null, D = v.rsiq, F = v.rsi, x = v.rxi, b = v.rsc.split("&").shift().split("%").shift().replace(/[^a-z0-9_]/g, ""), C = v.gen, E = v.fuid, _ = v.csi, M = function () {
                _ate.track.pcs.length || _ate.track.apc(Ya.addthis_product || "men-300"), o.pc = _ate.track.pcs.join(",")
            }, k = Ya.ljep || !1, B = n.pub(), S = 5e3;
            Wa && Wa.hash && Wa.hash.indexOf("sky_ab=1") > -1 && (n.sfmp = 1), window.wp_product_version && _ate.lojson.add("wpv", window.wp_product_version), window.wp_blog_version && _ate.lojson.add("wpbv", window.wp_blog_version), -1 === (h || "").indexOf(_atr) && (n.cookie.view.update(!0), n.cookie.visit.update(), _ate.lojson.add("uvs", _ate.cookie.rck("__atuvs"))), "tweet" === b && (b = "twitter"), v.rsc = b, Ya.addthis_product && (_ate.track.apc(addthis_product), -1 === addthis_product.indexOf("fxe") && -1 === addthis_product.indexOf("bkm") && (_ate.track.spc = addthis_product));
            var I = _ate.share.links.canonical;
            I && (0 !== I.indexOf("http") ? (c = (h || "").split("//").pop().split("/"), 0 === I.indexOf("/") ? c = c.shift() + I : (c.pop(), c = c.join("/") + "/" + I), c = Wa.protocol + "//" + c) : c = I, _ate.usu(0, 1)), c = c.split("#{").shift(),n.igv(c,Pa.title||""), c && (_ate.share.links.canonical = c);
            var O = addthis_share.view_url_transforms || addthis_share.track_url_transforms || addthis_share.url_transforms || {};
            O.defrag = 1, O && (c = _ate.track.mgu(c, O));
            try {
                var T = (addthis_share || {}).passthrough || {};
                if (!(T.pinterest_share || {}).media) {
                    var R = _ate.ad.og(), U = {}, L = "string" == typeof R ? _ate.util.fromKV(R) : R;
                    T = {}, (L.image || _ate.share.links.image_src) && (Ya.addthis_share || (Ya.addthis_share = {}), addthis_share = Ya.addthis_share, addthis_share.passthrough = T = addthis_share.passthrough || {}, T.pinterest_share = U = T.pinterest_share || {}, U.media = L.image || _ate.share.links.image_src, U.url = U.url || L.url || Ya.location.href, U.description = U.description || L.title || addthis_share.description || addthis_share.title || "")
                }
            } catch (Y) {
                y.error("pinterest passthrough", j(Y))
            }
            if (F && (F = F.substr(0, 8) + E), -1 === n.bro.mod) {
                var P = document.compatMode;
                if (P) {
                    var G = 1;
                    "BackCompat" === P ? G = 2 : "CSS1Compat" === P && (G = 0), n.bro.mode = G, n.bro.msi && (n.bro.mod = G)
                }
            }
            if (n.dr = n.truncateURL(r, "fr"), n.du = n.truncateURL(c, "fp"), n.dt = l = Ya.addthis_share.title, n.smd = {rsi: F, rxi: x, gen: C, rsc: b}, Ya.addthis_share.smd = n.smd, n.upm && (Ya.addthis_share.smd.dr = n.dr), n.upm && (Ya.addthis_share.smd.sta = n.track.sta()), n.cb = n.ad.cla(), n.kw = 1 !== n.cb ? n.ad.kw() : "", n.dh = Wa.hostname, n.ssl = h && 0 === h.indexOf("https") ? 1 : 0, n.ab = u || Ya.addthis_ab || "-", Ya.addthis_config = Ya.addthis_config || {}, !Ya.addthis_config.ignore_server_config && B)if (_ate.upm && Ya.JSON && "function" == typeof JSON.parse && !n.bro.ie6 && !n.bro.ie7) {
                _ate.ipc = !0;
                var H, W = "__at.conf." + B, V = "", q = !1, Q = !1, J = _ate.uls, X = {cfs: !0}, K = function () {
                    Ha.layers.length ? Ha.layers({cfs: !0}) : _ate.ipc = !1
                }, $ = function ce(t) {
                    var e, i, o = -1, n = [], s = !1;
                    if (t.pro && (_ate.pro = !0), t.config.sponsored || !Q) {
                        if (t.perConfig && t.perConfig.length)try {
                            for (; ++o < t.perConfig.length;)e = t.perConfig[o], (!t.pro || t.pro && e.isProCell) && n.push(e), i = "ab=" + e.name + "(&|$)", Wa.hash.match(i) && (s = e);
                            s === !1 && (s = n[~~(Math.random() * n.length)]), _ate.feeds.setTestCell(s)
                        } catch (l) {
                        }
                        var r = a(114);
                        t.customMessages && (t.config = t.config || {}, t.config._default = t.config._default || {}, t.config._default.widgets = t.config._default.widgets || {}, me(t.config._default.widgets, r(t.customMessages))), t.config && t.config._default ? (_ate.isProUser = !0, t.config.cfs = !0, Ha.layers(t.config, X)) : K(), ce.called = !0
                    }
                }, te = function () {
                    Q = !0, q || K()
                };
                if (J)try {
                    V = JSON.parse(localStorage.getItem(W))
                } catch (Y) {
                    V = !1
                }
                V && V.config._default ? $(V) : H = setTimeout(te, S), _ate.ed.addEventListener("addthis.pro.init", function (t) {
                    q = !0, clearTimeout(H), t.data && t.data.config && ($(t.data), J && !t.data.config.sponsored && localStorage.setItem(W, JSON.stringify(t.data)))
                })
            } else {
                var ee, ae = "__atpro_" + B, ie = _ate.cookie.rck(ae), oe = new Date, ne = function (t) {
                    oe.setDate(oe.getDate() + 7), t && t._default ? (_ate.cookie.sck(ae, "true", 0, 1, oe), t.cfs = !0, Ha.layers(t, {cfs: !0})) : (_ate.cookie.sck(ae, "false", 0, 1, oe), _ate.ipc = !1)
                };
                "false" !== ie && (_ate.ipc = !0, _ate.ajs(["//q.addthis.com/feeds/1.0/", "config.json?pubid=", B, "&callback=", _ate.util.scb("fds", B, function () {
                    clearTimeout(ee), ne.apply(this, arguments)
                })].join(""), 1, !0, !0, null, !0), ee = setTimeout(function () {
                    ne([])
                }, S))
            }
            if (o = {iit: (new Date).getTime(), tmr: ue((Ya.addthis || {}).timer || {}), cb: n.cb, cdn: _atc.cdn, kw: n.kw, ab: n.ab, dh: n.dh, dr: n.dr, du: n.du, href: Wa.href.split("?")[0].split("#")[0], dt: l, dbg: y.level, cap: ue({tc: s.data_track_textcopy ? 1 : 0, ab: s.data_track_addressbar ? 1 : 0}), inst: n.inst, jsl: n.track.jsl(), prod: n.track.prod(), lng: n.lng(), ogt: _ate.ad.gog().join(","), pc: Ya.addthis_product || "men", pub: n.pub(), ssl: n.ssl, sid: _ate.track.ssid(), srpl: _atc.plmp, srcs: _atc.cscs, srd: _atc.damp, srf: _atc.famp, srx: _atc.xamp, ver: 300, xck: _atc.xck || 0, xtr: _atc.xtr || 0, og: _ate.ad.og(), aa: 0, csi: _, chr: _ate.ad.gch(), md: n.bro.mode, vcl: n.cookie.view.cla()}, _ate.lojson.add("chr", _ate.ad.gch()), delete o.chr, _ate.lojson.add("md", n.bro.mode), delete o.md, _ate.lojson.add("vcl", n.cookie.view.cla()), delete o.vcl, o.toLoJson = _ate.lojson.get(), _atc.noup && (o.noup = 1), n.dcp == Number.MAX_VALUE && (o.dnp = 1), n.pixu && (o.pixu = n.pixu), n.trl.length && (o.trl = n.trl.join(",")), _atc.rev && (o.rev = _atc.rev), o.ct = n.ct = s.data_track_clickback || s.data_track_linkback || _ate.track.ctp(o.pc, s) ? 1 : 0, n.prv && (o.prv = ue(n.prv)), b && (o.sr = b), _ate.track.ssc(b), k && (o.ljep = k), n.vamp >= 0 && !n.sub && (p ? (f.push(n.track.fcv("plv", Math.round(1 / _atc.vamp))), f.push(n.track.fcv("typ", "lnk")), isNaN(m) || f.push(n.track.fcv("ttpos", m)), isNaN(w) || f.push(n.track.fcv("ttnl", w)), _ && f.push(n.track.fcv("csi", _)), f.push(n.track.fcv("pco", "string" == typeof p ? p : "cfd-1.0")), f.push(n.track.fcv("pur", n.track.mgu(c, {defrag: 1}))), n.dr && (o.pre = n.track.mgu(n.dr, {defrag: 1})), o.ce = f.join(",")) : F && E != n.ad.gub() ? (f.push(n.track.fcv("plv", Math.round(1 / _atc.vamp))), f.push(n.track.fcv("rsi", F)), f.push(n.track.fcv("gen", C)), f.push(n.track.fcv("abc", 1)), f.push(n.track.fcv("fcu", n.ad.gub())), f.push(n.track.fcv("rcf", Wa.hash)), o.ce = f.join(","), d = "addressbar", v.rsc = b = "addressbar") : (x || D || b) && (f.push(n.track.fcv("plv", Math.round(1 / _atc.vamp))), b && f.push(n.track.fcv("rsc", b)), x ? f.push(n.track.fcv("rxi", x)) : D && f.push(n.track.fcv("rsi", D)), (D || x) && f.push(n.track.fcv("gen", C)), o.ce = f.join(","), d = b || "unknown")), n.track.ts.reset(v), n.feeds._ad() && n.track.hist.log(window.location.href.split("#")[0]), d && (n.bamp >= 0 && (o.clk = 1, n.dcp != Number.MAX_VALUE && (n.dcp = o.gen = n.ad.type.CLICK)), _ate.ed.fire("addthis.user.clickback", Ya.addthis || {}, {service: d, hash: _ate.hash})), Ya.at_noxld || (o.xld = 1), n.upm && (o.xd = 1), !g && Ya.history && "function" == typeof history.replaceState && (!_ate.bro.chr || _ate.bro.chb) && (s.data_track_addressbar || s.data_track_addressbar_paths) && (h || "").split("#").shift() != r && (-1 == h.indexOf("#") || F || v.hash && x || p)) {
                var se, le = Wa.pathname + document.location.search || "", re = "/" != le;
                if (s.data_track_addressbar_paths) {
                    re = 0;
                    for (var he = 0; he < s.data_track_addressbar_paths.length; he++)if (se = new RegExp(s.data_track_addressbar_paths[he].replace(/\*/g, ".*") + "$"), se.test(le)) {
                        re = 1;
                        break
                    }
                }
                !re || F && !n.util.ioc(F, 5) || (e = _ate.track.cur(Wa.href.split("#").shift(), null, _ate.track.ssid()), history.replaceState({d: new Date, g: C}, Pa.title, e), o.fcu = e.split("#.").pop())
            }
            Ya.addthis && Ya.addthis.timer && (Ya.addthis.timer.ifr = (new Date).getTime(), o.tmr && (o.tmr += "&ifr=" + Ya.addthis.timer.ifr)), 1 === n.aa && Ya.postMessage && (o.srd = 1, o.aa = 1, _ate.ed.addEventListener("addthis.layers.warning.show", function (t) {
                t.data && t.data.alertId && (_ate.swl = t.data.alertId)
            })), M(), -1 != Wa.href.indexOf(_atr) || n.sub ? _ate.share.inBm() && (z = new A(window.parent, _ate.dr)) : n.upm ? _ate.bro.ie9 ? setTimeout(function () {
                i = n.track.ctf(Ma + "#" + ue(o), !0), t(i, Ma), n.track.stf(i), _ate.ed.fire("addthis.lojson.complete")
            }) : (i = n.track.ctf(), i.src = Ma + "#" + ue(o), t(i, Ma), n.track.stf(i), _ate.ed.fire("addthis.lojson.complete")) : (i = n.track.ctf(), i.src = Ma + "#" + ue(o), t(i, Ma), n.track.gtf().appendChild(i), n.track.stf(i), _ate.ed.fire("addthis.lojson.complete")), Ha._pmh.flushed = 1, Ha._pmh.flush(_ate.pmh, _ate), (Ya.addthis_language || Ka.ui_language) && n.alg(), N().length > 0 && n.jlo(), Ka.ui_use_css !== !1 && ($a ? a.e(18, function () {
                a(166)
            }) : a.e(12, function () {
                a(165)
            }), (_ate.bro.ie6 || _ate.bro.ie7) && a.e(16, function () {
                a(172)
            }))
        }
    }

    function n(t) {
        return t.indexOf("&") > -1 && (t = t.replace(/&([aeiou]).+;/g, "$1")), t
    }

    function s(t, e) {
        if (e && t !== e)for (var a in e)t[a] === vi && (t[a] = e[a])
    }

    function l() {
        if (_ate.bro.msi && !Pa.getElementById("at300bhoveriefilter")) {
            var t = Pa.getElementsByTagName("head")[0], e = Pa.ce("style"), a = Pa.createTextNode(".at300b:hover,.at300bs:hover {filter:alpha(opacity=80);}");
            e.id = "at300bhoveriefilter", e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = a.nodeValue : e.appendChild(a), t.appendChild(e)
        }
    }

    function r(t, e) {
        if (gi && !e)return!0;
        var a = _ate.util.parent(t, ".addthis_toolbox");
        return gi = (a.className || "").search(/32x32/i) > -1 || (t.className || "").search(/32x32/i) > -1
    }

    function h(t, e) {
        if (pi && !e)return!0;
        var a = _ate.util.parent(t, ".addthis_toolbox");
        return pi = (a.className || "").search(/20x20/i) > -1 || (t.className || "").search(/20x20/i) > -1
    }

    function c(t) {
        var e = (t.parentNode || {}).className || "", a = t.conf && t.conf.product && -1 == e.indexOf("toolbox") ? t.conf.product : "tbx" + (t.className.indexOf("32x32") > -1 || e.indexOf("32x32") > -1 ? "32" : "") + "-300";
        return a.indexOf(32) > -1 && (gi = !0), _ate.track.apc(a), a
    }

    function d(t, e) {
        var a = {};
        for (var i in t)a[i] = e[i] ? e[i] : t[i];
        return a
    }

    function v(t, e, a, i) {
        var o = document.ce("img");
        return o.width = t, o.height = e, o.border = 0, o.alt = a, o.src = i, o
    }

    function f(t, e) {
        var a, i = [], o = {}, n = Math.min((t.attributes || []).length || 0, 160), s = e.replace(/:/g, "-");
        if (isNaN(n))return o;
        for (var l = 0; n > l; l++)if (a = t.attributes[l]) {
            if (i = a.name.split(e + ":"), !i || 1 == i.length) {
                if (-1 == a.name.indexOf("data-"))continue;
                if (i = a.name.split("data-" + s + "-"), !i || 1 == i.length)continue
            }
            2 == i.length && (o[i.pop()] = a.value)
        }
        return o
    }

    function g(t, e, a, i) {
        var e = e || {}, o = {}, n = f(t, "addthis");
        if ("[object Object]" === Object.prototype.toString.call(e) && !e.nodeType)for (var s in e)o[s] = e[s];
        if (i)for (var s in t[a])o[s] = t[a][s];
        for (var s in n)if (n.hasOwnProperty(s)) {
            if (e[s] && !i)o[s] = e[s]; else {
                var l = n[s];
                l ? o[s] = l : e[s] && (o[s] = e[s]), "true" === o[s] ? o[s] = !0 : "false" === o[s] && (o[s] = !1)
            }
            if (o[s] !== vi && zi[s] && "string" == typeof o[s])try {
                o[s] = JSON.parse(o[s].replace(/'/g, '"'))
            } catch (r) {
                o[s] = _ate.evl("(" + o[s] + ");", !0)
            }
        }
        return o
    }

    function p(t) {
        var e = (t || {}).services_custom;
        if (e) {
            e instanceof Array || (e = [e]);
            for (var a = 0; a < e.length; a++) {
                var i = e[a];
                i.name && i.icon && i.url && ("object" == typeof i.url && (i.url = _ate.util.toKV(i.url)), i.code = i.url = i.url.replace(/ /g, ""), i.code = i.code.split("//").pop().split("?").shift().split("/").shift().toLowerCase(), fi[i.code] = i)
            }
        }
    }

    function u(t) {
        return fi[t] || {}
    }

    function m(t, e, a, i) {
        var o = {conf: e || {}, share: a || {}};
        return o.conf = g(t, e, "conf", i), o.share = g(t, a, "share", i), o
    }

    function w(t, e, i, o) {
        if (ta(), t) {
            e = e || {}, i = i || {};
            var l = e.conf || si, f = e.share || li, g = i.onmouseover, w = i.onmouseout, D = i.onclick, F = i.internal, x = _, b = i.singleservice, C = a(37);
            b ? D === x && (D = _i[b] ? function (t, e, a) {
                var i = d(a, mi);
                return addthis_open(t, b, i.url, i.title, d(e, ui), i)
            } : Mi[b] ? function (t, e, a) {
                var i = d(a, mi);
                return addthis_sendto(b, d(e, ui), i)
            } : ki[b] ? function (t, e, a) {
                var i = d(a, mi);
                return _ate.share.stw(b, i, e, 735)
            } : null) : i.noevents || (i.nohover ? D === x && (D = function (t, e, a) {
                return addthis_open(t, "more", null, null, d(e, ui), d(a, mi))
            }) : (g === x && (g = function (t, e, a) {
                return addthis_open(t, "", null, null, d(e, ui), d(a, mi))
            }), w === x && (w = function () {
                return addthis_close()
            }), D === x && (D = function (t, e, a) {
                return addthis_sendto("more", d(e, ui), d(a, mi))
            }))), t = Di(t);
            for (var E = 0; E < t.length; E++) {
                var z = t[E], M = z.parentNode, k = m(z, l, f, !o) || {};
                if (s(k.conf, si), s(k.share, li), z.conf = k.conf, z.share = k.share, z.conf.ui_language && _ate.alg(z.conf.ui_language), p(z.conf), M && M.className.indexOf("toolbox") > -1 && 0 === (z.conf.product || "").indexOf("men") && (z.conf.product = "tbx" + (M.className.indexOf("32x32") > -1 ? "32" : M.className.indexOf("20x20") > -1 ? "20" : "") + "-300", _ate.track.apc(z.conf.product)), b && "more" !== b && (z.conf.product = c(z)), z.conf && (z.conf.ui_click || z.conf.ui_window_panes) || _ate.bro.ipa ? D && (z.onclick = b ? function () {
                    return D(this, this.conf, this.share)
                } : z.conf.ui_window_panes ? function () {
                    return addthis_sendto("more", this.conf, this.share)
                } : function () {
                    return _ate.bro.iph || _ate.bro.wph || _ate.bro.dro ? addthis_sendto("more", this.conf, this.share) : addthis_open(this, "", null, null, this.conf, this.share)
                }) : (_ate.maf = _ate.maf || {}, _ate.maf.home = this, _ate.maf.key = null, _ate.maf.shift = null, g && (z.onfocus = z.onmouseover = function () {
                    for (_ate.maf.sib = this.nextSibling; _ate.maf.sib && 3 == _ate.maf.sib.nodeType && _ate.maf.sib.nextSibling;)_ate.maf.sib = _ate.maf.sib.nextSibling;
                    if (!_ate.maf.sib || 3 == _ate.maf.sib.nodeType) {
                        var t = this.parentNode;
                        if (t)for (; t.nextSibling && 3 == t.nodeType;)t = t.nextSibling; else for (t = document.body.firstChild || document.body; 3 == t.nodeType && t.nextSibling;)t = t.nextSibling;
                        _ate.maf.sib = t
                    }
                    return _ate.maf.sib.onfocus = function () {
                        _ate.maf.sib.tabIndex = ""
                    }, g(this, this.conf, this.share)
                }), w && (z.onmouseout = function () {
                    return w(this)
                }), D && (z.onclick = function () {
                    return D(z, this.conf || z.conf, this.share || z.share)
                }), (w || D) && (z.onkeypress = z.onkeydown = function (t) {
                    if (!t)var t = window.event;
                    t.shiftKey && (_ate.maf.shift = !0), t.keyCode ? _ate.maf.key = t.keyCode : t.which && (_ate.maf.key = t.which), _ate.maf.pre = 13 == _ate.maf.key ? this : null
                }, z.onblur = function () {
                    if (9 == _ate.maf.key && _ate.maf.firstCompact && !_ate.maf.shift && this.className.indexOf("compact") > -1)_ate.maf.key = null, _ate.maf.acm = !0, document.getElementById(_ate.maf.firstCompact).focus(); else if (_ate.maf.key = null, _ate.maf.shift = null, w)return w(this)
                })), "a" == z.tagName.toLowerCase()) {
                    var y = z.share.url || addthis_share.url;
                    if (_ate.usu(y), b) {
                        var A = u(b, z.conf), B = z.firstChild;
                        if (A && A.code && A.icon && B && (B.className.indexOf("at300bs") > -1 || B.className.indexOf("at4-icon") > -1)) {
                            var S = "16";
                            r(z, 1) ? (B.className = B.className.split("at15nc").join(""), S = "32") : h(z, 1) && (B.className = B.className.split("at15nc").join(""), S = "20"), B.style.backgroundImage = "url(" + A.icon + ")", B.style.backgroundRepeat = "no-repeat", B.style.backgroundPosition = "top left", B.style.backgroundColor = "transparent", B.style.cssText || (B.style.cssText = ""), B.style.cssText = "line-height:" + S + "px;width:" + S + "px;height:" + S + "px;background-image:" + B.style.backgroundImage + ";background-repeat:" + B.style.backgroundRepeat + ";background-position:" + B.style.backgroundPosition + ";background-color:" + B.style.backgroundColor + ";"
                        }
                        if (Mi[b])("mailto" == b || "email" == b && (z.conf.ui_use_mailto || _ate.bro.iph || _ate.bro.wph || _ate.bro.ipa || _ate.bro.dro)) && (z.onclick = function () {
                            z.share.xid = _ate.util.cuid(), (new Image).src = _a("mailto", 0, z.share, z.config), _ate.gat(b, y, z.conf, z.share)
                        }, z.href = C(z.share, z.config || z.conf), Ha.ems.push(z)); else {
                            if (i.follow) {
                                if (z.href = "twitter" !== b ? z.share.followUrl : "//twitter.com/" + z.share.userid, z.conf = z.conf || {}, z.conf.follow = !0, z.onclick = function (t) {
                                    return _ate.share.track(b, 1, z.share, z.conf), "twitter" === b ? (t && t.preventDefault(), _ate.share.ocw(z.share.followUrl, 520, 520)) : void 0
                                }, z.children && 1 == z.children.length && z.parentNode && z.parentNode.className.indexOf("toolbox") > -1) {
                                    var I = document.ce("span");
                                    I.className = "addthis_follow_label", I.innerHTML = Oa(b).replace("_follow", ""), z.appendChild(I)
                                }
                            } else _ate.share.externEvents(b, z, i) || z.noh || (z.onclick = function () {
                                return T(b, z.share), !1
                            });
                            z.conf.follow || Ha.addEvents(z, b, y), z.noh || z.target || (z.target = "_blank"), Ha.links.push(z)
                        }
                        if (!z.title || z.at_titled) {
                            var O = Oa(b, !A);
                            Ei[b] && bi.push({link: z, title: b}), z.title = n(i.follow ? Ci[b] ? Ci[b] : "Follow on " + O : Ei[b] ? Ei[b] : O), z.at_titled = 1
                        }
                        z.href || (z.href = "#")
                    } else z.conf.product && -1 == z.parentNode.className.indexOf("toolbox") && c(z)
                }
                var j;
                switch (F) {
                    case"img":
                        if (!z.hasChildNodes()) {
                            var R = (z.conf.ui_language || Z()).split("-").shift(), N = _ate.ivl(R);
                            N ? 1 !== N && (R = N) : R = "en", j = v(_ate.iwb(R) ? 150 : 125, 16, "Share", _atr + "/btn/v2/lg-share-" + R.substr(0, 2) + ".gif")
                        }
                }
                j && z.appendChild(j)
            }
        }
    }

    function D(t, e, a, i, o, n, s) {
        if (!t._iss) {
            var l, r, h, c, d, v, f = (t.className || "", {pinterest: "pinterest_share"});
            ri ? l = t.parentNode._atsharedconf || {} : (ri = 1, t.parentNode._atsharedconf = l = _ate.share.services.init(t.conf)), t.parentNode.services || (t.parentNode.services = {}), r = l.services_exclude || "", _ate.bro.ie9 && (r += (r.length ? "," : "") + "link"), c = _ate.share.services.loc, d = t.parentNode.services, v = _ate.util.unqconcat((window.addthis_options || "").replace(",more", "").split(","), c.split(","));
            do h = v[e++], f[h] && (h = f[h]); while (e < v.length && (r.indexOf(h) > -1 || d[h]));
            d[h] && _ate.util.each(Ba.list, function (t) {
                return d[t] || -1 != r.indexOf(t) ? void 0 : (h = t, !1)
            }), t._ips = 1, -1 == t.className.indexOf(h) && (t.className = "addthis_button_" + h + " " + t.className, t._iss = 1), t.parentNode.services[h] = 1, a && F([t], i, o, !0, s)
        }
    }

    function F(t, e, i, o, n) {
        for (var l = a(49), d = a(62), v = 0; v < t.length; v++) {
            var f = t[v], g = document;
            if (null != f && (o !== !1 || !f.ost)) {
                var p = m(f, e, i, !n), F = 0, x = f.className || "", b = x.match(/addthis_button_([\w\-\.]+)(?:\s|$)/), C = x.match(/addthis_counter_([\w\.]+)(?:\s|$)/), E = {}, z = b && b.length ? b[1] : 0, M = C && C.length ? C[1] : 0, k = u(z);
                if (s(p.conf, si), s(p.share, li), z && !_ate.share.extern(z, f, p)) {
                    if (z.indexOf("preferred") > -1) {
                        if (f._iss || f._iwps)continue;
                        b = x.match(/addthis_button_preferred_([0-9]+)(?:\s|$)/);
                        var y = (b && b.length ? Math.min(16, Math.max(1, parseInt(b[1]))) : 1) - 1;
                        if ((!f.conf || n) && (f.conf = p.conf || f.conf || {}), (!f.share || n) && (f.share = p.share || f.share || {}), f.conf.product = "tbx-300", c(f), !hi) {
                            var A = _ate.util.bind(D, f, f, y, !0, e, i, o, n);
                            _ate.ed.addEventListener("addthis-internal.data.ssh", A), setTimeout(A, 2e3), f._iwps = 1;
                            continue
                        }
                        D(f, y, !0)
                    } else if (z.indexOf("follow") > -1)"google_follow" == z ? f.title = "Follow on Google" : z = z.split("_follow").shift(), E.follow = !0, _ate.track.apc("flw-300"), p.share.followUrl = _ate.share.gfu(z, p.share.userid, p.share.usertype, p.share) || p.share.url; else if (!(Sa(z) || Ia.isTop(z) || k && k.code))continue;
                    l ? Ra.loadColorCSSForService(z) : gi || r(f) ? Ra.loadColorCSSForService(z, 32) : (pi || h(f)) && Ra.loadColorCSSForService(z, 20);
                    var S = Ia.isTop(z) && !r(f, !0) && !h(f, !0);
                    if (B.record(z), f.childNodes.length)if (1 == f.childNodes.length) {
                        var I = f.childNodes[0];
                        if (3 == I.nodeType) {
                            var O = g.ce("span");
                            f.insertBefore(O, I), l && d ? (O.className = "at4-icon aticon-" + z, O.style.backgroundColor = d(z)) : O.className = (S ? "at16nc " : " ") + "at300bs at15nc at15t_" + z + (S ? " at16t_" + z : "")
                        }
                        if (O != _) {
                            var T, j = g.ce("span");
                            T = document.createTextNode("compact" === z || "expanded" === z ? "More Sharing Services" : "Share on " + z), j.appendChild(T), O.appendChild(j)
                        }
                    } else f.firstChild && 3 == f.firstChild.nodeType && "\n" == f.firstChild.textContent || (F = 1); else {
                        var O = g.ce("span");
                        if (f.appendChild(O), l && d ? (O.className = "at4-icon aticon-" + z, O.style.backgroundColor = d(z)) : O.className = (S ? "at16nc " : " ") + "at300bs at15nc at15t_" + z + (S ? " at16t_" + z : ""), ((((f.parentNode || {}).parentNode || {}).parentNode || {}).className || "").indexOf("label_style") > -1) {
                            var R = g.createTextNode(Oa(z));
                            f.appendChild(R)
                        } else {
                            var N = "";
                            O == _ || "compact" !== z && "expanded" !== z ? O != _ && (N = "Share on " + z) : N = "More Sharing Services";
                            try {
                                O.innerHTML = '<span class="at_a11y">' + N + "</span>"
                            } catch (U) {
                                var L = g.ce("span");
                                L.className = "at_a11y", L.appendChild(document.createTextNode(N)), O.appendChild(L)
                            }
                        }
                    }
                    "compact" === z || "expanded" === z ? (F || -1 != x.indexOf("at300") || (f.className += " at300m"), p.conf.product && -1 == p.conf.product.indexOf("men-") && (p.conf.product += ",men-300"), f.href || (f.href = "#"), f.parentNode && f.parentNode.services && (p.conf.parentServices = f.parentNode.services), "expanded" === z && (E.nohover = !0, E.singleservice = "more")) : ((f.parentNode.className || "").indexOf("toolbox") > -1 && (f.parentNode.services || (f.parentNode.services = {}), f.parentNode.services[z] = 1), F || -1 != x.indexOf("at300") || (f.className += " at300b"), E.singleservice = z), f._ips && (E.issh = !0), w([f], p, E, n), f.ost = 1, c(f)
                } else if (M) {
                    if (f.ost)continue;
                    f.ost = 1;
                    var Y = g.ce("a"), P = g.ce("a");
                    Y.className = "addthis_native_counter_sibling addthis_button_" + M, P.className = "addthis_native_counter addthis_counter addthis_bubble_style", f.className += " addthis_native_counter_parent", f.appendChild(Y), f.appendChild(P), p.conf.service = M.indexOf("pinterest") > -1 ? "pinterest_share" : M, w(Y, p, {singleservice: M}), Ha.counter(P, p.conf, p.share)
                }
            }
        }
    }

    function x(t, e, a, i) {
        if ("facebook_unlike" != t && "google_unplusone" != t) {
            a = a || {};
            var o = a.data_ga_tracker, n = a.data_ga_property;
            if (n && ("object" == typeof window._gat && _gat._createTracker ? o = _gat._createTracker(n, "addThisTracker") : "object" == typeof window._gaq && _gaq._getAsyncTracker ? o = _gaq._getAsyncTracker(n) : window._gaq instanceof Array && _gaq.push([function () {
                _ate.gat(t, e, a, i)
            }])), o && "string" == typeof o && (o = window[o]), !o && window.GoogleAnalyticsObject) {
                var s = window[window.GoogleAnalyticsObject];
                s.getAll && (o = s.getAll())
            }
            if (o && "object" == typeof o) {
                if ("more" == t || "settings" == t)return;
                var l = e || (i || {}).url || location.href, r = t, h = "share";
                r.indexOf("_") > -1 && (r = r.split("_"), h = r.pop(), h.length <= 2 && (h = "share"), r = r.shift()), 0 == l.toLowerCase().replace("https", "http").indexOf("http%3a%2f%2f") && (l = _duc(l));
                try {
                    a.data_ga_social && o._trackSocial && "google_plusone" != t ? o._trackSocial(r, h, i.url) : o._trackEvent ? o._trackEvent("addthis", t, l) : a.data_ga_social && "google_plusone" != t ? s("send", "social", r, h, l) : s("send", "event", "addthis", t, l)
                } catch (c) {
                    try {
                        o._initData && o._initData(), a.data_ga_social && o._trackSocial && "google_plusone" != t ? o._trackSocial(r, h, i.url) : o._trackEvent ? o._trackEvent("addthis", t, l) : a.data_ga_social && "google_plusone" != t ? s("send", "social", r, h, l) : s("send", "event", "addthis", t, l)
                    } catch (c) {
                    }
                }
            }
        }
    }

    function b() {
        var t = Ha, e = ".addthis_";
        t.osrp || (t.osrp = 1, li = Ya.addthis_share, si = Ya.addthis_config, wi = Pa.body, Fi = sa.getElementsByClassPrefix(wi, "A", "addthis_button_", !0, !0), xi = sa.getElementsByClassPrefix(wi, "A", "addthis_counter_", !0, !0), l(), Ha.toolbox(e + "toolbox", null, null, !0, xi.length), Ha.button(e + "button"), Ha.counter(e + "counter"), Ha.count(e + "count"), "function" == typeof Ha.overlay && Ha.overlay(e + "shareable"), "function" == typeof Ha.dock && Ha.dock(e + "bar"), F(Fi, null, null, !1), F(xi, null, null, !1), ((si || {}).login || {}).services && Ha.login.initialize())
    }

    function C() {
        if (!di) {
            for (var t, e, a = window.addthis, i = 0, o = a.plo; i < o.length; i++)e = o[i], e.called || (t = e.ns ? "string" == typeof e.ns ? a[e.ns] : e.ns : a, e && e.call && t[e.call] && t[e.call].apply(e.ctx ? a[e.ctx] : this, e.args));
            di = 1
        }
    }

    function E() {
        if (!di)for (var t, e = window.addthis, a = 0, i = e.plo; a < i.length; a++)t = i[a], "addEventListener" == t.call && ((t.ns ? "string" == typeof t.ns ? e[t.ns] : t.ns : e)[t.call].apply(t.ctx ? e[t.ctx] : this, t.args), t.called = 1)
    }

    a(137), a(296)(), a(254);
    var z, _, M, y = a(13), A = a(285), B = a(275), S = a(136), I = a(278), O = a(195), T = a(68), j = a(143), R = a(116), N = a(112), U = a(127), L = a(287), Y = a(36), P = a(78), G = a(266), H = a(267), W = a(52), Z = a(45), V = a(132), q = a(292), Q = a(134), J = a(290), X = a(291), K = a(133), $ = a(294), te = a(89), ee = a(293), ae = a(148), ie = a(4), oe = a(41), ne = a(94).truncationList, se = a(94).truncateURL, le = a(300), re = a(61), he = a(150), ce = a(30), s = a(97), de = a(1), ve = a(60), fe = a(149), ge = a(42), pe = a(43), ue = a(22), me = a(34), we = a(35), De = a(21), Fe = a(6), xe = a(301), be = a(69), Ce = a(16), Ee = a(9).listen, ze = a(9).unlisten, _e = a(7).getDomain, Me = a(7).getQueryString, ke = a(7).getDomainNoProtocol, ye = a(7).getAbsoluteFromRelative, Ae = a(7).getHost, Be = a(8).string, Se = a(8).number, Ie = a(8).emptyObject, Oe = a(152), Te = a(58).PolyEvent, je = a(58).EventDispatcher, Re = a(140), Ne = a(54), Ue = a(28), Le = a(276), Ye = a(13), Pe = a(128), Ge = a(288), He = a(129), We = a(130), Ze = a(141), Ve = a(11), qe = a(145), Qe = a(295), Je = a(3), Xe = a(29), Ke = a(142), $e = a(10), ta = a(271), ea = a(63), aa = a(93), ia = a(144), oa = a(108).processAdEvents, na = a(108).processAllScripts, sa = a(147), la = a(273), ra = a(131), ha = a(125), ca = a(126), da = a(83), va = a(40), fa = a(115), ga = a(282), pa = a(80), ua = a(59), ma = a(55)(), wa = (a(124)(), a(79)), Da = a(51), Fa = a(281), xa = a(46), ba = a(86), Ca = a(92), Ea = a(110), za = a(283), _a = a(20), Ma = (a(50), a(280).source), ka = a(98), ya = a(5), Aa = a(19), Ba = a(17), Sa = a(156), Ia = a(64), Oa = a(95), Ta = a(62), ja = a(251), Ra = a(153), Na = a(49), Ua = a(2), La = a(2), Ya = window, Pa = document;
    try {
        M = window.location, (0 === M.protocol.indexOf("file") || 0 === M.protocol.indexOf("safari-extension") || 0 === M.protocol.indexOf("chrome-extension")) && (_atr = "http:" + _atr), -1 !== M.hostname.indexOf("localhost") && (_atc.loc = 1)
    } catch (Ga) {
    }
    var Ha = (navigator.userAgent.toLowerCase(), window.addthis || {}), Wa = Pa.location, Za = Ua;
    if (Pa.ce = Pa.createElement, Pa.gn = Pa.getElementsByTagName, window._ate)_ate.inst++; else {
        window._ate = {bro: Za, wlp: (M || {}).protocol, dl: Wa, unj: La, upm: re, uls: he, bamp: _atc.bamp - Math.random(), abmp: _atc.abmp - Math.random(), camp: _atc.camp - Math.random(), damp: _atc.damp - Math.random(), cscs: _atc.cscs - Math.random(), sfmp: _atc.sfmp - Math.random(), xamp: _atc.xamp - Math.random(), vamp: _atc.vamp - Math.random(), tamp: _atc.tamp - Math.random(), pamp: _atc.pamp - Math.random(), ab: "-", inst: 1, wait: a(122), tmo: null, sub: fa(), dbm: 0, uid: null, api: {}, ad: {}, data: {}, imgz: a(118), hash: window.location.hash};
        var Va = da(_ate);
        if (_ate.evl = le, _ate.util = {unqconcat: fe, reduce: ce, filter: xa, slice: ge, strip: pe, extend: me, toKV: ue, rtoKV: we, fromKV: Fe, rfromKV: De, otoCSV: xe, bind: be, listen: Ee, each: de, map: ve, unlisten: ze, gUD: _e, gUQS: Me, clone: Ce, mrg: s, rel2abs: ye, json2html: Oe, isEmptyObj: Ie, isString: Be, isNumber: Se, getDomainFromURL: ke, preventDefaultEvent: O, misc: {}}, _ate.services = {getBackgroundColor: Ta}, _ate.event = {PolyEvent: Te, EventDispatcher: je}, _ate.ed = new je(_ate), _adr = Re, _ate.plo = N(), _ate.lad = Y, _ate.pub = ka, _ate.usu = Ne, _ate.ver = Ue, _ate.rsu = Le, _ate.igv = ta, !_atc.ost) {
            Ya.addthis_conf || (Ya.addthis_conf = {}), M && (M.href.indexOf("_at_test300") > -1 || M.href.indexOf("_addthis_upgrade_test") > -1) && (_atc.ver = 300);
            for (var qa in addthis_conf)_atc[qa] = addthis_conf[qa];
            _atc.ost = 1
        }
        _ate.log = Ye, _ate.ckv = Fe(document.cookie, ";"), _ate.cookie = {read: ya.read, write: ya.write, kill: ya.kill, rck: ya.read, sck: Aa.sck, kck: Aa.kck, cww: Aa.cww, gov: Aa.gov, isgv: Aa.isgv, ssc: Pe, KV: ba, tag: Ge, view: He, visit: We}, _ate.mun = Ve, _ate.getVisibility = qe, _ate.math = {}, _ate.math.murmur32 = Qe, Ha.params = la(ea(Wa.search), Ha, _ate), me(_ate.ad, {type: a(123)(), ref: {r_ondomain: ma.ON_DOMAIN, r_offdomain: ma.OFF_DOMAIN, r_direct: ma.DIRECT, r_search: ma.SEARCH}, gub: pa, clr: wa, iss: ua, fst: Da}), me(_ate.data, {storage: {all: ra.getAll, clear: ra.removeAll, add: ra.add, get: ra.get, remove: ra.remove, exists: ra.exists, preRemove: ra.removeByPrefix}, bloom: {filter: ha, library: ca(ra, _ate.ich)}}), me(_ate, {track: {ran: S, fcv: Va.formatCustomEvent, her: Va.handleEngagementResponse, mgu: Va.mungeURL, ssid: Va.ssid, sta: Va.sta, uns: Va.uns, lpx: Va.loadPixel, sxm: Va.scheduleTransmit, sendEngagement: Va.sendEngagement, dropPixel: va, cur: Ea.clickifyURL, eop: Ea.extractOurParameters, dcu: Ea.declickifyURL, gcc: Ea.generateClickbackCode, cpf: Ea.clickPrefix, ctp: Ea.clickTrackableProduct, ich: Ea.isClickHash, ict: Ea.isClickTrackingEnabled, hist: {log: ga.logURL, seenBefore: ga.seenBefore}, ts: {get: Fa.getTrafficSource, gst: Fa.getSearchTerms, set: Fa.setState, reset: Fa.resetState}}, lng: Z, jlng: V, iwb: q, ivl: Q, gfl: J, ggl: X, gvl: K, ulg: $, alg: te.get, _t: ee, trim: ae, trl: ne, truncateURL: se, opp: oe, ajs: ie, jlo: W, ao: P, ac: G, as: H}), _ate.cbs = {};
        var Qa = Ze("_ate.cbs"), Ja = Qa.storeCallback, Xa = Qa.getCallbackCallTime;
        me(_ate.util, {scb: Ja, storeCallback: Ja, getCallbackCallTime: Xa, ghp: $e, gqp: ea, cuid: Je.makeCUID, ivc: Je.isValidCUID, iooc: Je.isOptOutCUID, ioc: Je.isCUIDOlderThan, atob: Xe.atob, btoa: Xe.btoa, geo: {dec: Ke.decodeGeo, parse: Ke.parseGeo, isin: Ke.isLocatedIn}, host: Ae, gsp: aa, gst: ia, gtt: function () {
            var t = Pa.getElementsByTagName("script");
            return t[t.length - 1]
        }, pae: oa, pas: na, baseToDecimal: Ca, hbtoa: Xe.hbtoa, atohb: Xe.atohb, gebcn: sa.getElementsByClassPrefix, select: sa.select, parent: sa.getParent, qsa: sa.querySelectorAll, gettxt: sa.getText}), me(_ate, {resource: {Resource: U, Bundle: L, useHighResIcons: Na, sprite: Ra}}), _ate.sid = _ate.track.ssid(), window.parent === window && (Ee(window, "message", za.messageHandler), Ee(window, "scroll", za.handler), Ee(window, "resize", za.resizeHandler)), function () {
            function t(t) {
                $ || (D("plvp", "3", t, {}, 1), $ = !0)
            }

            function e(t) {
                t = t.split("-").shift();
                for (var e = 0; e < q.length; e++)if (q[e] == t)return;
                n("cmd=ttv&pco=" + t), Q = t, q.push(t)
            }

            function a(t) {
                t = t.split("-").shift();
                for (var e = 0; e < X.length; e++)if (X[e] == t)return;
                X.push(t)
            }

            function i(t, a, o) {
                var n;
                if ("string" == typeof t && t && "#" == t.charAt(0) && (n = t.substr(1)), n && (t = document.getElementById(n), !t))return void setTimeout(function () {
                    i("#" + n, a, o)
                }, 1e3);
                if (_ate.getVisibility(t) > 0)o && J.push(o), e(a); else {
                    var s, l = function () {
                        _ate.getVisibility(t) > 0 ? (o && J.push(o), e(a), _ate.util.unlisten(window, "scroll", l)) : (s && (clearTimeout(s), s = _), s = setTimeout(l, 3e3))
                    };
                    _ate.util.listen(window, "scroll", l)
                }
            }

            function o() {
                var t = S.getElementById("_atssh");
                return t || (t = S.ce("div"), t.style.visibility = "hidden", t.id = "_atssh", I.opp(t), S.body.insertBefore(t, S.body.firstChild)), t
            }

            function n(t) {
                z && z.post(t)
            }

            function s(t, e) {
                var a, i = Math.floor(1e3 * Math.random()), n = o();
                return e || V || !_atc._atf || I.bro.ie6 || I.bro.ie7 ? (I.bro.msi ? (I.bro.ie6 && !t && 0 === S.location.protocol.indexOf("https") && (t = "javascript:''"), n.innerHTML = '<iframe id="_atssh' + i + '" width="1" height="1" title="AddThis utility frame" name="_atssh' + i + '" ' + (t ? 'src="' + t + '"' : "") + ">", a = S.getElementById("_atssh" + i)) : (a = S.ce("iframe"), a.id = "_atssh" + i, a.title = "AddThis utility frame"), I.opp(a), a.frameborder = a.style.border = 0, a.style.top = a.style.left = 0, a) : (V = _atc._atf, I.bro.msi && (V.url = t), V)
            }

            function l() {
                if (document.getElementById("product"))return!0;
                if ("function" == typeof document.getElementsByClassName && (document.getElementsByClassName("product") || []).length > 0)return!0;
                if (document.getElementById("productDescription"))return!0;
                if (document.getElementById("page-product"))return!0;
                if (document.getElementById("vm_cart_products"))return!0;
                if (window.Virtuemart)return!0;
                var t, e = I.ad.gog();
                return _ate.util.each(e, function (e, a) {
                    "type=product" == a && (t = 1)
                }), t ? !0 : void 0
            }

            function r() {
                var t = window;
                return(((t.jQuery || {}).fn || {}).jquery && 1) | ((t.Prototype || {}).Version && 2) | ((t.YUI || {}).version || (t.YAHOO || {}).VERSION && 4) | ((t.Ext || {}).version && 8) | ((t.dojo || {}).version && 16) | ((t._gaq || t._gat) && 32) | (t.google_ad_client && 64) | ((t.FB || t.fbAsyncInit) && 128) | (t.$BTB && 256) | (t.meebo && 512) | (t.gigya && 1024) | (t.SHARETHIS && 2048) | (t._qevents && 4096) | (t.twttr && 8192) | (t.postwidgetnamespace && 16384) | (t.a2a && 32768) | (t.SHRSB_Settings && 65536) | (t._sf_async_config && 131072) | (t.Shopify && 262144)
            }

            function h(t) {
                t && t.data && t.data.pco && t.data.url && (T.push(I.track.fcv("typ", "lnk")), T.push(I.track.fcv("pco", t.data.pco)), T.push(I.track.fcv("pur", I.track.mgu(t.data.url, {defrag: 1}))), b(!0))
            }

            function c() {
            }

            function d(t) {
                t && t.data && t.data.service && t.data.url && w({gen: I.ad.type.FOLLOW, pix: "dest=" + t.data.service, svc: t.data.service, url: t.data.url})
            }

            function v(t) {
                I.uid;
                t && t.data && t.data.service && (w({gen: "more" === t.data.service || "settings" === t.data.service || "link" === t.data.service || "email" === t.data.service ? I.ad.type.NOOP : I.ad.type.SHARE, pix: "dest=" + t.data.service, svc: t.data.service, url: t.data.url || null}), I.dcp = I.ad.type.SHARE)
            }

            function f(t) {
                Math.random() < .01 && (t.data.call && te.push(t.data.call), B || (B = setTimeout(function () {
                    D("ap", "3", "calls=" + _euc(te.join(",")), {})
                }, 1e4)))
            }

            function g() {
                if (q.length && q.length != K) {
                    K = q.length;
                    var t = {vpc: Q};
                    "-" != I.ab && (t.ab = I.ab), D("plvp", "3", J.length ? J.join("&") : "", t)
                }
                setTimeout(g, 100)
            }

            function p() {
                Math.random() < _atc.plmp && g()
            }

            function u(t) {
                var e = {}, a = t.data || {}, i = a.svc, o = a.pco, n = a.cmo, s = a.crs, l = a.cso;
                i && (e.sh = i), n && (e.cm = n), l && (e.cs = 1), s && (e.cr = 1), o && (e.spc = o), D("sh", "3", null, e)
            }

            function m(t) {
                var e = {}, i = t.data || {}, o = i.svc, n = i.pco || "wmb-1.0";
                i.showCount > 1 || (e.sh = "wombat", n && (e.spc = n), o && (e.sc = o), D("sh", "3", null, e), a(i.pco))
            }

            function w(t, e) {
                var a = I.dr, i = window._atc.rev || "";
                if (t)if (t.xck = _atc.xck ? 1 : 0, t.xxl = 1, t.sid = I.track.ssid(), t.pub = I.pub(), t.ssl = I.ssl || 0, t.du = I.truncateURL(t.url || I.du || I.dl.href), t.xtr = e !== _ ? 0 : _atc.xtr, I.dt && (t.dt = I.dt), I.cb && (t.cb = I.cb), I.kw && (t.kw = I.kw), t.lng = I.lng(), t.ver = 300, t.jsl = I.track.jsl(), t.prod = I.track.prod(), !I.upm && I.uid && (t.uid = I.uid), t.pc = t.spc || X.join(","), Q && (t.vpc = Q), a && (t.dr = I.truncateURL(a)), I.dh && (t.dh = I.dh), i && (t.rev = i), I.xfr)if (I.upm && z)z.post(ue(t)); else {
                    var n = o();
                    V && n.removeChild(n.firstChild), V = s(), V.src = Ma + "#" + ue(t), n.appendChild(V)
                } else W.push(t)
            }

            function D(t, e, a, i, o) {
                if (!window.at_sub && !_atc.xtr) {
                    var n = i || {};
                    n.evt = t, a && (n.ext = a), j = n, 1 === o ? x(!0) : I.track.sxm(!0, x)
                }
            }

            function F(t, e) {
                T.push(I.track.fcv(t, e)), I.track.sxm(!0, x)
            }

            function x(t) {
                I.dl ? I.dl.hostname : "";
                if (T.length > 0 || j) {
                    if (I.track.sxm(!1, x), _atc.xtr)return;
                    var e = j || {};
                    if (e.ce = T.join(","), T = [], j = null, w(e), t) {
                        var a = S.ce("iframe");
                        a.id = "_atf", _ate.opp(a), S.body.appendChild(a), a = S.getElementById("_atf")
                    }
                }
            }

            function b(t) {
                var e = _ate, a = e.lng().split("-").shift(), i = e.dl ? e.dl.hostname : "";
                if (T.length > 0) {
                    if (_atc.xtr)return;
                    (i.indexOf(".gov") > -1 || i.indexOf(".mil") > -1) && (_atc.xck = 1), e.dt && T.push(e.track.fcv("pti", e.dt)), T.push(e.track.fcv("lng", a)), e.cb && T.push(e.track.fcv("cb", e.cb));
                    var o = R + "-" + e.track.ran() + ".png?ev=" + e.track.sta() + "&ce=" + _euc(T.join(",")) + (_atc.xck ? "&xck=1" : "") + (e.dr ? "&dr=" + _euc(e.track.mgu(e.dr, {defrag: 1})) : "") + (e.du ? "&PRE=" + _euc(e.track.mgu(e.du, {defrag: 1})) : ""), n = N + o;
                    T = [], e.track.lpx({url: n, close: t})
                }
            }

            function C(t) {
                y.debug(t), E(t)
            }

            function E(t) {
                return t ? t.pco ? (t.ruleId || y.warn("missing ruleId, only OK if no audiences are specified for the tool `" + t.pco + "`."), t.url || (t.url = _ate.du), T.push(I.track.fcv("typ", "lnk")), T.push(I.track.fcv("pco", t.pco)), T.push(I.track.fcv("pur", I.track.mgu(t.url, {defrag: !0}))), t.goal && T.push(I.track.fcv("goal", t.goal)), t.ruleId && T.push(I.track.fcv("cad", t.ruleId)), void b(!0)) : void y.error("missing pco") : void y.error("missing data")
            }

            function M(t, e) {
                var a = ((e || {}).id || _ate.uid, (e || {}).service || "unk");
                F("typ", t), F("pur", I.track.mgu(I.du, {defrag: 1})), F("sto", a)
            }

            function k(t) {
                M("soc", t)
            }

            function A() {
                var t = "", e = "";
                if (window.getSelection && (e = window.getSelection() || "", t = _ate.trim(e.toString()).replace(G, " ").replace(/[\b]+/g, " ").split(" "), t.length)) {
                    if (Y && 3 > O && F("cbc", t.length), O++, !P)return;
                    for (var a = [], i = 0; i < t.length; i++)t[i] && t[i].length <= 50 && -1 == t[i].indexOf("@") && -1 == t[i].indexOf("://") && !H.test(t[i]) && a.push(t[i]);
                    a.length && a.length <= 5 && (!I.dcp || I.dcp < I.ad.type.COPY) && setTimeout(function () {
                        w({gen: I.ad.type.COPY, pix: "tt=" + _euc(a.join(" "))}), I.dcp = I.ad.type.COPY
                    }, 1e4 * Math.random())
                }
            }

            var B, S = document, I = _ate, O = 0, T = [], j = null, R = "tev", N = "//o.addthis.com/at/", U = function (t) {
                var e = _ate.track.ts.get();
                "social" == e.type ? _ate.cookie.ssc.update(e.service) : t && _ate.cookie.ssc.update(t)
            }, L = {ftho: 1, aqe3: 1, d99r: 1, neud: 1, "8elu": 1, bqfn: 1}, Y = Math.random() < _atc.csmp, P = !0, G = new RegExp(/\(?(\d{3})\)?[\- ]?(\d{3})[\- ]?(\d{4})/g), H = new RegExp(/^((([a-z]|[0-9]|\-)+)\.)+([a-z])+$/gi), W = [], Z = function () {
                for (var t; t = W.pop();)w(t)
            }, V = null, q = [], Q = null, J = [], X = [], K = 0, $ = !1, te = [];
            _ate.ed.addEventListener("addthis-internal.params.loaded", function () {
                var t = (Ya.addthis_config || {}).data_track_textcopy;
                P = t !== !1 && (P || !_ate.sub && ((Wa || {}).href || "").indexOf(".addthis.com") > -1 || L[_ate.mun(_ate.pub())] || (Ya.addthis_config || {}).data_track_textcopy || (window.addthis_product || "").indexOf("wpp") > -1 || (window.addthis_product || "").indexOf("blg") > -1);
                try {
                    (Y || P) && (I.bro.msi ? document.body.attachEvent("oncopy", A, !0) : document.addEventListener("copy", A, !0))
                } catch (e) {
                }
            }), I.ed.addEventListener("addthis-internal.api", f), I.ed.addEventListener("addthis-internal.compact", u), I.ed.addEventListener("addthis-internal.bar.show", m), I.ed.addEventListener("addthis-internal.link.click", h), I.ed.addEventListener("addthis-internal.ready", p), I.ed.addEventListener("addthis-internal.conversion", C), I.ed.addEventListener("addthis.bar.show", m), I.ed.addEventListener("addthis.menu.share", v), I.ed.addEventListener("addthis.menu.follow", d), I.ed.addEventListener("addthis.menu.comment", c), I.track || (I.track = {}), I.util.extend(I.track, {pcs: X, apc: a, sdt: t, avpc: e, avp: i, cev: F, ctf: s, jsl: r, prod: l, osc: k, gtf: o, qtp: function (t) {
                W.push(t)
            }, ssc: U, stf: function (t) {
                V = t
            }, trk: w, trl: h, xtp: Z, msg: n, conversion: E})
        }(), me(_ate, {_rec: [], xfr: !_ate.upm || !_ate.bro.ffx, pmh: function (t) {
            var e, a = _ate._rec;
            if (".addthis.com" == t.origin.slice(-12)) {
                if (!t.data)return;
                if (t.data.length)if (_ate.unj && t.data.indexOf && 0 === t.data.indexOf("{"))try {
                    e = JSON.parse(t.data)
                } catch (t) {
                    e = _ate.util.rfromKV(t.data)
                } else e = _ate.util.rfromKV(t.data); else e = t.data;
                for (var i = 0; i < a.length; i++)a[i](e)
            }
        }}), function (t) {
            function e(t) {
                return t.replace(/[a-zA-Z]/g, function (t) {
                    return String.fromCharCode(("Z" >= t ? 90 : 122) >= (t = t.charCodeAt(0) + 13) ? t : t - 26)
                })
            }

            function a(t) {
                var e = 0;
                return t && "string" == typeof t ? (t = ((t || "").toLowerCase() + "").replace(/ /g, ""), ("mature" == t || "adult" == t || "rta-5042-1996-1400-1577-rta" == t) && (e |= m), e) : e
            }

            function i(t, e) {
                var a, i, o = 0;
                if (!t || "string" != typeof t)return o;
                for (t = ((t || "").toLowerCase() + "").replace(/[^a-zA-Z]/g, " ").split(" "), a = 0, i = t.length; i > a; a++)if (A[t[a]] || !e && y[t[a]])return o |= m;
                return o
            }

            function o() {
                h();
                var t, e, o, r = u.addthis_title || p.title, c = i(r), d = (g || "").length;
                if (c |= i(p.location.hostname, !0), s(r, _, !1), n("h1", M), n("p", k, 150, 250), g && d)for (; d--;)t = g[d] || {}, e = (t.name || (t.getAttribute ? t.getAttribute("property") : "") || "").toLowerCase(), o = t.content, ("description" == e || "keywords" == e) && (c |= i(o), "description" == e && s(o, z, !1)), "rating" == e && (c |= a(o)), "keywords" == e && o && o.length && (l(o), s(o, z, !0));
                return c
            }

            function n(e, a, i, o) {
                if (e) {
                    var n, l = t.util.qsa(e);
                    _ate.util.each(l, function (e, l) {
                        return o && e > o ? !1 : (n = t.util.gettxt(l), void((!i || n.length > i) && s(n, a, !1)))
                    })
                }
            }

            function s(t, e, a) {
                var i, o, n = t || "";
                if (n)for (n = n.split(a ? /[,\n\r]+/ : /[ ,\n\r]+/), o = 0; o < n.length; o++)i = _ate.trim(n[o].toLowerCase()).replace(/['"]/, "").replace(/['",.?!]+$/, ""), i && (i.length < 3 || B[i] || (b[i] = (b[i] || 0) + (e || 1)))
            }

            function l(t) {
                var e, a, i = t.split(","), o = 200;
                for (a = 0; a < i.length && (e = _ate.trim(i[a]), (o -= e.length + 1) > 0); a++)C.push(e)
            }

            function r() {
                h();
                var t, e, a, i, o = [], n = (g || "").length;
                if (g && n)for (; n--;)t = g[n] || {}, e = ((t.getAttribute ? t.getAttribute("property") : "") || t.name || "").toLowerCase(), a = t.content, 0 === e.indexOf("og:") && (i = e.split(":").pop(), (o.length < 7 || "type" == i) && o.push("type" == i ? i + "=" + a : i));
                return o
            }

            function h() {
                g || (g = p.all && "function" == typeof p.all.tags ? p.all.tags("META") : p.getElementsByTagName ? p.getElementsByTagName("META") : new Array, _ate.meta = g)
            }

            function c() {
                h();
                var t, e = {}, a = "";
                if (!g || 0 == g.length)return e;
                for (t = 0; t < g.length; t++)a = g[t].getAttribute("property") || "", -1 != a.search(/^og:/i) && (e[a.replace("og:", "")] = g[t].content);
                return ue(e)
            }

            function d() {
                return C.join(",")
            }

            function v() {
                var e, a = (new Date).getTime(), i = [];
                return _ate.util.each(b, function (t, e) {
                    i.push({name: "1|" + t, weight: Math.round(100 * e) / 100})
                }), i.sort(function (t, e) {
                    return t.weight > e.weight ? -1 : 1
                }), i = i.slice(0, E), e = (new Date).getTime(), t.log.debug("gcv", i, "te=" + (e - a) + " ms"), i
            }

            function f() {
                var t = document.charset || document.characterSet || document.inputEncoding || document.defaultCharset;
                if (!t)for (h(), F = 0; F < g.length && !(t = g[F].getAttribute("charset")); F++);
                return!t || t.length > 14 ? "" : t
            }

            for (var g, p = document, u = window, m = 1, w = ["cbea", "cbeab", "kkk", "zvys", "gvgf", "shpxf", "chfflyvcf", "pernzcvr", "svfgvat", "wvmm", "fcybbtr", "flovna"], D = ["phz"], F = w.length, x = D.length, b = {}, C = [], E = 25, z = 15, _ = 10, M = 5, k = .333, y = {}, A = {}, B = {mr: 1, a: 1, able: 1, about: 1, above: 1, abst: 1, accordance: 1, according: 1, accordingly: 1, across: 1, act: 1, actually: 1, added: 1, adj: 1, adopted: 1, affected: 1, affecting: 1, affects: 1, after: 1, afterwards: 1, again: 1, against: 1, ah: 1, all: 1, almost: 1, alone: 1, along: 1, already: 1, also: 1, although: 1, always: 1, am: 1, among: 1, amongst: 1, an: 1, and: 1, announce: 1, another: 1, any: 1, anybody: 1, anyhow: 1, anymore: 1, anyone: 1, anything: 1, anyway: 1, anyways: 1, anywhere: 1, apparently: 1, approximately: 1, are: 1, aren: 1, arent: 1, arise: 1, around: 1, as: 1, aside: 1, ask: 1, asking: 1, at: 1, auth: 1, available: 1, away: 1, awfully: 1, b: 1, back: 1, be: 1, became: 1, because: 1, become: 1, becomes: 1, becoming: 1, been: 1, before: 1, beforehand: 1, begin: 1, beginning: 1, beginnings: 1, begins: 1, behind: 1, being: 1, believe: 1, below: 1, beside: 1, besides: 1, between: 1, beyond: 1, biol: 1, both: 1, brief: 1, briefly: 1, but: 1, by: 1, c: 1, ca: 1, came: 1, can: 1, cannot: 1, "can't": 1, cause: 1, causes: 1, certain: 1, certainly: 1, co: 1, com: 1, come: 1, comes: 1, contain: 1, containing: 1, contains: 1, could: 1, couldnt: 1, d: 1, date: 1, did: 1, "didn't": 1, different: 1, "do": 1, does: 1, "doesn't": 1, doing: 1, done: 1, "don't": 1, down: 1, downwards: 1, due: 1, during: 1, e: 1, each: 1, ed: 1, edu: 1, effect: 1, eg: 1, eight: 1, eighty: 1, either: 1, "else": 1, elsewhere: 1, end: 1, ending: 1, enough: 1, especially: 1, et: 1, "et-al": 1, etc: 1, even: 1, ever: 1, every: 1, everybody: 1, everyone: 1, everything: 1, everywhere: 1, ex: 1, except: 1, f: 1, far: 1, few: 1, ff: 1, fifth: 1, first: 1, five: 1, fix: 1, followed: 1, following: 1, follows: 1, "for": 1, former: 1, formerly: 1, forth: 1, found: 1, four: 1, from: 1, further: 1, furthermore: 1, g: 1, gave: 1, get: 1, gets: 1, getting: 1, give: 1, given: 1, gives: 1, giving: 1, go: 1, goes: 1, gone: 1, got: 1, gotten: 1, h: 1, had: 1, happens: 1, hardly: 1, has: 1, "hasn't": 1, have: 1, "haven't": 1, having: 1, he: 1, hed: 1, hence: 1, her: 1, here: 1, hereafter: 1, hereby: 1, herein: 1, heres: 1, hereupon: 1, hers: 1, herself: 1, hes: 1, hi: 1, hid: 1, him: 1, himself: 1, his: 1, hither: 1, home: 1, how: 1, howbeit: 1, however: 1, hundred: 1, i: 1, id: 1, ie: 1, "if": 1, "i'll": 1, im: 1, immediate: 1, immediately: 1, importance: 1, important: 1, "in": 1, inc: 1, indeed: 1, index: 1, information: 1, instead: 1, into: 1, invention: 1, inward: 1, is: 1, "isn't": 1, it: 1, itd: 1, "it'll": 1, its: 1, itself: 1, "i've": 1, j: 1, just: 1, k: 1, keep: 1, keeps: 1, kept: 1, keys: 1, kg: 1, km: 1, know: 1, known: 1, knows: 1, l: 1, largely: 1, last: 1, lately: 1, later: 1, latter: 1, latterly: 1, least: 1, less: 1, lest: 1, let: 1, lets: 1, like: 1, liked: 1, likely: 1, line: 1, little: 1, "'ll": 1, look: 1, looking: 1, looks: 1, ltd: 1, m: 1, made: 1, mainly: 1, make: 1, makes: 1, many: 1, may: 1, maybe: 1, me: 1, mean: 1, means: 1, meantime: 1, meanwhile: 1, merely: 1, mg: 1, might: 1, million: 1, miss: 1, ml: 1, more: 1, moreover: 1, most: 1, mostly: 1, mr: 1, mrs: 1, much: 1, mug: 1, must: 1, my: 1, myself: 1, n: 1, na: 1, name: 1, namely: 1, nay: 1, nd: 1, near: 1, nearly: 1, necessarily: 1, necessary: 1, need: 1, needs: 1, neither: 1, never: 1, nevertheless: 1, "new": 1, next: 1, nine: 1, ninety: 1, no: 1, nobody: 1, non: 1, none: 1, nonetheless: 1, noone: 1, nor: 1, normally: 1, nos: 1, not: 1, noted: 1, nothing: 1, now: 1, nowhere: 1, o: 1, obtain: 1, obtained: 1, obviously: 1, of: 1, off: 1, often: 1, oh: 1, ok: 1, okay: 1, old: 1, omitted: 1, on: 1, once: 1, one: 1, ones: 1, only: 1, onto: 1, or: 1, ord: 1, other: 1, others: 1, otherwise: 1, ought: 1, our: 1, ours: 1, ourselves: 1, out: 1, outside: 1, over: 1, overall: 1, owing: 1, own: 1, p: 1, page: 1, pages: 1, part: 1, particular: 1, particularly: 1, past: 1, per: 1, perhaps: 1, placed: 1, please: 1, plus: 1, poorly: 1, possible: 1, possibly: 1, potentially: 1, pp: 1, predominantly: 1, present: 1, previously: 1, primarily: 1, probably: 1, promptly: 1, proud: 1, provides: 1, put: 1, q: 1, que: 1, quickly: 1, quite: 1, qv: 1, r: 1, ran: 1, rather: 1, rd: 1, re: 1, readily: 1, really: 1, recent: 1, recently: 1, ref: 1, refs: 1, regarding: 1, regardless: 1, regards: 1, related: 1, relatively: 1, research: 1, respectively: 1, resulted: 1, resulting: 1, results: 1, right: 1, run: 1, s: 1, said: 1, same: 1, saw: 1, say: 1, saying: 1, says: 1, sec: 1, section: 1, see: 1, seeing: 1, seem: 1, seemed: 1, seeming: 1, seems: 1, seen: 1, self: 1, selves: 1, sent: 1, seven: 1, several: 1, shall: 1, she: 1, shed: 1, "she'll": 1, shes: 1, should: 1, "shouldn't": 1, show: 1, showed: 1, shown: 1, showns: 1, shows: 1, significant: 1, significantly: 1, similar: 1, similarly: 1, since: 1, six: 1, slightly: 1, so: 1, some: 1, somebody: 1, somehow: 1, someone: 1, somethan: 1, something: 1, sometime: 1, sometimes: 1, somewhat: 1, somewhere: 1, soon: 1, sorry: 1, specifically: 1, specified: 1, specify: 1, specifying: 1, state: 1, states: 1, still: 1, stop: 1, strongly: 1, sub: 1, substantially: 1, successfully: 1, such: 1, sufficiently: 1, suggest: 1, sup: 1, sure: 1, t: 1, take: 1, taken: 1, taking: 1, tell: 1, tends: 1, th: 1, than: 1, thank: 1, thanks: 1, thanx: 1, that: 1, "that'll": 1, thats: 1, "that've": 1, the: 1, their: 1, theirs: 1, them: 1, themselves: 1, then: 1, thence: 1, there: 1, thereafter: 1, thereby: 1, thered: 1, therefore: 1, therein: 1, "there'll": 1, thereof: 1, therere: 1, theres: 1, thereto: 1, thereupon: 1, "there've": 1, these: 1, they: 1, theyd: 1, "they'll": 1, theyre: 1, "they've": 1, think: 1, "this": 1, those: 1, thou: 1, though: 1, thoughh: 1, thousand: 1, throug: 1, through: 1, throughout: 1, thru: 1, thus: 1, til: 1, tip: 1, to: 1, together: 1, too: 1, took: 1, toward: 1, towards: 1, tried: 1, tries: 1, truly: 1, "try": 1, trying: 1, ts: 1, twice: 1, two: 1, u: 1, un: 1, under: 1, unfortunately: 1, unless: 1, unlike: 1, unlikely: 1, until: 1, unto: 1, up: 1, upon: 1, ups: 1, us: 1, use: 1, used: 1, useful: 1, usefully: 1, usefulness: 1, uses: 1, using: 1, usually: 1, v: 1, value: 1, various: 1, "'ve": 1, very: 1, via: 1, viz: 1, vol: 1, vols: 1, vs: 1, w: 1, want: 1, wants: 1, was: 1, "wasn't": 1, way: 1, we: 1, wed: 1, welcome: 1, "we'll": 1, went: 1, were: 1, "weren't": 1, "we've": 1, what: 1, whatever: 1, "what'll": 1, whats: 1, when: 1, whence: 1, whenever: 1, where: 1, whereafter: 1, whereas: 1, whereby: 1, wherein: 1, wheres: 1, whereupon: 1, wherever: 1, whether: 1, which: 1, "while": 1, whim: 1, whither: 1, who: 1, whod: 1, whoever: 1, whole: 1, "who'll": 1, whom: 1, whomever: 1, whos: 1, whose: 1, why: 1, widely: 1, willing: 1, wish: 1, "with": 1, within: 1, without: 1, "won't": 1, words: 1, world: 1, would: 1, "wouldn't": 1, www: 1, x: 1, y: 1, yes: 1, yet: 1, you: 1, youd: 1, "you'll": 1, your: 1, youre: 1, yours: 1, yourself: 1, yourselves: 1}; F--;)A[e(w[F])] = 1;
            for (; x--;)y[e(D[x])] = 1;
            t.ad || (t.ad = {}), me(t.ad, {cla: o, gog: r, og: c, kw: d, gcv: v, gch: f})
        }(_ate, _ate.api, _ate), function (t) {
            function e(t) {
                s ? setTimeout(function () {
                    _ate.track.trk(t, !0)
                }, _ate.upm ? 0 : 2 * _ate.wait) : n.push(t)
            }

            function a(t) {
                var a = {pco: "cnv-100"}, i = {pxid: 1, ev: 1};
                if (t)for (var n in t)i[n] && (a[n] = t[n]);
                e({gen: 2e3, fcp: 1, pix: o.util.toKV(a)})
            }

            function i(t) {
                e({pixu: t})
            }

            var o = t, n = [], s = !_ate.upm || (_ate.dat || {}).rdy;
            o.du || (o.du = document.location.href), o.dh || (o.dh = document.location.hostname), o.dr || (o.dr = document.referrer), t.ad || (t.ad = {}), me(t.ad, {event: a, getPixels: i}), _ate.ed.addEventListener("addthis-internal.data.rdy", function () {
                s = 1;
                for (var t = 0; t < n.length; t++)e(n[t])
            })
        }(_ate, _ate.api, _ate), function (t) {
            function e(t, e, a, i, o, n, s) {
                return"function" != typeof s || s.ost || (s(), s.ost = 1), a || (a = window.addthis), "function" == typeof n ? function () {
                    i && i.apply(a, arguments);
                    var e = arguments;
                    o ? _ate.ed.once(o, function () {
                        n.apply(a, e)
                    }) : t.addEventListener("load", function () {
                        n.apply(a, e)
                    }), t.load()
                } : function (n, s, l) {
                    n && (n = _ate.util.select(n), n.length && (i && i(n), o ? _ate.ed.addEventListener(o, function () {
                        a[e](n, s, l)
                    }) : t.addEventListener("load", function () {
                        a[e](n, s, l)
                    }), t.load()))
                }
            }

            function a(t) {
                var a, i = function () {
                    throw new Error("Invalid internal API request")
                }, o = t && t.context || window.addthis;
                t || i(), t.resources instanceof Array && (t.resources = new _ate.resource.Bundle(t.resources)), t.resources || i(), t.method || i(), a = e(t.resources, t.method, t.context, t.pre, t.event, t.callback, t.oncall), o[t.method] = function () {
                    var t = arguments;
                    _atc.xol && !_adr.isReady ? _adr.append(function () {
                        a.apply(o, t)
                    }) : a.apply(o, t)
                }
            }

            function i(t) {
                t.methods && _ate.util.each(t.methods, function (e, i) {
                    i.method = e, t.context && (i.context = t.context), t.resources && (i.resources = t.resources), a(i)
                })
            }

            t.api = {ApiQueueFactory: e, addAsync: a, register: i}
        }(_ate, _ate.api, _ate), function (t) {
            function e() {
                var t, e, a = Pa.gn("link"), i = {};
                for (t = 0; t < a.length; t++)e = a[t], e.href && e.rel && (i[e.rel] = e.href);
                return i
            }

            function i(t, e) {
                var a = {pinterest_share: "pinterest", pinterest_pinit: "pinterest"}, i = null;
                return a[e] ? ((t || {}).passthrough || {})[e] ? i = t.passthrough[e] : ((t || {}).passthrough || {})[a[e]] && (i = t.passthrough[a[e]]) : i = ((t || {}).passthrough || {})[e], i ? "&passthrough=" + w.trim("object" == typeof i ? w.util.toKV(i) : i, 1) : ""
            }

            function o(t, e, o, n) {
                var s, l, r, h, c, d, v = a(50), f = a(27), g = w.trim, p = Ya, u = ka(), m = Ya._atw || {}, D = o && o.url ? o.url : m.share && m.share.url ? m.share.url : p.addthis_url || p.location.href, x = function (t) {
                    D && "" != D && (h = D.indexOf("#at" + t), h > -1 && (D = D.substr(0, h)))
                };
                if (n)for (s in Ya.conf)n[s] || (n[s] = Ya.conf[s]); else n = Ya.conf || {};
                if (o)for (s in Ya.share)o[s] || (o[s] = Ya.share[s]); else o = Ya.share || {};
                if (w.rsu() && (o.dataUrl || (o.url = Ya.addthis_url), o.dataTitle || (o.title = Ya.addthis_title), D = o.url), F.canonical && !o.trackurl && o.imp_url && !_ate.share.inBm() && (o.trackurl = F.canonical), u && "undefined" != u || (u = "unknown"), d = n.services_custom, x("pro"), x("opp"), x("cle"), x("clb"), x("abc"), x("_pco"), D.indexOf("addthis.com/static/r07/ab") > -1)for (D = D.split("&"), h = 0; h < D.length; h++)if (c = D[h].split("="), 2 == c.length && "url" == c[0]) {
                    D = c[1];
                    break
                }
                if (d instanceof Object && "0"in d)for (h in d)if (d[h].code == t) {
                    d = d[h];
                    break
                }
                var b = o.templates && o.templates[t] ? o.templates[t] : "", C = o.smd || w.smd, E = o.modules && o.modules[t] ? o.modules[t] : "", z = o.share_url_transforms || o.url_transforms || {}, _ = o.track_url_transforms || o.url_transforms, M = z && z.shorten && -1 === t.indexOf("pinterest") ? "string" == typeof z.shorten ? z.shorten : z.shorten[t] || z.shorten["default"] || "" : "", k = "", y = n.product || p.addthis_product || "men-300", A = Ya.crs, B = o.email_vars || n.email_vars, S = "", I = v(D), O = 2 == I.length ? I.shift().split("=").pop() : "", T = 2 == I.length ? I.pop() : "", j = n.data_track_clickback || n.data_track_linkback || !u || "AddThis" == u || n.data_track_clickback !== !1 && !0;
                if (n.data_track_clickback === !1 && (j = !1), B)for (s in B)S += ("" == S ? "" : "&") + _euc(s) + "=" + _euc(B[s]);
                if (w.track.spc && -1 == y.indexOf(w.track.spc) && (y += "," + w.track.spc), z && z.shorten && o.shorteners && -1 == t.indexOf("pinterest"))for (s in o.shorteners)for (l in o.shorteners[s])k += (k.length ? "&" : "") + _euc(s + "." + l) + "=" + _euc(o.shorteners[s][l]);
                return D = f(D), D = w.track.mgu(D, z, o, t), _ && (o.trackurl = w.track.mgu(o.trackurl || D, _, o, t)), r = "pub=" + u + "&source=" + y + "&lng=" + (w.lng() || "xx") + "&s=" + t + (n.ui_508_compliant ? "&u508=1" : "") + (e ? "&h1=" + g((o.feed || o.url || "").replace("feed://", ""), 1) + "&t1=" : "&url=" + g(D, 1) + "&title=") + g(o.title || (p.addthis_title || "").replace(/AddThis\sSocial\sBookmarking\sSharing\sButton\sWidget/, ""), 1) + (e && o.userid ? "&fid=" + g(o.userid) : "") + "&ate=" + w.track.sta() + ("email" != t ? "&frommenu=1" : "") + (!Ya.addthis_ssh || A && addthis_ssh == A || !(addthis_ssh == t || addthis_ssh.search(new RegExp("(?:^|,)(" + t + ")(?:$|,)")) > -1) ? "" : "&ips=1") + (A ? "&cr=" + (t == A ? 1 : 0) : "") + "&uid=" + _euc(w.uid && "x" != w.uid ? w.uid : w.util.cuid()) + (o.email_template ? "&email_template=" + _euc(o.email_template) : "") + (S ? "&email_vars=" + _euc(S) : "") + (M ? "&shortener=" + _euc("array" == typeof M ? M.join(",") : M) : "") + (M && k ? "&" + k : "") + i(o, t) + (o.description ? "&description=" + g(o.description, 1) : "") + (o.html ? "&html=" + g(o.html, 1) : o.content ? "&html=" + g(o.content, 1) : "") + (o.trackurl && o.trackurl != D ? "&trackurl=" + g(o.trackurl, 1) : "") + (o.screenshot ? "&screenshot=" + g(o.screenshot, 1) : "") + (o.screenshot_secure ? "&screenshot_secure=" + g(o.screenshot_secure, 1) : "") + (o.swfurl ? "&swfurl=" + g(o.swfurl, 1) : "") + (o.swfurl_secure ? "&swfurl_secure=" + g(o.swfurl_secure, 1) : "") + (n.hdl ? "&hdl=1" : "") + (w.cb ? "&cb=" + w.cb : "") + (w.ufbl ? "&ufbl=1" : "") + (w.uud ? "&uud=1" : "") + (o.iframeurl ? "&iframeurl=" + g(o.iframeurl, 1) : "") + (o.width ? "&width=" + o.width : "") + (o.height ? "&height=" + o.height : "") + (n.data_track_p32 ? "&p32=" + n.data_track_p32 : "") + (j || _ate.track.ctp(n.product, n) ? "&ct=1" : "&ct=0") + ((j || _ate.track.ctp(n.product, n)) && D.indexOf("#") > -1 ? "&uct=1" : "") + (d && d.url ? "&acn=" + _euc(d.name) + "&acc=" + _euc(d.code) + "&acu=" + _euc(d.url) : "") + (C ? (C.rxi ? "&rxi=" + C.rxi : "") + (C.rsi ? "&rsi=" + C.rsi : "") + (C.gen ? "&gen=" + C.gen : "") : (O ? "&rsi=" + O : "") + (T ? "&gen=" + T : "")) + (o.xid ? "&xid=" + g(o.xid, 1) : "") + (b ? "&template=" + g(b, 1) : "") + (E ? "&module=" + g(E, 1) : "") + (n.ui_cobrand ? "&ui_cobrand=" + g(n.ui_cobrand, 1) : "") + ("email" == t ? "&ui_email_to=" + g(n.ui_email_to, 1) + "&ui_email_from=" + g(n.ui_email_from, 1) + "&ui_email_note=" + g(n.ui_email_note, 1) : "")
            }

            function n(t, e, a) {
                var i = t.xid;
                return e.data_track_clickback || e.data_track_linkback || _ate.track.ctp(e.product, e) ? w.track.gcc(i, (t.smd || w.smd || {}).gen || 0) + (a || "") : ""
            }

            function s(t) {
                return!(t.templates && t.templates.twitter || w.wlp && "http:" != w.wlp)
            }

            function l(t, e, a, i) {
                var o = {behance: "https://www.behance.net/%s", etsy: "https://www.etsy.com/shop/%s", disqus: "https://disqus.com/%s", googlebuzz: "http://www.google.com/profiles/%s", google_follow: "https://plus.google.com/%s", youtube: "http://www.youtube.com/" + (a && "channel" == a ? "channel/" : "user/") + "%s?sub_confirmation=1", facebook: "http://www.facebook.com/profile.php?id=%s", facebook_url: "http://www.facebook.com/%s", rss: "%s", flickr: "http://www.flickr.com/photos/%s", foursquare: "http://foursquare.com/%s", instagram: "http://instagram.com/%s", followgram: "http://followgram.me/%s", twitter: "http://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=%s", linkedin: a ? "group" == a ? "http://www.linkedin.com/groups?gid=%s" : "http://www.linkedin.com/company/%s" : "http://www.linkedin.com/in/%s", pinterest: "http://www.pinterest.com/%s", tumblr: "http://%s.tumblr.com", vimeo: "http://www.vimeo.com/%s"};
                return"facebook" == t && isNaN(e) && (t = "facebook_url"), "twitter" == t && e == _ && (e = (i || {})["tw:screen_name"]), e ? (o[t] || "").replace("%s", e) || null : null
            }

            function r(t, e, a, i, o, n, s, r) {
                var h = {wordpress: {width: 720, height: 570}, linkedin: {width: 600, height: 400}, twitter: {width: 520, height: 520}, "default": {width: 550, height: 450}}, c = l(t, e, r);
                return I(t, 1, a, i), i.ui_use_same_window ? M.href = c : i.ui_use_different_full_window ? Ya.open(c, "_blank") : R(c, o || (h[t] || h["default"]).width, n || (h[t] || h["default"]).height, s), !1
            }

            function h(t) {
                return T("twitter", t), !1
            }

            function c(t, e, a, i, o) {
                var n = o ? "follow" : t.indexOf("_comment") > -1 ? "comment" : "share", s = {element: i || {}, service: t || "unknown", url: o ? e.followUrl : e.trackurl || e.url};
                _ate.ed.fire("addthis.menu." + n, Ya.addthis || {}, s)
            }

            function d(t) {
                _ate.util.each(t, function (t, e) {
                    x[t] = e
                })
            }

            function v(t) {
                C.push(t)
            }

            function f() {
                _ate.util.each(C, function (t, e) {
                    e()
                })
            }

            function g(t, e, a) {
                if (x[t])try {
                    return x[t](e, a, t), e && ((e.parentNode.className || "").indexOf("toolbox") > -1 && (e.parentNode.services = e.parentNode.services || {}, e.parentNode.services[t] = 1), -1 == (e.className || "").indexOf("at300") && (e.className += " at300b")), !0
                } catch (i) {
                    return!1
                }
                return!1
            }

            function p(t) {
                _ate.util.each(t, function (t, e) {
                    b[t] = {}, _ate.util.each(e, function (e, a) {
                        b[t][e] = a
                    })
                })
            }

            function u(t, e, a) {
                var i = function () {
                };
                return b[t] ? ((!b[t].require || b[t].require(t, e, a)) && _ate.util.each(b[t], function (a, o) {
                    "_after" == a ? i = o : e[a] = function (a) {
                        return a = a || {}, a.el = e, a.service = t, o(a)
                    }
                }), i(e), !0) : !1
            }

            function m(t, e, a) {
                return svcurl() + "tellfriend.php?&fromname=aaa&fromemail=" + _euc(e.from) + "&frommenu=1&tofriend=" + _euc(e.to) + (t.email_template ? "&template=" + _euc(t.email_template) : "") + (e.vars ? "&vars=" + _euc(e.vars) : "") + "&lng=" + (w.lng() || "xx") + "&captcha_provider=nucaptcha&note=" + _euc(e.note) + "&" + o("email", null, null, a)
            }

            var w = t, D = (a(39), a(26)), F = e(), x = {}, b = {}, C = [];
            t.share = t.share || {}, t.util.extend(t.share, {auw: a(109), ocw: R, onw: a(117), caw: a(269), ftw: r, stw: a(82), siw: a(120), cleanly: T, pts: h, pws: a(139), unt: s, uadd: o, genurl: _a, geneurl: m, acb: D, gcp: n, gfu: l, svcurl: a(111), track: I, notify: c, links: F, register: d, registerListeners: p, sub: f, registerSubscriber: v, extern: g, externEvents: u})
        }(_ate, _ate.api, _ate), function (t) {
            function e() {
                return _atc.ltj && n() || o() && FB.XFBML && FB.XFBML.parse
            }

            function i() {
                if (p === _)try {
                    var t = document.getElementsByTagName("html")[0];
                    if (t)if (t.getAttribute && t.getAttribute("xmlns:fb"))p = !0; else if (_ate.bro.msi) {
                        var e = t.outerHTML.substr(0, t.outerHTML.indexOf(">"));
                        e.indexOf("xmlns:fb") > -1 && (p = !0)
                    }
                } catch (a) {
                    p = !1
                }
                return p
            }

            function o() {
                return"object" == typeof Ya.FB && FB.Event && "function" == typeof FB.Event.subscribe
            }

            function n() {
                return!(Ya.FB_RequireFeatures || Ya.FB && (FB.Share || FB.Bootstrap))
            }

            function s(t, e) {
                var a = {}, i = w[e], o = addthis_config.data_ga_tracker || addthis_config.data_ga_property;
                for (k in addthis_share)a[k] = addthis_share[k];
                if (i)for (k in i)a[k] = i[k];
                a.url = e, _ate.share.track(t, 0, a, addthis_config), o && _ate.gat(t, e, addthis_config, a)
            }

            function l() {
                -1 != u.location.href.indexOf(_atr) || _ate.sub || F || (o() ? (F = 1, FB.Event.subscribe("message.send", function (t) {
                    s("facebook_send", t)
                }), FB.Event.subscribe("edge.create", function (t) {
                    m[t] || (s("facebook_like", t), m[t] = 1)
                }), FB.Event.subscribe("edge.remove", function (t) {
                    m[t] && (s("facebook_unlike", t), m[t] = 0)
                }), FB.Event.subscribe("comment.create", function (t) {
                    s("facebook_comment", t.href)
                }), FB.Event.subscribe("comment.remove", function (t) {
                    s("facebook_uncomment", t.href)
                })) : Ya.fbAsyncInit && !b && (3 > x && setTimeout(l, 3e3 + 2e3 * x++), b = 1))
            }

            function r(t, e) {
                var a = "fb-root", i = u.getElementById(a), n = Ya.fbAsyncInit, s = !1, r = function () {
                    s = !0;
                    for (var t = 0; t < D.length; t++)FB.XFBML.parse(D[t])
                };
                if (D.push(t), o() && FB.XFBML && FB.XFBML.parse)l(), FB.XFBML.parse(t); else {
                    if (!n && (i || (i = u.ce("div"), i.id = a, document.body.appendChild(i)), !n)) {
                        var h = u.createElement("script");
                        h.src = "https://connect.facebook.net/" + (e || _ate.gfl(Z())) + "/sdk.js&version=v2.0", h.async = !0, i.appendChild(h), n = function () {
                            for (var t = u.getElementsByTagName("meta"), e = null, a = 0; a < t.length; a++)if ("fb:app_id" == t[a].property || "fb:app_id" == t[a].name) {
                                e = t[a].content;
                                break
                            }
                            FB.init({appId: e ? e : E ? "140586622674265" : "172525162793917", status: !0, cookie: !0, version: "v2.0"})
                        }
                    }
                    C && (C = !1, Ya.__orig__fbAsyncInit = n, Ya.fbAsyncInit = function () {
                        Ya.__orig__fbAsyncInit(), l(), document && "complete" === document.readyState ? r() : window.addEventListener ? (setTimeout(function () {
                            s || r()
                        }, 3e3), window.addEventListener("load", r, !1)) : r()
                    })
                }
            }

            function h(t, e) {
                t.ost || _ate.bro.ie6 || (_ate.ufbl = 1, _ate.share.fb.ready() ? d("send", t, e) : (t.className = "", t.innerHTML = "<span></span>", t.style.width = t.style.height = "0px"), t.noh = t.ost = 1)
            }

            function c(t, e) {
                t.ost || _ate.bro.ie6 || (_ate.ufbl = 1, _ate.share.fb.ready() ? d("share", t, e) : (t.className = "", t.innerHTML = "<span></span>", t.style.width = t.style.height = "0px"), t.noh = t.ost = 1)
            }

            function d(t, e, a, i) {
                i || (i = f(e, "fb:" + t)), i.href = i.href || _ate.track.mgu(a.share.url, {defrag: 1}), t = "share" === t ? t + "-button" : t, e.innerHTML = '<div class="fb-' + t + '" data-ref="' + _ate.share.gcp(a.share, a.conf, "." + t).replace(",", "_") + '"></div>', _ate.util.each(i, function (a, i) {
                    "share-button" === t && ("horizontal" === i ? i = "button_count" : "vertical" === i && (i = "box_count")), e.firstChild.setAttribute("data-" + a, i)
                }), !i || i.type || i.layout || e.firstChild.setAttribute("data-type", "box_count"), r(e)
            }

            function v(t, a) {
                if (!t.ost) {
                    var i, o, n = _ate.api.ptpa(t, "fb:subscribe");
                    _ate.util.isEmpty(n) && (n = _ate.api.ptpa(t, "fb:follow"));
                    var s = n.layout || "button_count", l = {standard: [450, n.show_faces ? 80 : 35], button_count: [90, 25], box_count: [55, 65]}, r = n.width || (l[s] ? l[s][0] : 100), h = n.height || (l[s] ? l[s][1] : 25);
                    if (passthrough = _ate.util.toKV(n), _ate.ufbl = 1, e()) {
                        n.layout === _ && (n.layout = "button_count"), n.show_faces === _ && (n.show_faces = "false"), n.action === _ && (n.action = "subscribe"), n.width === _ && (n.width = r), n.font === _ && (n.font = "arial"), n.href === _ && (n.href = _ate.track.mgu(a.share.url, {defrag: 1})), a.share.xid || (a.share.xid = _ate.util.cuid()), w[n.href] = {};
                        for (o in a.share)w[n.href][o] = a.share[o];
                        d("follow", t, a, n)
                    } else _ate.bro.msi ? (t.innerHTML = '<iframe title="AddThis | Facebook" frameborder="0" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>", i = t.firstChild) : i = u.ce("iframe"), i.style.overflow = "hidden", i.style.scrolling = "no", i.style.scrollbars = "no", i.style.border = "none", i.style.borderWidth = "0px", i.style.width = r + "px", i.style.height = h + "px", i.src = "//www.facebook.com/plugins/subscribe.php?href=" + _euc(_ate.track.mgu(a.share.url, {defrag: 1})) + "&layout=button_count&show_faces=false&width=100&action=subscribe&font=arial&" + passthrough, _ate.bro.msi || t.appendChild(i);
                    t.noh = t.ost = 1
                }
            }

            function g(t, a) {
                if (!t.ost) {
                    var i, o, n, s = _ate.api.ptpa(t, "fb:like"), l = s.layout || "button_count", r = {standard: [450, s.show_faces ? 80 : 35], button_count: [90, 25], box_count: [55, 65]}, h = s.width || (r[l] ? r[l][0] : 100), c = s.height || (r[l] ? r[l][1] : 25);
                    if (passthrough = _ate.util.toKV(s), _ate.ufbl = 1, e()) {
                        s.layout === _ && (s.layout = "button_count"), s.show_faces === _ && (s.show_faces = "false"), s.share === _ && (s.share = "false"), s.action === _ && (s.action = "like"), s.width === _ && (s.width = h), s.font === _ && (s.font = "arial"), s.href === _ && (n = _ate.util.clone(a.share.url_transforms || {}), n.defrag = 1, s.href = _ate.track.mgu(a.share.url, n)), s.send = !1, a.share.xid || (a.share.xid = _ate.util.cuid()), w[s.href] = {};
                        for (o in a.share)w[s.href][o] = a.share[o];
                        d("like", t, a, s)
                    } else _ate.bro.msi ? (t.innerHTML = '<iframe title="AddThis | Facebook" frameborder="0" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>", i = t.firstChild) : i = u.ce("iframe"), i.style.overflow = "hidden", i.style.scrolling = "no", i.style.scrollbars = "no", i.style.border = "none", i.style.borderWidth = "0px", i.style.width = h + "px", i.style.height = c + "px", i.src = "//www.facebook.com/plugins/like.php?href=" + _euc(_ate.track.mgu(a.share.url, {defrag: 1})) + "&layout=button_count&show_faces=false&width=100&action=like&font=arial&" + passthrough, _ate.bro.msi || t.appendChild(i);
                    t.noh = t.ost = 1
                }
            }

            {
                var p, u = document, m = {}, w = {}, D = [], F = 0, x = 0, b = 0, C = !0, E = -1 != u.domain.search(/\.addthis\.com$/i) ? 1 : 0;
                _ate.bro.mob ? "http://m.facebook.com/sharer.php" : "http://www.facebook.com/sharer/sharer.php"
            }
            t.share = t.share || {}, t.share.register({facebook_like: g, facebook_send: h, facebook_share: c, facebook_subscribe: v}), t.share.registerSubscriber(l), t.share.registerListeners({facebook: {_after: function (t) {
                t.ins = 1, t.noh = 1
            }, onclick: function (t) {
                var e, i = t.el, o = (t.service, a(97)), n = a(16);
                return e = n(i.conf), o(e, i.share), T("facebook", e)
            }, onmouseover: function () {
            }, onmouseout: function () {
            }}}), t.share.fb = {like: g, send: h, subs: v, has: o, ns: i, ready: e, compat: n, sub: l, load: r}
        }(_ate, _ate.api, _ate), function (t) {
            function e() {
                return window.getglue && window.getglue.on
            }

            function a(t, e) {
                var a = ((t || {}).passthrough || {}).objectId || "none";
                _ate.share.ocw("http://w.getglue.com/convo/checkins?type=conversation&objectId=" + _euc(a) + "&source=" + _euc(t.url)), setTimeout(function () {
                    (new Image).src = _a("getglue", 0, t, e)
                }, 100)
            }

            function i(t, a) {
                var i = ((s || {}).passthrough || {}).objectId;
                if (!i)return void(t.innerHTML = '<a class="glue-checkin-widget"></a>');
                if (!e()) {
                    var o = document.createElement("script");
                    o.src = "//widgets.getglue.com/checkin.js";
                    var n = document.getElementsByTagName("script")[0]
                }
                var s = (f(t, "getglue"), a.share);
                n.parentNode.insertBefore(o, n), t.innerHTML = '<a class="glue-checkin-widget" href="http://getglue.com/' + i + '" data-type="horizontal">Checkin on Get Glue</a>'
            }

            function o(t) {
                if (!n) {
                    var a = t ? t.share : addthis_share, i = t ? t.conf : addthis_config;
                    e() ? (getglue.on("checkin", function () {
                        var t = {};
                        for (var e in a)t[e] = a[e];
                        _ate.share.track("getglue", 0, t, i)
                    }), n = !0) : 5 > s && setTimeout(function () {
                        o(t)
                    }, 500 * s++)
                }
            }

            var n = !1, s = 0;
            t.share = t.share || {}, t.share.registerSubscriber(o), t.share.register({getglue_checkin: i}), t.share.getglue = {sub: o, ps: a, gg: i}
        }(_ate, _ate.api, _ate), function (t) {
            function e() {
                return window.gapi && window.gapi.plusone
            }

            function a() {
                if (e())return void(gapi && gapi.plusone && "[object Function]" === Object.prototype.toString.call(gapi.plusone.go) && gapi.plusone.go());
                if (!s) {
                    s = 1;
                    var t = new _ate.resource.Resource("plusoneapi", "//apis.google.com/js/plusone.js", e);
                    t.addEventListener("load", function () {
                        a()
                    }), t.load()
                }
            }

            function i(t) {
                var e = t ? t.share : addthis_share, a = t ? t.conf : addthis_config;
                window._at_plusonecallback = window._at_plusonecallback || function (t) {
                    var i = {};
                    for (var o in e)i[o] = e[o];
                    i.url = t.href, _ate.share.track("google_" + ("off" == t.state ? "un" : "") + "plusone", 0, i, a)
                }, window._at_pluscallback = window._at_pluscallback || function (t) {
                    var i = {};
                    for (var o in e)i[o] = e[o];
                    i.url = t.href, _ate.share.track("googleplus_counter", 0, i, a)
                }
            }

            function o(t, e, i) {
                if (!t.ost) {
                    var o = "googleplus_counter" === i ? "plus" : "plusone", n = f(t, "g:" + o), s = document.ce("g:" + o);
                    _ate.gpl = _ate.gpl || {}, _ate.gpl.lang = _ate.gpl.lang || null, n.lang = _ate.gpl.lang = _ate.gpl.lang || ("undefined" == typeof n.lang ? null : n.lang), window.___gcfg = window.___gcfg || {}, window.___gcfg.lang = _ate.gpl.lang || n.lang || _ate.ggl((e.conf || {}).ui_language || window.addthis_language) || "en-US", n.href = e.share.url = n.href || _ate.track.mgu(e.share.url, {defrag: 1}), "plusone" == o ? (n.size = n.size || (r(t, !0) ? "standard" : "small"), n.callback = n.callback || "_at_" + o + "callback") : (n.href = _ate.share.acb("google_plusone_share", e.share, addthis_config), n.action = "share"), _ate.share.goog.sub(e), _ate.util.each(n, function (t, e) {
                        s.setAttribute(t, e)
                    }), t.appendChild(s), t.noh = t.ost = 1, a()
                }
            }

            function n(t, e) {
                if (!t.ost) {
                    t.title = "Follow on Google+";
                    var i = f(t, "g:plusone");
                    if (i.size = (i.size || "").toLowerCase(), document.head) {
                        var o = document.createElement("link");
                        o.setAttribute("href", i.href), o.setAttribute("rel", "publisher"), document.head.appendChild(o)
                    }
                    if (i.url = i.href = i.href || "", "badge" == i.size || "smallbadge" == i.size) {
                        var n = document.ce("g:plus");
                        _ate.gpl = _ate.gpl || {}, _ate.gpl.lang = _ate.gpl.lang || null, i.lang = _ate.gpl.lang = _ate.gpl.lang || ("undefined" == typeof i.lang ? null : i.lang), window.___gcfg = window.___gcfg || {}, window.___gcfg.lang = _ate.gpl.lang || i.lang || _ate.ggl((e.conf || {}).ui_language || window.addthis_language) || "en-US", _ate.util.each(i, function (t, e) {
                            n.setAttribute(t, e)
                        }), t.appendChild(n), t.noh = t.ost = 1, a()
                    } else {
                        var s = "32";
                        "small" == i.size ? s = "16" : "large" == i.size && (s = "64");
                        var l = txt = txt2 = ieQ = "";
                        i.name && ("BackCompat" == document.compatMode && _ate.bro.msi && (ieQ = 'onclick="window.open(' + i.href + '?prsrc=3)"'), l = "cursor:default;display:inline-block;text-decoration:none;color:#333;font:13px/16px arial,sans-serif;" + ("large" == i.size ? "text-align:center;white-space:nowrap;" : ""), "large" == i.size ? txt2 = '<br/><span style="font-weight:bold;">' + i.name + "</span><br/><span> on Google+ </span>" : txt = '<span style="display:inline-block;font-weight:bold;vertical-align:top;margin-right:5px;' + ("medium" == i.size ? "margin-top:8px;" : "") + '">' + i.name + '</span><span style="display:inline-block;vertical-align:top; margin-right:' + ("medium" == i.size ? "15px;margin-top:8px;" : "13px;") + '">on</span>'), t.setAttribute("target", "_blank"), t.style.textDecoration = "none", t.style.cursor = "default", t.innerHTML = '<span style="' + l + '">' + txt + "<img " + ieQ + ' src="https://ssl.gstatic.com/images/icons/gplus-' + s + '.png" alt="' + t.title + '" style="border:0;width:' + s + "px;height:" + s + 'px;cursor:pointer;" onmouseover="this.style.opacity=0.8;this.style.filter=\'alpha(opacity=80)\';" onmouseout="this.style.opacity=1.0;this.style.filter=\'alpha(opacity=100)\';">' + txt2 + "</span>", t.noh = t.ost = 1, t.onclick = function (t) {
                            if (!t)var t = window.event;
                            var e = t.originalTarget || t.relatedTarget || t.toElement || t.srcElement, a = "";
                            if (e) {
                                for (; "A" != e.nodeName;)e = e.parentNode;
                                return a = ((e.attributes || {})["g:plusone:href"] || {}).value || window.location.href, Ya.open(a + "?prsrc=3"), _ate.share.track("google_plusone_badge", 1, i, config), !1
                            }
                        }
                    }
                    t.onmouseover = function () {
                        this.className = this.className.indexOf("at300bo") > -1 ? this.className : this.className.replace(/at300b/i, "at300bo")
                    }, t.noh = t.ost = 1
                }
            }

            var s = 0;
            t.share = t.share || {}, t.share.register({google_plusone: o, googleplus_counter: o, google_plusone_badge: n}), t.share.registerSubscriber(i), t.share.registerListeners({google_plusone: {onclick: function () {
                return!1
            }}}), t.share.goog = {plusone: o, badge: n, has: e, sub: i}
        }(_ate, _ate.api, _ate), function (t) {
            function e(t, e) {
                var a = function () {
                    if ("undefined" == typeof window.Intent && "undefined" == typeof window.WebKitIntent || !window.navigator || "undefined" == typeof window.navigator.startActivity && "undefined" == typeof window.navigator.webkitStartActivity)return!1;
                    if (!window.Intent || "undefined" != typeof window.Intent["native"] && !window.Intent["native"])return!0;
                    if (_ate.bro.chr) {
                        var t = navigator.userAgent, e = /Chrome\/(.*)\./.exec(t);
                        if (e.length >= 1) {
                            var a = parseInt(e[1].substring(0, 2));
                            if (19 > a) {
                                var i = function () {
                                    return"undefined" == typeof addthis_config ? !1 : "undefined" == typeof addthis_config.webintents ? !1 : addthis_config.webintents ? !0 : !1
                                };
                                return i()
                            }
                        }
                    }
                    return!0
                };
                a() && (options.noevents = !0, t.onclick = function () {
                    var t = window.Intent || window.WebKitIntent, a = new t("http://webintents.org/share", "text/uri-list", e.share.url);
                    return"undefined" != typeof navigator.startActivity ? navigator.startActivity(a) : "undefined" != typeof navigator.webkitStartActivity && navigator.webkitStartActivity(a), _ate.share.track("intent_share_url", 0, e.share, e.conf), !1
                })
            }

            t.share = t.share || {}, t.share.register({intent_share_url: e}), t.share.registerListeners({intent_share_url: {}})
        }(_ate, _ate.api, _ate), function (t) {
            function e(t, e) {
                if (!t.ost) {
                    var i, o = f(t, "pi:pinit"), n = _ate.util.clone(e.share);
                    if (i = addthis_share && addthis_share.passthrough && addthis_share.passthrough.pinterest_share ? addthis_share.passthrough.pinterest_share : addthis_share && addthis_share.pinterest_share ? addthis_share.pinterest_share : addthis_share && addthis_share.passthrough ? addthis_share.passthrough : addthis_share ? addthis_share : {}, o.media)o.url = n.url = o.url || i.url || _ate.track.mgu(n.url, {defrag: 1}), o.url = _euc(_ate.track.mgu(n.url)), "horizontal" == o.layout ? (o.layout = "&layout=horizontal", o.width = "100px", o.height = "25px") : "vertical" == o.layout ? (o.layout = "&layout=vertical", o.width = "49px", o.height = "59px") : (o.layout = "", o.width = "40px", o.height = "25px"), t.innerHTML = '<iframe title="AddThis | Pinterest" frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + ' style="width:' + o.width + "; height:" + o.height + ';"></iframe>', pinitButton = t.firstChild, e.conf.pubid || (e.conf.pubid = addthis_config.pubid || ka()), o.description = n.description = o.description || i.description || i.title || (addthis_share || {}).title || "", pinitButton.src = _atc.rsrcs.pinit + (_ate.bro.ie6 || _ate.bro.ie7 ? "?" : "#") + "url=" + _euc(o.url) + "&media=" + _euc(o.media || i.media || "") + "&description=" + _euc(o.description) + o.layout + "&ats=" + _euc(_ate.util.rtoKV(n)) + "&atc=" + _euc(_ate.util.rtoKV(addthis_config)) + "&href=" + window.location.href, _ate.ed.addEventListener("addthis.pinterest.image", function () {
                        Ya.addthis_share || (Ya.addthis_share = {}), Ya.addthis_share.passthrough || (Ya.addthis_share.passthrough = {}), Ya.addthis_share.passthrough.pinterest_share || (Ya.addthis_share.passthrough.pinterest_share = {});
                        var t = Ya.addthis_share.passthrough.pinterest_share;
                        t.pi_media = o.media, t.pi_media_desc = o.description, T("pinterest_share", i)
                    }); else {
                        {
                            a.createElement("img")
                        }
                        t.innerHTML = '<span class="at_PinItButton"></span>', t.onclick = function () {
                            Ya.addthis_share || (Ya.addthis_share = {}), Ya.addthis_share.passthrough || (Ya.addthis_share.passthrough = {}), Ya.addthis_share.passthrough.pinterest_share || (Ya.addthis_share.passthrough.pinterest_share = {});
                            var t = Ya.addthis_share.passthrough.pinterest_share;
                            return t.pi_media = o.media, t.pi_media_desc = o.description, T("pinterest_share"), !1
                        }
                    }
                    t.noh = t.ost = 1
                }
            }

            var a = document;
            t.share = t.share || {}, t.share.register({pinterest: e, pinterest_count: e, pinterest_pinit: e}), t.share.registerListeners({pinterest_share: {onclick: function (t) {
                var e = t.el, a = e.share || addthis_share;
                T("pinterest_share", a), O(t)
            }}}), t.share.pinterest = {pinit: e}
        }(_ate, _ate.api, _ate), function (t, e, a, i) {
            function o(t, e) {
                if (!t.ost) {
                    var a = (_ate.util.clone(e.share), {type: "webpage", url: e.share.url, title: e.share.title, style: "number"}), i = f(t, "wb:like"), o = n(), h = l(i, o), c = l(a, o);
                    meta_tags = _ate.util.extend(c, h), wb_elem = r.createElement("wb:like"), _ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.ie8 || _ate.bro.msi && "BackCompat" == document.compatMode ? t.parentNode.insertBefore(wb_elem, t.nextSibling) : t.appendChild(wb_elem), s(wb_elem, meta_tags), _ate.ajs("//tjs.sjs.sinajs.cn/open/api/js/wb.js", 1), e.conf.pubid || (e.conf.pubid = addthis_config.pubid || _ate.pub()), t.onclick = function () {
                        _ate.share.track("sinaweibo_like", 0, e.share, e.conf)
                    }, t.noh = t.ost = 1
                }
            }

            function n() {
                for (var t, e, a, i, o = r.getElementsByTagName("meta"), n = {}, s = 0; s < o.length; s++)i = o[s], t = i.getAttribute("property"), e = i.getAttribute("name"), a = i.getAttribute("content"), t && -1 !== t.indexOf("og:") && a ? n[t.replace("og:", "")] = a : t && -1 !== t.indexOf("weibo:", "") && a ? n[t.replace("weibo:", "")] = a : e && -1 !== e.indexOf("weibo:") && a && (n[e.replace("weibo:", "")] = a);
                return n
            }

            function s(t, e) {
                var a, i, o;
                for (var i in e)e.hasOwnProperty(i) && (a = e[i], a && ("style" === i && "full" !== a ? t.setAttribute("type", a) : "skin" === i || "language" === i ? t.setAttribute(i, a) : (o = document.createElement("meta"), o.setAttribute("name", "weibo:" + i), o.setAttribute("content", a), document.getElementsByTagName("head")[0].appendChild(o))))
            }

            function l(t, e) {
                var a, o = {};
                for (a in t)t.hasOwnProperty(a) && e[a] === i && (o[a] = t[a]);
                return o
            }

            var r = document;
            t.share = t.share || {}, t.share.register({sinaweibo_like: o}), t.share.sinaweibo = {like: o}
        }(_ate, _ate.api, _ate), function (t) {
            t.share = t.share || {}, t.share.registerListeners({thefancy: {onclick: function (t) {
                var e = t.el, a = e.share || addthis_share;
                T("thefancy", a), O(t)
            }}})
        }(_ate, _ate.api, _ate), function (t) {
            function e() {
                return window.twttr && window.twttr.events
            }

            function a() {
                return e() && 1 == l ? (i(), void(l = h = 0)) : (l || (_ate.ajs("//platform.twitter.com/widgets.js", 1, null, null, null, !0), l = 1), void(3 > h && setTimeout(a, 3e3 + 2e3 * h++)))
            }

            function i() {
                window.twttr && !r && twttr.events && (r = 1, twttr.events.bind("click", function (t) {
                    if ("tweetcount" != t.region) {
                        if (((t.target || {}).conf || {}).follow)return!1;
                        var e = t.target.parentNode && t.target.parentNode.share ? t.target.parentNode.share : {}, a = e.url || t.target.baseURI, i = e.title || addthis_share.title, o = {};
                        for (var n in addthis_share)o[n] = addthis_share[n];
                        for (var n in e)o[n] = e[n];
                        o.url = a, i && (o.title = i);
                        var s = "follow" == t.region || "following" == t.region ? !1 : !0;
                        _ate.share.track(s ? "tweet" : "twitter_follow_native", s ? 0 : 1, o, addthis_config)
                    }
                }))
            }

            function o(t, e) {
                if (!t.ost) {
                    var i, o, n = f(t, "tw"), l = e.share, r = n.width || 56, h = n.height || 20, c = "";
                    e.share.url_transforms = e.share.url_transforms || {}, e.share.url_transforms.defrag = 1;
                    var d = _ate.util.clone(e.share), v = _ate.bro.msi && "BackCompat" == s.compatMode || e.conf.ui_use_tweet_iframe || "bitly" == (e.share.url_transforms.shorten || {}).twitter ? !0 : !1;
                    d.url = "undefined" != typeof n.url ? n.url : n.url = _ate.track.mgu(d.url || (addthis_share || {}).url, d.url_transforms, d, "twitter"), n.counturl || (n.counturl = v ? n.url.replace(/=/g, "%253D") : n.url), -1 == d.url.search(/\.+.*(\/|\?)/) && (d.url += "/"), n.url = _ate.share.acb("twitter", d, addthis_config), n.count = n.count || "horizontal", l.passthrough = l.passthrough || {};
                    var g = l.passthrough.twitter || {};
                    if (e.text = n.text = n.text || (e.share.title == s.title ? g.text : e.share.title) || "", e.related = n.related = n.related || g.related || "", e.hashtags = n.hashtags = n.hashtags || g.hashtags || "", (n.via || g.via || e.text.match(/via\s+@[a-zA-Z0-9_\.]+/i)) && (e.via = n.via = n.via || g.via || (e.text.match(/via\s+@[a-zA-Z0-9_\.]+/i) ? e.text.match(/via\s+@[a-zA-Z0-9_\.]+/i).split("@")[1] : "")), c = _ate.util.rtoKV(l, "#@!"), "vertical" === n.count ? (h = 62, n.height = n.height || h) : "horizontal" === n.count && (r = 110, n.width = n.width || r), n.width && (r = n.width), n.height && (h = n.height), i = _ate.util.toKV(n, "#@!"), v)t.innerHTML = '<iframe title="AddThis | Twitter" frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + ' style="width:' + r + "px; height:" + h + 'px;"></iframe>', o = t.firstChild, e.conf.pubid || (e.conf.pubid = addthis_config.pubid || _ate.pub()), o.src = _atc.rsrcs.tweet + (_ate.bro.ie6 || _ate.bro.ie7 ? "?" : "#") + "href=" + _euc(n.url) + "&dr=" + _euc(_ate.dr) + "&conf=" + _euc(_ate.util.toKV(e.conf)) + "&share=" + _euc(c) + "&tw=" + _euc(i); else {
                        {
                            (l.templates || {}).twitter || ""
                        }
                        n.text || (n.text = "" == l.title ? "" : l.title + ":");
                        var p = s.ce("a");
                        p.href = "http://twitter.com/share", p.className = "twitter-share-button", p.innerHTML = "Tweet";
                        for (var u in n)n.hasOwnProperty(u) && p.setAttribute("data-" + u, n[u]);
                        t.appendChild(p), e.conf.pubid || (e.conf.pubid = addthis_config.pubid || _ate.pub()), a(t)
                    }
                    t.noh = t.ost = 1
                }
            }

            function n(t, e) {
                var i = f(t, "tf"), o = f(t, "tw"), n = document.ce("a");
                i.screen_name = o.screen_name || i.screen_name || "addthis", n.href = "http://twitter.com/" + i.screen_name, n.className = "twitter-follow-button", n.innerHTML = "Follow @" + i.screen_name, _ate.util.each(i, function (t, e) {
                    n.setAttribute("data-" + t, e)
                }), _ate.util.each(o, function (t, e) {
                    n.setAttribute("data-" + t, e)
                }), t.ost = 1, t.appendChild(n), e.conf.pubid || (e.conf.pubid = addthis_config.pubid || _ate.pub()), a(t)
            }

            var s = document, l = 0, r = 0, h = 0;
            t.share = t.share || {}, t.share.register({tweet: o, twitter_follow_native: n}), t.share.registerSubscriber(i), t.share.registerListeners({twitter: {_after: function (t) {
                t.ins = 1, t.noh = 1
            }, onclick: function (t) {
                {
                    var e = t.el;
                    t.service
                }
                return _ate.share.pts(e.share, e.conf)
            }, onmouseover: function () {
            }, onmouseout: function () {
            }}}), t.share.twitter = {tweet: o, follow: n, sub: i}
        }(_ate, _ate.api, _ate), function (t, e) {
            function i(t, e) {
                if (!t.ost && !_ate.bro.ie6) {
                    var a = f(t, "su:badge"), i = a.style || "1", o = e.share.url = a.href || _ate.track.mgu(e.share.url, {defrag: 1}), n = a.height || "20px", s = a.width || "75px";
                    "5" == i ? n = a.height || "60px" : "6" == i && (n = a.height || "31px"), t.innerHTML = '<iframe title="AddThis | Stumbleupon" src="http' + (_ate.ssl ? "s" : "") + '://www.stumbleupon.com/badge/embed/{{STYLE}}/?url={{URL}}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:{{WIDTH}}; height:{{HEIGHT}};" allowtransparency="true"></iframe>'.replace("{{STYLE}}", i).replace("{{URL}}", _euc(o)).replace("{{HEIGHT}}", n).replace("{{WIDTH}}", s), t.noh = t.ost = 1
                }
            }

            function o(t, a) {
                if (!t.ost) {
                    var i = d.ce("div"), o = "http://userapi.com/js/api/openapi.js?52", n = a.share.url.replace(/#.*$/, ""), s = a.share.title, l = a.share.description, r = f(t, "vk"), h = r && (r.apiId || r.apiid), c = {type: "full", pageDescription: l, pageTitle: s, pageUrl: n}, v = function () {
                        return Ya.VK && Ya.VK.init && Ya.VK.Widgets && Ya.VK.Widgets.Like
                    }, g = function (t) {
                        VK.init({apiId: h, onlyWidgets: !0}), VK.Widgets.Like(t.id, t.configuration)
                    }, p = _ate.util.bind(function () {
                        g(this)
                    }, i);
                    h && (i.id = "addthis_vk_like" + _ate.util.cuid(), i.configuration = c, t.appendChild(i), v() ? g(i, c) : (e._vkr || (e._vkr = new _ate.resource.Resource("vklike", o, v), e._vkr.load()), e._vkr.addEventListener("load", p)), t.noh = t.ost = 1)
                }
            }

            function n(t) {
                if (!t.ost) {
                    var e = f(t, "4sq"), a = document.createElement("a");
                    a.href = "https://foursquare.com/intent/venue.html", a.className = "fourSq-widget", e["data-variant"] && a.setAttribute("data-variant", e["data-variant"]), t.appendChild(a), _ate.ajs("//platform.foursquare.com/js/widgets.js", 1), t.noh = t.ost = 1
                }
            }

            function s(t, e) {
                if (!t.ost) {
                    var a = f(t, "rk:healthy"), i = d.createElement("div"), o = new _ate.resource.Resource("runkeeperjs", "//runkeeper.com/static/js/healthy/rkHealthyButton.js");
                    i.className = "rk-healthy", i.setAttribute("data-healthyUrl", a.url || e.share.url || window.location.href), i.setAttribute("data-buttonType", a.type || "normal"), t.appendChild(i), t.noh = t.ost = 1, o.load()
                }
            }

            function l(t, e) {
                if (!t.ost) {
                    var a = f(t, "svejo:"), i = document.ce("div"), o = new _ate.resource.Resource("svejojs", "//svejo.net/button.js", function () {
                        return!!window.load_svejo_buttons
                    });
                    o.addEventListener("load", function () {
                        window.load_svejo_buttons()
                    }), i.className = "svejo-button", a.href = e.share.url = a.href || _ate.track.mgu(e.share.url, {defrag: 1}), a.size = a.size || (r(t, !0) ? "standard" : "compact"), _ate.util.each(a, function (t, e) {
                        i.setAttribute("data-" + t, e)
                    }), t.appendChild(i), t.noh = t.ost = 1, o.load()
                }
            }

            function h(t, e) {
                if (!t.ost) {
                    var a, i, o = f(t, "li"), n = e.share, s = o.width || 100, l = o.height || 18, r = "";
                    o.counter || (o.counter = "horizontal"), n.passthrough || (n.passthrough = {}), n.passthrough.linkedin = _ate.util.toKV(o), n.title && (n.title = _euc(n.title)), r = _ate.util.rtoKV(n), "top" === o.counter ? (l = 55, s = 57, o.height || (o.height = l), o.width || (o.width = s)) : "right" === o.counter ? (s = 100, o.width || (o.width = s)) : "none" === o.counter && (s = 57, o.width || (o.width = s)), o.width && (s = o.width), o.height && (l = o.height), a = _ate.util.toKV(o), t.innerHTML = '<iframe title="AddThis | LinkedIn Button" frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + ' style="width:' + s + "px; height:" + l + 'px;"></iframe>', i = t.firstChild, e.conf.pubid || (e.conf.pubid = addthis_config.pubid || _ate.pub()), i.src = _atc.rsrcs.linkedin + (_ate.bro.ie6 || _ate.bro.ie7 ? "?" : "#") + "href=" + _euc(e.share.url) + "&dr=" + _euc(_ate.dr) + "&conf=" + _euc(_ate.util.toKV(e.conf)) + "&share=" + _euc(r) + "&li=" + _euc(a), t.noh = t.ost = 1
                }
            }

            function c(t, e) {
                if (-1 != t.className.indexOf("chiclet_style"))throw new Error("just do a chiclet");
                if (!t.ost) {
                    var a = f(t, "tm"), i = 50, o = 61;
                    passthrough = _ate.util.toKV(a), "compact" === a.style && (i = 95, o = 25), t.innerHTML = '<iframe title="AddThis | Tweetmeme" frameborder="0" width="' + i + '" height="' + o + '" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                    var n = t.firstChild;
                    n.src = "//api.tweetmeme.com/button.js?url=" + _euc(e.share.url) + "&" + passthrough, t.noh = t.ost = 1
                }
            }

            var d = document;
            t.share = t.share || {}, t.share.register({foursquare: n, svejo_counter: l, linkedin_counter: h, runkeeper_healthy: s, stumbleupon_badge: i, tweetmeme: c, vk_like: o}), t.share.registerListeners({more: {require: function (t, e) {
                return!(e.noh || _ate.bro.iph || _ate.bro.wph || _ate.bro.dro)
            }, onclick: function (t) {
                var e = t.el || {};
                return window.addthis.menu(e, e.conf, e.share), !1
            }}, email: {require: function (t, e) {
                return!(e.noh || _ate.bro.iph || _ate.bro.wph || _ate.bro.dro)
            }, onclick: function (t) {
                var e = (a(37), t.el || {}), i = t.service, o = _ate.util.clone(e.conf);
                return o.ui_pane = i, T(i, e.share), !1
            }}, foursquare: {onclick: function (t) {
                var e = t.el || {}, a = t.service;
                return _ate.share.track(a, 1, e.share, e.conf), !1
            }}, link: {onclick: function (t) {
                var e = t.el || {}, a = (t.service, _euc((e.share || {}).url || addthis_share.url), _ate.util.clone(e.config || addthis_config));
                return a.ui_pane = "link", window.addthis.menu(e, a, e.share || addthis_share), !1
            }}})
        }(_ate, _ate.api, _ate), function (t, e) {
            function a() {
                return-1 !== window.location.href.search(/bookmark\.[a-f0-9]+\.html/i)
            }

            function i(t) {
                var a = _ate.util.clone(Ya.addthis_config);
                return a.ui_pane = "image", a.image_service = t, e.menu(_ate.maf.pre, a, Ya.addthis_share), !1
            }

            function o(t) {
                if (_ate.bro.msi)_ate.track.msg("atimg_ie" + media); else {
                    var e = setInterval(function () {
                        t.postMessage("atimg_more" + media, "*")
                    }, 500);
                    setTimeout(function () {
                        clearInterval(e)
                    }, 1e4)
                }
                return!1
            }

            document.body;
            t.share = t.share || {}, t.util.extend(t.share, {imgVer: i, imgOcw: o, inBm: a})
        }(_ate, _ate.api, _ate), function () {
            var t = function () {
                return"undefined" == typeof addthis_config ? !1 : "undefined" == typeof addthis_config.webintents ? !1 : addthis_config.webintents ? !0 : !1
            };
            if (t()) {
                var e = function () {
                    if ("undefined" != typeof Ya.WebKitIntent)return!0;
                    if ("undefined" == typeof Ya.Intent && "undefined" == typeof Ya.WebKitIntent || "undefined" == typeof Ya.navigator.startActivity && "undefined" == typeof Ya.navigator.webkitStartActivity)return!1;
                    var t = navigator.userAgent;
                    if (/Chrome\/(.*)\./.test(t)) {
                        var e = /Chrome\/(.*)\./.exec(t);
                        if (e.length >= 1) {
                            var a = parseInt(e[1].substring(0, 2));
                            if (19 > a)return!1
                        }
                    }
                    return!0
                };
                catchIntents = function () {
                    e() || (Ya.Intent = function (t, e, a) {
                        this.verb = t, this.noun = e, this.data = a
                    }, Ya.navigator.startActivity = function (t) {
                        if ("http://webintents.org/share" === t.verb && "text/uri-list" === t.noun) {
                            Ha.update("share", "url", t.data);
                            for (var e in t.extras)Ha.update("share", e, t.extras);
                            var a = "http://addthis.com/bookmark.php";
                            a += "?v=300&url=" + encodeURIComponent(t.data), Ya.open(a, "", "width=700,height=500")
                        }
                    })
                }, catchIntents()
            }
        }(), function (t) {
            function e(t) {
                var e = new Array;
                t:for (var a = 0; a < t.length; a++) {
                    for (var i = 0; i < e.length; i++)if (e[i] == t[a])continue t;
                    e[e.length] = t[a]
                }
                return e
            }

            function a() {
                c || (c = {}, p(Ba.map, function (e) {
                    c[t.mun(e)] = e
                }))
            }

            function i() {
                return d ? d : d = ja((t.dr || "").split("://").pop().split("/").shift().split("?").shift()) || (t.smd || {}).rsc || ""
            }

            function o(t, e) {
                return t.timestamp > e.timestamp ? -1 : 1
            }

            function n(t, e, a) {
                return a || (a = window), (a[t] === _ || "" === a[t]) && (a[t] = e), a[t]
            }

            function s(e) {
                a();
                var n, s, l = i(), r = function () {
                    for (var e, a = t.cookie.ssc.getServices(), i = t.ups || {}, o = 0; o < a.length; o++)e = a[o].name, i[e] || (i[e] = e);
                    return i
                }(), h = [], d = 0, g = 0;
                for (v = [], n = 0; n < e.length; n++)s = e[n], (Ba.map[s] !== _ || s.indexOf("facebook_") > -1 && Ba.map.facebook !== _) && d++, l == s && (g = 1), r[s] && delete r[s];
                for (p(r, function (t, e) {
                    h.push(e)
                }), h.sort(o), n = 0; n < h.length; n++)s = h[n].name, c[s] && (s = c[s], d++, v.push(s), e.push(s), window.addthis_ssh ? -1 == addthis_ssh.indexOf(s) && (addthis_ssh += "," + s) : window.addthis_ssh = s, l == s && (g = 1));
                return v = v.join(","), g || Ba.map[l] === _ || (d++, e.push(l), addthis_ssh = (window.addthis_ssh ? addthis_ssh + "," : "") + l, f = l), d
            }

            function l(t) {
                n("addthis_exclude", ""), n("addthis_use_personalization", !0), n("services_exclude", window.addthis_exclude, t)
            }

            function r(o, r) {
                if (o === h)return{conf: o, csl: v, crs: f};
                h = o;
                {
                    var c = window.addthis_ssh ? addthis_ssh.replace("misterwong_de", "misterwong").replace("misterwong_ru", "misterwong").replace(/(^more,)|(^more$)|(,more,)|(,more$)/, "").split(",") : [], d = "facebook,twitter,email,print,gmail,pinterest,favorites,reddit,tumblr,google,mailto,linkedin,blogger,myspace,hackernews,hootsuite,facebook_like,google_plusone_share,mymailru,vk,odnoklassniki_ru", p = (window.addthis_services_loc || d).replace(_ate.bro.xp || _ate.bro.mob ? /,mailto,/ : /,,/, ","), u = 0, m = p;
                    i()
                }
                if (l(o), _ate.bro.ipa && (-1 == addthis_exclude.indexOf("print") && (addthis_exclude += ","), addthis_exclude += "print"), o.services_exclude = o.services_exclude.replace(/\s/g, ""), o.services_exclude_natural || (o.services_exclude_natural = o.services_exclude), (o || {}).parentServices && _ate.util.each(o.parentServices, function (t) {
                    o.services_exclude += (o.services_exclude.length > 1 ? "," : "") + t
                }), r || (r = []), n("addthis_options_default", m.split(",").slice(0, 11).join(",") + ",more"), n("addthis_options_rank", m.split(",").join(",")), n("addthis_options", window.addthis_options_default), a(), u = s(c), addthis_options = ("" != c ? c + "," : "") + addthis_options, c && (addthis_options && -1 == addthis_options.indexOf(c) || o.services_compact && -1 == o.services_compact.indexOf(c)) && (o.services_compact = o.services_compact ? c + "," + o.services_compact : addthis_options), addthis_options = e(addthis_options.split(",")).join(","), o.services_compact && (o.services_compact = e(o.services_compact.split(",")).join(",")), window.addthis_ssh && window.addthis_use_personalization && u || r.length || o.services_exclude || addthis_exclude) {
                    var w, D, F = addthis_options_rank.split(","), x = [], b = (o.services_exclude || addthis_exclude || "").split(","), C = {}, E = c.join(","), z = [], M = {}, k = 0, y = 11, A = 0, B = o.product || "", S = B.indexOf("ffext") > -1 || B.indexOf("fxe") > -1;
                    for (r.length && -1 == addthis_options.indexOf(r[0].code) && (addthis_options += "," + r[0].code), r.length && r[0] && x.push(r[0].code), T = 0; T < b.length; T++)C[b[T]] = 1, D = g[b[T]] || new RegExp("(?:^|,)(" + b[T] + ")(?:$|,)"), g[b[T]] = D, addthis_options = addthis_options.replace(D, ",").replace(",,", ","), o.services_compact && (o.services_compact = o.services_compact.replace(D, ",").replace(",,", ","));
                    for (T = 0; T < F.length; T++)w = F[T], C[w] || (D = g[w] || new RegExp("(?:^|,)(" + w + ")(?:$|,)"), g[w] = D, -1 == E.search(D) && x.unshift(w));
                    for (T = 0; T < c.length && y > T; T++)w = c[T], D = g[w] || new RegExp("(?:^|,)(" + w + ")(?:$|,)"), g[w] = D, addthis_options.search(D) > -1 && k++;
                    for (T = 0; T < c.length && !(z.length >= y); T++)w = c[T], M[w] || C[w] || !(Ba.map[w] !== _ || w.indexOf("facebook_") > -1) || (M[w] = 1, D = g[w] || new RegExp("(?:^|,)(" + w + ")(?:$|,)"), g[w] = D, addthis_options.search(D) > -1 ? (z.push(w), addthis_options = addthis_options.replace(D, ",").replace(",,", ","), A++) : z.push(w));
                    for (addthis_ssh = z.join(","), addthis_options = (window.addthis_ssh ? addthis_ssh + "," : "") + addthis_options.replace(/[,]+/g, ",").replace(/,$/, "").replace(/^,/, "").replace(/^more,|,more|^more$/, ""), addthis_options.indexOf("email") > -1 && "" === t.pub() && !S && (addthis_options = addthis_options.replace(/^email,|,email|^email$/, "")); addthis_options.split(",").length > 11;)addthis_options = addthis_options.split(",").slice(0, -1).join(",");
                    var I = t.util.fromKV(addthis_options.replace(/,|$/g, "=1&")), O = addthis_options.split(",").length;
                    if (O % 2 === 0 || 11 > O)for (var T = Math.min(O, 11), j = m.split(","), R = O; (11 > R || R % 2 === 0) && T < j.length;) {
                        var N = j[T++];
                        if (I[N]) {
                            if (T == j.length) {
                                O + (Math.min(O, 11) - R) % 2 === 0 && (addthis_options = addthis_options.split(",").slice(0, -1).join(","));
                                break
                            }
                        } else C[N] || (addthis_options += "," + N, I[N] = 1, R++)
                    }
                    if (r.length && r[0] && -1 == addthis_options.indexOf(r[0].code)) {
                        var U = addthis_options.replace(",more", "").split(",").pop();
                        addthis_options = addthis_options.replace(U, r[0].code)
                    }
                    -1 == addthis_options.indexOf(",more") && (addthis_options += ",more")
                }
                return o.services_compact || (o.services_compact = addthis_options), t.share.services.loc = (window.addthis_services_loc || d).replace(_ate.bro.xp || _ate.bro.mob ? /,mailto,/ : /,,/, ","), {conf: o, csl: v, crs: f}
            }

            var h, c, d, v, f, g = {}, p = _ate.util.each;
            t.share = t.share || {}, t.share.services = t.share.services || {}, t.share.services.init = r
        }(_ate, _ate.api, _ate);
        {
            _ate.bro.msi ? 20 : _
        }
        !function (t) {
            function e(t) {
                var e = this, a = t || {};
                if (t instanceof Array) {
                    a = {};
                    for (var i = 0; i < t.length; i++)a[t[i]] = t[i]
                }
                e.add = function (t, i) {
                    if ("object" == typeof t)for (var o in t)t.hasOwnProperty(o) && e.add(o, t[o]); else a[t] = i
                }, e.get = function (t) {
                    return a[t]
                }, e.has = function (t) {
                    if ("string" == typeof t && (t = t.split(",")), 0 === t.length)return!1;
                    for (var e = 0; e < t.length; e++)if (!iskey(t[e]))return!1;
                    return!0
                }, e.iskey = function (t) {
                    if ("string" == typeof t && (t = t.split(",")), t instanceof Array)for (var e = 0; e < t.length; e++) {
                        var i = t[e].replace(/ /g, "");
                        if (a[i])return 1
                    }
                    return 0
                }, e.remove = function (t) {
                    for (var e, i = 0; i < arguments.length; i++)if (e = arguments[i], "string" == typeof t)delete a[e]; else if (e.length)for (var o = 0; o < e.length; o++)delete a[e[o]]
                }, e.has = function (t) {
                    return a.hasOwnProperty(t)
                }, e.isEmpty = function () {
                    var t = 0;
                    return _ate.util.each(a, function (e) {
                        return this.data.hasOwnProperty(e) ? (t = 1, !1) : void 0
                    }), !!t
                }, e.keys = function () {
                    return Object.keys(a)
                }, e.clear = function () {
                    a = {}
                }
            }

            t.data || (t.data = {}), t.data.Set = e
        }(_ate, _ate.api, _ate), function (t) {
            function e() {
            }

            function a() {
            }

            function i() {
            }

            function o() {
                return!0
            }

            function n(t) {
                try {
                    return t && t.url ? 1 === t.promoted ? !1 : b[t.url] !== w ? b[t.url] : (b[t.url] = _ate.track.hist.seenBefore(t.url), b[t.url]) : !1
                } catch (e) {
                }
                return!1
            }

            function s(e) {
                function a() {
                    var t = 0, a = [];
                    if (l--, 0 === l) {
                        for (; t < h.length;)a = a.concat(h[t]), t++;
                        if (0 === a.length)return m === C ? void 0 : (D = !1, v(C), void s(e));
                        for (a = x(a, function (t) {
                            return t.promoted || !n(t)
                        }), d = x(d, function (t, e) {
                            return e.features.length
                        }), d.length || (d = [
                            {features: [], name: "no-vector", weight: 1}
                        ]), t = 0; t < d.length; t++)a = r(a, d[t]);
                        e.callback(c(i(a), e))
                    }
                }

                function i(t) {
                    if (t = t || [], t.length && _ate.uls && window.JSON) {
                        if (w = localStorage.getItem(o)) {
                            try {
                                w = JSON.parse(w)
                            } catch (e) {
                            }
                            w.o ? (b = w.o % 10, w.o = b + 2) : w = {o: 2}
                        } else w = {o: 2};
                        if (b > 0)for (; b-- > 0;)arguments[0].push(arguments[0].shift());
                        localStorage.setItem(o, JSON.stringify(w))
                    }
                    return t
                }

                var o, l = 0, h = [], d = [], f = _ate.util.gUD(window.addthis_domain || e.domain || window.location.host), u = e.pubid || t.pub(), w = !1, b = 0;
                u && (m || v(C), t.bt2 || (D = !1, v(C)), o = "__feed_" + u + "_" + m.name, F(m.feed, function (t, e) {
                    l++, g(e, {pubid: u, domain: f}, function (t, e) {
                        return t ? a() : (h.push(e), void a())
                    })
                }), F(m.vector, function (e, i) {
                    "term_extract" === i ? d.push({features: t.ad.gcv(), name: "term_extract"}) : (l++, p(i, {pubid: u, domain: f}, function (t, e) {
                        return t ? a() : (d.push(e), void a())
                    }))
                }))
            }

            function l(t) {
                return((t || {}).pvector || {}).features || {}
            }

            function r(e, a, i) {
                var o, n, s, r, h = new u, c = 0, d = [];
                if (i) {
                    if (!(i instanceof Function))throw new Error("Matchrule should be a function, got " + i)
                } else i = l;
                return F(a.features || [], function (t, e) {
                    h.add(e.name, e.weight)
                }), F(e, function (a, l) {
                    var v = t.share.links.canonical;
                    c = 0, n = l.url || "", s = n.split("#").shift(), v && v.indexOf(s) + s.length === v.length || (r = i(l), F(r, function (t, e) {
                        o = h.get(e.name), o !== w && (c += o + e.weight)
                    }), e[a].score = c, n.score = c, d.push(l))
                }), a.features.length > 0 && d.sort(function (t, e) {
                    return e.score - t.score
                }), d
            }

            function h(e) {
                return e.ab = e.ab || t.ab, e.bt = e.bt || t.bt2, function (t) {
                    return F(t, function (t, a) {
                        e[t] = a
                    }), d(e)
                }
            }

            function c(t, e, a) {
                a && "function" == typeof a || (a = d), e.total || (e.total = t.length);
                var i = 0;
                return F(t, function (t, o) {
                    e.pos = i++, e.url = o.url, o.url = a(e), o.title = o.title || ""
                }), t
            }

            function d(e) {
                var a = e.url, i = e.pco, o = e.total, n = e.pos, s = e.ab || "-";
                return a && a.indexOf("at_pco") > -1 && (a = i ? a.replace(/at_pco=(.*)&/, "at_pco=" + i + "&") : a, a.indexOf("at_ab") > -1 ? "-" !== s && (a = a.replace(/at_ab=(.*)&/, "at_ab=" + s + "&")) : a += "&at_ab=" + (e.ab || t.ab), a.indexOf("at_pos") > -1 ? n !== w && (a = a.replace(/at_pos=([0-9]+)/, "at_pos=" + n)) : a += "&at_pos=" + (n || 0), a.indexOf("at_tot") > -1 ? o !== w && (a = a.replace(/at_tot=([0-9]+)/, "at_tot=" + o)) : a += "&at_tot=" + (o || 0), -1 === a.indexOf("si=") && (a += "&at_si=" + _ate.sid)), a
            }

            function v(e) {
                return!e || !e instanceof Object ? !1 : D ? !1 : (D = !0, m = e, void(t.ab = m.name))
            }

            function f(e, a, i) {
                var o, n, s, l = t.pub(), r = !1, h = !0, c = "";
                if (a = a || {}, query = a.query || {}, timeout = parseInt(a.timeout, 10) || 4500, n = a.uid, !n)throw new Error("No uid provided");
                for (s in query)query.hasOwnProperty(s) && query[s] !== w && (h ? h = !1 : c += "&", c += encodeURIComponent(s) + "=" + encodeURIComponent(query[s]));
                h ? h = !1 : c += "&", c += "callback=" + t.util.scb("fds", l + n, function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    r || (t.unshift(null), i.apply(this, t), r = !0, clearTimeout(o))
                }), o = setTimeout(function () {
                    i(new Error("Timed out"), null), r = !0
                }, 4500), _ate.ajs(e + "?" + c, 1, !0, !0, null, !0)
            }

            function g(e, a, i) {
                var o, n = {}, s = e.indexOf("view") > -1;
                if (a = a || {}, a.pubid = a.pubid || t.pub(), !e)throw new Error("No feed provided");
                e.indexOf(".json") < 0 && (e += ".json"), o = "//q.addthis.com/feeds/1.0/" + e, n.query = {pubid: a.pubid || w, domain: a.domain || w, limit: s ? "25" : w}, n.uid = e, f(o, n, i)
            }

            function p(e, a, i) {
                var o, n = {};
                if (a = a || {}, a.pubid = a.pubid || t.pub(), !e)throw new Error("No vector provided");
                e.indexOf(".json") < 0 && (e += ".json"), o = "//q.addthis.com/feeds/1.0/" + e, n.query = {pubid: a.pubid || w}, n.uid = e, f(o, n, i)
            }

            var u, m, w, D = (_ate.abmp >= 0, !1), F = t.util.each, x = (t.util.reduce, t.util.filter), b = {}, C = {name: "per-2", feed: ["views2"], vector: [], isProCell: !0};
            t = t || {}, t.data = t.data || {}, u = t.data.Set, t.feeds = {setTestCell: v, _ad: o, configure: e, get: a, recommend: s, trend: i, decorator: h}, t.dctu = d
        }(_ate, _ate.api, _ate), function (t, e) {
            function a(t, e, a) {
                var o = a || 0;
                1 === _ate.inst && i(t, e) && (n[t] = o ? {v: e, p: o} : e)
            }

            function i(t, e) {
                var a = {};
                return a[t] = e, s ? (y.error("The pub domain LoJson request has already been submitted."), !1) : _ !== n[t] ? (y.error("This key: `" + t + "` already exists for LoJson transmission."), !1) : _ === a[t] ? (y.error("LoJson values cannot be `undefined`."), !1) : !0
            }

            function o() {
                return t.util.rtoKV(n)
            }

            var n = {}, s = !1;
            e.addEventListener("addthis.lojson.complete", function () {
                s = !0
            }), t.lojson = {add: a, get: o}
        }(window._ate, window.addthis)
    }
    var Ya = window, Ka = Ya.addthis_config || {}, $a = a(49);
    Ya.addthis && Ya.addthis.timer && (Ya.addthis.timer.core = (new Date).getTime());
    var ti = _ate;
    ti._ssc = ti._ssh = [], ti.dat = {}, ti._rec.push(function (t) {
        var e, a, i = ti.dat.rdy;
        if (de(t, function (t, e) {
            ti.dat[t] = e
        }), t.rdy && !i && (ti.xfr = 1, ti.track.xtp()), t.ssc && (ti._ssc = t.ssc), t.sshs && (t.sshs = t.sshs.replace(/\bpinterest\b/, "pinterest_share"), e = Ya.addthis_ssh = _duc(t.sshs), ti.gssh = 1, ti._ssh = e.split(","), _ate.ed.fire("addthis-internal.data.ssh", {}, {ssh: e})), t.uss) {
            t.uss = t.uss.replace(/\bpinterest\b/, "pinterest_share");
            var o = ti._uss = _duc(t.uss).split(",");
            if (Ya.addthis_ssh) {
                var n = {}, s = [];
                for (o = o.concat(ti._ssh), a = 0; a < o.length; a++)e = o[a], n[e] || s.push(e), n[e] = 1;
                o = s
            }
            ti._ssh = o, Ya.addthis_ssh = o.join(",")
        }
        if (t.ups) {
            for (e = t.ups.split(","), ti.ups = {}, a = 0; a < e.length; a++)if (e[a]) {
                var l = Fe(_duc(e[a]));
                ti.ups[l.name] = l
            }
            ti._ups = ti.ups
        }
        if (t.uid && (ti.uid = t.uid, _ate.ed.fire("addthis-internal.data.uid", {}, {uid: t.uid})), t.bti && (ti.bti = t.bti, _ate.ed.fire("addthis-internal.data.bti", {}, {bti: t.bti})), Ya.addthis_bt2 && (ti.bt2 = Ya.addthis_bt2), !ti.bt2 && t.bt2 && (ti.bt2 = t.bt2, _ate.ed.fire("addthis-internal.data.bt2", {}, {bt2: t.bt2})), t.bts && (ti.bts = parseInt(t.bts, 10), _ate.ed.fire("addthis-internal.data.bts", {}, {bts: t.bts})), t.vts && (ti.vts = parseInt(t.vts, 10), _ate.ed.fire("addthis-internal.data.vts", {}, {vts: t.vts})), t.geo) {
            try {
                ti.geo = "string" == typeof t.geo ? _ate.util.geo.parse(t.geo) : t.geo
            } catch (r) {
            }
            _ate.ed.fire("addthis-internal.data.geo", {}, {geo: ti.geo})
        }
        return t.dbm && (ti.dbm = t.dbm), t.atgotcode && (ti.sau = t.atgotcode), t.rdy && !i ? void _ate.ed.fire("addthis-internal.data.rdy") : void 0
    }), ti._rec.push(function (t) {
        var e = (t || {}).remoteEvent;
        e && e.type && e.data && _ate.ed.fire(e.type, {}, e.data)
    });
    try {
        if (Wa.href.indexOf(_atr) > -1) {
            var ei = Fe(Pa.cookie, ";");
            ti._rec[ti._rec.length - 1](ei)
        }
        var ai = {}, ii = _ate.util.gsp("addthis_widget.js");
        if ("object" == typeof ii) {
            if (ii.provider && (ai = {provider: _ate.mun(ii.provider_code || ii.provider), auth: ii.auth || ii.provider_auth || ""}, (ii.uid || ii.provider_uid) && (ai.uid = _ate.mun(ii.uid || ii.provider_uid)), ii.logout && (ai.logout = 1), _ate.prv = ai), ii.headless && (_atc.xcs = 1), ii.dnp && (_ate.dcp = Number.MAX_VALUE), ii.dnt && (_atc.xtr = 1), _ate.util.pae(ii), _ate.util.pas(_ate.util.pae), (ii.pubid || ii.pub || ii.username) && (Ya.addthis_pub = _duc(ii.pubid || ii.pub || ii.username)), Ya.addthis_pub && Ya.addthis_config && (Ya.addthis_config.username = Ya.addthis_pub), ii.domready && (_atc.dr = 1), ii.onready && ii.onready.match(/[a-zA-Z0-9_\.\$]+/))try {
                _ate.onr = _ate.evl(ii.onready)
            } catch (Ga) {
                y.error("addthis: onready function (" + ii.onready + ") not defined", Ga)
            }
            ii.async && (_atc.xol = 1)
        }
        if (ii.delayupgrade ? _atc.noup = 1 : (_atc.ver >= 152 || (Ya.addthis_conf || {}).ver >= 152) && (_atc.ver = 300), _ate.ed.fire("addthis-internal.params.loaded", {}, {geo: ti.geo}), (Ya.addthis_conf || {}).xol && (_atc.xol = 1), 120 === _atc.ver) {
            var oi = "atb" + _ate.util.cuid(), ni = _ate.util.gst("addthis_widget"), i = Pa.ce("span");
            i.id = oi, ni.parentNode.appendChild(i), ta(), _ate.lad(["span", oi, addthis_share.url || "[url]", addthis_share.title || "[title]"])
        }
        Ya.addthis_clickout && _ate.lad(["cout"])
    } catch (Ga) {
        y.error("main", Ga)
    }
    if (_adr.bindReady(), Ya.JSON && Ya.JSON.stringify ? _adr.append(o) : a.e(19, function () {
        y.debug("JSON not here, adding json2"), a(194), _adr.append(o)
    }), function () {
        function t(t) {
            return _ate.unj && !_ate.bro.msi ? JSON.stringify(t) : _ate.util.rtoKV(t, "&&", "==")
        }

        function e(t) {
            if (!t || "string" != typeof t)return t;
            if (!_ate.unj || 0 !== t.indexOf("{"))return _ate.util.rfromKV(t, "&&", "==");
            try {
                return JSON.parse(t)
            } catch (e) {
                return _ate.util.rfromKV(t)
            }
        }

        function a(t) {
            var a;
            if (!o || ".addthis.com" == t.origin.slice(-12)) {
                if (!t.data)return;
                a = e(t.data), a.origin = t.origin, i(a)
            }
        }

        function i(t) {
            t.addthisxf && _ate.ed.fire(t.addthisxf, t.target || t.payload, t.payload)
        }

        var o = !1, n = _ate.upm && Ya.postMessage && ("function" == typeof Ya.postMessage || "function" == typeof(Ya.postMessage || {}).call && "function" == typeof(Ya.postMessage || {}).apply) && !_ate.bro.ie6 && !_ate.bro.ie7, s = !1;
        me(_ate, {xf: {upm: n, listen: function () {
            s || (n && (-1 == M.href.indexOf(".addthis.com") && (o = !0), Ya.attachEvent ? (Ya.attachEvent("onmessage", a, !1), Pa.attachEvent("onmessage", a, !1)) : Ya.addEventListener("message", a, !1), window.addthis._pml.push(a)), s = !0)
        }, send: function (e, a, i) {
            n && setTimeout(function () {
                e.postMessage(t({addthisxf: a, payload: i}), "*")
            }, 0)
        }}})
    }(_ate, _ate.api, _ate), function (t, e) {
        function a(t) {
            function i(t) {
                l.sort(function (a, i) {
                    return n(a, i, e.ASC, t)
                })
            }

            function o(t) {
                l.sort(function (a, i) {
                    return n(a, i, e.DSC, t)
                })
            }

            function n(t, e, a, i) {
                var o = t[i], n = e[i];
                return"string" != typeof o || isNaN(parseInt(o, 10)) ? o > n ? a ? 1 : -1 : o == n ? 0 : a ? -1 : 1 : (o = parseInt(o, 10), n = parseInt(n, 10), a ? o - o : o - n)
            }

            function s() {
                for (var t = {}, e = 0; e < l.length; e++)l[e].name ? t[l[e].name] = l[e] : t[l[e]] = l[e];
                return t
            }

            var l = t || [], r = 0 === l.length ? {} : s(l), h = l;
            return l._map = r, h.add = function (t) {
                t && (h.push(t), h._map[t.name || t] = t)
            }, h.addOne = function (t) {
                if (t) {
                    if (h._map[t.name || t])return;
                    h.add(t)
                }
            }, h.toMap = function (t) {
                t || (t = "name");
                for (var e = {}, a = 0; a < l.length; a++)e[l[a][t]] = l[a];
                return e
            }, h.map = h.toMap, h.has = function (t) {
                return h.iskey(t)
            }, h.hasKeys = function (t) {
                if ("string" == typeof t && (t = t.split(",")), 0 === t.length)return!1;
                for (var e = 0; e < t.length; e++)if (!h.iskey(t[e]))return!1;
                return!0
            }, h.iskey = function (t) {
                if ("string" == typeof t && (t = t.split(",")), t instanceof Array)for (var e = 0; e < t.length; e++) {
                    var a = t[e].replace(/ /g, "");
                    if (h._map[a])return 1
                }
                return 0
            }, h.keys = function (t, a, n) {
                a || (a = "name"), n || (n = "score");
                var s = [];
                t == e.ASC ? i(n) : o(n);
                for (var r = 0; r < l.length; r++)s.push("object" == typeof l[r] ? l[r].name : l[r]);
                return s
            }, h.top = function (t, e) {
                e || (e = "score"), o(e);
                for (var a = [], i = 0; i < Math.min(t || 1, l.length); i++)a.push(l[i].name);
                return a
            }, h.filter = function (t) {
                for (var e = [], i = 0; i < l.length; i++)_ate.util.each(t, function (t, a) {
                    l[i][t] == a && e.push(l[i])
                });
                return a(e)
            }, h
        }

        e.HIGH = 3, e.MED = 2, e.LOW = 1, e.ASC = 1, e.DSC = e.DESC = 0, t.data = t.data || {}, t.data.OrderedSet = a
    }(_ate, _ate.api, _ate), function () {
        function t(t) {
            if (!t || t.length < 5 || t.length > 30)throw new Error("Service code must be between 5 and 30 characters.");
            if (-1 == t.search(/^[a-zA-Z0-9_]+$/))throw new Error("Service code must consist entirely of letters, numbers and underscores.");
            return!0
        }

        Ha.logShare = function (e, a, i, o) {
            var n = o || addthis_config, s = i || addthis_share;
            n.product = "hdl-300", s.imp_url = 0;
            var e = e || i && i.url || addthis_share.url, l = _ate.track.dcu(e);
            l.rsc && !a && (a = l.rsc), t(a) && (s.url = e, _ate.share.track(a, 0, s, n))
        }, Ha.addClickTag = function (e, i, o) {
            var e = e || o && o.url || addthis_share.url, n = a(27);
            return t(i) && (e = _ate.track.cur(n(e), i)), e
        }
    }(), window.addthis || (window.addthis = {}), Ha.user = function () {
        function t(t, e) {
            return ce(["getID", "getGeolocation", "getServiceShareHistory"], t, e)
        }

        function e(t, e) {
            return function (a) {
                setTimeout(function () {
                    a(E[t] || e)
                }, 0)
            }
        }

        function a(a) {
            k || a && a.uid && (null !== C && clearTimeout(C), C = null, k = 1, t(function (t, a, i) {
                return M[a] = M[a].queuer.flush(e.apply(z, t[i]), z), t
            }, [
                ["uid", ""],
                ["geo", ""],
                ["_ssh", []]
            ]))
        }

        function i() {
            var t = {uid: "x", geo: {}, ssh: "", ups: ""};
            y = 1, a(t)
        }

        function o(t) {
            return E.util.geo.isin(t, E.geo)
        }

        function n(t) {
            return A.interests.iskey(t)
        }

        function s(t) {
            return A.tags.iskey(t)
        }

        function l(t) {
            return A.tags.hasKeys(t)
        }

        function r(t) {
            if (_ate.uud || _ate.ed.fire("addthis-internal.api", window.addthis || {}, {call: "rdy"}), _ate.uud = 1, k && ("en" == _ate.jlng() || window.addthis_translations)) {
                {
                    _ate.share.services.init(window.addthis_config), (window.addthis_options || "").replace(",more", "").split(",")
                }
                if (D())return void t(A);
                var e = [], a = E.cookie.tag.get();
                for (var i in _ate.bti)e.push(_ate.bti[i]);
                A.interests = new B(e), A.tags = new B(a);
                var n = new B;
                _ate.util.each(E._uss, function (t, e) {
                    n.addOne({name: e, score: Ha.HIGH})
                }), _ate.util.each(E._ssc, function (t, e) {
                    n.addOne({name: t, score: e})
                }), A.services = n, A.activity = {}, A.activity.social = _ate.bts, A.activity.view = _ate.vts, A.source = u(), S.location = A.location = _ate.geo || {}, A.location.contains = o, t && t(A), _ate.ed.fire("addthis.user.data", window.addthis || {}, {})
            } else"en" === _ate.jlng() || window.addthis_translations ? setTimeout(function () {
                r(t)
            }, 250) : (_ate.ed.addEventListener("addthis.i18n.ready", function () {
                r(t)
            }), _ate.alg())
        }

        function h(t) {
            r(t)
        }

        function c() {
            return _ate.cookie.view.cla() > 0
        }

        function d(t) {
            var e = t;
            "string" == typeof e && (e = e.split(",")), _ate.cookie.tag.add(e)
        }

        function v(t, e) {
            var a = function () {
                var a = Array.prototype.slice.call(arguments);
                return _ate.ed.fire("addthis-internal.api", window.addthis || {}, {call: t}), e.apply(this, a)
            };
            return a
        }

        function f(t) {
            _ate.ed.fire("addthis-internal.api", window.addthis || {}, {call: t})
        }

        function g() {
            f("gti");
            var t = w(), e = [];
            return _ate.util.each(t.behaviors, function (t, a) {
                e.push(a.id)
            }), e
        }

        function p() {
            return f("gts"), A.services
        }

        function u() {
            return f("gtt"), E.track.ts.get()
        }

        function m() {
            return f("gtl"), A.location
        }

        function w() {
            var t = _ate.bt2, e = {};
            if (t) {
                e = {timeStamp: new Date(1e3 * parseInt(t.substring(0, 8), 16)), behaviors: []};
                for (var a, i = 8, o = _ate.util.baseToDecimal; i + 9 <= t.length;) {
                    var n = {};
                    a = t.substring(i, i + 9), n.id = o(a.substring(0, 4), 64), n.bucketWidth = o(a.substring(4, 5), 64), n.buckets = [o(a.charAt(5), 64), o(a.charAt(6), 64), o(a.charAt(7), 64), o(a.charAt(8), 64)], e.behaviors.push(n), i += 9
                }
            }
            return e
        }

        function D() {
            return"0000000000000000" == E.uid
        }

        function F(t) {
            return E._ssh && E._ssh.indexOf(t) > -1 || E._ssc && E._ssc[t]
        }

        function x(t) {
            var e = u();
            if ("social" == e.type) {
                if (!t)return!1;
                if ("string" == typeof t && (t = t.split(",")), t instanceof Array) {
                    for (var a = {}, i = 0; i < t.length; i++) {
                        if ("all" === t[i] && e.service && Ba.list[e.service])return!0;
                        a[t[i]] = 1
                    }
                    if (!a[e.service])return!1
                }
                return!0
            }
            return!1
        }

        function b(t) {
            var e, a = u();
            if ("search" == a.type) {
                if ("string" == typeof t && (t = t.split(",")), t instanceof Array) {
                    var i = {};
                    for (e = 0; e < t.length; e++)i[t[e]] = 1;
                    if (a.terms && a.terms.length)for (e = 0; e < a.terms.length; e++)if (!i[a.terms[e]])return!1
                }
                return!0
            }
            return!1
        }

        {
            var C, E = _ate, z = Ha, _ = 1e3, M = {}, k = 0, y = 0, A = {tags: E.cookie.tag.get()}, B = E.data.OrderedSet;
            _ate.data.Set
        }
        C = setTimeout(i, _), E._rec.push(a), M.getData = h, M.getPreferredServices = function (t) {
            if ("en" == _ate.jlng() || window.addthis_translations) {
                var e = (_ate.share.services.init(window.addthis_config), (window.addthis_options || "").replace(",more", "").split(","));
                t(e)
            } else _ate.ed.addEventListener("addthis.i18n.ready", function () {
                var e = (_ate.share.services.init(window.addthis_config), (window.addthis_options || "").replace(",more", "").split(","));
                t(e)
            }), _ate.alg()
        };
        var S = {ready: r, isReturning: c, isOptedOut: v("ioo", D), isUserOf: v("iuf", F), hasInterest: n, hasTag: s, hasTags: l, isLocatedIn: o, tag: d, interests: g, services: p, location: m, parseBT2Cookie: w};
        return Ha.session = {source: u, isSocial: v("isl", x), isSearch: v("ish", b)}, me(M, S), t(function (t, e) {
            return t[e] = new z._Queuer(e).call, t
        }, M)
    }(), !window.addthis.osta) {
        Ha.osta = 1, window.addthis.cache = {}, window.addthis.ed = _ate.ed, window.addthis.init = function () {
            _adr.onReady(), Ha.ready && Ha.ready()
        }, window.addthis.cleanup = function () {
            _ate.util.each((window.addthis || {})._pml || [], function (t, e) {
                _ate.util.unlisten(window, "message", e)
            })
        }, me(window.addthis.util, {getServiceName: Oa}), window.addthis.addEventListener = _ate.util.bind(_ate.ed.addEventListener, _ate.ed), window.addthis.removeEventListener = _ate.util.bind(_ate.ed.removeEventListener, _ate.ed), me(Ha, _ate.api);
        var si, li, ri, hi, ci, Pa = document, di = 0, vi = _, Ya = window, fi = {}, gi = !1, pi = !1, ui = {}, mi = {}, wi = null, Di = _ate.util.select, Fi = [], xi = [], bi = [], Ci = {rss: "Subscribe"}, Ei = {tweet: "Tweet", pinterest_share: "Pinterest", email: "Email", mailto: "Email", print: "Print", favorites: "Favorites", twitter: "Tweet", digg: "Digg", more: "View more services"}, zi = {email_vars: 1, passthrough: 1, modules: 1, templates: 1, services_custom: 1}, _i = {feed: 1, more: 0, email: 0, mailto: 1}, Mi = {feed: 1, email: 0, mailto: 1, print: 1, more: !_ate.bro.ipa && 0, favorites: 1}, ki = {email: 1, more: 1};
        _ate.ed.addEventListener("addthis-internal.data.ssh", function () {
            hi = 1
        }), _ate.ulg(function (t) {
            for (Ei.email = Ei.mailto = t[0][4], Ei.print = t[0][22], Ei.favorites = t[0][5], Ei.more = t[0][2]; bi.length > 0;)ci = bi.pop(), ci && ci.link && ci.title && (ci.link.title = Ei[ci.title] || ci.link.title)
        }), Ha.addEvents = function (t, e, a) {
            if (t) {
                var i = t.onclick || function () {
                };
                (t.conf.data_ga_tracker || addthis_config.data_ga_tracker || t.conf.data_ga_property || addthis_config.data_ga_property) && (t.onclick = function () {
                    return _ate.gat(e, a, t.conf, t.share), i()
                })
            }
        }, _ate.api.ptpa = f, _ate.gat = x, Ha.update = function (t, e, i) {
            var o = a(37);
            if ("share" == t) {
                "url" == e && _ate.usu(0, 1), window.addthis_share || (window.addthis_share = {}), window.addthis_share[e] = i, mi[e] = i;
                for (var n in Ha.links) {
                    var s = Ha.links[n], l = new RegExp("&" + e + "=(.*)&"), r = "&" + e + "=" + _euc(i) + "&";
                    !(s.conf || {}).follow && s.nodeType && (s.share && (s.share[e] = i), s.noh || (s.href = s.href.replace(l, r), -1 == s.href.indexOf(e) && (s.href += r)))
                }
                for (var n in Ha.ems) {
                    var s = Ha.ems[n];
                    s.href = o(addthis_share)
                }
            } else"config" == t && (window.addthis_config || (window.addthis_config = {}), window.addthis_config[e] = i, ui[e] = i)
        }, Ha._render = w, Ha.button = function (t, e, a) {
            e = e || {}, e.product || (e.product = "men-300"), w(t, {conf: e, share: a}, {internal: "img"})
        }, Ha.toolbox = function (t, e, i, o, n) {
            function s(t, e, a) {
                var i = Pa.ce(t);
                return i.className = e, a && (i.id = a), i
            }

            for (var l = Di(t), r = 0; r < l.length; r++) {
                var h, c = l[r], d = window.jQuery, v = m(c, e, i, o), f = document.ce("div");
                if (c.services = {}, c && c.className && (v.conf.product || (v.conf.product = "tbx" + (c.className.indexOf("32x32") > -1 ? "32" : c.className.indexOf("20x20") > -1 ? "20" : "") + "-300"), c.className.indexOf("peekaboo_style") > -1 && (_atc._ld_pkcss || (new _ate.resource.Resource("peekaboo", _atc.rsrcs.peekaboocss, function () {
                    return!0
                }).load(), _atc._ld_pkrcss = 1), c.peekaboo || (c.peekaboo = !0, c.onmouseover = function () {
                    c.is_hovered = 1, c.timeout = setTimeout(function () {
                        c.is_hovered && (d ? d(".addthis_peekaboo_style ul").slideDown("fast") : c.getElementsByTagName("ul")[0].style.display = "block")
                    }, 500)
                }, c.onmouseout = function () {
                    c.is_hovered = 0, c.timeout && clearTimeout(c.timeout), c.timeout = setTimeout(function () {
                        c.is_hovered || (d ? d(".addthis_peekaboo_style ul").slideUp("fast") : c.getElementsByTagName("ul")[0].style.display = "none")
                    }, 500)
                })), c.className.indexOf("floating_style") > -1 && (_atc._ld_barcss || (a.e(17, function () {
                    a(170)
                }), _atc._ld_barcss = 1), !c.fixed))) {
                    c.fixed = !0;
                    for (var g = s("DIV", "at-floatingbar-inner"), i = s("DIV", "at-floatingbar-share"), p = s("DIV", "addthis_internal_container"); c.childNodes.length > 0;)p.appendChild(c.firstChild);
                    i.appendChild(p), g.appendChild(i), c.appendChild(g), "BackCompat" == document.compatMode && _ate.bro.msi && !n && (c.setAttribute("className", c.className.replace("addthis_bar", "").replace("addthis_bar_vertical", "").replace("addthis_floating_style", "addthis_quirks_mode")), c.className.indexOf("addthis_32x32_style") > -1 ? c.setAttribute("className", c.className + " addthis_bar_vertical_medium") : c.className.indexOf("addthis_16x16_style") > -1 ? c.setAttribute("className", c.className + " addthis_bar_vertical_small") : c.className.indexOf("addthis_counter_style") > -1 && c.setAttribute("className", c.className + " addthis_bar_vertical_large"))
                }
                c && c.getElementsByTagName && (h = c.getElementsByTagName("a"), h && F(h, v.conf, v.share, !o, !o), c.appendChild(f)), f.className = "atclear"
            }
        }, Ha.ready = function (t) {
            Ha.ost || aa("addthis_widget").library || (Ha.ost = 1, b(), _ate.ed.fire("addthis.ready", Ha), _ate.onr && _ate.onr(Ha), C(), _ate.share.sub(), Ya.addthis_config.eua = Ya.addthis_config.eua || !0, t && "function" == typeof t && t())
        }, Ha.util.getAttributes = m, Ha.ad = me(Ha.ad, _ate.ad), E(), _atc.xol ? (C(), _adr.isReady && b()) : _adr.append(function () {
            window.addthis.ready()
        }), _ate.ed.fire("addthis-internal.ready", Ha)
    }
    window.addthis_open = function () {
        return"string" == typeof iconf && (iconf = null), _ate.ao.apply(_ate, arguments)
    }, window.addthis_close = function () {
        return"string" == typeof iconf && (iconf = null), _ate.ac.apply(_ate, arguments)
    }, window.addthis_sendto = function () {
        return _ate.as.apply(_ate, arguments), !1
    }, _atc.dr && _adr.onReady(), _atc.abf && addthis_open(document.getElementById("ab"), "emailab", window.addthis_url || "[URL]", window.addthis_title || "[TITLE]")
}, function (t, e, a) {
    function i(t, e) {
        var a = l((t || s()).toLowerCase());
        0 === a.indexOf("en") || _ate.pll && !e || (n(r() + "/lang/" + a + ".js"), h = !0)
    }

    function o() {
        return h
    }

    var n = a(4), s = a(45), l = a(133), r = a(38), h = !1;
    t.exports = {get: i, wasRequestMade: o}
}, function (t, e, a) {
    var i = a(22), o = a(41);
    t.exports = function (t) {
        var e = document.createElement("iframe");
        return t = t || {}, e.src = _atr + 'api.706d7a1a.html' + "#" + i(t), e.style.display = "none", o(e), e
    }
}, function (t, e, a) {
    var i = a(121), o = a(84)().FANCY;
    t.exports = function () {
        i(o)
    }
}, function (t, e, a) {
    var i = a(299);
    t.exports = function (t, e) {
        var a, o = 0;
        for (a = 0; a < t.length; a++)o *= e, o += i(t.charAt(a));
        return o
    }
}, function (t, e, a) {
    var i = a(10), o = a(63), n = a(144);
    t.exports = function (t) {
        var e = n(t);
        return e && e.src ? e.src.indexOf("#") > -1 ? i(e.src) : o(e.src) : {}
    }
}, function (t) {
    function e(t, e, i) {
        var o = "", n = 0, s = -1;
        if (void 0 === i && (i = 300), t && (o = t.substr(0, i), o !== t && ((s = o.lastIndexOf("%")) >= o.length - 4 && (o = o.substr(0, s)), o !== t))) {
            for (var l in a)a[l] !== e || (n = 1);
            n || a.push(e)
        }
        return o
    }

    var a = [];
    t.exports = {truncationList: a, truncateURL: e}
}, function (t, e, a) {
    var i = a(32), o = a(252);
    t.exports = function (t, e) {
        var a;
        return a = i[t] && i[t].name ? i[t].name : o[t] ? o[t] : e ? t : t.substr(0, 1).toUpperCase() + t.substr(1), (a || "").replace(/&nbsp;/g, " ")
    }
}, , function (t) {
    t.exports = function (t, e) {
        if (e && t !== e)for (var a in e)e.hasOwnProperty(a) && void 0 === t[a] && (t[a] = e[a])
    }
}, function (t) {
    t.exports = function () {
        var t = window, e = t.addthis_config_msg || {}, a = t.addthis_config || {};
        return encodeURIComponent(e.pubid || e.username || e.pub || a.pubid || a.username || t.addthis_pub || "")
    }
}, function (t) {
    function e(t, e) {
        for (var a = -1, i = t.length; ++a < i && e(t[a], a, t) !== !1;);
        return t
    }

    t.exports = e
}, function (t, e, a) {
    function i(t, e) {
        var a = t ? t.length : 0;
        if (!n(a))return o(t, e);
        for (var i = -1, l = s(t); ++i < a && e(l[i], i, l) !== !1;);
        return t
    }

    var o = a(101), n = a(12), s = a(106);
    t.exports = i
}, function (t, e, a) {
    function i(t, e) {
        return o(t, e, n)
    }

    var o = a(222), n = a(48);
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a, n, s, l) {
        if (t === e)return 0 !== t || 1 / t == 1 / e;
        var r = typeof t, h = typeof e;
        return"function" != r && "object" != r && "function" != h && "object" != h || null == t || null == e ? t !== t && e !== e : o(t, e, i, a, n, s, l)
    }

    var o = a(223);
    t.exports = i
}, function (t) {
    function e(t) {
        return"string" == typeof t ? t : null == t ? "" : t + ""
    }

    t.exports = e
}, function (t) {
    function e(t) {
        return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
    }

    t.exports = e
}, function (t, e, a) {
    function i(t) {
        return t === t && (0 === t ? 1 / t > 0 : !o(t))
    }

    var o = a(25);
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        return o(t) ? t : Object(t)
    }

    var o = a(25);
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        var e = n(t) ? t.length : void 0;
        return o(e) && r.call(t) == s || !1
    }

    var o = a(12), n = a(47), s = "[object Arguments]", l = Object.prototype, r = l.toString;
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        var e = n((t.adurl || "") + (t.adev || "")), a = 0;
        if (!c[e]) {
            if (c[e] = 1, t.adurl && "string" == typeof t.adurl && (_ate.pixu = t.adurl, a = 1), t.adev && "string" == typeof t.adev) {
                var i = t.adev;
                try {
                    i = h(i)
                } catch (o) {
                }
                i = i.split(";"), a = 1, _ate.ed.addEventListener("addthis-internal.data.uid", function () {
                    for (var t = 0; t < i.length; t++) {
                        for (var e = i[t].split(","), a = {}, o = 0; o < e.length; o++) {
                            var n = e[o].split("=");
                            a[n[0]] = n[1]
                        }
                        r.addthis && r.addthis.ad.event(a)
                    }
                })
            }
            return a
        }
    }

    function o(t, e) {
        for (var a = l.gn("script"), i = 0; i < a.length; i++) {
            var o = a[i].src || "";
            o && (o = n(o)), (a[i].src || "").indexOf(e || "addthis_widget.js") > -1 && !c[o] && (c[o] = 1, t(s(a[i].src)))
        }
    }

    var n = a(11), s = a(10);
    t.exports = {processAdEvents: i, processAllScripts: o};
    var l = document, r = window, h = r.decodeURIComponent, c = {}
}, function (t, e, a) {
    var i = a(28);
    t.exports = function (t) {
        var e = {twitter: 1, wordpress: 1, facebook: 1, hootsuite: 1, email: i() >= 300, bkmore: 1, more: i() >= 300, raiseyourvoice: 1, vk: 1, tumblr: 1};
        return!!e[t]
    }
}, function (t, e, a) {
    function i(t) {
        if (!t)return 0;
        "#" === t.charAt(0) && (t = t.substr(1));
        var e = t.split(";").shift();
        return 3 === e.split(".").length && (e = e.split(".").slice(0, -1).join(".")), 12 === e.length && "." === e.substr(0, 1) && /[a-zA-Z0-9\-_]{11}/.test(e.substr(1)) ? 1 : 0
    }

    function o(t) {
        return t.length === 11 + E && t.substr(0, E) === x && /[a-zA-Z0-9\-_]{11}/.test(t.substr(E))
    }

    function n(t, e) {
        t || (t = F.location), e || (e = F.referer || F.referrer || "");
        var a, i, n, s, l, r, h, c, g, u, m, w, D, x = 0, z = 0, _ = t ? t.href : "", M = (_ || "").split("#").shift(), k = t.hash.substr(1), y = d(t.search), A = v(t.hash), B = A.at_st, S = A.at_pco, I = A.at_ab, O = A.at_pos, T = A.at_tot, j = A.at_si, R = y.sms_ss, N = y.fb_ref, U = y.at_xt, L = y.at_st;
        B || o(k) && (h = f(k.substr(E)), l = h.substr(8, 8), B = h.substr(0, 8) + "00000000,", B += parseInt(h.substr(16), 10)), N && !B && (c = C, u = N.split(c), u.length < 2 && N.indexOf("_") > -1 && (c = "_", u = N.split(c)), m = u.length > 1 ? u.pop() : "", w = u.join(c), o(w) || (w = N, m = ""), o(w) ? (h = f(w.substr(E)), U = h.substr(0, 16) + "," + parseInt(h.substr(16), 10), R = "facebook_" + (m || "like")) : (r = N.split("=").pop().split(C), 2 == r.length && p(r[0]) && (U = r.join(","), R = "facebook_" + (m || "like")))), B = B && p(B.split(",").shift()) ? B : "", U || (c = k.indexOf(b) > -1 ? b : C, g = k.substr(E).split(c), 2 == g.length && o(k.substr(0, 1) + g[0]) && (h = f(g[0]), U = h.substr(0, 16) + "," + parseInt(h.substr(16), 10), R = g[1], x = 1)), S && (n = S), B ? (z = parseInt(B.split(",").pop()) + 1, i = B.split(",").shift()) : -1 == _.indexOf(_atd + "book") && M != e && (U ? (D = U.split(","), a = _duc(D.shift()), a.indexOf(",") > -1 && (D = a.split(","), a = D.shift())) : L && (D = L.split(","), s = _duc(D.shift()), s.indexOf(",") > -1 && (D = s.split(","), s = D.shift())), D && D.length && (z = Math.min(3, parseInt(D.pop()) + 1))), p(i) || (i = null), p(s) || (s = null), R = (R || "").split("#").shift().split("?").shift();
        var Y = {ab: I || null, pos: O, tot: T, rsi: i, cfc: n, hash: x, rsiq: s, fuid: l, rxi: a, rsc: R, gen: z, csi: j};
        return Y
    }

    function s(t) {
        return t = t || window.addthis_config, !t || t.data_track_clickback !== !1 && t.data_track_linkback !== !1
    }

    function l(t, e) {
        if (!e || e.data_track_clickback !== !1 && e.data_track_linkback !== !1) {
            if (z)return!0;
            if (m() >= 250)return z = !0;
            t = (t || w.addthis_product || "").split(",");
            for (var a = 0; a < t.length; a++)if (_[t[a].split("-").shift()])return z = !0
        }
        return!1
    }

    function r(t, e) {
        return t = t || u(), x + g(t + Math.min(3, e || 0))
    }

    function h(t, e, a) {
        return a = a || u(), t.indexOf("#") > -1 ? t : t + "#" + r(e ? a : a.substr(0, 8) + D(), n().gen) + (e ? C + e : "")
    }

    function c(t) {
        var e, a, o, n, s, l, r;
        return t.indexOf("#") > -1 && (s = t.split("#").slice(1).shift(), i(s) && (l = s.substr(1).split("."), r = l.length ? l.shift() : "", a = l.length ? l.pop() : "", r && (r = f(r), e = r.substr(0, 16), o = parseInt(r.substr(16), 10), isNaN(o) || (n = n || {}, n.gen = o)), p(e) && (n = n || {}, n.xid = e), -1 != a.search(/^[a-zA-Z0-9_]+$/) && (n = n || {}, n.rsc = a))), n
    }

    var d = a(63), v = a(10), f = a(29).atohb, g = a(29).hbtoa, p = a(3).isValidCUID, u = a(3).makeCUID, m = a(28), D = a(80), F = document, x = ".", b = ";", C = ".", E = x.length, z = 0, _ = {wpp: 1, blg: 1};
    t.exports = {clickifyURL: h, declickifyURL: c, generateClickbackCode: r, clickPrefix: x, clickTrackableProduct: l, extractOurParameters: n, isClickHash: i, isClickTrackingEnabled: s}
}, function (t) {
    var e = document;
    t.exports = function () {
        var t = e.location.protocol;
        return"file:" === t && (t = "http:"), t + "//www.addthis.com/"
    }
}, function (t) {
    var e, a = window;
    t.exports = function () {
        return e || (a.addthis ? (a.addthis.plo || (a.addthis.plo = []), e = a.addthis.plo) : "undefined" != typeof _ate && (_ate.plo || (_ate.plo = []), e = _ate.plo)), e
    }
}, function (t, e, a) {
    var i = a(17).map;
    t.exports = function (t) {
        if ("t.co" === t)return"twitter";
        var e, a;
        for (e in i)if (a = i[e], "" === a && (a = e + ".com"), -1 !== t.indexOf(a))return e;
        return null
    }
}, function (t, e, a) {
    function i(t, e) {
        var a = e.config, i = e.moreOptions, n = {goal: a.goal, imageURL: a.backgroundImage, buttonTextColor: a.foregroundColor, position: a.position, theme: a.backgroundColor, noGradient: a.noGradient, responsive: i.responsive, fixed: a.fixed, __hideOnHomepage: i.__hideOnHomepage, __hideOnUrls: i.__hideOnUrls};
        delete e.config.goalOptions.position, l(n, a.goalOptions);
        var r = {pages: i.pages, devices: i.devices, trigger: i.trigger, triggerValue: i.triggerValue};
        s(r, function (t, e) {
            void 0 === e && delete r[t]
        });
        var h = {id: t, "default": a.audience && a.audience["default"], state: e.state, advancedOptions: r, conditions: o(a.audience), widgetConfig: n};
        return h
    }

    function o(t) {
        var e = {};
        return s(t, function (t, a) {
            if ("returning" === t)e["new"] = !a; else {
                if ("default" === t)return;
                "interests" === t ? e.interest = a : "socialSources" === t ? e.socialSource = a : "campaignMediums" === t ? e.campaignMedium = a : "campaignNames" === t ? e.campaignName = a : "referringDomains" === t ? e.referringDomain = a : e[t] = a
            }
        }), e
    }

    var n = a(13), s = a(1), l = a(34);
    t.exports = function (t) {
        var e = [], a = [], o = {};
        return s(t, function (t, o) {
            var s = o.config.position;
            "top" === s || "bottom" === s ? e.push(i(t, o)) : "center" === s ? a.push(i(t, o)) : n.error("Unknown position in custom message: `" + s + "`")
        }), e.length && (o.wmb = {audienceRules: e}), a.length && (o.cvlbx = {audienceRules: a}), o
    }
}, function (t) {
    t.exports = function () {
        return!!window.at_sub
    }
}, function (t, e, a) {
    var i = a(2), o = a(39), n = window;
    t.exports = function (t, e, a, s, l) {
        var r = e || 550, h = a || 450, c = screen.width, d = screen.height, v = Math.round(c / 2 - r / 2), f = 0;
        d > h && (f = Math.round(d / 2 - h / 2));
        var g = n.open(t, i("msi") ? "" : s || "addthis_share", "left=" + v + ",top=" + f + ",width=" + r + ",height=" + h + ",personalbar=no,toolbar=no,scrollbars=yes,location=yes,resizable=yes");
        return o.push(g), l ? g : !1
    }
}, function (t, e, a) {
    var i = a(39), o = window;
    t.exports = function (t, e, a) {
        var n = o.open(t, e, a);
        return i.push(n), n
    }
}, function (t) {
    t.exports = []
}, function (t, e, a) {
    var i = a(22);
    t.exports = function (t, e) {
        var a, o, n;
        return"object" == typeof t && (t = i(t)), a = (t || "").split("?"), o = a.shift(), n = (a.pop() || "").split("&"), e(o, n)
    }
}, function (t, e, a) {
    var i = a(20), o = a(39), n = window;
    t.exports = function (t, e, a) {
        var s, l = _ate.share.pws;
        return n.location.href.search(_atc.rsrcs.bookmark) > -1 ? n.location = i(t, 0, e, a) : "whatsapp" === t ? l(e, a) : (s = i(t, 0, e, a), o.push(n.open(s, "addthis_share"))), !1
    }
}, function (t, e, a) {
    function i(t) {
        var e = l(t, 0, 1, 0, 0, 1);
        t === s.PINTEREST && (o(), e.setAttribute("via", "addthis"))
    }

    var o = a(138), n = a(61), s = a(84)(), l = a(4), r = a(9).listen, h = window.parent === window;
    t.exports = function (t) {
        h ? i(t) : n ? window.parent.postMessage("at-share-bookmarklet:" + t, "*") : i(t)
    }, h && r(window, "message", function (t) {
        if (t && "string" == typeof t.data) {
            var e = t.data.match(/at\-share\-bookmarklet\:(.+?)$/) || [], a = e[1];
            if (a) {
                try {
                    _ate.menu.close()
                } catch (o) {
                }
                i(a)
            }
        }
    })
}, function (t) {
    t.exports = 500
}, function (t) {
    t.exports = function () {
        return{NOOP: -1, CLICK: 50, VIEW: 100, POP: 200, COPY: 250, SHARE: 300, FOLLOW: 350, COMMENT: 375, UID: 1e3, CUSTOM: 2e3, ENGAGEMENT: 2100}
    }
}, function (t) {
    t.exports = function () {
        return{ALLOW_NONE: 0, ALLOW_ALL: -1, GOV: 1, MIL: 2, OPTOUT_USER: 4, OPTOUT_PUB: 8, DO_NOT_TRACK: 16, CAN_SET_COOKIES: 32}
    }
}, function (t, e, a) {
    function i(t, e, a, i) {
        var r;
        "number" != typeof t && (r = t, t = 32 * r.length), this.m = t, this.k = e;
        var h = Math.ceil(t / 32), c = -1;
        if (l) {
            var d = 1 << Math.ceil(Math.log(Math.ceil(Math.log(t) / Math.LN2 / 8)) / Math.LN2), v = 1 === d ? Uint8Array : 2 === d ? Uint16Array : Uint32Array, f = new ArrayBuffer(d * e), g = this.buckets = new Int32Array(h);
            if (r)for (; ++c < h;)g[c] = r[c]; else if (i)for (c = -1; ++c < h;)g[c] = i[c];
            if (this._locations = new v(f), a)for (c = 0; c < a.length; c++)this._locations[c] = a[c]
        } else {
            var g = this.buckets = i || [];
            if (r)for (; ++c < h;)g[c] = r[c]; else for (; ++c < h;)g[c] = 0;
            this._locations = a || []
        }
        this.locations = function (t) {
            for (var e = this.k, a = this.m, i = this._locations, o = s(t), l = n(o), r = -1, h = o % a; ++r < e;)i[r] = 0 > h ? h + a : h, h = (h + l) % a;
            return i
        }, this.add = function (t) {
            for (var e = this.locations(t + ""), a = -1, i = this.k, o = this.buckets; ++a < i;)o[Math.floor(e[a] / 32)] |= 1 << e[a] % 32
        }, this.test = function (t) {
            for (var e, a = this.locations(t + ""), i = -1, o = this.k, n = this.buckets; ++i < o;)if (e = a[i], 0 === (n[Math.floor(e / 32)] & 1 << e % 32))return!1;
            return!0
        }, this.size = function () {
            for (var t = this.buckets, e = 0, a = 0, i = t.length; i > a; ++a)e += o(t[a]);
            return-this.m * Math.log(1 - e / this.m) / this.k
        }
    }

    function o(t) {
        return t -= t >> 1 & 1431655765, t = (858993459 & t) + (t >> 2 & 858993459), 16843009 * (t + (t >> 4) & 252645135) >> 24
    }

    function n(t) {
        return t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24), t += t << 13, t ^= t >> 7, t += t << 3, t ^= t >> 17, t += t << 5, 4294967295 & t
    }

    var s = a(135);
    t.exports = i;
    var l = "undefined" != typeof ArrayBuffer
}, function (t, e, a) {
    function i(t) {
        var e = _atc._date || new Date, a = e.getDate(), i = e.getMonth() + 1;
        return 10 > i && (i = "0" + i), 10 > a && (a = "0" + a), t + "." + (i + "" + a)
    }

    function o(t, e, a, i, o) {
        function s(t) {
            if (_ate.uls) {
                var e = JSON.parse(l.get(t) || "{}"), a = parseInt(e.m) || h, i = parseInt(e.k) || c, o = e.l, s = e.b;
                return new n(a, i, o, s)
            }
            return null
        }

        var r;
        return t = t || "pbf", r = e && a && i && o ? new n(e, a, i, o) : e && a ? new n(e, a) : _ate.uls ? s(t) : new n(h, c), r.name = t, r.save = function () {
            if (_ate.uls) {
                var t = {m: r.m, k: r.k, l: r._locations, b: r.buckets};
                l.add(r.name, JSON.stringify(t))
            }
        }, r.remove = function () {
            l.removeByPrefix(r.name)
        }, r
    }

    var n = a(125), s = a(1), l = a(131), r = 3, h = 600, c = 2;
    t.exports = function d(t, e, a) {
        function n(t) {
            return t = (t || "").split(".").pop(), 4 != t.length ? {} : {m: parseInt(t.substr(0, 2)), d: parseInt(t.substr(2, 4))}
        }

        var h, c = {};
        return t ? this instanceof d ? (this.name = t, this.get = function (t) {
            return _ate.ich ? null : c[t] = o(t)
        }, this.isEmpty = function () {
            return!l.exists(this.name)
        }, this.add = function (t) {
            return c[t] || (this.get(t), this.prune()), c[t]
        }, this.contains = function (t) {
            return!!l.get(this.name + "." + t)
        }, this.prune = function (t) {
            l.remove(this.name);
            var e = this.getCurrentBlooms(), t = Math.min(t || r, 31), a = [], i = n(this.generateName()), o = i.m, h = i.d;
            for (s(e, function (e) {
                if (i = n(e), i.m) {
                    var s = i.m, r = i.d;
                    s > o || s == o && h - t > r || o - 1 > s || s == o - 1 && (h > t || 31 - t > r) ? l.remove(e) : a.push(e)
                }
            }), a.sort(function (t, e) {
                return parseInt(t) < parseInt(e) ? 1 : -1
            }); a.length > 3;)l.remove(a.pop())
        }, this.testAll = function (t) {
            var e = !1;
            if (!h) {
                var a = this.getCurrentBlooms(), i = this;
                s(a, function (t) {
                    c[t] || (c[t] = i.get(t))
                }), h = 1
            }
            return s(c, function (a, i) {
                return i && i.test(t) ? (e = !0, !1) : void 0
            }), e
        }, this.generateName = function () {
            return(a || i).call(this, this.name)
        }, void(this.getCurrentBlooms = function () {
            return l.getAll(this.name)
        })) : new d(t, e, a) : null
    }
}, function (t, e, a) {
    function i(t, e, a) {
        var n = this, s = new o(n);
        e = e || "", s.decorate(s).decorate(n), this.callbacks = [], this.ready = !1, this.loading = !1, this.id = t, this.url = e, this.test = "function" == typeof a ? a : "undefined" == typeof a ? function () {
            return!0
        } : function () {
            return"object" == typeof _window && _window[a]
        }, i.addEventListener("load", function (t) {
            var e = t.data ? t.data.resource : null;
            e && e.id === n.id && n.loading && (n.loading = !1, n.ready = !0, s.fire(t.type, e, {resource: e}))
        })
    }

    var o = a(58).EventDispatcher, n = a(302), s = a(4), l = document, r = window.addthis_config || {}, h = [];
    t.exports = i, i.prototype.load = function (t) {
        var e, a, o, h, c = r.ui_use_css === !1 ? !1 : !0;
        if (t instanceof Function && this.callbacks.push(t), this.loading)return 1;
        if (".css" === this.url.substr(this.url.length - 4)) {
            if (c) {
                for (a = l.getElementsByTagName("link"), h = a.length - 1; h >= 0; h--)if ("stylesheet" === a[h].rel && n(a[h].href) === n(this.url)) {
                    o = a[h];
                    break
                }
                o || (e = l.getElementsByTagName("head")[0] || l.documentElement, o = l.createElement("link"), o.rel = "stylesheet", o.type = "text/css", o.href = this.url, o.media = "non-existant-media", e.appendChild(o, e.firstChild), setTimeout(function () {
                    o.media = "all"
                }))
            }
        } else o = s(this.url, 1);
        return this.loading = !0, i.monitor(this), o
    }, i.loading = h, i.monitor = function d(t) {
        var e, a, o;
        for (t && t instanceof i && h.push(t), e = 0; e < h.length;)if (o = h[e], o && o.test())for (h.splice(e, 1), i.fire("load", o, {resource: o}), a = 0; a < o.callbacks.length; a++)o.callbacks[a](); else e++;
        h.length && setTimeout(d, 25)
    };
    var c = new o(i);
    c.decorate(c).decorate(i)
}, function (t, e, a) {
    function i() {
        C = 0, F = {}, b = []
    }

    function o(t) {
        return t > p.high ? 3 : t > p.med ? 2 : 1
    }

    function n() {
        var t, e = [];
        l();
        for (t in F)e.push({name: t, score: o(F[t])});
        return e.sort(function (t, e) {
            return t.score > e.score ? 1 : -1
        }), e
    }

    function s() {
        l();
        var t, e = {};
        for (t in F)e[t] = o(F[t]);
        return e
    }

    function l() {
        if (!C) {
            var t, e, a, i, o = (g.rck(D) || "").split(",");
            for (t = 0, ssc_len = o.length; ssc_len > t; t++)e = o[t].split(";"), a = e.pop(), i = e.pop() || "", F[i] = a, b.push(i), a > E && (E = a, f = i);
            C = 1
        }
    }

    function r(t) {
        return F.hasOwnProperty(t)
    }

    function h() {
        for (var t, e = !1, a = (g.rck("sshs") || "").split(","); e === !1 && 0 != a.length;)t = a.pop(), F.hasOwnProperty(t) && F[t] == Math.min(F) && (e = t);
        e === !1 && (e = b.pop()), delete F[e]
    }

    function c() {
        var t, e = {}, a = [];
        for (t in F)F.hasOwnProperty(t) && F[t] / 2 >= 1 && (e[t] = parseInt(F[t] / 2), a.push(t));
        F = e, b = a
    }

    function d(t) {
        if (l(), "string" != typeof t)return!1;
        if (t = t.replace(/_[a-zA-Z0-9]*/i, ""), x === !1) {
            x = !0, b.length + 1 >= m && !r(t) && h(), r(t) ? F[t]++ : F[t] = "1", F[t] >= w && c();
            var e = v(F);
            g.sck(D, escape(e), !1, !u)
        }
    }

    function v(t) {
        var e, a, i = [];
        if ("object" != typeof t)return!1;
        for (a in t)a.length > 1 && i.push(a + ";" + t[a]);
        return e = i.join(",")
    }

    var f, g = a(19), p = {high: 4, med: 2}, u = document.location.href.indexOf("addthis.com") > -1, m = 10, w = 20, D = (u ? "" : "__at") + "ssc", F = {}, x = !1, b = [], C = 0, E = 0;
    t.exports = {reset: i, get: s, getServices: n, update: d}
}, function (t, e, a) {
    function i() {
        return z.slice(-5).join(x)
    }

    function o(t) {
        if (!b || t) {
            var e = g.rck(D) || "";
            e && (z = u(e).split(x)), b = 1
        }
    }

    function n(t) {
        var e, a, i, o, n, s = new Date(t.getFullYear(), 0, 1);
        return e = s.getDay(), e = e >= 0 ? e : e + 7, a = Math.floor((t.getTime() - s.getTime() - 6e4 * (t.getTimezoneOffset() - s.getTimezoneOffset())) / 864e5) + 1, 4 > e ? (n = Math.floor((a + e - 1) / 7) + 1, n > 52 && (i = new Date(t.getFullYear() + 1, 0, 1), o = i.getDay(t), o = o >= 0 ? o : o + 7, n = 4 > o ? 1 : 53)) : n = Math.floor((a + e - 1) / 7), n
    }

    function s(t, e, a) {
        for (var i = 0; e > i; i++) {
            var o = a + i;
            o >= 51 && (o = 1), t.push("0" + F + o)
        }
    }

    function l() {
        if (!C) {
            var t = n(w);
            o(), r(t), C = 1
        }
    }

    function r(t) {
        var e, a;
        z.length ? (e = z[z.length - 1], a = parseInt(e.split(F).pop(), 10), a == t ? z[z.length - 1] = parseInt(e.split(F).shift(), 10) + 1 + F + t : a + 1 == t || a >= 51 ? z.push("1" + F + t) : t > a ? (s(z, t - a - 1, a + 1), z.push("1" + F + t)) : a > t && (z = [], z.push("1" + F + t)), z.length > 5 && z.slice(-5)) : z.push("1" + F + t)
    }

    function h(t) {
        o(), z.length && g.sck(D, m(i()), 0, t)
    }

    function c(t) {
        o(), l(), h(t)
    }

    function d() {
        var t = [];
        o();
        for (var e = 0; e < z.length; e++)t.push(z[e].split(F).shift());
        return t.slice(-5)
    }

    function v() {
        for (var t = d(), e = 0, a = 0; a < t.length; a++)e += parseInt(t[a], 10) || 0;
        return e > E.high ? 3 : e > E.med ? 2 : e > C ? 1 : 0
    }

    function f() {
        b = 0, C = 0, z = []
    }

    var g = a(19), p = a(38);
    t.exports = {reset: f, update: c, get: d, cla: v, toKV: i};
    var u = window.decodeURIComponent, m = window.encodeURIComponent, w = new Date, D = (-1 === document.location.href.indexOf(p()) ? "__at" : "") + "uvc", F = "|", x = ",", b = 0, C = 0, E = {high: 250, med: 75}, z = []
}, function (t, e, a) {
    function i(t) {
        var e;
        return _(t) && (e = t.toString(16)), (!e || e.indexOf("NaN") > -1 || e.length > 3 || e === t) && (e = ""), ("000" + e).slice(-3)
    }

    function o(t) {
        var e;
        return M(t) && (e = parseInt(t, 16)), (!e || e !== e || 0 > e) && (e = 0), e
    }

    function n() {
        return(new Date).getTime()
    }

    function s() {
        return k()
    }

    function l() {
        var t = new Date, e = new Date(n() + 18e5);
        return t.getHours() > 0 && 0 === e.getHours()
    }

    function r() {
        return new Date(new Date((new Date).setHours(24, 0, 0, 0)).setSeconds(-1))
    }

    function h() {
        return l() ? r() : new Date(n() + 18e5)
    }

    function c(t) {
        if (!x || t) {
            var e = z.rck, a = e(B) || "";
            a ? (b = f(a), b.counter += 1) : b = {id: s(), counter: 0, audienceRules: null}, x = 1
        }
    }

    function d() {
        c(), z.sck(B, g(), !1, !0, h())
    }

    function v() {
        d()
    }

    function f(t) {
        var e = t.substr(0, 16), a = t.substr(16, 19), i = t.substr(19);
        if (i)try {
            C = JSON.parse(decodeURIComponent(i))
        } catch (n) {
            y.error("visit deserialize", E(n)), C = null
        } else C = null;
        return{id: e, counter: o(a), audienceRules: C}
    }

    function g() {
        var t;
        return t = C ? encodeURIComponent(JSON.stringify(C)) : "", b.id + i(b.counter) + t
    }

    function p() {
        return c(), 0 === b.counter
    }

    function u() {
        return null !== C
    }

    function m() {
        return c(), b.id
    }

    function w(t, e) {
        C = C || {}, C[t] = e, d()
    }

    function D(t) {
        return c(), C ? C[t] : null
    }

    function F() {
        var t = _ate.cookie.read("__atuvs").substring(16);
        return parseInt(t, 16)
    }

    var x, b, C, E = a(143), z = a(19), _ = a(8).number, M = a(8).string, k = a(3).makeCUID, y = a(13), A = a(38), B = (-1 === window.document.location.href.indexOf(A()) ? "__at" : "") + "uvs";
    t.exports = {update: v, isNew: p, hasAudienceRules: u, addAudienceRule: w, getAudienceRule: D, getID: m, readVisitCount: F}
}, function (t, e, a) {
    function i(t) {
        return d ? f.localStorage.getItem(g + t) : void 0
    }

    function o(t, e) {
        if (d) {
            var a = g + t;
            try {
                f.localStorage[a] = e
            } catch (i) {
                if ("QUOTA_EXCEEDED_ERR" === i.name) {
                    r();
                    try {
                        f.localStorage[a] = e
                    } catch (i) {
                    }
                }
            }
        }
    }

    function n(t) {
        t && "function" == typeof t && v(f.localStorage, t)
    }

    function s(t) {
        var e = {};
        if (d)return n(function (a, i) {
            a && a.indexOf && 0 === a.indexOf(g + (t || "")) && (e[a] = i)
        }), e
    }

    function l(t) {
        var e = 0;
        return n(function (a) {
            a && a.indexOf && 0 === a.indexOf(g + (t || "")) && e++
        }), e > 0
    }

    function r() {
        n(function (t) {
            0 === t.indexOf(g) && f.localStorage.removeItem(t)
        })
    }

    function h(t) {
        var e = s();
        v(e, function (e) {
            0 === e.indexOf(g + t) && f.localStorage.removeItem(e)
        })
    }

    function c(t) {
        d && f.localStorage.removeItem(t)
    }

    var d = a(150), v = a(1), f = window, g = "_at.";
    t.exports = {getAll: s, removeAll: r, add: o, get: i, remove: c, exists: l, removeByPrefix: h}
}, function (t, e, a) {
    var i = a(45);
    t.exports = function (t) {
        return(t || i()).split("-").shift()
    }
}, function (t, e, a) {
    var i = a(134);
    t.exports = function (t) {
        var e = i(t) || "en";
        return 1 === e && (e = t), e
    }
}, function (t) {
    t.exports = function (t) {
        var e = {af: 1, afr: "af", ar: 1, ara: "ar", az: 1, aze: "az", be: 1, bye: "be", bg: 1, bul: "bg", bn: 1, ben: "bn", bs: 1, bos: "bs", ca: 1, cat: "ca", cs: 1, ces: "cs", cze: "cs", cy: 1, cym: "cy", da: 1, dan: "da", de: 1, deu: "de", ger: "de", el: 1, gre: "el", ell: "ell", en: 1, eo: 1, es: 1, esl: "es", spa: "spa", et: 1, est: "et", eu: 1, fa: 1, fas: "fa", per: "fa", fi: 1, fin: "fi", fo: 1, fao: "fo", fr: 1, fra: "fr", fre: "fr", ga: 1, gae: "ga", gdh: "ga", gl: 1, glg: "gl", gu: 1, he: 1, heb: "he", hi: 1, hin: "hin", hr: 1, ht: 1, hy: 1, cro: "hr", hu: 1, hun: "hu", id: 1, ind: "id", is: 1, ice: "is", it: 1, ita: "it", iu: 1, ike: "iu", iku: "iu", ja: 1, jpn: "ja", km: 1, ko: 1, kor: "ko", ku: 1, lb: 1, ltz: "lb", lt: 1, lit: "lt", lv: 1, lav: "lv", mk: 1, mac: "mk", mak: "mk", ml: 1, mn: 1, ms: 1, msa: "ms", may: "ms", nb: 1, nl: 1, nla: "nl", dut: "nl", no: 1, nds: 1, nn: 1, nno: "no", oc: 1, oci: "oc", pl: 1, pol: "pl", ps: 1, pt: 1, por: "pt", ro: 1, ron: "ro", rum: "ro", ru: 1, rus: "ru", sk: 1, slk: "sk", slo: "sk", sl: 1, slv: "sl", sq: 1, alb: "sq", sr: 1, se: 1, si: 1, ser: "sr", su: 1, sv: 1, sve: "sv", sw: 1, swe: "sv", ta: 1, tam: "ta", te: 1, teg: "te", th: 1, tha: "th", tl: 1, tgl: "tl", tn: 1, tr: 1, tur: "tr", tpi: 1, tt: 1, uk: 1, ukr: "uk", ur: 1, urd: "ur", vi: 1, vec: 1, vie: "vi", "zh-cn": 1, "zh-hk": 1, "chi-hk": "zh-hk", "zho-hk": "zh-hk", "zh-tr": 1, "chi-tr": "zh-tr", "zho-tr": "zh-tr", "zh-tw": 1, "chi-tw": "zh-tw", "zho-tw": "zh-tw", zh: 1, chi: "zh", zho: "zh"};
        return e[t] ? e[t] : (t = t.split("-").shift(), e[t] ? 1 === e[t] ? t : e[t] : 0)
    }
}, function (t) {
    t.exports = function (t) {
        for (var e, a, i = t.length, o = 2166136261, n = -1; ++n < i;)e = t.charCodeAt(n), (a = 4278190080 & e) && (o ^= a >> 24, o += (o << 1) + (o << 4) + (o << 7) + (o << 8) + (o << 24)), (a = 16711680 & e) && (o ^= a >> 16, o += (o << 1) + (o << 4) + (o << 7) + (o << 8) + (o << 24)), (a = 65280 & e) && (o ^= a >> 8, o += (o << 1) + (o << 4) + (o << 7) + (o << 8) + (o << 24)), o ^= 255 & e, o += (o << 1) + (o << 4) + (o << 7) + (o << 8) + (o << 24);
        return o += o << 13, o ^= o >> 7, o += o << 3, o ^= o >> 17, o += o << 5, 4294967295 & o
    }
}, function (t) {
    t.exports = function () {
        return Math.floor(4294967295 * Math.random()).toString(36)
    }
}, function (t) {
    function e() {
        Function.prototype.bind = function (t) {
            if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1), a = this, i = function () {
            }, o = this instanceof i && t ? this : t, n = function () {
                return a.apply(o, e.concat(Array.prototype.slice.call(arguments)))
            };
            return i.prototype = this.prototype, n.prototype = new i, n
        }
    }

    Function.prototype.bind || e(), t.exports = e
}, function (t, e, a) {
    var i = a(1);
    t.exports = function () {
        var t = document.getElementsByTagName("img"), e = window.addthis_config && addthis_config.image_exclude, a = new RegExp("(\\s|^)" + e + "(\\s|$)");
        e && i(t, function (t, e) {
            var i = e.className || "";
            i.match(a) && e.setAttribute("nopin", "nopin")
        })
    }
}, function (t, e, a) {
    var i = a(2), o = a(26), n = a(78);
    t.exports = function (t, e) {
        var a, s = !0 && i("dro");
        i("iph") || i("ipa") || s ? (a = o("whatsapp", t, e, !1, !0), window.location = "whatsapp://send?text=" + (t.title ? encodeURIComponent(t.title) + "%20" : "") + encodeURIComponent(a)) : (e.ui_pane = "email", n(document.body, "more", "", "", e, t))
    }
}, function (t, e, a) {
    var i, o = a(2), n = a(1), s = window, l = document, r = {isBound: 0, isReady: 0, readyList: [], onReady: function () {
        var t;
        if (!r.isReady) {
            t = r.readyList.concat(s.addthis_onload || []), r.isReady = 1;
            for (var e = 0; e < t.length; e++)t[e].call(s);
            r.readyList = []
        }
    }, addLoad: function (t) {
        var e = s.onload;
        s.onload = "function" != typeof s.onload ? t : function () {
            e && e(), t()
        }
    }, bindReady: function () {
        if (!r.isBound && !_atc.xol) {
            if (r.isBound = 1, "complete" === l.readyState)return void setTimeout(r.onReady, 1);
            l.addEventListener && !o("opr") && l.addEventListener("DOMContentLoaded", r.onReady, !1);
            var t = s.addthis_product;
            if (t && t.indexOf("f") > -1)return void r.onReady();
            if (o("msi") && !o("ie9") && s === s.parent && !function () {
                if (!r.isReady) {
                    try {
                        l.documentElement.doScroll("left")
                    } catch (t) {
                        return void setTimeout(arguments.callee, 0)
                    }
                    r.onReady()
                }
            }(), o("opr")) {
                var e = !0, a = function () {
                    r.isReady || (n(l.styleSheets, function (t, i) {
                        return i.disabled ? (e = !1, setTimeout(a, 0), !1) : void 0
                    }), e && r.onReady())
                };
                l.addEventListener("DOMContentLoaded", a, !1)
            }
            if (o("saf")) {
                var h;
                !function () {
                    if (!r.isReady) {
                        if ("loaded" !== l.readyState && "complete" !== l.readyState)return void setTimeout(arguments.callee, 0);
                        if (h === i) {
                            for (var t = l.gn("link"), e = 0; e < t.length; e++)"stylesheet" === t[e].getAttribute("rel") && h++;
                            var a = l.gn("style");
                            h += a.length
                        }
                        return l.styleSheets.length != h ? void setTimeout(arguments.callee, 0) : void r.onReady()
                    }
                }()
            }
            r.addLoad(r.onReady)
        }
    }, append: function (t) {
        r.bindReady(), r.isReady ? t.call(s, []) : r.readyList.push(function () {
            return t.call(s, [])
        })
    }};
    t.exports = r
}, function (module, exports, __webpack_require__) {
    var w = window, euc = w.encodeURIComponent, times = {}, timeouts = {}, callbacks, pageCallbacks = {};
    module.exports = function (globalObjectString) {
        function storeCallback(t, e, a, i, o) {
            e = euc(e).replace(/[0-3][A-Z]|[^a-zA-Z0-9]/g, "").toLowerCase(), pageCallbacks[e] = pageCallbacks[e] || 0;
            var n = pageCallbacks[e]++, s = t + "_" + e + (o ? "" : n);
            return callbacks[s] || (callbacks[s] = function () {
                timeouts[s] && clearTimeout(timeouts[s]), a.apply(this, arguments)
            }), times[s] = (new Date).getTime(), i && (clearTimeout(timeouts[s]), timeouts[s] = setTimeout(i, 1e4)), globalObjectString + "." + euc(s)
        }

        function getCallbackCallTime(t) {
            return times[t]
        }

        try {
            callbacks = eval(globalObjectString)
        } catch (e) {
            throw new Error("Must pass a string which will eval to a globally accessible object where callbacks will be stored")
        }
        return{storeCallback: storeCallback, getCallbackCallTime: getCallbackCallTime}
    }
}, function (t, e, a) {
    function i(t) {
        return t ? (t.indexOf("%") > -1 && (t = r(t)), t.indexOf(",") > -1 && (t = t.split(",")[1]), t = s.atob(t)) : ""
    }

    function o(t) {
        var e, a, i = {};
        return t = t.toUpperCase(), i.zip = t.substring(0, 5), i.continent = t.substring(5, 7), i.country = t.substring(7, 9), i.region = t.substring(9, 11), e = t.substring(11, 15), "0000" !== e && (i.lat = (parseInt(e) / 10 - 180).toFixed(1)), a = t.substring(15, 19), "0000" !== a && (i.lon = (parseInt(a) / 10 - 180).toFixed(1)), i.dma = t.substring(19, 22), i.msa = t.substring(22, 26), i.network_type = t.substring(26, 27), i.throughput = t.substring(27, 28), i
    }

    function n(t, e) {
        var a, i;
        for (t = t.toUpperCase().split(","), a = 0; a < t.length; a++)if (i = t[a].replace(/ /g, ""), e.zip == i || e.continent == i || e.country == i || e.region == i)return 1;
        return 0
    }

    var s = a(29);
    t.exports = {decodeGeo: i, parseGeo: o, isLocatedIn: n};
    var l = window, r = l.decodeURIComponent
}, function (t) {
    t.exports = function (t) {
        var e;
        return t instanceof Error ? t.stack ? t.stack : (t.message ? e = t.message : t.description && (e = t.description), t.name ? t.name + ": " + e : e) : t + ""
    }
}, function (t) {
    t.exports = function (t) {
        for (var e = document.getElementsByTagName("script"), a = e.length - 1; a >= 0; a--)if (-1 !== e[a].src.indexOf(t))return e[a]
    }
}, function (t) {
    var e = [], a = {};
    t.exports = function (t, i) {
        var o, n = (new Date).getTime();
        if (i = i || {}, i.cacheDuration = void 0 !== i.cacheDuration ? i.cacheDuration : 3e3, !t)return!1;
        if (t.scrollCheckID) {
            if (o = t.scrollCheckID, !(n - e[o] > i.cacheDuration))return a[o];
            e[o] = n
        } else t.scrollCheckID = e.length, e[e.length] = n, o = t.scrollCheckID;
        var s = t.getBoundingClientRect(), l = {top: 0, left: 0, bottom: window.innerHeight || document.documentElement.clientHeight, right: window.innerWidth || document.documentElement.clientWidth}, r = 0, h = Math.max(s.top, l.top), c = Math.min(s.bottom, l.bottom), d = Math.max(s.left, l.left), v = Math.min(s.right, l.right), f = (s.right - s.left) * (s.bottom - s.top);
        return r = c > h && v > d ? (c - h) * (v - d) : 0, a[o] = r / f, a[o]
    }
}, function (t, e, a) {
    var i = a(1);
    t.exports = function (t) {
        var e = [];
        return i(t, function (t) {
            e.push(t)
        }), e
    }
}, function (t) {
    function e(t) {
        return"function" == typeof r.querySelectorAll ? r.querySelectorAll(t) || [] : []
    }

    function a(t) {
        var e, a = (t || {}).childNodes, i = t.textContent || t.innerText || "", o = /^\s*$/;
        if (!i) {
            if (!a)return"";
            for (e = 0; e < a.length; e++)if (t = a[e], "#text" === t.nodeName && !o.test(t.nodeValue)) {
                i = t.nodeValue;
                break
            }
        }
        return i
    }

    function i(t) {
        if ("string" == typeof t) {
            var e = t.substr(0, 1);
            "#" === e ? t = r.getElementById(t.substr(1)) : "." === e && (t = s(h, "*", t.substr(1)))
        }
        return t ? t instanceof Array || (t = [t]) : t = [], t
    }

    function o(t, e) {
        if (t = (t || {}).parentNode, !e || !t)return t;
        if (0 === e.indexOf("."))for (e = e.substr(1); t.parentNode && (t.className || "").indexOf(e) < 0;)t = t.parentNode; else if (0 === e.indexOf("#"))for (e = e.substr(1); t.parentNode && (t.id || "").indexOf(e) < 0;)t = t.parentNode;
        return t
    }

    function n(t, e, a, i, o) {
        e = e.toUpperCase();
        var n, s, r = document, c = t === h && l[e] ? l[e] : (t || h || r.body).getElementsByTagName(e), d = [];
        if (t === h && (l[e] = c), o)for (n = 0; n < c.length; n++)s = c[n], (s.className || "").indexOf(a) > -1 && d.push(s); else {
            a = a.replace(/\-/g, "\\-");
            var v = new RegExp("\\b" + a + (i ? "\\w*" : "") + "\\b");
            for (n = 0; n < c.length; n++)s = c[n], v.test(s.className) && d.push(s)
        }
        return d
    }

    function s(t, e, a) {
        t = t || document, "*" === e && (e = null);
        for (var i, o = r.getElementsByClassName ? function (t) {
            return t.getElementsByClassName(a)
        } : r.querySelectorAll ? function () {
            return r.querySelectorAll("." + a)
        } : function () {
            return[]
        }, n = o(t, a), s = e ? new RegExp("\\b" + e + "\\b", "i") : null, l = [], h = 0, c = n.length; c > h; h += 1)i = n[h], (!s || s.test(i.nodeName)) && l.push(i);
        return l
    }

    var l = {}, r = document, h = r.body;
    t.exports = {querySelectorAll: e, getElementsByClassPrefix: n, select: i, getParent: o, getText: a}
}, function (t) {
    t.exports = function (t, e) {
        t && t.trim && "function" == typeof t.trim && (t = t.trim());
        try {
            t = t.replace(/^[\s\u3000]+/, "").replace(/[\s\u3000]+$/, "")
        } catch (a) {
        }
        return t && e && (t = window.encodeURIComponent(t)), t || ""
    }
}, function (t) {
    t.exports = function (t, e) {
        var a, i = {};
        for (a = 0; a < t.length; a++)i[t[a]] = 1;
        for (a = 0; a < e.length; a++)i[e[a]] || (t.push(e[a]), i[e[a]] = 1);
        return t
    }
}, function (t) {
    var e = function () {
        try {
            var t = "addthis-test", e = window.localStorage;
            return e.setItem(t, "1"), e.removeItem(t), null != e
        } catch (a) {
            return!1
        }
    }();
    t.exports = e
}, , function (t) {
    function e(t) {
        var e, a, i, o;
        return i = t.match(/^(\w+)(?:#|.|$)/), i = i ? i[1] : "div", e = document.createElement(i), a = t.match(/#[\w][\w-]*/), a && (a = a[0].replace(/#/, ""), e.setAttribute("id", a)), o = t.match(/\.[\w][\w-]*/g), o && (o = o.join(" ").replace(/\./g, ""), e.className = o), e
    }

    var a = document;
    t.exports = function i(t) {
        var o, n, s, l, r, h, c, d, v, f;
        if (t) {
            for (o in t) {
                n = o;
                break
            }
            if (s = t[n], l = e(n), s && "object" == typeof s && "length"in s) {
                for (o in s)if ("undefined" == typeof s.hasOwnProperty || s.hasOwnProperty(o)) {
                    var g = i(s[o]);
                    l.appendChild(g)
                }
                return l
            }
            if (h = t[n], v = ["a", "b", "body", "br", "div", "em", "font", "head", "h", "p", "span", "button", "h1", "h2", "h3", "h4"], f = function (t) {
                if ("function" == typeof v.indexOf)return v.indexOf(t) > -1;
                for (var e in v)if (t === v[e])return!0;
                return!1
            }, "string" == typeof h)l.appendChild(document.createTextNode(h)); else if (h && "object" == typeof h && 1 === h.nodeType)l.appendChild(h); else for (var r in h)if (h.hasOwnProperty(r))if (c = h[r], "string" == typeof c && r.indexOf(".") < 0 && (r.indexOf("#") < 0 || 1 === r.length) && !f(r.toLowerCase()))if ("html" === r)l.appendChild(document.createTextNode(c)); else if ("style" === r && (_ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.msi && "backcompat" === a.compatMode.toLowerCase())) {
                for (var p, u, m, w = c.split(";"), D = -1; ++D < w.length;)if (p = w[D], u = p.substring(0, p.indexOf(":")), m = p.substring(p.indexOf(":") + 1, p.length), u && m)try {
                    l.style[u] = m
                } catch (F) {
                }
            } else"className" === r || "class" === r ? l.className = c : l.setAttribute(r, c); else if ("children" == r)for (var g in c)l.appendChild(i(c[g])); else {
                if ((c || {}).test === !1)continue;
                d = {}, d[r] = c, c = i(d), l.appendChild(c)
            }
            return l
        }
    }
}, function (t, e, a) {
    var i = a(64).isTop, o = a(49);
    t.exports = {loadWhiteCSS: function () {
        o ? a.e(15, function () {
            a(160)
        }) : a.e(10, function () {
            a(164)
        })
    }, loadColorCSS: function (e) {
        return t.exports.loadColorCSSForService(null, e)
    }, loadColorCSSForService: function (t, e) {
        e = 20 === parseInt(e, 10) ? 20 : 32, i(t) || (o ? a.e(3, function () {
            a(163)
        }) : 20 === e ? a.e(11, function () {
            a(161)
        }) : 32 === e && a.e(2, function () {
            a(162)
        }))
    }}
}, , , function (t, e, a) {
    var i = a(32), o = a(77);
    t.exports = function (t) {
        return void 0 !== i[t] || void 0 !== o[t]
    }
}, , , function (t, e, a) {
    t.exports = a.p + "bdefd1b2a9bd0d19c5bb01fa33d5378b.png"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t) {
    t.exports = function (t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }
}, function (t, e, a) {
    e = t.exports = a(14)(), e.push([t.id, "#at16lb{display:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1001;background-color:#000;opacity:.001}#at20mc,#at_email,#at16pib,#at16pc,#at16pi,#at_share,#at_complete,#at_success,#at_error{position:static!important}#at20mc{left:0;top:0;float:none}#at20mc a{color:#36b}#at20mc div{float:none}.at15dn{display:none}.at15a{border:0;height:0;margin:0;padding:0;width:230px}.atnt{text-align:center!important;padding:6px 0 0!important;height:24px!important}.atnt a{text-decoration:none;color:#36b}.atnt a:hover{text-decoration:underline}#at16recap,#at_msg,#at16p label,#at16nms,#at16sas,#at_share .at_item,#at16p{line-height:1em}#at16recap,#at_msg,#at16p label,#at16nms,#at16sas,#at_share .at_item,#at16p,#at15s,#at16p form input,#at16p textarea{font-family:arial,helvetica,tahoma,verdana,sans-serif!important;font-size:12px!important;outline-style:none;outline-width:0}#at16p form input,#at16p textarea{line-height:1em}* html #at15s.mmborder{position:absolute!important}#at15s.mmborder{position:fixed!important;width:250px!important}#at20mc div.at15sie6{color:#4c4c4c!important;width:256px!important}#at15s{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);float:none;line-height:1em;margin:0;overflow:visible;padding:5px;text-align:left;position:absolute}#at15s a,#at15s span{outline:0;direction:ltr;text-transform:none}.at4-icon{display:inline-block;background-repeat:no-repeat;background-position:top left;margin:0;overflow:hidden;text-indent:-9999em;cursor:pointer}.at4-icon,.addthis_16x16_style .at4-icon,.addthis_16x16_white_style .at4-icon,.addthis_default_style .at4-icon,.at-16x16{width:16px;height:16px;line-height:16px;background-size:16px!important}.addthis_32x32_style .at4-icon,.addthis_32x32_white_style .at4-icon,.at-32x32{width:32px;height:32px;line-height:32px;background-size:32px!important}.addthis_24x24_style .at4-icon,.addthis_24x24_white_style .at4-icon,.at-24x24{width:24px;height:24px;line-height:24px;background-size:24px!important}.addthis_20x20_style .at4-icon,.addthis_20x20_white_style .at4-icon,.at-20x20{width:20px;height:20px;line-height:20px;background-size:20px!important}.circular.aticon,.circular .at4-icon,.at4-icon.circular{border-radius:50%}.rounded .at4-icon,.at4-icon.rounded{border-radius:4px}.at4-icon-left{float:left}#at15s .at4-icon{background-size:16px;width:16px;height:16px;padding:0;background-position:top left;text-indent:20px;overflow:visible;white-space:nowrap;display:inline-block;line-height:16px}.at4-follow-container .at4-icon,.sortable-list-container .at4-icon,.at-follow-tbx-element .addthis_vertical_style .at4-icon{margin-right:5px}html>body #at15s{width:250px!important}#at20mc .atm.at15satmie6{width:150px!important}#at20mc .atm.at15satmie6,#at15s.atm{background:none!important;padding:0!important}#at15s.atm{width:160px!important}#at15s.atiemode2{width:252px!important}#at15s_inner{background:#fff;border:1px solid #fff;margin:0}#at15s_head{position:relative;background:#f2f2f2;padding:4px;cursor:default;border-bottom:1px solid #e5e5e5}.at15s_head_success{background:#cafd99!important;border-bottom:1px solid #a9d582!important}.at15s_head_success span,.at15s_head_success a{color:#000!important;text-decoration:none}#at15s_brand,#at16_brand,#at15sptx{position:absolute}#at15s_brand{top:4px;right:4px}.at15s_brandx{right:20px!important}a#at15sptx{top:4px;right:4px;text-decoration:none;color:#4c4c4c;font-weight:700}.at15sie6 a#at15sptx,#at15s.atiemode2 a#at15sptx{right:8px}#at15sptx:hover{text-decoration:underline}#at16_brand{top:5px;right:30px;cursor:default}#at_hover{padding:4px}#at_hover .at_item,#at_share .at_item{background:#fff!important;float:left!important;color:#4c4c4c!important}#at_hover .at_bold{font-weight:700;color:#000!important}#at16nms{padding:4px 5px;display:none}#at16sas{clear:left;padding:16px 5px}#at_hover .at_item{width:112px!important;padding:2px 3px!important;margin:1px;text-decoration:none!important}#at_hover .at_item.atiemode2{width:114px!important}#at_hover .at_item:hover,#at_hover .at_item:focus,#at_hover .at_item.athov{margin:0!important}#at_hover .at_item:hover,#at_hover .at_item:focus,#at_hover .at_item.athov,#at16ps .at_item:focus,#at_share .at_item:hover,#at_share .at_item.athov{background:#f2f2f2!important;border:1px solid #e5e5e5;color:#000!important;text-decoration:none}.ipad #at_hover .at_item:focus{background:#fff!important;border:1px solid #fff}* html #at_hover .at_item{border:1px solid #fff}* html #at_hover .at_item.athov{border:1px solid #e5e5e5!important;margin:1px!important}#at_email15{padding-top:5px}.at15e_row{height:28px}.at15e_row label,.at15e_row span{padding-left:10px!important;display:block!important;width:60px!important;float:left!important}.at15e_row input,.at15e_row textarea{display:block!important;width:150px!important;float:left!important;background:#fff!important;border:1px solid #ccc!important;color:#333!important;font-size:11px!important;font-weight:400!important;padding:0!important}#at_email label,#at_email input,#at_email textarea{font-size:11px!important}#at_email #at16meo{margin:15px 0 0 2px}#at16meo span{float:left;margin-right:5px;padding-top:4px}#at16meo a{float:left;margin:0}#at_sending{top:130px;left:110px;position:absolute;text-align:center}#at_sending img{padding:10px}.at15t{display:block!important;height:16px!important;line-height:16px!important;padding-left:20px!important;background:url(" + a(203) + ') no-repeat left;background-position:0 0;text-align:left}.at15t,.addthis_button{cursor:pointer}.addthis_toolbox a.at300b,.addthis_toolbox a.at300m{width:auto}.addthis_toolbox.addthis_vertical_style{width:140px}.addthis_toolbox.addthis_close_style .addthis_button_google_plusone{width:65px;overflow:hidden}.addthis_toolbox.addthis_close_style .addthis_button_facebook_like{width:85px;overflow:hidden}.addthis_toolbox.addthis_close_style .addthis_button_tweet{width:90px;overflow:hidden}.addthis_button_facebook_like .fb_iframe_widget{line-height:100%}.addthis_button_facebook_like iframe.fb_iframe_widget_lift{max-width:none}.addthis_toolbox span.addthis_follow_label{display:none}.addthis_toolbox.addthis_vertical_style span.addthis_follow_label{display:block}.addthis_toolbox.addthis_vertical_style a{display:block;margin-bottom:5px}.addthis_toolbox.addthis_vertical_style.addthis_32x32_style a{line-height:32px;height:32px}.addthis_toolbox.addthis_vertical_style .at300bs{margin-right:4px;float:left}.addthis_toolbox.addthis_20x20_style span{line-height:20px;*height:20px}.addthis_toolbox.addthis_32x32_style span{line-height:32px;*height:32px}.addthis_toolbox.addthis_pill_combo_style a,.addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact{float:left}.addthis_toolbox.addthis_pill_combo_style a.addthis_button_tweet{margin-top:-2px}.addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact{margin-right:4px}.addthis_default_style .addthis_separator{margin:0 5px;display:inline}div.atclear{clear:both}.addthis_default_style .addthis_separator,.addthis_default_style .at300b,.addthis_default_style .at4-icon,.addthis_default_style .at300bo,.addthis_default_style .at300m,.addthis_default_style .at300bs{float:left}.at300b img,.at300bo img{border:0}a.at300b .at4-icon,a.at300m .at4-icon{display:block}.addthis_default_style .at300b,.addthis_default_style .at300bo,.addthis_default_style .at300m{padding:0 2px}.at300b,.at300bo,.at300m,.at300bs{cursor:pointer}.addthis_button_facebook_like.at300b:hover,.addthis_button_facebook_send.at300b:hover,.addthis_button_facebook_like.at300bs:hover,.addthis_button_facebook_send.at300bs:hover{opacity:1;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100)}.addthis_20x20_style .dummy .at300bs,.addthis_20x20_style .at300bs,.addthis_20x20_style .at15t{background:url(' + a(159) + ') no-repeat left;overflow:hidden;display:block;height:20px!important;width:20px!important;line-height:20px!important}.addthis_32x32_style .dummy .at300bs,.addthis_32x32_style .at300bs,.addthis_32x32_style .at15t{overflow:hidden;display:block;height:32px!important;width:32px!important;line-height:32px!important}.at300bs{background-position:0 0}.at300bs,.at16nc{overflow:hidden;display:block;height:16px;width:16px;line-height:16px!important}.at16t{padding-left:20px!important;width:auto;cursor:pointer;text-align:left;overflow:visible!important}#at_feed{display:none;padding:10px;height:300px}#at_feed span{margin-bottom:10px;font-size:12px}#at_feed div{width:102px!important;height:26px!important;line-height:26px!important;float:left!important;margin-right:68px}#at_feed div.at_litem{margin-right:0}#at_feed a{margin:10px 0;height:17px;line-height:17px}#at_feed.atused .fbtn{background:url(//s7.addthis.com/static/r05/feed00.gif) no-repeat;float:left;width:102px;cursor:pointer;text-indent:-9000px}#at_feed .fbtn.bloglines{background-position:0 0!important;width:94px;height:20px!important;line-height:20px!important;margin-top:8px!important}#at_feed .fbtn.yahoo{background-position:0 -20px!important}#at_feed .fbtn.newsgator,.fbtn.newsgator-on{background-position:0 -37px!important}#at_feed .fbtn.technorati{background-position:0 -71px!important}#at_feed .fbtn.netvibes{background-position:0 -88px!important}#at_feed .fbtn.pageflakes{background-position:0 -141px!important}#at_feed .fbtn.feedreader{background-position:0 -172px!important}#at_feed .fbtn.newsisfree{background-position:0 -207px!important}#at_feed .fbtn.google{background-position:0 -54px!important;width:104px}#at_feed .fbtn.winlive{background-position:0 -105px!important;width:100px;height:19px!important;line-height:19px;margin-top:9px!important}#at_feed .fbtn.mymsn{background-position:0 -158px;width:71px;height:14px!important;line-height:14px!important;margin-top:12px!important}#at_feed .fbtn.aol{background-position:0 -189px;width:92px;height:18px!important;line-height:18px!important}.addthis_default_style .at15t_expanded,.addthis_default_style .at15t_compact{margin-right:4px}#at16clb{font-size:16pt;font-family:"verdana bold",verdana,arial,sans-serif}#at_share .at_item{width:123px!important;padding:4px;margin-right:2px;border:1px solid #fff}#at16pm{background:#fff;width:298px;height:380px;text-align:left;border-right:1px solid #ccc;position:static}#at16pcc,#at16pccImg{position:fixed;top:0;left:0;width:100%;margin:0 auto;font-size:10px!important;color:#4c4c4c;padding:0;z-index:10000001;overflow:visible}#at16pccImg{height:100%}* html #at16pcc,#at16abifc{position:absolute}#at16abifc{overflow:hidden;margin:0;top:10px;left:10px;height:355px;width:492px;border:0}#at16abifc iframe{border:0;position:absolute;height:380px;width:516px;top:-10px;left:-10px}* html div#at16abifc.atiemode2{height:374px;width:482px}* html #at16abifc iframe{height:368px;left:-10px;top:-10px;overflow:hidden}#at16p{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);z-index:10000001;width:300px;padding:10px;margin:-185px auto 0 -155px}#at16p,#atie6ifh,#atie6cmifh{position:absolute;top:50%;left:50%;color:#5e5e5e}#atie6ifh,#atie6cmifh{font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:12px}#atie6ifh{width:322px;padding:0;height:381px;margin:-185px auto 0 -165px;z-index:100001}#atie6cmifh{width:240px;height:225px;z-index:100001}#atie6cmifh,#at_share{margin:0;padding:0}#at16ps{overflow-y:scroll;height:304px;padding:5px}a#at16pit{position:absolute;top:37px;right:10px;display:block;background:url(data:image/gif;base64,R0lGODlhEAAUAKIFAKqqquHh4cLCwszMzP///////wAAAAAAACH5BAEAAAUALAAAAAAQABQAAAMtOLqsAqWQSSsN0OoLthfeNoTaSFbmOaUqe7okHMoeLaqUXeITiGM/SGM4eEQSADs=) no-repeat;width:16px;height:20px;line-height:19px;margin-right:-17px;text-align:center;overflow:hidden;color:#36b}#at16pi{background:#e5e5e5;text-align:left;border:1px solid #ccc;border-bottom:0}#at16pi a{text-decoration:none;color:#36b}#at16p #at16abc{margin-left:2px!important}#at16pi a:hover{text-decoration:underline}#at16pt{position:relative;background:#f2f2f2;height:13px;padding:5px 10px}#at16pt h4,#at16pt a{font-weight:700}#at16pt h4{display:inline;margin:0;padding:0;font-size:12px;color:#4c4c4c;cursor:default}#at16pt a{position:absolute;top:5px;right:10px;color:#4c4c4c;text-decoration:none;padding:2px}#at15sptx:focus,#at16pt a:focus{outline:dotted thin}#at16pc form{margin:0}#at16pc form label{display:block;font-size:11px;font-weight:700;padding-bottom:4px;float:none;text-align:left}#at16pc form label span{font-weight:400;color:#4c4c4c;display:inline}#at_email form .abif{width:272px!important}#at_email textarea{height:55px!important;word-wrap:break-word}* html #at_email textarea{height:42px!important}*:first-child+html #at_email textarea{height:42px!important}#at_email label{width:220px}#at_email input,#at_email textarea{background:#fff;border:1px solid #bbb;width:272px!important;margin:0 0 8px;font-weight:400;padding:3px!important;font-family:arial,helvetica,tahoma,verdana,sans-serif;line-height:1.4em;color:#333}#at_email form .atfxmode2{width:279px!important}#at16pc form .at_ent{color:#333!important}#at16pc textarea{height:48px}#at16pc form input:focus,#at16pc textarea:focus{background:#fffff0;color:#333}#at16p .atbtn,#at16recap .atbtn{background:#fff;border:1px solid #b5b5b5;width:60px!important;padding:2px 4px;margin:0;margin-right:2px!important;font-size:11px!important;font-weight:700;color:#333;cursor:pointer}#at16p .atbtn:hover,#at16p .atbtn:focus,#at16recap .atbtn:hover,#at16recap .atbtn:focus{border-color:#444;color:#06c}#at16p .atrse,#at16recap .atrse{font-weight:400!important;color:#666;margin-left:2px!important}#atsb .atbtn{width:78px!important;margin:0!important}#at_email #ateml{text-align:right;font-size:10px;color:#999}#at16pc{height:343px!important;font-size:11px;text-align:left;color:#4c4c4c}#at_email{padding:5px 10px}#at16pc .tmsg{padding:4px 2px;text-align:right}#at16psf{position:relative;background:#f2f2f2 url(data:image/gif;base64,R0lGODlhGQEVAMQYAGZmZuDg4Ozs7MjIyMzMzPj4+LOzs3BwcMbGxsvLy5+fn/X19djY2IODg+bm5paWlnl5eeLi4oyMjKmpqdXV1dvb28/Pz////////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABgALAAAAAAZARUAAAX/ICaOGJFYaKqubOu+cCzPdG3feK7vPJwQpOBoEChcjsikcslsOp/QqHRKrVqv2Kx2Gy0EBkKRgMEtm8/otHrNTjMEQYGjTa/b7/h82gEfVfSAgYKDhGcVQ0sLBhAAEAYLhZGSk5RqYBgBSgsNAA0GnA2QlaOkpaZHASVGSQYACEgIABOntLW2eAUmSxASShIHt8HCw1snSwAGSq3EzM3OSyhLBw9KD8DP2Nm30UoKrrAACtrj5KMWCYmcCgbeAAcR5fHygT+rSQvtAA8A7vDz/wDV5MIUJVa/gAgTZkmFYYAUg70USpz45BKGPwUPiKPIseOhEXI6ihzphE8cMiRTMI58E6ZhEZUwEXqx2LIEAwsUKujcybOnz59AgwodSrSo0aNIkypdyrSpU58ofoQJAQA7) no-repeat center center;border-bottom:1px solid #ccc;height:20px;padding:4px 10px;text-align:center}* html #at16psf input,*:first-child+html #at16psf input{padding:0}#at16psf input,#at16psf input:focus{background:#fff;border:none;width:220px;margin:2px 0 0;color:#666;outline-style:none;outline-width:0;padding:2px 0 0;line-height:12px;font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:12px}#at16pcc .at_error,#at16recap .at_error{background:#f26d7d;border-bottom:1px solid #df5666;padding:5px 10px;color:#fff}#at16pcc #at_success{background:#d0fbda;border-bottom:1px solid #a8e7b7;padding:5px 10px;color:#4c4c4c}#at15pf,#at16pf{position:relative;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;-o-box-sizing:content-box;background:#f2f2f2;height:12px;border-top:1px solid #e5e5e5}.ipad #at15pf{padding-top:4px;background:#fff}#at15pf a,#at16pf a,#at15pf span,#at16pf span{position:absolute;outline:none;padding:0;margin:0;overflow:hidden;font-size:10px;color:#4c4c4c;font-family:Arial,Helvetica,Sans-Serif;text-decoration:none}#at15pf a:hover,#at15pf a:focus,#at16pf a:hover,#at16pf a:focus{text-decoration:underline}#at15pf a.at-settings,#at16pf a.at-settings{left:75px;width:65px}#at15pf a.at-settingsclose,#at16pf a.at-settingsclose,#at15pf a.at-whatsthis{left:8px}#at16pf a.at-whatsthis{left:10px}#at16pf a#at-privacy,#at16pf a.at-privacy,#at16pf a.at-privacy-close{width:39px;left:140px}#at_complete{font-size:13pt;color:#47731d;text-align:center;padding-top:130px;height:208px!important;width:472px}#at_s_msg{margin-bottom:10px}.atabout{left:55px}.ac-about{right:20px}#at20mc a.ac-logo:hover{text-decoration:none!important}#at15pf .ac-logo,#at16pf .ac-logo{background:url(data:image/gif;base64,R0lGODlhDAAMAMQAAAOqygqszBGvzROwzRqyzx2z0Cm30S240zK71EG/10bB2E7E21XF217J3mfM3mjN33PQ4nrT5YzZ5pvd6aLf66Pg7Lno8MHr8c7v9NXx9uL1+ez4+/T7/f7+/wAAAAAAACH5BAkAAB4ALAAAAAAMAAwAAAVCoCeO5GgUU0kCxnBYqhdc2zMkWTl7koUEjs1o1oFwPJQCYXjhHISeBYC5GWgkAtQQ4wEQBEZSoFFRMDSqASASa5dCADs=) no-repeat left;padding-left:10px;top:0;right:2px}.ipad #at15pf .ac-logo{top:3px}#at15pf a.at-logo,#at16pf a.at-logo{background:url(data:image/gif;base64,R0lGODlhBwAHAJEAAP9uQf///wAAAAAAACH5BAkKAAIALAAAAAAHAAcAAAILFH6Ge8EBH2MKiQIAOw==) no-repeat left 2px;padding-left:10px;right:10px;float:left}.at_baa{display:block;overflow:hidden;outline:none}#at15s #at16pf a{top:1px}#at16pc form #at_send{width:80px!important}#at16pp{color:#4c4c4c;position:absolute;top:12px;right:12px;font-size:11px}#at16pp label{font-size:11px!important}#at16ppc{padding:10px;width:179px}#at16pph{padding:5px 0 10px}#at16pph select{margin:5px 0 8px}#at16pp .atinp{width:156px}#at16ppb{background:#fff;border:1px solid #ccc;height:274px}#at16ep{height:16px;padding:8px}#at16ep a{display:block;height:16px;line-height:16px;padding-left:22px;margin-bottom:8px;font-size:12px}#at16ep a.at_gmail{background:url(data:image/gif;base64,R0lGODlhEAAQALMPAPKqo95TU+NkY/TCwP74+PbX1/zo59wtJ/nx7uZ7fvnRzfCTgvq2td9DQf///////yH5BAEAAA8ALAAAAAAQABAAAARi8MlJq700hMS6/4vWNIdQOERKOMgyvqSgOLRjJAe8CUcw0ApeYyF4DQpCwCDQGyCKo59BGDtNjbRBIvazQRtSxgCwGDAMrO/AcK7ZztcRoO1+B43oOs0Qb8w/gAxFGISFFREAOw==) no-repeat left}#at16ep a.at_hotmail{background:url(data:image/gif;base64,R0lGODlhEAAQAMQfAP7XFG7B4/zjl/JZIAm7TK7V7v3FY/aLRGDNhOqmkA2ql/2YJvfr2Pn7++9vWtXe6/jQvOfw9funZg2EzEWv3zil0heg0zDCbESHx9PpxY6TvJ3QpPJtQf7+/v///////yH5BAEAAB8ALAAAAAAQABAAAAWO4CeOpNhAUFeuzDEMiRepK/S+XDBVjzd6kAWHc3tMjpVZhyE8cByvDsViOQYehsPCSeR8IpQpFZMwGCQHl/dToAQoionGLEHDRJ5CoHJRkM92ED8FCgQEGHNoDgsCJB4XhgpzZwsAjSQZFxcIGgCengwlHRsIpQKfAg0rHQiGEacGqisfDZsdtzSzHz4rIQA7) no-repeat left}#at16ep a.at_yahoo{background:url(data:image/gif;base64,R0lGODlhEAAQAKIHAPylpevx8bsICNJfX/jQ0Kahof8AAP///yH5BAEAAAcALAAAAAAQABAAAANJeLrc/jAuAmolcQhjhBiBBRDDAChAVxzE5g3csKRGQQpFqDL0fsCCQCOFUwR8vI7wECgtjQDg6CfA8DxYmWbVCHi/TK9kTC4zEgA7) no-repeat left}#at16ppf p#atsb{padding-top:20px;font-size:10px}#at16abr{margin-top:10px}#at16abr input{padding:0;margin:0 5px 0 0}#at16ppso{display:none;text-align:right;margin-top:2px}#at16ppa{background:#fff;border:1px solid #ccc;height:228px;width:178px;overflow:auto}#at16ppa a{display:block;white-space:nowrap;padding:4px 8px;font-size:12px!important}#at16eatdr{position:absolute;background:#fff;border-top:0;max-height:110px;overflow:auto;z-index:500;top:129px;left:21px;width:277px}* html #at_email #at16eatdr{top:115px!important;width:272px!important}*:first-child+html #at_email #at16eatdr{top:115px!important;width:272px!important}#at16eatdr a{display:block;overflow:hidden;border-bottom:1px dotted #eee;padding:4px 8px}#at16eatdr a:hover,#at16eatdr a.hover{background:#e0eefa;text-decoration:none;color:#333}#at_pspromo{height:130px;padding-top:10px}#at_pspromo,#at15psp{width:205px;padding-left:5px}#at_testpromo{font-size:12px;width:220px;display:none}.atm-i #at_pspromo{height:150px}.atm-i #at_testpromo,.atm-i #at_pspromo{width:140px}#at_testpromo input{width:200px}#at_promo .at-promo-content,#at_testpromo .at-promo-content{margin-top:12px}#at_promo .at-promo-btn,#at_testpromo .at-promo-btn{padding-top:10px}#at_promo h4{font-size:14px}#at_promo h4,#at_testpromo h4{font-family:arial,helvetica,tahoma,verdana,sans-serif;background:0;font-weight:700;margin:0 0 4px;padding:0;line-height:18px;height:36px}.atm-i #at_promo h4,.atm-i #at_testpromo h4{height:66px}#at_testpromo h4{font-size:13.5px}#at_promo h4 sup{font-size:11px;color:#ee6a44}#at_promo span{display:block}#_atssh{width:1px!important;height:1px!important;border:0!important}.at-promo-single{padding:2px 10px 10px;line-height:1.5em}.at-promo-single img{padding:3px}.at-promo-content img{margin-right:5px;margin-bottom:20px;float:left}#at20mc.ipad #at15s{background-color:#fff!important;background-image:none!important;border:1px solid #b7b7b7;padding:6px!important;-moz-border-radius:12px;-webkit-border-radius:12px;-moz-box-shadow:0 0 10px #000;-webkit-box-shadow:0 0 10px #000}#at20mc.ipad #at15s,html>body #at20mc.ipad #at15s{width:244px!important}#at20mc.ipad #at15s .at_item{padding:10px 15px!important;line-height:32px!important}#at20mc.ipad #at15pfpro,#at20mc.ipad #at15s_head{display:none!important}#at20mc.ipad #at_hover{padding:0 0 4px}#at20mc.ipad #at_hover .at_item{width:210px!important;font-size:18px;border-bottom:0;margin-bottom:0}#at20mc.ipad #at_hover .at_item:hover{background:#2095f0!important;text-decoration:none;color:#fff!important}#at20mc.ipad #at_hover .at15t{background-color:transparent!important;height:32px!important;width:200px!important;line-height:32px!important;padding-left:42px!important;padding-top:0!important}#at20mc.ipad #at16pf{background:#fff!important;border-top:none;line-height:12px}.addthis_textshare{display:block;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABKCAYAAAAYJRJMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABmNJREFUeNrsmk9oI3UUx99vZjL5n7TbukLbxYve1INa8KAi6F48ubAHV2+KWCoqyF4WpZZ6cuthq1gKe1oU9+CCoLjg+uciCEWQPSjuReyy7Vq7W7LNJM0kM5nxvV9+U5JNk/xCm8wmMw8ek06TXyafee/93u83XwY1Y+jKwsLCiUwm87Gqqg8oigJBMsdxoFqtXs/n86fn5ua+plPoLhNw1NnZ2ZPZbPai67pgWRbQMUjGGINIJMKPOzs7p5aXly/h6apGkYMexZOLSA/K5TKYpgm2bQcKkKZpEIvFIBqNUnAs4qlv0U0CpKInt7a2pjC1+JuDBoeMsobcMAxKtSliQqcJEHmSIofCK8hGgMhEeSFABS+CopVKJfCAPBOAosRG82awEFATIKrNTPOKuAyg54/p8O6Lz0AylgKnVAEo4WxXruKIdW9SGBSNPCz9+jv8uFUdZEAchgcIZAC98+wjMK644Nz8B9x8GcCogFvarQHC6g9ModEhHk/CWw/eD5fX1wYZEDQAkinSCasCzvYdcAwsZgWLR6H78ttgRxDOd1+AbuTAxZnQrZiQsC0+5tAAkomgqmGCi/0C5EuYk5heWMKSj06DFU9B8fKXwBAgRHRe2qr4JTTm0ADyprj2gMocgJPIQnUkhhmlAMPBGEaLmRkDB18r2LJHSwb/kkEF1NBAdgPIMTFqbBOiL7wCypPP1apYMg0RPIzNvs+hFK6uAlz8hC9kZMYcKkBAk1KEpjwTtGKeF3oWT2ApUkEvl8Ct2qBZou5gLQoeIPzRDAty5colqHz/FQeTPHMObKxBhU8/AH17k69pIJ3ka+GhAoTrj84ppqje3gC6eD8WZBfP8887uIajFXEGZzXLkRpzYADRfkjHANIwv1yH9gZ49FDfY63+DI4eraVWIopwYgAp/NtmUmMODCAZy+EqfyyVxS66KKhWofLN55yXnsK0ymI9SscgMn4Ecuvrw7EN0s2b3/tpFT48/hSMJBKw1ypo0VrhjmtYn3SEpUJ+YxPOXPhhODbS0DPox9D/CJepDfYw+g0l5NDeQkAhoMMBRCV3LcSxZ2uCCQfkikXEEnopZMMZLAkmLrXGfE8anR5lUPNyH/rRgML5E/08+m/oW+iGJsBQ53dL/OM6ekr0SL3YpGYicl9Cf6zLz/6LfgH9NjRu9B54C0hwKAgwtwQT27tYiqARET1j6Gl0vUeAFDE2PVZ5Df0Jyc/dRD8nLr7spcAhAqLNKwN9W3zHHfoeVndH6aIT4sJjPYwgSum4uBGUyrPo0xJwzorovi3utNWDCDJF5OwKYA6jTS5W22tl4uK9Z2W9agEUcQOOoE+gT6K/2QYSwfkI/W/x+pb4AdVDTjNHjGl7Y5OxfosUxM2IiDpHETTVBlI9nBvo/6Hv0N3F6+7LVkHfG0W3dkesuoJIM+cG+mdikmgFZ7PfcPgN9Uvm0iKSJkQkTYqaUw8n3284vgJqAYkAjYsamBNR5BucrveDepFuyMhLNxDF0RCpnxdTrm9wfI+gfSIpJloAJnqdkp9w7hlAdZAUkV7etOv4CQfqGkF+cSsrKyfS6TQXcQZNCkOBQiJOwzBOz8zMNIs45+fnT46OjnIRJ0nwgijipGd6dMzlcqeQR6OIs1gsLpZKJf48nVQZw/BMq6v1j6pyAaeu6/S4qlnEub29PeVpo4MGxzNPbIGAmkWcGEEQNPF4y0VZ7YFno4iTtNEhoAZAjSLOEFAToEYRJxXoToCePurCG8cfh2QsCc4uNsDm/iLO3YIB569eg192tEEG1CjipAjq1Pu8Pv0QjDEHnI32Is5YPAmvTqTgymZuYHuiprUYRVAnQHHLlBdx4oxAYwYKkE0iTlVOxGm7MFyAZFLMIRGnJifipFSjMYcGkIym2SFlvSYr4hxcQPvuB8kA4utqJifipFo0qELyfQFJaZoVrSsR51DppGV+jOP1SZIizqECFIo4OwCSsVDE2cFCEWdo9RaKOGUsBBQCOhxAoYiz0dYgFHG2tFDE2cZCEWerdTiEIs6OgEIRp0QENYs468I+FHHeJeIEIV7wY3lzYBGn+EE9N9Wn2cK7W5Y4ErRrAtRkCzh7Urx+wfETUCtIf9UBOus3HOhRET5IurUVcfYbTtf7QT2wes00QBsRpx9w7oUIujuS9hVx+gWHX1jQpHbd2v8CDAAwldUwLVojIgAAAABJRU5ErkJggg==) no-repeat 0 0;width:44px;height:37px;line-height:28px;padding:0 0 0 28px;margin:0;text-decoration:none;font-family:helvetica,arial,sans-serif;font-size:12px;color:#fff;cursor:pointer}.addthis_textshare:hover{background-position:0 -37px;text-decoration:none}.at_img_share{position:absolute;opacity:0;background:url(data:image/gif;base64,R0lGODlhFwAVAMQAAP7+/vLy8vv7+/X19fj4+Pz8/PHx8f39/fDw8O/v7/T09Pn5+fPz8/r6+vb29vf394CAgHZ2dm5ubklJSWRkZFtbW39/f4KCglJSUnt7e3h4eAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAXABUAAAWLICCOZGmeaAocbOu+MFvMdG3fs6DvfO//PY0QqGsYj8iMEslsLJ7QqGUarS4I2Kz2wtV6vwSIeEyGfB/odGTNbkfSaYd8Lqnb75L5fMDv+ymAfoKDghWGhH0KiouMGI6MkAoMk5SVE5eVmQwBnJ2en6ChoqMBBqanqKmqpgitrq+wsa0JtLW2t7i0IQA7) repeat-x bottom;border:1px solid #ccc;width:23px;height:21px;line-height:21px;text-indent:-9999px;padding:0;margin:0;cursor:pointer;z-index:1000}.at_img_share:hover{border-color:#8b8b8b}.at_img_share .addthis_toolbox{width:180px;margin:0 auto}.atm{width:160px!important;margin:0;line-height:12px;letter-spacing:normal;font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:12px;color:#444;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);padding:4px}.atm-i{background:#fff;border:1px solid #d5d6d6;padding:0;margin:0;-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.15);-moz-box-shadow:1px 1px 5px rgba(0,0,0,.15);box-shadow:1px 1px 5px rgba(0,0,0,.15)}.atm-s{margin:0!important;padding:0!important}.atm-s a:focus{border:transparent;outline:0;-webkit-transition:none;-moz-transition:none;transition:none}.atm-s a,#at_hover.atm-s a{display:block;text-decoration:none;padding:4px 10px;color:#235dab!important;font-weight:400;font-style:normal;-webkit-transition:none;-moz-transition:none;-ms-transition:none;-o-transition:none;transition:none}#at_hover.atm-s .at_bold{color:#235dab!important}.atm-s a:hover,#at_hover.atm-s a:hover{background:#2095f0;text-decoration:none;color:#fff!important}#at_hover.atm-s .at_bold{font-weight:700}#at_hover.atm-s a:hover .at_bold{color:#fff!important}.atm-s a span{padding-left:20px;direction:ltr}.atm-i #at15pf.atm-f-iemode2,.atm-i #at16pf.atm-f-iemode2{height:24px!important}.atm-i #atic_settings{padding-top:6px!important}.atm-i #atic_settings,.atm-f,#at15pf .atm-f{border:none!important;border-top:1px solid #d5d6d6!important;top:4px}.atm-f,#at15pf .atm-f{position:relative;background:none!important;padding:5px 10px;font-size:9px}.atm-f a{margin-right:4px;text-decoration:none!important;color:#939292!important;top:4px!important;font-weight:400;font-style:normal}.atm-f a:hover{color:#4f4f4f!important}.atm-f .atm-f-logo{position:absolute;top:5px;right:6px;background:url(data:image/gif;base64,R0lGODlhBwAHAJEAAP9uQf///wAAAAAAACH5BAkKAAIALAAAAAAHAAcAAAILFH6Ge8EBH2MKiQIAOw==) no-repeat left;padding-left:10px}.at_a11y{position:absolute!important;top:auto!important;width:1px!important;height:1px!important;overflow:hidden!important}.at_a11y_container{margin:0;padding:0}.addthis_overlay_container{position:absolute}.addthis_overlay_toolbox{-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-topright:10px;border-top-left-radius:10px;border-top-right-radius:10px;padding:5px;background-color:#000;background-color:rgba(0,0,0,.6)}.linkServiceDiv{height:200px;width:400px;border:1px solid #000;background-color:#aaa}.at_redloading{background:url(data:image/gif;base64,R0lGODlhCgAKAJEDAMzMzP9mZv8AAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACgAKAAACF5wncgaAGgJzJ647cWua4sOBFEd62VEAACH5BAUAAAMALAEAAAAIAAMAAAIKnBM2IoMDAFMQFAAh+QQFAAADACwAAAAABgAGAAACDJwHMBGofKIRItJYAAAh+QQFAAADACwAAAEAAwAIAAACChxgOBPBvpYQYxYAIfkEBQAAAwAsAAAEAAYABgAAAgoEhmPJHOGgEGwWACH5BAUAAAMALAEABwAIAAMAAAIKBIYjYhOhRHqpAAAh+QQFAAADACwEAAQABgAGAAACDJwncqi7EQYAA0p6CgAh+QQJAAADACwHAAEAAwAIAAACCpRmoxoxvQAYchQAOw==);height:16px;width:16px;background-repeat:no-repeat;margin:0 auto}.at-promo-single-dl-ch{width:120px;height:37px}.at-promo-single-dl-ff{width:120px;height:44px}.at-promo-single-dl-saf{width:120px;height:48px}.at-promo-single-dl-ie{width:129px;height:51px}.atPinBox{position:fixed;top:25%;left:35%;background:#fff;width:482px;margin:0 auto;overflow:auto;overflow-x:hidden;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;padding:8px;font-family:arial,helvetica,tahoma,verdana,sans-serif;font-size:12px;color:#cfcaca;z-index:10000001}.atPinHdr{font-size:16px}.atPinHdr,.atPinWinHdr{display:block;background:#f1f1f1;border-bottom:1px solid #ccc;box-shadow:0 0 3px rgba(0,0,0,.1);-webkit-box-shadow:0 0 3px rgba(0,0,0,.1);-moz-box-shadow:0 0 3px rgba(0,0,0,.1);padding:8px 10px;line-height:16px;color:#8c7e7e}.atPinHdr img,.atPinWinHdr img{vertical-align:bottom;margin-left:5px;cursor:pointer}.atPinHdr span{vertical-align:top}.atPinHdr{height:16px}.atPinMn{background:#fff;padding:10px;height:296px;overflow:auto;overflow-x:hidden;text-align:center;position:relative}.atPinHdrMsg{left:20px}.atPinClose{width:12px;text-align:right;font-weight:700;position:absolute;right:15px;cursor:pointer}.atImgSpanOuter{position:relative;overflow:hidden;height:200px;width:200px;border:1px solid #a0a0a0;float:left;display:block;margin:10px;background-color:#fff}.atImgSpanInner img{cursor:pointer}.atImgSpanSize{position:absolute;bottom:0;left:0;right:0;display:block;background:#fff;height:22px;line-height:24px;color:#000;overflow:hidden;font-size:10px;zoom:1;filter:alpha(opacity=70);opacity:.7}.atImgActBtn{display:none;width:32px;height:32px;position:absolute;top:75px;left:80px;background-color:#fff}.atPinWin{font-family:arial,helvetica,tahoma,verdana,sans-serif;text-align:center}.atPinWinHdr{display:block;font-size:20px;height:20px;width:100%;position:fixed;z-index:1}.atPinWinMn{text-align:center;padding:40px 0 0;display:inline-block}.atImgMsg,.atImgIco{float:left}.atImgIco{margin-right:5px}.atNoImg{display:block;margin-top:40px;font-size:16px;line-height:16px;color:#8c7e7e}.at_PinItButton{display:block;width:40px;height:20px;padding:0;margin:0;background-image:url(//s7.addthis.com/static/t00/pinit00.png);background-repeat:no-repeat}.at_PinItButton:hover{background-position:0 -20px}.addthis_toolbox .addthis_button_pinterest_pinit{position:relative}.at-share-tbx-element .fb_iframe_widget span{vertical-align:baseline!important}.at3PinWinMn{text-align:center;padding:20px 0 0 20px;overflow:auto;height:437px}.at3ImgSpanOuter{position:relative;width:185px;height:185px;border:1px solid #dedede;margin:0 10px 10px 0;overflow:hidden;float:left}.at3ImgSpanOuter:hover{border-color:#3dadfc;box-shadow:0 0 3px #3dadfc;cursor:pointer}.at3ImgSpanOuter .atImgLB{display:block;position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;background-color:rgba(0,0,0,.8);background-repeat:no-repeat;background-position:center center}#at3lb{position:fixed;top:0;right:0;left:0;bottom:0;z-index:16777270;display:none}.at3lblight{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpizCuu/sRABGBiIBKMKqSOQoAAAwC8KgJipENhxwAAAABJRU5ErkJggg==);background:rgba(110,115,123,.65)}.at3lbdark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBg2M9ABGBiIBKMKqSOQoAAAwBAlwDTJEe1aAAAAABJRU5ErkJggg==);background:rgba(0,0,0,.5)}.at3lbnone{background:rgba(255,255,255,0)}#at3win{position:fixed;_position:absolute;top:15%;left:50%;margin-left:-320px;background:#fff;border:1px solid #d2d2d1;width:640px;-webkit-box-shadow:0 0 8px 4px rgba(0,0,0,.25);-moz-box-shadow:0 0 8px 4px rgba(0,0,0,.25);box-shadow:0 0 8px 4px rgba(0,0,0,.25);font-family:"helvetica neue",helvetica,arial,sans-serif;z-index:16777271;display:none;overflow:hidden}#at3win #at3winheader{position:relative;border-bottom:1px solid #d2d2d1;background:#f1f1f1;height:49px;cursor:default}#at3win #at3winheader p{position:absolute;top:16px;left:100px;width:475px;padding:0;margin:0;font-size:14px;line-height:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#at3win #at3winheader h3{height:49px;text-align:left;line-height:49px;margin:0 50px 0 22px;border:0;padding:0 20px;font-size:16px;font-family:"helvetica neue",helvetica,arial,sans-serif;font-weight:700;text-shadow:0 1px #fff;color:#333;direction:ltr}#at3win #at3winheader h3.logoaddthis{padding-left:22px}#at3win #at3winheader .at3winheadersvc{display:inline-block;position:absolute;top:15px;left:20px;cursor:default!important;opacity:1!important}#at3win #at3winheader #at3winheaderclose{display:block;position:absolute;top:0;right:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwNzc2QTQ5Qjk1RDExRTFCMkE4OEUxNTUwRjMwREY0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNzc2QTQ4Qjk1RDExRTFCMkE4OEUxNTUwRjMwREY0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzMgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InV1aWQ6OEE1QUU0REMzMEU4REYxMUJCNzJGQkJCQzlBM0Y1RkMiIHN0UmVmOmRvY3VtZW50SUQ9InV1aWQ6M0M5RkJGRTEyQUU4REYxMUJCNzJGQkJCQzlBM0Y1RkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz78RHhFAAAApUlEQVR42rxTiQnAIAxU6QAdxRW6iZ1EnKRu4gqO0g1sCilEvT7Q0kBQ9O4wl6hLKepNGPUyhmMTQhhpSZTZez8jMGEWWizlRJi1fUHiS8dARHaMSaiELPaViCB3WC1NBMB4CMozWaJuuwBE1BkZdoEB8Qn5kzaaC7fbgN0xN+TYlNOJmCvyXjPwpBKRL7BnhgERiwQmHhDothDJjMVz8Ptv3AQYAJWjVVdnlDZCAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-position:center center;border-left:1px solid #d2d2d1;width:49px;height:49px;line-height:49px;overflow:hidden;text-indent:-9999px;text-shadow:none;cursor:pointer}#at3win #at3winheader #at3winheaderclose:hover{background-color:#dedede}#at3win #at3wincontent{height:440px;position:relative}#at3winshare,#at3wincopy,#at3winemail{height:440px}#ate-promo .addthis_button_twitter .aticon-twitter{background-position:0 -64px!important}#at3wincontent,#at20mc{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;-o-box-sizing:content-box;box-sizing:content-box}#at3win #at3wincontent.at3nowin{position:relative;height:400px;padding:20px;overflow:auto}#at3winfooter{position:relative;background:#fff;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;-o-box-sizing:content-box;box-sizing:content-box;border-top:1px solid #d2d2d1;height:11px;_height:20px;line-height:11px;padding:5px 20px;font-size:11px;color:#666}#at3winfooter a{margin-right:10px;text-decoration:none;color:#666;float:left}#at3winfooter a:hover{text-decoration:none;color:#000}#at3logo{background:url(//s7.addthis.com/static/t00/at3logo-sm.gif) no-repeat left center!important;padding-left:10px}#at3privacy{position:absolute;top:5px;right:10px;background:url(//s7.addthis.com/static/t00/at3-privacy.gif) no-repeat right center!important;padding-right:14px}#at3winfilter{background:#f1f1f1;border-top:1px solid #fff;border-bottom:1px solid #d2d2d1;padding:13px 0;text-align:center}#at3winsvc-filter{background-repeat:no-repeat;background-position:right;background-image:url(data:image/gif;base64,R0lGODlhHgAUALMAAJiYmHV1deTk5Kmpqbe3t9nZ2Y2Njfn5+fT09Ozs7MnJyYGBgWpqav39/WZmZv///yH5BAAAAAAALAAAAAAeABQAAASi8MlXxgoLqDa7/xICOGTpLAKoTshCMsZgBG+6gqNjJA93DAxH4HDzCEgGTqdBIBGKnSYjoewcXAvoZJRVDUhErcEBWClIPC1X1fg6ENrHl4GoThquQJxCKn+kA3sPY2QHSkwMQQJ2Nw0INEIABBYmATZxCQtBJpyWgg0KBkEMCwQKm0KXgoYTBaiegh8NriUBabFLtH24Hg2zm368HgULKDcRADs=);border:1px solid #d2d2d1;padding:15px 38px 15px 12px;margin:0 auto;width:374px;text-align:left;font-size:18px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);color:#666}#service-filter:hover{border-color:#9c9c9c}#service-filter:focus{border-color:#3dadfc;box-shadow:0 0 4px rgba(61,173,252,.8);-webkit-box-shadow:0 0 4px rgba(61,173,252,.8);-moz-box-shadow:0 0 4px rgba(61,173,252,.8);outline:none}#at3wintoolbox{margin:0 0 0 20px;height:340px;overflow:auto;padding:10px 0}#at3wintoolbox a{display:block;float:left;width:180px;padding:4px;margin-bottom:10px;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;font-size:16px;color:#235dab}#at3wintoolbox a:hover,#at3wintoolbox a:focus{background-color:#2095f0;text-decoration:none;color:#fff;font-weight:400;text-shadow:none;opacity:1;filter:alpha(opacity=100);cursor:pointer}#at3wintoolbox span:hover{text-decoration:none;color:#fff;font-weight:400;text-shadow:none;opacity:1;filter:alpha(opacity=100);cursor:pointer}#at3wintoolbox span{display:block;height:32px;line-height:32px;padding-left:38px!important;width:auto!important}.service-icon{padding:4px 8px}.service-icon:hover{background:#2095f0;color:#fff}.service-icon span{padding-left:20px}#at3winssi{position:absolute;right:50px;top:0;height:50px;display:block}.at-quickshare-header-peep{position:absolute;top:0;right:34px;height:16px;padding:6px;border-left:1px solid #dedede;cursor:pointer}.at-quickshare-header-peep.peep-active{background:#dedede;cursor:default}.at-quickshare-header-peep span{display:inline-block;background:url(data:image/gif;base64,R0lGODlhBwAEAIABALm5uf///yH5BAEAAAEALAAAAAAHAAQAAAIIhA+BGWoNWSgAOw==) no-repeat right;padding-right:11px}.at-quickshare-header-peep span img{display:block;background:#ccc;width:16px;height:16px;line-height:20px;overflow:hidden;text-indent:-9999px;border:1px solid #bbb;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px}.at-quickshare-header-peep ul{position:absolute;top:25px;left:-75px;width:140px;background:#fff;border:1px solid #bbb;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(102,102,102,.8);margin:0;padding:0;font-weight:400;z-index:1100}.at-quickshare-header-peep ul li{list-style:none;font-size:12px;padding:0;margin:0;text-align:left}.at-quickshare-menu{outline:none}.at-quickshare-menu li.at-quickshare-menu-sep{border-bottom:1px solid #dedede}.at-quickshare-header-peep ul li a{display:block;padding:5px 10px;text-decoration:none;color:#666}.at-quickshare-header-peep ul li a:hover{background:#0d98fb;text-decoration:none;color:#fff}#at_auth{position:relative;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;-o-box-sizing:content-box;border-top:1px solid #d5d6d6!important;padding:10px 10px 7px;line-height:16px;height:16px}#atic_signin{text-decoration:none;cursor:pointer}#atic_signin:hover{text-decoration:none}#atic_signin #at_auth:hover{background:#2095f0;text-decoration:none;color:#fff!important}#atic_usersettings{cursor:pointer}#atic_usersettings:hover{text-decoration:underline}#atic_usersignout{font-size:11px;position:absolute;top:10px;right:10px;cursor:pointer}#atic_usersignout:hover{text-decoration:underline}#at_auth img{width:16px;height:16px;overflow:hidden;border:none;padding:0;margin:0 5px 0 0;float:left}#at_auth a{text-decoration:none}#at15pf a.at-logo-gray,#at16pf a.at-logo-gray{background:url(' + a(209) + ") no-repeat center;height:10px;width:10px;display:inline-block;position:static}#at15pf a.at-logo-gray:hover,#at16pf a.at-logo-gray:hover{background:url(" + a(211) + ") no-repeat center}#at15pf a.at-info-gray,#at16pf a.at-info-gray{background:url(" + a(210) + ") no-repeat center;height:12px;width:12px;display:inline-block;position:static;margin-right:-5px;margin-top:-2px}#at15pf a.at-info-gray:hover,#at16pf a.at-info-gray:hover{background:url(" + a(204) + ") no-repeat center}.at-ab-branding-gray-right{width:100%;height:100%;text-align:right;padding:0;margin:0}.at-ab-branding-gray-center{width:100%;height:100%;text-align:center;padding:0;margin:0}.ab-branding-footer{height:18px}.ab-branding-footer #at16pf{height:100%;padding-top:3px}.ab-branding-footer .at-ab-branding-gray-right{margin-top:-3px}.ab-branding-footer #at15pf .ac-logo,.ab-branding-footer #at16pf .ac-logo{top:3px}.ab-branding-footer .at-ab-branding-gray-center{margin-top:-3px}.ab-branding-footer #at15pf a.at-info-gray,.ab-branding-footer #at16pf a.at-info-gray{margin-right:3px}@media screen and (max-width:680px){#at3win{width:95%;left:auto;margin-left:auto}}@media print{.at4,#at4m-mobile,#at4-thankyou,.at4-recommended,#at4-share,#at4-follow,#at4-whatsnext,#at-recommendedside,#at3win{display:none!important}}@media screen and (max-width:400px){.at4win{width:100%}.addthis_bar .addthis_bar_p{margin-right:auto}}@media screen and (max-height:700px) and (max-width:400px){.at4-thankyou-inner .at4-recommended-container{height:122px;overflow:hidden}.at4-thankyou-inner .at4-recommended .at4-recommended-item:first-child{border-bottom:1px solid #c5c5c5}}", ""])
}, , , , , , , function (t, e, a) {
    t.exports = a.p + "ddbebb8cb40696c0a7b386de987e5a0e.png"
}, function (t, e, a) {
    t.exports = a.p + "7560915a5e5e7d9422d57a8281eb39e6.gif"
}, , , , , function (t, e, a) {
    t.exports = a.p + "4bec9a4fde00f493c0a8fa783be98a27.gif"
}, function (t, e, a) {
    t.exports = a.p + "e8b031bc4e56ab9c356c6731e6f7f739.gif"
}, function (t, e, a) {
    t.exports = a.p + "9941e8db3e2927fecfcccb73e1722afd.gif"
}, , , , function (t, e, a) {
    function i(t, e, a) {
        return"function" == typeof e && "undefined" == typeof a && l(t) ? o(t, e) : n(t, s(e, a, 3))
    }

    var o = a(99), n = a(100), s = a(73), l = a(23);
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a, i) {
        var h = r(t) ? o : l;
        return h(t, n(e, i, 4), a, arguments.length < 3, s)
    }

    var o = a(218), n = a(219), s = a(100), l = a(228), r = a(23);
    t.exports = i
}, function (t) {
    function e(t, e) {
        var a = -1, i = t.length;
        for (e || (e = Array(i)); ++a < i;)e[a] = t[a];
        return e
    }

    t.exports = e
}, function (t) {
    function e(t, e, a, i) {
        var o = -1, n = t.length;
        for (i && n && (a = t[++o]); ++o < n;)a = e(a, t[o], o, t);
        return a
    }

    t.exports = e
}, function (t, e, a) {
    function i(t, e, a) {
        var i = typeof t;
        return"function" == i ? "undefined" != typeof e && h(t) ? l(t, e, a) : t : null == t ? r : "object" == i ? o(t) : "undefined" == typeof e ? s(t + "") : n(t + "", e)
    }

    var o = a(225), n = a(226), s = a(227), l = a(73), r = a(76), h = a(239);
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a, p, u, m, w) {
        var F;
        if (a && (F = u ? a(t, p, u) : a(t)), "undefined" != typeof F)return F;
        if (!v(t))return t;
        var x = d(t);
        if (x) {
            if (F = r(t), !e)return o(t, F)
        } else {
            var C = U.call(t), E = C == D;
            if (C != b && C != g && (!E || u))return R[C] ? h(t, C, e) : u ? t : {};
            if (F = c(E ? {} : t), !e)return s(t, F, f(t))
        }
        m || (m = []), w || (w = []);
        for (var z = m.length; z--;)if (m[z] == t)return w[z];
        return m.push(t), w.push(F), (x ? n : l)(t, function (o, n) {
            F[n] = i(o, e, a, n, t, m, w)
        }), F
    }

    var o = a(217), n = a(99), s = a(221), l = a(101), r = a(236), h = a(237), c = a(238), d = a(23), v = a(25), f = a(48), g = "[object Arguments]", p = "[object Array]", u = "[object Boolean]", m = "[object Date]", w = "[object Error]", D = "[object Function]", F = "[object Map]", x = "[object Number]", b = "[object Object]", C = "[object RegExp]", E = "[object Set]", z = "[object String]", _ = "[object WeakMap]", M = "[object ArrayBuffer]", k = "[object Float32Array]", y = "[object Float64Array]", A = "[object Int8Array]", B = "[object Int16Array]", S = "[object Int32Array]", I = "[object Uint8Array]", O = "[object Uint8ClampedArray]", T = "[object Uint16Array]", j = "[object Uint32Array]", R = {};
    R[g] = R[p] = R[M] = R[u] = R[m] = R[k] = R[y] = R[A] = R[B] = R[S] = R[x] = R[b] = R[C] = R[z] = R[I] = R[O] = R[T] = R[j] = !0, R[w] = R[D] = R[F] = R[E] = R[_] = !1;
    var N = Object.prototype, U = N.toString;
    t.exports = i
}, function (t) {
    function e(t, e, a) {
        a || (a = e, e = {});
        for (var i = -1, o = a.length; ++i < o;) {
            var n = a[i];
            e[n] = t[n]
        }
        return e
    }

    t.exports = e
}, function (t, e, a) {
    function i(t, e, a) {
        for (var i = -1, n = o(t), s = a(t), l = s.length; ++i < l;) {
            var r = s[i];
            if (e(n[r], r, n) === !1)break
        }
        return t
    }

    var o = a(106);
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a, i, v, p, u) {
        var m = l(t), w = l(e), D = c, F = c;
        m || (D = g.call(t), D == h ? D = d : D != d && (m = r(t))), w || (F = g.call(e), F == h ? F = d : F != d && (w = r(e)));
        var x = D == d, b = F == d, C = D == F;
        if (C && !m && !x)return n(t, e, D);
        var E = x && f.call(t, "__wrapped__"), z = b && f.call(e, "__wrapped__");
        if (E || z)return a(E ? t.value() : t, z ? e.value() : e, i, v, p, u);
        if (!C)return!1;
        p || (p = []), u || (u = []);
        for (var _ = p.length; _--;)if (p[_] == t)return u[_] == e;
        p.push(t), u.push(e);
        var M = (m ? o : s)(t, e, a, i, v, p, u);
        return p.pop(), u.pop(), M
    }

    var o = a(233), n = a(234), s = a(235), l = a(23), r = a(246), h = "[object Arguments]", c = "[object Array]", d = "[object Object]", v = Object.prototype, f = v.hasOwnProperty, g = v.toString;
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a, i, n) {
        var l = e.length;
        if (null == t)return!l;
        for (var r = -1, h = !n; ++r < l;)if (h && i[r] ? a[r] !== t[e[r]] : !s.call(t, e[r]))return!1;
        for (r = -1; ++r < l;) {
            var c = e[r];
            if (h && i[r])var d = s.call(t, c); else {
                var v = t[c], f = a[r];
                d = n ? n(v, f, c) : void 0, "undefined" == typeof d && (d = o(f, v, n, !0))
            }
            if (!d)return!1
        }
        return!0
    }

    var o = a(102), n = Object.prototype, s = n.hasOwnProperty;
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        var e = s(t), a = e.length;
        if (1 == a) {
            var i = e[0], l = t[i];
            if (n(l))return function (t) {
                return null != t && t[i] === l && r.call(t, i)
            }
        }
        for (var h = Array(a), c = Array(a); a--;)l = t[e[a]], h[a] = l, c[a] = n(l);
        return function (t) {
            return o(t, e, h, c)
        }
    }

    var o = a(224), n = a(105), s = a(48), l = Object.prototype, r = l.hasOwnProperty;
    t.exports = i
}, function (t, e, a) {
    function i(t, e) {
        return n(e) ? function (a) {
            return null != a && a[t] === e
        } : function (a) {
            return null != a && o(e, a[t], null, !0)
        }
    }

    var o = a(102), n = a(105);
    t.exports = i
}, function (t) {
    function e(t) {
        return function (e) {
            return null == e ? void 0 : e[t]
        }
    }

    t.exports = e
}, function (t) {
    function e(t, e, a, i, o) {
        return o(t, function (t, o, n) {
            a = i ? (i = !1, t) : e(a, t, o, n)
        }), a
    }

    t.exports = e
}, function (t, e, a) {
    var i = a(76), o = a(241), n = o ? function (t, e) {
        return o.set(t, e), t
    } : i;
    t.exports = n
}, function (t, e, a) {
    (function (e) {
        function i(t) {
            return l.call(t, 0)
        }

        var o = a(250), n = a(24), s = n(s = e.ArrayBuffer) && s, l = n(l = s && new s(0).slice) && l, r = Math.floor, h = n(h = e.Uint8Array) && h, c = function () {
            try {
                var t = n(t = e.Float64Array) && t, a = new t(new s(10), 0, 1) && t
            } catch (i) {
            }
            return a
        }(), d = c ? c.BYTES_PER_ELEMENT : 0;
        l || (i = s && h ? function (t) {
            var e = t.byteLength, a = c ? r(e / d) : 0, i = a * d, o = new s(e);
            if (a) {
                var n = new c(o, 0, a);
                n.set(new c(t, 0, a))
            }
            return e != i && (n = new h(o, i), n.set(new h(t, i))), o
        } : o(null)), t.exports = i
    }).call(e, function () {
        return this
    }())
}, function (t) {
    function e(t, e) {
        for (var a = -1, i = t.length; ++a < i && e.indexOf(t.charAt(a)) > -1;);
        return a
    }

    t.exports = e
}, function (t) {
    function e(t, e) {
        for (var a = t.length; a-- && e.indexOf(t.charAt(a)) > -1;);
        return a
    }

    t.exports = e
}, function (t) {
    function e(t, e, a, i, o, n, s) {
        var l = -1, r = t.length, h = e.length, c = !0;
        if (r != h && !(o && h > r))return!1;
        for (; c && ++l < r;) {
            var d = t[l], v = e[l];
            if (c = void 0, i && (c = o ? i(v, d, l) : i(d, v, l)), "undefined" == typeof c)if (o)for (var f = h; f-- && (v = e[f], !(c = d && d === v || a(d, v, i, o, n, s)));); else c = d && d === v || a(d, v, i, o, n, s)
        }
        return!!c
    }

    t.exports = e
}, function (t) {
    function e(t, e, r) {
        switch (r) {
            case a:
            case i:
                return+t == +e;
            case o:
                return t.name == e.name && t.message == e.message;
            case n:
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case s:
            case l:
                return t == e + ""
        }
        return!1
    }

    var a = "[object Boolean]", i = "[object Date]", o = "[object Error]", n = "[object Number]", s = "[object RegExp]", l = "[object String]";
    t.exports = e
}, function (t, e, a) {
    function i(t, e, a, i, n, l, r) {
        var h = o(t), c = h.length, d = o(e), v = d.length;
        if (c != v && !n)return!1;
        for (var f, g = -1; ++g < c;) {
            var p = h[g], u = s.call(e, p);
            if (u) {
                var m = t[p], w = e[p];
                u = void 0, i && (u = n ? i(w, m, p) : i(m, w, p)), "undefined" == typeof u && (u = m && m === w || a(m, w, i, n, l, r))
            }
            if (!u)return!1;
            f || (f = "constructor" == p)
        }
        if (!f) {
            var D = t.constructor, F = e.constructor;
            if (D != F && "constructor"in t && "constructor"in e && !("function" == typeof D && D instanceof D && "function" == typeof F && F instanceof F))return!1
        }
        return!0
    }

    var o = a(48), n = Object.prototype, s = n.hasOwnProperty;
    t.exports = i
}, function (t) {
    function e(t) {
        var e = t.length, a = new t.constructor(e);
        return e && "string" == typeof t[0] && i.call(t, "index") && (a.index = t.index, a.input = t.input), a
    }

    var a = Object.prototype, i = a.hasOwnProperty;
    t.exports = e
}, function (t, e, a) {
    function i(t, e, a) {
        var i = t.constructor;
        switch (e) {
            case c:
                return o(t);
            case n:
            case s:
                return new i(+t);
            case d:
            case v:
            case f:
            case g:
            case p:
            case u:
            case m:
            case w:
            case D:
                var x = t.buffer;
                return new i(a ? o(x) : x, t.byteOffset, t.length);
            case l:
            case h:
                return new i(t);
            case r:
                var b = new i(t.source, F.exec(t));
                b.lastIndex = t.lastIndex
        }
        return b
    }

    var o = a(230), n = "[object Boolean]", s = "[object Date]", l = "[object Number]", r = "[object RegExp]", h = "[object String]", c = "[object ArrayBuffer]", d = "[object Float32Array]", v = "[object Float64Array]", f = "[object Int8Array]", g = "[object Int16Array]", p = "[object Int32Array]", u = "[object Uint8Array]", m = "[object Uint8ClampedArray]", w = "[object Uint16Array]", D = "[object Uint32Array]", F = /\w*$/;
    t.exports = i
}, function (t) {
    function e(t) {
        var e = t.constructor;
        return"function" == typeof e && e instanceof e || (e = Object), new e
    }

    t.exports = e
}, function (t, e, a) {
    function i(t) {
        var e = !(s.funcNames ? t.name : s.funcDecomp);
        if (!e) {
            var a = h.call(t);
            s.funcNames || (e = !l.test(a)), e || (e = r.test(a) || n(t), o(t, e))
        }
        return e
    }

    var o = a(229), n = a(24), s = a(75), l = /^\s*function[ \n\r\t]+\w/, r = /\bthis\b/, h = Function.prototype.toString;
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a) {
        if (!s(a))return!1;
        var i = typeof e;
        if ("number" == i)var l = a.length, r = n(l) && o(e, l); else r = "string" == i && e in a;
        if (r) {
            var h = a[e];
            return t === t ? t === h : h !== h
        }
        return!1
    }

    var o = a(74), n = a(12), s = a(25);
    t.exports = i
}, function (t, e, a) {
    (function (e) {
        var i = a(24), o = i(o = e.WeakMap) && o, n = o && new o;
        t.exports = n
    }).call(e, function () {
        return this
    }())
}, function (t, e, a) {
    function i(t) {
        for (var e = r(t), a = e.length, i = a && t.length, c = i && l(i) && (n(t) || h.nonEnumArgs && o(t)), v = -1, f = []; ++v < a;) {
            var g = e[v];
            (c && s(g, i) || d.call(t, g)) && f.push(g)
        }
        return f
    }

    var o = a(107), n = a(23), s = a(74), l = a(12), r = a(247), h = a(75), c = Object.prototype, d = c.hasOwnProperty;
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        for (var e = -1, a = t.length; ++e < a && o(t.charCodeAt(e)););
        return e
    }

    var o = a(104);
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        for (var e = t.length; e-- && o(t.charCodeAt(e)););
        return e
    }

    var o = a(104);
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a) {
        return e = "function" == typeof e && n(e, a, 1), o(t, !0, e)
    }

    var o = a(220), n = a(73);
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        return n(t) && o(t.length) && y[B.call(t)] || !1
    }

    var o = a(12), n = a(47), s = "[object Arguments]", l = "[object Array]", r = "[object Boolean]", h = "[object Date]", c = "[object Error]", d = "[object Function]", v = "[object Map]", f = "[object Number]", g = "[object Object]", p = "[object RegExp]", u = "[object Set]", m = "[object String]", w = "[object WeakMap]", D = "[object ArrayBuffer]", F = "[object Float32Array]", x = "[object Float64Array]", b = "[object Int8Array]", C = "[object Int16Array]", E = "[object Int32Array]", z = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", M = "[object Uint16Array]", k = "[object Uint32Array]", y = {};
    y[F] = y[x] = y[b] = y[C] = y[E] = y[z] = y[_] = y[M] = y[k] = !0, y[s] = y[l] = y[D] = y[r] = y[h] = y[c] = y[d] = y[v] = y[f] = y[g] = y[p] = y[u] = y[m] = y[w] = !1;
    var A = Object.prototype, B = A.toString;
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        if (null == t)return[];
        r(t) || (t = Object(t));
        var e = t.length;
        e = e && l(e) && (n(t) || h.nonEnumArgs && o(t)) && e || 0;
        for (var a = t.constructor, i = -1, c = "function" == typeof a && a.prototype === t, v = Array(e), f = e > 0; ++i < e;)v[i] = i + "";
        for (var g in t)f && s(g, e) || "constructor" == g && (c || !d.call(t, g)) || v.push(g);
        return v
    }

    var o = a(107), n = a(23), s = a(74), l = a(12), r = a(25), h = a(75), c = Object.prototype, d = c.hasOwnProperty;
    t.exports = i
}, function (t, e, a) {
    function i(t) {
        return t = o(t), t && s.test(t) ? t.replace(n, "\\$&") : t
    }

    var o = a(103), n = /[.*+?^${}()|[\]\/\\]/g, s = RegExp(n.source);
    t.exports = i
}, function (t, e, a) {
    function i(t, e, a) {
        var i = t;
        return(t = o(t)) ? (a ? l(i, e, a) : null == e) ? t.slice(r(t), h(t) + 1) : (e += "", t.slice(n(t, e), s(t, e) + 1)) : t
    }

    var o = a(103), n = a(231), s = a(232), l = a(240), r = a(243), h = a(244);
    t.exports = i
}, function (t) {
    function e(t) {
        return function () {
            return t
        }
    }

    t.exports = e
}, function (t, e, a) {
    var i = a(17).getObjectWithProp, o = {"mail.google.com": "gmail", "mail.yahoo.com": "yahoomail", "mail.aol.com": "aolmail", "mail.live.com": "hotmail"};
    t.exports = function (t) {
        return t = t.split(".").slice(-3).join("."), o[t] ? o[t] : (t = t.split(".").slice(-2).shift(), i("name")[t] ? t : "")
    }
}, function (t) {
    t.exports = {googlereader: "Google Reader", googletranslate: "Google Translate", google_follow: "Google", rss: "RSS"}
}, function (t) {
    var e = window.JSON && "function" == typeof window.JSON.parse && "function" == typeof window.JSON.stringify;
    t.exports = e
}, function (t, e, a) {
    var i = a(196);
    "string" == typeof i && (i = [
        [t.id, i, ""]
    ]);
    a(15)(i, {})
}, , , , , , , , , , , function (t, e, a) {
    var i = a(22), o = a(1), n = a(277);
    t.exports = function (t, e, a, s) {
        function l(i) {
            -1 === t.indexOf(i + "=") && (r[i] = n(e[i], t, a, s))
        }

        var r = {};
        return e && (o(e, l), e = i(r)), t + (e.length ? (t.indexOf("?") > -1 ? "&" : "?") + e : "")
    }
}, function (t, e, a) {
    var i = a(36), o = a(52);
    t.exports = function (t, e, a, n, s, l) {
        i(["close", t, e, a, n, s, l]), o()
    }
}, function (t, e, a) {
    var i = a(36), o = a(52);
    t.exports = function (t, e, a) {
        i(["send", t, e, a]), o()
    }
}, function (t, e, a) {
    var i = a(119);
    t.exports = function (t) {
        return t = t || "", i(t, function (t, e) {
            var a, i, o = t.indexOf(";jsessionid"), n = [];
            if (o > -1 && (t = t.substr(0, o)), e) {
                for (a in e)if ("string" == typeof e[a]) {
                    if (i = (e[a] || "").split("="), 2 === i.length && (0 === i[0].indexOf("utm_") || "gclid" === i[0] || "sms_ss" === i[0] || "at_xt" === i[0] || "fb_ref" === i[0] || "fb_source" === i[0]))continue;
                    e[a] && n.push(e[a])
                }
                t += n.length ? "?" + n.join("&") : ""
            }
            return t
        })
    }
}, function (t, e, a) {
    var i = a(39);
    t.exports = function () {
        for (var t; t = i.pop();)t && "function" == typeof t.close && t.close()
    }
}, function (t, e, a) {
    var i, o = a(5);
    t.exports = function () {
        var t;
        return i ? i : ("undefined" != typeof _ate && _ate.uid ? i = _ate.uid : (t = o.read("uid"), t && (i = t)), i)
    }
}, function (t) {
    var e, a = window;
    t.exports = function (t, i) {
        a.addthis_config ? addthis_config.data_use_cookies === !1 && (_atc.xck = 1) : a.addthis_config = {username: a.addthis_pub}, a.addthis_share || (a.addthis_share = {}), addthis_share.url || (a.addthis_url || addthis_share.imp_url !== e || (addthis_share.imp_url = 1), addthis_share.url = (a.addthis_url || t || "").split("#{").shift()),addthis_share.title||(addthis_share.title=(a.addthis_title||i||"").split("#{").shift())
    }
}, function (t) {
    t.exports = function (t) {
        var e;
        return t ? ("#" === t.charAt(0) && (t = t.substr(1)), e = t.split(";").shift(), 3 === e.split(".").length && (e = e.split(".").slice(0, -1).join(".")), 12 === e.length && "." === e.substr(0, 1) && /[a-zA-Z0-9\-_]{11}/.test(e.substr(1)) ? 1 : 0) : 0
    }
}, function (t) {
    t.exports = function (t, e, a) {
        if (t = t || {}, "at_tags"in t && (t.at_tag = t.at_tags), "at_tag"in t && e.user.ready(function () {
            a.cookie.tag.add(t.at_tag)
        }), "at_welcome"in t)if (duc(t.at_welcome).match(/\{/))try {
            e.bar.initialize(duc(t.at_welcome))
        } catch (i) {
        } else e.welcome_rule = duc(t.at_welcome);
        return t
    }
}, function (t, e, a) {
    var i = a(119);
    t.exports = function (t, e) {
        var a, o = {}, n = e || [];
        for (a = 0; a < n.length; a++)o[n[a]] = 1;
        return i(t, function (t, e) {
            var a, i, n = [];
            if (e) {
                for (a in e)if ("string" == typeof e[a])if (i = (e[a] || "").split("="), 2 !== i.length && e[a])n.push(e[a]); else {
                    if (o[i[0]])continue;
                    e[a] && n.push(e[a])
                }
                t += n.length ? "?" + n.join("&") : ""
            }
            return t
        })
    }
}, function (t, e, a) {
    function i() {
        return r(l(g, function (t) {
            return!p[t]
        }))
    }

    function o() {
        return r(p)
    }

    function n() {
        var t = i(), e = o(), a = {};
        t.length > 0 && (a["new"] = t.join(","), e.length > 0 && (a.old = e.join(",")), v($ENV.SERVICES_RENDERED_ENDPOINT, {params: a}), h(t, function (t, e) {
            p[e] = 1
        }))
    }

    var s, l = a(46), r = a(146), h = a(1), c = a(17).exists, d = a(64).isNative, v = a(40), f = .001 > Math.random(), g = {}, p = {};
    t.exports.record = function (t) {
        f && c(t) && !d(t) && (g[t] = 1, clearTimeout(s), s = setTimeout(n, 1e3))
    }
}, function (t, e, a) {
    var i = a(28), o = a(272), n = document, s = window;
    t.exports = function () {
        var t = n.title, e = n.location || {}, a = e.href, l = a.split("#"), r = l.pop();
        return o(r) && (a = l.join("#")), i() >= 250 && addthis_share.imp_url && a && a != s.addthis_share.url ? (s.addthis_share.url = s.addthis_url = a, s.addthis_share.title = s.addthis_title = t, 1) : 0
    }
}, function (t) {
    var e = window.encodeURIComponent;
    t.exports = function (t, a, i, o) {
        return t.replace(/\{\{service\}\}/g, e(o || "addthis-service-code")).replace(/\{\{code\}\}/g, e(o || "addthis-service-code")).replace(/\{\{title\}\}/g, e((i || window.addthis_share).title)).replace(/\{\{url\}\}/g, e(a))
    }
}, function (t, e, a) {
    var i = a(20), o = a(3).makeCUID, n = a(4), s = a(16);
    t.exports = function (t, e, a, l, r) {
        var h, c = s(a) || {}, d = s(l) || {};
        c.xid || (c.xid = o()), d.hdl = 1, h = i(t, e, c, d), n(h, 1), r || _ate.share.notify(t, c, l, null, e)
    }
}, function (t, e, a) {
    var i = a(20);
    t.exports = function (t, e, a) {
        var o = new Image;
        return o.src = i(t, 0, e, a), o
    }
}, function (t) {
    t.exports = {source: (0 === document.location.href.indexOf("https") ? "https:" : "http:") + _atr + 'sh.8e8e962b.html'}
}, function (t, e, a) {
    function i(t) {
        var e, a, i, o;
        for (t = E(t), t = t.toLowerCase(), t = t.replace(/[,;:\+\|]/g, " "), t = t.replace(/[^a-z0-9. '\-]/g, ""), t = t.replace(/\s+/g, " "), t = t.replace(/\s+$/g, ""), a = [], i = t.split(" "), o = 0; o < i.length; o++)e = i[o], "-" !== e.charAt(0) && (/'s$/.test(e) ? a.push(e.substring(0, e.length - 2).replace(/[-']/g, "") + "'s") : a = a.concat(e.replace(/'/g, "").split("-")));
        return a
    }

    function o(t, e) {
        return n(void 0 === t ? !0 : t, e)
    }

    function n(t, e) {
        var a, o, n, l = s(t), r = t ? f.dr : l.dr || f.dr, h = w(r), c = {};
        return b && d.debug("op=", l, "ref=" + r, "cla=" + h, "cache=" + z), l.rsc ? (c.type = "social", c.service = l.rsc, c.click = !0, z = c, c) : z && !e ? z : "undefined" == typeof r || "" === r ? (c.type = "direct", z = c, c) : (a = v.getHost(r), o = D(a), b && d.debug("ref=" + r, "iss=" + p(r)), "undefined" != typeof o && o ? (b && d.debug("serviceCode", o), c.type = "social", c.service = o) : p(r) ? (c.type = "search", c.domain = v.getHost(r), n = m(r), c.terms = i(n)) : h & u.ON_DOMAIN ? (c.type = "internal", c.domain = document.location.hostname) : h & u.OFF_DOMAIN ? (c.type = "referred", c.domain = v.getHost(r)) : c.type = "direct", z = c, c)
    }

    function s(t) {
        return t ? F : x || F || {}
    }

    function l(t) {
        F = {}, g(t, function (t, e) {
            F[t] = e
        }), F.dr = f.dr
    }

    function r(t) {
        x = {}, (t.rsi || t.rsc || t.dr) && (g(t, function (t, e) {
            x[t] = e
        }), b && d.debug("setting", x), g(x, function (t, e) {
            C.add(t, e)
        }), C.save())
    }

    function h(t, e) {
        var a = e ? null : C.get();
        b && d.debug("reset called; pageState=", t, " stored state=", a), l(t), a ? t.rsc ? (t.dr = f.dr, r(t), b && d.debug("formal referral", x)) : document.referrer ? (r(a), b && d.debug("referral - use stored state", x)) : (b && d.debug("no referral - kill cookie, then start a new session"), C.reset(), t.dr = f.dr, r(t), F = x, b && d.debug("session state", x)) : (t.dr = f.dr, r(t), F = x, b && d.debug("session state", x))
    }

    var c = a(86), d = a(13), v = a(7), f = a(81), g = a(1), p = a(59), u = a(55)(), m = a(51), w = a(79), D = a(113), F = {}, x = {}, b = 0, C = new c("rfs", 1), E = window.decodeURIComponent, z = null;
    t.exports = {getTrafficSource: o, getSearchTerms: i, setState: r, resetState: h}
}, function (t, e, a) {
    function i(t) {
        var e = (t || document.location.href).split("#").shift();
        return s.testAll(e) ? !0 : s.testAll(e + "/")
    }

    function o(t) {
        if (!l() && window.JSON) {
            var e = (t || document.location.href).split("#").shift(), a = s.generateName();
            s.contains(a) || s.add(a), n || (n = s.get(a)), !n || h || n.test(e) || (h = 1, setTimeout(function () {
                n.add(e), n.save(a)
            }, 5e3))
        }
    }

    var n, s = a(126), l = a(115), r = "hist", h = 0, s = new s(r, 3);
    t.exports = {logURL: o, seenBefore: i}
}, function (t, e, a) {
    function i(t, e) {
        void 0 === t || i.isWatching(t) || (e = e || {}, e.minPercentVisible = void 0 !== e.minPercentVisible ? e.minPercentVisible : .5, e.minDurationVisible = void 0 !== e.minDurationVisible ? e.minDurationVisible : 1e3, e.sampleRate = void 0 !== e.sampleRate ? e.sampleRate : 1, e.onView = void 0 !== e.onView ? e.onView : function () {
        }, this.element = t, this.sampleTimeout = 1e3 / e.sampleRate, this.minPercentVisible = e.minPercentVisible, this.minDurationVisible = e.minDurationVisible, this.onView = e.onView, this.interval = null, this.firstSeen = null, this.wasViewed = !1, i.watchList.push(t), i.watchers.push(this))
    }

    var o = a(41), n = a(145);
    t.exports = i, i.prototype.check = function () {
        var t = this, e = n(this.element, {cacheDuration: this.sampleTimeout});
        this.interval || this.wasViewed || e > this.minPercentVisible && (this.firstSeen = new Date, this.interval = setInterval(function () {
            var e = new Date, a = n(t.element, {cacheDuration: this.sampleTimeout});
            a > t.minPercentVisible ? e.getTime() - t.firstSeen.getTime() > t.minDurationVisible && (clearInterval(t.interval), t.interval = null, t.wasViewed = !0, t.onView(), i.watchList.splice(i.watchList.indexOf(this.element), 1), i.watchers.splice(i.watchers.indexOf(this), 1)) : (clearInterval(t.interval), t.interval = null, t.firstSeen = null)
        }, this.sampleTimeout))
    }, i.isWatching = function (t) {
        for (var e = i.watchList.length - 1; e >= 0; e--)if (i.watchList[e] === t)return!0;
        return!1
    }, i.handler = function () {
        setTimeout(function () {
            for (var t = i.watchers.length; t--;)i.watchers[t].check()
        })
    }, i.resizeHandler = function () {
        clearTimeout(i.resizeHandlerTimeout), i.resizeHandlerTimeout = setTimeout(i.handler, 1e3)
    }, i.messageHandler = function (t) {
        var e = t && t.data && t.data.indexOf instanceof Function && 0 === t.data.indexOf("_atafiv=");
        if (e)for (var a, n = t.data.substring("_atafiv=".length), s = n.split("#"), l = s[0], r = decodeURIComponent(s[1] || ""), h = 0; h < document.getElementsByTagName("iframe").length; h++)if (a = document.getElementsByTagName("iframe")[h], a.src.replace(/^https?:/, "") === r.replace(/^https?:/, "")) {
            new i(a, {minPercentVisible: .5, minDurationVisible: 1e3, onView: function () {
                var t = document.createElement("img");
                t.src = "//cf.addthis.com/red/p.png?gen=2000&rb=0&pco=clk-100&ev=view_tracker&pxid=4031&dspid=6" + l, o(t), document.body.appendChild(t)
            }}), i.handler();
            break
        }
    }, i.resizeHandlerTimeout = null, i.watchList = [], i.watchers = []
}, , function (t, e, a) {
    function i(t, e) {
        "*" === e ? n.error("Can't use * as a target origin") : e ? t || n.error("Need to provide a target window") : n.error("Need to provide a target origin"), this.targetWindow = t, this.targetOrigin = e
    }

    var o = a(61), n = a(13);
    i.prototype.post = function (t) {
        o && this.targetWindow.postMessage(t, this.targetOrigin)
    }, t.exports = i
}, , function (t, e, a) {
    function i(t) {
        t instanceof Array || (t = [t]);
        for (var e = [], a = 0; a < t.length; a++) {
            var i = t[a];
            i instanceof o ? e.push(i) : (i = new o(i.name, i.href || i.url || ((window._atc || {}).rsrcs || {})[i.name], i.test ? i.test : function () {
                return!0
            }), e.push(i))
        }
        return e
    }

    var o = a(127), n = a(58).EventDispatcher, s = a(69), l = a(42);
    t.exports = function () {
        var t = this, e = new n(t);
        e.decorate(e).decorate(t), this.resources = arguments.length && arguments[0]instanceof Array ? arguments[0] : l(arguments), this.waiting = this.resources.length, this.loading = !1, !this.resources || this.resources[0]instanceof o || (this.resources = i(this.resources)), this.checkload = function () {
            this.waiting--, 0 === this.waiting && e.fire("load", this.resources, {resources: this.resources})
        }, this.add = function (t) {
            t && (this.waiting++, this.resources.push(t))
        }, this.load = function () {
            if (!this.loading) {
                for (var e = 0; e < this.resources.length; e++)this.resources[e].addEventListener("load", s(this.checkload, t)), this.resources[e].load();
                this.loading = !0
            }
        }
    }
}, function (t, e, a) {
    function i() {
        return u.join(g)
    }

    function o() {
        if (!p) {
            var t = c.rck(f) || "";
            t && (u = d(t).split(g)), p = 1
        }
    }

    function n() {
        o(), u.length && c.sck(f, v(i()), 0, !0)
    }

    function s() {
        return o(), u
    }

    function l(t) {
        o(), "string" == typeof t && (t = [t]);
        for (var e = 0; e < u.length; e++)for (var a = 0; a < t.length; a++)if (u[e] === t[a])return;
        for (var a = 0; a < t.length; a++)u.push(t[a]);
        n()
    }

    function r(t) {
        for (var e = 0; e < u.length; e++)if (u[e] === t) {
            u.splice(e, 1);
            break
        }
        n()
    }

    function h() {
        u = []
    }

    var c = a(19);
    t.exports = {reset: h, add: l, remove: r, get: s, toKV: i};
    var d = window.decodeURIComponent, v = window.encodeURIComponent, f = "__attag", g = ",", p = 0, u = []
}, function (t, e, a) {
    var i = window.location.href.match(/https?:\/\/[^?#]*?\.addthis\.com/);
    i && window.isAddThisTrackingFrame || !function () {
        function t(t, e, a, i) {
            return function () {
                this.qs || (this.qs = 0), _atc.qs++, this.qs++ > 0 && i || _atc.qs > 1e3 || !g.addthis || c({call: t, args: arguments, ns: e, ctx: a})
            }
        }

        function e(t) {
            var e = this, a = this.queue = [];
            this.name = t, this.call = function () {
                a.push(arguments)
            }, this.call.queuer = this, this.flush = function (t, i) {
                this.flushed = 1;
                for (var o = 0; o < a.length; o++)t.apply(i || e, a[o]);
                return t
            }
        }

        function i(t) {
            t && !(t.data || {}).addthisxf && g.addthis && (addthis._pmh.flushed ? _ate.pmh(t) : addthis._pmh.call(t))
        }

        var o, n = a(147).select, s = a(140), l = a(93), r = a(90), h = a(41), c = a(36), d = a(85), v = a(9).listen, f = a(1), g = window, p = document;
        (g._atc || {}).ver || (g._atd = "www.addthis.com/", g._euc = encodeURIComponent, g._duc = decodeURIComponent, g._atc = {dbg: 0, dr: 0, ver: 300, rev: "v1.8.1-wp", loc: 0, enote: "", cwait: 500, bamp: .25, camp: 1, csmp: 1e-4, damp: 1, famp: .01, pamp: .1, abmp: .5, sfmp: -1, tamp: 1, plmp: 1, stmp: 0, vamp: 1, cscs: 1, dtt: .1, ohmp: 0, ltj: 1, xamp: 1, abf: !!g.addthis_do_ab, qs: 0, cdn: 0, rsrcs: {bookmark: 'bookmark.5e6349df.html', linkedin: 'linkedin.5cf30550.html', atimg: "atimg.html", countercss: "counter.css", counterIE67css: "plugins/counterIE67.css", counter: "plugin.sharecounter.js", wombat: "bar.js", wombatcss: "bar.css", qbarcss: "bannerQuirks.css", fltcss: "floating.css", contentcss: "content.css", contentjs: "content.js", layersjs: "layers.js", layerscss: "layers.css", layersiecss: "layersIE6.css", layersdroidcss: "layersdroid.css", warning: "warning.html", ssojs: "ssi.js", ssocss: "ssi.css", peekaboocss: "peekaboo.css", overlayjs: "overlay.js", widgetWhite32CSS: "widget.white.32.css", widgetIE67css: "widgetIE67.css", widgetpng: "widget.gif", widgetOldCSS: "widget.old.css", widgetOld16CSS: "widget.old.16.css", widgetOld20CSS: "widget.old.20.css", widgetOld32CSS: "widget.old.32.css", embed: "embed.js", embedcss: "embed.css", lightbox: "lightbox.js", lightboxcss: "lightbox.css", link: 'link.f464d68d.html', pinit: 'pinit.d9f1dad8.html', fbshare: 'fbshare.584728eb.html', tweet: 'tweet.f6378c74.html', menujs: "menu.js", sh: "sh.html"}, imgs: "images/"}), g._atr = "//s7.addthis.com/static/", f(g._atc.rsrcs, function (t, e) {
            -1 === e.indexOf(_atr) && (g._atc.rsrcs[t] = _atr + e)
        });
        var u, m, w, D = ("https:" === g.location.protocol, p.body || p.getElementsByTagName("head")[0]);
        if (!g.addthis || g.addthis.nodeType !== o) {
            try {
                u = g.navigator ? navigator.userLanguage || navigator.language : "", m = u.split("-").pop().toLowerCase(), w = u.substring(0, 2)
            } catch (F) {
            }
            g.addthis = {ost: 0, cache: {}, plo: [], links: [], ems: [], timer: {load: (new Date).getTime()}, _Queuer: e, _queueFor: t, data: {getShareCount: t("getShareCount", "data")}, bar: {show: t("show", "bar"), initialize: t("initialize", "bar")}, layers: t("layers"), login: {initialize: t("initialize", "login"), connect: t("connect", "login")}, configure: function (t) {
                g.addthis_config || (g.addthis_config = {}), g.addthis_share || (g.addthis_share = {});
                for (var e in t)if ("share" == e && "object" == typeof t[e])for (var a in t[e])t[e].hasOwnProperty(a) && (addthis.ost ? addthis.update("share", a, t[e][a]) : g.addthis_share[a] = t[e][a]); else t.hasOwnProperty(e) && (addthis.ost ? addthis.update("config", e, t[e]) : g.addthis_config[e] = t[e])
            }, box: t("box"), button: t("button"), counter: t("counter"), count: t("count"), lightbox: t("lightbox"), toolbox: t("toolbox"), update: t("update"), init: t("init"), ad: {menu: t("menu", "ad", "ad"), event: t("event", "ad"), getPixels: t("getPixels", "ad")}, util: {getServiceName: t("getServiceName")}, ready: t("ready"), addEventListener: t("addEventListener", "ed", "ed"), removeEventListener: t("removeEventListener", "ed", "ed"), user: {getID: t("getID", "user"), getGeolocation: t("getGeolocation", "user", null, !0), getPreferredServices: t("getPreferredServices", "user", null, !0), getServiceShareHistory: t("getServiceShareHistory", "user", null, !0), ready: t("ready", "user"), isReturning: t("isReturning", "user"), isOptedOut: t("isOptedOut", "user"), isUserOf: t("isUserOf", "user"), hasInterest: t("hasInterest", "user"), isLocatedIn: t("isLocatedIn", "user"), interests: t("getInterests", "user"), services: t("getServices", "user"), location: t("getLocation", "user")}, session: {source: t("getSource", "session"), isSocial: t("isSocial", "session"), isSearch: t("isSearch", "session")}, _pmh: new e("pmh"), _pml: []};
            var x = l("addthis_widget");
            if (x.headless) {
                var b = r(x), C = d(b);
                D.appendChild(b), x.userapi && (g.addthis.UserAPI = new C("user")), x.provider && (g.addthis.ProviderAPI = new C("provider"))
            } else {
                if (x.userBlob) {
                    var E = r(x), z = d(E);
                    D.appendChild(E), g.addthis.UserBlobAPI = new z("userBlob")
                }
                if (-1 === p.location.href.indexOf(_atr)) {
                    var _ = p.getElementById("_atssh");
                    if (_ || (_ = p.createElement("div"), _.style.visibility = "hidden", _.id = "_atssh", h(_), D.appendChild(_)), g.postMessage && (v(g, "message", i), addthis._pml.push(i)), !_.firstChild) {
                        var M, k = Math.floor(1e3 * Math.random());
                        M = p.createElement("iframe"), M.id = "_atssh" + k, M.title = "AddThis utility frame", _.appendChild(M), h(M), M.frameborder = M.style.border = 0, M.style.top = M.style.left = 0, _atc._atf = M
                    }
                }
                !function () {
                    addthis.login = {initialize: function () {
                        var t = Array.prototype.slice.call(arguments);
                        a.e(5, function () {
                            a(71), a(70), addthis.login.initialize.apply(addthis.login, t)
                        })
                    }, connect: function () {
                        var t = Array.prototype.slice.call(arguments);
                        a.e(5, function () {
                            a(71), a(70), addthis.login.connect.apply(addthis.login, t)
                        })
                    }};
                    for (var t, e, i, o = -1, l = {share: "smlsh-1.0", follow: "smlfw-1.0", recommended: "smlre-1.0", whatsnext: "smlwn-1.0", warning: "smlwrn-1.0", recommendedbox: "smlreb-1.0"}, r = !1; ++o < addthis.plo.length;)if (e = addthis.plo[o], "layers" === e.call) {
                        i = e.args[0];
                        for (t in i)l[t] && (_ate.track.apc(l[t]), "warning" === t && (_ate.aa = 1));
                        _ate.track.apc("sml-1.0")
                    }
                    s.append(function () {
                        var t = {".addthis-recommendedbox": "recommendedbox"};
                        for (var e in t)if (t.hasOwnProperty(e)) {
                            var a = n(e), i = {};
                            a.length && (i[t[e]] = !0, i.pi = !1, addthis.layers(i), r = !0)
                        }
                        r && addthis.layers({pii: !0})
                    }), addthis.layers = function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        a.e(4, function () {
                            a(175), a(176), a(177), a(178), a(179), a(180), a(181), a(154), a(157), a(182), a(183), a(184), a(185), a(155), a(186), a(187), a(188), a(189), a(190), a(191), a(158), a(192), a(67), a(33)(function () {
                                a(66), addthis.layers.apply(addthis, t)
                            })
                        })
                    }, addthis.lightbox = function (t) {
                        a.e(8, function () {
                            a(193), a(171), addthis.lightbox(t)
                        })
                    }, addthis.menu = function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        a.e(0, function () {
                            a(18), _ate.menu.open.apply(_ate.menu, t)
                        })
                    }, addthis.menu.close = function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        a.e(0, function () {
                            a(18), _ate.menu.close.apply(_ate.menu.close, t)
                        })
                    }, addthis.bar = {initialize: function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        a.e(4, function () {
                            a(33)(function () {
                                _ate.track.apc("wmb-1.0"), addthis.bar.initialize.apply(addthis.bar, t)
                            })
                        })
                    }, show: function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        t.push("render"), addthis.bar.initialize.apply(addthis.bar, t)
                    }, render: function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        t.push("render"), addthis.bar.initialize.apply(addthis.bar, t)
                    }, hide: function () {
                        _ate.ed.fire("addthis.welcome.hide", {}, {})
                    }}, addthis.box = function () {
                        var t = arguments;
                        a.e(9, function () {
                            a(173), a(167), _ate.track.apc("wmb-1.0"), addthis.box.apply(addthis.box, t)
                        })
                    }, addthis.ad.menu = function () {
                        var t = arguments;
                        a.e(13, function () {
                            a(174), a(169), addthis.ad.menu.apply(addthis.ad, t)
                        })
                    }, addthis.sharecounters = {getShareCounts: function () {
                        var t = arguments;
                        a.e(20, function () {
                            a(31), addthis.sharecounters.getShareCounts.apply(addthis.sharecounters, t)
                        })
                    }};
                    var h = function () {
                        var t = arguments;
                        _ate.bro.ie6 || _ate.bro.ie7 ? a.e(7, function () {
                            a(31), a(65), a(168), addthis.counter.apply(addthis.sharecounters, t)
                        }) : a.e(14, function () {
                            a(31), a(65), addthis.counter.apply(addthis.sharecounters, t)
                        })
                    }, c = function (t) {
                        return function (e, a, i) {
                            var o = n(e);
                            o.length && t(o, a, i)
                        }
                    };
                    addthis.count = c(h), addthis.counter = c(h), addthis.data.getShareCount = h, setTimeout(function () {
                        g.addthis.timer.core || Math.random() < _atc.ohmp && ((new Image).src = "//m.addthisedge.com/live/t00/oh.gif?" + Math.floor(4294967295 * Math.random()).toString(36) + "&cdn=" + _atc.cdn + "&sr=" + _atc.ohmp + "&rev=" + _atc.rev + "&to=" + timeout)
                    }, 1e4), a(88)
                }(a)
            }
        }
    }()
}, function (t) {
    t.exports = function (t) {
        var e = {ca: "es", cs: "CZ", cy: "GB", da: "DK", de: "DE", eu: "ES", ck: "US", en: "US", es: "LA", gl: "ES", ja: "JP", ko: "KR", nb: "NO", nn: "NO", sv: "SE", ku: "TR", zh: "CN", "zh-tr": "CN", "zh-hk": "HK", "zh-tw": "TW", fo: "FO", fb: "LT", af: "ZA", sq: "AL", hy: "AM", be: "BY", bn: "IN", bs: "BA", nl: "NL", et: "EE", fr: "FR", ka: "GE", el: "GR", gu: "IN", hi: "IN", ga: "IE", jv: "ID", kn: "IN", kk: "KZ", la: "VA", li: "NL", ms: "MY", mr: "IN", ne: "NP", pa: "IN", pt: "PT", rm: "CH", sa: "IN", sr: "RS", sw: "KE", ta: "IN", pl: "PL", tt: "RU", te: "IN", ml: "IN", uk: "UA", vi: "VN", tr: "TR", xh: "ZA", zu: "ZA", km: "KH", tg: "TJ", he: "IL", ur: "PK", fa: "IR", yi: "DE", gn: "PY", qu: "PE", ay: "BO", se: "NO", ps: "AF", tl: "ST"}, a = e[t] || e[t.split("-").shift()];
        return a ? t.split("-").shift() + "_" + a : "en_US"
    }
}, function (t) {
    t.exports = function (t) {
        var e = {en: "en-US", ar: "ar", ca: "ca", zh: "zh-CN", hr: "hr", cs: "cs", da: "da", nl: "nl", et: "et", fi: "fi", fr: "fr", de: "de", el: "el", he: "iw", hi: "hi", hu: "hu", id: "id", it: "it", ja: "ja", ko: "ko", lv: "lv", lt: "lt", ms: "ms", no: "no", fa: "fa", pl: "pl", pt: "pt-BR", ro: "ro", ru: "ru", sr: "sr", sk: "sk", sl: "sl", es: "es", sv: "sv", th: "th", tr: "tr", uk: "uk", vi: "vi"};
        return e[t] || null
    }
}, function (t) {
    t.exports = function (t) {
        var e = {th: 1, pl: 1, sl: 1, gl: 1, hu: 1, is: 1, nb: 1, se: 1, su: 1, sw: 1};
        return!!e[t]
    }
}, function (t, e, a) {
    var i = a(132);
    t.exports = function (t, e, a) {
        var o, n, s = window.addthis_translations;
        if (a = a || i(), "en" === a || !s)return t;
        for (o in s)for (n in s[o][0])if (s[o][0][n] === a && s[o].length > e && s[o][e])return s[o][e];
        return t
    }
}, function (t, e, a) {
    var i = a(45);
    t.exports = function o(t) {
        var e = window.addthis_translations;
        if (t && 0 !== i().indexOf("en"))try {
            e ? t(e) : setTimeout(function () {
                o(t)
            }, 100)
        } catch (a) {
        }
    }
}, function (t) {
    t.exports = function (t, e) {
        var a, i, o, n, s, l, r, h;
        for (a = 3 & t.length, i = t.length - a, o = e, s = 3432918353, l = 461845907, h = 0; i > h;)r = 255 & t.charCodeAt(h) | (255 & t.charCodeAt(++h)) << 8 | (255 & t.charCodeAt(++h)) << 16 | (255 & t.charCodeAt(++h)) << 24, ++h, r = (65535 & r) * s + (((r >>> 16) * s & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (65535 & r) * l + (((r >>> 16) * l & 65535) << 16) & 4294967295, o ^= r, o = o << 13 | o >>> 19, n = 5 * (65535 & o) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295, o = (65535 & n) + 27492 + (((n >>> 16) + 58964 & 65535) << 16);
        switch (r = 0, a) {
            case 3:
                r ^= (255 & t.charCodeAt(h + 2)) << 16;
            case 2:
                r ^= (255 & t.charCodeAt(h + 1)) << 8;
            case 1:
                r ^= 255 & t.charCodeAt(h), r = (65535 & r) * s + (((r >>> 16) * s & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (65535 & r) * l + (((r >>> 16) * l & 65535) << 16) & 4294967295, o ^= r
        }
        return o ^= t.length, o ^= o >>> 16, o = 2246822507 * (65535 & o) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o ^= o >>> 13, o = 3266489909 * (65535 & o) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, o ^= o >>> 16, o >>> 0
    }
}, function (t, e, a) {
    function i() {
        var t = function (t, e) {
            return e
        }, e = t.bind(null, 1);
        return 0 !== e(0)
    }

    function o() {
        i() && n()
    }

    var n = a(137);
    t.exports = function () {
        o(), setTimeout(o, 0)
    }
}, function (t, e, a) {
    t.exports = function () {
        a.e(1, function () {
            a(67), a(33)(function () {
                a(66), addthis.layers({mobilesharemenu: !0, pi: !0}, function () {
                    var t = a(324);
                    t.trigger("addthis.layers.mobilesharemenu.show")
                })
            })
        })
    }
}, function (t, e, a) {
    function i() {
        if (window.parent === window)window.print(); else if (o)window.parent.postMessage("at-share-print", "*"); else {
            var t = s("win") ? "Control" : "Command", e = "Press <" + t + ">+P to print.";
            try {
                _ate.menu.close()
            } catch (a) {
            }
            alert(e)
        }
    }

    var o = a(61), n = a(9).listen, s = a(2);
    n(window, "message", function (t) {
        if ("at-share-print" === t.data) {
            try {
                _ate.menu.close()
            } catch (e) {
            }
            i()
        }
    }), t.exports = i
}, function (t) {
    t.exports = function (t) {
        var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
        return 1 !== t.length ? 0 / 0 : e.indexOf(t)
    }
}, function (module, exports, __webpack_require__) {
    module.exports = function evl(src, scope) {
        if (scope) {
            var evl;
            return eval("evl = " + src), evl
        }
        return eval(src)
    }
}, function (t) {
    t.exports = function (t) {
        if (null == t || "object" != typeof t)return t;
        if (t instanceof Object) {
            var e = "";
            for (var a in t)t.hasOwnProperty(a) && (e += (e.length > 0 ? "," : "") + t[a]);
            return e
        }
        return null
    }
}, function (t) {
    t.exports = function (t) {
        return t.replace(/^[a-zA-Z]+:/, "")
    }
}, function (t) {
    var e = Object.prototype.toString;
    t.exports = function (t) {
        return e.call(t)
    }
}]);;
// on document ready
(function($){
	"use strict";

	var globalDfd = $.Deferred();
	$(window).bind('load',function(){
		// after loading all the scripts
		globalDfd.resolve();
	});

	$(function(){

	$.fx.speeds._default = 500;

	// open dropdown

	$.fn.css3Animate = function(element){
		return $(this).on('click',function(e){
			var dropdown = element;
			$(this).toggleClass('active');
			e.preventDefault();
			if(dropdown.hasClass('opened')){
				dropdown.removeClass('opened').addClass('closed');
				setTimeout(function(){
					dropdown.removeClass('closed')
				},500);
			}else{
				dropdown.addClass('opened');
			}
		});
	}
	$('#lang_button').css3Animate($('#lang_button').next('.dropdown_list'));
	$('#currency_button').css3Animate($('#currency_button').next('.dropdown_list'));

	// waypoints helper functions

	$.fn.waypointInit = function(classN,offset,delay,inv){
		return $(this).waypoint(function(direction){
			var current = $(this);
			if(direction === 'down'){
				if(delay){
					setTimeout(function(){
						current.addClass(classN);
					},delay);
				}
				else{
					current.addClass(classN);
				}
			}else{
            	if(inv == true){
                    current.removeClass(classN);
             	}
            }
		},{ offset : offset })
	};

	// synchronise

	$.fn.waypointSynchronise = function(config){
		var element = $(this);
		function addClassToElem(el,eq){
			el.eq(eq).addClass(config.classN);
		}
		element.closest(config.container).waypoint(function(direction){
		 	element.each(function(i){
				if(direction === 'down'){

		 			if(config.globalDelay != undefined){
		 				setTimeout(function(){
		 					setTimeout(function(){
		 						addClassToElem(element,i);
		 					},i * config.delay);
		 				},config.globalDelay);
		 			}else{
		 				setTimeout(function(){
		 					addClassToElem(element,i)
		 				},i * config.delay);
		 			}

				}else{
					
					if(config.inv){
						setTimeout(function(){
							element.eq(i).removeClass(config.classN);
						},i * config.delay);
					}

				}
			});
		},{ offset : config.offset });
		return element;
	};

	// animation main page

	(function(){
		globalDfd.done(function(){
		$('.products_container:not(.a_type_2) .photoframe.animate_ftb').waypointSynchronise({
			container : '.products_container',
			delay : 200,
			offset : 700,
			classN : "animate_vertical_finished"
		});
		$('.products_container.a_type_2 .photoframe.animate_ftb').waypointSynchronise({
			container : '.products_container',
			delay : 200,
			offset : 700,
			classN : "animate_vertical_finished"
		});
		$('.wfilter_carousel .photoframe.animate_ftb').waypointSynchronise({
			container : '.wfilter_carousel',
			delay : 200,
			offset : 700,
			classN : "animate_vertical_finished"
		});
		$('.bestsellers_carousel .photoframe.animate_ftb').waypointSynchronise({
			container : '.bestsellers_carousel',
			delay : 200,
			offset : 700,
			globalDelay : 400,
			classN : "animate_vertical_finished"
		});
		$('.banner_type_2[class*="animate_ft"]').waypointSynchronise({
			container : '.row',
			delay : 200,
			offset : 800,
			classN : "animate_vertical_finished"
		});
		$('.animate_half_tc').waypointSynchronise({
			container : '.row',
			delay : 0,
			offset : 830,
			classN : "animate_horizontal_finished"
		});
		$('.heading2').waypointInit('animate_sj_finished animate_fade_finished','800px');
		$('.nav_buttons_wrap.animate_fade').waypointInit('animate_sj_finished animate_fade_finished','800px');
		$('.product_brands a.animate_fade').waypointSynchronise({
			container : '.product_brands',
			delay : 200,
			offset : 830,
			classN : "animate_sj_finished animate_fade_finished"
		});
        $('.product_brands_home5 a.animate_fade').waypointSynchronise({
            container : '.product_brands_home5',
            delay : 200,
            offset : 830,
            classN : "animate_sj_finished animate_fade_finished"
        });

		$('.blog_carousel a.photoframe').waypointSynchronise({
			container : '.blog_animate.animate_ftr',
			delay : 0,
			offset : 830,
			classN : "animate_vertical_finished"
		});
		$('.blog_carousel .mini_post_content > .animate_ftr').waypointSynchronise({
			container : '.blog_animate.animate_ftr',
			delay : 200,
			offset : 830,
			classN : "animate_horizontal_finished"
		});
		$('.blog_animate.animate_ftr').waypointInit('animate_horizontal_finished','800px');
		$('.ti_animate.animate_ftr').waypointInit('animate_horizontal_finished','800px',1000);
		$('.testiomials_carousel .animate_ftr:first').waypointInit('animate_horizontal_finished','851px',1200);
		$('.testiomials_carousel .animate_ftr:nth-child(2)').waypointInit('animate_horizontal_finished','973px',1400);
		$('.testiomials_carousel .animate_ftr:nth-child(3)').waypointInit('animate_horizontal_finished','987px',1600);
		$('.heading1.animate_ftr').waypointInit('animate_horizontal_finished','1000px');
		$('.isotope_menu > li.animate_ftr').waypointSynchronise({
			container : '.isotope_menu',
			delay : 200,
			offset : 1000,
			classN : "animate_horizontal_finished"
		});
		$('.flexslider.animate_ftr').waypointInit('animate_horizontal_finished','1000px');
		setTimeout(function(){
			$('.s_banners .d_block.animate_ftr').waypointSynchronise({
				container : '.s_banners',
				delay : 300,
				offset : 830,
				classN : "animate_horizontal_finished"
			});
		},200);
		$('.widget.animate_ftr').waypointInit('animate_horizontal_finished','800px',200);
		$('.heading5').waypointInit('animate_horizontal_finished','800px');
		$('.banner.animate_ftr').waypointSynchronise({
			container : '.row',
			delay : 200,
			offset : 1000,
			globalDelay : 800,
			classN : "animate_horizontal_finished"
		});
		$('.nc_carousel .photoframe.animate_ftb').waypointSynchronise({
			container : '.nc_carousel',
			delay : 200,
			offset : 700,
			classN : "animate_vertical_finished"
		});
		$('.info_blocks_container .animate_ftr').waypointSynchronise({
			container : '.info_blocks_container',
			delay : 200,
			offset : 700,
			classN : "animate_vertical_finished"
		});
		$('.our_recent_work_carousel .animate_ftb').waypointSynchronise({
			container : '.our_recent_work_carousel',
			delay : 200,
			offset : 700,
			classN : "animate_vertical_finished"
		});
            $('.our_latest_work_carousel .animate_ftb').waypointSynchronise({
                container : '.our_latest_work_carousel',
                delay : 200,
                offset : 700,
                classN : "animate_vertical_finished"
            });
		$('.p_tables .animate_fade').waypointSynchronise({
			container : '.p_tables',
			delay : 200,
			offset : 700,
			classN : "animate_fade_finished"
		});
		$('.animate_corporate_container .animate_fade').waypointSynchronise({
			container : '.animate_corporate_container',
			delay : 200,
			offset : 700,
			classN : "animate_fade_finished"
		});
		
		// sticky menu

		window.sticky = function(){
			var container = $('[role=banner] .h_bot_part'),
				offset = container.closest('[role="banner"]').hasClass('type_5') ? 0 : -container.outerHeight(),
				menu = $('.menu_wrap'),
				mHeight = menu.outerHeight();
			container.waypoint(function(direction){
				var _this = $(this);
				if(direction == "down"){
					menu.addClass('sticky');
					container.parent('[role="banner"]').css('border-bottom',mHeight + "px solid transparent");
				}else if(direction == "up"){
					menu.removeClass('sticky');
					container.parent('[role="banner"]').css('border-bottom','none');
				}
			},{offset :  offset});

			function getMenuWidth(){
				if(menu.hasClass('type_2')){
					menu.css('width',menu.parent().width());
				}
			}
			getMenuWidth();
			$(window).on('resize',getMenuWidth);
		};
		sticky();

		});
	})();

	// jackbox


	/*(function(){

		if($(".jackbox[data-group]").length){
			jQuery(".jackbox[data-group]").jackBox("init",{
				    showInfoByDefault: false,
				    preloadGraphics: true, 
				    fullscreenScalesContent: true,
				    autoPlayVideo: true,
				    flashVideoFirst: false,
				    defaultVideoWidth: 960,
				    defaultVideoHeight: 540,
				    baseName: "jackbox",
				    className: ".jackbox",
				    useThumbs: true,
				    thumbsStartHidden: false,
				    thumbnailWidth: 75,
				    thumbnailHeight: 50,
				    useThumbTooltips: true,
				    showPageScrollbar: false,
				    useKeyboardControls: true 
			});
		}

	})();*/



	// remove products from shopping cart
	
	$('[role="banner"]').on('click','.close_product',function(){
		$(this).closest('li').animate({'opacity':'0'},function(){
			$(this).slideUp(500);
		});
	});

	// shopping cart hover
	
$('#shopping_button').on('mouseenter',function(){
  $(this).css('z-index','300');
 }).on('mouseleave',function(){
  $(this).css('z-index','189');
 });

	// searchform

	(function(){
		$('[role="banner"]').on('click','.search_button',function(){
			$('.searchform_wrap').addClass('opened');
		});
		$('[role="banner"]').on('click','.close_search_form',function(){
			$('.searchform_wrap').removeClass('opened').addClass('closed');
			setTimeout(function(){
				$('.searchform_wrap').removeClass('closed');
			},400)
		});
	})();

	// ie9 placeholder

	(function(){
		if($('html').hasClass('ie9')) {
			$('input[placeholder]').each(function(){
				$(this).val($(this).attr('placeholder'));
				var v = $(this).val();
				$(this).on('focus',function(){
					if($(this).val() === v){
						$(this).val("");
					}
				}).on("blur",function(){
					if($(this).val() == ""){
						$(this).val(v);
					}
				});
			});
			
		}
	})();

	// revolution slider

	/*
	if($('.r_slider').length){
	    var api = $('.r_slider').revolution({
	         delay:5000,
	         startwidth:1140,
	         startheight:500,
	         autoHeight:"off",
	         fullScreenAlignForce:"off",
	 
	         onHoverStop:"on",
	 
	         thumbWidth:100,
	         thumbHeight:50,
	         thumbAmount:3,
	 
	         hideThumbsOnMobile:"off",
	         hideBulletsOnMobile:"off",
	         hideArrowsOnMobile:"off",
	         hideThumbsUnderResoluition:0,

	 		 hideTimerBar:"on",
	         hideThumbs:0,
	 
	         navigationType:"bullet",
	         navigationArrows:"solo",
	         navigationStyle:"round",
	 
	         navigationHAlign:"center",
	         navigationVAlign:"bottom",
	         navigationHOffset:0,
	         navigationVOffset:15,
	 
	         soloArrowLeftHalign:"left",
	         soloArrowLeftValign:"center",
	         soloArrowLeftHOffset:40,
	         soloArrowLeftVOffset:0,
	 
	         soloArrowRightHalign:"right",
	         soloArrowRightValign:"center",
	         soloArrowRightHOffset:40,
	         soloArrowRightVOffset:0,
	 
	 
	         touchenabled:"on",
	 
	         stopAtSlide:-1,
	         stopAfterLoops:-1,
	         hideCaptionAtLimit:0,
	         hideAllCaptionAtLilmit:0,
	         hideSliderAtLimit:0,
	 
	         dottedOverlay:"none",
	 
	         fullWidth:"off",
	         forceFullWidth:"off",
	         fullScreen:"off",
	         fullScreenOffsetContainer:"#topheader-to-offset",
	 
	         shadow:0
	 
	    });
		api.bind("revolution.slide.onloaded",function (e,data) {
		    var container = $('.revolution_slider');
		    container.find('.tp-leftarrow').append('<i class="fa fa-angle-left"></i>');
		    container.find('.tp-rightarrow').append('<i class="fa fa-angle-right"></i>');
		    // $('.tp-leftarrow,.tp-rightarrow').fadeIn(1500);

		    // create custom thumbs

		   	(function(){
		   		var image = $('.r_slider [data-custom-thumb]'),
		   			len = image.length,
		   			bullet = $('.tp-bullets .bullet');
		   		for(var i = 0; i < len; i++){
		   			bullet.eq(i).append('<div class="custom_thumb tr_all_hover"><img src="' + image.eq(i).data('custom-thumb') + '" alt=""></div>');
		   		}
		   	})();

			$('.tp-bullets .bullet').each(function(){
				var curr = $(this);
				curr.on("mouseenter mouseleave",function(){
					curr.children('.custom_thumb').toggleClass('active')
				});
			});
		});

	}
	*/

	// create custom thumbs

   	(function(){
   		var image = $('.slider-revolution [data-custom-thumb]'),
   			len = image.length,
   			bullet = $('.tp-bullets .bullet');
   		for(var i = 0; i < len; i++){
   			bullet.eq(i).append('<div class="custom_thumb tr_all_hover"><img src="' + image.eq(i).data('custom-thumb') + '" alt=""></div>');
   		}
   	})();

   	$('.tp-bullets .bullet').each(function(){
		var curr = $(this);
		curr.on("mouseenter mouseleave",function(){
			curr.children('.custom_thumb').toggleClass('active')
		});
	});


	// carousel with filter
	
	(function(){

		var cwf = $('.wfilter_carousel'),
			prev = $('.wfilter_prev'),
			next = $('.wfilter_next'),
			filter = $('[data-carousel-filter]'),
			elements = [],
			item = cwf.find('.photoframe'),
			len = item.length;

		if(cwf.length){

			var cf = cwf.owlCarousel({
				itemsCustom : [[1199,4],[992,4],[768,3],[590,2],[300,1]],
		 		autoPlay : false,
		 		slideSpeed : 1000,
		 		autoHeight : true
			});

		 	prev.on('click',function(){
		 		cf.trigger('owl.prev');
		 	});
		 	next.on('click',function(){
		 		cf.trigger('owl.next');
		 	});

		 	for(var i = 0; i < len; i++){
		 		elements.push(item.eq(i)[0].outerHTML);
		 	}
		 	

		 	filter.on('click','li',function(){
		 		var	self = $(this),
		 			activeElem = self.children('[data-filter]').data('filter');
		 		cwf.addClass('changed').find('.owl-wrapper').animate({
		 			opacity : 0
		 		},function(){
		 			var s = $(this);
		 			cwf.children().remove();
		 			if(activeElem == "*"){
		 				$.each(elements,function(i,v){
		 					cwf.append(v);
			 			});
		 			}else{
			 			$.each(elements,function(i,v){
			 				if(v.indexOf(activeElem) !== -1){
			 					cwf.append(v);
			 				}
			 			});
		 			}
		 			cwf.data('owlCarousel').destroy();
		 			cwf.owlCarousel({
		 				itemsCustom : [[1199,4],[992,4],[768,3],[590,2],[300,1]],
				 		autoPlay : false,
				 		slideSpeed : 1000,
				 		autoHeight : true,
				 		afterInit: function(){
				 			cwf.addClass('no_children_animate');
				 		}
		 			});
		 			$(window).trigger('resize');
		 		});
		 		self.closest('li').addClass('active').siblings().removeClass('active');
		 	});
		}

	})();

	// bestsellers carousel

	(function(){

		var bsc = $('.bestsellers_carousel');
		if(bsc.length){
			var bs = bsc.owlCarousel({
		 		itemsCustom : [[1199,4],[992,4],[768,3],[590,2],[300,1]],
		 		autoPlay : false,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

		 	$('.bestsellers_prev').on('click',function(){
		 		bs.trigger('owl.prev');
		 	});

		 	$('.bestsellers_next').on('click',function(){
		 		bs.trigger('owl.next');
		 	});
		}

	})();

	// our_recent_work_carousel

	(function(){
		var orw = $('.our_recent_work_carousel');
		if(orw.length){
			var orwc = orw.owlCarousel({
		 		itemsCustom : [[1199,3],[992,3],[768,3],[421,2],[10,1]],
		 		autoPlay : false,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

		 	$('.orw_prev').on('click',function(){
		 		orwc.trigger('owl.prev');
		 	});

		 	$('.orw_next').on('click',function(){
		 		orwc.trigger('owl.next');
		 	});
		}
	})();
        (function(){
            var orw_latest = $('.our_latest_work_carousel');
            if(orw_latest.length){
                var orwc = orw_latest.owlCarousel({
                    itemsCustom : [[1199,2],[992,2],[768,2],[421,1],[10,1]],
                    autoPlay : false,
                    slideSpeed : 1000,
                    autoHeight : true
                });

                $('.orw_prev').on('click',function(){
                    orwc.trigger('owl.prev');
                });

                $('.orw_next').on('click',function(){
                    orwc.trigger('owl.next');
                });
            }
        })();

	// new collections carousel

	(function(){

		var ncc = $('.nc_carousel');
		if(ncc.length){
			var nc = ncc.owlCarousel({
		 		itemsCustom : [[1199,3],[992,3],[768,3],[575,2],[300,1]],
		 		autoPlay : false,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

		 	$('.nc_prev').on('click',function(){
		 		nc.trigger('owl.prev');
		 	});

		 	$('.nc_next').on('click',function(){
		 		nc.trigger('owl.next');
		 	});
		}

	})();



	// camera slideshow

	(function(){
		var	cs = $('.camera_wrap');

		if(cs.length){

			cs.camera({ 
				height: '41%',
				navigation: true,
				pagination: true,
				playPause:false,
				thumbnails: false,
				time: 4000,
				transPeriod : 1000,
				navigationHover: false,
				onLoaded: function() {
					var image = $('.camera_wrap .camera_src > [data-src]'),
			   			len = image.length,
			   			bullet = $('.camera_wrap .camera_pag_ul > li');
			   		if(bullet.find('.custom_thumb').length) return;
			   		for(var i = 0; i < len; i++){
			   			bullet.eq(i).append('<div class="custom_thumb tr_all_hover"><img src="' + image.eq(i).data('custom-thumb') + '" alt=""></div>');
			   		}
			   		bullet.on("mouseenter mouseleave",function(){
			   			$(this).children('.custom_thumb').toggleClass("active");
			   		});
				}
			});

			cs.find('.camera_prev').append('<i class="fa fa-angle-left"></i>');
			cs.find('.camera_next').append('<i class="fa fa-angle-right"></i>');
		}
	})();

	// rating

	$('body').on('click','.rating_list li',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active').prevAll().addClass('active');
	});

	// product brands carousel

	(function(){
		if($('.product_brands').length){
		 	var pb = $(".product_brands").owlCarousel({
		 		itemsCustom : $('.product_brands').hasClass('with_sidebar') ? [[1199,4],[992,4],[768,3],[480,3],[300,2]] : [[1199,6],[992,5],[768,4],[480,3],[300,2]],
		 		autoPlay : true,
		 		stopOnHover : true,
		 		slideSpeed : 600,
		 		addClassActive : true
		 	});

		 	$('.pb_prev').on('click',function(){
		 		pb.trigger('owl.prev');
		 	});

		 	$('.pb_next').on('click',function(){
		 		pb.trigger('owl.next');
		 	});
		}
	})();

    (function(){
        if($('.product_brands_home5').length){
            var pb = $(".product_brands_home5").owlCarousel({
                itemsCustom : $('.product_brands_home5').hasClass('with_sidebar') ? [[1199,3],[992,3],[768,3],[480,2],[300,2]] : [[1199,3],[992,3],[768,3],[480,2],[300,2]],
                autoPlay : true,
                stopOnHover : true,
                slideSpeed : 600,
                addClassActive : true
            });

            $('.pb_prev').on('click',function(){
                pb.trigger('owl.prev');
            });

            $('.pb_next').on('click',function(){
                pb.trigger('owl.next');
            });
        }
    })();

	// blog carousel

	(function(){
		if($('.blog_carousel').length){
			var blog = $('.blog_carousel').owlCarousel({
		 		singleItem : true,
		 		stopOnHover : true,
		 		slideSpeed : 600,
		 		autoHeight : true,
		 		transitionStyle : "backSlide"
		 	});
		}

		$('.blog_prev').on('click',function(){
			blog.trigger('owl.prev');
		});

		$('.blog_next').on('click',function(){
			blog.trigger('owl.next');
		});

	})();

	// testimonials

	(function(){
		if($('.testiomials_carousel').length){
			var tc = $('.testiomials_carousel').owlCarousel({
		 		singleItem : true,
		 		autoPlay : false,
		 		stopOnHover : true,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

			$('.ti_prev').on('click',function(){
				tc.trigger('owl.prev');
			});

			$('.ti_next').on('click',function(){
				tc.trigger('owl.next');
			});
		}

	})();
	(function(){
		if($('.testiomials_carousel_2').length){
			var tc = $('.testiomials_carousel_2').owlCarousel({
		 		singleItem : true,
		 		autoPlay : false,
		 		stopOnHover : true,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

			$('.ti_2_prev').on('click',function(){
				tc.trigger('owl.prev');
			});

			$('.ti_2_next').on('click',function(){
				tc.trigger('owl.next');
			});
		}

	})();

	// go to top button

	(function(){
		$('#go_to_top').waypointInit('animate_horizontal_finished','0px',0,true);
		$('#go_to_top').on('click',function(){
			$('html,body').animate({
				scrollTop : 0
			},500);
		});
	})();

	// social widgets

	(function(){
		$('.sw_button').on('click',function(){
			$(this).parent().toggleClass('opened').siblings().removeClass('opened');
		});
	})();

	// responsive menu

	window.rmenu = function(){

	var	nav = $('nav[role="navigation"]'),
	header = $('[role="banner"]');

	var rMenu = new Object();

	rMenu.init = function(){
	rMenu.scrollWidth = rMenu.checkScrollWidth();
	rMenu.checkWindowSize();
	$(window).on('resize',rMenu.checkWindowSize);
	}

	rMenu.checkScrollWidth = function(){

	var element = document.createElement("div");
	element.className = "scrollwidth";
	document.body.appendChild(element);
	return element.offsetWidth - element.clientWidth;

	}

	rMenu.checkWindowSize = function(){

	if($(window).width() + rMenu.scrollWidth < 768){
	rMenu.Activate();
	nav.find('.touch_open_sub,.current_click').removeClass('touch_open_sub current_click').children('a').removeClass('prevented');
	}
	else if($(window).width() + rMenu.scrollWidth  > 767){
	rMenu.Deactivate();
	}

	}
	// add click events
	rMenu.Activate = function(){

	if($('html').hasClass('md_touch')) header.off('.touch');

	header.off('click').on('click.responsivemenu','#menu_button',rMenu.openClose);

	header.on('click.responsivemenu','.main_menu li a',rMenu.openCloseSubMenu);

	$('.sub_menu_wrap').hide();

	nav.find('.touch_open_sub').removeClass('touch_open_sub').children('a').removeClass('prevented');

	}
	// remove click events
	rMenu.Deactivate = function(){

	header.off('.responsivemenu');

	nav.show().find('li').removeClass('current_click')
	.end().find('.sub_menu_wrap').show().end().find('.prevented').removeClass('prevented').end()
	.find('.touch_open_sub').removeClass('touch_open_sub');

	$('#menu_button').removeClass('color_grey_light_2').addClass('color_blue');

	if($('html').hasClass('md_touch')) header.off('click').on('click.touch','.main_menu li a',rMenu.touchOpenSubMenu);

	}

	rMenu.openClose = function(){

	$(this).toggleClass('active');
	nav.stop().slideToggle();

	}

	rMenu.openCloseSubMenu = function(e){

	var self = $(this);

	if(self.next('.sub_menu_wrap').length){
	self.parent()
	.addClass('current_click')
	.siblings()
	.removeClass('current_click')
	.children(':not(a)')
	.slideUp();
	self.next().stop().slideToggle();
	self.parent().siblings().children('a').removeClass('prevented');

	if(!(self.hasClass('prevented'))){
	e.preventDefault();
	self.addClass('prevented');
	}else{
	self.removeClass('prevented');
	}
	}

	}

	rMenu.touchOpenSubMenu = function(event){
	var self = $(this);

	if(self.next('.sub_menu_wrap').length){

	if(!(self.hasClass('prevented'))){
	event.preventDefault();
	self.addClass('prevented');
	}else{
	self.removeClass('prevented');
	}

	$(this).parent().toggleClass('touch_open_sub').siblings().removeClass('touch_open_sub').children('a').removeClass('prevented')
	.parent().find('.touch_open_sub').removeClass('touch_open_sub').children('a').removeClass('prevented');

	}
	}

	rMenu.init();
	}

	rmenu();
	
	// custom select

	(function(){

		$('.custom_select').each(function(){
			var list = $(this).children('ul'),
				select = $(this).find('select'),
				title = $(this).find('.select_title');
			title.css('min-width',title.outerWidth());

			// select items to list items

			if($(this).find('[data-filter]').length){
				for(var i = 0,len = select.children('option').length;i < len;i++){
					list.append('<li data-filter="'+select.children('option').eq(i).data('filter')+'" class="tr_delay_hover">'+select.children('option').eq(i).text()+'</li>')
				}
			}
			else{
				for(var i = 0,len = select.children('option').length;i < len;i++){
					list.append('<li class="tr_delay_hover">'+select.children('option').eq(i).text()+'</li>')
				}
			}
			select.hide();

			// open list
			
			title.on('click',function(){
				list.slideToggle(400);
				$(this).toggleClass('active');
			});

			// selected option

			list.on('click','li',function(){
				var val = $(this).text();
				title.text(val);
				list.slideUp(400);
				select.val(val);
				title.toggleClass('active');
			});

		});

	})();

	// widgets

	(function(){
		var slider;
		if($('#price').length){
			slider = $('#price').slider({
			 	orientation: "horizontal",
				range: true,
				values: [ 0, 237 ],
				min: 0,
				max: 250,
				slide : function(event ,ui){
					$(this).next().find('.first_limit').val('$' + ui.values[0]);
					$(this).next().find('.last_limit').val('$' + ui.values[1]);
				}
			});
		}

		var color = $('.select_color').on('click',function(){
			$(this).addClass('active').parent().siblings().children('button').removeClass('active');
		});

		$('.close_fieldset').on('click',function(){
			$(this).closest('fieldset').animate({
				'opacity':'0'
			},function(){
				$(this).slideUp();
			});
		});

		$('button[type="reset"]:not(#styleswitcher button[type="reset"])').on('click',function(){
			color.eq(0).addClass('active').parent().siblings().children('button').removeClass('active');
			slider.slider( "option", "values", [ 0, 237 ] );
		});

		$('.categories_list').on('click','a',function(e){
			if($(this).parent().children('ul').length){
				$(this).parent().toggleClass('active').end().next().slideToggle();
				e.preventDefault();
			}
		});

		$('.categories_list > li > a').on('click',function(e){
			if($(this).parent().children('ul').length){
				$(this).toggleClass('scheme_color').toggleClass('color_dark');
				e.preventDefault();
			}
		});

	})();

	// twitter

	/*(function(){
		$('.twitterfeed').tweet({
			username: 'fanfbmltemplate',
			modpath : 'twitter/',
	        count: 2,
	        loading_text: 'loading twitter feed...',
	        template: '<a class="color_dark" href="{user_url}">@{screen_name}</a> {text}<div>{time}</div><ul class="horizontal_list clearfix tw_buttons"><li>{reply_action}</li><li class="m_left_5">{retweet_action}</li><li class="m_left_5">{favorite_action}</li></ul>'
	    });
	})();*/

	// quick view carousel

	(function(){
		var qvc = $('.qv_carousel'),
			qvcsingle = $('.qv_carousel_single');
		if(qvc.length){
			var qv = qvc.owlCarousel({
				items: 3,
		 		autoPlay : false,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

			$('.qv_btn_prev').on('click',function(){
				qv.trigger('owl.prev');
			});

			$('.qv_btn_next').on('click',function(){
				qv.trigger('owl.next');
			});
		}
		if(qvcsingle.length){
			var qvcs = qvcsingle.owlCarousel({
				itemsCustom : [[1199,3],[992,3],[768,3],[480,3],[300,3]],
		 		autoPlay : false,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

			$('.qv_btn_single_prev').on('click',function(){
				qvcs.trigger('owl.prev');
			});

			$('.qv_btn_single_next').on('click',function(){
				qvcs.trigger('owl.next');
			});
		}

	})();

	// quantity

	(function(){
		
		$('.quantity').on('click','button',function(){
			var data = $(this).data('direction'),
				i = $(this).parent().children('input[type="text"]'),
				val = i.val();
			if(data == "up"){
				val++;
				i.val(val);
			}else if(data == "down"){
				if(val == 1) return;
				val--;
				i.val(val);
			}
		});

	})();

	// popup  

	(function(){

		$('.popup').on('popup/position',function(){
			var _this = $(this),
			pos = setTimeout(function(){
				var mt = _this.outerHeight() / -2,
					ml = _this.outerWidth() / -2;
				_this.css({
					'margin-left':ml,
					'margin-top':mt
				});
				clearTimeout(pos);
			},100);
		});

		var close = $('.popup > .close');
		if($('[data-popup]').length){
			$("body").on('click','[data-popup]',function(e){
				var popup = $(this).data('popup'),
					pc = $(popup).find('.popup');

				pc.trigger('popup/position');

				$(popup).fadeIn(function(){
					var scroll = $('.custom_scrollbar');
					if(scroll.length){
						var isVisible = setInterval(function(){
							if(scroll.is(':visible')){
								scroll.customScrollbar({
									preventDefaultScroll: true
								});
								clearInterval(isVisible);
							}
						},100);
					}


					$(popup).on('click',function(e){
						if($(e.target).hasClass('popup_wrap')){
							$(this).fadeOut();
						}
					});
				});
				e.preventDefault();
			});
		}
		close.on('click',function(){
			$(this).closest('.popup_wrap').fadeOut();
		});
	})();

	// tabs

	(function(){
		var tabs = $('.tabs');
		if(tabs.length){
			tabs.tabs({
				beforeActivate: function(event, ui) {
			        var hash = ui.newTab.children("li a").attr("href");
			        window.location.hash = hash;
			   	},
				hide : {
					effect : "fadeOut",
					duration : 450
				},
				show : {
					effect : "fadeIn",
					duration : 450
				}
			});
		}
	})();

	// accordion & toggle

	(function(){

		var aItem = $('.accordion:not(.toggle) .accordion_item'),
			link = aItem.find('.a_title'),
			aToggleItem = $('.accordion.toggle .accordion_item'),
			tLink = aToggleItem.find('.a_title');

		aItem.add(aToggleItem).children('.a_title').not('.active').next().hide();


		link.on('click',function(){

			 $(this).removeClass('bg_light_color_1 color_dark')
				.addClass('active color_light')
				.next().stop().slideDown()
				.parent().siblings()
				.children('.a_title')
				.removeClass('active color_light')
				.addClass('bg_light_color_1 color_dark')
				.next().stop().slideUp();

		});

		tLink.on('click',function(){
			$(this).toggleClass('active color_light bg_light_color_1 color_dark')
					.next().stop().slideToggle();

		})

	})();

	// related projects

	(function(){
		var rp = $('.related_projects');
		if(rp.length){
			var qv = rp.owlCarousel({
				itemsCustom : rp.hasClass("product_full_width") ? [[1199,4],[992,4],[768,3],[480,1],[300,1]] : [[1199,3],[992,3],[768,3],[480,1],[300,1]],
		 		autoPlay : false,
		 		slideSpeed : 1000,
		 		autoHeight : true
		 	});

			$('.rp_prev').on('click',function(){
				qv.trigger('owl.prev');
			});

			$('.rp_next').on('click',function(){
				qv.trigger('owl.next');
			});
		}

	})();

	// block select

	(function(){
		var b = $('.block_select');

		b.each(function(){
			var _this = $(this);
			if(_this.find('input[type="radio"]').is(':checked')) _this.addClass('selected');
		});
		b.on('click',function(){
			$(this)
				.addClass('selected')
				.find('input[type="radio"]')
				.prop('checked',true)
				.end()
				.siblings('.selected')
				.removeClass('selected')
		});

	})();

	// special carousel

	(function(){

		var sc = $('.specials_carousel');
		if(sc.length){
			var spc = sc.owlCarousel({
				// singleItem : true,
				itemsCustom : [[1199,1],[992,1],[768,1],[480,2],[300,1]],
		 		autoPlay : false,
		 		slideSpeed : 500,
		 		autoHeight : true,
		 		transitionStyle : "backSlide"
		 	});

			$('.sc_prev').on('click',function(){
				spc.trigger('owl.prev');
			});

			$('.sc_next').on('click',function(){
				spc.trigger('owl.next');
			});
		}

	})();

		function ellipsis(){
			var el = $('.ellipsis').hide();
				el.each(function(){
					var self = $(this);
					self.css({
						'width': self.parent().outerWidth(),
						'white-space' : 'nowrap'
					});
					self.show();
				});
			}
		ellipsis();
		$(window).on('resize',ellipsis);

		// contact form

		(function(){

			var cf = $('#contactform');
			cf.append('<div class="message_container d_none m_top_20"></div>');

			cf.on("submit",function(event){

				var self = $(this),text;

				var request = $.ajax({
					url:"bat/mail.php",
					type : "post",
					data : self.serialize()
				});

				request.then(function(data){
					if(data == "1"){

						text = "Your message has been sent successfully!";

						cf.find('input:not([type="submit"]),textarea').val('');

						$('.message_container').html('<div class="alert_box r_corners color_green success"><i class="fa fa-smile-o"></i><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});

					}
					else{
						if(cf.find('textarea').val().length < 20){
							text = "Message must contain at least 20 characters!"
						}
						if(cf.find('input').val() == ""){
							text = "All required fields must be filled!";
						}
						$('.message_container').html('<div class="alert_box r_corners error"><i class="fa fa-exclamation-triangle"></i><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
					}
				},function(){
					$('.message_container').html('<div class="alert_box r_corners error"><i class="fa fa-exclamation-triangle"></i><p>Connection to server failed!</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
				});


				event.preventDefault();
			});

		})();

		// newsletter

		(function(){

			var subscribe = $('#newsletter');
			subscribe.append('<div class="message_container_subscribe d_none m_top_20"></div>');
			var message = $('.message_container_subscribe'),text;

			subscribe.on('submit',function(e){
				var self = $(this);
				
				if(self.find('input[type="email"]').val() == ''){
					text = "Please enter your e-mail!";
					message.html('<div class="alert_box r_corners error"><i class="fa fa-exclamation-triangle"></i><p>'+text+'</p></div>')
						.slideDown()
						.delay(4000)
						.slideUp(function(){
							$(this).html("");
						});

				}else{
					self.find('span.error').hide();
					$.ajax({
						type: "POST",
						url: "bat/newsletter.php",
						data: self.serialize(), 
						success: function(data){
							if(data == '1'){
								text = "Your email has been sent successfully!";
								message.html('<div class="alert_box r_corners color_green success"><i class="fa fa-smile-o"></i><p>'+text+'</p></div>')
									.slideDown()
									.delay(4000)
									.slideUp(function(){
										$(this).html("");
									})
									.prevAll('input[type="email"]').val("");
							}else{
								text = "Invalid email address!";
								message.html('<div class="alert_box r_corners error"><i class="fa fa-exclamation-triangle"></i><p>'+text+'</p></div>')
									.slideDown()
									.delay(4000)
									.slideUp(function(){
										$(this).html("");
									});
							}
						}
					});
				}
				e.preventDefault();
			});

		})();

		//quick preview popup
		
		(function(){
			var pr = $('.popup_wrap .qv_preview > img');
			$('.popup_wrap .qv_carousel .owl-item:first-child li').addClass('active');
//			$('.popup_wrap .qv_carousel').on('click','li:not(.active)',function(){
//				$(this).addClass('active').parent().siblings().children('li').removeClass('active');
//				var src = $(this).data('src');
//				if(!($('html').hasClass('ie9'))){
//					pr.addClass('hide');
//					setTimeout(function(){
//						pr.attr('src',src).removeClass('hide');
//					},400);
//				}else{
//					pr.attr('src',src);
//	 			}
//				$('.popup_wrap [class*="qv_carousel"]').each(function(){
//					var pr = $(this).closest('.qv_carousel_wrap').prev('.qv_preview').children('img');
//					$(this).on('click','li',function(){
//						var src = $(this).data('src');
//						if(!($('html').hasClass('ie9'))){
//							pr.addClass('hide');
//							setTimeout(function(){
//								pr.attr('src',src).removeClass('hide');
//							},400);
//						}else{
//		 				pr.attr('src',src);
//						}
//					});
//		  		});
//		  	});
	  
	  	})();

		//elevate zoom

		(function(){

			if($('[data-zoom-image]').length){

				var button = $('.qv_preview [class*="button_type_"]');

				$("#zoom_image").elevateZoom({
					gallery:'qv_carousel_single',
				    zoomWindowFadeIn: 500,
					zoomWindowFadeOut: 500
				}); 

				button.on("click", function(e){
				  var ez = $('#zoom_image').data('elevateZoom');
					$.fancybox(ez.getGalleryList());
				  	e.preventDefault();
				});
			}

		})();

		// first letter

		(function(){

			var dp = $('[class*="first_letter"]');

			dp.each(function(){
				var self = $(this),
				fl = self.text().charAt(0);
				self.text(self.text().substr(1)).prepend('<span class="fl r_corners t_align_c f_left d_block">'+fl+'</span>');
			});

		})();

	});

	
	
	$(window).load(function(){

		function randomSort(selector,items){

			var sel = selector,
				it = items,
				random = [],
				len = it.length;
			it.removeClass('random');
			if(selector === ".random"){
		  		for(var i = 0; i < len; i++){
		  			random.push(+(Math.random() * len).toFixed());
		  		}
		  		$.each(random,function(i,v){
		  			items.eq(Math.floor(Math.random() * v - 1)).addClass('random');
		  		});
		  	}

		}

		// isotope 

		(function(){
			if($('.products_container').length){

				var container = $('.products_container');

				container.isotope({
				 	itemSelector : '.product_item',
					layoutMode : 'fitRows'
				});

				// filter items when filter link is clicked

				$('.isotope_menu').on('click','button',function(){
					var self = $(this),
					selector = self.attr('data-filter');
					randomSort.call(self,self.data('filter'),container.find('.product_item'));
				  	self.closest('li').addClass('active').siblings().removeClass('active');
				  	container.isotope({ filter: selector });
				});
			}

			// portfolio

			if($('.portfolio_isotope_container').length){

				var container = $('.portfolio_isotope_container');

				container.isotope({
					itemSelector : '.portfolio_item',
					layoutMode : 'fitRows'
				});

				$('#filter_portfolio').on('click','li',function(){
					$('#filter_portfolio li').removeClass('active');
					var self = $(this),
					selector = self.data('filter');
				  	container.isotope({ filter: selector });
					self.addClass('active');
				});


			}

			if($('.portfolio_masonry_container').length){

				var container1 = $('.portfolio_masonry_container');

				container1.isotope({
					itemSelector : '.portfolio_item',
					layoutMode : 'masonry',
					masonry: {
					  columnWidth: 10,
					  gutter:0
					}
				});

				$('#filter_portfolio').on('click','li',function(){
					$('#filter_portfolio li').removeClass('active');
					var self = $(this),
					selector = self.data('filter');
				  	container1.isotope({ filter: selector });
					self.addClass('active');
				});

			}

		})();

		// flexslider

		(function(){
			var flx = $('.flexslider:not(.simple_slide_show)');

			if(flx.length){
				flx.flexslider({
					animation : "slide",
					animationSpeed : 1000,
					prevText: "<i class='fa fa-angle-left'></i>",
					nextText: "<i class='fa fa-angle-right'></i>",
					slideshow:false,
					start: function(){
		   			var image = $('.flexslider [data-custom-thumb]'),
			   			len = image.length,
			   			bullet = $('.flex-control-nav li');
			   			for(var i = 0; i < len; i++){
			   				bullet.eq(i).append('<div class="custom_thumb tr_all_hover"><img src="' + image.eq(i).data('custom-thumb') + '" alt=""></div>');
			   			}
						$('.flex-control-nav li').each(function(){
							var curr = $(this);
							curr.on("mouseenter mouseleave",function(){
								curr.children('.custom_thumb').toggleClass('active')
							});
						});
						bullet.find('.custom_thumb').on('click',function(){
							return false;
						});
					}
				});
			}

		})();

		// simple slideshow

		(function(){

			var flx = $('.simple_slide_show');

			function showTitle(){
				var f = $(this),
					c = f.data('flexslider').currentSlide;
					
					f.find('.slides')
					.children('li')
					.eq(c+1)
					.children('.simple_s_caption')
					.addClass('active')
					.parent()
					.siblings()
					.children('.simple_s_caption')
					.removeClass('active');
			}
			if(flx.length){
				flx.each(function(){
					var curr = $(this);
					curr.flexslider({
						animation : "slide",
						animationSpeed : 1000,
						prevText: "<i class='fa fa-angle-left'></i>",
						nextText: "<i class='fa fa-angle-right'></i>",
						slideshow:true,
						controlNav:false,
						start:function(){
							showTitle.call(curr);
						},
						after:function(){
							showTitle.call(curr);
						}
					});
				});
			}

		})();

	});

})(jQuery);;

jQuery(document).ready(function() {
    // Add class contact form
    jQuery('.contact-form .form-text,.contact-form .form-textarea').addClass('f_size_medium m_bottom_10 r_corners full_width');
    jQuery('.contact-form .form-submit').addClass('m-top-20 button_type_4 r_corners mw_0 tr_all_hover color_dark bg_light_color_2');

    // Add class newsletter form
    jQuery('.block-newsletter .form-submit').addClass('m-top-20 button_type_8 r_corners bg_scheme_color color_light tr_all_hover');
    
    //Add class menu
    jQuery('.main_menu .active').parent().addClass('current');
    jQuery('.main_menu .active').removeClass('active');

    var container = jQuery('.slider-revolution');
    container.find('.tp-leftarrow').append('<i class="fa fa-angle-left"></i>');
    container.find('.tp-rightarrow').append('<i class="fa fa-angle-right"></i>');

    // Out of Stock
    jQuery('.out-of-stock').val('Out of Stock');
	
	jQuery('.pager-load-more .next a').html('Load More'); 
    
});

function viewCarousel(quick_view_product_id){
//    alert(quick_view_product_id);
    var pr = jQuery('#'+quick_view_product_id+' .qv_preview > img');
//    $('.popup_wrap .qv_carousel').on('click','li:not(.active)',function(){
            jQuery(this).addClass('active').parent().siblings().children('li').removeClass('active');
            var src = jQuery(this).data('src');
            if(!(jQuery('html').hasClass('ie9'))){
                    pr.addClass('hide');
                    setTimeout(function(){
                            pr.attr('src',src).removeClass('hide');
                    },400);
            }else{
                    pr.attr('src',src);
            }
            jQuery('#'+quick_view_product_id+' [class*="qv_carousel"]').each(function(){
                    var pr = jQuery(this).closest('.qv_carousel_wrap').prev('.qv_preview').children('img');
                    jQuery(this).on('click','li',function(){
                            var src = jQuery(this).data('src');
                            if(!(jQuery('html').hasClass('ie9'))){
                                    pr.addClass('hide');
                                    setTimeout(function(){
                                            pr.attr('src',src).removeClass('hide');
                                    },400);
                            }else{
                            pr.attr('src',src);
                            }
                    });
            });
//    });
}
(function($){
    $(document).ready(function(){

        $('#block-menu-menu-taxonomy-menu .categories_list > li:first-child > a').click();
        $('.view-product-interior-style-2 .views-row-even .col-sm-6:first-child').addClass('col-sm-push-6');
        $('.view-product-interior-style-2 .views-row-even .col-sm-6:last-child').addClass('col-sm-pull-6');
        //Scrool To
        $('nav#navigation-onepage a[href*=#]:not([href=#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('.sect_' + this.hash.slice(1));
                if (target.length) {
                    var scrollto = target.offset().top - 170;
                    $('html,body').animate({
                        scrollTop: scrollto
                    }, 1000);
                    return false;
                }
            }
        });
        $('.contact-wrapper .align-center a[href*=#]:not([href=#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('.sect_' + this.hash.slice(1));
                if (target.length) {
                    var scrollto = target.offset().top - 170;
                    $('html,body').animate({
                        scrollTop: scrollto
                    }, 1000);
                    return false;
                }
            }
        });
        var stickyNavTop = $('body').offset().top;
        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop && !$('.h-onepage').hasClass('fixed_header')) {
                $('.op-header').addClass('fixed_header');
                $('.h_top').addClass('fixed_header');

            } else if (scrollTop <= stickyNavTop + 15) {
                $('.h_top').removeClass('fixed_header');
                $('.op-header').removeClass('fixed_header');
            }
        };

        if ($('.h-onepage').length > 0) {
            $(window).scroll(function () {
                stickyNav();
            });
        }
        $('.navigation-onepage a').on('click', function() {
            $('.navigation-onepage a').removeClass('current');
            $(this).addClass('current');

        });
//reponsive menu onepage
        $('.b-onepage').click(function(){
            $('.navigation-onepage').toggle(800);
            $(this).toggleClass('active');

        })



    })


})(jQuery);
;
