document.querySelector('.bounce-btn').addEventListener('click',()=>{
    document.querySelector('.nftCount').classList.add('bounce');
  
    document.querySelector('.nftCount').addEventListener('animationend',()=>{
    document.querySelector('.nftCount').classList.remove('bounce');
    });
  });

document.querySelector('.one-bounce').addEventListener('click',()=>{
    document.querySelector('.nftCount').classList.add('single-bounce');
  
    document.querySelector('.nftCount').addEventListener('animationend',()=>{
    document.querySelector('.nftCount').classList.remove('single-bounce');
    });
  });
  
document.querySelector('.super-bounce').addEventListener('click',()=>{
    document.querySelector('.nftCount').classList.add('superBounce');
  
    document.querySelector('.nftCount').addEventListener('animationend',()=>{
    document.querySelector('.nftCount').classList.remove('superBounce');
    });
  });

document.querySelector('.shakebtn').addEventListener('click',()=>{
    document.querySelector('.nftCount').classList.add('shake');
  
    document.querySelector('.nftCount').addEventListener('animationend',()=>{
    document.querySelector('.nftCount').classList.remove('shake');
});
});