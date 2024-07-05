// Test function, opens new tab and displays result.
function test_func(){
    document.write(5 + 6);
}


// Core of the prediction.
function exec_prediction(){
    
    // collect variables.
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
    // More inputs... 
    // - Watch out for the right spelling.
    // - Input can be parsed and so on.  
  
    // End point URL to post data for prediction.
    // - See file server.py which uses predict() to collect data and returns the result. 
    var url          = "http://localhost:5000/make_prediction";
    var country_dict = {'France': 0, 'Spain': 1, 'Germany': 2};
    var prediction_text = {0: 'Churn: No', 1: 'Churn: Yes'}
   
    // Query.
    // - Post data and get result and status.
    $.post(url, {
        credit_score: credit_score,
        country: country_dict[country],
        gender: gender,
        age: age,
        tenure: tenur,
        balance: balance,
        products_number: products_number,
        credit_card: credit_card,
        active_member:active_member,
        estimated_salary: estimated_salary,

    },function(data, status){ 
        console.log(data.churn_prediction);
        //document.getElementById("result").innerHTML = "Prediction: " + data.churn_prediction + " Status Request: " + status + " " + " " + country;
        document.getElementById("result").innerHTML = "Prediction: " + data.churn_prediction + ", " + prediction_text[data.churn_prediction];
        console.log(status);
    });

}
