## 1 字符串对象函数

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [charAt()](http://www.w3school.com.cn/jsref/jsref_charAt.asp) | 返回在指定位置的字符。                                       |
| [charCodeAt()](http://www.w3school.com.cn/jsref/jsref_charCodeAt.asp) | 返回在指定的位置的字符的 Unicode 编码。                      |
| concat(str)                                                  | 连接字符串。返回一个新串                                     |
| indexOf(substring,start)                                     | 检索字符串。                                                 |
| lastIndexOf()                                                | 从后向前搜索字符串。                                         |
| [localeCompare()](http://www.w3school.com.cn/jsref/jsref_localeCompare.asp) | 用本地特定的顺序来比较两个字符串。                           |
| [match()](http://www.w3school.com.cn/jsref/jsref_match.asp)  | 找到一个或多个正则表达式的匹配。                             |
| [replace()](http://www.w3school.com.cn/jsref/jsref_replace.asp) | 替换与正则表达式匹配的子串。                                 |
| [search()](http://www.w3school.com.cn/jsref/jsref_search.asp) | 检索与正则表达式相匹配的值。                                 |
| slice(start,end)                                             | 提取字符串的片断(不包括end)，返回一个新串。                  |
| split(separator)                                             | 以指定分隔符(separator)把字符串分割为字符串数组。            |
| substr(start=0,[length])                                     | 从起始start索引号提取字符串中指定数目(length)的字符。length 为可选参数，不填，则取到字符串末尾 |
| substring(start,end)                                         | 提取字符串中两个指定的索引号之间的字符。                     |
| [toLocaleLowerCase()](http://www.w3school.com.cn/jsref/jsref_toLocaleLowerCase.asp) | 把字符串转换为小写。                                         |
| [toLocaleUpperCase()](http://www.w3school.com.cn/jsref/jsref_toLocaleUpperCase.asp) | 把字符串转换为大写。                                         |
| [toLowerCase()](http://www.w3school.com.cn/jsref/jsref_toLowerCase.asp) | 把字符串转换为小写。                                         |
| [toUpperCase()](http://www.w3school.com.cn/jsref/jsref_toUpperCase.asp) | 把字符串转换为大写。                                         |
| toSource()                                                   | 代表对象的源代码。                                           |

~~~
var str="Hello world!"
document.write(str.indexOf("Hello") + "<br />")
~~~



## 2. 数组对象函数

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| concat()                                                     | 连接两个或更多的数组，并返回结果。                           |
| join(separator)                                              | 把数组的所有元素放入一个字符串。元素通过指定的分隔符(separator)进行分隔。 |
| filter(function(value,index))                                | 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。 |
| every(funciton(value,index))                                 | 检测数组中的元素是否满足函数所给定条件，如果都满足返回true，否则返回false |
| indexOf（value)                                              | 查找到value，返回下标，找不着，返回-1                        |
| map(function(value,index))                                   | 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。 |
| pop()                                                        | 删除并返回数组的最后一个元素                                 |
| push()                                                       | 向数组的末尾添加一个或更多元素，并返回新的长度。             |
| reverse()                                                    | 颠倒数组中元素的顺序。                                       |
| shift()                                                      | 删除并返回数组的第一个元素                                   |
| slice()                                                      | 从某个已有的数组返回选定的元素                               |
| sort(function(a,b))                                          | 对数组的元素进行排序，函数用于指定从小到大还是从大到小排序   |
| splice()                                                     | 删除元素，并向数组添加新元素。                               |
| [toString()](http://www.w3school.com.cn/jsref/jsref_toString_array.asp) | 把数组转换为字符串(以逗号做分隔)，并返回结果。               |
| unshift()                                                    | 向数组的开头添加一个或更多元素，并返回新的长度。             |

调用：

	  a = [1,2,3,4]
	 console.log(a.join(','));

## 3. 数学函数

| 方法                                                         | 描述                         |
| ------------------------------------------------------------ | ---------------------------- |
| [abs(x)](http://www.w3school.com.cn/jsref/jsref_abs.asp)     | 返回数的绝对值。             |
| [ceil(x)](http://www.w3school.com.cn/jsref/jsref_ceil.asp)   | 上取整。                     |
| [exp(x)](http://www.w3school.com.cn/jsref/jsref_exp.asp)     | 返回 e 的指数。              |
| [floor(x)](http://www.w3school.com.cn/jsref/jsref_floor.asp) | 下取整。                     |
| [log(x)](http://www.w3school.com.cn/jsref/jsref_log.asp)     | 返回数的自然对数（底为e）。  |
| [max(x,y)](http://www.w3school.com.cn/jsref/jsref_max.asp)   | 返回 x 和 y 中的最高值。     |
| [min(x,y)](http://www.w3school.com.cn/jsref/jsref_min.asp)   | 返回 x 和 y 中的最低值。     |
| [pow(x,y)](http://www.w3school.com.cn/jsref/jsref_pow.asp)   | 返回 x 的 y 次幂。           |
| [random()](http://www.w3school.com.cn/jsref/jsref_random.asp) | 返回 0 ~ 1 之间的随机数。    |
| [round(x)](http://www.w3school.com.cn/jsref/jsref_round.asp) | 把数四舍五入为最接近的整数。 |
| [sqrt(x)](http://www.w3school.com.cn/jsref/jsref_sqrt.asp)   | 返回数的平方根。             |

示例： console.log(Math.max(2,3))



## 4 Date 对象方法

| 方法                                                         | 描述                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [Date()](http://www.w3school.com.cn/jsref/jsref_Date.asp)    | 返回当日的日期和时间。                                 |
| [getDate()](http://www.w3school.com.cn/jsref/jsref_getDate.asp) | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。            |
| [getDay()](http://www.w3school.com.cn/jsref/jsref_getDay.asp) | 从 Date 对象返回一周中的某一天 (0 ~ 6)。               |
| [getMonth()](http://www.w3school.com.cn/jsref/jsref_getMonth.asp) | 从 Date 对象返回月份 (0 ~ 11)。                        |
| [getFullYear()](http://www.w3school.com.cn/jsref/jsref_getFullYear.asp) | 从 Date 对象以四位数字返回年份。                       |
| [getHours()](http://www.w3school.com.cn/jsref/jsref_getHours.asp) | 返回 Date 对象的小时 (0 ~ 23)。                        |
| [getMinutes()](http://www.w3school.com.cn/jsref/jsref_getMinutes.asp) | 返回 Date 对象的分钟 (0 ~ 59)。                        |
| [getSeconds()](http://www.w3school.com.cn/jsref/jsref_getSeconds.asp) | 返回 Date 对象的秒数 (0 ~ 59)。                        |
| [getMilliseconds()](http://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp) | 返回 Date 对象的毫秒(0 ~ 999)。                        |
| [getTime()](http://www.w3school.com.cn/jsref/jsref_getTime.asp) | 返回 1970 年 1 月 1 日至今的毫秒数。                   |
| [getTimezoneOffset()](http://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp) | 返回本地时间与格林威治标准时间 (GMT) 的分钟差。        |
| [parse()](http://www.w3school.com.cn/jsref/jsref_parse.asp)  | 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。     |
| [setDate()](http://www.w3school.com.cn/jsref/jsref_setDate.asp) | 设置 Date 对象中月的某一天 (1 ~ 31)。                  |
| [setMonth()](http://www.w3school.com.cn/jsref/jsref_setMonth.asp) | 设置 Date 对象中月份 (0 ~ 11)。                        |
| [setFullYear()](http://www.w3school.com.cn/jsref/jsref_setFullYear.asp) | 设置 Date 对象中的年份（四位数字）。                   |
| [setYear()](http://www.w3school.com.cn/jsref/jsref_setYear.asp) | 请使用 setFullYear() 方法代替。                        |
| [setHours()](http://www.w3school.com.cn/jsref/jsref_setHours.asp) | 设置 Date 对象中的小时 (0 ~ 23)。                      |
| [setMinutes()](http://www.w3school.com.cn/jsref/jsref_setMinutes.asp) | 设置 Date 对象中的分钟 (0 ~ 59)。                      |
| [setSeconds()](http://www.w3school.com.cn/jsref/jsref_setSeconds.asp) | 设置 Date 对象中的秒钟 (0 ~ 59)。                      |
| [setMilliseconds()](http://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp) | 设置 Date 对象中的毫秒 (0 ~ 999)。                     |
| [setTime()](http://www.w3school.com.cn/jsref/jsref_setTime.asp) | 以毫秒设置 Date 对象。                                 |
| [toString()](http://www.w3school.com.cn/jsref/jsref_toString_date.asp) | 把 Date 对象转换为字符串。                             |
| [toTimeString()](http://www.w3school.com.cn/jsref/jsref_toTimeString.asp) | 把 Date 对象的时间部分转换为字符串。                   |
| [toDateString()](http://www.w3school.com.cn/jsref/jsref_toDateString.asp) | 把 Date 对象的日期部分转换为字符串。                   |
| [toGMTString()](http://www.w3school.com.cn/jsref/jsref_toGMTString.asp) | 请使用 toUTCString() 方法代替。                        |
| [toUTCString()](http://www.w3school.com.cn/jsref/jsref_toUTCString.asp) | 根据世界时，把 Date 对象转换为字符串。                 |
| [toLocaleString()](http://www.w3school.com.cn/jsref/jsref_toLocaleString.asp) | 根据本地时间格式，把 Date 对象转换为字符串。           |
| [toLocaleTimeString()](http://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp) | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。 |
| [toLocaleDateString()](http://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp) | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 |
| [UTC()](http://www.w3school.com.cn/jsref/jsref_utc.asp)      | 根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。  |

~~~
var d = new Date()
var d1 = new Date("1998-03-12 15:30:00")
var d2 = new Date(2019,1,1,0,0,0)
document.write(d.getDay())
~~~

