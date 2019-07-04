// 一般情况下，变量的值是常量时，会将变量用大写表示，所以看到一个变量是大写的，可能就是表明，这个变量代表的是常量。

// 另一种情况就是楼上说的，当你很多地方都用这个常量时，发现常量的值要变，就只能一个一个改用这个常量的地方，而用变量保存，每个地方引用的都是变量，这样只改变量的赋值就行了。

//
// 减少硬编码，比如多个地方存在“reset_user_info”时，用常量来引用，可维护性更高，减少手抖多一个字母少一个字母的错误。
// 大项目多人开发时，对mutations统一管理，找函数很直观。
// 可以根据模块来分类来给mutation type命名，名字多长都可以，常量名简短就好了
export const IS_FIXED_HEADER = 'IS_FIXED_HEADER'

export const IS_SHOW_SEARCH_BAR = 'IS_SHOW_SEARCH_BAR'

export const IS_SHOW_MASK = 'IS_SHOW_MASK'

export const GET_SLIDERS = 'GET_SLIDERS'

export const GET_HOT_PRODUCTS = 'GET_HOT_PRODUCTS'

export const GET_HOT_SHOPS = 'GET_HOT_SHOPS'

export const GET_PRODUCTS = 'GET_PRODUCTS'

export const IS_SHOW_LOADING_TIPS = 'IS_SHOW_LOADING_TIPS'

export const IS_SHOW_LOADED_TIPS = 'IS_SHOW_LOADED_TIPS'


