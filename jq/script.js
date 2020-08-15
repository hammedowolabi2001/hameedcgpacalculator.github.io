// $(document).ready (function(){
//     $('button').click (function(){
//         // var pwd= $('#pwd').val();
//         // alert("value:" + $('#pwd').val())
//         $('p').animate({height:400}, "FAST");
        
//         // $('p').hide();
//         // //alert('here we go again')
//         // $("div").animate({
//         //     left: '250px',
//         //     opacity: '0.8',
//         //     height: '150px',
//         //     width: '150px'
//         // });  
        
//     })
//     // $('p').mouseenter (function(){
//     //     //style.backgroundColor='blue';
//     //  //   alert('you enter mouse')
//     //     $(this).css("background-color", "black")
//     //  })
//     // $('p').mouseleave (function(){
//     //      $(this).css ("background-color", "blue")
//     // })
// })
$(document).ready(function(){
    

$('.add').click(function(e){
    e.preventDefault();
    var  text = $('.txtb').val();
    if (e.keyCode == 13 &&  $(".txtb").val() !="" );
    
    {        
        var task = $(" <div class='task'></div>").text($(".txtb").val());
       var del =  $('<button class="del btn1">delete</button>').click(function(){
           var p = $(this).parent();
           p.fadeOut(function(){
           p.remove();
           })
       });
       var check = $('<button class="mak btn1">mark </button>').click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
            $(".comp").append(p);
            p.fadeIn();
        })
        $(this).remove();
       })
        var update = $('<button class="updt btn1"> Update</button>').click(function(){
        var p=$(this).parent();
        p.fadeOut(function(){
            $(".txtb").append(p)
            p.fadeIn();
        })
           })
             
       task.append(del, check,update);

        $(".notcomp").append(task);
        
        $(".txtb").val("");
    }
    
});
})