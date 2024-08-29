    const listelements =[];
    render();
    function render(){
    let task = [];
    for (let i=0; i<listelements.length ;i++)
        {
            const todotask= listelements[i];
            const html =`<p class="task">${todotask} <button onclick="
                listelements.splice(${i},1);render();" class="deletebtn"><img src="/images/delete.png"></button></p>`;
            task +=html;
        }
        document.querySelector(".listoftodo").innerHTML = task;
        document.querySelector(".pending-tasks").innerHTML =` <p class="pendingtask">You have ${listelements.length} pending tasks <button onclick="clearall();" class="clearbtn">Clear All</button></p>`;
    }
    function addtodo(){
        const inputelment = document.querySelector(".todotext");
        const inputvalue =inputelment.value;
        listelements.push(inputvalue);
        inputelment.value=" ";
        render();
    }
     function clearall(){
        listelements.length=0;
        render();
    }
