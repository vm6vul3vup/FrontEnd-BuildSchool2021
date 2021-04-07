let Reservoir = [
    { Name: "Kevin", Capacity: 32, Percent: 175, Days: 64 },
    { Name: "Mary", Capacity: 35, Percent: 163, Days: 50 },
    { Name: "Gloria", Capacity: 42, Percent: 152, Days: 70 },
    { Name: "Jenny", Capacity: 52, Percent: 172, Days: 62 }
];

Reservoir.forEach((item,index) => {
    let keys2 = Object.keys(item);
    let msg = index + ". ";
    keys2.forEach((item2, index) => {
        msg += item2 + ":" + item[item2] + ",";
    });
    console.log(msg);
});
console.log(Reservoir);