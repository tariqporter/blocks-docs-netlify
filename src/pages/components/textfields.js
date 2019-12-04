import React from "react"

import Layout from "../../components/layout"
import Header from "../../components/header"
import ExampleSection from "../../components/examples"
import Snippet from "../../components/snippet"

import TextFieldBasicExample from "../../code_examples/TextFieldBasicExample"
import TextFieldHelperTextExample from "../../code_examples/TextFieldHelperTextExample"
import TextFieldValidationExample from "../../code_examples/TextFieldValidationExample"
import TextFieldTooltipExample from "../../code_examples/TextFieldTooltipExample"
import TextFieldDisabledExample from "../../code_examples/TextFieldDisabledExample"
import TextFieldPrefixSuffixExample from "../../code_examples/TextFieldPrefixSuffixExample"
import TextFieldDateExample from "../../code_examples/TextFieldDateExample"
import TextFieldDropdownExample from "../../code_examples/TextFieldDropdownExample"
import TextAreaExample from "../../code_examples/TextAreaExample"
import TextFieldMaxLengthExample from "../../code_examples/TextFieldMaxLengthExample"


const TextFieldsPage = () => (
  <Layout>
    <Header
      title="Text Fields"
    >
      An input for freeform data entry. It supports a number of input types: simple text, numbers,  email addresses, and more.
    </Header>
    <ExampleSection>
      <h5 className="blx-with-margin">Default</h5>
      <Snippet
        name="TextFieldBasicExample"
        example={<TextFieldBasicExample />}
      />

      <h5 className="blx-with-margin">Helper Text</h5>
      <Snippet
        name="TextFieldHelperTextExample"
        example={<TextFieldHelperTextExample />}
      />

      <h5 className="blx-with-margin">Validation</h5>
      <Snippet
        name="TextFieldValidationExample"
        example={<TextFieldValidationExample />}
      />

      <h5 className="blx-with-margin">Label with tooltip</h5>
      <Snippet
        name="TextFieldTooltipExample"
        example={<TextFieldTooltipExample />}
      />

      <h5 className="blx-with-margin">Disabled, with icon</h5>
      <Snippet
        name="TextFieldDisabledExample"
        example={<TextFieldDisabledExample />}
      />

      <h5 className="blx-with-margin">Prefix/suffix</h5>
      <Snippet
        name="TextFieldPrefixSuffixExample"
        example={<TextFieldPrefixSuffixExample />}
      />

      <h5 className="blx-with-margin">Date/time picker</h5>
      <Snippet
        name="TextFieldDateExample"
        example={<TextFieldDateExample />}
      />

      <h5 className="blx-with-margin">Connected fields</h5>
      <Snippet
        name="TextFieldDropdownExample"
        example={<TextFieldDropdownExample />}
      />

      <h5 className="blx-with-margin">Multi-line overflow</h5>
      <Snippet
        name="TextAreaExample"
        example={<TextAreaExample />}
      />

      <h5 className="blx-with-margin">Max Length</h5>
      <Snippet
        name="TextFieldMaxLengthExample"
        example={<TextFieldMaxLengthExample />}
      />
    </ExampleSection>
  </Layout>
);

export default TextFieldsPage;
