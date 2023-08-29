const tabs= document.querySelector(".tabs");
const btnEl= document.querySelectorAll("button");
const contentEl= document.querySelectorAll(".content");

tabs.addEventListener("click", (event) =>
{
   const id= event.target.dataset.id;

   if(id)
   {
      btnEl.forEach((btn) =>
      {
         btn.classList.remove("live");
      })

      event.target.classList.add("live");

      contentEl.forEach((content) =>
      {
         content.classList.remove("live");
      })

      const element= document.getElementById(id);
      element.classList.add("live");
   }
})