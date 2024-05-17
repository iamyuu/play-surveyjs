import ReactQuill from "react-quill";
import { Question } from "survey-core";
import type { SurveyModel, TextMarkdownEvent } from "survey-core";
import { SurveyQuestionElementBase } from "survey-react-ui";

import * as React from "react";
import { Serializer } from "survey-core";
import { PropertyGridEditorCollection } from "survey-creator-core";
import { ReactQuestionFactory } from "survey-react-ui";

import "react-quill/dist/quill.snow.css";

export const EDITOR_TYPE = "rich-text";

const quillFormats = ["bold", "italic", "underline"];
const quillProps = {
	theme: "snow",
	modules: {
		toolbar: [quillFormats],
	},
	formats: quillFormats,
};

export function applyHtml(_survey: SurveyModel, question: TextMarkdownEvent) {
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

// Add question type metadata for further serialization into JSON
Serializer.addClass(
	EDITOR_TYPE,
	[{ name: "height", default: "120px", category: "layout" }],
	() => new QuestionQuillModel(""),
	"question",
);

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
