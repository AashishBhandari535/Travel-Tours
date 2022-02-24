const icon=document.getElementById('icon');
const search=document.querySelector('.search');
const cancel=document.querySelector('#cancel');
const read1=document.querySelector('.read');
const desc=document.querySelector('#desc');
const read2=document.querySelector('.read')
var headeroffset=$("header").offset().top;
function loading()
{
  $("#loader").hide();
}
$(window).scroll(function()
{
  if($(this).scrollTop()>headeroffset)
  {
    $(".goTop").css("opacity","1")
  }
  else 
  {
    $(".goTop").css("opacity","0")
  }
})
icon.addEventListener('click',function()
{
  document.getElementById('mysearch').classList.toggle('active')
})

read1.addEventListener('click',function()
{
  if (desc.style.display === "none") {
    desc.style.display = "block";
    read2.innerHTML="ReadLess"
  } 
  else {
    desc.style.display = "none";
    read2.innerHTML="ReadMore"
  }
})

function buttonclasseffect1(elem1,elem2)
{
  document.getElementById(elem1).classList.add('buttonclass1');
  document.getElementById(elem2).classList.add('buttonclass2');
}
function buttonclasseffect2(elem1,elem2)
{
  document.getElementById(elem1).classList.remove('buttonclass1');
  document.getElementById(elem2).classList.remove('buttonclass2');
}
function check(elem1,elem2)
{
  const a=document.getElementById(elem1);
  const b=document.getElementById(elem2);
  if(a.checked)
  {
    b.style.display="block"
  }
  else 
  {
    b.style.display="none"
  }
}
// owl-carousel starts
$('.owl-carousel').owlCarousel({
  loop:false,
  margin:15,
  items:4,
  nav:false,
  dots:true,
  responsive:{
    0:{
      items:1
    },
    576: 
    {
      items:2
    },
    768: 
    {
      items:3
    },
    992:
    {
      items:4
    },
    1070: 
    {
      items:4
    }
  }
})
