"use strict";function asyncGeneratorStep(e,n,r,t,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void r(e)}c.done?n(i):Promise.resolve(i).then(t,o)}function _asyncToGenerator(c){return function(){var e=this,s=arguments;return new Promise(function(n,r){var t=c.apply(e,s);function o(e){asyncGeneratorStep(t,n,r,o,a,"next",e)}function a(e){asyncGeneratorStep(t,n,r,o,a,"throw",e)}o(void 0)})}}function myPromiseAjax(e){return _myPromiseAjax.apply(this,arguments)}function _myPromiseAjax(){return(_myPromiseAjax=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var t,o,n=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=1<n.length&&void 0!==n[1]?n[1]:{},o=2<n.length&&void 0!==n[2]?n[2]:"get",e.abrupt("return",new Promise(function(n,e){$.ajax({url:r,method:o,data:t,dataType:"json",success:function(e){n(e)},error:function(){e("请求失败")}})}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){var n,r;$("#userName").blur(function(){n=$(this).val()}),$("#psd").blur(function(){r=$(this).val()}),$(".login-btn").click(function(){_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,myPromiseAjax("../server/goods_login.php",{userName:n,userPwd:r},"post");case 3:1===e.sent.result&&(localStorage.setItem("username","".concat(n)),window.location.href="../html/index.html"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}))()})}();