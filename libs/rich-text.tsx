import "quill/dist/quill.snow.css";
import * as React from "react";
import { useQuill } from "react-quilljs";
import { Question, Serializer } from "survey-core";
import type { SurveyModel, TextMarkdownEvent } from "survey-core";
import { PropertyGridEditorCollection } from "survey-creator-core";
import {
	ReactQuestionFactory,
	SurveyQuestionElementBase,
} from "survey-react-ui";

export const EDITOR_MODEL_TYPE = "rich-editor";

const allowedFormats = ["bold", "italic", "underline"];
const editorProps = {
	theme: "snow",
	modules: {
		toolbar: [allowedFormats],
	},
	formats: allowedFormats,
	clipboard: {
		matchVisual: true,
	},
};

export function applyHtml(_survey: SurveyModel, prop: TextMarkdownEvent) {
	// only apply HTML to the `description` property
	if (prop.name !== "description") {
		return;
	}

	let str = prop.text;
	if (str.indexOf("<p>") === 0) {
		// Remove root paragraphs <p></p>
		str = str.substring(3);
		str = str.substring(0, str.length - 4);
	}
	// Set HTML markup to render
	prop.html = str;
}

// Create a question model
class QuestionEditorModel extends Question {
	getType() {
		return EDITOR_MODEL_TYPE;
	}
	get height() {
		return this.getPropertyValue("height");
	}
	set height(val) {
		this.setPropertyValue("height", val);
	}
}

function Editor(props) {
	const { quill, quillRef } = useQuill({
		...editorProps,
		readOnly: props.isReadOnly,
	});

	React.useEffect(() => {
		if (quill && props.value) {
			quill.clipboard.dangerouslyPasteHTML(props.value);
		}
	}, [quill]);

	React.useEffect(() => {
		if (quill) {
			quill.on("text-change", () => {
				props.onChange(quillRef.current.firstChild.innerHTML);
			});
		}
	}, [quill]);

	return <div ref={quillRef} />;
}

// Create a class that render the editor
class SurveyQuestionEditor extends SurveyQuestionElementBase {
	get question() {
		return this.questionBase;
	}
	get value() {
		return this.question.value;
	}
	handleValueChange = (val) => {
		this.question.value = val;
	};
	get style() {
		return { background: "white", height: this.question.height };
	}

	renderQuill() {
		const isReadOnly = this.question.isReadOnly || this.question.isDesignMode;
		return (
			<Editor
				{...editorProps}
				onChange={this.handleValueChange}
				readOnly={isReadOnly}
				value={this.value}
			/>
		);
	}

	renderElement() {
		return <div style={this.style}>{this.renderQuill()}</div>;
	}
}

// Add question type metadata for further serialization into JSON
Serializer.addClass(
	EDITOR_MODEL_TYPE,
	[{ name: "height", default: "120px", category: "layout" }],
	() => new QuestionEditorModel(""),
	"question",
);

// Render `SurveyQuestionEditor` so that it can be used in the Survey Creator
ReactQuestionFactory.Instance.registerQuestion(EDITOR_MODEL_TYPE, (props) =>
	React.createElement(SurveyQuestionEditor, props),
);

// Render `rich-editor` as an editor for properties of the `text` and `html` types in the Survey Creator's Property Grid
PropertyGridEditorCollection.register({
	fit: (prop) => {
		// only render rich-editor editor for the `description` property
		if (prop.name !== "description") {
			return false;
		}

		return prop.type === "text" || prop.type === "html";
	},
	getJSON: () => ({ type: EDITOR_MODEL_TYPE }),
});
