<template>
    <div style="width:100%;height:100%;" class="bk" >
      <!-- <dv-loading v-show="load"  style="position:absolute;z-index:999;height:100%;width:100%;color:white;background-color:#87CEFA;">Loading...</dv-loading> -->
      <dv-border-box-11  backgroundColor="#87CEEB"  title="危险源车辆监控" v-show="!load" style="opacity: 0.9;position:absolute;width:100%;height:100%;color:black" >
        <div>
         
        </div>
      </dv-border-box-11>
      <dv-scroll-board :config="config1" class="aab" v-show="!load" style="opacity: 0.9;width:500px;height:220px;position:relative;left:50px; top:60px;color:white;" />  
      <dv-decoration-2 style="opacity: 0.9;width:500px;height:20px;position:relative;left:50px; top:-175px; font-size:20px;" />
      <!-- <flyline></flyline> -->
      <div ref="map" style="height:300px;" ></div>
    </div>
</template>

<script>

// import BorderBox from "../../components/dashboard/border-box"
// import flyline from "../../components/dashboard/flyline"


export default {
  name: 'dashboard',
  props: {
    msg: String
  },
  components: {
    // BorderBox
    // flyline
  },
  data(){
    return {
      load:true,
      config1:{
        header: ['车牌', '危险等级', '始发地', '目的地', '监控时长'],
        data: [
          ['<span  style="color:black;background-color:yellow">渝A56921</span>', '<span style="color:white;background-color:black;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">湖北</span>', '<span style="color:black;">1小时8分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝A54921</span>', '<span style="color:orign;background-color:black;">二级</span>', '重庆', '厦门', '3小时18分钟'],
          ['<span  style="color:black;background-color:yellow">渝B23421</span>', '<span style="color:yellow;background-color:black;">三级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">河南</span>', '<span style="color:black;">5小时8分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝S56921</span>', '<span style="color:green;background-color:black;">四级</span>', '重庆', '广州', '1小时0分钟'],
          ['<span  style="color:black;background-color:yellow">渝A56211</span>', '<span style="color:white;background-color:black;">五级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">广东</span>', '<span style="color:black;">40小时8分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝C56324</span>', '<span style="color:blue;background-color:black;">六级</span>', '重庆', '上海', '25小时11分钟'],
          ['<span  style="color:black;background-color:yellow">渝D53221</span>', '<span style="color:red;background-color:black;">七级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">广西</span>', '<span style="color:black;">22小时27分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝A12921</span>', '<span style="color:red;background-color:black;">八级</span>', '重庆', '北京', '12小时28分钟'],
          ['<span  style="color:black;background-color:yellow">渝A32121</span>', '<span style="color:red;background-color:black;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">北京</span>', '<span style="color:black;">6小时44分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝E53221</span>', '<span style="color:red;background-color:black;">一级</span>', '重庆', '黑龙江', '2小时25分钟'],
          ['<span  style="color:black;background-color:yellow">渝F55421</span>', '<span style="color:red;background-color:black;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">拉萨</span>', '<span style="color:black;">4小时58分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝F66921</span>', '<span style="color:red;background-color:black;">一级</span>', '重庆', '海南', '7小时32分钟']
        ],
        index: false,
        columnWidth: [100,100,80,80],
        align: ['center','center','center','center','center'],
        oddRowBGC:"#6495ED",
        evenRowBGC:"#E1FFFF"
      }
    }
  },
  mounted:function(){
    // 2s后取消loading
    clearTimeout(this.timer);  //清除延迟执行 
    this.timer = setTimeout(()=>{   //设置延迟执行
        this.load = false;
        this.getmap();
    },2000);
    
  },
  methods:{
    getmap() {
                // 基于准备好的dom(myEchartPillar)，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.map);

                var mapName = 'china'
                var data = [{
                    name: "北京",
                    value: 27
                },
                    {
                        name: "天津",
                        value: 42
                    },
                    {
                        name: "河北",
                        value: 102
                    },
                    {
                        name: "山西",
                        value: 81
                    },
                    {
                        name: "内蒙古",
                        value: 47
                    },
                    {
                        name: "辽宁",
                        value: 67
                    },
                    {
                        name: "吉林",
                        value: 82
                    },
                    {
                        name: "黑龙江",
                        value: 66
                    },
                    {
                        name: "上海",
                        value: 24
                    },
                    {
                        name: "江苏",
                        value: 92
                    },
                    {
                        name: "浙江",
                        value: 114
                    },
                    {
                        name: "安徽",
                        value: 109
                    },
                    {
                        name: "福建",
                        value: 116
                    },
                    {
                        name: "江西",
                        value: 91
                    },
                    {
                        name: "山东",
                        value: 119
                    },
                    {
                        name: "河南",
                        value: 137
                    },
                    {
                        name: "湖北",
                        value: 116
                    },
                    {
                        name: "湖南",
                        value: 114
                    },
                    {
                        name: "重庆",
                        value: 91
                    },
                    {
                        name: "四川",
                        value: 125
                    },
                    {
                        name: "贵州",
                        value: 62
                    },
                    {
                        name: "云南",
                        value: 83
                    },
                    {
                        name: "西藏",
                        value: 9
                    },
                    {
                        name: "陕西",
                        value: 80
                    },
                    {
                        name: "甘肃",
                        value: 56
                    },
                    {
                        name: "青海",
                        value: 10
                    },
                    {
                        name: "宁夏",
                        value: 18
                    },
                    {
                        name: "新疆",
                        value: 67
                    },
                    {
                        name: "广东",
                        value: 123
                    },
                    {
                        name: "广西",
                        value: 59
                    },
                    {
                        name: "海南",
                        value: 14
                    },
                ];

                var geoCoordMap = {};
                var toolTipData = [{
                    name: "北京",
                    value: [{
                        name: "地区",
                        value: 95
                    }]
                },
                    {
                        name: "天津",
                        value: [{
                            name: "文科",
                            value: 22
                        }]
                    },
                    {
                        name: "河北",
                        value: [{
                            name: "文科",
                            value: 60
                        }]
                    },
                    {
                        name: "山西",
                        value: [{
                            name: "文科",
                            value: 40
                        }]
                    },
                    {
                        name: "内蒙古",
                        value: [{
                            name: "文科",
                            value: 23
                        }]
                    },
                    {
                        name: "辽宁",
                        value: [{
                            name: "文科",
                            value: 39
                        }]
                    },
                    {
                        name: "吉林",
                        value: [{
                            name: "文科",
                            value: 41
                        }]
                    },
                    {
                        name: "黑龙江",
                        value: [{
                            name: "文科",
                            value: 35
                        }]
                    },
                    {
                        name: "上海",
                        value: [{
                            name: "文科",
                            value: 12
                        }]
                    },
                    {
                        name: "江苏",
                        value: [{
                            name: "文科",
                            value: 47
                        }]
                    },
                    {
                        name: "浙江",
                        value: [{
                            name: "文科",
                            value: 57
                        }]
                    },
                    {
                        name: "安徽",
                        value: [{
                            name: "文科",
                            value: 57
                        }]
                    },
                    {
                        name: "福建",
                        value: [{
                            name: "文科",
                            value: 59
                        }]
                    },
                    {
                        name: "江西",
                        value: [{
                            name: "文科",
                            value: 49
                        }]
                    },
                    {
                        name: "山东",
                        value: [{
                            name: "文科",
                            value: 67
                        }]
                    },
                    {
                        name: "河南",
                        value: [{
                            name: "文科",
                            value: 69
                        }]
                    },
                    {
                        name: "湖北",
                        value: [{
                            name: "文科",
                            value: 60
                        }]
                    },
                    {
                        name: "湖南",
                        value: [{
                            name: "文科",
                            value: 62
                        }]
                    },
                    {
                        name: "重庆",
                        value: [{
                            name: "文科",
                            value: 47
                        }]
                    },
                    {
                        name: "四川",
                        value: [{
                            name: "文科",
                            value: 65
                        }]
                    },
                    {
                        name: "贵州",
                        value: [{
                            name: "文科",
                            value: 32
                        }, {
                            name: "理科",
                            value: 30
                        }]
                    },
                    {
                        name: "云南",
                        value: [{
                            name: "文科",
                            value: 42
                        }]
                    },
                    {
                        name: "西藏",
                        value: [{
                            name: "文科",
                            value: 5
                        }]
                    },
                    {
                        name: "陕西",
                        value: [{
                            name: "文科",
                            value: 38
                        }]
                    },
                    {
                        name: "甘肃",
                        value: [{
                            name: "文科",
                            value: 28
                        }]
                    },
                    {
                        name: "青海",
                        value: [{
                            name: "文科",
                            value: 5
                        }]
                    },
                    {
                        name: "宁夏",
                        value: [{
                            name: "文科",
                            value: 10
                        }]
                    },
                    {
                        name: "新疆",
                        value: [{
                            name: "文科",
                            value: 36
                        }]
                    },
                    {
                        name: "广东",
                        value: [{
                            name: "文科",
                            value: 63
                        }]
                    },
                    {
                        name: "广西",
                        value: [{
                            name: "文科",
                            value: 29
                        },]
                    },
                    {
                        name: "海南",
                        value: [{
                            name: "文科",
                            value: 8
                        }]
                    },
                ];
                /*获取地图数据*/
                myChart.showLoading();
                var mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
                myChart.hideLoading();
                mapFeatures.forEach(function(v) {
                    // 地区名称
                    var name = v.properties.name;
                    // 地区经纬度
                    geoCoordMap[name] = v.properties.cp;

                });
                var max = 480,
                    min = 9; // todo
                var maxSize4Pin = 100,
                    minSize4Pin = 20;

                var convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value),
                            });
                        }
                    }
                    return res;
                };

//指定图表的配置项和数据，绘制图表
                myChart.setOption({

                    tooltip: {
                        trigger: 'item',
                        formatter: function(params) {
                            var toolTiphtml = ''
                            if (typeof(params.value)[2] == "undefined") {

                                for (let i = 0; i < toolTipData.length; i++) {
                                    if (params.name == toolTipData[i].name) {
                                        toolTiphtml += toolTipData[i].name + ':<br>'
                                        for (let j = 0; j < toolTipData[i].value.length; j++) {
                                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                                        }
                                    }
                                }
                                console.log(toolTiphtml)
                                // console.log(convertData(data))
                                return toolTiphtml;
                            } else {
                                for (let i = 0; i < toolTipData.length; i++) {
                                    if (params.name == toolTipData[i].name) {
                                        toolTiphtml += toolTipData[i].name + ':<br>'
                                        for (let j = 0; j < toolTipData[i].value.length; j++) {
                                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                                        }
                                    }
                                }
                                console.log(toolTiphtml)
                                // console.log(convertData(data))
                                return toolTiphtml;
                            }
                        }
                    },
                    // legend: {
                    //     orient: 'vertical',
                    //     y: 'bottom',
                    //     x: 'right',
                    //     data: ['credit_pm2.5'],
                    //     textStyle: {
                    //         color: '#fff'
                    //     }
                    // },
                    visualMap: {
                        show: true,
                        min: 0,
                        max: 200,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        seriesIndex: [1],
                        inRange: {

                            color: ['#00467F', '#A5CC82'] // 蓝绿


                        }
                    },

                    geo: {
                        show: true,
                        map: mapName,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#3B5077',
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            }
                        }
                    },
                    series: [{
                        name: '散点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function(val) {
                            return val[2] / 10;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#05C3F9'
                            }
                        }
                    },
                        {
                            type: 'map',
                            map: mapName,
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#3B5077',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: data
                        },
                        {
                            name: '点',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'pin', //气泡
                            symbolSize: function(val) {
                                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                                var b = minSize4Pin - a * min;
                                b = maxSize4Pin - a * max;
                                return a * val[2] + b;
                            },
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 9,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#F62157', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        },
                        {
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(data.sort(function(a, b) {
                                return b.value - a.value;
                            }).slice(0, 5)),
                            symbolSize: function(val) {
                                return val[2] / 10;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    shadowBlur: 10,
                                    shadowColor: 'yellow'
                                }
                            },
                            zlevel: 1
                        },

                    ]
                });



                //解决自适应
                setTimeout(function() {
                    window.addEventListener("resize", () => {
                        myChart.resize();
                    });
                }, 500);

            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aab{
    border-radius: 20px;
  }

  .bk{
    /* background-color:#87CEFA; */
    background-image:url("../../assets/back.gif");
    background-repeat: no-repeat;

    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    min-width: 1000px;
    z-index:-10;
    zoom: 1;
    background-color: #fff;
    /* background: url(../img/bg_login.jpg) no-repeat; */
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }
</style>
