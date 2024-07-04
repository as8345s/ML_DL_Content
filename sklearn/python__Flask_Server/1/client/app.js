function test_func(){
    document.write(5 + 6);
}




function exec_prediction(){
    console.log("Enter prediction")
    // collect variables
    var credit_score = document.getElementById('id_credit_score').value;
    var country      = document.getElementById('idcountry').value;
    var gender   = document.getElementById('idgender').value;
    var age      = document.getElementById('idage').value;
    var tenur    = document.getElementById('idtenur').value;
    var balance  =  document.getElementById('idbalance').value;
    var products_number = document.getElementById('idproducts_number').value;
    var credit_card     = document.getElementById('idcredit_card').value;
    var active_member   = document.getElementById('idactive_member').value;
    var estimated_salary= document.getElementById('idestimated_salary').value;
    //document.write(estimated_salary); // -- really works

    // End point URL to post data for prediction
    var url = "http://localhost:5000/make_prediction";
    //document.getElementById("demo").innerHTML = 5 + 6;
    // Query
    //document.getElementById("demo").innerHTML = 5 + 10; //-- works from here

    $.post(url, {
        credit_score: 0,
        country: 0,
        gender: 0,
        age: 0,
        tenure: 0,
        balance: 0,
        products_number:0,
        credit_card: 0,
        active_member: 0,
        estimated_salary: 0,

    },function(data, status){ // data, status, xhr
        //console.log(data.churn_prediction);
        document.getElementById("demo").innerHTML = status;
        //console.log(status);
    });


    //document.getElementById("demo").innerHTML = 5 + 6;
}
