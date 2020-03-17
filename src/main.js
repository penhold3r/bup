import './sass/index.scss'
import domReady from './utils/dom-ready'

domReady(() => {
	modal()
	landing()
	form()

	setTimeout(() => {
		removeIntro()
	}, 5500)
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
	gsap.from('.lead', {
		clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
		duration: 1,
		delay: dly + 0.5
	})
	gsap.from('.cta', { opacity: 0, y: 20, duration: 0.5, delay: dly + 1.5 })
	gsap.from('.feat', { opacity: 0, x: 20, duration: 0.5, delay: dly + 2, stagger: 0.6 })
	gsap.from('.footer', { opacity: 0, y: 20, duration: 0.5, delay: dly + 2.5 })
}

const form = () => {
	const form = document.querySelector('.form')

	form &&
		form.addEventListener('submit', e => {
			e.preventDefault()
		})
}
