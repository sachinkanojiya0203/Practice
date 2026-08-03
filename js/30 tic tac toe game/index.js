let currentplayer="X";
let arr=Array(9).fill(null);
const outpu=document.getElementById("winer")

function checkwinner(){
    if(

        (arr[0] !== null && arr[0]==arr[1]&&arr[1]==arr[2])||
        (arr[3] !== null && arr[3]==arr[4]&&arr[4]==arr[5])||
        (arr[6] !== null && arr[6]==arr[7]&&arr[7]==arr[8])||
        (arr[0] !== null && arr[0]==arr[3]&&arr[3]==arr[6])||
        (arr[1] !== null && arr[1]==arr[4]&&arr[4]==arr[7])||
        (arr[2] !== null && arr[2]==arr[5]&&arr[5]==arr[8])||
        (arr[0] !== null && arr[0]==arr[4]&&arr[4]==arr[8])||
        (arr[2] !== null && arr[2]==arr[4]&&arr[4]==arr[6])
    ){
        // document.write("winner is:",currentplayer)
        document.getElementById('winer').innerText=`Winner is: ${currentplayer}`
        return
    }
    if(!arr.some((e)=>e===null)){
        document.getElementById('winer').innerText="Draw!"
        // document.write("Draw!")
        return
    }
}


function handleClick(el){
    const id=Number(el.id);
    if(arr[id]!==null)return;
    arr[id]=currentplayer;
    el.innerText=currentplayer
    checkwinner();
    currentplayer=currentplayer  === "X" ? "O" : 'X'
    // console.log(array);

}