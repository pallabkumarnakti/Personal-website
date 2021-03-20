function myFunction() {
    var para = document.getElementById("paraWant").value;
    var word = document.getElementById("wordWant").value;
    if (para <= 0 || word <= 0) {
        document.getElementById("hara").innerText = "Please enter valid numeric value and the total word count shouldn't exceed 850,000."
    } else if (para * word >= 850001) {
        document.getElementById("hara").innerText = "Please enter valid numeric value and the total word count shouldn't exceed 850,000."
    }
    else {
        var lekha = document.getElementById("hara");
        var lorem = ["Nulla", "pellentesque", "massa", "placerat", "duis", "ultricies","enim",".","mattis", "elit", "amet","blandit","purus",",","elementum","Morbi","malesuada","fames","cursus",";"];
        var wwant = word;
        var pwant = para;
        var box1=document.getElementById("chebox1");

       if(box1.checked==true){
        var wdone = 9;
        var str1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
       }else{
        var wdone = 2;
        var str1 = "";
       }
        var pdone = 1;
        var str2 = ""
        while (pdone <= pwant) {
            pdone++;
            while (wdone <= wwant) {
                wdone++;
                var x = Math.floor(Math.random() * lorem.length);
                str2 = str2.concat(lorem[x] + " ");
            }
            str1 = str1.concat(str2) + "<br>" + "<br>";
        }
        lekha.innerHTML=str1;
    }


    // else {
    //     var lekha = document.getElementById("hara");
    //     var lorem = ["Pallab", "Kumar", "Nakti", ";", ",", "."];
    //     var wwant = word;
    //     var pwant = para;
    //     var wdone = 2;
    //     var pdone = 1;
    //     var str1 = "";
    //     var str2 = "Pallab ";

    //     function innerfunc() {
    //         while (wdone <= wwant) {
    //             wdone++;
    //             var x = Math.floor(Math.random() * lorem.length);
    //             str2 = str2.concat(lorem[x] + " ");
    //         }
    //         return str2;
    //     }

    //     while (pdone <= pwant) {
    //         pdone++;

    //         str1 = str1.concat(innerfunc()) + "<br>" + "<br>";
    //         lekha.innerHTML = str1;
    //     }

    // }

}
// function myFunction2() {
//     var copyText = document.getElementById("hara");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.innerText);
//  }