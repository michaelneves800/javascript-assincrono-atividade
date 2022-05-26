const BASE_URL = 'https://thatcopy.github.io/catAPI/imgs/jpg/2b74f7c.jpg';
const catBtn = document.getElementById('chance-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }catch (e) {
        console.log(e.message);

    }
};

const loadImg = async () => {
    catImg.src = await getCats();
}
catBtn.addEventListener('click', loadImg);
loadImg();
