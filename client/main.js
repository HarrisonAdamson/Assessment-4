const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune);

const fateBtn = document.getElementById("fateButton")

const ultimateFate = () => {
    axios.get("http://localhost:4000/api/ultimateFate/")
        .then(res => {
            const data = res.data;
            alert(data.ultimateFate);
    });
}

fateBtn.addEventListener('click', ultimateFate);

const deleteBtn = document.getElementById("fateDelete")

const fateDelete = () => {
    axios.delete("http://localhost:4000/api/ultimateFate/")
        .then(res => {
            const data = res.data;
            alert("Fate deleted!");
    });
}

deleteBtn.addEventListener('click', fateDelete);

const restoreBtn = document.getElementById("fateRestore");

const fateRestore = () => {
    axios.post("https://localhost:4000/api/ultimateFate/")
        .then(res => {
            const data = res.data;
            alert(data.ultimateFate);
        });
}

restoreBtn.addEventListener("click", fateRestore);

