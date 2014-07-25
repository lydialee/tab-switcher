$.fn.tabs = function(control) {
	// element是被触发区域，control是被控制区域/响应区域
	var element = $(this)
	control = $(control)


	// 将click与element绑定，并委托给element内的所有li元素
	element.delegate('li', 'click', function() {
		var tabName = $(this).attr('data-tab')
		element.trigger('change.tabs', tabName)
	})
	
	// tab区域响应change.tabs事件
	element.bind('change.tabs', function(e, tabName) {
		element.find('li').removeClass('active')
		element.find(">[data-tab='" + tabName + "']").addClass('active')
	})

	// div区域响应change.tabs事件
	element.bind('change.tabs', function(e, tabName) {
		control.find('>[data-tab]').removeClass('active')
		control.find(">[data-tab='" + tabName + "']").addClass('active')
	})

	// 激活第一个元素/给第一对儿加上active样式
	var firstName = element.find('li:first').attr('data-tab')
	element.trigger('change.tabs', firstName)

	// 为什么要return this？
	// 初步猜想：为了链式编程
	return this
}

// usage
$('#tabs').tabs('#tabsContent')

