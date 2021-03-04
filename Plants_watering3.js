function load1(){
    $.ajax({
        type: "GET",
        url: "https://iot.pomelo072.top/FGD/details",
        data: {DeviceID:1},
        dataType: "json",
        success: function (res) {
            if (res.Data.length==0) {
                alert("ERROR!")
                } else {
                    // console.log(res);
                    // console.log(res.Data);
                    var recordtime = res.Data.RECORDTIME;
                    var temperature = res.Data.TEMPERATURE;
                    var humidity = res.Data.HUMIDITY;
                    var lightintensity = res.Data.LIGHTINTENSITY;
                    var solidhumidity = res.Data.SOLIDHUMIDITY; 
                      
                }
                $('#temp2').text(temperature);
                $('#humi2').text(humidity);
                $('#ligh2').text(lightintensity);
                $('#soli2').text(solidhumidity);
    
                if(solidhumidity>220){
                    document.getElementById('color').style.backgroundColor='rgb(226, 90, 71)';
                }else{
                    document.getElementById('color').style.backgroundColor='rgb(129, 247, 164)';
                }
        },
        error:function(error){
            alert("error!");
        }
    });
    }


    function load2(){
        var temperature=new Array();
        var humidity=new Array();
        var lightintensity=new Array();
        var solidhumidity=new Array();
    $.ajax({
        type: "GET",
        async: false,
        url: "https://iot.pomelo072.top/FGD/list",
        data: {DeviceID:1},
        dataType: "json",
        success: function (res2) {
            if (res2.Data.length==0) 
            {
                alert("ERROR!")
            }
            else 
            {
                console.log(res2);
                console.log(res2.Data[1].recordtime);
                for(var i=0;i<res2.Data.length;i++)
                {
                    temperature[i] = parseInt(res2.Data[i].temperature);
                    humidity[i] = parseInt(res2.Data[i].hum_id_ity);
                    lightintensity[i] = parseInt(res2.Data[i].lightintensity);
                    solidhumidity[i] = parseInt(res2.Data[i].sol_id_hum_id_ity); 
                }
                console.log(temperature);
                console.log(humidity);
                console.log(lightintensity);
                console.log(solidhumidity);
            }
            {
                var can1 = document.getElementById("temp1");
                var ctx1 = can1.getContext("2d");
                var can2 = document.getElementById("humi1");
                var ctx2 = can2.getContext("2d");
                var can3 = document.getElementById("ligh1");
                var ctx3 = can3.getContext("2d");
                var can4 = document.getElementById("soli1");
                var ctx4 = can4.getContext("2d");
                // nums = [268,345,233,532,345,555,888,999,666,435,235,356];
                datas = ["0","2","4","6","8","10","12","14","16","18","20","22"];
                //画出坐标线
                {
                    ctx1.beginPath();
                    ctx1.moveTo(30,130);
                    ctx1.lineTo(30,20);
                    ctx1.moveTo(30,130);
                    ctx1.lineTo(210,130);
                    ctx1.closePath();
                    ctx1.stroke();
    
                    ctx2.beginPath();
                    ctx2.moveTo(30,130);
                    ctx2.lineTo(30,20);
                    ctx2.moveTo(30,130);
                    ctx2.lineTo(210,130);
                    ctx2.closePath();
                    ctx2.stroke();
    
                    ctx3.beginPath();
                    ctx3.moveTo(30,130);
                    ctx3.lineTo(30,20);
                    ctx3.moveTo(30,130);
                    ctx3.lineTo(210,130);
                    ctx3.closePath();
                    ctx3.stroke();
    
                    ctx4.beginPath();
                    ctx4.moveTo(30,130);
                    ctx4.lineTo(30,20);
                    ctx4.moveTo(30,130);
                    ctx4.lineTo(210,130);
                    ctx4.closePath();
                    ctx4.stroke();
                }
                //画出折线 
                {
                    for (i = 0;i <12;i ++)
                    {
                        //起始坐标
                        var numsY1 = 130-(temperature[i]+10)*2;
                        var numsX1 = i*15+30;
                        //终止坐标
                        var numsNY1 = 130-(temperature[i+1]+10)*2;
                        var numsNX1 = (i+1)*15+30;
                        ctx1.beginPath();
                        ctx1.moveTo(numsX1,numsY1);
                        ctx1.lineTo(numsNX1,numsNY1);
                        ctx1.lineWidth = 1;
                        ctx1.strokeStyle = "#d34949";
                        ctx1.closePath();
                        ctx1.stroke();
                    }
    
                    for (i = 0;i <12;i ++)
                    {
                        //起始坐标
                        var numsY2 = 130-(humidity[i])*1.1;
                        var numsX2 = i*15+30;
                        //终止坐标
                        var numsNY2 = 130-(humidity[i+1])*1.1;
                        var numsNX2 = (i+1)*15+30;
                        ctx2.beginPath();
                        ctx2.moveTo(numsX2,numsY2);
                        ctx2.lineTo(numsNX2,numsNY2);
                        ctx2.lineWidth = 2;
                        ctx2.strokeStyle = "#5f5fe2";
                        ctx2.closePath();
                        ctx2.stroke();
                    }
    
                    for (i = 0;i <12;i ++)
                    {
                    //起始坐标
                        var numsY3 = 130-lightintensity[i]*0.4;
                        var numsX3 = i*15+30;
                        //终止坐标
                        var numsNY3 = 130-lightintensity[i+1]*0.4;
                        var numsNX3 = (i+1)*15+30;
                        ctx3.beginPath();
                        ctx3.moveTo(numsX3,numsY3);
                        ctx3.lineTo(numsNX3,numsNY3);
                        ctx3.lineWidth = 2;
                        ctx3.strokeStyle = "#f1af5e";
                        ctx3.closePath();
                        ctx3.stroke();
                    }   
    
                    for (i = 0;i <12;i ++)
                    {
                        //起始坐标
                        var numsY4 = 130-(solidhumidity[i]-100)/2*1.1;
                        var numsX4 = i*15+30;
                        //终止坐标
                        var numsNY4 = 130-(solidhumidity[i+1]-100)/2*1.1;
                        var numsNX4 = (i+1)*15+30;
                        ctx4.beginPath();
                        ctx4.moveTo(numsX4,numsY4);
                        ctx4.lineTo(numsNX4,numsNY4);
                        ctx4.lineWidth = 2;
                        ctx4.strokeStyle = "#39be28";
                        ctx4.closePath();
                        ctx4.stroke();
                    }
                }
                // 画出折线上的点和数值，横坐标值，纵坐标值
                {        
                    for (i = 0;i <12;i ++)
                    {
                        var numsY1 = 130-(temperature[i]+10)*2;
                        var numsX1 = i*15+30;
                        //画出折线上的点
                        ctx1.beginPath();
                        ctx1.arc(numsX1,numsY1, 2, 0, 2*Math.PI);
                        ctx1.font = "7px scans-serif";
                        ctx1.fillStyle = "black";
                        //折线上的点值
                        var text1 = ctx1.measureText(temperature[i]);
                        ctx1.fillText(temperature[i],numsX1-text1.width,numsY1-5);
                        //绘制纵坐标
                        var colText1 = ctx1.measureText((12-i)*5-15);
                        ctx1.fillText((12-i)*5-15,10,20+10*i);
                        //绘制横坐标并判断
                        var rowText1 = ctx1.measureText(datas[i]);
                        ctx1.fillText(datas[i],numsX1-rowText1.width/4,140);
                    ctx1.closePath();
                    ctx1.stroke();
                    }
    
                    for (i = 0;i <12;i ++)
                    {
                        var numsY2 = 130-(humidity[i])*1.1;
                        var numsX2 = i*15+30;
                        //画出折线上的点
                        ctx2.beginPath();
                        ctx2.arc(numsX2,numsY2, 2, 0, 2*Math.PI);
                        ctx2.font = "7px scans-serif";
                        ctx2.fillStyle = "black";
                        //折线上的点值
                        var text = ctx2.measureText(humidity[i]);
                        ctx2.fillText(humidity[i],numsX2-text.width,numsY2-5);
                        //绘制纵坐标
                        if(i>0)
                        {
                        var colText2 = ctx2.measureText((12-i)*10);
                        ctx2.fillText((12-i)*10-10,10,10+11*i);
                        }
                        //绘制横坐标并判断
                        if (i < 12)
                        {
                            var rowText2 = ctx2.measureText(datas[i]);
                            ctx2.fillText(datas[i],numsX2-rowText2.width/2,140);
                        }
                        else if(i == 12) 
                        {
                            return;
                        }   
                        ctx2.closePath();
                        ctx2.stroke();
                    }
    
                    for (i = 0;i <12;i ++)
                    {
                        var numsY3 = 130-lightintensity[i]*0.4;
                        var numsX3 = i*15+30;
                        //画出折线上的点
                        ctx3.beginPath();
                        ctx3.arc(numsX3,numsY3, 2, 0, 2*Math.PI);
                        ctx3.font = "7px scans-serif";
                        ctx3.fillStyle = "black";
                        var text3 = ctx3.measureText(lightintensity[i]);
                        ctx3.fillText(lightintensity[i],numsX3-text3.width,numsY3-5);
                        //绘制纵坐标
                        if(i>0)
                        {
                            var colText3 = ctx3.measureText((12-i)*10);
                            ctx3.fillText((12-i)*30-30,10,10+11*i);
                        }
                        //绘制横坐标并判断
                        if (i < 12)
                        {
                            var rowText3 = ctx3.measureText(datas[i]);
                            ctx3.fillText(datas[i],numsX3-rowText3.width/2,140);
                        }
                        else if(i == 12) 
                        {
                            return;
                        }
                        ctx3.closePath();
                        ctx3.stroke();
                    }
    
                    for (i = 0;i <12;i ++)
                    {
                        var numsY4 = 130-(solidhumidity[i]-100)/2*1.1;
                        var numsX4 = i*15+30;
                        //画出折线上的点
                        ctx4.beginPath();
                        ctx4.arc(numsX4,numsY4, 2, 0, 2*Math.PI);
                        ctx4.font = "7px scans-serif";
                        ctx4.fillStyle = "black";
                        //折线上的点值
                        var text4 = ctx4.measureText(solidhumidity[i]);
                        ctx4.fillText(solidhumidity[i],numsX4-text4.width,numsY4-5);
                        //绘制纵坐标
                        if(i>0)
                        {   
                            var colText4 = ctx4.measureText((12-i)*10);
                            ctx4.fillText((12-i)*20+80,10,10+11*i);
                        }
                        //绘制横坐标并判断
                        if (i < 12)
                        {
                            var rowText4 = ctx4.measureText(datas[i]);
                            ctx4.fillText(datas[i],numsX4-rowText4.width/2,140);
                        }
                        else if(i == 12) 
                        {
                            return;
                        }
                        ctx4.closePath();
                        ctx4.stroke();
                    }
                }
            }
        },
        error:function(error){
            alert("error!");
        }
    })
    }