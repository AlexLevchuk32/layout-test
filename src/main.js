import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
	toggleMobileMenu();
});

function toggleMobileMenu() {
	const burgerBtn = document.querySelector('.header-top__menu-burger');
	const mobileMenu = document.querySelector('.header-top__menu-list');

	if (burgerBtn && mobileMenu) {
		burgerBtn.addEventListener('click', () => {
			if (!burgerBtn.classList.contains('active')) {
				burgerBtn.classList.add('active');
				mobileMenu.classList.add('active');
				document.body.classList.add('lock');
			} else {
				burgerBtn.classList.remove('active');
				mobileMenu.classList.remove('active');
				document.body.classList.remove('lock');
			}
		});
	}
}
