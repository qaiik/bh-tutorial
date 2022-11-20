let best = .9999999999999999;
let frenzy = .0000000000000001;


setTimeout = function(f,t) {
  f()
}

Math.random = function() {
  return frenzy
}
