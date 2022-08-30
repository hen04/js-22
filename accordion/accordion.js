let accordions;
const accordionWrapper = document.querySelector(".accordion-wrapper");


const contentData = [
	{
		id: 1,
		title: 'title 1',
		content: 'content 1'
	},
	{
		id: 2,
		title: 'title 2',
		content: 'content 2'
	},
	{
		id: 3,
		title: 'title 3',
		content: 'content 3'
	},
	{
		id: 4,
		title: 'title 4',
		content: 'content 4'
	},
	{
		id: 5,
		title: 'title 5',
		content: 'content 5'
	}
];

const createTemplate = item => {
	return `
		<div class="accordion-item">
			<div class="accordion-item-title">${item.title}</div>
			<div class="accordion-item-content">${item.content}</div>
		</div>
	`
}

const fillHtmlList = () => {
	contentData.forEach(item => {
		accordionWrapper.innerHTML += createTemplate(item);
	});
	accordions = document.querySelectorAll('.accordion-item');
}

fillHtmlList();

if (accordions) {

	for (accordion of accordions) {
		function accordionWorking() {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
			} else {
				for (elem of accordions) {
					elem.classList.remove('active');
				}
				this.classList.add('active');
			}
		}

		accordion.addEventListener('click', accordionWorking);
	}
}

