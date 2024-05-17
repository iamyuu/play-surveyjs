import ReactQuill from "react-quill";
import { Question } from "survey-core";
import type { SurveyModel, TextMarkdownEvent } from "survey-core";
import { SurveyQuestionElementBase } from "survey-react-ui";

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
export class QuestionQuillModel extends Question {
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
export class SurveyQuestionQuill extends SurveyQuestionElementBase {
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
