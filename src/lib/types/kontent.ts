import type { Elements, IContentItem } from '@kontent-ai/delivery-sdk';

// Content type: Artikel (codename: artikel)
export interface Artikel extends IContentItem<{
	titel: Elements.TextElement;
	url__automatisch_aangemaakt_: Elements.UrlSlugElement;
	datum: Elements.DateTimeElement;
	hoofdafbeelding: Elements.AssetsElement;
	samenvatting: Elements.TextElement;
	inhoud: Elements.RichTextElement;
	auteur: Elements.LinkedItemsElement<Auteur>;
	categorie: Elements.TaxonomyElement;
	seizoen: Elements.TaxonomyElement;
	gerelateerde_diensten: Elements.LinkedItemsElement<Dienst>;
	seo_titel: Elements.TextElement;
	seo_omschrijving: Elements.TextElement;
}> {}

// Content type: Auteur (codename: auteur)
export interface Auteur extends IContentItem<{
	volledige_naam: Elements.TextElement;
	biografie: Elements.RichTextElement;
	foto: Elements.AssetsElement;
	functie: Elements.TextElement;
}> {}

// Content type: CTA (codename: cta__call_to_action_)
export interface CallToAction extends IContentItem<{
	titel: Elements.TextElement;
	text: Elements.TextElement;
	url: Elements.TextElement;
}> {}

// Content type: Dienst (codename: dienst)
export interface Dienst extends IContentItem<{
	dienstnaam: Elements.TextElement;
	url__automatisch_gegeneerd_: Elements.UrlSlugElement;
	kote_intro: Elements.TextElement;
	hoofdafbeelding: Elements.AssetsElement;
	beschrijving: Elements.RichTextElement;
	voordelen: Elements.RichTextElement;
	gerelateerde_projecten: Elements.LinkedItemsElement<Project>;
	gerelateerde_artikelen: Elements.LinkedItemsElement<Artikel>;
}> {}

// Content type: Project (codename: project)
export interface Project extends IContentItem<{
	titel: Elements.TextElement;
	url__automatisch_gegenereerd_: Elements.UrlSlugElement;
	hoofdafbeelding: Elements.AssetsElement;
	locatie: Elements.TextElement;
	opleverdatum: Elements.DateTimeElement;
	korte_omschrijving: Elements.TextElement;
	het_verhaal: Elements.RichTextElement;
	fotogalerij: Elements.AssetsElement;
	gebruikte_diensten: Elements.LinkedItemsElement<Dienst>;
	klantbeoordeling: Elements.RichTextElement;
	type_tuin: Elements.TaxonomyElement;
}> {}

// Taxonomy codenames (voor type-safe filtering)
export const TaxonomyCodenames = {
	categorie: 'categorie',
	seizoen: 'seizoen',
	tuinstijlen: 'tuinstijlen'
} as const;

// Content type codenames (voor type-safe queries)
export const ContentTypeCodenames = {
	artikel: 'artikel',
	auteur: 'auteur',
	cta: 'cta__call_to_action_',
	dienst: 'dienst',
	project: 'project'
} as const;
