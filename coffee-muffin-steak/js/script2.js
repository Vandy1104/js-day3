
//finding total of weekly expenses for 3 people

//person1
 var person1Food = 250;
 var person1Transport  = 45;
 var person1Bills = 225;
 var total1 = (person1Food + person1Transport + person1Bills) ;
 document.getElementById('result1').textContent = 'The total expense of person1 is $' + total1;

// person2
 var person2Food = 100;
 var person2Transport  = 125;
 var person2Bills = 175;
 var total2 = (person2Food + person2Transport + person2Bills);
 document.getElementById('result2').textContent = 'The total expense of person2 is $' + total2;

// person3
 var person3Food = 185;
 var person3Transport  = 160;
 var person3Bills = 155;
 var total3 = (person3Food + person3Transport + person3Bills) ;
 document.getElementById('result3').textContent = 'The total expense of person3 is $'+ total3;

 //who spends the most?

 if ((total1 > total2) && (total1 > total3)) {

 document.getElementById('comparison1').textContent =  'Person1 spends more than person2 and person3. Its expensive';


} else if (total2 > total3)  {

  document.getElementById('comparison1').textContent =  'Person2 spends more than person1 and person3. Its expensive';
}

else {
  document.getElementById('comparison1').textContent =  'Person3 spends more than person1 and person2. Its expensive';
}


// who spends the least?
if ((total1 < total2) && (total1 < total3)) {

document.getElementById('comparison2').textContent =  'Person1 spends lesser than person2 and person3. Its cheaper';


} else if (total2 < total3)  {

 document.getElementById('comparison2').textContent =  'Person2 spends lesser than person1 and person3. Its cheaper';
}

else {
 document.getElementById('comparison2').textContent =  'Person3 spends lesser than person1 and person2. Its cheaper';
}



//find the average expense for living in Wellington

var average = Math.round((total1 + total2 + total3) /3);

document.getElementById('average').textContent = 'The average expense for living in Wellington is $' + average;
