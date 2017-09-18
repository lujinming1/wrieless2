const Main = {
	target: process.env.NODE_ENV !== 'production' ? 'http://admin.sosout.com' : 'http://admin.sosout.com', //目标网站
    name: '禾吉草业',
    prefix: 'Admin',
    footerText: '版权公告 ©2017 甘肃禾吉草业有限公司 版权所有。',
    logoSrc: '../static/image/logo.jpg',
    logoText: '禾吉草业',
    needLogin: true,
	message: { // 提示信息
		usernameInput: '请输入用户名',
    usernameEng: '用户名必须是字母',
		passwordInput: '请输入密码',
		loginError: '用户名或者密码错误!'
	},
	localKey: { // 本地存储Key
		userToken: 'USER_AUTHORIZATION'
	},
	/**
	 * 只能输入英文
	 *
	 * @param {any} str
	 * @returns
	 */
	checkEng(str) {
		var reg = new RegExp(/^[A-Za-z]+$/);
		return str && reg.test(str);
	},
    /**
	 * 参数格式化
	 *
	 * @param {any} data
	 * @returns
	 */
	paramFormat(data) {
		let paramArr = [];
		let paramStr = '';
		for(let attr in data) {
			paramArr.push(attr + '=' + data[attr]);
		}
		paramStr = paramArr.join('&');
		return paramStr ? '?' + paramStr : paramStr;
	},
    /**
	 * 本地数据存储或读取
	 *
	 * @param {any} key
	 * @param {any} value
	 * @returns
	 */
	localItem(key, value) {
		if(arguments.length == 1) {
			return localStorage.getItem(key) && localStorage.getItem(key) !== 'null' ? localStorage.getItem(key) : null;
		} else {
			return localStorage.setItem(key, value);
		}
	},
	/**
	 * 删除本地数据
	 *
	 * @param {any} k
	 * @returns
	 */
	removeLocalItem(key) {
		if(arguments.length == 1) {
			return localStorage.removeItem(key);
		} else {
			return localStorage.clear();
		}
	}
};

export default Main;
