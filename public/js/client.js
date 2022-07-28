
let xhr = new XMLHttpRequest();
let main = document.getElementsByTagName('article')[0];
let ajaxLinks = ['main', 'study', 'science', 'life', 'project', 'tech', 'journal'];

for (el of document.getElementsByTagName('a'))
{
	for (href of ajaxLinks)
	{
		if (el.getAttribute('href') === href)
		{
			el.setAttribute('onclick', 'link(this); return false');
		}
	}
}

function link(a)
{
	let href = a.getAttribute('href');
	xhr.open('POST', href, true);
	xhr.send();
}

function viewContent(content)
{
	main.innerHTML = content;
}

xhr.onreadystatechange = ()=>
{
	if (xhr.readyState != 4) return;
	if (xhr.status != 200)
	{
		console.log('Ошибка подключения: '+xhr.status+': '+xhr.statusText);
	}
	else
	{
		viewContent(xhr.responseText);
	}
}

let initA = document.createElement('a');
initA.setAttribute('href', 'main');
link(initA);