(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return f}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("6Gk8"),o=a("Bl7J"),c=a("vrFN"),m=a("9eSz"),s=a.n(m),u=function(t){var e=t.title,a=t.subtitle,n=t.thumbnail,i=t.link,o=t.tag,c=n.childImageSharp.fluid;return l.a.createElement("div",{className:"postthumb-container",onClick:function(){return Object(r.navigate)(i)}},l.a.createElement(s.a,{fluid:c}),l.a.createElement("p",{className:"post-tag"},"#",o),l.a.createElement("p",{className:"postthumb-title"},e),l.a.createElement("p",{className:"postthumb-subtitle"},a))},p=function(t){var e=t.title,a=t.subtitle,n=t.thumbnail,i=t.link,o=t.tag,c=n.childImageSharp.fluid;return l.a.createElement("div",{className:"pinnedpost-container",onClick:function(){return Object(r.navigate)(i)}},l.a.createElement(s.a,{fluid:c}),l.a.createElement("p",{className:"post-tag"},"#",o),l.a.createElement("p",{className:"postthumb-title"},e),l.a.createElement("p",{className:"postthumb-subtitle"},a))},f=(e.default=function(t){var e,a=t.data,n=t.location,r=(null===(e=a.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?l.a.createElement(o.a,{location:n,title:r},l.a.createElement(c.a,{title:"Blog"}),l.a.createElement(i.a,null),l.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.a.createElement(o.a,{location:n,title:r},l.a.createElement(c.a,{title:"Blog"}),m.map((function(t){return t.frontmatter.pin?l.a.createElement(p,{title:t.frontmatter.title,subtitle:t.frontmatter.description,thumbnail:t.frontmatter.thumbnail,link:t.fields.slug,tag:t.frontmatter.tag}):l.a.createElement(l.a.Fragment,null)})),l.a.createElement("h5",null,"Recent Posts"),l.a.createElement("ol",{className:"postthumb-wrapper-ol"},m.map((function(t){return t.frontmatter.pin?l.a.createElement(l.a.Fragment,null):l.a.createElement("li",null,l.a.createElement(u,{title:t.frontmatter.title,subtitle:t.frontmatter.description,thumbnail:t.frontmatter.thumbnail,link:t.fields.slug,tag:t.frontmatter.tag}))}))))},"1311934315")}}]);
//# sourceMappingURL=component---src-pages-index-js-aa23de4195cd83c4d0f6.js.map