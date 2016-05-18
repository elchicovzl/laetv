function getSeo() {
    var seo = {
        title: 'Laetv',
        meta: [{
            title: 'title',
            content: 'Laetv'
        }, {
            title: 'description',
            content: 'This website is used to bring happiness to the world.'
        }
        ]
    };
    return seo;
}

export {
    getSeo
}

//List of SEO
//title #{seo.PageTitle}
//meta(name='title', content='#{seo.PageTitle}')
//meta(name='description', content='#{seo.Description}')
//meta(name='keywords', content='#{seo.Keywords}')
//meta(name='author', content='#{seo.Author}')
//meta(property='og:type', content='website')
//meta(property='og:site_name', content='#{seo.SiteName}')
//meta(property='og:url', content='#{seo.Url}')
//meta(property='og:title', content='#{seo.Title}')
//meta(property='og:description', content='#{seo.Description}')
//meta(property='og:image', content='#{seo.Image}')
//meta(property='twitter:card', content='Summary')
//meta(property='twitter:url', content='#{seo.Url}')
//meta(property='twitter:title', content='#{seo.Title}')
//meta(property='twitter:description', content='#{seo.Description}')
//meta(property='twitter:image:src', content='#{seo.Image}')