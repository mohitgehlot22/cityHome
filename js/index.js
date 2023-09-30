// tabs 

  var btn = document.querySelectorAll(".bhk3");
  var div = document.querySelectorAll('.floor_img');

    btn.forEach((v,i) => {
  
      v.addEventListener("click", function(){

          div.forEach((vv,ii) => {
            
            vv.classList.remove('active_floor_img');
            btn[ii].classList.remove('active_bhk3')

          });

          btn[i].classList.add("active_bhk3");
          div[i].classList.add('active_floor_img');
  
      });
  
     });
  
//tabs

//tabs section_2

var button = document.querySelectorAll(".gallery_btn");
var section = document.querySelectorAll('.gallrey');


button.forEach((v,i) => {
  
  v.addEventListener("click", ()=>{

    section.forEach((vv,ii) => {

      button[ii].classList.remove('gallery_active');
      vv.classList.remove('active_gallrey');

    });

    v.classList.add('gallery_active');
    section[i].classList.add('active_gallrey');


  });



});

// tabs section_2

//pop


var popu = document.querySelector('.pop');
function pop(){
  popu.style.display = 'block';
}
function pop_closd(){ 
  popu.style.display = 'none';
}