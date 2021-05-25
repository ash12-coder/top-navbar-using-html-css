window.onscroll = function() {
  if (document.body.scrollTop > 0) {
    document.getElementById('navbar').style.background = '#9c1de7';
  } else {
    document.getElementById('navbar').style.background = '#581b98';
  }
};
