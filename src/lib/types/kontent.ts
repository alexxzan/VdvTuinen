import type { Elements, IContentItem } from '@kontent-ai/delivery-sdk';

export interface Article extends IContentItem<{
	title: Elements.TextElement;
	slug: Elements.UrlSlugElement;
	summary: Elements.TextElement;
	body: Elements.RichTextElement;
	featured_image: Elements.AssetsElement;
	author: Elements.TextElement;
	published_date: Elements.DateTimeElement;
	category: Elements.MultipleChoiceElement;
	seo_title: Elements.TextElement;
	seo_description: Elements.TextElement;
}> {}
