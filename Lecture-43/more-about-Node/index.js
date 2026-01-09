//Open Terminal
//go to more-about-Node file by typing "cd more-about-Node". Now you are in node.
//type node
//check 1+1, 44-33
//type process...you'll see a massive object
//There in CWD...current working directory. Ye function hai...toh run karna padega.

console.log(process.cwd()); //Ye btata hai ki where we are standing...
//cd more-about-node
//dir(ls)
//node index.js...node ne ye file chalai and ye....C:\Users\my pc\Desktop\SamarthVohra Web Dev\Lecture-43\more-about-Node.........ye output aya...isme more-about-node tak ka path dikh rha hai


console.log(__dirname);

// console.log(__dirname); //iska bhi output same aa rha hai..upar console ki trah...both are providing folder ka path. But their is difference between two.
// console.log(__dirname); //ye btata hai ki project kha se chal rha hai


//cd .. kar ke if we run both console... process.cwd and __dirname wala toh...

//process.cwd()...btata hai kha khade hai
// __dirname()...directory name means folder name...project kha se chal rha hai


//node Lecture-43/more-about-Node/index.js ....ye chalayenge dono(process and dirname wala console) toh cwd change hoga dir wala change nahi hoga

//code package.json ..ye chalaya niche terminal m...isse package.json open hua...waha...."type": "module"...ye hata diya
// {
//   "name": "day-3-react-again",
//   "private": true,
//   "version": "0.0.0",
//  "type": "module", //yha pe hai...
//   "scripts": {





