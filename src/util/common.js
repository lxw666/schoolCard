const common = {
	/*
	 * @description 转换为字符
	 * @returns {string} 返回字符串
	 */
	toString(v) {
		return Object.prototype.toString.apply(v);
	},
	/*
	 * @description 判断值是否已定义
	 * @returns {boolean} 是否已定义
	 */
	isDefined(v) {
		return typeof v !== 'undefined';
	},
	/*
	 * @description 是否为空
	 * @returns {boolean} 是否为空
	 */
	isEmpty(v) {
		return v === null || v === undefined || String(v).toUpperCase() === 'NULL' || ((this.isArray(v) && !v.length));
	},
	/*
	 * @description 是否是数组
	 * @returns {boolean} 是否是数组
	 */
	isArray(v) {
		return this.toString(v) === '[object Array]';
	},
	/*
	 * @description 是否是日期
	 * @returns {boolean} 是否是日期
	 */
	isDate(v) {
		return this.toString(v) === '[object Date]';
	},
	/*
	 * @description 是否是对象
	 * @returns {boolean} 是否是对象
	 */
	isObject(v) {
		return this.toString(v) === '[object Object]';
	},
	/*
	 * @description 是否是函数
	 * @returns {boolean} 是否是函数
	 */
	isFunction(v) {
		return this.toString(v) === '[object Function]';
	},
	/*
	 * @description 是否是数值型
	 * @returns {boolean} 是否是数值型
	 * 需要考虑正负无穷大，因此不能使用this.toString(v) == '[object Number]'来判断
	 */
	isNumber(v) {
		return isFinite(v) || typeof v === 'number';
	},
	/*
	 * @description 是否是字符型
	 * @returns {boolean} 是否是字符型
	 */
	isString(v) {
		return typeof v === 'string';
	},
	/*
	 * @description 是否是布尔型
	 * @returns {boolean} 是否是布尔型
	 */
	isBoolean(v) {
		return typeof v === 'boolean';
	},
	/*
	 * @description json转字符串json
	 * @returns {boolean} 转换字符串
	 */
	JsonToStr(json) {
		return JSON.stringify(json);
	},
	/*
	 * @description 符串json转字json
	 * @returns {boolean} 转换字符串
	 */
	StrToJson(str) {
		return JSON.parse(str);
	},
	/*
	 * @description 数字转为中文
	 */

	formateNum(num) {
		num = num * 1 + 1;
		var changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
		var unit = ["", "十", "百", "千", "万"];
		num = parseInt(num);
		var getWan = function(temp) {
			var strArr = temp.toString().split("").reverse();
			var newNum = "";
			for (var i = 0; i < strArr.length; i++) {
				newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[
					i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
			}
			return newNum;
		};
		var overWan = Math.floor(num / 10000);
		var noWan = num % 10000;
		if (noWan.toString().length < 4) noWan = "0" + noWan;
		return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
	},
	/*
	 * 跳转界面
	 * that 上下文，这里是vue实例
	 * name: 路由匹配的name，具体查看router文件
	 * param：参数，
	 */
	jump(that, name,param) {
		console.log(name, param)
		if (that && name) {
			that.$router.push({
				name: name,
				param: param ? param : '',
			})
		}
	},
	/*
	 * 跳转界面
	 * that 上下文，这里是vue实例
	 * name: 路由匹配的name，具体查看router文件,通过data-name获得
	 * param：参数，通过data-param获得
	 */
	jumpPage(that, currentTarget) {
		var dataset = currentTarget.dataset,
			name = dataset.name,
			param = dataset.param;
		console.log(name, param)
		if (that && currentTarget && name) {
			that.$router.push({
				name: name,
				param: param ? param : '',
			})
		}
	},
	/*
	 * 返回上一级
	 * that 上下文，这里是vue实例
	 */
	goBack(that) {
		console.log(window.history.length,that)
		window.history.length > 1 ? that.$router.go(-1) : that.$router.push('/')
	},
	/*
	 * 返回首页
	 * that 上下文，这里是vue实例
	 */
	gotoIndex(that) {
		console.log(that.$router)
		that.$router.push('/')
	},
	/*
	 * 取得跳转界面参数
	 * that 上下文，这里是vue实例
	 */
	getParam(that) {
		return that.$route.params
	},
	/* 
	 *公共toast
	 * title：提示内容
	 * type: success error
	 */
	toast(title, type, callBack) {
		var divP = document.createElement("DIV"),
			divC = document.createElement("DIV"),
			img = document.createElement("IMG"),
			p = document.createElement("P"),
			timer;
		divP.classList.add('common-toast');
		divC.classList.add('common-toast-box');
		img.src = type == 'success' ? require('@/assets/img/duihao.png') : require('@/assets/img/cuowu.png');
		p.innerHTML = title;
		divC.appendChild(img);
		divC.appendChild(p);
		divP.appendChild(divC)
		document.body.appendChild(divP);
		timer = setTimeout(() => {
			var toast = document.querySelector('.common-toast');
			if (callBack && this.isFunction(callBack)) {
				callBack();
			}
			document.body.removeChild(toast);
			clearInterval(timer);
		}, 2000);
	},
	/*
	 *公共loading
	 * this：上下文
	 * type: open,close
	 */
	loading(that,type){
		if(type == 'open'){
			that.$layer.loading('加载中...');
		}else if(type == 'close'){
			that.$layer.close();
		}
	},
	Cookie: function() {
		const doc = document;
		const Cf = common;
		return {
			getItem: function(name, itemName) {
				var value = this.getAll(name);
				if (value) {
					return value[itemName];
				}
				return null;
			},
			getAll: function(name) {
				var cookieName = decodeURIComponent(name) + '=',
					cookieStart = doc.cookie.indexOf(cookieName),
					cookieEnd,
					cookieValue,
					cookieValueAttr,
					cookieValueParts,
					value = {};
				if (cookieStart > -1) {
					cookieEnd = doc.cookie.indexOf(';', cookieStart);
					if (cookieEnd == -1) {
						cookieEnd = doc.cookie.length;
					}
					cookieValue = decodeURIComponent(doc.cookie.substring(cookieStart + cookieName.length, cookieEnd));
					if (cookieValue) {
						cookieValueAttr = cookieValue.split('&');
						cookieValueAttr.forEach(function(item) {
							cookieValueParts = item.split('=');
							value[cookieValueParts[0]] = cookieValueParts[1];
						})
						return value;
					}
				}
				return null;
			},
			setItem: function(name, subName, subValue, expires, path, domain, secure) {
				var subCookies = this.getAll(name) || {};
				subCookies[subName] = subValue;
				this.setAll(name, subCookies, expires, path, domain, secure);
			},
			setAll: function(name, subCookies, expires, path, domain, secure) {
				/*
				 *存储的数据subCookies应该为普通对象，和getAll返回的数据格式相对应
				 *expires若存在则必须为Date的实例
				 */
				try {
					if (Cf.isObject(subCookies) || subCookies == null) {
						var setCookieText = encodeURIComponent(name) + '=',
							setCookiePaters = [];
						for (var key in subCookies) {
							if (key && Object.prototype.hasOwnProperty.call(subCookies, key)) {
								setCookiePaters.push(encodeURIComponent(key) + '=' + encodeURIComponent(subCookies[key]))
							}
						}
						if (setCookiePaters.length > 0) {
							setCookieText += setCookiePaters.join('&');
							if (Cf.isDate(expires)) {
								setCookieText += '; expires=' + expires.toGMTString();
							}
							if (path) {
								/*在path路径下面进行设置cookie*/
								setCookieText += '; path=' + path;
							}
							if (domain) {
								/*domain域下设置cookie*/
								setCookieText += '; domain=' + domain;
							}
							if (secure) {
								/*cookie 只有在使用 SSL 连接的时候才发送到服务器，hppts*/
								setCookieText += '; secure=' + secure;
							}
						} else {
							setCookieText += '; expires=' + new Date(0).toGMTString();
						}
						return doc.cookie = setCookieText;
					} else {
						throw new Error('subCookies数据类型必须是普通对象');
					}
				} catch (e) {
					console.error(e);
				}
			},
			removeItem: function(name, subName, expires, path, domain, secure) {
				var subCookies = this.getAll(name) || {};
				if (Object.prototype.hasOwnProperty.call(subCookies, subName)) {
					delete subCookies[subName];
				}
				this.setAll(name, subCookies, expires, path, domain, secure);
			},
			removeAll: function(name, path, domain, secure) {
				this.setAll(name, null, new Date(0), path, domain, secure);
			}
		}
	},

	
}
export default common;
