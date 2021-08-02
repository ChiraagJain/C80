var name_of_the_student_arrya = [];
function submit() {
    var display_student = [];
    for (var i = 1; i <= 4; i++) {
        var name_of_the_student = document.getElementById("name_of_the_student_" + i).value;
        console.log(name_of_the_student);
        name_of_the_student_arrya.push(name_of_the_student);
    }
    console.log(name_of_the_student_arrya);
    var length_1 = name_of_the_student_arrya.length;
    console.log(length_1);
    for (var j = 0; j < length_1; j++) {
        display_student.push("<h4>name-" + name_of_the_student_arrya[j] + "</h4>");
        console.log(display_student);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student;
    var remove_commas = display_student.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
 function sorting() {
     name_of_the_student_arrya.sort
     console.log(name_of_the_student_arrya);
     var display_sorting = [];
     var length_2 = name_of_the_student_arrya.length;
     console.log(length_2);
     for (var j = 0; j < length_2; j++) {
         display_sorting.push("<h4>name-" + name_of_the_student_arrya[j] + "</h4>");
         console.log(display_sorting);
     }
     //document.getElementById("display_name_with_commas").innerHTML = display_student;
     var remove_commas = display_sorting.join(" ");
     console.log(remove_commas);
     document.getElementById("display_name_without_commas").innerHTML = remove_commas ;
