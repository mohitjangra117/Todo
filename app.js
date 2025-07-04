

$(document).ready(function () {

    $(".addbtn").click(function () {
        $(".addtask").toggle();
    })

    $(".close").click(function(){
         $(".addtask").hide();
    })

    $(".edit").click(function(){
         $(".addtask").hide();
    })



    let tasks = JSON.parse(localStorage.getItem("Data")) || [];

    $('form').submit((event) => {
        event.preventDefault();

        const title = $('.inputtitle').val();
        const date = $('.dateinp').val();
        const desc = $('.inputdesc').val();

        let task = {
            title: title,
            date: date,
            desc: desc
        }

        tasks.push(task);

        localStorage.setItem("Data", JSON.stringify(tasks));

        console.log(task);
        console.log(tasks);


        $('form')[0].reset();

        $(".addtask").toggle();

        displaytasks();


    })


    function displaytasks() {

        $('.task').empty();    // To remove duplicate value 

        tasks.forEach((t,index) => {

            $('.task').append(
                ` 
        <div class="tasks"  >
        <div>
        <div class="checkbox" > <input class="check" type="checkbox" data-index="${index}"> </div>

         <div class="tt1" data-index="${index}">   ${t.title}</div> 
         <div class="tt2" >${t.date} </div>
        </div>
        
         <div class="tt3" >${t.desc} </div>
        </div>
        
           </div> 
      
     `
            )

        })

    }

    displaytasks();

let completed=[];

 $(document).on('click', '.check', function () {
    const index = $(this).data('index');
//    console.log(index);
// console.log(tasks[index]);
    tasks.splice(index, 1); 
    localStorage.setItem("Data", JSON.stringify(tasks));
    // alert("Task Completed");
    displaytasks(); 
  });






//////////    Edit Task   ///////


$(document).on('click','.tt1',function(){
    const index=$(this).data('index');
     console.log(tasks[index]);

})

});



// layoutshift






