# ASZ
测试项目









项目中遇到的问题：

	1：js写在一个文件里 如果其他页面没有js要找的dom报错怎么处理？

		页面a.html

			<div id="asd"></div>

		页面b.html

			<div></div>

		a,b页面都加载了index.js

		写个判断分支，判断当前的页面有没有要用的名字。

		if ( document.getElementById("asd") ){

		}

	2: 页面跳转后,页面停在中部？

		链接中有锚点(#)，去掉就好了。