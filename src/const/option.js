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
            text: ""
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
                            return '{top|综合事故率}\n'+'11%'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                            color:'#feb000'
                        }
                    },
                    {
                        value:11, name:'事故',
                        itemStyle: {
                            color: '#00ffff'
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
                            return '{top|泄露事故率}\n'+'2%'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                        value:98, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#feb000'
                        }
                    },
                    {
                        value:2, name:'事故',
                        itemStyle: {
                            color: '#00ffff'
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
                            return '{top|交通事故率}\n'+'9%'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                        value:91, name:'无事故',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'#feb000'
                        }
                    },
                    {
                        value:9, name:'事故',
                        itemStyle: {
                            color: '#00ffff'
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
                            return '{top|安全运输完成}\n'+'3764次'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                            color:'#feb000'
                        }
                    },
                    {
                        value:11, name:'事故',
                        itemStyle: {
                            color: '#00ffff'
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
                            return '{top|运输占比}\n'+'15%'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                            color:'#feb000'
                        }
                    },
                    {
                        value:15, name:'一类',
                        itemStyle: {
                            color: '#00ffff'
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
                            return '{top|事故高发地}\n'+'广州'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                            color: 'red'
                        }
                    },
                    {
                        value:3, name:'四川',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'green'
                        }
                    },
                    {
                        value:5, name:'北京',
                        itemStyle: {
                            color: 'yellow'
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
                            return '{top|事故高发时段}\n'+'下午'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                            color: 'red'
                        }
                    },
                    {
                        value:3, name:'四川',
                        highlight: true,
                        label: {
                          show: true  
                        },
                        itemStyle: {
                            color:'green'
                        }
                    },
                    {
                        value:5, name:'北京',
                        itemStyle: {
                            color: 'yellow'
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
                            return '{top|避免事故发生}\n'+'23次'
                        },
                        rich: {
                            top: {
                                fontSize: 12,
                                color: '#fff',
                                
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
                            color:'#feb000'
                        }
                    },
                    {
                        value:11, name:'事故',
                        itemStyle: {
                            color: '#00ffff'
                        }
                    },
                    
                ]
            }
        ]
      },
    // 迁徙
      map1:{
      }
};
