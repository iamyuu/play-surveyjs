import { createRoot } from "react-dom/client";
import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { applyHtml } from "./libs/rich-text";

import { surveyLocalization } from "survey-core";

import "survey-core/survey.i18n.js";
import { localization } from "survey-creator-core";
import "./libs/locale-id";

import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "./styles.css";

const defaultOptions: ICreatorOptions = {
	showTestSurveyTab: true,
	showEmbededSurveyTab: false,
	showJSONEditorTab: true,
	showTranslationTab: true,
	showLogicTab: false,
	showOptions: false,
	showPropertyGrid: true,
	showPagesToolbox: false,
	showDropdownPageSelector: false,
	showPagesInTestSurveyTab: false,
	showDefaultLanguageInTestSurveyTab: false,
	showInvisibleElementsInTestSurveyTab: false,
	showSimulatorInTestSurveyTab: false,
	showSurveyTitle: true,
	showTitlesInExpressions: true,

	isAutoSave: true,
	allowModifyPages: true,
	allowControlSurveyTitleVisibility: false,
	allowEditExpressionsInTextEditor: true,

	questionTypes: [
		"text",
		"comment",
		"radiogroup",
		"checkbox",
		"rating",
		"ranking",
		"imagepicker",
	],
};

localization.currentLocale = "id";
surveyLocalization.supportedLocales = ["id", "en"];

function useSurveyCreator(options?: ICreatorOptions) {
	const creator = new SurveyCreator({ ...defaultOptions, ...options });

	// Apply HTML markup to survey contents
	// NOTE: render html in the preview and designer tabs
	creator.survey.onTextMarkdown.add(applyHtml);
	creator.onSurveyInstanceCreated.add((_, options) => {
		if (options.area === "designer-tab" || options.area === "preview-tab") {
			options.survey.onTextMarkdown.add(applyHtml);
		}
	});

	return creator;
}

function App() {
	const creator = useSurveyCreator();

	// creator.JSON = {
	// 	title: "Play SurveyJS",
	// 	description: "<p>Hello <strong>world</strong></p>",
	// 	pages: [
	// 		{
	// 			name: "page1",
	// 			elements: [
	// 				{
	// 					type: "text",
	// 					name: "question1",
	// 					title: "Apalah dia apalah",
	// 				},
	// 			],
	// 		},
	// 	],
	// };

	creator.JSON = {
		title: {
			default: "Playground",
		},
		description: {
			default: "<p>Hello <strong>world</strong></p>",
			id: "<p>Halo <strong>dunia</strong></p>",
		},
		pages: [
			{
				name: "page1",
				elements: [
					{
						type: "text",
						name: "question1",
						title: {
							default: "Apalah dia apalah",
						},
					},
				],
			},
		],
	};

	return <SurveyCreatorComponent creator={creator} />;
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
