

$(document).ready(function(){

$(".add").click(function(){
    $(".addtask").toggle();
})



  let tasks = JSON.parse(localStorage.getItem("Data")) || [];

$('form').submit((event)=>{
    event.preventDefault();

    const title=$('.inputtitle').val();
    const date=$('.date').val();
    const desc=$('.inputdesc').val();
    
  let task={
    title: title,
      date: date,
      desc: desc
  }
    
 tasks.push(task);
    
localStorage.setItem("Data",JSON.stringify(tasks)); 

console.log(task);
console.log(tasks);

 
 $('form')[0].reset();

  $(".addtask").toggle();

//   tasks.clear();


//   console.log(tasks);
displaytasks();
 
 

})


function displaytasks(){
    tasks.forEach((t)=>{
    
    $('#tasks').append(
     `<div>
        <li>
         <div class="tt" > ${t.title} </div> 
         <div class="tt" >${t.date} </div>
         <div class="tt" > ${t.desc}</div>
        </li>
        </div> 
     `
    )

  })

}

displaytasks();


});








