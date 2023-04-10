// for navbar scroll

window.onscroll = ()=>{
  const navigation= document.querySelector("nav");
  // const sticky = navigation.offset;
  // console.log(sticky);
  // console.log(scrollY);
  if (scrollY > 50 ) {
    navigation.classList.add("sticky");
  }else{
    navigation.classList.remove("sticky");
  }
}

// for home section typing
var typed = new Typed(".typing", {
  strings: ["Full Stack Developer","Front End Developer","Back End Developer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//for active tabs in about section
const tab = document.querySelector(".tab-titles");
const tabcontent = document.querySelector(".tab-content");
// console.log(tabcontent);
tab.addEventListener("click",(e)=>{
  console.log(e.target);
  // console.log(e.currentTarget);
  // const titles = e.currentTarget.querySelectorAll('.title');
  const titles = e.currentTarget.querySelectorAll('[data-title');
  // console.log(titles);
  const contents = tabcontent.querySelectorAll('.content');
  // const tabname = e.target.innerText;
  const tabname = e.target.getAttribute('data-title');
  console.log("." + tabname)
  for (let title of titles){
    title.classList.remove("active");
  }
  for (let content of contents){
    content.classList.remove("active");
  }
  e.target.classList.add("active");
  tabcontent.querySelector("."+tabname).classList.add("active");
})




// Aos
AOS.init();




// for google form submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRwpiNpALmZRas-9afdEoz4sE18RZHCcic5ZVpWJXT5ILT28hrE9uGcEG0UuNxVMF3UA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector("#msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(()=>{
          msg.innerHTML="";
        },5000)
        form.reset();
      })
      .catch(error => {
        msg.innerHTML = error.message
        setTimeout(()=>{
          msg.innerHTML="";
        },5000)
        form.reset();
      })
  });



  // navbar close and bar
  const bar = document.querySelector('.bars');
  const rightnav = document.querySelector('.right-nav');
  const rightnav_a = document.querySelectorAll('.right-nav a');
  const close = document.querySelector('.close');
  bar.addEventListener('click',()=>{
    rightnav.style.right = "0";
  })
  close.addEventListener('click',()=>{
    rightnav.style.right = "-105%";
  })

  rightnav_a.forEach((item)=>{
    item.addEventListener('click',()=>{
      rightnav.style.right = "-105%";
    });
  });
