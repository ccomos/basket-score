let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')
const icon = `
<i class='fa fa-plus-circle up'></i>
<i class='fa fa-minus-circle down'></i>`


function displayPlayerList(players){
  let html = ''
  players.forEach(player => {
    html +=    
    `
    <tr>
      <th>${player.name}</th>
      <th>
        <span>${player.pts}</span>
        ${icon}
      </th>
      <th>
        <span>${player.reb}</span>
        ${icon}
      </th>
      <th>
        <span>${player.ast}</span>
        ${icon}
      </th>
      <th>
        <span>${player.stl}</span>
        ${icon}
      </th>
      <th>
        <span>${player.blk}</span>
        ${icon}
      </th>
    </tr>
  `
  })
  dataPanel.innerHTML = html
}

displayPlayerList(players)
// write your code here

//選擇監聽器掛的位罝, 位置內的所有子子孫孫物件被點擊時均會被觸發
dataPanel.addEventListener('click', function(event) {
  //console.log(this)
  //console.log(event.target)
  const target = event.target.parentElement.firstElementChild
  let score = Number(target.innerHTML)
  //console.log(score)
  //console.log(target)
  if (event.target.classList.contains('fa-plus-circle')){
    target.innerHTML = score + 1
  } else if (event.target.classList.contains('fa-minus-circle')){
      if (score <=0){
        target.innerHTML = 0
      } else {
        target.innerHTML = score - 1
      }
  }
})


/*
.addEventListener('click', function () {
  console.log(this)
  console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  addItem(inputValue)
})

*/