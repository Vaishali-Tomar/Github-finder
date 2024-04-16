
let search = document.querySelector('.search')
let text = document.querySelector('.text');
let detail = document.querySelector('.detail')
let userInfo = document.querySelector('.userInfo')

search.addEventListener('click',()=>{
    // e.preventDefault()
    async function git (){
        let data = await fetch(`https://api.github.com/users/${text.value}`)
        let res = await data.json();
        console.log(res);

        let info = document.createElement('div');
        info.classList.add('data');

        let date = '';
        let month = '';
        let year = '';

        for(let i=0;i<10;i++){
            if(i<4){
                year+=res.created_at[i];
            }
            else if(i>=5 && i<7){
                month+=res.created_at[i];
            }
            else if(i>=8){
                date+=res.created_at[i]
            }
        }

        console.log(date,month,year)
    
        info.innerHTML=`
        <img src='${res.avatar_url}'></img>
        <p>Joined: ${date}/${month}/${year}</p>
        <p>Repos:${res.public_repos}</p>
        `
        userInfo.appendChild(info);

    }
    
    git();
    // console.log(res)
    text.value=""
    detail.style.display = 'none'
})
