

const allBtn=document.getElementsByClassName('add-btn');

for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        const name = event.target.parentNode.childNodes[1].innerText;
        const price=event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const catagory =event.target.parentNode.childNodes[5].childNodes[1].innerText;

        const secletedPlayer=document.getElementById('selected-player')

        //Bugget Update
         
        event.target.setAttribute("disabled",false);
        //age encerimet korie 1 agei update hoi 
        const incrementCard=bugget("count")
        if(incrementCard+1>6){
            alert("Player limite has left");
            return;
        }

        const buggetUpdate =bugget("bugget");
        const priceInt=parseInt(price);
        document.getElementById('bugget').innerText=buggetUpdate-priceInt;

        const cardCount=bugget("count");
        document.getElementById("count").innerText=cardCount+1;

        const leftCount=bugget("left");
        document.getElementById("left").innerText=leftCount-1;

        //update ses



        const div=document.createElement('div');
        div.classList.add('secleted-player')
        const p1=document.createElement('p');
        const p2=document.createElement('p');
        const p3=document.createElement('p');
        
        p1.innerText=name;
        p2.innerText=price;
        p3.innerText=catagory;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        secletedPlayer.appendChild(div);
        //akhan theke call na korle ,player price asbena (btn theke) 
        updateTotalValue(price);

        grahdTotal()
    })
}



function grahdTotal(status){
    const totalcost=bugget("total-cost")
    if(status==undefined){
        document.getElementById("grand-total").innerText=totalcost;
    }
    else{
         const couponCode=document.getElementById("coupon-code").value;
         
         if(couponCode=="jony"){
            const discount=totalcost * 0.2;
            const discountAddValue=totalcost-discount;
            document.getElementById("grand-total").innerText=discountAddValue;
         }
         else{
            alert("please, Inter valid coupone code");
         }
    
    }
}


function updateTotalValue(value){
    const totalcost=document.getElementById("total-cost").innerText;
    const convateTotalCost=parseInt(totalcost);
    const convateIUpdateValue=parseInt(value);
    const totalValue=convateTotalCost + convateIUpdateValue;
    document.getElementById("total-cost").innerText=totalValue;
    
}



 function bugget(id){
    const buget=document.getElementById(id).innerText;
    const convertNumber=parseInt(buget);
    return convertNumber;
 }