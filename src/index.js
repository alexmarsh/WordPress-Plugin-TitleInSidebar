// IMPORT WP FUNCTIONS
import { registerPlugin } from "@wordpress/plugins";
import { PluginDocumentSettingPanel } from "@wordpress/edit-post";

const TitleDocumentSettingPanel = () => {
    return (
        <PluginDocumentSettingPanel
            name="page-title-panel"
            title="Page Title"
            className="page-title-panel"
        >
            Custom contents
        </PluginDocumentSettingPanel>
    )
};

registerPlugin( 'title-in-sidebar', {
    icon: '',
    render: TitleDocumentSettingPanel,
})