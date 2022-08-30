const headers = document.querySelectorAll('.tabs-header-item');
const tabs = document.querySelectorAll('.tabs-content-item');

function onTabClick(item) {
	item.addEventListener('click', () => {
		let currentHeader = item;
		let tabId = currentHeader.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentHeader.classList.contains('active')) {
			headers.forEach((item) => {
				item.classList.remove('active');
			});

			tabs.forEach((item) => {
				item.classList.remove('active');
			});

			currentHeader.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

headers.forEach(onTabClick);
