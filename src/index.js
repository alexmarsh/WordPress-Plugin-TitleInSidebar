// IMPORT WP FUNCTIONS
import { registerPlugin } from "@wordpress/plugins";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { TextControl } from "@wordpress/components";
import { withSelect, withDispatch, dispatch, select } from "@wordpress/data";
import { __ } from "@wordpress/i18n";


// define new component wrapper for a document settings panel
const TitleDocumentSettingPanel = () => {
    return (
        <PluginDocumentSettingPanel
            name="page-title-panel"
            title={__('Page Title', 'textdomain')}
            className="page-title-panel"
            intialOpen={ true }
        >
            <TextController/>
        </PluginDocumentSettingPanel>
    )
};

// custom text controller component using WordPress TextControl component
let TextController = (props) => (
    <TextControl
        label = {__("Title", 'textdomain')}
        value = {props.title}
        onChange = {(value) => props.onFieldChange(value)}
    />
);

// update component whenever a prop is changed
TextController = withSelect(
    (select) => {
        return {
            title: select('core/editor').getEditedPostAttribute('title')
        }
    }
)(TextController);

// dispatch the editPost action whenever we type into the text field
TextController = withDispatch(
    (dispatch) => {
        return {
            onFieldChange: (value) => {
                dispatch('core/editor').editPost({ title: value })
            }
        }
    }
)(TextController);

// REGISTER NEW PLUGIN
registerPlugin( 'title-in-sidebar', {
    icon: '',
    render: TitleDocumentSettingPanel,
});