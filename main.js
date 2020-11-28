var images=["https://in.bmscdn.com/iedb/artist/images/website/poster/large/taapsee-pannu-20499-13-09-2016-04-24-05.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sonakshi_Sinha_at_the_DVD_launch_of_%27Rowdy_Rathore%27.jpg/170px-Sonakshi_Sinha_at_the_DVD_launch_of_%27Rowdy_Rathore%27.jpg","https://m.media-amazon.com/images/M/MV5BZDJhOWNkNjQtNWJlMC00MWM3LWJmYjktMTIyYWI4NGYxNTBkXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_UY317_CR23,0,214,317_AL_.jpg","https://pbs.twimg.com/profile_images/1141247099981291521/eY__vhHk_400x400.png","https://in.bmscdn.com/iedb/artist/images/website/poster/large/varun-dhawan-21064-12-09-2017-02-22-38.jpg"];
var i=0;
function flipover()
{
    if(i==5)
    {
      i=0;
    }
    document.getElementById("tapsee").src=images[i];
  i++;
}
function cr(){
    document.getElementById("Cr").scrollIntoView();
}
function mw(){
    document.getElementById("work").scrollIntoView();
}
function ma(){
    document.getElementById("my-apps").scrollIntoView();
}
function c(){
    document.getElementById("contact").scrollIntoView();
}
function a(){
    document.getElementById("welcome").scrollIntoView();
}
function m(){
   document.getElementById("maps").scrollIntoView(); 
}