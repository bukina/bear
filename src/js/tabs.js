
// Service
const tabsContainer = document.querySelector('.service__btns')
const tabsContent = document.querySelector('.service__text').querySelectorAll('.tab-content')
tabsContainer.addEventListener('click',function(event){
const clickedElement = event.target;
if(clickedElement.dataset.tab){
  const tabid = clickedElement.dataset.tab;
  tabsContent.forEach(element => element.classList.remove('active-tab'));
  tabsContainer.querySelectorAll('[data-tab]').forEach(element => element.classList.remove('active-btn'));
  const activeContent = document.querySelector(`[data-tab-content="${tabid}"]`);
  if(activeContent){
    activeContent.classList.add('active-tab');
    clickedElement.classList.add('active-btn');
    tabsContainer.setAttribute('data-active-tab',tabid)
  }
}
})