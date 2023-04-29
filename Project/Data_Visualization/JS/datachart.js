// data from https://www.businessofapps.com/data/apple-statistics/
const dataset_obj = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
        {
            label: "revenue (billions)",
            // color desgin from 
            //      https://www.heavy.ai/blog/12-color-palettes-for-telling-better-stories-with-your-data
            backgroundColor: ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65"],
            data: [229.2, 265.5, 260.1, 274.5, 365.8, 394.3]
        }
    ]
};

const doughnut_config = {
    type: 'doughnut',
    data: dataset_obj,
    options: {
        title: {
            display: true,
            text: "Apple annual revenue 2017 to 2022 ($bn)"
        }
    }
};

// horizontalBar removed since 3.x, new api for horizontal bar
// https://www.chartjs.org/docs/latest/charts/bar.html#horizontal-bar-chart
const horizontalBar_config = {
    type: 'bar',
    data: dataset_obj,
    options: {
        indexAxis: 'y',
        title: {
            display: true,
            text: "Apple annual revenue 2017 to 2022 ($bn)"
        }
    }
};

window.onload = function () {
    initialize_circles_pointer();

    new Chart(document.getElementById("doughnut_chart").getContext('2d'), doughnut_config);
    new Chart(document.getElementById("horizontal_bar_chart").getContext('2d'), horizontalBar_config);
};