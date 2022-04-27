//query for checkbox selection//
$('#customCheckAll').click(function () {
    if ($(this).prop("checked")) {
        $(".individual").prop("checked", true);
    } else {
        $(".individual").prop("checked", false);
    }
});
$('.individual').click(function () {
    if ($(".individual").length == $(".individual:checked").length) {
        $("#customCheckAll").prop("checked", true);
    } else {
        $("#customCheckAll").prop("checked", false);
    }
});

$('#customChecked').click(function () {
    if ($(this).prop("checked")) {
        $(".individual-1").prop("checked", true);
    } else {
        $(".individual-1").prop("checked", false);
    }
});
$('.individual-1').click(function () {
    if ($(".individual-1").length == $(".individual-1:checked").length) {
        $("#customChecked").prop("checked", true);
    } else {
        $("#customChecked").prop("checked", false);
    }
});

$('#customCheck').click(function () {
    if ($(this).prop("checked")) {
        $(".individual-2").prop("checked", true);
    } else {
        $(".individual-2").prop("checked", false);
    }
});
$('.individual-2').click(function () {
    if ($(".individual-2").length == $(".individual-2:checked").length) {
        $("#customCheck").prop("checked", true);
    } else {
        $("#customCheck").prop("checked", false);
    }
});


//jquery for dd-1 check//

// $(function () {
//     // console.log($("#Display-Div1").children().children().length);
//     $("#Display-Div1").css("display", "none");
//     $(".showdiv1").change(function () {
//         if ($('input[type=checkbox]').is(":checked")) {
//             $("#Display-Div1").css("display", "flex");
//         }
//         else {
//             $("#Display-Div1").css("display", "none");
//         }
//     });
// });



//dropdown 1 dynamic div

let start = '<div class="back remove_all text-break border border-success col-6 cursor" id="';
let start_a = '">';
let final_content = "";
let result = "";
let span = '<span class="close cursor" onclick="this.parentElement.remove(this)">&times;</span>';
let end = "</div> ";
$('.individual').click(function () {
    // for(var i=1;i<=7;i++){
    //     result = $(this).val();
    //     console.log($('#Disp1').children('#text-'+i).length);
    // }
    if ($(this).is(':checked')) {
        var a=$('#Disp1').children().length+1;
        //console.log(a);
        $(this).attr('checked',true);
        result = $(this).val();
        let temp_id = $(this).attr('data-value');
        final_content = start + temp_id + start_a + result + span + end;
        $('#Disp1').append(final_content);
        if(a==7){
            $('.remove_all').remove();
            final_content = '<div class="back remove_all text-break border border-success col-6" id="textall">'+"All Selected"  + span + end;
            $('#Disp1').append(final_content);
        }
    }
    else{
        var temp_ip = $(this).attr('data-value');
        $('#' + temp_ip).remove();
        $(this).attr('checked',false);
        $('#textall').remove();
        // console.log($(this).attr('checked').length);
        //console.log($('.individual').find('input[name="list"]:checked').length);
        $('#Disp1').children().remove();

        for(var i=1;i<=7;i++){

            if ($('#customCheck'+i).is(':checked')) {
                $('#customCheck'+i).attr('checked',true);
               let temp_id = $('#customCheck'+i).attr('data-value');
           //if($('#Disp1').children(temp_id).length){
             
                result = $('#customCheck'+i).val();
                final_content = start + temp_id + start_a + result + span + end;
                $('#Disp1').append(final_content); 
           // }
            }
        }
    }
});


$('#customCheckAll').click(function () {
    if ($(this).is(':checked')) {
        $('.individual').attr('checked',true);
        $('.CheckedAll').attr('checked',true);
        result = $(this).val();
        let temp_id = $(this).attr('data-value');
        final_content = start + temp_id + start_a + result + span + end;

        $('#Disp1').html(final_content);
        $('#' + temp_id).attr('data-value', 'DD1_all');
    }
    else {
       // console.log('hi');
        let temp_ip = $(this).attr('data-value');
        $('#' + temp_ip).remove();
        $('.individual').attr('checked',false);
        $('.CheckedAll').attr('checked',false);
        console.log($('.individual').attr('checked').length);

        
        

    }
    
});

//dd-2 query//
// $(function () {
//     $("#Display-Div2").css("display", "none");
//     $(".showdiv2").change(function () {
//         if ($('input[type=checkbox]').is(":checked")) {
//             $("#Display-Div2").css("display", "flex");
//         }
//         else {
//             $("#Display-Div2").css("display", "none");
//         }
//     });
// });



//dropdown 2 dynamic div
let start1 = '<div class=" remove_all1 text-break border border-success col-6 cursor" id="';
let start_a1 = '">';
let final_content1 = "";
let result1 = "";
let span1 = '<span class="close cursor" onclick="this.parentElement.remove(this);">&times;</span>';
let end1 = "</div> ";
$('.individual-1').click(function () {
    if ($(this).is(':checked')) {
        var a=$('#Disp2').children().length+1;
        $(this).attr('checked',true);
        result1 = $(this).val();
        let temp_id1 = $(this).attr('data-value');
        final_content1 = start1 + temp_id1 + start_a1 + result1 + span1 + end1;
        $('#Disp2').append(final_content1);
        if(a==7){
            $('.remove_all1').remove();
            final_content1 = '<div class="back remove_all1 text-break border border-success col-6" id="textall-1">'+"All Selected"  + span1 + end1;
            $('#Disp2').append(final_content1);
        }
    }
    else {
        let temp_ip1 = $(this).attr('data-value');
        $('#' + temp_ip1).remove();
        // $('#' + temp_ip1).attr('checked',false);
        $('#textall-1').remove();

        $('#Disp2').children().remove();

        for(var i=9;i<=15;i++){
            if ($('#customCheck'+i).is(':checked')) {
                $('#customCheck'+i).attr('checked',true);
               var temp_id1 = $('#customCheck'+i).attr('data-value');
           // if($('#Disp1').children(temp_id).length){
                result1 = $('#customCheck'+i).val();
                final_content1 = start1 + temp_id1 + start_a1 + result1 + span1 + end1;
                $('#Disp2').append(final_content1); 
           // }
            }
        }


    }
});





$('#customChecked').click(function () {
    if ($(this).is(':checked')) {
        $('.individual-1').attr('checked',true);
        $('.CheckedAll-1').attr('checked',true);
        result1 = $(this).val();
        let temp_id1 = $(this).attr('data-value');
        final_content1 = start1 + temp_id1 + start_a1 + result1 + span1 + end1;
        $('#Disp2').html(final_content1);
        $('#' + temp_id1).attr('data-value', 'DD2_all');
    }
    else {
        let temp_ip1 = $(this).attr('data-value');
        $('#' + temp_ip1).remove();
        // $('.individual-1').attr('checked',false);
        // $('.CheckedAll-1').attr('checked',false);
    }
});


//dd-3 query//
// $(function () {
//     $("#Display-Div3").css("display", "none");
//     $(".showdiv3").change(function () {
//         if ($('input[type=checkbox]').is(":checked")) {
//             $("#Display-Div3").css("display", "flex");
//         }
//         else {
//             $("#Display-Div3").css("display", "none");
//         }
//     });
// });


//dropdown 3 dynamic div
let start2 = '<div class="remove_all2 text-break border border-success col-6 cursor" id="';
let start_a2 = '">';
let final_content2 = "";
let result2 = "";
let span2 = '<span class="close cursor" onclick="this.parentElement.remove(this);">&times;</span>';
let end2 = "</div> ";
$('.individual-2').click(function () {
    if ($(this).is(':checked')) {
        var a=$('#Disp3').children().length+1;
        $(this).attr('checked',true);
        result2 = $(this).val();
        let temp_id2 = $(this).attr('data-value');
        final_content2 = start2 + temp_id2 + start_a2 + result2 + span2 + end2;
        $('#Disp3').append(final_content2);
        if(a==7){
            $('.remove_all2').remove();
            final_content2 = '<div class="back remove_all2 text-break border border-success col-6" id="textall-2">'+"All Selected"  + span2 + end2;
            $('#Disp3').append(final_content2);
        }
    }
    else {
        let temp_ip2 = $(this).attr('data-value');
        $('#' + temp_ip2).remove();
        // $('#' + temp_ip2).attr('checked',false);
        $('#textall-2').remove();


        $('#Disp3').children().remove();
        for(var i=17;i<=23;i++){
            if ($('#customCheck'+i).is(':checked')) {
                $('#customCheck'+i).attr('checked',true);
              let  temp_id2 = $('#customCheck'+i).attr('data-value');
           // if($('#Disp3').children(temp_id).length){
                result2 = $('#customCheck'+i).val();
                final_content2 = start2 + temp_id2 + start_a2 + result2 + span2 + end2;
                $('#Disp3').append(final_content2); 
          //  }
            }
        }

    }
});


$('#customCheck').click(function () {
    if ($(this).is(':checked')) {
        $('.individual-2').attr('checked',true);
        $('.CheckedAll-2').attr('checked',true);
        result2 = $(this).val();
        let temp_id2 = $(this).attr('data-value');
        final_content2 = start2 + temp_id2 + start_a2 + result2 + span2 + end2;
        $('#Disp3').html(final_content2);
        $('#' + temp_id2).attr('data-value', 'DD3_all');
    }
    else {
        let temp_ip2 = $(this).attr('data-value');
        $('#' + temp_ip2).remove();
        // $('.individual-2').attr('checked',false);
        // $('.CheckedAll-2').attr('checked',false);
    }
});


//for unchecking checkbox
$(document).on('click', '.close', function () {
    var temp = $(this).parent().attr('id');
    this.parentElement.remove();
    $('input[data-value=' + temp + ']').prop("checked", false);
});

$(document).on('click', '.close', function () {
    var temp1 = $(this).parent().attr('data-value');
    if (temp1 == "DD1_all") {
        $('.individual').prop("checked", false);
    }
});

$(document).on('click', '.close', function () {
    var temp1 = $(this).parent().attr('data-value');
    if (temp1 == "DD2_all") {
        $('.individual-1').prop("checked", false);
    }
});

$(document).on('click', '.close', function () {
    var temp1 = $(this).parent().attr('data-value');
    if (temp1 == "DD3_all") {
        $('.individual-2').prop("checked", false);
    }
});



//local storage//

$(document).ready(function () {
    $('#submit-btn').on('click', function () {
        var temp1 = $('.individual:checked').length;
        var temp2 = $('.individual-1:checked').length;
        var temp3 = $('.individual-2:checked').length;
        var box1 = [];
        var box2 = [];
        var box3 = [];
        if (temp1 > 0) {
            $('.individual:checked').each(function () {
                box1.push($(this).val());
                localStorage.setItem("getvalue1", JSON.stringify(box1));
            });
            if (temp2 > 0) {
                $('.individual-1:checked').each(function () {
                    box2.push($(this).val());
                    localStorage.setItem("getvalue2", JSON.stringify(box2));
                });
                if (temp3 > 0) {
                    $('.individual-2:checked').each(function () {
                        box3.push($(this).val());
                        localStorage.setItem("getvalue3", JSON.stringify(box3));
                    });
                    var output = true;
                }
                else { $('#errortext').text('Select one checkbox in dropdown3'); }
            }
            else { $('#errortext').text('Select one checkbox dropdown2'); }
        }
        else { $('#errortext').text('Select one checkbox dropdown1'); }
        if (output == true) {
           localStorage.setItem("page",'');
            window.location.href = "JQUERY_PAGE_2.html";
        }
    });
});

$(document).ready(function () {
    var drop_1 = localStorage.getItem("getvalue1");
    var print_1 = JSON.parse(drop_1);
    $('#result1').text(print_1);

    var drop_2 = localStorage.getItem("getvalue2");
    var print_2 = JSON.parse(drop_2);
    $('#result2').text(print_2);

    var drop_3 = localStorage.getItem("getvalue3");
    var print_3 = JSON.parse(drop_3);
    $('#result3').text(print_3);
});

$(document).on('click', '#previuos', function (e) {
    window.history.back();
    localStorage.setItem("page",'mainpage');
    e.preventDefault();
});


$(document).ready(function () {
    var arr = JSON.parse(localStorage.getItem("getvalue1"));
    if(localStorage.getItem("getvalue1")){
    for (let i = 0; i < arr.length; i++) {
        $(".select_"+arr[i]).prop("checked", true);
        if(arr.length==7){
                        final_content = start + 'textall' + start_a + 'ALL Selected' + span + end;
                        $('#Disp'+1).append(final_content);
                        break;
                    }
                    else{
                    add(arr[i],1);
                }
                    };
                    $(document).on('click', '.close', function () {
                    
                       
                            var temp1 = $(this).parent().attr('id');
                            if (temp1 == "textall") {
                                $('.individual').prop("checked", false);
                            }
                            else{
                                $('input[datavalue=' + temp1 + ']').prop("checked", false);
                            }
                         
                    });

                // $(document).on('click', '.close', function () {
//     var temp = $(this).parent().attr('id');
//     this.parentElement.remove();
//     $('input[data-value=' + temp + ']').prop("checked", false);


// });
    
    var arr1 =  JSON.parse(localStorage.getItem("getvalue2"));
    for (let i = 0; i < arr1.length; i++) {
        $(".select1_"+arr1[i]).prop("checked", true);
        if(arr1.length==7){
            final_content = start + 'textall-1' + start_a + 'ALL Selected' + span + end;
            $('#Disp'+2).append(final_content);
            break;
        }
        else{
        add(arr1[i],2);
    }
    };
    
    $(document).on('click', '.close', function () {
                    
                       
        var temp2 = $(this).parent().attr('id');
 
        if (temp2 == "textall-1") {
            $('.individual-1').prop("checked", false);
        }
        else{
            $('input[datavalue=' + temp2 + ']').prop("checked", false);
        }
});
    var arr2 = JSON.parse(localStorage.getItem("getvalue3"));
    for (let i = 0; i < arr2.length; i++) {
        $(".select2_"+arr2[i]).prop("checked", true);
        if(arr2.length==7){
            final_content = start + 'textall-2' + start_a + 'ALL Selected' + span + end;
            $('#Disp'+3).append(final_content);
            break;
        }
        else{
        add(arr2[i],3);
    }
    };
    $(document).on('click', '.close', function () {
                    
                       
        var temp3 = $(this).parent().attr('id');
        if (temp3 == "textall-2") {
            $('.individual-2').prop("checked", false);
        }
        else{
        $('input[datavalue=' + temp3 + ']').prop("checked", false);
        }
});
    
    function add(id,divId){
        final_content = start + id + start_a + id + span + end;
        // $("#Display-Div"+divId).css("display", "flex");
        $('#Disp'+divId).append(final_content);
    }
    let current_page=localStorage.getItem("page");
    if(current_page =='mainpage'){
        localStorage.removeItem("getvalue1");
        localStorage.removeItem("getvalue2");
        localStorage.removeItem("getvalue3");
    }
}
});