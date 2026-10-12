// @ts-check
import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The help menu, in order. Each entry is a page file in src/content/docs (without ".md").
const menu = [
	'start-here',
	{
		label: 'Watch',
		items: [
			'watch/get-your-first-report',
			'watch/find-who-moved-a-deadline',
			'watch/what-the-numbers-mean',
			'watch/share-the-report',
		],
	},
	{
		label: 'Ask',
		items: [
			'ask/turn-on-ask',
			'ask/when-slipwatch-asks-you-for-a-reason',
			'ask/fill-in-missing-reasons',
		],
	},
	{
		label: 'Enforce',
		items: ['enforce/set-up-enforce', 'enforce/change-a-due-date-when-its-locked'],
	},
	{
		label: 'Settings',
		items: ['settings/choose-which-projects-slipwatch-covers', 'settings/edit-the-reason-list'],
	},
	{
		label: 'Help',
		items: ['help/questions-and-problems', 'help/what-slipwatch-can-see-and-change'],
	},
];

// A page marked "draft: true" is left out of the public site by Starlight, and a menu
// entry pointing at a missing page breaks the build. So the public menu lists only
// written pages, and a group with no written pages is left out. The preview on
// Joanna's computer ("astro dev") shows everything.
const isPreview = process.argv.includes('dev');
const docsFolder = new URL('./src/content/docs/', import.meta.url);

/** @param {string} slug */
function isWritten(slug) {
	const text = fs.readFileSync(new URL(slug + '.md', docsFolder), 'utf8');
	const frontMatter = text.split(/^---\s*$/m)[1] ?? '';
	return !/^draft:\s*true\s*$/m.test(frontMatter);
}

const sidebar = menu.flatMap((entry) => {
	if (typeof entry === 'string') return isPreview || isWritten(entry) ? [entry] : [];
	const items = entry.items.filter((slug) => isPreview || isWritten(slug));
	return items.length > 0 ? [{ label: entry.label, items }] : [];
});

// https://astro.build/config
export default defineConfig({
	site: 'https://slipwatch.app',
	integrations: [
		starlight({
			title: 'Slipwatch',
			sidebar,
			// No search box yet: the menu shows every page at a glance.
			pagefind: false,
			components: {
				Footer: './src/components/Footer.astro',
			},
		}),
	],
});
