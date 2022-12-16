let progress = document.querySelector('.progress');
let run_n = document.getElementById('run');
let i = 0;
run_n.addEventListener('click', function (){
    if (i == 0) {
        i = 1;
        let progress_bar = progress;
        let width = 1

        let progress_bar_interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(progress_bar_interval);
                i = 0;
    }else {
        width++;
        progresss_bar.style.width = width + "%";
    }
    if (progress_bar.style.width === '100%') {
        progress_bar_interval.style.width = '0%'
    }
},10)

    }
})