var utg = {
"nodes": [{'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.NarrativeBrowserActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.NarrativeBrowserActivity.png', 'label': 'NarrativeBrowserActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.TextActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.TextActivity.png', 'label': 'TextActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.PlaybackActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.PlaybackActivity.png', 'label': 'PlaybackActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.FrameEditorActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.FrameEditorActivity.png', 'label': 'FrameEditorActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.CameraActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.CameraActivity.png', 'label': 'CameraActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.AudioActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.AudioActivity.png', 'label': 'AudioActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.ui.ExecutionDisplayActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.ui.ExecutionDisplayActivity.png', 'label': 'ExecutionDisplayActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.TemplateBrowserActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.TemplateBrowserActivity.png', 'label': 'TemplateBrowserActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.MediaPhoneActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.MediaPhoneActivity.png', 'label': 'MediaPhoneActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.SaveNarrativeActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.SaveNarrativeActivity.png', 'label': 'SaveNarrativeActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediaphone.activity.PreferencesActivity', 'image': 'static/screenshots/ac.robinson.mediaphone.activity.PreferencesActivity.png', 'label': 'PreferencesActivity'}, {'shape': 'image', 'id': 'ac.robinson.mediautilities.SelectDirectoryActivity', 'image': 'static/screenshots/ac.robinson.mediautilities.SelectDirectoryActivity.png', 'label': 'SelectDirectoryActivity'}],
"edges": [{'to': 'ac.robinson.mediaphone.activity.NarrativeBrowserActivity', 'from': 'null'}, {'to': 'ac.robinson.mediaphone.activity.TextActivity', 'from': 'ac.robinson.mediaphone.activity.TextActivity'}, {'to': 'ac.robinson.mediaphone.activity.FrameEditorActivity', 'from': 'ac.robinson.mediaphone.activity.PlaybackActivity'}, {'to': 'ac.robinson.mediaphone.activity.CameraActivity', 'from': 'ac.robinson.mediaphone.activity.FrameEditorActivity'}, {'to': 'ac.robinson.mediaphone.activity.TextActivity', 'from': 'ac.robinson.mediaphone.activity.FrameEditorActivity'}, {'to': 'ac.robinson.mediaphone.activity.AudioActivity', 'from': 'ac.robinson.mediaphone.activity.FrameEditorActivity'}, {'to': 'ac.robinson.mediaphone.activity.PlaybackActivity', 'from': 'ac.robinson.mediaphone.activity.FrameEditorActivity'}, {'to': 'ac.robinson.mediaphone.activity.FrameEditorActivity', 'from': 'ac.robinson.mediaphone.activity.FrameEditorActivity'}, {'to': 'ac.robinson.mediaphone.ui.ExecutionDisplayActivity', 'from': 'ac.robinson.mediaphone.activity.NarrativeBrowserActivity'}, {'to': 'ac.robinson.mediaphone.activity.PlaybackActivity', 'from': 'ac.robinson.mediaphone.activity.NarrativeBrowserActivity'}, {'to': 'ac.robinson.mediaphone.activity.TemplateBrowserActivity', 'from': 'ac.robinson.mediaphone.activity.NarrativeBrowserActivity'}, {'to': 'ac.robinson.mediaphone.activity.FrameEditorActivity', 'from': 'ac.robinson.mediaphone.activity.NarrativeBrowserActivity'}, {'to': 'ac.robinson.mediaphone.activity.AudioActivity', 'from': 'ac.robinson.mediaphone.activity.AudioActivity'}, {'to': 'ac.robinson.mediaphone.activity.NarrativeBrowserActivity', 'from': 'ac.robinson.mediaphone.MediaPhoneActivity'}, {'to': 'ac.robinson.mediaphone.activity.SaveNarrativeActivity', 'from': 'ac.robinson.mediaphone.MediaPhoneActivity'}, {'to': 'ac.robinson.mediaphone.activity.PreferencesActivity', 'from': 'ac.robinson.mediaphone.MediaPhoneActivity'}, {'to': 'ac.robinson.mediaphone.activity.FrameEditorActivity', 'from': 'ac.robinson.mediaphone.MediaPhoneActivity'}, {'to': 'ac.robinson.mediaphone.activity.CameraActivity', 'from': 'ac.robinson.mediaphone.activity.CameraActivity'}, {'to': 'ac.robinson.mediautilities.SelectDirectoryActivity', 'from': 'ac.robinson.mediaphone.activity.PreferencesActivity'}]
}