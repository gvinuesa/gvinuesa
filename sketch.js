function preload(){
  table = loadTable("https://docs.google.com/spreadsheets/d/e/2PACX-1vRw79ZO_gf6V4BZDm0zOBJJPv0wVbUdobK0zTSFOqCzd95APX-szHRmkKW_eFAlXkvKtrBOHexOkrd1/pub?gid=901010675&single=true&output=csv", "csv", "header");
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  fill(0,0,0);
  rect(120,5,100,10);
  rect(120,300,100,10);
  textSize(20);
  text("AULA 213", 120, 240);
  line(0, 280, 350, 280);
  text("AULA 214", 120, 540);
  

  
}

function draw() {
    for (let r = 0; r < table.getRowCount(); r++){
    const name = table.getString(r, "COMPUTER NUMBER");
     console.log(name);
     const name1 = table.getString(r, "STATUS");
     console.log(name1);

     if (name == "COMPUTER 1"){
      circle(40, 60, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);
    }

    if (name == "COMPUTER 2"){
      circle(80, 60, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);
    }

    if (name == "COMPUTER 3"){
      circle(120, 60, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);
    }

    if (name == "COMPUTER 4"){
      circle(160, 60, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);
    }

    if (name == "COMPUTER 5"){
      circle(40, 100, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);
    }

    if (name == "COMPUTER 6"){
      circle(80, 100, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 7"){
      circle(120, 100, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }
    if (name == "COMPUTER 8"){
      circle(160, 100, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 9"){
      circle(40, 140, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 10"){
      circle(80, 140, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 11"){
      circle(120, 140, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 12"){
      circle(160, 140, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 13"){
      circle(40, 180, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 14"){
      circle(80, 180, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);

    }

    if (name == "COMPUTER 15"){
      circle(120, 180, 20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    } else if (name1 =="FREE"){
      fill(0,255,0);
    }
      
    if (name == "COMPUTER 16"){
      circle(160,180,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if (name1 == "FREE");{
      fill(0,255,0);
    }

    if(name == "COMPUTER 17"){
      circle(260,60,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if (name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 18"){
      circle(300,60,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 19"){
      circle(220,100,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 20"){
      circle(260,100,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 21"){
      circle(300,100,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 22"){
      circle(220,140,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 23"){
      circle(260,140,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 24"){
      circle(300,140,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 25"){
      circle(220,180,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 26"){
      circle(260,180,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 27"){
      circle(300,180,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }





    if (name =="COMPUTER 28"){
      circle(40,360 ,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 29"){
      circle(80,360,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 30"){
      circle(120,360,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 31"){
      circle(160,360,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 32"){
      circle(40,400,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 33"){
      circle(80,400,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 34"){
      circle(120,400,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 35"){
      circle(160,400,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 36"){
      circle(40,440,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 37"){
      circle(80,440,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 38"){
      circle(120,440,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 39"){
      circle(160,440,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 40"){
      circle(40,480,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 41"){
      circle(80,480,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 42"){
      circle(120,480,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 43"){
      circle(160,480,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 44"){
      circle(260,360,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 45"){
      circle(300,360,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 46"){
      circle(220,400,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 47"){
      circle(260,400,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 48"){
      circle(300,400,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }
    if (name =="COMPUTER 49"){
      circle(220,440,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 50"){
      circle(260,440,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 51"){
      circle(300,440,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 52"){
      circle(220,480,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 53"){
      circle(260,480,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }

    if (name =="COMPUTER 54"){
      circle(300,480,20);
    }
    if (name1 == "TAKEN"){
      fill(255,0,0);
    }else if(name1 == "FREE"){
      fill(0,255,0);
    }
    
  }

  

  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}