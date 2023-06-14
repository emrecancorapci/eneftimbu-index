type DefaultLangCode = "en"
type SupportedLangCode = string
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/" 
type RouteParams = {"/": undefined; }
type TranslationPath = "title" | "description" | "home.title" | "home.create" | "home.discover" | "home.more" | "navbar.search" | "navbar.create" | "navbar.trends" | "navbar.discover" | "navbar.wallet" | "footer.followUs" | "footer.email" | "footer.send" | "discover.title.translation" | "discover.details.translation" | "profile.follow.translation" | "profile.followers.translation" | "profile.following.translation" | "profile.collections.translation"
type TranslationOptions = { "title": {} | undefined; "description": {} | undefined; "home.title": {} | undefined; "home.create": {} | undefined; "home.discover": {} | undefined; "home.more": {} | undefined; "navbar.search": {} | undefined; "navbar.create": {} | undefined; "navbar.trends": {} | undefined; "navbar.discover": {} | undefined; "navbar.wallet": {} | undefined; "footer.followUs": {} | undefined; "footer.email": {} | undefined; "footer.send": {} | undefined; "discover.title.translation": {} | undefined; "discover.details.translation": {} | undefined; "profile.follow.translation": {} | undefined; "profile.followers.translation": {} | undefined; "profile.following.translation": {} | undefined; "profile.collections.translation": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
