// IMPORT WP FUNCTIONS
import { registerPlugin } from "@wordpress/plugins";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";
import { TextControl } from "@wordpress/components";
import { withSelect, withDispatch, dispatch, select } from "@wordpress/data";
import { __ } from "@wordpress/i18n";

let TextController = props => (
    <TextControl
        label={__("Title", 'textdomain')}
        value={select('core/editor').getEditedPostAttribute('title')}
        onChange={ (value) => setAttributes({ title: value }) }
    />
);

TextController = withSelect(
    select => ({
        title: select('core/editor').getEditedPostAttribute('title')
    })
)(TextController);

TextController = withDispatch(
    (dispatch) => {
        return {
            onMetaFieldChange: (value) => {
                dispatch('core/editor').editPost({ title: value })
            }
        }
    }
)(TextController);

const TitleDocumentSettingPanel = () => {
    /*
    // Check if a value has been set
    // This is for editing a post, because you don't want to override it everytime
    if (!select('core/editor').getEditedPostAttribute('title')) {
        // Set initial value
        dispatch('core/editor').editPost({ meta: { _myprefix_text_metafield: 'Your custom value' } });
    }
    */
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

registerPlugin( 'title-in-sidebar', {
    icon: '',
    render: TitleDocumentSettingPanel,
})