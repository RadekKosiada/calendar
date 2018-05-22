// TRIGGERING 'VERANSTALTUGEN' FIRST
$('#ver-btn').on("click", function getEventsFirst(){

  let reqEveFirst = new XMLHttpRequest();

  reqEveFirst.onreadystatechange = function() {
    if(reqEveFirst.readyState ==4 && reqEveFirst.status ==200 == !clickedEvents) {   
      clickedEvents=true;
      clickedCurrent=false; 
      data = JSON.parse(reqEveFirst.response);
            
      current = data.aktuelles;
      events = data.veranstaltungen;
  
  $('#aktuelles').detach();
  $('#container3').empty();
  $('#veranstaltungen').empty();

  $('#veranstaltungen').css('display', 'none');
  $('#container3').css('display', 'none'); 
  $('#container4').css('display', 'block'); 
  $('#container5').css('display', 'block');
  $('#ver-btn').css('background-color', 'white'); 
  $('#akt-btn').css('background-color', '#ddd');         
  
  for(let l = 0; l < events.length; l++) {
    eve=events[l];
    
    //'VERANSTALTUNGEN' TAGS 
    
    $('#container4').append(`<a href='${eve.img}' target='blank'><img id='img${l}' class='clearfix' src='${eve.img}' alt='photo of the event'></a>`);         
    $('#container4').append(`<h6 id='date-ver${l}' class='date'>${eve.date}</h6>`);      
    $(`#date-ver${0}`).css('padding-top','30px');
    $(`#date-ver${0}`).css('margin-top', '5px');    
    
    eveDate = `#date-ver${l}`;  
    ed = eve.date; 
    if (ed[0]==0){
      eDay = `${ed[1]+ed[2]}`;
     } else {
      eDay = `${ed[0]+ed[1]+ed[2]}`;
     }   
    eYear = ` ${ed[6]+ed[7]+ed[8]+ed[9]}`;

    if(ed[3] ==0 && ed[4] ==1){
      $(eveDate).html(`${eDay} Januar ${eYear}`);
    }else if (ed[3] ==0 && ed[4] ==2){
      $(eveDate).html(`${eDay} Februar ${eYear}`);
    }else if (ed[3] ==0 && ed[4] ==3){
      $(eveDate).html(`${eDay} März ${eYear}`);
    }else if (ed[3] ==0 && ed[4] ==4){
      $(eveDate).html(`${eDay} April ${eYear}`);
    }else if (ed[3] ==0 && ed[4] ==5){
      $(eveDate).html(`${eDay} Mai ${eYear}`);
    }else if (ed[3] ==0 && ed[4] ==6){
      $(eveDate).html(`${eDay} Juni ${eYear}`);
    }else if (ed[3] ==0 && ed[4] ==7){
      $(eveDate).html(`${eDay} Juli ${eYear}`);          
    }else if (ed[3] ==0 && ed[4] ==8){
      $(eveDate).html(`${eDay} August ${eYear}`);
    }else if (ed[3] ==0 && ed[4] ==9){
      $(eveDate).html(`${eDay} September ${eYear}`);
    }else if (ed[3] ==1 && ed[4] ==0){
      $(eveDate).html(`${eDay} Oktober ${eYear}`);
    }else if (ed[3] ==1 && ed[4] ==1){
      $(eveDate).html(`${eDay} November ${eYear}`);
    }else if (ed[3] ==1 && ed[4] ==2){
      $(eveDate).html(`${eDay} Dezember ${eYear}`);
    };
    
    $('#container4').append(`<h3 id='headline-ver${l}' class ='headline'>${eve.headline}</h3>`);    
      if(!eve.infos) {
      $('#container4').append(`<h6 id='infos-ver${l}' class= 'infos'>Placeholder placeholder</h6>`);
      $(`#infos-ver${l}`).css('visibility', 'hidden');
    } else {
      $('#container4').append(`<h6 id='infos-ver${l}' class= 'infos'>${eve.infos}</h6>`);            
    }
    $('#container4').append(`<button id='btn-infos-ver${l}' class='btn-infos'>> mehr Informationen</button>`);          
    $('#container4').append(`<p id='moreInfos-ver${l}' class='moreInfos'></p>`);
    $(`#btn-infos-ver${l}`).css('margin-bottom', '50px');
    $('#container4').append(btmBorder);

    let moreInfCtrlL = false;
          $(`#btn-infos-ver${l}`).click(function() {
            if(!moreInfCtrlL){ 
            $(`#moreInfos-ver${l}`).html(`${eve.moreInfos}`);      
            $(`#btn-infos-ver${l}`).css('margin-bottom', '10px');
            $(`#btn-infos-ver${l}`).html('> weniger Informationen');
            moreInfCtrlL=true;
            } else {
              $(`#moreInfos-ver${l}`).empty();            
            $(`#btn-infos-ver${l}`).css('margin-bottom', '50px');
            $(`#btn-infos-ver${l}`).html('> mehr Informationen');
            moreInfCtrlL=false;            
            }
          });
        }

  // 'AKTUELLES' TAG   
  for (let y = 0; y<current.length; y++) {
      
    cur=current[y];

    $('#container5').append(`<a href='${cur.img}' target='blank'><img id='img${y}' class='clearfix' src='${cur.img}' alt='photo of the event'></a>`);        
    $('#container5').append(`<h6 id='date${y}' class='date'>`+ cur.date + `</h6>`); 
    $(`#date${y}`).css('color','#696969');   
    $(`#date${0}`).css('padding-top','30px');
    $(`#date${0}`).css('margin-top', '5px');      
    
    // changing date's format 
     curDate = `#date${y}`;
     cd = cur.date;  
     if (cd[0]==0){
      cDay = `${cd[1]+cd[2]}`;
     } else {
      cDay = `${cd[0]+cd[1]+cd[2]}`;
     } 
     cYear = ` ${cd[6]+cd[7]+cd[8]+cd[9]}`;        
    
     if(cd[3] ==0 && cd[4] ==1){
       $(curDate).html(`${cDay} Januar ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==2){
       $(curDate).html(`${cDay} Februar ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==3){
       $(curDate).html(`${cDay} März ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==4){
       $(curDate).html(`${cDay} April ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==5){
       $(curDate).html(`${cDay} Mai ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==6){
       $(curDate).html(`${cDay} Juni ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==7){
       $(curDate).html(`${cDay} Juli ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==8){
       $(curDate).html(`${cDay} August ${cYear}`);
     }else if (cd[3] ==0 && cd[4] ==9){
       $(curDate).html(`${cDay} September ${cYear}`);
     }else if (cd[3] ==1 && cd[4] ==0){
       $(curDate).html(`${cDay} Oktober ${cYear}`);
     }else if (cd[3] ==1 && cd[4] ==1){
       $(curDate).html(`${cDay} November ${cYear}`);
     }else if (cd[3] ==1 && cd[4] ==2){
       $(curDate).html(`${cDay} Dezember ${cYear}`);
     };

    $('#container5').append(`<h3 id='headline${y}' class ='headline'>${cur.headline}</h3>`);      
    $(`#headline${y}`).css('color','#696969');

    if(cur.infos == false) {
      $('#container5').append(`<h6 id='infos${y}' class= 'infos'>Placeholder placeholder</h6>`);
      $(`#infos${y}`).css('visibility', 'hidden');
    } else {
      $('#container5').append(`<h6 id='infos${y}' class= 'infos'>${cur.infos}</h6>`);
      $(`#infos${y}`).css('color','#696969');
    }
    $('#container5').append(`<button id='btn-infos${y}' class= 'btn-infos'>> mehr Informationen</button>`);
    $(`#btn-infos${y}`).css('color','#696969'); 
    $(`#btn-infos${y}`).css('margin-bottom','50px');    
    $('#container5').append(`<p id='moreInfos${y}' class='moreInfos'></p>`);
    $('#container5').append(btmBorder);

    let moreInfCtrlL2 = false;
          $(`#btn-infos${y}`).click(function() {
            if(!moreInfCtrlL2){ 
            $(`#moreInfos${y}`).html(`${cur.moreInfos}`);  
            $(`#moreInfos${y}`).css('color','#696969'); 
            $(`#btn-infos${y}`).css('margin-bottom','10px');                      
            $(`#btn-infos${y}`).html('> weniger Informationen');
            moreInfCtrlL2=true;
            } else {
              $(`#moreInfos${y}`).empty();             
            $(`#btn-infos${y}`).css('margin-bottom','50px');  
            $(`#btn-infos${y}`).html('> mehr Informationen');
            moreInfCtrlL2=false;            
            }
          });
        }
  }
}

reqEveFirst.open("GET", "data.json", true);
reqEveFirst.send();

});
       

