document.querySelector('.bounce-btn').addEventListener('click',()=>{
    document.querySelector('.nftCount').classList.add('bounce');
  
    document.querySelector('.nftCount').addEventListener('animationend',()=>{
    document.querySelector('.nftCount').classList.remove('bounce');
    });
  });
