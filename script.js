const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main_content');

function PageTransition() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections active
    allSections.addEventListener('click',(e)=>{
      const id = e.target.dataset.id;
      if(id){
        sectBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');

        //hide other sections
        sections.forEach((section)=> {
            section.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
      }
    })
}

const themeBtn = document.querySelector(".theme-btn")
themeBtn.addEventListener("click",()=>{
    let ele = document.body;
    ele.classList.toggle("light-mode");
})

PageTransition();