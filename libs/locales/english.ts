import { editorLocalization } from "survey-creator-core";

export const enStrings = {
	// survey templates
	survey: {
		edit: "Edit",
		externalHelpLink: "Watch and learn how to create surveys",
		externalHelpLinkUrl:
			"https://intercom.help/populix/en/collections/4079012-poplite",
		dropQuestion: "Please drop a question here from the Toolbox.",
		addLogicItem: "Create a rule to customize the flow of the survey.",
		copy: "Copy",
		duplicate: "Duplicate",
		addToToolbox: "Add to toolbox",
		deletePanel: "Delete Panel",
		deleteQuestion: "Delete Question",
		convertTo: "Convert to",
		drag: "Drag element",
		license:
			"To use our library, a <a href='https://surveyjs.io/licensing'>developer license</a> is required. If you have an active license, <a href='https://surveyjs.io/remove-alert-banner'>set up your license key</a> and ensure you're using the latest version.",
	},
	// Question types
	qt: {
		default: "Default",
		checkbox: "Checkboxes",
		comment: "Long Text",
		imagepicker: "Image Picker",
		ranking: "Ranking",
		image: "Media",
		dropdown: "Dropdown",
		tagbox: "Multi-Select Dropdown",
		file: "File Upload",
		html: "HTML",
		matrix: "Single-Select Matrix",
		matrixdropdown: "Multi-Select Matrix",
		matrixdynamic: "Dynamic Matrix",
		multipletext: "Multiple Textboxes",
		panel: "Panel",
		paneldynamic: "Dynamic Panel",
		radiogroup: "Radio Button Group",
		rating: "Rating Scale",
		text: "Single-Line Input",
		boolean: "Yes/No (Boolean)",
		expression: "Expression (read-only)",
		signaturepad: "Signature",
		buttongroup: "Button Group",
	},
	// Strings in SurveyJS Creator
	ed: {
		defaultLocale: "Default ({0})",
		survey: "Survey",
		settings: "Settings",
		settingsTooltip: "Open settings",
		surveySettings: "Survey Settings",
		surveySettingsTooltip: "Survey settings",
		themeSettings: "Theme Settings",
		themeSettingsTooltip: "Theme settings",
		showPanel: "Show Panel",
		hidePanel: "Hide Panel",
		prevSelected: "Select previous",
		nextSelected: "Select next",
		prevFocus: "Focus previous",
		nextFocus: "Focus next",
		surveyTypeName: "Survey",
		pageTypeName: "Page",
		panelTypeName: "Panel",
		questionTypeName: "Question",
		columnTypeName: "Column",
		addNewPage: "Add New Page",
		moveRight: "Scroll to the Right",
		moveLeft: "Scroll to the Left",
		deletePage: "Delete Page",
		editPage: "Edit Page",
		edit: "Edit",
		newPageName: "page",
		newQuestionName: "question",
		newPanelName: "panel",
		newTextItemName: "text",
		testSurvey: "Preview",
		themeSurvey: "Themes",
		defaultV2Theme: "Default",
		modernTheme: "Modern",
		defaultTheme: "Default (legacy)",
		testSurveyAgain: "Preview Survey Again",
		testSurveyWidth: "Survey width: ",
		navigateToMsg: "You had to navigate to",
		logic: "Logic",
		embedSurvey: "Embed Survey",
		translation: "Translations",
		saveSurvey: "Save Survey",
		saveSurveyTooltip: "Save Survey",
		saveTheme: "Save Theme",
		saveThemeTooltip: "Save Theme",
		designer: "[TEST] Designer",
		jsonEditor: "JSON Editor",
		jsonHideErrors: "Hide errors",
		jsonShowErrors: "Show errors",
		undo: "Undo",
		redo: "Redo",
		undoTooltip: "Undo last change",
		redoTooltip: "Redo the change",
		showMoreChoices: "Show more",
		showLessChoices: "Show less",
		copy: "Copy",
		cut: "Cut",
		paste: "Paste",
		copyTooltip: "Copy selection to clipboard",
		cutTooltip: "Cut selection to clipboard",
		pasteTooltip: "Paste from clipboard",
		options: "Options",
		generateValidJSON: "Generate Valid JSON",
		generateReadableJSON: "Generate Readable JSON",
		toolbox: "Toolbox",
		"property-grid": "Properties",
		propertyGridFilteredTextPlaceholder: "Type to search...",
		propertyGridNoResultsFound: "No results found",
		toolboxGeneralCategory: "General",
		toolboxChoiceCategory: "Choice Questions",
		toolboxTextCategory: "Text Input Questions",
		toolboxContainersCategory: "Containers",
		toolboxMatrixCategory: "Matrix Questions",
		toolboxMiscCategory: "Misc",
		correctJSON: "Please correct JSON.",
		surveyResults: "Survey Results ",
		surveyResultsTable: "As Table",
		surveyResultsJson: "As JSON",
		resultsTitle: "Question Title",
		resultsName: "Question Name",
		resultsValue: "Answer Value",
		resultsDisplayValue: "Display Value",
		modified: "Modified",
		saving: "Saving",
		saved: "Saved",
		propertyEditorError: "Error",
		saveError: "Error! Editor content is not saved.",
		translationPropertyGridTitle: "Language Settings",
		themePropertyGridTitle: "Theme Settings",
		translationLanguages: "Languages",
		translationDeleteLanguage:
			"Are you certain you wish to delete all strings for this language?",
		translationAddLanguage: "Select language to translate",
		translationShowAllStrings: "All Strings",
		translationShowUsedStringsOnly: "Used Strings Only",
		translationShowAllPages: "All Pages",
		translationNoStrings: "No strings to translate. Please, change the filter.",
		translationExportToSCVButton: "Export to CSV",
		translationImportFromSCVButton: "Import from CSV",
		translateUsigAI: "Auto-translate All",
		translateUsigAIFrom: "Translate from: ",
		translationDialogTitle: "Untranslated strings",
		translationMergeLocaleWithDefault: "Merge {0} with default locale",
		translationPlaceHolder: "Translation...",
		translationSource: "Source: ",
		translationTarget: "Target: ",
		themeExportButton: "Export",
		themeImportButton: "Import",
		surveyJsonExportButton: "Export",
		surveyJsonImportButton: "Import",
		surveyJsonCopyButton: "Copy to clipboard",
		themeResetButton: "Reset theme settings to default",
		themeResetConfirmation:
			"Do you really want to reset the theme? All your customizations will be lost.",
		themeResetConfirmationOk: "Yes, reset the theme",
		bold: "Bold",
		italic: "Italic",
		underline: "Underline",
		addNewQuestion: "Add Question",
		selectPage: "Select page...",
		carryForwardChoicesCopied: "Choices are copied from",
		choicesLoadedFromWebText: "Choices are loaded from a web service.",
		choicesLoadedFromWebLinkText: "Go to settings",
		choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options",
		htmlPlaceHolder: "HTML content will be here.",
		panelPlaceHolder: "Drop a question from the toolbox here.",
		surveyPlaceHolder:
			"The survey is empty. Drag an element from the toolbox or click the button below.",
		pagePlaceHolder:
			"The page is empty. Drag an element from the toolbox or click the button below.",
		imagePlaceHolder:
			"Drag and drop an image here or click the button below and choose an image to upload",
		imageChooseImage: "Choose Image",
		addNewTypeQuestion: "Add {0}", //{0} is localizable question type
		chooseLogoPlaceholder: "[LOGO]",
		choices_Item: "Item ",
		lg: {
			addNewItem: "Add New Rule",
			empty_tab: "Create a rule to customize the flow of the survey.",
			page_visibilityName: "Show (hide) page",
			page_enableName: "Enable (disable) page",
			page_requireName: "Make page required",
			panel_visibilityName: "Show (hide) panel",
			panel_enableName: "Enable (disable) panel",
			panel_requireName: "Make page required",
			question_visibilityName: "Show (hide) question",
			question_enableName: "Enable (disable) question",
			question_requireName: "Make question required",
			question_resetValueName: "Reset question value",
			question_setValueName: "Set question value",
			column_visibilityName: "Show (hide) column",
			column_enableName: "Enable (disable) column",
			column_requireName: "Make column required",
			column_resetValueName: "Reset column value",
			column_setValueName: "Set column value",
			trigger_completeName: "Complete survey",
			trigger_setvalueName: "Set answer",
			trigger_copyvalueName: "Copy answer",
			trigger_skipName: "Skip to question",
			trigger_runExpressionName: "Run expression",
			completedHtmlOnConditionName: 'Set "Survey Complete" page markup',
			page_visibilityDescription:
				"Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
			panel_visibilityDescription:
				"Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
			panel_enableDescription:
				"Make the panel and all elements inside it enabled when the logic expression returns true. Otherwise keep them disabled.",
			question_visibilityDescription:
				"Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
			question_enableDescription:
				"Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
			question_requireDescription:
				"Question becomes required when the logic expression returns true.",
			trigger_completeDescription:
				"When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
			trigger_setvalueDescription:
				"When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
			trigger_copyvalueDescription:
				"When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
			trigger_skipDescription:
				"When the logic expression returns true then the survey skip to / focus the selected question.",
			trigger_runExpressionDescription:
				"When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question.",
			completedHtmlOnConditionDescription:
				"If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",
			itemExpressionText: "When expression: '{0}' returns true", //{0} - the expression
			itemEmptyExpressionText: "New rule",
			page_visibilityText: "make page {0} visible", //{0} page name
			panel_visibilityText: "make panel {0} visible", //{0} panel name
			panel_enableText: "make panel {0} enable", //{0} panel name
			question_visibilityText: "make question {0} visible", //{0} question name
			question_enableText: "make question {0} enable", //{0} question name
			question_requireText: "make question {0} required", //{0} question name
			question_resetValueText: "reset value for question: {0}", //{0} question name.
			question_setValueText: "assign value: {1} to question: {0}", //{0} question name and {1} setValueExpression
			column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
			column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
			column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
			column_resetValueText: "reset cell value for column: {0}", //{0} column name
			column_setValueText: "assign cell value: {1} to column: {0}", //{0} column name and {1} setValueExpression
			setValueExpressionPlaceholder:
				"An expression whose result will be assigned to the target question.",
			trigger_completeText: "survey becomes completed",
			trigger_setvalueText: "set into question: {0} value {1}", //{0} question name, {1} setValue
			trigger_setvalueEmptyText: "clear question value: {0}", //{0} question name
			trigger_copyvalueText: "copy into question: {0} value from question {1}", //{0} and {1} question names
			trigger_skipText: "survey skip to the question {0}", //{0} question name
			trigger_runExpressionText1: "run expression: '{0}'", //{0} the expression
			trigger_runExpressionText2: " and set its result into question: {0}", //{0} question name
			completedHtmlOnConditionText:
				"show custom text for the 'Thank you page'.",
			showAllQuestions: "All Questions",
			showAllActionTypes: "All Action Types",
			conditions: "Condition(s)",
			actions: "Action(s)",
			expressionEditorTitle: "Define condition(s)",
			actionsEditorTitle: "Define action(s)",
			deleteAction: "Delete Action",
			addNewAction: "Add Action",
			selectedActionCaption: "Select action...",
			expressionInvalid:
				"The logic expression is empty or invalid. Please correct it.",
			noActionError: "Please add at least one action.",
			actionInvalid: "Please fix problems in your action(s).",
			uncompletedRule_title: "Logical rules are incomplete",
			uncompletedRule_text:
				"You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?",
			uncompletedRule_apply: "Yes",
			uncompletedRule_cancel: "No, I want to complete the rules",
		},
	},
	// Property Editors
	pe: {
		panel: {
			name: "Panel name",
			title: "Panel title",
			description: "Panel description",
			// visible: "Make panel visible",
			// readOnly: "Make panel read-only",
			// isRequired: "Make panel required",
			visibleIf: "Make the panel visible if",
			requiredIf: "Make the panel required if",
			questionsOrder: "Question order within the panel",
			page: "Move the panel to page",
			startWithNewLine: "Display the panel on a new line",
			state: "Panel collapse state",
			width: "Inline panel width",
			minWidth: "Minimum panel width",
			maxWidth: "Maximum panel width",
			showNumber: "Number panels",
		},
		paneldynamic: {
			name: "Panel name",
			title: "Panel title",
			description: "Panel description",
			// visible: "Make panel visible",
			// readOnly: "Make panel read-only",
			// isRequired: "Make panel required",
			visibleIf: "Make the panel visible if",
			requiredIf: "Make the panel required if",

			// questionsOrder: "Question order within the panel",
			page: "Move the panel to page",
			startWithNewLine: "Display the panel on a new line",
			state: "Panel collapse state",
			width: "Inline panel width",
			minWidth: "Minimum panel width",
			maxWidth: "Maximum panel width",
			// showNumber: "Number panels",
			confirmDelete: "Confirm panel deletion",
			templateDescription: "Panel description pattern",
			templateTitle: "Panel title pattern",
			noEntriesText: "Empty panel text",
			templateTabTitle: "Tab title pattern",
			templateVisibleIf: "Make an individual panel visible if",
			hideNumber: "Hide the panel number",
			titleLocation: "Panel title alignment",
			descriptionLocation: "Panel description alignment",
			templateTitleLocation: "Question title alignment",
			templateErrorLocation: "Error message alignment",
			newPanelPosition: "New panel location",
			keyName: "Prevent duplicate responses in the following question",
		},
		question: {
			name: "Question name",
			title: "Question title",
			description: "Question description",
			// visible: "Make question visible",
			// readOnly: "Make question read-only",
			// isRequired: "Make question required",
			visibleIf: "Make the question visible if",
			requiredIf: "Make the question required if",
			page: "Move the question to page",
			state: "Question box collapse state",
			hideNumber: "Hide the question number",
			titleLocation: "Question title alignment",
			descriptionLocation: "Question description alignment",
			errorLocation: "Error message alignment",
			indent: "Increase the inner indent",
			width: "Inline question width",
			minWidth: "Minimum question width",
			maxWidth: "Maximum question width",
			textUpdateMode: "Update input field value",
		},
		signaturepad: {
			signatureWidth: "Signature area width",
			signatureHeight: "Signature area height",
			signatureAutoScaleEnabled: "Auto-scale the signature area",
			showPlaceholder: "Show a placeholder within signature area",
			placeholder: "Placeholder text",
			placeholderReadOnly: "Placeholder text in read-only or preview mode",
			allowClear: "Show the Clear button within signature area",
			penMinWidth: "Minimum stroke width",
			penMaxWidth: "Maximum stroke width",
			penColor: "Stroke color",
		},
		comment: {
			rows: "Input field height (in lines)",
		},
		showQuestionNumbers: "Question numbering",
		questionStartIndex: "Question indexing type",
		expression: {
			name: "Expression name",
			title: "Expression title",
			description: "Expression description",
			expression: "Expression",
		},
		trigger: {
			expression: "Expression",
		},
		calculatedvalue: {
			expression: "Expression",
		},
		survey: {
			title: "Survey title",
			description: "Survey description",
		},
		page: {
			name: "Page name",
			title: "Page title",
			description: "Page description",
			// visible: "Make page visible",
			// readOnly: "Make page read-only",
			// isRequired: "Make page required",
			visibleIf: "Make the page visible if",
			requiredIf: "Make the page required if",
			maxTimeToFinish: "Time limit to complete the page",
			questionsOrder: "Question order on the page",
		},
		matrixdropdowncolumn: {
			name: "Column name",
			title: "Column title",
			isUnique: "Prevent duplicate responses",
			width: "Column width",
			minWidth: "Minimum column width",
			rows: "Input field height (in lines)",
			visibleIf: "Make the column visible if",
			requiredIf: "Make the column required if",
			showInMultipleColumns: "Each option in a separate column",
		},
		multipletextitem: {
			name: "Name",
			title: "Title",
		},
		masksettings: {
			saveMaskedValue: "Save masked value in survey results",
		},
		patternmask: {
			pattern: "Value pattern",
		},
		datetimemask: {
			min: "Minimum value",
			max: "Maximum value",
		},
		numericmask: {
			allowNegativeValues: "Allow negative values",
			thousandsSeparator: "Thousands separator",
			decimalSeparator: "Decimal separator",
			precision: "Value precision",
			min: "Minimum value",
			max: "Maximum value",
		},
		currencymask: {
			prefix: "Currency prefix",
			suffix: "Currency suffix",
		},
		imageHeight: "Display area height",
		imageWidth: "Display area width",
		valueName: "Join identifier",
		rateDescriptionLocation: "Label alignment",
		size: "Input field width (in characters)",
		cellErrorLocation: "Cell error message alignment",

		apply: "Apply",
		ok: "OK",
		save: "Save",
		clear: "Clear",
		saveTooltip: "Save",
		cancel: "Cancel",
		set: "Set",
		reset: "Reset",
		change: "Change",
		refresh: "Refresh",
		close: "Close",
		delete: "Delete",
		add: "Add",
		addNew: "Add New",
		addItem: "Click to add an item...",
		removeItem: "Click to remove the item...",
		dragItem: "Drag the item",
		addOther: "Other",
		addSelectAll: "Select All",
		addNone: "None",
		removeAll: "Remove All",
		edit: "Edit",
		back: "Return without saving",
		backTooltip: "Return without saving",
		saveAndBack: "Save and return",
		saveAndBackTooltip: "Save and return",
		doneEditing: "Done",
		editChoices: "Edit Choices",
		showChoices: "Show Choices",
		move: "Move",
		empty: "<empty>",
		emptyValue: "Value is empty",
		fastEntry: "Manual Entry",
		fastEntryNonUniqueError: "Value '{0}' is not unique",
		fastEntryChoicesCountError:
			"Please limit the number of items from {0} to {1}",
		fastEntryChoicesMinCountError: "Please enter at least {0} items",
		fastEntryPlaceholder:
			"Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules.",
		formEntry: "Form Entry",
		testService: "Test the service",
		itemSelectorEmpty: "Please select the element",
		conditionActionEmpty: "Please select the action",
		conditionSelectQuestion: "Select a question...",
		conditionSelectPage: "Select a page...",
		conditionSelectPanel: "Select a panel...",
		conditionValueQuestionTitle: "Please enter/select the value",
		aceEditorHelp: "Press ctrl+space to get expression completion hint",
		aceEditorRowTitle: "Current row",
		aceEditorPanelTitle: "Current panel",
		showMore: "For more details please check the documentation",
		assistantTitle: "Available questions",
		cellsEmptyRowsColumns: "There is should be at least one column or row",
		showPreviewBeforeComplete: "Review before submit",
		overridingPropertyPrefix: "Enabled by a condition",
		resetToDefaultCaption: "Reset",
		propertyIsEmpty: "Please enter a value",
		propertyIsNoUnique: "Please enter a unique value",
		propertyNameIsNotUnique: "Please enter a unique name",
		propertyNameIsIncorrect:
			'Do not use reserved words: "item", "choice", "panel", "row".',
		listIsEmpty: "You don't have any items yet",
		"listIsEmpty@choices": "You don't have any choices yet",
		"listIsEmpty@columns": "You don't have any columns yet",
		"listIsEmpty@rows": "You don't have any rows yet",
		"listIsEmpty@validators": "You don't have any validation rules yet",
		"listIsEmpty@calculatedValues": "You don't have any custom variables yet",
		"listIsEmpty@triggers": "You don't have any triggers yet",
		"listIsEmpty@navigateToUrlOnCondition": "You don't have any links yet",
		"addNew@choices": "Add new choice",
		"addNew@columns": "Add new column",
		"addNew@rows": "Add new row",
		"addNew@validators": "Add new rule",
		"addNew@calculatedValues": "Add new variable",
		"addNew@triggers": "Add new trigger",
		"addNew@navigateToUrlOnCondition": "Add new URL",
		expressionIsEmpty: "Expression is empty",
		value: "Value",
		text: "Text",
		rowid: "Row ID",
		imageLink: "Image or video file URL",
		columnEdit: "Edit column: {0}",
		itemEdit: "Edit item: {0}",
		url: "URL",
		path: "Path to data",
		choicesbyurl: {
			url: "Web service's URL",
			valueName: "Get value to store from the following property",
		},
		titleName: "Get value to display from the following property",
		imageLinkName: "Get file URLs from the following property",
		allowEmptyResponse: "Accept empty response",
		titlePlaceholder: "Title",
		surveyTitlePlaceholder: "Survey Title",
		pageTitlePlaceholder: "Page {num}",
		descriptionPlaceholder: "Description",
		surveyDescriptionPlaceholder: "Description",
		pageDescriptionPlaceholder: "Description",
		showOtherItem: 'Enable the "Other" option',
		otherText: 'Rename the "Other" option',
		showNoneItem: 'Enable the "None" option',
		showRefuseItem: 'Enable the "Refuse to Answer" option',
		showDontKnowItem: 'Enable the "Don\'t Know" option',
		noneText: 'Rename the "None" option',
		showSelectAllItem: 'Enable the "Select All" option',
		selectAllText: 'Rename the "Select All" option',
		choicesMin: "Minimum value for auto-generated items",
		choicesMax: "Maximum value for auto-generated items",
		choicesStep: "Step value for auto-generated items",
		name: "Name",
		title: "Title",
		cellType: "Cell input type",
		colCount: "Column count",
		choicesOrder: "Choice order",
		visible: "Visible",
		isRequired: "Required",
		markRequired: "Mark as required",
		removeRequiredMark: "Remove the required mark",
		isAllRowRequired: "Require an answer in each row",
		eachRowUnique: "Prevent duplicate responses in rows",
		requiredErrorText: "Error message for required questions",
		startWithNewLine: "Display the question on a new line",
		rows: "Rows",
		cols: "Columns",
		placeholder: "Placeholder text within input field",
		showPreview: "Show preview area",
		storeDataAsText: "Store file content in JSON result as text",
		maxSize: "Maximum file size (in bytes)",
		rowCount: "Row count",
		columnLayout: "Columns layout",
		addRowLocation: '"Add Row" button alignment',
		transposeData: "Transpose rows to columns",
		addRowText: '"Add Row" button text',
		removeRowText: '"Remove Row" button text',
		rateMin: "Minimum rating value",
		rateMax: "Maximum rating value",
		rateStep: "Step value",
		minRateDescription: "Minimum value label",
		maxRateDescription: "Maximum value label",
		inputType: "Input type",
		optionsCaption: "Option placeholder",
		defaultValue: "Default Answer",
		cellsDefaultRow: "Default texts",
		surveyEditorTitle: "Edit survey settings",
		qEditorTitle: "Edit: {0}",
		maxLength: "Maximum character limit",
		buildExpression: "Build",
		editExpression: "Edit",
		and: "and",
		or: "or",
		remove: "Remove",
		addCondition: "Add Condition",
		emptyLogicPopupMessage:
			"Select a question to start configuring conditions.",
		if: "If",
		then: "then",
		setToName: "Target question",
		fromName: "Question to copy answer from",
		gotoName: "Question to skip to",
		ruleIsNotSet: "Rule is incorrect",
		includeIntoResult: "Add to the survey results",
		showTitle: "Make the title and description visible",
		expandCollapseTitle: "Expand/collapse title",
		locale: "Select a survey language",
		simulator: "Select device type",
		landscapeOrientation: "Switch to landscape orientation",
		portraitOrientation: "Switch to portrait orientation",
		mode: "Survey display mode",
		clearInvisibleValues: "Clear hidden question values",
		cookieName: "Limit to one response",
		sendResultOnPageNext: "Auto-save survey progress on page change",
		storeOthersAsComment:
			'Save the "Other" option value as a separate property',
		showPageTitles: "Show page titles",
		showPageNumbers: "Show page numbers",
		pagePrevText: '"Previous Page" button text',
		pageNextText: '"Next Page" button text',
		completeText: '"Complete Survey" button text',
		previewText: '"Review Answers" button text',
		editText: '"Edit Answer" button text',
		startSurveyText: '"Start Survey" button text',
		showNavigationButtons: "Show / hide navigation buttons",
		showPrevButton: "Show the Previous Page button",
		firstPageIsStarted: "First page is a start page",
		showCompletedPage: "Show the Thank You page",
		goNextPageAutomatic: "Auto-advance to the next page",
		allowCompleteSurveyAutomatic: "Complete the survey automatically",
		showProgressBar: "Progress bar alignment",
		questionTitleLocation: "Question title alignment",
		requiredText: "Required symbol(s)",
		questionTitleTemplate:
			"Question title template, default is: '{no}. {require} {title}'",
		questionErrorLocation: "Error message alignment",
		focusFirstQuestionAutomatic: "Focus first question on a new page",
		questionsOrder: "Question order",
		maxTimeToFinish: "Time limit to complete the survey",
		maxTimeToFinishPage: "Time limit to complete one page",
		showTimerPanel: "Timer alignment",
		showTimerPanelMode: "Timer mode",
		renderMode: "Panel display mode",
		allowAddPanel: "Enable panel addition",
		allowRemovePanel: "Enable panel removal",
		panelAddText: '"Add Panel" button text',
		panelRemoveText: '"Remove Panel" button text',
		isSinglePage: "Show all elements on one page",
		html: "HTML markup",
		setValue: "Answer",
		dataFormat: "Storage format",
		allowAddRows: "Enable row addition",
		allowRemoveRows: "Enable row removal",
		allowRowsDragAndDrop: "Enable row reordering",
		responsiveImageSizeHelp:
			"Does not apply if you specify the exact display area width or height.",
		minImageWidth: "Minimum display area width",
		maxImageWidth: "Maximum display area width",
		minImageHeight: "Minimum display area height",
		maxImageHeight: "Maximum display area height",
		minValue: "Minimum value",
		maxValue: "Maximum value",
		minLength: "Minimum length (in characters)",
		allowDigits: "Allow digits",
		minCount: "Minimum count",
		maxCount: "Maximum count",
		regex: "Regular expression",
		surveyvalidator: {
			text: "Error message",
			expression: "Validation expression",
		},
		totalText: "Total row header",
		totalType: "Aggregation method",
		totalExpression: "Total value expression",
		totalDisplayStyle: "Total value display format",
		totalCurrency: "Currency",
		totalFormat: "Formatted string",
		logo: "Survey logo",
		questionsOnPageMode: "Survey layout",
		maxTextLength: "Restrict answer length",
		maxOthersLength: "Restrict comment length",
		autoGrowComment: "Auto-expand text areas",
		allowResizeComment: "Allow users to resize text areas",
		textUpdateMode: "Update input field values",
		maskType: "Input mask type",
		maskTypes: {
			none: "None",
			patternmask: "Pattern",
			numericmask: "Numeric",
			datetimemask: "Date and Time",
			currencymask: "Currency",
		},
		focusOnFirstError: "Set focus on the first invalid answer",
		checkErrorsMode: "Run validation",
		navigateToUrl: "Redirect to an external link after submission",
		navigateToUrlOnCondition: "Dynamic external link",
		completedBeforeHtml:
			"Markup to show if the user already filled out this survey",
		completedHtml: "Thank You page markup",
		completedHtmlOnCondition: "Dynamic Thank You page markup",
		loadingHtml: "Markup to show while survey model is loading",
		commentText: "Comment area text",
		autocomplete: "Autocomplete type",
		labelTrue: 'Label for "True"',
		labelFalse: 'Label for "False"',
		allowClear: "Show the Clear button",
		displayStyle: "Display format",
		format: "Formatted string",
		maximumFractionDigits: "Maximum fractional digits",
		minimumFractionDigits: "Minimum fractional digits",
		useGrouping: "Display grouping separators",
		allowMultiple: "Enable multiple file upload",
		allowImagesPreview: "Preview uploaded images",
		acceptedTypes: "Accepted file types",
		waitForUpload: "Wait for upload to complete",
		needConfirmRemoveFile: "Confirm file deletion",
		detailPanelMode: "Row expansion alignment",
		minRowCount: "Minimum row count",
		maxRowCount: "Maximum row count",
		confirmDelete: "Confirm row deletion",
		confirmDeleteText: "Confirmation message",
		panelCount: "Initial panel count",
		minPanelCount: "Minimum panel count",
		maxPanelCount: "Maximum panel count",
		panelsState: "Inner panel collapse state",
		panelPrevText: '"Previous Panel" button text',
		panelNextText: '"Next Panel" button text',
		showRangeInProgress: "Show the progress bar",
		panelRemoveButtonLocation: '"Remove Panel" button alignment',
		hideIfRowsEmpty: "Hide the question if it has no rows",
		hideColumnsIfEmpty: "Hide columns if there are no rows",
		rateValues: "Custom rating values",
		rateCount: "Rating count",
		autoGenerate: "Rating configuration",
		hideIfChoicesEmpty: "Hide the question if it has no choices",
		minWidth: "Minimum width",
		maxWidth: "Maximum width",
		width: "Width",
		showHeader: "Show column headers",
		horizontalScroll: "Show horizontal scrollbar",
		columnMinWidth: "Minimum column width",
		rowTitleWidth: "Row header width",
		valueTrue: 'Value to store when "True" is selected',
		valueFalse: 'Value to store when "False" is selected',
		minErrorText: '"Value is below minimum" error message',
		maxErrorText: '"Value exceeds maximum" error message',
		otherErrorText: '"Empty comment" error message',
		keyDuplicationError: "Error message for duplicate responses",
		minSelectedChoices: "Minimum choices to select",
		maxSelectedChoices: "Maximum choices to select",
		showClearButton: "Show the Clear button",
		logoWidth: "Logo width",
		logoHeight: "Logo height",
		readOnly: "Read-only",
		enableIf: "Disable the read-only mode if",
		emptyRowsText: '"No rows" message',
		separateSpecialChoices: "Separate special choices",
		choicesFromQuestion: "Copy choices from the following question",
		choicesFromQuestionMode: "Which choice options to copy",
		progressBarShowPageTitles: "Display page titles in progress bar",
		progressBarShowPageNumbers: "Display page numbers in progress bar",
		showCommentArea: "Add a comment box",
		commentPlaceholder: "Placeholder text for the comment box",
		displayRateDescriptionsAsExtremeItems: "Show the labels as extreme values",
		rowsOrder: "Row order",
		columnsLayout: "Column layout",
		columnColCount: "Nested column count",
		correctAnswer: "Correct Answer",
		defaultPanelValue: "Default Values",
		cells: "Cell Texts",
		keyName: "Prevent duplicate responses in the following column",
		itemvalue: {
			visibleIf: "Make the option visible if",
			enableIf: "Make the option selectable if",
		},
		"itemvalue@rows": {
			visibleIf: "Make the row visible if",
			enableIf: "Make the row editable if",
		},
		imageitemvalue: {
			text: "Alt text",
		},
		logoPosition: "Logo position",
		addLogo: "Add logo...",
		changeLogo: "Change logo...",
		logoPositions: {
			none: "Remove logo",
			left: "Left",
			right: "Right",
			top: "On the top",
			bottom: "In the bottom",
		},
		tabs: {
			panel: {
				layout: "Panel Layout",
			},
			general: "General",
			fileOptions: "Options",
			html: "HTML Editor",
			columns: "Columns",
			rows: "Rows",
			choices: "Choice Options",
			items: "Items",
			visibleIf: "Visible If",
			enableIf: "Editable If",
			requiredIf: "Required If",
			rateValues: "Rating Values",
			choicesByUrl: "Choices from a Web Service",
			matrixChoices: "Default Choices",
			multipleTextItems: "Text Inputs",
			numbering: "Numbering",
			validators: "Validators",
			navigation: "Navigation",
			question: "Question Settings",
			pages: "Pages",
			timer: "Quiz Mode",
			calculatedValues: "Calculated Values",
			triggers: "Triggers",
			templateTitle: "Title template",
			totals: "Totals",
			logic: "Conditions",
			mask: "Input Mask Settings",
			layout: {
				panel: "Panel Layout",
				question: "Layout",
				base: "Layout",
			},
			data: "Data",
			validation: "Validation",
			cells: "Individual Cell Texts",
			showOnCompleted: "Survey Completed page",
			logo: "Logo in the Survey Header",
			slider: "Slider",
			expression: "Expression",
			questionSettings: "Question Settings",
			others: "Others",
		},
		editProperty: "Edit property '{0}'",
		items: "Items",
		choicesVisibleIf: "Make choices visible if",
		choicesEnableIf: "Make choices selectable if",
		columnsEnableIf: "Make columns visible if",
		rowsEnableIf: "Make rows visible if",
		innerIndent: "Increase the inner indent",
		defaultValueFromLastRow: "Use answers from the last row as default",
		defaultValueFromLastPanel: "Use answers from the last panel as default",
		enterNewValue: "Please enter the value.",
		noquestions: "There are no questions in the survey.",
		createtrigger: "Please create a trigger",
		titleKeyboardAdornerTip: "Press enter button to edit",
		keyboardAdornerTip:
			"Press Enter button to edit item, press Delete button to delete item, press Alt plus arrow up or arrow down to move item",
		triggerOn: "On ",
		triggerMakePagesVisible: "Make pages visible",
		triggerMakeQuestionsVisible: "Make elements visible",
		triggerCompleteText: "Complete the survey if succeed.",
		triggerNotSet: "The trigger is not set",
		triggerRunIf: "Run if",
		triggerSetToName: "Change value of: ",
		triggerFromName: "Copy value from: ",
		triggerRunExpression: "Run this Expression",
		triggerSetValue: "to: ",
		triggerGotoName: "Go to the question",
		triggerIsVariable: "Do not put the variable into the survey result.",
		triggerRunExpressionEmpty: "Please enter a valid expression",
		emptyExpressionPlaceHolder: "Type expression here...",
		noFile: "No file chosen",
		clearIfInvisible: "Clear hidden question values",
		valuePropertyName: "Store values in the following property",
		searchEnabled: "Enable search-as-you-type",
		hideSelectedItems: "Hide selected items",
		closeOnSelect: "Collapse the dropdown upon selection",
		verticalAlign: "Vertical alignment within cells",
		alternateRows: "Alternate row colors",
		columnsVisibleIf: "Make columns visible if",
		rowsVisibleIf: "Make rows visible if",
		otherPlaceholder: "Placeholder text for the comment box",
		filePlaceholder: "Placeholder text for Local file",
		photoPlaceholder: "Placeholder text for Camera",
		fileOrPhotoPlaceholder: "Placeholder text for Local file or Camera",
		rateType: "Rating icon",
		url_placeholder: "Ex.: https://api.example.com/books",
		path_placeholder: "Ex.: categories.fiction",
		questionStartIndex_placeholder: "Ex.: a)",
		width_placeholder: "Ex.: 6in",
		minWidth_placeholder: "Ex.: 600px",
		maxWidth_placeholder: "Ex.: 50%",
		imageHeight_placeholder: "auto",
		imageWidth_placeholder: "auto",
	},
	// Property values
	pv: {
		true: "true",
		false: "false",
		file: "Local file",
		camera: "Camera",
		"file-camera": "Local file or Camera",
		inherit: "Inherit",
		show: "Visible",
		hide: "Hidden",
		default: "Inherit",
		initial: "Initial",
		random: "Random",
		collapsed: "Collapsed",
		expanded: "Expanded",
		none: "None",
		asc: "Ascending",
		desc: "Descending",
		indeterminate: "Indeterminate",
		selected: "Selected",
		unselected: "Unselected",
		decimal: "decimal",
		currency: "currency",
		percent: "percent",
		firstExpanded: "First panel is expanded",
		off: "Hide question numbers",
		list: "List",
		progressTop: "Panel navigator + Progress bar at the top",
		progressBottom: "Panel navigator + Progress bar at the bottom",
		progressTopBottom: "Panel navigator + Progress bar at the top and bottom",
		tab: "Tabs",
		horizontal: "Horizontal",
		vertical: "Vertical",
		top: "Top",
		bottom: "Bottom",
		topBottom: "Top and bottom",
		both: "Both",
		left: "Left",
		right: "Right",
		center: "Center",
		leftRight: "Left and right",
		middle: "Middle",
		color: "color",
		date: "date",
		datetime: "datetime",
		"datetime-local": "datetime-local",
		email: "email",
		month: "month",
		number: "number",
		password: "password",
		range: "range",
		tel: "tel",
		text: "text",
		time: "time",
		url: "url",
		week: "week",
		hidden: "Hidden",
		edit: "Editable",
		display: "Read-only",
		contain: "Contain",
		cover: "Cover",
		fill: "Fill",
		next: "Next",
		last: "Last",
		onComplete: "Upon survey completion",
		onHidden: "When question gets hidden",
		onHiddenContainer: "When question or its panel/page gets hidden",
		clearInvisibleValues: {
			none: "Never",
		},
		clearIfInvisible: {
			none: "Never",
		},
		inputType: {
			color: "Color",
			date: "Date",
			"datetime-local": "Date and Time",
			email: "Email",
			month: "Month",
			number: "Number",
			password: "Password",
			range: "Range",
			tel: "Phone Number",
			text: "Text",
			time: "Time",
			url: "URL",
			week: "Week",
		},
		all: "All",
		page: "Page",
		survey: "Survey",
		onNextPage: "When switching to the next page",
		onValueChanged: "After an answer is changed",
		onValueChanging: "Before an answer is changed",
		questionsOnPageMode: {
			standard: "Original structure",
			singlePage: "Show all questions on one page",
			questionPerPage: "Show single question per page",
		},
		noPreview: "No preview",
		showAllQuestions: "Show all questions",
		showAnsweredQuestions: "Show answered questions only",
		pages: "Completed pages",
		questions: "Answered questions",
		requiredQuestions: "Answered required questions",
		correctQuestions: "Valid answers",
		buttons: "Completed pages (button UI)",
		underInput: "Under the input field",
		underTitle: "Under the question title",
		onBlur: "On lost focus",
		onTyping: "While typing",
		underRow: "Under the row",
		underRowSingle: "Under the row, display one row expansion only",
		auto: "Auto",
		showNavigationButtons: {
			none: "Hidden",
		},
		showTimerPanel: {
			none: "Hidden",
		},
		showTimerPanelMode: {
			all: "Both",
		},
		addRowLocation: {
			default: "Based on matrix layout",
		},
		panelsState: {
			default: "Locked",
			collapsed: "Collapse all",
			expanded: "Expand all",
			firstExpanded: "First expanded",
		},
		widthMode: {
			static: "Static",
			responsive: "Responsive",
		},
		contentMode: {
			image: "Image",
			video: "Video",
			youtube: "YouTube",
		},
		displayMode: {
			buttons: "Buttons",
			dropdown: "Dropdown",
		},
		rateColorMode: {
			default: "Default",
			scale: "Scale",
		},
		scaleColorMode: {
			monochrome: "Monochrome",
			colored: "Colored",
		},
		autoGenerate: {
			true: "Auto-generate",
			false: "Manual",
		},
		rateType: {
			labels: "Labels",
			stars: "Stars",
			smileys: "Smileys",
		},
		state: {
			default: "Locked",
		},
		showQuestionNumbers: {
			default: "Auto-numbering",
			on: "Auto-numbering",
			onPage: "Reset on each page",
			onpanel: "Reset on each panel",
			onPanel: "Reset on each panel",
			onSurvey: "Continue across the survey",
			off: "No numbering",
		},
		descriptionLocation: {
			underTitle: "Under the question title",
			underInput: "Under the input field",
		},
		selectToRankAreasLayout: {
			horizontal: "Next to choices",
			vertical: "Above choices",
		},
		displayStyle: {
			decimal: "Decimal",
			currency: "Currency",
			percent: "Percentage",
			date: "Date",
		},
		totalDisplayStyle: {
			decimal: "Decimal",
			currency: "Currency",
			percent: "Percentage",
			date: "Date",
		},
		rowsOrder: {
			initial: "Original",
		},
		questionsOrder: {
			initial: "Original",
		},
		showProgressBar: {
			off: "Hidden",
			aboveHeader: "Above the header",
			belowHeader: "Below the header",
		},
		sum: "Sum",
		count: "Count",
		min: "Min",
		max: "Max",
		avg: "Avg",
		searchMode: {
			contains: "Contains",
			startsWith: "Starts with",
		},
		textWrapEnabled: "Wrap choices",
	},
	// Operators
	op: {
		empty: "Empty",
		notempty: "Not empty",
		equal: "Equals",
		notequal: "Does not equal",
		contains: "Contains",
		notcontains: "Does not contain",
		anyof: "Any of",
		allof: "All of",
		greater: "Greater than",
		less: "Less than",
		greaterorequal: "Greater than or equal to",
		lessorequal: "Less than or equal to",
		and: "and",
		or: "or",
	},
	// Embed window
	ew: {
		angular: "Use Angular version",
		jquery: "Use jQuery version",
		knockout: "Use Knockout version",
		react: "Use React version",
		vue: "Use Vue version",
		bootstrap: "For bootstrap framework",
		modern: "Modern theme",
		default: "Default theme",
		orange: "Orange theme",
		darkblue: "Darkblue theme",
		darkrose: "Darkrose theme",
		stone: "Stone theme",
		winter: "Winter theme",
		winterstone: "Winter-Stone theme",
		showOnPage: "Show survey on a page",
		showInWindow: "Show survey in a window",
		loadFromServer: "Load Survey JSON from server",
		titleScript: "Scripts and styles",
		titleHtml: "HTML",
		titleJavaScript: "JavaScript",
	},
	// Preview (Survey)
	ts: {
		selectPage: "Select the page to test it",
		showInvisibleElements: "Show invisible elements",
		hideInvisibleElements: "Hide invisible elements",
	},
	validators: {
		answercountvalidator: "Answer count",
		emailvalidator: "Email",
		expressionvalidator: "Expression",
		numericvalidator: "Number",
		regexvalidator: "Regex",
		textvalidator: "Text",
	},
	triggers: {
		completetrigger: "Complete survey",
		setvaluetrigger: "Set answer",
		copyvaluetrigger: "Copy answer",
		skiptrigger: "Skip to question",
		runexpressiontrigger: "Run expression",
		visibletrigger: "change visibility (deprecated)",
	},
	peplaceholder: {
		patternmask: {
			pattern: "Ex.: +1(999)-999-99-99",
		},
		datetimemask: {
			pattern: "Ex.: mm/dd/yyyy",
		},
		currencymask: {
			prefix: "Ex.: $",
			suffix: "Ex.: USD",
		},
	},
	pehelp: {
		panel: {
			name: "A panel ID that is not visible to respondents.",
			description: "Type a panel subtitle.",
			// isRequired: "Prevents survey submission unless at least one nested question has an answer.",
			visibleIf:
				"Use the magic wand icon to set a conditional rule that determines panel visibility.",
			enableIf:
				"Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel.",
			requiredIf:
				"Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
			questionTitleLocation:
				'Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The "Inherit" option applies the page-level (if set) or survey-level setting ("Top" by default).',
			questionErrorLocation:
				'Sets the location of an error message in relation to all questions within the panel. The "Inherit" option applies the page-level (if set) or survey-level setting.',
			questionsOrder:
				'Keeps the original order of questions or randomizes them. The "Inherit" option applies the page-level (if set) or survey-level setting.',
			page: "Repositions the panel to the end of a selected page.",
			innerIndent:
				"Adds space or margin between the panel content and the left border of the panel box.",
			startWithNewLine:
				"Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form.",
			state:
				'Choose from: "Expanded" - the panel is displayed in full and can be collapsed; "Collapsed" - the panel displays only the title and description and can be expanded; "Locked" - the panel is displayed in full and cannot be collapsed.',
			width:
				"Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.).",
		},
		paneldynamic: {
			name: "A panel ID that is not visible to respondents.",
			description: "Type a panel subtitle.",
			// isRequired: "Prevents survey submission unless at least one nested question has an answer.",
			visibleIf:
				"Use the magic wand icon to set a conditional rule that determines panel visibility.",
			enableIf:
				"Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel.",
			requiredIf:
				"Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
			templateTitleLocation:
				'Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The "Inherit" option applies the page-level (if set) or survey-level setting ("Top" by default).',
			templateErrorLocation:
				'Sets the location of an error message in relation to a question with invalid input. Choose between: "Top" - an error text is placed at the top of the question box; "Bottom" - an error text is placed at the bottom of the question box. The "Inherit" option applies the page-level (if set) or survey-level setting ("Top" by default).',
			errorLocation:
				'Sets the location of an error message in relation to all questions within the panel. The "Inherit" option applies the page-level (if set) or survey-level setting.',
			// questionsOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting.",
			page: "Repositions the panel to the end of a selected page.",
			innerIndent:
				"Adds space or margin between the panel content and the left border of the panel box.",
			startWithNewLine:
				"Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form.",
			state:
				'Choose from: "Expanded" - the panel is displayed in full and can be collapsed; "Collapsed" - the panel displays only the title and description and can be expanded; "Locked" - the panel is displayed in full and cannot be collapsed.',
			width:
				"Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.).",
			templateTitle:
				"Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering.",
			templateTabTitle:
				"Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering.",
			templateVisibleIf:
				"This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression.",
			titleLocation:
				'This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The "Inherit" option applies the page-level (if set) or survey-level setting ("Top" by default).',
			descriptionLocation:
				'The "Inherit" option applies the page-level (if set) or survey-level setting ("Under the panel title" by default).',
			newPanelPosition:
				'Defines the position of a newly added panel. By default, new panels are added to the end. Select "Next" to insert a new panel after the current one.',
			defaultValueFromLastPanel:
				"Duplicates answers from the last panel and assigns them to the next added dynamic panel.",
			keyName:
				"Reference a question name to require a user to provide a unique response for this question in each panel.",
		},
		defaultValueExpression:
			"This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input.",
		resetValueIf:
			'Use the magic wand icon to set a conditional rule that determines when a respondent\'s input is reset to the value based on the "Default value expression" or "Set value expression" or to the "Default answer" value (if either is set).',
		setValueIf:
			'Use the magic wand icon to set a conditional rule that determines when to run the "Set value expression" and dynamically assign the resulting value as a response.',
		setValueExpression:
			'Specify an expression that defines the value to be set when the conditions in the "Set value if" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent\'s manual input.',
		question: {
			name: "A question ID that is not visible to respondents.",
			description: "Type a question subtitle.",
			visibleIf:
				"Use the magic wand icon to set a conditional rule that determines question visibility.",
			enableIf:
				"Use the magic wand icon to set a conditional rule that disables the read-only mode for the question.",
			requiredIf:
				"Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer.",
			startWithNewLine:
				"Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form.",
			page: "Repositions the question to the end of a selected page.",
			state:
				'Choose from: "Expanded" - the question box is displayed in full and can be collapsed; "Collapsed" - the question box displays only the title and description and can be expanded; "Locked" - the question box is displayed in full and cannot be collapsed.',
			titleLocation:
				'Overrides title alignment rules defined on a panel, page or survey level. The "Inherit" option applies any higher-level settings (if set) or survey-level setting ("Top" by default).',
			descriptionLocation:
				'The "Inherit" option applies the survey-level setting ("Under the question title" by default).',
			errorLocation:
				'Sets the location of an error message in relation to the question with invalid input. Choose between: "Top" - an error text is placed at the top of the question box; "Bottom" - an error text is placed at the bottom of the question box. The "Inherit" option applies the survey-level setting ("Top" by default).',
			indent:
				"Adds space or margin between the question content and the left border of the question box.",
			width:
				"Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.).",
			surveyvalidator: {
				expression:
					"Use the magic wand icon to set a validation rule for the question.",
			},
			textUpdateMode:
				'Choose from: "On lost focus" - the value is updated when the input field loses focus; "While typing" - the value is updated in real-time, as users are typing. The "Inherit" option applies the survey-level setting ("On lost focus" by default).',
			url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data.",
			searchMode: "A comparison operation used to filter the drop-down list.",
			textWrapEnabled:
				"Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip.",
		},
		signaturepad: {
			signatureWidth:
				"Sets the width of the displayed signature area and the resulting image.",
			signatureHeight:
				"Sets the height of the displayed signature area and the resulting image.",
			signatureAutoScaleEnabled:
				"Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions.",
		},
		file: {
			imageHeight: "Adjusts the height of the image in the survey results.",
			imageWidth: "Adjusts the width of the image in the survey results.",
		},
		image: {
			contentMode:
				'The "Auto" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided.',
		},
		imagepicker: {
			imageHeight: "Overrides the minimum and maximum height values.",
			imageWidth: "Overrides the minimum and maximum width values.",
			choices:
				'"Value" serves as an item ID used in conditional rules; "Text" is displayed to respondents.',
			contentMode:
				'Choose between "Image" and "Video" to set the content mode of the media selector. If "Image" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if "Video" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options.',
		},
		text: {
			size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>.",
		},
		comment: {
			rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear.",
		},
		survey: {
			mode: 'Choose between: "Editable" - enables respondents to fill out your survey; "Read-only" - disables form editing.',
		},
		matrixdropdowncolumn: {
			name: "A column ID that is not visible to respondents.",
			isUnique:
				"When enabled for a column, a respondent is required to provide a unique response for each question within this column.",
			rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear.",
			visibleIf:
				"Use the magic wand icon to set a conditional rule that determines column visibility.",
			enableIf:
				"Use the magic wand icon to set a conditional rule that disables the read-only mode for the column.",
			requiredIf:
				"Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
			showInMultipleColumns:
				"When selected, creates an individual column for each choice option.",
		},
		widthMode:
			'Choose from: "Static" - sets a fixed width; "Responsive" - makes the survey occupy the full width of the screen; "Auto" - applies either of the two depending on the question types used.',
		cookieName:
			"Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions.",
		logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB).",
		logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.).",
		logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.).",
		logoFit:
			'Choose from: "None" - image maintains its original size; "Contain" - image is resized to fit while maintaining its aspect ratio; "Cover" - image fills the entire box while maintaining its aspect ratio; "Fill" - image is stretched to fill the box without maintaining its aspect ratio.',
		goNextPageAutomatic:
			"Select if you want the survey to advance to the next page automatically after a respondent answers all questions on the current page.",
		allowCompleteSurveyAutomatic:
			"Select if you want the survey to complete automatically after a respondent answers all questions.",
		showNavigationButtons:
			"Sets the visibility and location of navigation buttons on a page.",
		showProgressBar:
			'Sets the visibility and location of a progress bar. The "Auto" value displays the progress bar above or below the survey header.',
		showPreviewBeforeComplete:
			"Enable the preview page with all or answered questions only.",
		questionTitleLocation:
			"Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level.",
		requiredText:
			"A symbol or a sequence of symbols indicating that an answer is required.",
		questionStartIndex:
			"Enter a number or letter with which you want to start numbering.",
		questionErrorLocation:
			'Sets the location of an error message in relation to the question with invalid input. Choose between: "Top" - an error text is placed at the top of the question box; "Bottom" - an error text is placed at the bottom of the question box.',
		focusFirstQuestionAutomatic:
			"Select if you want the first input field on each page ready for text entry.",
		questionsOrder:
			"Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab.",
		maxTextLength: "For text entry questions only.",
		maxOthersLength: "For question comments only.",
		autoGrowComment:
			"Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length.",
		allowResizeComment: "For question comments and Long Text questions only.",
		calculatedValues:
			"Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on.",
		includeIntoResult:
			"Select if you wish the calculated value of the expression to be saved along with survey results.",
		triggers:
			'A trigger is an event or condition that is based on an expression. Once the expression is evaluated to "true", a trigger sets off an action. Such an action can optionally have a target question it affects.',
		clearInvisibleValues:
			"Choose whether or not to clear values for questions hidden by conditional logic and when to do it.",
		textUpdateMode:
			'Choose from: "On lost focus" - the value is updated when the input field loses focus; "While typing" - the value is updated in real-time, as users are typing.',
		columns:
			"The left value serves as a column ID used in conditional rules, the right value is displayed to respondents.",
		rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents.",
		columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.).",
		rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.).",
		totalText:
			'Visible only if at least one column displays total values set with "Aggregation method" or "Total value expression".',
		cellErrorLocation:
			'Sets the location of an error message in relation to a cell with invalid input. The "Inherit" option applies the setting from the "Error message alignment" property.',
		keyDuplicationError:
			'When the "Prevent duplicate responses" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message.',
		totalExpression:
			"Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.).",
		confirmDelete: "Triggers a prompt asking to confirm the row deletion.",
		defaultValueFromLastRow:
			"Duplicates answers from the last row and assigns them to the next added dynamic row.",
		keyName:
			"Reference a column ID to require a user to provide a unique response for each question within the specified column.",
		description: "Type a subtitle.",
		locale:
			"Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab.",
		detailPanelMode:
			'Sets the location of a details section in relation to a row. Choose from: "None" - no expansion is added; "Under the row" - a row expansion is placed under each row of the matrix; "Under the row, display one row expansion only" - an expansion is displayed under a single row only, the remaining row expansions are collapsed.',
		imageFit:
			'Choose from: "None" - image maintains its original size; "Contain" - image is resized to fit while maintaining its aspect ratio; "Cover" - image fills the entire box while maintaining its aspect ratio; "Fill" - image is stretched to fill the box without maintaining its aspect ratio.',
		autoGrow:
			'Gradually increases the height of the input field as data is being entered. Overrides the "Input field height (in lines)" setting.',
		allowResize:
			"The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field.",
		maxTimeToFinish:
			"A time interval in seconds after which the survey auto-advances to the Thank You page.",
		maxTimeToFinishPage:
			"A time interval in seconds after which the survey auto-advances to the next page.",
		page: {
			maxTimeToFinish:
				"A time interval in seconds after which the survey auto-advances to the next page.",
			// isRequired: "Prevents survey submission unless at least one nested question has an answer.",
			visibleIf:
				"Use the magic wand icon to set a conditional rule that determines page visibility.",
			enableIf:
				"Use the magic wand icon to set a conditional rule that disables the read-only mode for the page.",
			requiredIf:
				"Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer.",
			questionTitleLocation:
				'Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The "Inherit" option applies the survey-level setting ("Top" by default).',
			questionErrorLocation:
				'Sets the location of an error message in relation to the question with invalid input. Choose between: "Top" - an error text is placed at the top of the question box; "Bottom" - an error text is placed at the bottom of the question box. The "Inherit" option applies the survey-level setting ("Top" by default).',
			questionsOrder:
				'Keeps the original order of questions or randomizes them. The "Inherit" option applies the survey-level setting ("Original" by default). The effect of this setting is only visible in the Preview tab.',
			navigationButtonsVisibility:
				'Sets the visibility of navigation buttons on the page. The "Inherit" option applies the survey-level setting, which defaults to "Visible".',
		},
		showTimerPanel: "Sets the visibility and location of a timer on a page.",
		panelsState:
			'Choose from: "Locked" - users cannot expand or collapse panels; "Collapse all" - all panels start in a collapsed state; "Expand all" - all panels start in an expanded state; "First expanded" - only the first panel is initially expanded.',

		imageLinkName:
			"Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list.",
		choices:
			"The left value serves as an item ID used in conditional rules, the right value is displayed to respondents.",
		title: "Type a user-friendly title to display.",
		waitForUpload:
			"Ensures that users won't complete the survey until files are uploaded.",
		minWidth: "Accepts CSS values (px, %, in, pt, etc.).",
		maxWidth: "Accepts CSS values (px, %, in, pt, etc.).",
		width: "Accepts CSS values (px, %, in, pt, etc.).",
		valueName:
			"A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name.",
		useDisplayValuesInDynamicTexts:
			"In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements.",
		clearIfInvisible:
			'Choose whether or not to clear question values hidden by conditional logic and when to do it. The "Inherit" option applies the survey-level setting ("Upon survey completion" by default).',
		choicesFromQuestionMode:
			'Choose from: "All" - copies all choice options from the selected question; "Selected" - dynamically copies only selected choice options; "Unselected" - dynamically copies only unselected choice options. The "None" and "Other" options are copied by default if enabled in the source question.',
		showOtherItem:
			"When selected, users can include additional input in a separate comment box.",
		separateSpecialChoices:
			'Displays each special choice option ("None", "Other", "Select All") on a new line, even when using a multiple-column layout.',
		path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array.",
		choicesbyurl: {
			valueName:
				"Enter a uniform property name within the array of objects whose value will be stored as a response in survey results.",
		},
		titleName:
			"Enter a uniform property name within the array of objects that contains the values you want to display in the choice list.",
		allowEmptyResponse:
			"Select to allow the service to return an empty response or array.",
		choicesVisibleIf:
			"Use the magic wand icon to set a conditional rule that determines the visibility of all choice options.",
		rateValues:
			"The left value serves as an item ID used in conditional rules, the right value is displayed to respondents.",
		rating: {
			displayMode:
				'"Auto" selects between the "Buttons" and "Dropdown" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown.',
		},
		valuePropertyName:
			"Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values.",
		searchEnabled:
			"Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field.",
		valueTrue:
			"A value to save in survey results when respondents give a positive answer.",
		valueFalse:
			"A value to save in survey results when respondents give a negative answer.",
		showPreview:
			"It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded.",
		needConfirmRemoveFile:
			"Triggers a prompt asking to confirm the file deletion.",
		selectToRankEnabled:
			"Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area.",
		dataList:
			"Enter a list of choices that will be suggested to the respondent during input.",
		itemSize:
			"The setting only resizes the input fields and doesn't affect the width of the question box.",
		itemTitleWidth: "Sets consistent width for all item labels in pixels",
		altText:
			"Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes.",
		rateColorMode:
			'Defines the color of the selected emoji when the Rating icon type is set to "Smileys". Choose between: "Default" - the selected emoji appears in default survey color; "Scale" - the selected emoji inherits color from the rating scale.',
		expression: {
			name: "An expression ID that is not visible to respondents.",
			description: "Type an expression subtitle.",
			expression:
				"An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.).",
		},
		storeOthersAsComment:
			'Select to store the "Other" option value as a separate property in survey results.',

		format: "Use {0} as a placeholder for the actual value.",
		acceptedTypes:
			"Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
		columnColCount:
			'Applies only if "Cell input type" is set to Radio Button Group or Checkboxes.',
		autocomplete:
			"Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion.",
		filePlaceholder:
			'Applies when "File source type" is "Local file" or when camera is unavailable',
		photoPlaceholder: 'Applies when "File source type" is "Camera".',
		fileOrPhotoPlaceholder:
			'Applies when "File source type" is "Local file or camera".',
		masksettings: {
			saveMaskedValue:
				"Select if you want to store the question value with an applied mask in survey results.",
		},
		patternmask: {
			pattern:
				"The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character.",
		},
		datetimemask: {
			pattern:
				"The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year.",
		},
		numericmask: {
			decimalSeparator:
				"A symbol used to separate the fractional part from the integer part of a displayed number.",
			thousandsSeparator:
				"A symbol used to separate the digits of a large number into groups of three.",
			precision:
				"Limits how many digits to retain after the decimal point for a displayed number.",
		},
		currencymask: {
			prefix: "One or several symbols to be displayed before the value.",
			suffix: "One or several symbols to be displayed after the value.",
		},
	},
	// Properties
	p: {
		title: {
			name: "title",
			title: "Leave it empty, if it is the same as 'Name'",
		},
		multiSelect: "Allow multiple selection",
		showLabel: "Show image and video captions",
		swapOrder: "Swap the order of Yes and No",
		value: "Value",
		tabAlign: "Tab alignment",
		sourceType: "File source type",
		fitToContainer: "Fit to container",
		setValueExpression: "Set value expression",
		description: "Description", // Auto-generated string
		logoFit: "Logo fit",
		pages: "Pages", // Auto-generated string
		questions: "Questions", // Auto-generated string
		triggers: "Triggers",
		calculatedValues: "Custom variables",
		surveyId: "Survey id", // Auto-generated string
		surveyPostId: "Survey post id", // Auto-generated string
		surveyShowDataSaving: "Survey show data saving", // Auto-generated string
		questionDescriptionLocation: "Question description alignment",
		progressBarType: "Progress bar type", // Auto-generated string
		showTOC: "Show table of contents (TOC)",
		tocLocation: "TOC alignment",
		questionTitlePattern: "Question title pattern", // Auto-generated string
		widthMode: "Survey width mode",
		showBrandInfo: "Show brand info", // Auto-generated string
		useDisplayValuesInDynamicTexts: "Use display values in dynamic texts",
		visibleIf: "Visible if", // Auto-generated string
		defaultValueExpression: "Default value expression",
		requiredIf: "Required if", // Auto-generated string
		resetValueIf: "Reset value if",
		setValueIf: "Set value if",
		validators: "Validation rules",
		bindings: "Bindings", // Auto-generated string
		renderAs: "Render as", // Auto-generated string
		attachOriginalItems: "Attach original items", // Auto-generated string
		choices: "Choices",
		choicesByUrl: "Choices by url", // Auto-generated string
		currency: "Currency", // Auto-generated string
		cellHint: "Cell hint", // Auto-generated string
		totalMaximumFractionDigits: "Total maximum fraction digits", // Auto-generated string
		totalMinimumFractionDigits: "Total minimum fraction digits", // Auto-generated string
		columns: "Columns", // Auto-generated string
		detailElements: "Detail elements", // Auto-generated string
		allowAdaptiveActions: "Allow adaptive actions", // Auto-generated string
		defaultRowValue: "Default row value", // Auto-generated string
		detailPanelShowOnAdding: "Detail panel show on adding", // Auto-generated string
		choicesLazyLoadEnabled: "Choices lazy load enabled", // Auto-generated string
		choicesLazyLoadPageSize: "Choices lazy load page size", // Auto-generated string
		inputFieldComponent: "Input field component", // Auto-generated string
		itemComponent: "Item component", // Auto-generated string
		min: "Min", // Auto-generated string
		max: "Max", // Auto-generated string
		minValueExpression: "Min value expression", // Auto-generated string
		maxValueExpression: "Max value expression", // Auto-generated string
		step: "Step", // Auto-generated string
		dataList: "Items for auto-suggest",
		itemSize: "Input field width (in characters)",
		itemTitleWidth: "Item label width (in px)",
		elements: "Elements", // Auto-generated string
		content: "Content", // Auto-generated string
		navigationButtonsVisibility: "Show / hide navigation buttons",
		navigationTitle: "Navigation title", // Auto-generated string
		navigationDescription: "Navigation description", // Auto-generated string
		longTap: "Long tap", // Auto-generated string
		autoGrow: "Expand input field dynamically",
		allowResize: "Enable resize handle",
		acceptCarriageReturn: "Accept carriage return", // Auto-generated string
		displayMode: "Display mode",
		rateType: "Rate type", // Auto-generated string
		label: "Label", // Auto-generated string
		contentMode: "Content mode",
		imageFit: "Image and thumbnail fit",
		altText: "Alt text",
		height: "Height", // Auto-generated string
		penColor: "Pen color", // Auto-generated string
		backgroundColor: "Background color",
		templateElements: "Template elements", // Auto-generated string
		operator: "Operator", // Auto-generated string
		isVariable: "Is variable", // Auto-generated string
		runExpression: "Run expression", // Auto-generated string
		showCaption: "Show caption", // Auto-generated string
		iconName: "Icon name", // Auto-generated string
		iconSize: "Icon size", // Auto-generated string
		precision: "Precision", // Auto-generated string
		matrixDragHandleArea: "Matrix drag handle area", // Auto-generated string
		backgroundImage: "Background image",
		backgroundImageFit: "Background image fit", // Auto-generated string
		backgroundImageAttachment: "Background image attachment", // Auto-generated string
		backgroundOpacity: "Background opacity", // Auto-generated string
		selectToRankEnabled: "Allow selective ranking",
		selectToRankAreasLayout: "Ranking area alignment",
		selectToRankEmptyRankedAreaText: "Text to show if all options are selected",
		selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area",
		allowCameraAccess: "Allow camera access", // Auto-generated string
		scaleColorMode: "Rating icon color mode",
		rateColorMode: "Smileys color scheme",
		copyDisplayValue: "Copy display value", // Auto-generated string
	},
	theme: {
		"--background": "Background color",
		"--background-dim-light": "Background dim light color",
		"--primary-foreground": "Primary foreground color",
		"--foreground": "Foreground color",
		"--base-unit": "Base unit",
		advancedMode: "Advanced mode",
		groupGeneral: "General",
		groupHeader: "Header",
		groupBackground: "Background",
		groupAppearance: "Appearance",
		themeName: "Theme",
		themeMode: "Question appearance",
		themeModePanels: "Default",
		themeModeLightweight: "Without Panels",
		themePaletteLight: "Light",
		themePaletteDark: "Dark",
		primaryColor: "Accent color",
		primaryDefaultColor: "Default",
		primaryDarkColor: "Hover",
		primaryLightColor: "Selected",
		coverTitleForecolor: "Title forecolor",
		coverDescriptionForecolor: "Description forecolor",
		coverOverlapEnabled: "Overlap",
		backgroundDimColor: "Background color",
		backgroundImage: "Background image", // Auto-generated string
		backgroundImageFitAuto: "Auto",
		backgroundImageFitCover: "Cover",
		backgroundImageFitContain: "Contain",
		backgroundImageFitFill: "Stretch",
		backgroundImageFitTile: "Tile",
		backgroundOpacity: "Opacity", // Auto-generated string
		backgroundImageAttachmentFixed: "Fixed",
		backgroundImageAttachmentScroll: "Scroll",
		panelBackgroundTransparency: "Panel background opacity",
		questionBackgroundTransparency: "Question background opacity",
		questionTitle: "Question box",
		editorPanel: "Input element",
		backgroundCornerRadius: "Background and corner radius",
		backcolor: "Default background",
		hovercolor: "Hover background",
		borderDecoration: "Border decoration",
		accentBackground: "Accent background",
		accentForeground: "Accent foreground",
		primaryForecolor: "Default color",
		primaryForecolorLight: "Disabled color",
		colorsTitle: "Colors",
		font: "Font",
		lines: "Lines",
		borderDefault: "Darker",
		borderLight: "Lighter",
		fontFamily: "Font family",
		fontSize: "Font size",
		color: "Color",
		placeholderColor: "Placeholder color",
		size: "Size",
		fontWeightRegular: "Regular",
		fontWeightHeavy: "Heavy",
		fontWeightSemiBold: "Semi-bold",
		fontWeightBold: "Bold",
		scale: "Scale",
		cornerRadius: "Corner radius",
		surveyTitle: "Survey title font",
		surveyDescription: "Survey description font",
		pageTitle: "Page",
		titleFont: "Title font",
		descriptionFont: "Description font",
		boxShadowX: "X",
		boxShadowY: "Y",
		boxShadowAddRule: "Add Shadow Effect",
		opacity: "Opacity",
		boxShadowBlur: "Blur",
		boxShadowSpread: "Spread",
		boxShadowDrop: "Drop",
		boxShadowInner: "Inner",
		shadow: "Shadow effects",
		headerView: "View",
		headerViewBasic: "Basic",
		headerViewAdvanced: "Advanced",
		coverInheritWidthFrom: "Content area width",
		coverInheritWidthFromSurvey: "Same as survey",
		coverInheritWidthFromContainer: "Fit to container",
		coverTextAreaWidth: "Text width",
		coverBackgroundColorSwitch: "Background color",
		coverBackgroundColorNone: "None",
		coverBackgroundColorAccentColor: "Accent color",
		coverBackgroundColorCustom: "Custom",
		horizontalAlignmentLeft: "Left",
		horizontalAlignmentCenter: "Center",
		horizontalAlignmentRight: "Right",
		verticalAlignmentTop: "Top",
		verticalAlignmentMiddle: "Middle",
		verticalAlignmentBottom: "Bottom",
		logoPosition: "Logo position",
		coverTitlePosition: "Title position",
		coverDescriptionPosition: "Description position",
		names: {
			default: "Default",
			sharp: "Sharp",
			borderless: "Borderless",
			flat: "Flat",
			plain: "Plain",
			doubleborder: "Double Border",
			layered: "Layered",
			solid: "Solid",
			threedimensional: "3D",
			contrast: "Contrast",
		},
		colors: {
			teal: "Teal",
			blue: "Blue",
			purple: "Purple",
			orchid: "Orchid",
			tulip: "Tulip",
			brown: "Brown",
			green: "Green",
		},
	},
};

editorLocalization.locales["en"] = enStrings;