const acceptableFormats = [ 'png', 'jpeg', 'jpg', 'webm' ]
  
export const isImgDecreasable = url => {
  let splitted = url.split('.')
  let format = splitted[splitted.length - 1]
  console.log(format);
  return acceptableFormats.some(f => format.indexOf(f) !== -1)
}

export const decreaseImgQuality = (url, decreaseTo = 40) => `https://images.weserv.nl/?url=${url}&q=${decreaseTo}&fit=inside&we&blur=5&bg=lightgrey&maxage=30`

export const isImgCached = url => {
  var image = new Image();
  image.src = url;
  return image.complete;
}