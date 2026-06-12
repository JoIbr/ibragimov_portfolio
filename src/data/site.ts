// Central site configuration used for SEO (canonical URLs, sitemap, Open Graph, JSON-LD).
// ВАЖНО: замените SITE_URL на ваш реальный домен (без слэша в конце).
export const SITE_URL = "https://joibragimov.com";

export const SITE = {
	url: SITE_URL,
	authorName: "Javohir Ibragimov",
	authorNameRu: "Жавохир Ибрагимов",
	jobTitleRu: "UI/UX дизайнер",
	jobTitleEn: "UI/UX Designer",
	// Default social-share image (1200x630 JPG, works on Telegram/LinkedIn/etc.).
	defaultImage: "/images/og/og.jpg",
	// Personal photo — used in Person structured data.
	photo: "/images/my-photo.jpg",
	locale: "ru_RU",
	localeAlternate: "en_US",
	twitter: "", // optional @handle, leave empty if none
	sameAs: [
		"https://t.me/javaibr",
		"https://www.linkedin.com/in/javaibr/",
	],
};
