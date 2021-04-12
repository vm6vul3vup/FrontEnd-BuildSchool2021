let cityArray = [
    { name: 'taipei', ch_name: '台北', districts: [{ id: 'taipei01', district: '中正區' }, { id: 'taipei02', district: '萬華區' }, { id: 'taipei03', district: '信義區' }] },
    { name: 'taoyuan', ch_name: '桃園', districts: [{ id: 'taoyuan01', district: '桃園市' }, { id: 'taoyuan02', district: '八德市' }, { id: 'taoyuan03', district: '中壢市' }] },
    { name: 'taichung', ch_name: '台中', districts: [{ id: 'taichung01', district: '台中市' }, { id: 'taichung02', district: '大里市' }, { id: 'taichung03', district: '清水市' }] }
];


//迭代cityarray
cityArray.forEach((item,index) => {
    console.log(item.name);
    console.log(item.ch_name);

    item.districts.forEach((item2, index2) => {
        console.log(item2["id"]);
        console.log(item2.district);
        // console.log(`${item2.id},${item2.district}`);
    });

});


let cityObject = {
    taipei: [
        { id: 'taipei01', district: '中正區' },
        { id: 'taipei02', district: '萬華區' },
        { id: 'taipei03', district: '信義區' }],
    taoyuan: [
        { id: 'taoyuan01', district: '桃園市' },
        { id: 'taoyuan02', district: '八德市' },
        { id: 'taoyuan03', district: '中壢市' }],
    taichung: [
        { id: 'taichung01', district: '台中市' },
        { id: 'taichung02', district: '大里市' },
        { id: 'taichung03', district: '清水市' }]
};

let cities = Object.keys(cityObject);
console.log(cities);

cities.forEach((city,index)=>{
    cityObject[city].forEach((dt,index2)=>{
        console.log(dt.id + ", " + dt.district);
    });
});