const resultDiv = document.querySelector('.results');

const fetchData = async () => {
    const data = await fetch('./data.json');
    let res = await data.json();
    return res;
}

(
    async () => {
        const data = await fetchData();
        let iHtml = '';
        Array.from(data).forEach(d => {
            iHtml += `
                <div class="res-box flex-center">
                    <div class="sc-name flex-center">
                        <img src="${d.icon}">
                        <h4>${d.category}</h4>
                    </div>
                    <div class="sc-result">
                        <strong>${d.score}</strong><span> / 100</span>
                    </div>
                </div>
            `;
        });
        resultDiv.innerHTML = iHtml;
    }
)();