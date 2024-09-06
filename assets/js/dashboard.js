 
    
    $(function() {
        "use strict";
        // ============================================================== 
        // Perkembangan penduduk jenis kelamin
        // ============================================================== 

        new Chartist.Bar('.ct-chart-penduduk', {
            labels: ['Sem1 2017', 'Sem2 2017', 'Sem1 2018', 'Sem2 2018',
                    'Sem1 2019', 'Sem2 2019', 'Sem1 2020', 'Sem2 2020',
                    'Sem1 2021', 'Sem2 2021', 'Sem1 2022', 'Sem2 2022',
                    'Sem1 2023', 'Sem2 2023'],
            series: [
                [6199, 6221, 6261, 6245, 6245, 6312, 6338, 6324, 6355, 6383, 6403, 6403, 6408, 6439],
                [6253, 6274, 6336, 6324, 6366, 6390, 6419, 6347, 6384, 6446, 6459, 6464, 6498, 6544]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value) + ' Jiwa';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 40px'
                });
            }
        });
    });
    
    $(function() {
        "use strict";
        // ============================================================== 
        // Perkembangan keluarga
        // ============================================================== 

        new Chartist.Bar('.ct-chart-keluarga', {
            labels: ['Sem1 2017', 'Sem2 2017', 'Sem1 2018', 'Sem2 2018',
                    'Sem1 2019', 'Sem2 2019', 'Sem1 2020', 'Sem2 2020',
                    'Sem1 2021', 'Sem2 2021', 'Sem1 2022', 'Sem2 2022',
                    'Sem1 2023', 'Sem2 2023'],
            series: [
                [3969, 4077, 4112, 4145, 4170, 4220, 4266, 4193, 4233, 4145, 4324, 4322, 4343]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value) + ' KK';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 40px'
                });
            }
        });
    });




    // ============================================================== 
    // Penduduk Jenis Kelamin
    // ============================================================== 
    var chart = new Chartist.Pie('.ct-chart-category', {
        series: [8228, 8468],
        labels: ['Laki-laki', 'Perempuan']
    }, {
        donut: true,
        showLabel: false,
        donutWidth: 40

    });


    chart.on('draw', function(data) {
        if (data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1000,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                    fill: 'freeze'
                }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    


    // ============================================================== 
    // Customer acquisition
    // ============================================================== 
    var chart = new Chartist.Line('.ct-chart', {
        labels: ['Mon', 'Tue', 'Wed'],
        series: [
            [1, 5, 2, 5],
            [2, 3, 4, 8]

        ]
    }, {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true
    });

    chart.on('draw', function(data) {
        if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
                d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
    });




    // ============================================================== 
    // Penduduk Cards
    // ============================================================== 
    $("#sparkline-penduduk").sparkline([16044, 15975, 16094, 16176, 16333, 16258, 16266, 16079, 16241, 16227, 16128, 16179, 16279, 16234], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#5969ff',
        fillColor: '#dbdeff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });



    $("#sparkline-laki").sparkline([8083, 8040, 8136, 8150, 8245, 8212, 8231, 8137, 8225, 8209, 8143, 8177, 8237, 8191], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#ff407b',
        fillColor: '#ffdbe6',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });



    $("#sparkline-perempuan").sparkline([7961, 7935, 7958, 8026, 8088, 8046, 8035, 7942, 8016, 8018, 7985, 8002, 8042, 8043], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#25d5f2',
        fillColor: '#dffaff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    });



    $("#sparkline-keluarga").sparkline([4905, 5011, 5072, 5105, 5172, 5175, 5243, 5097, 5163, 5105, 5213, 5225, 5285], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#fec957',
        fillColor: '#fff2d5',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true,
    });





    // ============================================================== 
    // Total Revenue
    // ============================================================== 
    Morris.Bar({
        element: 'keluarga_bar',
        behaveLikeLine: true,
        data: [
            { x: 'Sem1 2017', y: 3969, },
            { x: 'Sem2 2017', y: 4077, },
            { x: 'Sem1 2018', y: 4112, },
            { x: 'Sem2 2018', y: 4145, },
            { x: 'Sem1 2019', y: 4170, },
            { x: 'Sem2 2019', y: 4220, },
            { x: 'Sem1 2020', y: 4266, },
            { x: 'Sem2 2020', y: 4193, },
            { x: 'Sem1 2021', y: 4233, },
            { x: 'Sem2 2021', y: 4145, },
            { x: 'Sem1 2022', y: 4324, },
            { x: 'Sem2 2022', y: 4322, },
            { x: 'Sem1 2023', y: 4343, }
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['KK'],
        lineColors: ['#5969ff'],
        resize: true

    });
    
    Morris.Bar({
        element: 'penduduk_bar',
        behaveLikeLine: true,
        data: [
            { x: 'Sem1 2017', y: 12452, },
            { x: 'Sem2 2017', y: 12495, },
            { x: 'Sem1 2018', y: 12597, },
            { x: 'Sem2 2018', y: 12569, },
            { x: 'Sem1 2019', y: 12611, },
            { x: 'Sem2 2019', y: 12702, },
            { x: 'Sem1 2020', y: 12757, },
            { x: 'Sem2 2020', y: 12671, },
            { x: 'Sem1 2021', y: 12739, },
            { x: 'Sem2 2021', y: 12829, },
            { x: 'Sem1 2022', y: 12862, },
            { x: 'Sem2 2022', y: 12867, },
            { x: 'Sem1 2023', y: 12906, },
            { x: 'Sem2 2023', y: 12983, }
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['Jiwa'],
        lineColors: ['#5969ff'],
        resize: true

    });
    
(function(window, document, $, undefined) {
    "use strict";
    $(function() {

        if ($('#morris_area').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Area({
                element: 'morris_area',
                behaveLikeLine: true,
                data: [
                    { x: '2011 Q1', y: 4, z: 3 },
                    { x: '2011 Q2', y: 2, z: 1 },
                    { x: '2011 Q3', y: 2, z: 3 },
                    { x: '2011 Q4', y: 4, z: 1 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['Y', 'Z'],
                 lineColors: ['#5969ff', '#ff407b'],
                   resize: true,
                   gridTextSize: '14px'

                
            });

        }




        if ($('#morris_line').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Line({
                element: 'morris_line',
                behaveLikeLine: true,
                data: [
                    { y: '2006', a: 10, b: 20 },
                    { y: '2007', a: 65, b: 45 },
                    { y: '2008', a: 50, b: 40 },
                    { y: '2009', a: 75, b: 65 },
                    { y: '2010', a: 50, b: 40 },
                    { y: '2011', a: 75, b: 65 },
                    { y: '2012', a: 100, b: 90 }
                ],

                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                   lineColors: ['#5969ff', '#ff407b'],
                     resize: true,
                        gridTextSize: '14px'
            });

        }

        if ($('#morris_bar').length) {
            Morris.Bar({
                element: 'morris_bar',
                data: [
                    { x: '2011 Q1', y: 0 },
                    { x: '2011 Q2', y: 1 },
                    { x: '2011 Q3', y: 2 },
                    { x: '2011 Q4', y: 3 },
                    { x: '2012 Q1', y: 4 },
                    { x: '2012 Q2', y: 5 },
                    { x: '2012 Q3', y: 6 },
                    { x: '2012 Q4', y: 7 },
                    { x: '2013 Q1', y: 8 }
                ],
                xkey: 'x',
                ykeys: ['y'],
                labels: ['Y'],
                   barColors: ['#5969ff'],
                     resize: true,
                        gridTextSize: '14px'

            });
        }


        if ($('#morris_stacked').length) {
            // Use Morris.Bar
            Morris.Bar({
                element: 'morris_stacked',
                data: [
                    { x: '2011 Q1', y: 3, z: 2, a: 3 },
                    { x: '2011 Q2', y: 2, z: null, a: 1 },
                    { x: '2011 Q3', y: 0, z: 2, a: 4 },
                    { x: '2011 Q4', y: 2, z: 4, a: 3 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                stacked: true,
                   barColors: ['#5969ff', '#ff407b', '#25d5f2'],
                     resize: true,
                        gridTextSize: '14px'
            });
        }


        if ($('#morris_udateing').length) {
            var nReloads = 0;

            function data(offset) {
                var ret = [];
                for (var x = 0; x <= 360; x += 10) {
                    var v = (offset + x) % 360;
                    ret.push({
                        x: x,
                        y: Math.sin(Math.PI * v / 180).toFixed(4),
                        z: Math.cos(Math.PI * v / 180).toFixed(4)
                    });
                }
                return ret;
            }
            var graph = Morris.Line({
                element: 'morris_udateing',
                data: data(0),
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['sin()', 'cos()'],
                parseTime: false,
                ymin: -1.0,
                ymax: 1.0,
                hideHover: true,
                lineColors: ['#5969ff', '#ff407b'],
                  resize: true
            });

            function update() {
                nReloads++;
                graph.setData(data(5 * nReloads));
                $('#reloadStatus').text(nReloads + ' reloads');
            }
            setInterval(update, 100);
        }


        if ($('#morris_usia').length) {
            Morris.Donut({
                element: 'morris_usia',
                data: [
                    { value: 3711, label: '0-17 Tahun' },
                    { value: 8014, label: '18-55 Tahun' },
                    { value: 1384, label: '> 56 Tahun' }
                    
                ],
             
                labelColor: '#2e2f39',
                   gridTextSize: '14px',
                colors: [
                     "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750"
                               
                ],

                formatter: function(x) { return x + " Jiwa" },
                  resize: true
            });
        }
        
        if ($('#morris_kerja').length) {
            Morris.Donut({
                element: 'morris_kerja',
                data: [
                    { value: 3119, label: 'Karyawan' },
                    { value: 83, label: 'Petani' },
                    { value: 5580, label: 'Lainnya' }                    
                ],
             
                labelColor: '#2e2f39',
                   gridTextSize: '14px',
                colors: [
                     "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750",
                                "#fff740",
                                "#ffe730"
                               
                ],

                formatter: function(x) { return x + " Orang" },
                  resize: true
            });
        }








    });

})(window, document, window.jQuery);
