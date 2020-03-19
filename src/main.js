import './sass/index.scss'
import { submitFormData } from 'submit-form-data'
import domReady from './utils/dom-ready'

domReady(() => {
	console.log('%c ----------\nAll set!\n----------', 'color:#1e9bd1, font-weight:bold')

	const mobileOrEdge = window.outerWidth > 700 || /Edge/.test(navigator.userAgent)
	const delay = mobileOrEdge ? 5500 : 2100

	modal()
	form()

	mobileOrEdge && landing()

	mobileOrEdge && console.log('%c Microsoft Edge detected :(', 'color:#00a2ed, font-weight:bold')

	setTimeout(() => {
		removeIntro()
	}, delay)
})

const modal = () => {
	const modal = document.querySelector('.modal')
	const modalTrigger = document.querySelector('.cta')
	const modalClose = document.querySelector('.modal-close')

	modalTrigger.addEventListener('click', () => modal.classList.add('open'))
	modalClose.addEventListener('click', () => modal.classList.remove('open'))
}

const removeIntro = () => {
	const intro = document.querySelector('.reveal')
	intro && intro.parentNode.removeChild(intro)
}

const landing = () => {
	const dly = 5

	gsap.from('.logo', { opacity: 0, duration: 0.5, delay: dly })
	gsap.from('.lead h2', {
		clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
		duration: 1,
		delay: dly + 0.5
	})
	gsap.from('.feat', { opacity: 0, x: 20, duration: 0.5, delay: dly + 1, stagger: 0.6 })
	gsap.from('.lead h3', { opacity: 0, y: 20, duration: 0.5, delay: dly + 3 })
	gsap.from('.cta', { opacity: 0, y: 20, duration: 0.5, delay: dly + 3.2 })
	gsap.from('.footer', { opacity: 0, duration: 0.5, delay: dly + 4.5 })
}

const form = () => {
	const form = document.querySelector('.form')

	form &&
		form.addEventListener('submit', e => {
			e.preventDefault()

			const settings = {
				dest: './process_data.php',
				fields: '.input',
				successMsg: 'Mensaje enviado. Gracias!',
				errorMsg: 'Hubo un error, intente más tarde.',
				sending: 'Enviando...',
				reciever: 'info@buildup.com.ar'
			}

			submitFormData(form, settings)
		})
}
