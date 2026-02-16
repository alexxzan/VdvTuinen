import { createManagementClient } from '@kontent-ai/management-sdk';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

// ─── Config ─────────────────────────────────────────────────────────────────

const ENVIRONMENT_ID = 'b75dd418-26e9-017e-5dd7-208693d6b019';
const API_KEY = process.env.KONTENT_MANAGEMENT_API_KEY;
const LANGUAGE_CODENAME = 'default';

if (!API_KEY) {
	console.error('❌ KONTENT_MANAGEMENT_API_KEY is niet ingesteld in .env');
	process.exit(1);
}

const client = createManagementClient({
	environmentId: ENVIRONMENT_ID,
	apiKey: API_KEY
});

// ─── Data: Diensten ─────────────────────────────────────────────────────────

const diensten = [
	{
		name: 'Ontwerp',
		codename: 'ontwerp',
		slug: 'ontwerp',
		korteIntro:
			'Een goed tuinontwerp is de basis voor een prachtige, functionele buitenruimte. Wij luisteren naar uw wensen en vertalen die naar een gedetailleerd plan dat past bij uw tuin en levensstijl.',
		beschrijving:
			'Een doordacht tuinontwerp vormt het fundament van elke geslaagde tuin. Wij beginnen met een uitgebreid gesprek over uw wensen, levensstijl en het gebruik van uw buitenruimte. Vervolgens maken wij een gedetailleerd ontwerp waarin beplanting, bestrating, verlichting en sfeer samenkomen tot een harmonieus geheel.',
		voordelen: [
			'Persoonlijk adviesgesprek bij u thuis',
			'Gedetailleerd beplantingsplan op maat',
			'3D-visualisatie van het eindresultaat',
			'Materiaaladvies passend bij uw budget',
			'Rekening houdend met zon, schaduw en bodemtype'
		],
		image: 'Eyecather-vdvtuinen.jpg'
	},
	{
		name: 'Aanleg',
		codename: 'aanleg',
		slug: 'aanleg',
		korteIntro:
			'Van bestrating tot beplanting, wij zorgen voor een vakkundige aanleg van uw tuin. Met oog voor kwaliteit en duurzaamheid realiseren wij uw droomtuin.',
		beschrijving:
			'De aanleg van uw tuin is waar het ontwerp werkelijkheid wordt. Ons ervaren team werkt met de beste materialen en technieken om uw droomtuin te realiseren. Van het grondwerk en de bestrating tot de beplanting en afwerking — wij zorgen voor een resultaat dat jarenlang meegaat.',
		voordelen: [
			'Volledige tuinaanleg van A tot Z',
			'Vakkundige bestrating en terrasaanleg',
			'Professionele beplanting en gazonaanleg',
			'Aanleg van waterpartijen en vijvers',
			'Plaatsing van tuinverlichting en irrigatie'
		],
		image: 'Aanleg-tuinieren.jpg'
	},
	{
		name: 'Onderhoud',
		codename: 'onderhoud',
		slug: 'onderhoud',
		korteIntro:
			'Winter en zomer, tuinen hebben aandacht nodig. Wij zorgen ervoor dat uw tuin er het hele jaar op zijn best uitziet met professioneel onderhoud.',
		beschrijving:
			'Een mooie tuin vraagt om regelmatig onderhoud. Wij bieden onderhoudscontracten op maat, zodat uw tuin er het hele jaar verzorgd uitziet. Van snoeien en onkruid verwijderen tot seizoensgebonden beplanting — wij nemen het werk uit handen zodat u kunt genieten.',
		voordelen: [
			'Periodiek snoei- en maaiwerk',
			'Onkruidbestrijding en bladruimen',
			'Seizoensgebonden beplanting en bemesting',
			'Flexibele onderhoudscontracten',
			'Advies over tuinverzorging en winterklaar maken'
		],
		image: 'Onderhoud-Tuin-.jpg'
	},
	{
		name: 'Vlonders',
		codename: 'vlonders',
		slug: 'vlonders',
		korteIntro:
			'Een houten vlonder geeft warmte en karakter aan uw tuin. Wij bouwen op maat gemaakte vlonders die perfect aansluiten bij uw buitenruimte.',
		beschrijving:
			'Een vlonder is een prachtige toevoeging aan elke tuin. Of het nu gaat om een terras aan het water, een verhoogd platform of een gezellige zithoek — wij bouwen vlonders op maat met duurzame houtsoorten. Het resultaat is een sfeervolle plek waar u jarenlang van geniet.',
		voordelen: [
			'Op maat gemaakte vlonders en terrassen',
			'Keuze uit hardhout, steigerhout en composiet',
			'Vlonders aan het water met trap en reling',
			'Ingebouwde verlichting en zitoplossingen',
			'Duurzame constructie met lange levensduur'
		],
		image: 'Stijgerbouw-5.jpg'
	},
	{
		name: 'Schutting',
		codename: 'schutting',
		slug: 'schutting',
		korteIntro:
			'Een schutting biedt privacy en veiligheid. Wij plaatsen diverse soorten schuttingen die passen bij de stijl van uw tuin en woning.',
		beschrijving:
			'Een goede schutting combineert privacy met uitstraling. Wij plaatsen diverse soorten schuttingen — van strak en modern tot landelijk en natuurlijk. Met de juiste materiaalkeuze en vakkundige plaatsing zorgen wij voor een schutting die past bij uw tuin en jarenlang mooi blijft.',
		voordelen: [
			'Hardhouten en composiet schuttingen',
			'Strakke of landelijke designs',
			'Combinatie met groen en klimplanten',
			'Poorten en toegangsoplossingen',
			'Duurzame materialen bestand tegen weer en wind'
		],
		image: 'Schutting-plaatsen2.jpg'
	},
	{
		name: 'Opritten',
		codename: 'opritten',
		slug: 'opritten',
		korteIntro:
			'Een oprit is het visitekaartje van uw woning. Wij leggen duurzame en stijlvolle opritten aan die jarenlang meegaan.',
		beschrijving:
			'Uw oprit is het eerste wat bezoekers zien. Wij leggen opritten aan die er niet alleen mooi uitzien, maar ook functioneel en duurzaam zijn. Van gebakken klinkers tot natuursteen — wij adviseren over de beste materialen en zorgen voor een strakke afwerking.',
		voordelen: [
			'Opritten van klinkers, natuursteen of beton',
			'Waterdoorlatende bestrating mogelijk',
			'Strakke randen en afwatering',
			'Combinatie met tuinpaden en terrassen',
			'Sterke fundering voor jarenlang gebruik'
		],
		image: 'Oprit-foto.jpg'
	}
];

// ─── Data: Projecten ────────────────────────────────────────────────────────

const projecten = [
	{
		name: 'Luxe Groene Tuin met Grote Stenen',
		codename: 'luxe_groene_tuin',
		slug: 'luxe-groene-tuin',
		korteOmschrijving:
			'Een complete tuinaanleg met grote sierkeien, weelderige beplanting en een strak gazon. Het resultaat is een luxe groene oase.',
		hetVerhaal:
			'Voor dit project hebben wij een volledige tuin getransformeerd tot een luxe groene oase. De grote sierkeien vormen een prachtig contrast met de weelderige beplanting en het strakke gazon. Door slim gebruik van hoogtes en texturen is er een tuin ontstaan die vanuit elk hoek een ander beeld biedt. De beplanting is zorgvuldig gekozen voor jaarrond kleur en structuur.',
		highlights: [
			'Grote natuurlijke sierkeien als blikvanger',
			'Weelderige beplanting met jaarrond kleur',
			'Strak gazon met nette afwerking',
			'Doordacht ontwerp met verschillende tuinkamers',
			'Duurzame materialen voor jarenlang plezier'
		],
		image: 'Volledige-tuin-.jpg',
		category: 'Tuinaanleg',
		locatie: 'Hoorn, Noord-Holland',
		opleverdatum: '2024-06-15T00:00:00Z',
		klantbeoordeling:
			'<p>We zijn ontzettend blij met onze nieuwe tuin. De sierkeien geven het geheel een luxe uitstraling en de beplanting is prachtig. Heel tevreden!</p>',
		tuinstijl: 'stadstuin'
	},
	{
		name: 'Vlonder Aan Het Water met Trap',
		codename: 'vlonder_aan_het_water',
		slug: 'vlonder-aan-het-water',
		korteOmschrijving:
			'Een prachtige hardhouten vlonder aan het water, compleet met trap en ingebouwde verlichting.',
		hetVerhaal:
			'Deze hardhouten vlonder aan het water is een echte eyecatcher. De vlonder is voorzien van een trap die direct toegang geeft tot het water, ideaal voor warme zomerdagen. Ingebouwde LED-verlichting zorgt voor een sfeervolle ambiance in de avonduren. Het hardhout is behandeld voor een lange levensduur, zelfs in dit vochtige milieu.',
		highlights: [
			'Hardhouten vlonder met lange levensduur',
			'Trap met directe toegang tot het water',
			'Ingebouwde LED-sfeerverlichting',
			'Robuuste constructie op stalen palen',
			'Onderhoudsarm en weerbestendig'
		],
		image: 'Stijgerbouw-tuin-.jpg',
		category: 'Vlonders',
		locatie: 'Enkhuizen, Noord-Holland',
		opleverdatum: '2024-04-20T00:00:00Z',
		klantbeoordeling:
			'<p>De vlonder is echt het middelpunt van onze tuin geworden. Vooral op warme avonden is het heerlijk om aan het water te zitten. Vakwerk!</p>',
		tuinstijl: 'stadstuin'
	},
	{
		name: 'Volledige Tuin Project in Spierdijk',
		codename: 'tuinproject_spierdijk',
		slug: 'tuinproject-spierdijk',
		korteOmschrijving:
			'Een volledige tuinrenovatie in Spierdijk: van kale grond tot een prachtige tuin met terras, beplanting en gazon.',
		hetVerhaal:
			'Dit project in Spierdijk was een complete transformatie: van kale grond naar een prachtige, functionele tuin. Het terras biedt ruimte voor buiteneten, de beplanting geeft privacy en kleur, en het gazon is het groene hart van de tuin. Alles is afgestemd op de wensen van de bewoners en de mogelijkheden van de locatie.',
		highlights: [
			'Complete transformatie van kale grond naar droomtuin',
			'Ruim terras voor buitenleven',
			'Beplanting voor privacy en sfeer',
			'Strak gazon als centraal element',
			'Afgestemd op de wensen van de bewoners'
		],
		image: 'Volledige-tuin-2.jpg',
		category: 'Tuinaanleg',
		locatie: 'Spierdijk, Noord-Holland',
		opleverdatum: '2024-08-10T00:00:00Z',
		klantbeoordeling:
			'<p>Van kale grond naar een prachtige tuin — we hadden het niet beter kunnen wensen. Het team heeft fantastisch werk geleverd. De tuin is precies wat we voor ogen hadden.</p>',
		tuinstijl: 'landelijke_tuin'
	},
	{
		name: 'Tuin Renovatie in Bovenkarspel',
		codename: 'renovatie_bovenkarspel',
		slug: 'renovatie-bovenkarspel',
		korteOmschrijving:
			'Complete tuin renovatie met nieuwe bestrating, moderne beplanting en een gezellig terras.',
		hetVerhaal:
			'Deze tuinrenovatie in Bovenkarspel gaf de verouderde tuin een compleet nieuw leven. De oude bestrating is vervangen door moderne materialen, de beplanting is vernieuwd met een mix van groenblijvende struiken en siergrassen, en het nieuwe terras is de perfecte plek geworden om te genieten van de buitenlucht.',
		highlights: [
			'Volledige vervanging van verouderde bestrating',
			'Moderne beplanting met siergrassen en struiken',
			'Gezellig terras als buitenkamer',
			'Verbeterde waterafvoer en drainage',
			'Stijlvolle afwerking tot in detail'
		],
		image: 'Tuin-Aaron-After.jpg',
		category: 'Renovatie',
		locatie: 'Bovenkarspel, Noord-Holland',
		opleverdatum: '2023-10-05T00:00:00Z',
		klantbeoordeling:
			'<p>Onze verouderde tuin is totaal getransformeerd. De nieuwe bestrating en beplanting hebben de tuin een moderne, frisse uitstraling gegeven. Wij genieten er elke dag van!</p>',
		tuinstijl: 'stadstuin'
	},
	{
		name: 'Steigerhouten Vlonder met Zithoek',
		codename: 'steigerhouten_vlonder_zithoek',
		slug: 'steigerhouten-vlonder-zithoek',
		korteOmschrijving:
			'Een ruime vlonder van steigerhout met geïntegreerde zithoek, perfect voor zomerse avonden.',
		hetVerhaal:
			'Deze steigerhouten vlonder combineert robuuste uitstraling met comfort. De geïntegreerde zithoek biedt plek voor het hele gezin en is de perfecte locatie voor zomerse avonden buiten. Het steigerhout geeft een warme, stoere look die prachtig veroudert en steeds mooier wordt.',
		highlights: [
			'Ruime vlonder van duurzaam steigerhout',
			'Geïntegreerde zithoek met comfortabele afmetingen',
			'Stoere, warme uitstraling',
			'Perfect voor gezellige zomeravonden',
			'Steigerhout dat mooi veroudert'
		],
		image: 'Stijgerbouw-4.jpg',
		category: 'Vlonders',
		locatie: 'Medemblik, Noord-Holland',
		opleverdatum: '2024-03-12T00:00:00Z',
		klantbeoordeling:
			'<p>De steigerhouten vlonder past perfect bij onze tuin. De zithoek is ons favoriete plekje geworden voor zomeravonden. Stevig, mooi en precies wat we wilden.</p>',
		tuinstijl: 'onderhoudsvriendelijke_tuin'
	},
	{
		name: 'Schutting met Tuinaanleg',
		codename: 'schutting_met_tuinaanleg',
		slug: 'schutting-met-tuinaanleg',
		korteOmschrijving:
			'Plaatsing van een nieuwe schutting gecombineerd met een volledige tuinaanleg voor maximale privacy.',
		hetVerhaal:
			'Bij dit project hebben wij een nieuwe schutting geplaatst en de gehele tuin opnieuw aangelegd. De schutting biedt maximale privacy en vormt een mooie achtergrond voor de beplanting. De combinatie van schutting en tuinaanleg zorgt voor een samenhangend geheel waarin elke vierkante meter optimaal benut wordt.',
		highlights: [
			'Nieuwe schutting voor volledige privacy',
			'Volledige tuinaanleg in samenhangend ontwerp',
			'Beplanting die de schutting mooi aankleedt',
			'Optimaal gebruik van de beschikbare ruimte',
			'Duurzame schutting bestand tegen alle weersomstandigheden'
		],
		image: 'Aanleg-schutting.jpg',
		category: 'Schutting',
		locatie: 'Andijk, Noord-Holland',
		opleverdatum: '2023-09-18T00:00:00Z',
		klantbeoordeling:
			'<p>De combinatie van schutting en tuinaanleg is prachtig geworden. We hebben nu volledige privacy en een tuin waar we trots op zijn. Uitstekend vakmanschap!</p>',
		tuinstijl: 'stadstuin'
	}
];

// ─── Category → Dienst codename mapping ─────────────────────────────────────

const categoryToDiensten: Record<string, string[]> = {
	Tuinaanleg: ['aanleg'],
	Vlonders: ['vlonders'],
	Renovatie: ['aanleg', 'ontwerp'],
	Schutting: ['schutting']
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatHighlightsAsRichText(highlights: string[]): string {
	const items = highlights.map((h) => `<li>${h}</li>`).join('');
	return `<ul>${items}</ul>`;
}

function formatVerhaalWithHighlights(verhaal: string, highlights: string[]): string {
	return `<p>${verhaal}</p>${formatHighlightsAsRichText(highlights)}`;
}

function getContentType(filename: string): string {
	const ext = path.extname(filename).toLowerCase();
	if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
	if (ext === '.png') return 'image/png';
	if (ext === '.webp') return 'image/webp';
	return 'application/octet-stream';
}

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// ─── Step 1: Upload Assets ──────────────────────────────────────────────────

async function uploadAssets(): Promise<Map<string, string>> {
	console.log('\n📸 Stap 1: Assets uploaden...\n');
	const assetMap = new Map<string, string>(); // filename → asset ID
	const imagesDir = path.resolve('static/images');

	// Collect all unique image filenames
	const allImages = new Set<string>();
	for (const d of diensten) allImages.add(d.image);
	for (const p of projecten) allImages.add(p.image);

	for (const filename of allImages) {
		const filePath = path.join(imagesDir, filename);

		if (!fs.existsSync(filePath)) {
			console.error(`  ⚠️  Bestand niet gevonden: ${filePath}`);
			continue;
		}

		const fileBuffer = fs.readFileSync(filePath);
		const contentType = getContentType(filename);

		console.log(`  Uploading: ${filename}...`);

		// Step 1a: Upload binary file
		const binaryResult = await client
			.uploadBinaryFile()
			.withData({
				binaryData: fileBuffer,
				contentType,
				filename
			})
			.toPromise();

		// Step 1b: Create asset from uploaded file
		const assetResult = await client
			.addAsset()
			.withData((builder) => ({
				file_reference: {
					id: binaryResult.data.id,
					type: 'internal' as const
				},
				title: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
				descriptions: []
			}))
			.toPromise();

		assetMap.set(filename, assetResult.data.id);
		console.log(`  ✅ ${filename} → asset ID: ${assetResult.data.id}`);

		await delay(200); // Rate limiting
	}

	console.log(`\n  📦 ${assetMap.size} assets geüpload.\n`);
	return assetMap;
}

// ─── Step 2: Create Diensten ────────────────────────────────────────────────

async function createDiensten(
	assetMap: Map<string, string>
): Promise<Map<string, string>> {
	console.log('🔧 Stap 2: Diensten aanmaken...\n');
	const dienstItemIds = new Map<string, string>(); // codename → item ID

	for (const dienst of diensten) {
		console.log(`  Aanmaken: ${dienst.name}...`);

		// Create content item
		const itemResult = await client
			.addContentItem()
			.withData({
				name: dienst.name,
				type: { codename: 'dienst' },
				codename: dienst.codename
			})
			.toPromise();

		dienstItemIds.set(dienst.codename, itemResult.data.id);

		// Get asset ID
		const assetId = assetMap.get(dienst.image);

		// Upsert language variant with content
		await client
			.upsertLanguageVariant()
			.byItemCodename(dienst.codename)
			.byLanguageCodename(LANGUAGE_CODENAME)
			.withData((builder) => ({
				elements: [
					builder.textElement({
						element: { codename: 'dienstnaam' },
						value: dienst.name
					}),
					builder.urlSlugElement({
						element: { codename: 'url__automatisch_gegeneerd_' },
						value: dienst.slug,
						mode: 'custom'
					}),
					builder.textElement({
						element: { codename: 'kote_intro' },
						value: dienst.korteIntro
					}),
					builder.richTextElement({
						element: { codename: 'beschrijving' },
						value: `<p>${dienst.beschrijving}</p>`
					}),
					builder.richTextElement({
						element: { codename: 'voordelen' },
						value: formatHighlightsAsRichText(dienst.voordelen)
					}),
					...(assetId
						? [
								builder.assetElement({
									element: { codename: 'hoofdafbeelding' },
									value: [{ id: assetId }]
								})
							]
						: [])
				]
			}))
			.toPromise();

		console.log(`  ✅ ${dienst.name} (codename: ${dienst.codename})`);
		await delay(300);
	}

	console.log(`\n  🔧 ${dienstItemIds.size} diensten aangemaakt.\n`);
	return dienstItemIds;
}

// ─── Step 3: Create Projecten ───────────────────────────────────────────────

async function createProjecten(
	assetMap: Map<string, string>
): Promise<Map<string, string>> {
	console.log('🏗️  Stap 3: Projecten aanmaken...\n');
	const projectItemIds = new Map<string, string>(); // codename → item ID

	for (const project of projecten) {
		console.log(`  Aanmaken: ${project.name}...`);

		// Create content item
		const itemResult = await client
			.addContentItem()
			.withData({
				name: project.name,
				type: { codename: 'project' },
				codename: project.codename
			})
			.toPromise();

		projectItemIds.set(project.codename, itemResult.data.id);

		// Get asset ID
		const assetId = assetMap.get(project.image);

		// Map category to dienst codenames
		const dienstCodenames = categoryToDiensten[project.category] || [];

		// Upsert language variant with content
		await client
			.upsertLanguageVariant()
			.byItemCodename(project.codename)
			.byLanguageCodename(LANGUAGE_CODENAME)
			.withData((builder) => ({
				elements: [
					builder.textElement({
						element: { codename: 'titel' },
						value: project.name
					}),
					builder.urlSlugElement({
						element: { codename: 'url__automatisch_gegenereerd_' },
						value: project.slug,
						mode: 'custom'
					}),
					builder.textElement({
						element: { codename: 'korte_omschrijving' },
						value: project.korteOmschrijving
					}),
					builder.richTextElement({
						element: { codename: 'het_verhaal' },
						value: formatVerhaalWithHighlights(project.hetVerhaal, project.highlights)
					}),
					builder.textElement({
						element: { codename: 'locatie' },
						value: project.locatie
					}),
					builder.dateTimeElement({
						element: { codename: 'opleverdatum' },
						value: project.opleverdatum,
						display_timezone: null
					}),
					builder.richTextElement({
						element: { codename: 'klantbeoordeling' },
						value: project.klantbeoordeling
					}),
					builder.taxonomyElement({
						element: { codename: 'type_tuin' },
						value: [{ codename: project.tuinstijl }]
					}),
					builder.linkedItemsElement({
						element: { codename: 'gebruikte_diensten' },
						value: dienstCodenames.map((c) => ({ codename: c }))
					}),
					...(assetId
						? [
								builder.assetElement({
									element: { codename: 'hoofdafbeelding' },
									value: [{ id: assetId }]
								}),
								builder.assetElement({
									element: { codename: 'fotogalerij' },
									value: [{ id: assetId }]
								})
							]
						: [])
				]
			}))
			.toPromise();

		console.log(`  ✅ ${project.name} (codename: ${project.codename})`);
		await delay(300);
	}

	console.log(`\n  🏗️  ${projectItemIds.size} projecten aangemaakt.\n`);
	return projectItemIds;
}

// ─── Step 4: Link diensten → projecten (inverse) ───────────────────────────

async function linkDienstenToProjecten(): Promise<void> {
	console.log('🔗 Stap 4: Diensten koppelen aan projecten...\n');

	// Build inverse map: dienst codename → project codenames
	const dienstToProjecten = new Map<string, string[]>();

	for (const project of projecten) {
		const dienstCodenames = categoryToDiensten[project.category] || [];
		for (const dc of dienstCodenames) {
			if (!dienstToProjecten.has(dc)) {
				dienstToProjecten.set(dc, []);
			}
			dienstToProjecten.get(dc)!.push(project.codename);
		}
	}

	for (const dienst of diensten) {
		const projectCodenames = dienstToProjecten.get(dienst.codename) || [];

		if (projectCodenames.length === 0) {
			console.log(`  ⏭️  ${dienst.name}: geen gerelateerde projecten`);
			continue;
		}

		console.log(
			`  Koppelen: ${dienst.name} → ${projectCodenames.join(', ')}...`
		);

		await client
			.upsertLanguageVariant()
			.byItemCodename(dienst.codename)
			.byLanguageCodename(LANGUAGE_CODENAME)
			.withData((builder) => ({
				elements: [
					builder.linkedItemsElement({
						element: { codename: 'gerelateerde_projecten' },
						value: projectCodenames.map((c) => ({ codename: c }))
					})
				]
			}))
			.toPromise();

		console.log(`  ✅ ${dienst.name} gekoppeld aan ${projectCodenames.length} project(en)`);
		await delay(300);
	}

	console.log('\n  🔗 Koppelingen voltooid.\n');
}

// ─── Step 5: Publish everything ─────────────────────────────────────────────

async function publishAll(): Promise<void> {
	console.log('📢 Stap 5: Alles publiceren...\n');

	const allCodenames = [
		...diensten.map((d) => ({ codename: d.codename, name: d.name })),
		...projecten.map((p) => ({ codename: p.codename, name: p.name }))
	];

	for (const item of allCodenames) {
		console.log(`  Publiceren: ${item.name}...`);

		try {
			await client
				.publishLanguageVariant()
				.byItemCodename(item.codename)
				.byLanguageCodename(LANGUAGE_CODENAME)
				.withoutData()
				.toPromise();

			console.log(`  ✅ ${item.name} gepubliceerd`);
		} catch (err: any) {
			console.error(`  ⚠️  Fout bij publiceren ${item.name}: ${err.message}`);
		}

		await delay(200);
	}

	console.log('\n  📢 Publicatie voltooid.\n');
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
	console.log('═══════════════════════════════════════════════════');
	console.log('  VDV Tuinen — Migratie naar Kontent.ai');
	console.log('═══════════════════════════════════════════════════');

	try {
		const assetMap = await uploadAssets();
		await createDiensten(assetMap);
		await createProjecten(assetMap);
		await linkDienstenToProjecten();
		await publishAll();

		console.log('═══════════════════════════════════════════════════');
		console.log('  ✅ Migratie succesvol afgerond!');
		console.log('═══════════════════════════════════════════════════');
	} catch (err: any) {
		console.error('\n❌ Migratie mislukt:', err.message);
		if (err.validationErrors) {
			console.error('Validatie fouten:', JSON.stringify(err.validationErrors, null, 2));
		}
		process.exit(1);
	}
}

main();
