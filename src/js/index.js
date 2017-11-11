require.config({
	baseUrl:'./libs',
	paths:{
		'jquery':'jquery',
		'swiper':'swiper',
		'woyaozufang':'../js/woyaozufang'
	},
	shim:{
		// 'fenye':{
		// 	deps: ['jquery'],
		// 	exports: 'pagination'
		// }
	}
});

require(['jquery','swiper','woyaozufang'],function($,Swiper,wyzf){

	// 首页

	// 轮播图
	var mySwiper = new Swiper ('.swiper-container',{
	    direction: 'horizontal',
	    loop: true,
	    // 如果需要前进后退按钮
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});  
	// 自动轮播
	$(function(){
		var timer = setInterval(you,5000);
		$('.lunbo').mouseenter(function() {
			$('.swiper-button-prev').css('display','block');
			$('.swiper-button-next').css('display','block');
		}).mouseleave(function() {
			$('.swiper-button-prev').css('display','none');
			$('.swiper-button-next').css('display','none');
		});;
	});
	// 封装点击效果
	function you(){
		$('.swiper-button-next').click();
	};

	// 品牌公寓，切换
	$('.apar-t>a').click(function(){
		$(this).css({
			background: '#f36',
			color: '#fff',
			border: '1px solid #f36'
		}).siblings('a').css({
			background: 'none',
			color: '#666',
			border: '1px solid #f4f4f4'
		});
		$('.apar-b').html('<section class="apar-b-l"><a href="##"' + aparAll[$(this).index()-1].backimg + '><section><h2>' + aparAll[$(this).index()-1].h2 + '</h2><h4>' + aparAll[$(this).index()-1].h4 + '</h4><p>' + aparAll[$(this).index()-1].p1 + '</p></section></a></section><section class="apar-b-r"><a href="##"><section><img src="' + aparAll[$(this).index()-1].imgs + '"></section></a><section class="apar-b-r-b"><p><a href="##">' + aparAll[$(this).index()-1].a + '</a><span>' + aparAll[$(this).index()-1].span + '</span></p><p>' + aparAll[$(this).index()-1].p2 + '</p></section></section>');
		// cosole.log($(this).index())
	});

	// 我要租房
	var terms = document.querySelector('.terms');
	if (terms) {
		$(function(){
			// 选项，点击，划过
			$('.terms').children('span').children('a').click(function() {
				$(this).addClass('active').siblings('a').removeClass('active');
			});

			// 下拉
			$('.up').click(function(){
				$('.tog').toggle();
			});

			// 广告
			$(window).scroll(function(){
				var winTop = $(window).scrollTop();
				var top = $('.lists-r-b').offset().top;
				var topHeight = $('.lists-r-t').offset().top + $('.lists-r-t').height();
				var lists = $('.lists').offset().top +  $('.lists').height() - $('.lists-r-b').height();
				if (winTop >= top && winTop < lists) {
					$('.lists-r-b').addClass('pos');
				};
				if (winTop < topHeight || winTop >= lists) {
					$('.lists-r-b').removeClass('pos');
				};
			});
			
		});
		

		// 动态创建，租房信息
		var str = '';
		var str1 = '';
		// for(var j = 0;j < wyzf.one.length; j++){
		// 	for(var i = 0 ;i < wyzf.one[j].tedian.length;i++){
		// 			str += '<i>'+wyzf.one[0].tedian[i]+'</i>';
		// 			console.log(str)
		// 	}
		// 	str1 += '<section class="lists-l-item"><section class="lists-l-item-img"><a href="##"><img src="'+wyzf.one[j].imgs+'"></a></section><section class="lists-l-item-info"><section class="lists-l-item-info-t"><a href="##" title="浙新小区 2室2厅1卫 南 14.jm² 精装修"><span>'+wyzf.one[j].span+'</span></a></section><section class="lists-l-item-info-c"><p><span><a href="##">'+wyzf.one[j].huxing+'</a></span><i>|</i><span><a href="##">'+wyzf.one[j].chaoxiang+'</a></span><i>|</i><span>'+wyzf.one[j].mianji+'</span><i>|</i><span>'+wyzf.one[j].louceng+'</span><i>|</i><span>'+wyzf.one[j].zhuang+'</span></p><p>'+wyzf.one[j].p+'</p></section><span class="pp">'+wyzf.one[j].jiage+'</span><section class="lists-l-item-info-b">'+str+'</section></section>'
		// }
		for(var i =0; i < wyzf.one.length;i++){
				str = '';
				for(var j = 0 ;j < wyzf.one[i].tedian.length;j++){
					str += '<i>'+wyzf.one[i].tedian[j]+'</i>';
				}
			$('.lists-l')[0].innerHTML += '<section class="lists-l-item"><section class="lists-l-item-img"><a href="##"><img src="'+wyzf.one[i].imgs+'"></a></section><section class="lists-l-item-info"><section class="lists-l-item-info-t"><a href="##" title="浙新小区 2室2厅1卫 南 14.im² 精装修"><span>'+wyzf.one[i].span+'</span></a></section><section class="lists-l-item-info-c"><p><span><a href="##">'+wyzf.one[i].huxing+'</a></span><i>|</i><span><a href="##">'+wyzf.one[i].chaoxiang+'</a></span><i>|</i><span>'+wyzf.one[i].mianji+'</span><i>|</i><span>'+wyzf.one[i].louceng+'</span><i>|</i><span>'+wyzf.one[i].zhuang+'</span></p><p>'+wyzf.one[i].p+'</p></section><span class="pp">'+wyzf.one[i].jiage+'</span><section class="lists-l-item-info-b">'+str+'</section></section>'
		}
		$('.lists-l-item').on('click', function(event) {
			// console.log(wyzf.one)
			var  index = $(this).index();
			console.log(index)
			window.location.href = '../xqy.html?index='+index;
			// alert(1);
		});
	}

    // 详情页
    var newObj = wyzf.one;

    console.log(newObj)
	if(!window.location.search){
		return;
	}
	var str = window.location.search;
	var obj =  getParam(str);
	console.log(newObj[obj.index]);

	$(function(){
		$('.house-info')[0].innerHTML = '<section class="house-img-c"><section class="house-info-name"><h1>锦润公寓</h1><h3>'+newObj[obj.index].span+'</h3></section><section class="house-img"><img src="'+newObj[obj.index].imgs+'"></section><section class="house-img-nav"></section></section><section class="house-info-c"><section class="house-info-wrap"><p>'+newObj[obj.index].jiage+'</span></p><section class="house-tag-lists"><span>品牌公寓</span><span>合租</span><span>智能锁</span></section></section><section class="border-info-top"><section class="house-attr clearFix"><section class="house-attr-c"><a href=""><p>'+newObj[obj.index].huxing+'</p></a><span>'+newObj[obj.index].louceng+'</span></section><section class="house-attr-c attr-center"><p>'+newObj[obj.index].mianji+'</p><span>面积</span></section><section class="house-attr-c" style="float: right;"><a href=""><p>'+newObj[obj.index].chaoxiang+'</p></a><span>精装修</span></section></section><section class="row clearFix"><label>付款方式：</label><a href="">可支持分期月付</a></section><section class="row clearFix"><label>小区地址：</label><a href="">江干区 - 火车东站 - 江干机场路与新风路口交叉口</a></section><section class="row clearFix"><label>小区信息：</label><span>2013年建 |  住宅</span><label>编号：</label><span>HZJG1610050020-02</span></section></section><section class="house-info-b clearFix"><img src="//web.static.ishangzu.com/pc/v3/assets/detail/avatar.png"><section class="person-info"><section class="person-name">张涛A<span>闸弄口店 - 闸弄口综合三组</span></section><section class="person-intro"><span>4000046501</span><span>转</span><span>8058</span></section></section></section></section>';
	})






	// window.location.href = '../d.html?index=' + index;
	// 			});
	// 		});
			
	// 		if(!window.location.search){
	// 			return;
	// 		}
	// 		var str = window.location.search;
	// 		var obj =  getParam(str);
	// 		console.log(arrd[obj.index]);
	function getParam(str){
	    var obj = {};
	    var arr = str.split('?')[1].split('&');
	    arr.forEach(function(val,index){
	        // decodeURI:解决url参数中文乱码
	        obj[val.split('=')[0]] = decodeURI(val.split('=')[1]);
	    });
	    return obj;
	}


	
	

	// 委托

	$(function(){
		// 委托
		$('.open').click(function() {
			$('.entrust').css({
				display: 'block'
			});
		});

		$('.close').click(function() {
			$('.entrust').css({
				display: 'none'
			});
		});
	});


});

var aparAll = [
	{backimg:'style="background: url(../images/ouyu.jpg) no-repeat 50%;"',h2:'偶寓',h4:'有故事的合租公寓',p1:'偶寓，是爱上租为广大青年租客设计推出的精装合租公寓，富有个性的装修风格，数次产品迭代升级，为租客用心打造温馨，舒适的居住环境。',imgs:'images/ouyu2.jpg',a:'2590元/月',span:' 耀江文鼎苑',p2:'15m² | 4/20F | 4室合租 |   朝南 |  精装修'},
	{backimg:'style="background: url(../images/suiyu.jpg) no-repeat 50%;"',h2:'随寓',h4:'自由温暖的整租公寓',p1:'随寓，是爱上租为城市高端白领精英和家庭打造的专属精装整租公寓，为高端人士、温馨家庭、亲密友人提供自由自在、温暖安心的独立私享空间',imgs:'images/suiyu2.jpg',a:'2650元/月',span:' 三墩新天地',p2:'45m² | 7/11F | 1室1厅1卫 |   精装修'},
	{backimg:'style="background: url(../images/jiyu.jpg) no-repeat 50%;"',h2:'集寓',h4:'文化主题单身公寓',p1:'是爱上租为当代文艺青年和追求品质生活的都市白领租客设计的主题式精装公寓产品，也是爱上租“集爱上租服务于一体”的360度全方位服务宗旨的完美诠释。',imgs:'images/jiyu2.jpg',a:'3000元/月',span:' 浦沿集寓',p2:'36m² | 12/14F | 1室0厅1卫 |   精装修'},
];