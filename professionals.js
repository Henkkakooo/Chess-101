function Pro(age, rating, rank, achievements, timePlayed){
    this.age = age;
    this.rating = rating;
    this.rank = rank;
    this.achievements = achievements;
    this.timePlayed = timePlayed;
}
let magnus = new Pro(32, 2839, "#1", "Five World Chess Championship wins", "27- years" )



function displayPro() {
    const ul = document.getElementById("proList");
for (const key in magnus) {
    if (magnus.hasOwnProperty(key)){
        const li = document.createElement("li");
        li.textContent = `${key} = ${magnus[key]}`;
        ul.appendChild(li);
    }
}}
