var geoCoordMap = {
    '北碚': [106.50, 29.81],
    '城口': [108.6520475, 31.90676506],
    '大足': [105.7692868, 29.65392091],
    '垫江': [107.4004904, 30.24903189],
    '丰都': [107.7461781, 29.91492542],
    '奉节': [109.3758974, 30.98202119],
    '合川': [106.2833096, 30.09766756],
    '江北': [106.6214893, 29.64821182],
    '江津': [106.2647885, 28.98483627],
    '开州': [108.1818518, 31.29466521],
    '南岸': [106.6379653, 29.47704825],
    '南川': [107.1406799, 29.12047319],
    '彭水': [108.2573507, 29.36444557],
    '綦南': [106.8036647, 28.96872774],
    '黔江': [108.7559876, 29.44290625],
    '石柱': [108.2438988, 30.07512144],
    '市区': [106.4377397, 29.52648606],
    '铜梁': [106.0616035, 29.81036286],
    '潼南': [105.8116920, 30.13795513],
    '万州': [108.0828876, 30.73353669],
    '巫山': [109.8779184, 31.09568937],
    '巫溪': [109.2970739, 31.48090521],
    '武隆': [107.6831317, 29.36831708],
    '秀山': [108.9997005, 28.49462861],
    '永川': [105.8347961, 29.41042605],
    '酉阳': [108.7911679, 28.88330557],
    '云阳': [108.7533957, 30.96025875],
    '长寿': [107.24, 29.95],
    '忠县': [107.9279014, 30.33522658],
    '川东': [107.3488646, 29.68233099],
    '成都': [106.5, 31.5],
};
var hjDatas = [
    [{
        name: '北碚',
        value: 2
    }],
];


var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = [106.5, 31.5];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var series = [];
[
    ['成都', hjDatas]
].forEach(function (item) {
    series.push({
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 15, //图标大小
        },
        lineStyle: {
            normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .1 //尾迹线条曲直度
            }
        },
        data: convertData(item[1])
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: { //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 8 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
            normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function (params) { //圆环显示文字
                    return params.data.name;
                },
                fontSize: 16
            },
            emphasis: {
                show: true
            }
        },
        symbol: 'circle',
        symbolSize: function (val) {
            return 5 + val[2] * 2; //圆环大小
        },
        itemStyle: {
            normal: {
                show: false,
                color: '#f00'
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[0].name,
                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
        }),
    },
        //被攻击点
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 16
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 2 + val[2] * 2; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#0f0'
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([10]),
            }],
        }
    );
});

var option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function (params, ) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
        }
    },
    visualMap: { //图例值控制
        min: 0,
        max: 6,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'hjkj',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
            }
        }
    },
    series: series
};


export default {
    optionXyMap01: option
}