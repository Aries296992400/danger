export default {
    wxyfl: {
        title: {
            text: "",
            subtext: "由大数据中心提供支持",
            x: "center",
            y: "5px",
            subtextStyle: {
                //副标题文本样式{"color": "#aaa"}
                fontFamily: "Arial, Verdana, sans...",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "normal",
                color: "#ace8f2"
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: []
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            height: "85%",
            top: "10%",
            containLabel: true
        },
        xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#80adb5"
                },
                formatter: val => {
                    if (val == "0") return val;
                    // 除1000
                    val = (val * 1.0) / 1000;
                    return val + "k";
                }
            }
        },
        yAxis: {
            type: "category",
            data: [
                "一类",
                "二类",
                "三类",
                "四类",
                "五类",
                "六类",
                "七类",
                "八类",
                "九类"
            ],
            axisLabel: {
                show: true,
                textStyle: {
                    // color: '#3f96a5'
                    color: "#80adb5"
                }
            }
        },
        series: [
            // {
            //     name: '2011年',
            //     type: 'bar',
            //     data: [18203, 23489, 29034, 104970, 131744, 630230]
            // },
            {
                name: "2020年",
                type: "bar",
                data: [
                    19325,
                    23438,
                    31000,
                    12194,
                    14141,
                    6887,
                    19325,
                    23438,
                    31000
                ],
                //配置样式
                itemStyle: {
                    //通常情况下：
                    normal: {
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            var colorList = [
                                "#5cdcf2",
                                "#7bacb5",
                                "#3f96a5",
                                "#a5e7f2",
                                "#2c6873",
                                "#5cdcf2",
                                "#7bacb5",
                                "#3f96a5",
                                "#a5e7f2"
                            ];
                            return colorList[params.dataIndex];
                            // return "#3f96a5";
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    },
    tswxy: {
        title: {},
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: []
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            height: "70%",
            containLabel: true
        },
        xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#80adb5"
                },
                formatter: val => {
                    if (val == "0") return val;
                    // 除1000
                    val = (val * 1.0) / 1000;
                    return val + "k";
                }
            }
        },
        yAxis: {
            type: "category",
            data: ["医废", "危废"],
            axisLabel: {
                show: true,
                textStyle: {
                    // color: '#3f96a5'
                    color: "#80adb5"
                }
            }
        },
        series: [
            // {
            //     name: '2011年',
            //     type: 'bar',
            //     data: [18203, 23489, 29034, 104970, 131744, 630230]
            // },
            {
                name: "2020年",
                type: "bar",
                data: [19325, 23438],
                // 配置样式
                itemStyle: {
                    //通常情况下：
                    normal: {
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            var colorList = ["#5cdcf2", "#7bacb5"];
                            return colorList[params.dataIndex];
                            // return "#3f96a5";
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    },
    cljk: {
        header: ["车牌", "危险等级", "始发地", "目的地", "监控时长"],
        data: [
            [
                '<span  style="color:black;background-color:yellow">渝A56921</span>',
                '<span style="color:white;background-color:black;">一级</span>',
                '<span style="color:black;">重庆</span>',
                '<span style="color:black;">湖北</span>',
                '<span style="color:black;">1小时8分钟</span>'
            ],
            [
                '<span  style="color:black;background-color:yellow">渝A54921</span>',
                '<span style="color:orign;background-color:black;">二级</span>',
                "重庆",
                "厦门",
                "3小时18分钟"
            ],
            [
                '<span  style="color:black;background-color:yellow">渝B23421</span>',
                '<span style="color:yellow;background-color:black;">三级</span>',
                '<span style="color:black;">重庆</span>',
                '<span style="color:black;">河南</span>',
                '<span style="color:black;">5小时8分钟</span>'
            ],
            [
                '<span  style="color:black;background-color:yellow">渝S56921</span>',
                '<span style="color:green;background-color:black;">四级</span>',
                "重庆",
                "广州",
                "1小时0分钟"
            ],
            [
                '<span  style="color:black;background-color:yellow">渝A56211</span>',
                '<span style="color:white;background-color:black;">五级</span>',
                '<span style="color:black;">重庆</span>',
                '<span style="color:black;">广东</span>',
                '<span style="color:black;">40小时8分钟</span>'
            ],
            [
                '<span  style="color:black;background-color:yellow">渝C56324</span>',
                '<span style="color:blue;background-color:black;">六级</span>',
                "重庆",
                "上海",
                "25小时11分钟"
            ],
            [
                '<span  style="color:black;background-color:yellow">渝D53221</span>',
                '<span style="color:red;background-color:black;">七级</span>',
                '<span style="color:black;">重庆</span>',
                '<span style="color:black;">广西</span>',
                '<span style="color:black;">22小时27分钟</span>'
            ],
            [
                '<span  style="color:black;background-color:yellow">渝A12921</span>',
                '<span style="color:red;background-color:black;">八级</span>',
                "重庆",
                "北京",
                "12小时28分钟"
            ],
            [
                '<span  style="color:black;background-color:yellow">渝A32121</span>',
                '<span style="color:red;background-color:black;">一级</span>',
                '<span style="color:black;">重庆</span>',
                '<span style="color:black;">北京</span>',
                '<span style="color:black;">6小时44分钟</span>'
            ],
            [
                '<span  style="color:black;background-color:yellow">渝E53221</span>',
                '<span style="color:red;background-color:black;">一级</span>',
                "重庆",
                "黑龙江",
                "2小时25分钟"
            ],
            [
                '<span  style="color:black;background-color:yellow">渝F55421</span>',
                '<span style="color:red;background-color:black;">一级</span>',
                '<span style="color:black;">重庆</span>',
                '<span style="color:black;">拉萨</span>',
                '<span style="color:black;">4小时58分钟</span>'
            ],
            [
                '<span  style="color:black;background-color:yellow">渝F66921</span>',
                '<span style="color:red;background-color:black;">一级</span>',
                "重庆",
                "海南",
                "7小时32分钟"
            ]
        ],
        index: false,
        columnWidth: [100, 100, 80, 80],
        align: ["center", "center", "center", "center", "center"],
        oddRowBGC: "#6495ED",
        evenRowBGC: "#E1FFFF"
    },
    ssyj: {
        color: ["#3398DB"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: ["重庆", "四川", "北京", "福建", "广东", "新疆", "黑龙江"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    },
    bjtj: {
        title: {
        //    text:"每/n10分钟刷新一次",
           x: "left",
            y: "-5px",
            textStyle: {
                //副标题文本样式{"color": "#aaa"}
                fontFamily: "Arial, Verdana, sans...",
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: "normal",
                color: "#ace8f2"
            }
        },

        color: ["#2cb7ff", "#1785ef", "#20c8ff", "#2cb7ff", "#1785ef"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "red"
                },
                lineStyle: {
                    color: "#9eb2cb"
                }
            }
        },

        legend: {
            show: false,
            top: "top",
            left: "2%",
            textStyle: {
                color: "#000"
            },
            itemHeight: 2,
            data: ["意向", "方案", "商务", "即将成交", "赢单"]
        },
        grid: {
            top: 24,
            left: "2%",
            right: 20,
            bottom: 30,
            containLabel: true,
            borderWidth: 0.1
        },

        series: [
            {
                top: 0,
                type: "funnel",
                left: "10%",
                width: "80%",
                gap: 16,
                minSize: 100,
                maxSize: 280,
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{b}  ({c})"
                },
                data: [
                    { value: 1321, name: "温度报警" },
                    { value: 824, name: "天气报警" },
                    { value: 777, name: "疲劳驾驶报警" },
                    { value: 500, name: "疑似泄露报警" },
                    { value: 150, name: "其他报警" }
                ]
            }
        ]
    },
    zxt1:{
        title: {
            text: '2020-6-23  各时段统计信息',
            x:'right',
            y:'15px',
            textStyle: {//副标题文本样式{"color": "#aaa"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#ffffff'
            },
        },
        xAxis: {
            data: ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            axisLabel: {
                show: true,
                textStyle: {
                    // color: '#3f96a5'
                    color: '#80adb5'
                }
            }
            
        },
        yAxis: {
          axisLabel: {
              show: true,
              textStyle: {
                  // color: '#3f96a5'
                  color: '#80adb5'
              }
            }
        },
        series: [{
            type: 'line',
            data:[220, 182, 191, 234, 290, 330, 310],
            markPoint: {
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return idx * 200 + 1000;  
                },
                data: [{
                    type: 'min'
                }, {
                    type: 'max'
                }]
            }
        }]
      },
      bt1:{
        radius: '70%',
        activeRadius: '75%',
        data: [
          {
            name: '早上',
            value: 55
          },
          {
            name: '中午',
            value: 120
          },
          {
            name: '下午',
            value: 78
          },
          {
            name: '晚上',
            value: 66
          },
          {
            name: '夜间',
            value: 80
          }
        ],
        lineWidth: 15,
        digitalFlopStyle: {
          fontSize: 20,
          fill: '#fff'
        }
      },
      bt21:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|综合事故率\n}'+"{bottom|11%}"
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:89, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:11, name:'事故',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt23:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|泄露事故率}\n'+'{bottom|2%}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF'
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:98, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:2, name:'事故',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt25:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|交通事故率}\n'+'{bottom|9%}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF'
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:91, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:9, name:'事故',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt27:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|安全运输完成}\n'+'{bottom|3764次}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF'
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:89, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:11, name:'事故',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt22:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|运输占比}\n'+'{bottom|15%}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF'
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:85, name:'其它',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:15, name:'一类',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt24:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|事故高发地}\n'+'{bottom|广州}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF'
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:1, name:'重庆',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#feb000'
                        }
                    },
                    {
                        value:12, name:'广州',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    {
                        value:3, name:'四川',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:5, name:'北京',
                        itemStyle: {
                            color: '#FFDB5C'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt26:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|事故高发时段}\n'+'{bottom|下午}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF'
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:1, name:'重庆',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#feb000'
                        }
                    },
                    {
                        value:12, name:'广州',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    {
                        value:3, name:'四川',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:5, name:'北京',
                        itemStyle: {
                            color: '#FFDB5C'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt28:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|避免事故发生}\n'+'{bottom|23次}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF'
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#FFDB59',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:89, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#67e3e0'
                        }
                    },
                    {
                        value:11, name:'事故',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
    // 迁徙
      map1:{
      },
      clzltj: {
        color: ["#3398DB"],
       
        title:{
            subtext:"车辆种类统计",
            x:'center',
            subtextStyle: {//副标题文本样式{"color": "#aaa"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#ffffff'
            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: ["爆破器材", "气瓶", "医废", "易燃液体", "大型板车", "大型厢车", "杂项"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    },
    cctj: {
        color: ["#3398DB"],
       
        title:{
            subtext:"历史出车统计",
            x:'center',
            subtextStyle: {//副标题文本样式{"color": "#aaa"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#ffffff'
            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: ["2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6", "2020-7"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [210, 352, 500, 1334, 1390, 830, 1220]
            }
        ]
    },
    sgfsdtj: {
        color: ["#3398DB"],
       
        title:{
            subtext:"事故发生地统计",
            x:'center',
            subtextStyle: {//副标题文本样式{"color": "#aaa"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#ffffff'
            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: ["甘肃", "遂宁", "广东", "北京", "重庆", "西安", "辽宁"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        // color: '#3f96a5'
                        color: "#80adb5"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [1, 1, 3, 3, 13, 2, 1]
            }
        ]
    },
    ssck:{
        header: ['车牌', '危险等级', '始发地', '目的地',"出发时间", '监控时长'],
        data: [
          ['<span  style="color:black;background-color:">渝A56921</span>', '<span style="color:yellow;background-color:;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">湖北</span>', '<span style="color:black;">2020-06-01 7:00</span>', '<span style="color:black;">1小时8分钟</span>'],
          ['<span  style="color:white;background-color:">渝A54921</span>', '<span style="color:yellow;background-color:;">二级</span>', '重庆', '厦门', '2020-06-01 7:00', '3小时18分钟'],
          ['<span  style="color:black;background-color:">渝B23421</span>', '<span style="color:yellow;background-color:;">三级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">河南</span>', '<span style="color:black;">2020-06-01 17:00</span>', '<span style="color:black;">5小时8分钟</span>'],
          ['<span  style="color:white;background-color:">渝S56921</span>', '<span style="color:yellow;background-color:;">四级</span>', '重庆', '广州', '2020-06-01 7:00', '1小时0分钟'],
          ['<span  style="color:black;background-color:">渝A56211</span>', '<span style="color:yellow;background-color:;">五级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">广东</span>', '<span style="color:black;">2020-06-02 10:00</span>', '<span style="color:black;">40小时8分钟</span>'],
          ['<span  style="color:white;background-color:">渝C56324</span>', '<span style="color:red;background-color:;">六级</span>', '重庆', '上海','2020-06-02 7:00',  '25小时11分钟'],
          ['<span  style="color:black;background-color:">渝D53221</span>', '<span style="color:red;background-color:;">七级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">广西</span>', '<span style="color:black;">2020-06-02 17:00</span>', '<span style="color:black;">22小时27分钟</span>'],
          ['<span  style="color:white;background-color:">渝A12921</span>', '<span style="color:red;background-color:;">八级</span>', '重庆', '北京', '2020-06-02 7:00', '12小时28分钟'],
          ['<span  style="color:black;background-color:">渝A32121</span>', '<span style="color:red;background-color:;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">北京</span>', '<span style="color:black;">2020-06-03 17:00</span>', '<span style="color:black;">6小时44分钟</span>'],
          ['<span  style="color:white;background-color:">渝E53221</span>', '<span style="color:red;background-color:;">一级</span>', '重庆', '黑龙江','2020-06-03 7:00',  '2小时25分钟'],
          ['<span  style="color:black;background-color:">渝F55421</span>', '<span style="color:red;background-color:;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">拉萨</span>', '<span style="color:black;">2020-06-01 17:00</span>', '<span style="color:black;">4小时58分钟</span>'],
          ['<span  style="color:white;background-color:">渝F66921</span>', '<span style="color:red;background-color:;">一级</span>', '重庆', '海南','2020-06-02 7:00',  '7小时32分钟']
        ],
        index: false,
        columnWidth: [90,80,80,80,150,120],
        align: ['center','center','center','center','center','center'],
        oddRowBGC:"#3B828F",
        evenRowBGC:"#91C3CC",
        headerBGC:'#739AA2',
        rowNum:4,
        waitTime:3000
    },
    sscctj:{
        title: {
            text: '今日出车信息统计',
            x:'center',
            y:'15px',
            textStyle: {//副标题文本样式{"color": "#aaa"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#ffffff'
            },
        },
        xAxis: {
            data: ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            axisLabel: {
                show: true,
                textStyle: {
                    // color: '#3f96a5'
                    color: '#80adb5'
                }
            }
            
        },
        yAxis: {
          axisLabel: {
              show: true,
              textStyle: {
                  // color: '#3f96a5'
                  color: '#80adb5'
              }
            }
        },
        series: [{
            type: 'line',
            data:[220, 182, 191, 234, 290, 330, 310],
            markPoint: {
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return idx * 200 + 1000;  
                },
                data: [{
                    type: 'min'
                }, {
                    type: 'max'
                }]
            }
        }]
      },
      ssjbtj:{
        title: {
            text: '今日警报信息统计',
            x:'center',
            y:'15px',
            textStyle: {//副标题文本样式{"color": "#aaa"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#ffffff'
            },
        },
        xAxis: {
            data: ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            axisLabel: {
                show: true,
                textStyle: {
                    // color: '#3f96a5'
                    color: '#80adb5'
                }
            }
            
        },
        yAxis: {
          axisLabel: {
              show: true,
              textStyle: {
                  // color: '#3f96a5'
                  color: '#80adb5'
              }
            }
        },
        series: [{
            type: 'line',
            data:[12, 53, 181, 111, 234, 330, 310],
            markPoint: {
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return idx * 200 + 1000;  
                },
                data: [{
                    type: 'min'
                }, {
                    type: 'max'
                }]
            }
        }]
      },
      sjxx:{
        radius: '70%',
        activeRadius: '75%',
        data: [
          {
            name: '出车(次)',
            value: 55
          },
          {
            name: '里程(公里)',
            value: 120
          },
          {
            name: '危险品(种)',
            value: 78
          },
          {
            name: '危险品(吨)',
            value: 66
          },
          {
            name: '事故(起)',
            value: 8
          }
        ],
        lineWidth: 15,
        digitalFlopStyle: {
          fontSize: 17,
          fill: '#fff'
        },
        showOriginValue: 'true'
      },
      sswd:{
        title: {
            text: '危险品温度走势图',
            x:'center',
            y:'25px',
            textStyle: {//副标题文本样式{"color": "#aaa"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#ffffff'
            },
        },
        xAxis: {
            data: ['18:00', '18:05', '18:10', '18:15', '18:20', '18:25', '18:30'],
            axisLabel: {
                show: true,
                textStyle: {
                    // color: '#3f96a5'
                    color: '#80adb5'
                }
            }
            
        },
        yAxis: {
          axisLabel: {
              show: true,
              textStyle: {
                  // color: '#3f96a5'
                  color: '#80adb5'
              }
            },
            min: 10,
            max: 30,
            interval: 5
        },
        series: [{
            type: 'line',
            data:[23, 22, 22, 22, 23, 21, 20],
            markPoint: {
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return idx * 200 + 1000;  
                },
                data: [{
                    type: 'min'
                }, {
                    type: 'max'
                }]
            }
        }]
      },
      cgqbj:{
        color: ['#bf19ff', '#854cff', '#5f45ff', '#02cdff', '#314976', '#f9e264', '#f47a75', '#009db2', '#024b51- 0780cf', '#765005'],
        
        title: {
            text: 18,
            subtext: '总计',
            textStyle: {
                color: '#f2f2f2',
                fontSize: 20,
            },
            subtextStyle: {
                fontSize: 15,
                color: ['#ff9d19']
            },
            x: 'center',
            y: 'center',
        },
        grid: {
            bottom: 50,
            left: 10,
            right: '10%'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/> {c}次  ({d}%)'
        },
        legend: {
            orient: 'vertical',
            x:'bottom',      //可设定图例在左、右、居中
            y:'center',     //可设定图例在上、下、居中
            padding:[0,50,0,0],
            textStyle: {
                color: '#f2f2f2',
                fontSize: 8,
   
            },
            icon: 'roundRect',
            data: [{
                "name": "温度报警",
                "value": 7
            },{
                "name": "压力报警",
                "value": 7
            },{
                "name": "路况报警",
                "value": 7
            }, {
                "name": "湿度报警",
                "value": 2
            }, {
                "name": "浓度报警",
                "value": 1
            }, {
                "name": "疲劳驾驶报警",
                "value": 5
            },  {
                "name": "其他报警",
                "value": 3
            }, ],
        },
        series: [
            // 主要展示层的
            {
                radius: ['50%', '90%'],
                center: ['50%', '50%'],
                type: 'pie',
                // label: {
                //     position: 'inner',
                //     formatter: '{b}：{c}次',
                // },
                labelLine: {
                    normal: {
                        show: true,
                        length: 8,
                        length2: 9
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    "name": "温度报警",
                    "value": 7
                }, {
                    "name": "压力报警",
                    "value": 7
                },{
                    "name": "路况报警",
                    "value": 7
                },{
                    "name": "湿度报警",
                    "value": 2
                }, {
                    "name": "浓度报警",
                    "value": 1
                }, {
                    "name": "疲劳驾驶报警",
                    "value": 5
                },  {
                    "name": "其他报警",
                    "value": 3
                }, ],
   
            },
            // 边框的设置
            {
                radius: ['45%', '50%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        color: "rgba(250,250,250,0.3)",
                    },
                }],
            }, {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['100%', '100%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#0b5263'
                        }
                    }
                }]
            },
        ]
      },
      bt211:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|温度报警}\n'+'{bottom|11%}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:89, name:'其他',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:11, name:'温度报警',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt231:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|湿度报警}\n'+'{bottom|2%}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:98, name:'其它',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:2, name:'湿度报警',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt251:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|浓度报警}\n'+'{bottom|9%}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:91, name:'其它',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:9, name:'浓度报警',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt271:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|疲劳驾驶预警}\n'+'{bottom|28次}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:89, name:'其他',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:11, name:'疲劳驾驶预警',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt221:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|疲劳驾驶报警}\n'+'{bottom|3次}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:85, name:'其它',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:15, name:'疲劳驾驶报警',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      bt241:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|天气预警}\n'+'{bottom|15次}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:12, name:'天气预警',
                        itemStyle: {
                            color: '#32c5e9'
                        }
                    },
                    {
                        value:1, name:'其他',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#FFDB59'
                        }
                    },
                    
                  
                    
                ]
            }
        ]
      },
      bt261:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|天气报警}\n'+'{bottom|6次}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:12, name:'广州',
                        itemStyle: {
                            color: '#32c5e9'
                        }
                    },
                    {
                        value:1, name:'重庆',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                   
                   
                    
                ]
            }
        ]
      },
      bt281:{
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['60%', '70%'],
                startAngle:0,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: (params)=>{
                            params;
                            return '{top|其它报警}\n'+'{bottom|23次}'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#02EEBF',
                                
                            },
                            bottom: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'bold',
                                padding: [0, 0, 12, 0],
                            }
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }    
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {
                        value:89, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#32c5e9'
                        }
                    },
                    {
                        value:11, name:'其他报警',
                        itemStyle: {
                            color: '#FFDB59'
                        }
                    },
                    
                ]
            }
        ]
      },
      wxyflyj:{
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['一类','二类','三类','四类','五类','六类','七类','八类','九类'],
            x: 'center', // 'center' | 'left' | {number},
            y: 'top', // 'center' | 'bottom' | {number}
            // padding: 10,    // [5, 10, 15, 20]
            itemGap: 20,
            textStyle: {color: 'white',fontSize:10},
        },
        grid:{
            top:'22%',//距上边距
            // left:'25%',//距离左边距
            // right:'25%',//距离右边距
            // bottom:'25%',//距离下边距
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisPointer: {
                    type: 'shadow',
                },
                axisLabel: {
                    textStyle: {
                        // color: '#3f96a5'
                        color: '#80adb5'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '预警次数',
                min: 0,
                max: 200,
                interval: 50,
                nameTextStyle: { color: '#3f96a5',align: 'left' },
                axisLabel: {
                    formatter: '{value} 次',
                    textStyle: {
                        color: '#3f96a5'
                        // color: '#80adb5'
                    }
                }
            },
            // {
            //     type: 'value',
            //     name: '涉及种类',
            //     min: 0,
            //     max: 23,
            //     interval: 5,
            //     axisLabel: {
            //         formatter: '{value} 种'
            //     }
            // }
        ],
        series: [
            {
                name: '一类',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '二类',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '三类',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '四类',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '五类',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '六类',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '七类',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '八类',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '九类',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            // {
            //     name: '日均预警数量',
            //     type: 'line',
            //     yAxisIndex: 1,
            //     data: [2, 2, 3, 4, 6, 10, 20, 20, 23.0, 16, 12, 6]
            // }
        ]
      },
      tswxyflyj:{
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['医废','危废'],
            x: 'center', // 'center' | 'left' | {number},
            y: 'top', // 'center' | 'bottom' | {number}
            // padding: 10,    // [5, 10, 15, 20]
            itemGap: 20,
            textStyle: {color: 'white',fontSize:10},
        },
        grid:{
            top:'22%',//距上边距
            // left:'25%',//距离左边距
            // right:'25%',//距离右边距
            // bottom:'25%',//距离下边距
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisPointer: {
                    type: 'shadow',
                },
                axisLabel: {
                    textStyle: {
                        // color: '#3f96a5'
                        color: '#80adb5'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '预警次数',
                min: 0,
                max: 200,
                interval: 50,
                nameTextStyle: { color: '#3f96a5',align: 'left' },
                axisLabel: {
                    formatter: '{value} 次',
                    textStyle: {
                        color: '#3f96a5'
                        // color: '#80adb5'
                    }
                }
            },
            // {
            //     type: 'value',
            //     name: '涉及种类',
            //     min: 0,
            //     max: 23,
            //     interval: 5,
            //     axisLabel: {
            //         formatter: '{value} 种'
            //     }
            // }
        ],
        series: [
            {
                name: '医废',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '危废',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            
            // {
            //     name: '日均预警数量',
            //     type: 'line',
            //     yAxisIndex: 1,
            //     data: [2, 2, 3, 4, 6, 10, 20, 20, 23.0, 16, 12, 6]
            // }
        ]
      },
      yjxxbt:{

            color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show : true,
            },
            legend: {
                type:"scroll",
                orient: 'vertical',
                left:'10%',
                align:'left',
                top:'middle',
                textStyle: {
                    color:'#8C8C8C'
                },
                height:150
            },
            series:[
                {
                    name:'业务警种',
                    type:'pie',
                    radius : [0, 150],
                    data:[
                        {value:20, name:'国宝'},
                        {value:30, name:'治安'},
                        {value:25, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                }
            ]
      }
};
