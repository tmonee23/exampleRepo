FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150,
    imagePreviewMinHeight: 100,
    imagePreviewMaxHeight: 200,
    stylePanelAspectRatio: 100 /150,
    imageResizeMode: "cover",
    imagePreviewUpscale: true
})

FilePond.parse(document.body);