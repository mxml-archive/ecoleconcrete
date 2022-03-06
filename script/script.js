document.addEventListener('DOMContentLoaded', function(){
    
    // Effet 3D
    const layers = document.querySelectorAll('img')

    window.addEventListener('mousemove', function (event) {
        layers.forEach(function (layer, i) {
            if (layer.getAttribute('data-layer') !== undefined && layer.getAttribute('data-layer') !== '') {
                i = layer.getAttribute('data-layer')
            }

            let moveH = (window.innerWidth / 2 - event.clientX) / (window.innerWidth / 2) * (i * 2.5)
            let moveV = (window.innerHeight / 2 - event.clientY) / (window.innerHeight / 2) * (i * 2.5)
            let scale = layer.getAttribute('data-layer') > 0 ? layer.getAttribute('data-layer') * 10 : '0'

            layer.style.transform = 'translate(' + moveH + 'px, ' + moveV + 'px)'
        })
    })

    // Share
    document.querySelector('.bouton-share').addEventListener('click', function(){
        document.querySelector('.sn-items').classList.toggle('notActive')
    })

    //Sliders
    const slider = document.querySelector('.carousel-conferences');
	let isDown = false;
	let startX;
	let scrollLeft;

	if (slider){
		slider.addEventListener('mousedown', (e) => {
		  isDown = true;
		  slider.classList.add('active');
		  startX = e.pageX - slider.offsetLeft;
		  scrollLeft = slider.scrollLeft;
		});
		
		slider.addEventListener('mouseleave', () => {
		  isDown = false;
		  slider.classList.remove('active');
		});
		
		slider.addEventListener('mouseup', () => {
		  isDown = false;
		  slider.classList.remove('active');
		});
		
		slider.addEventListener('mousemove', (e) => {
		  if(!isDown) return;
		  e.preventDefault();
		  const x = e.pageX - slider.offsetLeft;
		  const walk = (x - startX); //scroll-fast
		  slider.scrollLeft = scrollLeft - walk;
		});
	}
    //Sliders 2
    const slider2 = document.querySelector('.carousel-ateliers');
	let isDown2 = false;
	let startX2;
	let scrollLeft2;

	if (slider2){
		slider2.addEventListener('mousedown', (e) => {
		  isDown2 = true;
		  slider2.classList.add('active');
		  startX2 = e.pageX - slider2.offsetLeft;
		  scrollLeft2 = slider2.scrollLeft;
		});
		
		slider2.addEventListener('mouseleave', () => {
		  isDown2 = false;
		  slider2.classList.remove('active');
		});
		
		slider2.addEventListener('mouseup', () => {
		  isDown2 = false;
		  slider2.classList.remove('active');
		});
		
		slider2.addEventListener('mousemove', (e) => {
		  if(!isDown2) return;
		  e.preventDefault();
		  const x = e.pageX - slider2.offsetLeft;
		  const walk = (x - startX2); //scroll-fast
		  slider2.scrollLeft = scrollLeft2 - walk;
		});
	}

})