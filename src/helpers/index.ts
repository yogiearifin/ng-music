export const toggleScroll = (isOpen:boolean) => {
  if (isOpen) {
    document.body.style.overflowY = 'auto';
  }
  else {
    document.body.style.overflowY = 'hidden';
  }
};