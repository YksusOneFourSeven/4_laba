/* Учебные исходные данные. Для дополнительного эксперимента работайте с копией папки. */
window.DEMO_DATA = Object.freeze({
 branches:[{id:'center',name:'Учебная аптека «Центр»',address:'Демо-город, Учебная улица, 1'},{id:'park',name:'Учебная аптека «Парк»',address:'Демо-город, Макетный проспект, 2'}],
 products:[
 {id:'P01',name:'Аква-Демо',form:'Учебный макет, 100 мл',category:'Уход',price:25000,stock:{center:8,park:2},tag:'Базовый набор',color:'#cdeee9'},
 {id:'P02',name:'Бинт Учебный',form:'Учебный макет, 5 м',category:'Первая помощь',price:12000,stock:{center:12,park:8},tag:'Для экспериментов',color:'#e4e4fb'},
 {id:'P03',name:'Термометр Макет',form:'Демонстрационный прибор',category:'Приборы',price:125000,stock:{center:1,park:5},tag:'Остатки по точкам',color:'#d5e9fa'},
 {id:'P04',name:'Салфетки Демо',form:'Учебный макет, 20 шт.',category:'Уход',price:19999,stock:{center:9,park:3},tag:'Дробная цена',color:'#dff0d2'},
 {id:'P05',name:'Футляр Учебный',form:'Макет аксессуара',category:'Аксессуары',price:35000,stock:{center:4,park:0},tag:'Самовывоз',color:'#f6dfc8'},
 {id:'P06',name:'Тонометр Макет',form:'Демонстрационный прибор',category:'Приборы',price:245000,stock:{center:2,park:1},tag:'Демо-прибор',color:'#d5e9fa'},
 {id:'P07',name:'Пластырь Демо',form:'Учебный макет, 10 шт.',category:'Первая помощь',price:18000,stock:{center:0,park:6},tag:'Другая точка',color:'#e4e4fb'},
 {id:'P08',name:'Гель Макет',form:'Учебный макет, 50 мл',category:'Уход',price:47550,stock:{center:5,park:4},tag:'Только макет',color:'#cdeee9'},
 {id:'P09',name:'Маска Учебная',form:'Учебный макет, 5 шт.',category:'Первая помощь',price:9500,stock:{center:7,park:7},tag:'Базовый набор',color:'#e4e4fb'},
 {id:'P10',name:'Органайзер Демо',form:'Макет аксессуара',category:'Аксессуары',price:69000,stock:{center:0,park:0},tag:'Нет в наличии',color:'#f6dfc8'},
 {id:'P11',name:'Крем Учебный',form:'Учебный макет, 75 мл',category:'Уход',price:54000,stock:{center:3,park:5},tag:'Только макет',color:'#cdeee9'},
 {id:'P12',name:'Пакет Демо',form:'Учебный макет, 1 шт.',category:'Аксессуары',price:1000,stock:{center:20,park:20},tag:'Малая цена',color:'#f6dfc8'}
 ]
});
