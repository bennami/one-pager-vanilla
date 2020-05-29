window.addEventListener('scroll',()=>{
    const counters  = document.querySelectorAll('.counter');
    console.log(counters)
    const speed =500;

    counters.forEach(counter =>{
        const updateCount  =()=>{
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc =Math.floor(target/speed);
            if(count <target){
                counter.innerText = count + inc;
                setTimeout(updateCount,1)
            }else{
                counter.innerText =target;
            }
        }
        updateCount();
    })


})

