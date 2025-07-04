

$(document).ready(function () {

    $(".addbtn").click(function () {
        $(".addtask").toggle();
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

        //   tasks.clear();


        //   console.log(tasks);
        displaytasks();


    })


    function displaytasks() {

        $('.task').empty();    // To remove duplicate value 

        tasks.forEach((t) => {

            $('.task').append(
                ` 
        <div class="tasks"  >
        <div>
        <div class="checkbox" > <input class="check" type="checkbox" > </div>

         <div class="tt1" >  ${t.title}</div> 
         <div class="tt2" >${t.date} </div>
        </div>
        
         <div class="tt3" >${t.desc} </div>
           </div> 
      
     `
            )

        })

    }

    displaytasks();



    $('.checkbox').click(function () {


        let x = $(this).next('div').text().trim();
        console.log(x);
        tasks = tasks.filter((item) => {
            console.log(item.title);
            if (x != item.title) {
                return item.title != x
            }
        }
        )

     

        localStorage.setItem("Data", JSON.stringify(tasks));
        // location.reload();
        displaytasks();

    }

    );


});


//   <div class="tt" > ${t.desc}</div>





