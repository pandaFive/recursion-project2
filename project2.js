const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;

const target = document.getElementById("target");

// step1
let step1h2 = document.createElement("h2");
step1h2.innerHTML = "step1: Select your brand";
let select1 = document.createElement("select");
select1.classList.add("col-3", "py-1", "pl-0");

target.append(step1h2);
target.append(select1);

let brand = {}
for(let i = 0; i < camera.length; i++){
    if((camera[i].brand) in brand) continue;
    else brand[camera[i].brand] = camera[i].brand;
}

let brandList = Object.keys(brand);

let brandOp = `<option hidden>select</option>`;
for (let i = 0; i < brandList.length; i++){
    brandOp += `<option>${brandList[i]}</option>`;
}
select1.innerHTML = brandOp;



// step2
let step2h2 = document.createElement("h2");
step2h2.innerHTML = "step2: Select your Model";
step2h2.classList.add("mt-2");
let select2 = document.createElement("select");
select2.classList.add("col-3", "py-1", "pl-0");

target.append(step2h2);
target.append(select2);


// brand の model を取得
function getModel(brand){
    let modelList = [];
    for(let i = 0; i < camera.length; i++){
        if(camera[i].brand === brand) modelList.push(camera[i].model);
    }
    return modelList;
}


// step2 option  生成
function getModelString(brand){
    let modelString = `<option hidden>select</option>`;
    const brandModelList = getModel(brand);
    for(let i = 0; i < brandModelList.length; i++){
        modelString += `<option>${brandModelList[i]}</option>`
    }
    return modelString;
}
let modelStringList = [];
for(let i = 0; i < brandList.length; i++){
    modelStringList.push(getModelString(brandList[i]));
}


// option default
let allModels = `<option hidden>select</option>`;
for(let i = 0; i < camera.length; i++){
    allModels += `<option>${camera[i].model}</option>`
}
select2.innerHTML = allModels;


// 可変option
select1.addEventListener("change", function(){
    select2.innerHTML = modelStringList[brandList.indexOf(select1.value)];
})



// step3
let step3h2 = document.createElement("h2");
step3h2.innerHTML = "step3: Input Accessory Power Consumption";
step3h2.classList.add("mt-2");
let numberSelect = document.createElement("label");
numberSelect.innerHTML =`
    <input id="number" class="py-1 px-0 text-right mr-1" type="number" min="0" max="100" placeholder="0-100">W
    `;

target.append(step3h2);
target.append(numberSelect);



// step4
let step4h2 = document.createElement("h2");
step4h2.innerHTML = "step4: Choose Your Battery";
step4h2.classList.add("mt-2");
let chooseBattery = document.createElement("div");

// cameraと消費電力の連想配列
let powerWh = {};
for(let i = 0; i < camera.length; i++){
    powerWh[camera[i].model] = camera[i].powerConsumptionWh;
}
target.append(step4h2);
target.append(chooseBattery);

// 条件に合致するbattery listの生成
function getBattery(model, consumption){
    const minPower = (consumption - 0) + powerWh[model];
    let batteryList = "";
    for(let i = 0; i < battery.length; i++){
        const batteryPower = battery[i].endVoltage * battery[i].maxDraw;
        const powerCapacity = battery[i].capacityAh * battery[i].voltage;
        if(batteryPower > minPower) {
            batteryList += `
            <div class="col-12 col-md-6 border pt-2">
                <h3>${battery[i].batteryName}</h3>
                <p>Estimated ${Math.floor(powerCapacity / minPower * 10) / 10} hours on selected setup</p>
            </div>
        `};
    }
    chooseBattery.innerHTML = batteryList;
}

// getBatteryのselect2による発火
select2.addEventListener("change", function(){
    getBattery(select2.value, number.value)
});
// 同  accessory power による発火
number.addEventListener("change", function(){
    getBattery(select2.value, number.value)
});