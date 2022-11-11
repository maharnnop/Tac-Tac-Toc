// alert('scritp OK')
let grids = document.querySelectorAll('[id^="grid"]')
let turn = document.querySelector('#turn')
const btnClose = document.querySelector('#close')
const btnReset = document.querySelector('#reset')
let count = 0
let blueTeam =[]
let redTeam = []
// console.log(getComputedStyle(document.querySelector('#grid1')).gridArea);
// console.log(getComputedStyle(turn).color);
grids.forEach((item)=>{
    item.addEventListener('click',changColor)  // change color when click
    // item.addEventListener('mouseenter',hoverColor)
    // item.addEventListener('mouseleave',(event)=>{event.target.style.backgroundColor = 'grey'})
})
btnClose.addEventListener('click',closeModal)
btnReset.addEventListener('click',refresh)

function changColor(event){
    // event.preventdefault()
    // event.target.removeEventListener('mouseenter',hoverColor)
        // event.target.removeEventListener('mouseleave',(event)=>{event.target.style.backgroundColor = 'grey'})
    if (event.target.style.backgroundColor === '' && count%2 === 0 ){
        event.target.style.backgroundColor = 'red'
        
        count += 1
        
        turn.innerText = "Blue Trun!!!!"
        turn.style.color = "blue"
        redTeam.push(getComputedStyle(this).gridArea.split(' '))
        
        // console.log(redTeam);
        winCon(redTeam,'RED')
        
    } else if (this.style.backgroundColor === '' && count%2 === 1 ){
        this.style.backgroundColor = 'blue'
        
        count += 1
        turn.innerText = "Red Trun!!!!"
        turn.style.color = "red"
        blueTeam.push( getComputedStyle(this).gridArea.split(' '))
      
        // console.log(blueTeam);
        winCon(blueTeam,'BLUE')
        
    }}
 
    function winCon(team,name){
        const row =[]
        const column =[]
        const rowOb ={2:0,3:0,4:0} 
        const columnOb ={2:0,3:0,4:0} 
        const index = []
        if(count >8){ 
            turn.innerText = "Tie!!!!"
            turn.style.color = "green"
        }
        team.forEach((item)=>{
            row.push(parseInt(item[0]))
            column.push(parseInt(item[2]))
            index.push([parseInt(item[0]),parseInt(item[2])])
        })

        // let checkRow = new Set(row) 
        // let checkColumn = new Set(column) // change array to set (set cant dulplicate)
        // if(checkRow.size < row.length-1){ // same row
        //     afterWin(name)
        // }else if(checkColumn.size < column.length-1){ // same column
        //     afterWin(name)
        // }

        for(let prop in rowOb){
            console.log(prop);
            row.forEach((item) =>{
                if(prop == item)
                rowOb[prop] += 1
                if(rowOb[prop] == 3){
                    afterWin(name)
                    return ;
                }
            })
        }

        for(let prop in columnOb){
            console.log(prop);
            column.forEach((item) =>{
                if(prop == item)
                columnOb[prop] += 1
                if(columnOb[prop] == 3){
                    afterWin(name)
                }
            })
        }
        
 
        let checkDiagonalLR =0    //Diagonal left to right
        let checkDiagonalRL =0              //Diagonal right to left

        index.forEach(item =>{
            if(item[0] === item[1]){
                checkDiagonalLR += 1}

            if (checkDiagonalLR >= 3) {
                afterWin(name)}})
                
                   
        index.forEach(item =>{
            if(item[0] === 3 && item[1] === 3 ){checkDiagonalRL += 1
            }else if(item[0] === 2 && item[1] === 4 ){checkDiagonalRL += 1
            }else if(item[0] === 4 && item[1] === 2 ){checkDiagonalRL += 1}
            if (checkDiagonalRL >= 3) {
                afterWin(name)}})
                if(count >8){ document.querySelector('#modal').style.display = 'block'}
                
    }
    function afterWin(name){
        // alert(name +' Win!!!')
        grids.forEach((item)=>{
            item.removeEventListener('click',changColor)  // remove change color when click
        })
        
       turn.innerText = name + " Win!!!!"
        
        document.querySelector('#modal h1').innerText = name + " Win!!!!"
        document.querySelector('#modal').style.display = 'block'
    }
   

    function closeModal(){
        document.querySelector('#modal').style.display = 'none'
    }

    function refresh(){
        location.reload()
    }

    function hoverColor(){
        if (this.style.backgroundColor === 'grey' && count%2 === 0 ){
        this.style.backgroundColor = 'pink'
    } else if (this.style.backgroundColor === 'grey' && count%2 === 1 ){
        this.style.backgroundColor = 'lightblue'
    }}