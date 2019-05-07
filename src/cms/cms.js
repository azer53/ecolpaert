import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/blogPostPreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)