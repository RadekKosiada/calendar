// TRIGGERING 'AKTUELLES' FIRST

$('#akt-btn').on('click', function getCurrentFirst(){
   
  let reqCurrFirst = new XMLHttpRequest();

  reqCurrFirst.onreadystatechange = function() {
    if(reqCurrFirst.readyState ==4 && reqCurrFirst.status ==200 && !clickedCurrent) {    
      clickedCurrent = true;
      clickedEvents = false;
      data = JSON.parse(reqCurrFirst.response);
           
      current = data.aktuelles;
      events = data.veranstaltungen;
     
      $('#aktuelles').detach();
      //'#aktuelles' can be detached, as it is needed only for the default view and is not needed for switching between 'Aktuelles' and 'Veranstaltugen'. When you click on 'Alle News' the page reloads and '#aktuelles' appears again.
      // Other containers need to be there (thus just .empty()), to enable appending data to them, when switching between both tabs and not refreshing the page.
      $('#container4').empty();
      $('#container5').empty();

      // addition to CSS
      $('#veranstaltungen').css('display', 'block');
      $('#veranstaltungen').css('display', 'block');          
      $('#container3').css('display', 'block'); 
      $('#container4').css('display', 'none'); 
      $('#container5').css('display', 'none');
      $('#akt-btn').css('background-color', 'white');
      
     
      $('#ver-btn').css('background-color', '#ddd'); 
      
          
      // 'For loop' just for 'Aktuelles' as they come first in HTML. 
      // With the equal number of 'Aktuelles' and 'Veranstaltungen' (as it is now) one 'for loop' would suffice, but in case of a different number, it might lead to errors. Thus a sepearate 'for loop' for each object. 
      for(let k=0; k< current.length; k++){
        cur = current[k];        
        
        // 'AKTUELLES' TAG
          $('#veranstaltungen').append(`<a href='${cur.img}' target='blank'><img id='img${k}' class='clearfix' src='${cur.img}' alt='photo of the event'></a>`);         
          $('#veranstaltungen').append(`<h6 id='date${k}' class='date'>${cur.date}</h6>`); 
          $(`#date${k}`).css('color','#696969');
          $(`#date${0}`).css('padding-top','30px');
          $(`#date${0}`).css('margin-top', '5px');
         
         // changing date's format 
           curDate = `#date${k}`;
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
        
          $('#veranstaltungen').append(`<h3 id='headline${k}' class ='headline'>${cur.headline}</h3>`);      
          $('#headline'+ k).css('color','#696969');

          if(!cur.infos) {
            $('#veranstaltungen').append(`<h6 id='infos${k}' class= 'infos'>Placeholder placeholder</h6>`);
            $(`#infos${k}`).css('visibility', 'hidden');
          } else {
            $('#veranstaltungen').append(`<h6 id='infos${k}' class= 'infos'>${cur.infos}</h6>`);
            $(`#infos${k}`).css('color','#696969');
          }
          $('#veranstaltungen').append(`<button id='btn-infos${k}' class= 'btn-infos'>> mehr Informationen</button>`);
          $('#btn-infos'+ k).css('color','#696969'); 
          $('#btn-infos'+ k).css('margin-bottom','50px'); 
          $('#veranstaltungen').append(`<p id='moreInfos${k}' class= 'moreInfos'></p>`);
          
          $('#veranstaltungen').append(btmBorder);

          let moreInfCtrlK = false;
          $(`#btn-infos${k}`).click(function() {
            if(!moreInfCtrlK){  
              $(`#moreInfos${k}`).html(`${cur.moreInfos}`);      
              $('#moreInfos'+ k).css('color','#696969');
              $('#btn-infos'+ k).css('margin-bottom','10px');
              $(`#btn-infos${k}`).html('> weniger Informationen');
              moreInfCtrlK=true;
            } else {
              $('#moreInfos'+ k).empty();            
              $(`#btn-infos${k}`).html('> mehr Informationen');
              $(`#btn-infos${k}`).css('margin-bottom', '50px');
              moreInfCtrlK=false;            
            }
          });
        }
        
        // 'VERANSTALTUNGEN' TAGS    
          
          for(let x=0; x< events.length; x++) {
            eve= events[x];
          
          $('#container3').append( `<a href='${eve.img}' target='blank'><img id='img${x}' class='clearfix' src='${eve.img}' alt='photo of the event'></a>`);         
          $('#container3').append(`<h6 id='date-ver${x}' class='date'>${eve.date}</h6>`);    
          $(`#date-ver${0}`).css('padding-top','30px');
          $(`#date-ver${0}`).css('margin-top', '5px');
             
          eveDate = `#date-ver${x}`;  
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
            
          $('#container3').append(`<h3 id='headline-ver${x}' class ='headline'>${eve.headline}</h3>`);    
            if(!eve.infos) {
            $('#container3').append(`<h6 id='infos-ver${x}' class= 'infos'>Placeholder placeholder</h6>`);
            $(`#infos-ver${x}`).css('visibility', 'hidden');
          } else {
            $('#container3').append(`<h6 id='infos-ver${x}' class= 'infos'>${eve.infos}</h6>`);            
          }
          $('#container3').append(`<button id='btn-infos-ver${x}' class= 'btn-infos'>> mehr Informationen</a></button>`);          
          $('#container3').append(`<p id='moreInfos-ver${x}' class= 'moreInfos'></p>`); 
          $(`#btn-infos-ver${x}`).css('margin-bottom', '50px');         
          $('#container3').append(btmBorder);
          
         let moreInfCtrlK2 = false;
          $(`#btn-infos-ver${x}`).click(function() {
            if(!moreInfCtrlK2){      
            $(`#moreInfos-ver${x}`).html(`${eve.moreInfos}`);    
            // $(`#moreInfos-ver${k}`).css('visibility', 'visible');
            $(`#btn-infos-ver${x}`).html('> weniger Informationen');
            $(`#btn-infos-ver${x}`).css('margin-bottom', '10px');
            moreInfCtrlK2=true;
            } else {
            $(`#moreInfos-ver${x}`).empty();
            // $(`#moreInfos-ver${k}`).css('visibility', 'hidden');
            $(`#btn-infos-ver${x}`).html('> mehr Informationen');
            $(`#btn-infos-ver${x}`).css('margin-bottom', '50px');
            moreInfCtrlK2=false;            
            }          
          });
       } 
    }  
  }

  reqCurrFirst.open("GET", "data.json", true);
  reqCurrFirst.send();

});
