// const caruselArray = [
//     {
//         Text: "Africtivistes",
//         Img: "./photo/carouselImg/Group (1).svg",
//     },
//     {
//         Text: "Goree Institute",
//         Img: "./photo/carouselImg/goree 1.svg",
//     },
//     {
//         Text: "Code for Africa",
//         Img: "./photo/carouselImg/Group (2).svg",
//     },
//     {
//         Text: "DWF",
//         Img: "./photo/carouselImg/Group (2).svg",
//     },
//     {
//         Text: "EPD",
//         Img: "./photo/carouselImg/epd 1.svg",
//     },
//     {
//         Text: "ecdpm",
//         Img: "./photo/carouselImg/epd 1.svg",
//     },


//     {
//         Text: "Africtivistes",
//         Img: "./photo/carouselImg/Group (1).svg",
//     },
//     {
//         Text: "Goree Institute",
//         Img: "./photo/carouselImg/goree 1.svg",
//     },
//     {
//         Text: "Code for Africa",
//         Img: "./photo/carouselImg/Group (2).svg",
//     },
//     {
//         Text: "DWF",
//         Img: "./photo/carouselImg/Group (2).svg",
//     },
//     {
//         Text: "EPD",
//         Img: "./photo/carouselImg/epd 1.svg",
//     },
//     {
//         Text: "ecdpm",
//         Img: "./photo/carouselImg/epd 1.svg",
//     },


//     {
//         Text: "Africtivistes",
//         Img: "./photo/carouselImg/Group (1).svg",
//     },
//     {
//         Text: "Goree Institute",
//         Img: "./photo/carouselImg/goree 1.svg",
//     },
//     {
//         Text: "Code for Africa",
//         Img: "./photo/carouselImg/Group (2).svg",
//     },
//     {
//         Text: "DWF",
//         Img: "./photo/carouselImg/Group (2).svg",
//     },
//     {
//         Text: "EPD",
//         Img: "./photo/carouselImg/epd 1.svg",
//     },
//     {
//         Text: "ecdpm",
//         Img: "./photo/carouselImg/epd 1.svg",
//     },

    
//     // {
//     //     Text: "ecdpm",
//     //     Img: "./photo/carouselImg/epd 1.svg",
//     // },
// ]

const caruselArray = [
    {
        Text: "Africtivistes",
        Img: "./photo/carouselImg/Group (1).svg",
    },
    {
        Text: "Goree Institute",
        Img: "./photo/carouselImg/goree 1.svg",
    },
    {
        Text: "Code for Africa",
        Img: "./photo/carouselImg/Group (2).svg",
    },
    {
        Text: "DWF",
        Img: "./photo/carouselImg/Group (2).svg",
    },
    {
        Text: "EPD",
        Img: "./photo/carouselImg/epd 1.svg",
    },
    {
        Text: "ecdpm",
        Img: "./photo/carouselImg/epd 1.svg",
    },


    {
        Text: "",
        Img: "./photo/carouselImg/Group (1).svg",
    },
    {
        Text: "",
        Img: "./photo/carouselImg/goree 1.svg",
    },
    {
        Text: "",
        Img: "./photo/carouselImg/Group (2).svg",
    },
    {
        Text: "",
        Img: "./photo/carouselImg/Group (2).svg",
    },
    {
        Text: "",
        Img: "./photo/carouselImg/epd 1.svg",
    },
    {
        Text: "",
        Img: "./photo/carouselImg/epd 1.svg",
    },


    {
        Text: "Africtivistes",
        Img: "",
    },
    {
        Text: "Goree Institute",
        Img: "",
    },
    {
        Text: "Code for Africa",
        Img: "",
    },
    {
        Text: "DWF",
        Img: "",
    },
    {
        Text: "EPD",
        Img: "",
    },
    {
        Text: "ecdpm",
        Img: "",
    },
]



let itemOfpage = 6


siteWidth()

function siteWidth(params) {
    const container = document.querySelector('.container');
    const containerStyle = getComputedStyle(container);
    const width = containerStyle.width;
    
    let widthTypeOfNumber =Number(width.substring(0, width.length-2))

    if (widthTypeOfNumber<1400 && widthTypeOfNumber>=1200) {
        itemOfpage=5
    } else if (widthTypeOfNumber<1200 && widthTypeOfNumber>=1000) {
        itemOfpage=4
    } else if (widthTypeOfNumber<1000 && widthTypeOfNumber>=800) {
        itemOfpage=3
    } else if (widthTypeOfNumber<800 && widthTypeOfNumber>=500) {
        itemOfpage=2
    }  else if (widthTypeOfNumber<500 ) {
        itemOfpage=1
    }
}

createCarousel()

function createCarousel() {

    let carousel__listWrapper = document.querySelector(".page-section__carousel__listWrapper")
    

    for (let index = 0; index < Math.ceil((caruselArray.length/ itemOfpage) ); index++) {
            
            let carousel__list = document.createElement("ul")
            carousel__list.classList.add("page-section__carousel__list")
            carousel__listWrapper.appendChild(carousel__list)

            // console.log(carousel__list);

        for (let i = index*itemOfpage; i < itemOfpage*(index+1); i++) {

            if (caruselArray.length > i) {
                let contentObject = caruselArray[i] 


                let carousel__item = document.createElement("li")
                carousel__item.classList.add("page-section__carousel__item")
                carousel__list.appendChild(carousel__item)

                // console.log(carousel__list); 
                let carousel__item_imgWrapper = document.createElement("div")
                carousel__item_imgWrapper.classList.add("page-section__carousel__item_imgWrapper")
                carousel__item.appendChild(carousel__item_imgWrapper)
                

                let carousel__item_imgWrapper_img = document.createElement("img")
                carousel__item_imgWrapper.appendChild(carousel__item_imgWrapper_img)
                carousel__item_imgWrapper_img.src = contentObject.Img

                let carousel__item__textWrapper = document.createElement("div")
                carousel__item__textWrapper.classList.add("page-section__carousel__item_text")
                carousel__item.appendChild(carousel__item__textWrapper)


                let carousel__item__textWrapper__text = document.createElement("h2")
                carousel__item__textWrapper.appendChild(carousel__item__textWrapper__text)
                carousel__item__textWrapper__text.innerHTML = contentObject.Text
            }
        }
    }
  
     
    
}

createBtn()
function createBtn() {
    let carousel__activeWrapper = document.querySelector(".page-section__carousel__activeWrapper")
    
    for (let index = 0; index < Math.ceil(caruselArray.length / itemOfpage); index++) {
        let activeWrapper__btn = document.createElement("button");
        activeWrapper__btn.classList.add("page-section__aside__carousel__btn")
        carousel__activeWrapper.appendChild(activeWrapper__btn)
    }
}
    

ChangingCarouselPositions() 

function ChangingCarouselPositions() {
    
    let positionScrollIndex = 0

    function CarouselPositionsIndex() {

        if (Math.ceil((caruselArray.length) / itemOfpage) > positionScrollIndex) {
            positionScrollIndex++
            scroll(positionScrollIndex)
            showActiveBtn(positionScrollIndex)
        } else{
            positionScrollIndex++
            scroll(positionScrollIndex)
            positionScrollIndex=0
            showActiveBtn(positionScrollIndex)
        }
    }


    function scroll(index) {

        if (index === Math.ceil(caruselArray.length / itemOfpage )-2) {
            createCarousel()
        }
        
        let carousel__item = document.querySelectorAll(".page-section__carousel__list")
            carousel__item.forEach( (item) => {
                item.style.cssText=`
                        transition: 3s;
                        transform: translate(-${100*(index)}%);         
                            `
            })
        
        

        if (index === Math.ceil(caruselArray.length / itemOfpage)+1) {
            let a = document.querySelectorAll(".page-section__carousel__list")


            for (let i = 0; i < Math.ceil(caruselArray.length / itemOfpage); i++) {
                a[i].remove()  
            }
            carousel__item.forEach( (item) => {
                item.style.cssText=`transform: translate(0)}%);`
            })
        }   

    }

    intervalId = setInterval( CarouselPositionsIndex, 4000 )



    let  btn = document.querySelectorAll(".page-section__aside__carousel__btn")

    btn[0].style.cssText = "background-color: #2FB20F;";

    function showActiveBtn(index) {

        if ( Math.ceil(caruselArray.length/ itemOfpage) === index) {
            index=0
        }

        btn.forEach( (item,index) => {
            item.style.cssText = "background-color: #D9D9D9;";
            item.addEventListener("click" , function () {
                // item.style.cssText = "background-color: #2FB20F;;";
                positionScrollIndex=index
                btn.forEach( (element) => {
                    element.style.cssText = "background-color: #D9D9D9;";
                })

                item.style.cssText = "background-color: #2FB20F;;";

                clearInterval(intervalId)   

                let carousel__item = document.querySelectorAll(".page-section__carousel__list")
                    carousel__item.forEach( (item) => {
                    item.style.cssText=`
                            transition: 3s;
                            transform: translate(-${100*(index)}%);         
                                `
            })
            })

        })

        btn[index].style.cssText = "background-color: #2FB20F;";
    }
}




btnTextShow()

function btnTextShow() {
    let btn = document.querySelectorAll(".page-main__info__wrap__btn")

    let text = document.querySelector(".page-main__info__wrap_aside__functionalText");

    textArray = [
        "Lorem ipsum dolor sit amet consectetur. Semper sagittis varius eget enim nisi. Tortor quam enim enim luctus nulla commodo non. Aliquam sed massa mauris aliquam sit ac eu nisl. Habitant viverra ipsum adipiscing congue ac diam a. Libero ante ut sapien quam aliquam nisl. Est lorem enim euismod cras quam. Ut scelerisque leo mauris cras scelerisque non in.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae vero eos quo eius ducimus, minima eligendi ut tempore natus officia modi odio? Magni possimus molestias similique assumenda, laudantium provident eius.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nulla a inventore nobis laudantium dolorem ipsa temporibus consectetur voluptatum deserunt magni provident pariatur necessitatibus magnam numquam, eos sapiente dolores minus?",
    ]

    text.innerHTML= textArray[0]
    
    btn.forEach((item) => {
        item.style.cssText=`
            background-color: #E8E8E880;
            color: #1F1F1F;
        `
    })

    btn[0].style.cssText=`
            background-color: #338A4A;
            color: #FFFFFF;
        `

    btn.forEach((item, index) => {
        item.addEventListener("click", function () {
            btn.forEach((element) => {
                element.style.cssText=`
                        background-color: #E8E8E880;
                        color: #1F1F1F;
                    `
            })

            item.style.cssText=`
                    background-color: #338A4A;
                    color: #FFFFFF;
                `

            text.innerHTML= textArray[index]
        })
    })
}












