//Tony Peraza 11/25/16
//First weekend project for Prime Academy

//Global Variables
var fubar = true;
var employees=[{Annualsalary:100000000, firstName:'Tony', idNumber:12345, jobTitle:'Develper', lastName:'Peraza'} ];

var monthlyToAnnual= function(pay){
  pay = pay*12;
  return(pay);
};

var biweeklyToAnnual = function(pay){
  pay = pay/14*365;
  return(pay);
};

var makeCents =  function (value){
  value = parseFloat(value);
  value = value.toFixed(2)
  return (value);
}

var clearBoxes = function(){
  document.getElementById( 'fName' ).value = '';
  document.getElementById( 'lName' ).value = '';
  document.getElementById( 'id' ).value = '';
  document.getElementById( 'title' ).value = '';
  document.getElementById( 'salary' ).value = '';
}

console.log(makeCents(40));

var addEmployee = function(){
  if (fubar) {console.log('addEmployee function running');}
  //get local variables from user input
  var fNameIn = document.getElementById( 'fName' ).value;
  var lNameIn = document.getElementById( 'lName' ).value;
  var idIn = document.getElementById( 'id' ).value;
  var titleIn = document.getElementById( 'title' ).value;
  var salaryIn = document.getElementById( 'salary' ).value;
  var payPeriodIn = document.getElementById( 'payPeriod' ).value;
  if (fubar){  console.log( 'adding item: ', fNameIn, lNameIn, idIn, titleIn, salaryIn, payPeriodIn );}
  //Change salary depending on the pay period specified
  clearBoxes();
  if (payPeriodIn=== 'Monthly'){
    if (fubar) {console.log('Converting monthly pay to annual.' );}
    var annualSallary = makeCents(monthlyToAnnual(salaryIn));
  }
  else if (payPeriodIn === 'Biweekly') {
    if (fubar) {console.log( 'converting biweekly pay to annual.' );}
    annualSallary = makeCents(biweeklyToAnnual(salaryIn));
  }
  else {
    if (fubar) {console.log('no conversion required pay is set to annual');}
    annualSallary= makeCents(salaryIn);
  }
  //create an employee object
  var employee = {
    //ensure that the annual sallary is rounded down to two decimal places
    annualSallary: (parseFloat(annualSallary)),
    firstName: fNameIn,
    idNumber: idIn,
    jobTitle: titleIn,
    lastName: lNameIn
  };
  //add employee object to employees array
  employees.push( employee );
  if (fubar) {console.log( 'Employee Array:', employees );}
};
