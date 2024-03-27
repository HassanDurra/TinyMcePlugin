function tinyMCE(varName){
    tinymce.init({
        selector: '#'+varName,
        height: 350,
        plugins: [
            'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
            'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
            'media', 'table', 'emoticons', 'template', 'help'
        ],
        toolbar: 'undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | blockquote | link unlink | image media | table | removeformat | code | fullscreen | help | fontselect | fontsizeselect | styleselect | subscript superscript | hr | charmap | visualblocks | visualchars | spellchecker | insertdatetime | print | preview | searchreplace | template | anchor | pagebreak | nonbreaking | advlist | mediaembed | codesample | advcode | formatpainter | toc | a11ychecker | directionality | inserttable',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        menu: {
            file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
            edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
            view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
            insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
            format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
            tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
            table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
            help: { title: 'Help', items: 'help' }
        },
        mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
        ],
        referrer_policy: 'origin',
        images_upload_url: '<?php echo cms_slug?>tinyMCE.php',
        images_upload_base_path: '<?php echo index_url?>',
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
        image_caption: true
    });

}
function txtConvert(varName) {
        let test   = document.getElementById(varName);
        let editor = tinymce.get(varName);
        if (editor) {
            let content = editor.getContent();
           return test.innerText = content;
        } else {
            console.error('TinyMCE editor instance not found.');
        }
    }
