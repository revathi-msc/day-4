var a,b,c,d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
var myvar=1;
console.log(myvar);
var firstname='GUVI', Lastname='ZEN', Maritalstatus='single', country='India',age=27;
var firstname='GUVI';
var Lastname='ZEN';
var Maritalstatus='single';
var country='India';
var age=27;
console.log(`I am ${age} years old`);
var a=String;
var b=Boolean;
var c=undefined;
var d=null;
console.log(a,b,c,d);
var a="I am 27 years old.You are 30 years old."
var b= +a;
var c= parseInt(a);
var d= Number(a);
console.log(b,c,d);
const square=(n)=>n*n;
console.log(square(5));
var a=60;
var b=70;
var c=a;
a=b;
b=c;
console.log(a);
console.log(b);
var a=5,b=9,c=10;
var sum=a+b+c;
console.log(sum);
var celsius=37;
var fahrenheit=(celsius*9/5) + 32;
console.log(fahrenheit);
var metre =100;
var miles = metre/1609.344;
console.log(miles);
var pounds=100;
var kgs = pounds*0.453592;
console.log(kgs);
var totalruns=60;
var number=3;
var battingaverage=totalruns/number;
console.log(battingaverage);
var a=[60,50,40];
var sum=0;
for(i in a){
sum+=parseInt(a[i]);
}
console.log(sum/a.length);
var a=5;
var b=5;
var power=Math.pow(a,b);
console.log(power);
var p=100;
var r=5;
var n=2;
var SI=p*n*r/100;
console.log(SI);
var side=30;
var area=(Math.pow(3,0.5)/4)*(Math.pow(side,2));
console.log(area);
var base=30;
var height=40;
var area=base*height/2;
var base=50;
var height=100;
var volume=base*height;
console.log(volume);
var base=50;
var height=100;
var volume=base*height;
console.log(volume);
var actualcost = 100;
var soldcost=50;
var discount=actualcost-soldcost;
console.log(discount);
var radius=60;
var circumference=2*Math.PI*radius;
var area=Math.PI*Math.pow(radius,2);
console.log(`circumference:${circumference}
area:${area}`);
var a=50;
var b=60;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;
console.log(c , d , e , f , g);
console.log(`*****
*****
*****
*****
*****`);
var watts=100;
var perunit=watts/1000;
var priceperunit=10;
var unitspermonth=perunit*24*31;
var totalbill=unitspermonth*priceperunit;
console.log(totalbill);
var marks=566;
var percentage=(marks/600)*100;
var CGPA=percentage/9.5;
console.log(Math.floor(CGPA));
var x=[];
for(i=1;i<=7;i++){
    for(j=1;j<=i;j++){
        x.push('#');
    }
console.log(x.join(""));
x=[];
}
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]
for(i=0;i<strArray.length;i++)
{
    console.log(strArray[i]);
}
var count=0;
var myarray=[11,22,33,44,55];
for(i in myarray){
    count++;
}
console.log(count);
let foods=['pizza','biriyani','pie','mutton biriyani','chicken biriyani','sambar','rasam','veg momos','chicken momos','chicken lasgna', ' beef lasagna' ];
console.log(foods[4]);
console.log(foods.length);
let friends =["kavya",
    "ashwini",
    "rameshkannan",
    "shalini",
    "Jose",
    "chandra mohan"];
    friends[0]="kavya"
    console.log(friends);
    // Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.   
    for(i=0;i<friends.length;i++){
        
        if(friends[i]=="raja"){
            break;
        }
        console.log(friends[i]);
    }
    var count=0;
    function friend(n){
        for(i in friends){
            if(friends[i]==n){
                console.log("friend");
                count++;
            }
            if(count==0){
                console.log("not friend");
            }
        }
    }
    friend("ragavkumar");
    var friends1 = ['kavya','ashwini','rameshkannan','shalini','Jose','chandramohan'];
    var friends2 = ['prakash','vijay','lokesh','bavi','murali','mani'];
    var combinedarray=[...friends1,...friends2];
    console.log(combinedarray.sort());
    console.log(`first item${friends1[0]}
    middle item:${friends1[friends1.length/2]}
    last item:${friends1[friends.length-1]}`);
    myname=['Revathi'];
    anothername=['mahalingam']
    var friends1 = [...myname,'kavya','ashwini','rameshkannan','shalini','Jose','chandramohan',...anothername];
    console.log(friends1);
    console.log(friends1.join(","));
    for(i in friends1){
        for(j=0;j<friends1[i].length;j++){
            if(friends1[i][j]=='a'){
                console.log(friends1[i]);
                break;
            }
        }
    }
    var count=0;
    for(i in friends1){
        for(j=0;j<friends1[i].length;j++){
            count++;
        }
    }
    console.log(count/friends1.length);
    for(i in friends1){
        for(j=0;j<friends1[i].length;j++){
            if(j==0 && friends1[i][j]=='M'){
                console.log(friends1[i]);
            }
        }
    }
const friendsInfo = [6, 12, 'kavya', 1, true, 'shalini', '200', 'rameshkannan', 8, 10];
var sum=0;
for(i in friendsInfo){
    if(friendsInfo[i]===parseInt(friendsInfo[i])){
sum+=friendsInfo[i];
    }
}
console.log(sum);
var input = [
    ['0001', 'cliton', 'bandung', '21/05/1978', 'Membaca'],
    ['0002', 'Depika', 'jakarta', '10/10/1866', 'Bermain Gitar'],
    ['0003', 'mankev', 'surabaya', '25/12/1966','Memasak'],
    ['0004', 'binjav', 'kualalumpur', '6/4/1960','Berkebun']
    ];
    for(i in input){
        for(j=0;j<input[i].length;j++){
            for(k=0;k<input[i][j].length;k++){
                console.log(input[i][j]);
            }
        }
    }
myobject = {1:'one','11':1,'name':'pooja'}
var myobject = {1:one,11:1,'name':'pooja'};
console.log(myobject);
var details={firstname:"Guvi",lastname:"Geek",address:"IIT-M RP",city:"chennai",};
console.log(details);

var a = {
        guvi : ["Guvi","Geek","6","IIT-M RP","Chennai"],
        amazon : ["Amazon", "Inc", "31", "SP Infocity", "Chennai."],
        google: ["Google", "Alphabet", "34 Amphitheater Parkway", "MountainView."],
        Tesla : ["Tesla", "Inc" , "32", "333 Santana Row","San Jose."],
}
console.log(a);