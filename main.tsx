import { createRoot } from "react-dom/client";
import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { applyHtml } from "./libs/rich-text";

import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "./styles.css";

const creatorOptions: ICreatorOptions = {
	showTestSurveyTab: true,
	showEmbededSurveyTab: false,
	showJSONEditorTab: true,
	showTranslationTab: true,
	showLogicTab: false,
	showOptions: false,
	showPropertyGrid: true,
	allowModifyPages: true,
	showPagesToolbox: false,
	showDropdownPageSelector: false,
	isAutoSave: true,
	showPagesInTestSurveyTab: false,
	showDefaultLanguageInTestSurveyTab: false,
	showInvisibleElementsInTestSurveyTab: false,
	showSimulatorInTestSurveyTab: false,
	showSurveyTitle: true,
	allowControlSurveyTitleVisibility: false,
	questionTypes: [
		"text",
		"comment",
		"radiogroup",
		"checkbox",
		"rating",
		"ranking",
		"imagepicker",
	],
	showTitlesInExpressions: true,
	allowEditExpressionsInTextEditor: true,
	haveCommercialLicense: true,
};

function App() {
	const creator = new SurveyCreator(creatorOptions);

	// Apply HTML markup to survey contents
	// NOTE: render html in the preview and designer tabs
	creator.survey.onTextMarkdown.add(applyHtml);
	creator.onSurveyInstanceCreated.add((_, options) => {
		if (options.area === "designer-tab" || options.area === "preview-tab") {
			options.survey.onTextMarkdown.add(applyHtml);
		}
	});

	creator.JSON = {
		title: "Play SurveyJS",
		description: "<p>Hello <strong>world</strong></p>",
		pages: [
			{
				name: "page1",
				elements: [
					{
						type: "text",
						name: "question1",
						title: "Apalah dia apalah",
					},
				],
			},
		],
	};

	return <SurveyCreatorComponent creator={creator} />;
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
