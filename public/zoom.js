// Click a screenshot in a help page to see it larger, in the middle of the screen.
// It grows from where it sits on the page. Click anywhere, or press Esc, to close.
// Local file, no outside code (rule in AGENTS.md).
(() => {
	const style = document.createElement('style');
	style.textContent = `
.sl-markdown-content img[src^="/screenshots/"] { cursor: zoom-in; border: 1px solid var(--sl-color-gray-5); border-radius: 6px; }
dialog.sw-zoom { position: fixed; inset: 0; margin: 0; padding: 0; border: none; width: 100vw; height: 100vh; max-width: none; max-height: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: zoom-out; }
dialog.sw-zoom::backdrop { background: rgba(0, 0, 0, 0); transition: background 250ms ease; }
dialog.sw-zoom.sw-open::backdrop { background: rgba(0, 0, 0, 0.75); }
dialog.sw-zoom img { display: block; max-width: 94vw; max-height: 94vh; width: auto; height: auto; border-radius: 6px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4); transform-origin: top left; transition: transform 250ms ease; }
@media (prefers-reduced-motion: reduce) { dialog.sw-zoom img, dialog.sw-zoom::backdrop { transition: none; } }`;
	document.head.appendChild(style);

	// The transform that puts the big image exactly over the small one.
	const overThumb = (thumb, big) => {
		const from = thumb.getBoundingClientRect();
		const to = big.getBoundingClientRect();
		return `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width})`;
	};

	document.addEventListener('click', (event) => {
		const thumb = event.target.closest('.sl-markdown-content img[src^="/screenshots/"]');
		if (!thumb) return;
		const dialog = document.createElement('dialog');
		dialog.className = 'sw-zoom';
		const big = document.createElement('img');
		big.src = thumb.currentSrc || thumb.src;
		big.alt = thumb.alt;
		// Screenshots are saved at double size, so their own pixel size is the enlargement.
		big.style.width = `${thumb.naturalWidth}px`;
		dialog.appendChild(big);
		document.body.appendChild(dialog);
		dialog.showModal();

		// Start on top of the small image, then grow to the middle of the screen.
		big.style.transition = 'none';
		big.style.transform = overThumb(thumb, big);
		big.getBoundingClientRect();
		big.style.transition = '';
		requestAnimationFrame(() => {
			dialog.classList.add('sw-open');
			big.style.transform = 'none';
		});

		let closing = false;
		const close = (e) => {
			if (e) e.preventDefault();
			if (closing) return;
			closing = true;
			dialog.classList.remove('sw-open');
			big.style.transform = overThumb(thumb, big);
			const done = () => { dialog.close(); dialog.remove(); };
			big.addEventListener('transitionend', done, { once: true });
			setTimeout(done, 400);
		};
		dialog.addEventListener('click', () => close());
		dialog.addEventListener('cancel', close);
	});
})();
