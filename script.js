

function revealtoSpan() {

    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
        
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        
        elem.innerHTML = "";
        elem.appendChild(spanParent);
        
    })

}

function valuesetter(){
    gsap.set("#nav a",{ y:"-100%",  opacity:0 });
    gsap.set("#home .parent .child",{ y:"100%" });
    gsap.set("#home .row img",{ opacity:0 });

    document.querySelectorAll("#Visual>g").forEach(function(e){
        let character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}

function loaderAnimation(){
    

var t1= gsap.timeline();

t1
.from("#loader .child span",{
    x: 100,
    delay: 1,
    // height: 0,
    stagger: .3,
    duration: 1  ,
    ease: Power3.easeInOut
})
.to("#loader .parent .child",{
    y: "-110%",
    delay: 1,
    // height: 0,
    duration: 1,
    ease: Circ.easeInOut
})


.to("#loader",{
    height: 0,
    duration: .1,
    // delay:-1.9,
    ease: Circ.easeInOut
})


.to("#green",{
    height: "100%",
    duration: 1.4,
    top:0,
    delay:-.8,
    ease: Expo.easeInOut
})

.to("#green",{
    height: "0%",
    duration: 1,
    // top:0,
    delay:-.7,
    ease: Circ.easeInOut,
    onComplete : function(){
        animinateHomepage();
    }
})

}
function animateSvg(){


    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
        // delay:  
    })

}

function animinateHomepage(){
 
    
    let tl = gsap.timeline();
    tl.to("#nav a",{
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })

    .to("#home .parent .child",{
        y: 0,
        // opacity: 1,
        stagger: .1,
        duration:2,
        ease: Expo.easeInOut
    })
    tl.to("#home .row img",{
        
        opacity: 1,
        ease: Expo.easeInOut,
        delay: -0.5,
        onComplete: function(){
            animateSvg();
        }
    })
}

function locomotiveini(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
}

function cardshow(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showingImage;
        cnt.addEventListener("mousemove",function(dets){
            console.log(document.querySelector('#cursor').children[dets.target.dataset.index])
            document.querySelector('#cursor').children[dets.target.dataset.index].style.opacity=1;
            document.querySelector('#cursor').children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
            showingImage = dets.target;
            showingImage.style.filter = "grayscale(1)";
        //    document.querySelector('#work').style.color= dets.target.dataset.color;
           document.querySelector('#work').style.backgroundColor= dets.target.dataset.color;
        })
        cnt.addEventListener("mouseleave",function(dets){          
            document.querySelector('#cursor').children[showingImage.dataset.index].style.opacity=0;
            showingImage.style.filter = "grayscale(0)";
            document.querySelector('#work').style.backgroundColor= "#F2F2F2";    
        })
    })
}
revealtoSpan();
valuesetter();
loaderAnimation(); 
// locomotiveini();
// locoInitialize();
cardshow();


window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


