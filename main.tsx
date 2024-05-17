import * as React from "react";
import { createRoot } from "react-dom/client";
import ReactQuill from "react-quill";
import { ElementFactory, Question, Serializer } from "survey-core";
import type { SurveyModel, TextMarkdownEvent } from "survey-core";
import { PropertyGridEditorCollection } from "survey-creator-core";
import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import {
	ReactQuestionFactory,
	SurveyQuestionElementBase,
} from "survey-react-ui";

import "react-quill/dist/quill.snow.css";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "./styles.css";

const EDITOR_TYPE = "rich-text";

const quillFormats = ["bold", "italic", "underline"];
const quillProps = {
	theme: "snow",
	modules: {
		toolbar: [quillFormats],
	},
	formats: quillFormats,
};

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

function applyHtml(_survey: SurveyModel, question: TextMarkdownEvent) {
	let str = question.text;
	if (str.indexOf("<p>") === 0) {
		// Remove root paragraphs <p></p>
		str = str.substring(3);
		str = str.substring(0, str.length - 4);
	}
	// Set HTML markup to render
	question.html = str;
}

// Create a question model
class QuestionQuillModel extends Question {
	getType() {
		return EDITOR_TYPE;
	}
	get height() {
		return this.getPropertyValue("height");
	}
	set height(val) {
		this.setPropertyValue("height", val);
	}
}

// Register the model in `ElementFactory`
// NOTE: add editor into `questionTypes`
// ElementFactory.Instance.registerElement(EDITOR_TYPE, (name) => {
// 	return new QuestionQuillModel(name);
// });

// Add question type metadata for further serialization into JSON
Serializer.addClass(
	EDITOR_TYPE,
	[{ name: "height", default: "120px", category: "layout" }],
	() => new QuestionQuillModel(""),
	"question",
);

// Create a class that renders Quill
class SurveyQuestionQuill extends SurveyQuestionElementBase {
	get question() {
		return this.questionBase;
	}
	get value() {
		return this.question.value;
	}
	handleValueChange = (val: string) => {
		this.question.value = val;
	};
	// Support the read-only and design modes
	get style() {
		return { height: this.question.height };
	}

	renderQuill() {
		const isReadOnly = this.question.isReadOnly || this.question.isDesignMode;
		return (
			<ReactQuill
				{...quillProps}
				readOnly={isReadOnly}
				value={this.value}
				onChange={this.handleValueChange}
			/>
		);
	}

	renderElement() {
		return <div style={this.style}>{this.renderQuill()}</div>;
	}
}

// Register `SurveyQuestionQuill` as a class that renders `rich-text` questions
// NOTE: render the rich text editor
ReactQuestionFactory.Instance.registerQuestion(EDITOR_TYPE, (props) =>
	React.createElement(SurveyQuestionQuill, props),
);

// Register `rich-text` as an editor for properties of the `text` and `html` types in the Survey Creator's Property Grid
// NOTE: render the rich text editor
PropertyGridEditorCollection.register({
	fit: (prop) => {
		// only render rich-text editor for the `description` property
		if (prop.name === "description") {
			return prop.type === "text" || prop.type === "html";
		}

		return false;
	},
	getJSON: () => ({ type: EDITOR_TYPE }),
});

function App() {
	const creator = new SurveyCreator(creatorOptions);

	// Move the Quill question type to the first position in the Toolbox
	// NOTE: add `rich-text` on the Toolbox (left side)
	// const toolboxItems = creator.toolbox.items;
	// const quillIndex = toolboxItems.findIndex((item) => item.name === EDITOR_TYPE);
	// const quillItem = toolboxItems.splice(quillIndex, 1)[0];
	// quillItem.title = "Rich Text Editor";
	// quillItem.iconName = "icon-comment";
	// toolboxItems.unshift(quillItem);

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
