// let data = [
//     {
//        image : "https://regen.pk/cdn/shop/products/iphone-12-pro-max-882899.jpg?v=1686646131",
//        price : "185000",
//        para  : "Iphone 12 pro pta proved",
//        location : "Malir karachi"
//     },
//     {
//         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKNeE5Tes9AOdwyLNi-xwU93SJ6_JQagGiw&s",
//         price : "425000",
//         para  : "Iphone 16 pro pta proved Desert Titanium",
//         location : "Sadar  karachi"

//     },
//     {
//         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyikLEgpYp-sOy102mMT2dKfUoOxXQfW7gHA&s",
//         price : "525000",
//         para  : "Iphone 15 pro pta proved",
//         location : "MA jinnah karachi"
//     },
//     {
//         image : "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg",
//         price : "125000",
//         para  : "Iphone 16 pro pta proved Blacked",
//         location : "Gulishan karachi"
//     }
// ]
// function creatediv(data){
//     let first_div = document.createElement("div");
//     first_div.classList.add("div1");

//     let image = document.createElement("img");
//     image.src = data.image;

//     let second_div = document.createElement("div");
//     second_div.classList.add("div2");

//     let price = document.createElement("p");
//     price.textContent = "Rs "+data.price;

//     let para = document.createElement("p");
//     para.textContent = data.para;

//     let location = document.createElement("p");
//     location.textContent = data.location;
//     location.classList.add("para")
//     second_div.appendChild(price);
//     second_div.appendChild(para);
//     second_div.appendChild(location);

//     first_div.appendChild(image);
//     first_div.appendChild(second_div);

//     return first_div;
// }

// let gethtml = document.getElementById("main");
// for ( let i = 0 ; i < data.length ; i++){
//     let cards = creatediv (data[i]);
//     gethtml.appendChild(cards)
// }
 
//     let name = "Moiz";
//     let destinations = "Dubai";
//     let going_date = "11-12=2024";
//     let coming = "21-12=2024";
// console.log(`Passenger name ${name}`);
// console.log(`Destination ${destinations}`);
// console.log(`Travel date ${going_date}`);
// console.log(`Return date ${coming}`);

// let {name,age,grade,subj}= {
//     name :"Yazdan Ali Mirza",
//     age : 19,
//     grade : "A+",
//     subj : "Maths ,Phy ,chem ,Engliish"
// }
// console.log(name,age,grade,subj);


let data= {
        name :"Yazdan Ali Mirza",
        age : 19,
        grade : "A+",
        subj : "Maths ,Phy ,chem ,English",
}
let {name,age,grade,subj} = data
console.log(name,age,grade,subj);

