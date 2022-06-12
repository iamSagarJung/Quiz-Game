
let questions=[
    {
        num:1,
        qn:"What does HTML stands for? ",
        answer:"Hyper Text Markup Language",
        options:["Hyper Text Markup Language",

            "Hyper Text Multiple Language",
            
            "Hyper Text Multi Language",
            
            "Hyper Text Malware Language"
        ]
    },
    {
     num:2,
    qn:"What does CSS stands for? ",
    answer:"Cascading Style Sheet",
    options:["Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
            ]
    },
    {
        num:3,
        qn:"What does PHP stands for?",
        answer:"Hyper Text Preprocessor",
        options:["Hyper Text Preprocessor",
                "Hyper Text Processor",
                "Hyper Text Programming",
                "Home Text Preprocessor"
        ]

    },
    {
        num:4,
        qn:"Is HTML programming Language?",
        answer:"NO",
        options:["YES",
                    "NO",
                    "I dont know",
                    "Maybe Both"
    ]
    },
    {
        num:5,
        qn:"Which one is not library or Framework of javaScript?",
        answer:"Django",
        options:["Node",
                    "React",
                    "Angular",
                    "Django",
    ]
    }
]
const startbtn=document.querySelector(".startQ")
const exitQ=document.querySelector(".exitQ")
const contQ=document.querySelector(".contQ")
const rules=document.querySelector(".rules")
const question1=document.querySelector(".question")
const nextque=document.querySelector(".nextQ")
const timecount=document.querySelector("p num")
const result=document.querySelector(".result")
const icon=document.querySelector("i")
const num=document.querySelector(".result num")
const quit=document.querySelector(".result .btn")

startbtn.addEventListener("click",(e)=>{
    rules.style.display="block"
    e.preventDefault()
})

exitQ.addEventListener("click",()=>{
    rules.style.display="none"
})

contQ.addEventListener("click",()=>{
    question1.style.display="block"
    showQuestion(0)
    startTimer(15)
    startTimerline(0)
    nextque.style.display="none"

})

let index=0
nextque.addEventListener("click",()=>{
    if(index<questions.length-1){
        index++
        showQuestion(index)
    nextque.style.display="none"

    }else{
        question1.style.display="none"
        result.style.display=" block"
        rules.style.display=" none"
        num.textContent=userScore
        // result.textContent+=icon+userScore+" "+"of" +" "+ "5"
    }
    clearInterval(counter)
    startTimer(15);
    clearInterval(counterLine)
    startTimerline(0)

 
})

    quit.addEventListener("click",()=>{
    window.location.reload()
})
let userScore=0;
function showQuestion(index){
    const question=document.querySelector(".question h1")
    const options=document.querySelector(".options")
    question.innerHTML=questions[index].num+"."+questions[index].qn
    options.innerHTML=`<p>${questions[index].options[0]}</P>`
                        +`<p>${questions[index].options[1]}</P>`
                        +`<p>${questions[index].options[2]}</P>`
                        +`<p>${questions[index].options[3]}</P>`

        // const icon=document.querySelector("icon")
    const num=document.querySelector("qn num")
    num.innerHTML=questions[index].num
   
    const optionBtn=document.querySelectorAll(".options p")
    for(let optBtn of optionBtn){
        optBtn.addEventListener("click",(e)=>{
            userAns=e.target.textContent
            if(userAns==questions[index].answer){
            e.target.style.pointerEvents="none"
                options.classList.add("s")
                userScore+=1
                console.log(userScore)
                console.log("answer is correct")
                e.target.style.backgroundColor="rgba(33, 240, 74, 0.545)"
                 nextque.style.display="block"
                 optBtn.style.pointerEvents="none"
                 clearInterval(counterLine)
                 clearInterval(counter)
                
            }else {
                console.log("answer is incorrect")
                options.classList.add("s")
                e.target.style.backgroundColor="rgba(236, 105, 105, 0.545)"
                nextque.style.display="block"
                clearInterval(counterLine)
                clearInterval(counter)

            }
        })
    }
    for(let i=0;i<4;i++){
    }
}
const options=document.querySelector(".options")
nextque.addEventListener("click",()=>{
    options.classList.remove("s")
})

function optionSelected(answer){
    console.log(userAns)
}

const timeline=document.querySelector(".timeline")
let counter;
function startTimer(time){
     counter=setInterval(()=>{
        timecount.textContent=time
        time--
        if(time<9){
            timecount.textContent="0"+timecount.textContent
            timeline.style.backgroundColor="red"
        }
        if(time<0){
            clearInterval(counter)
            timecount.textContent="00"
            options.classList.add("s")
            nextque.style.display="block"

        }
      
    },1000)
}

function startTimerline(time){
   counterLine=setInterval(()=>{
       time++
       timeline.style.width=time+"px"
       if(time>499){
           clearInterval(counterLine)
           
       }
     
   },33.26)
}