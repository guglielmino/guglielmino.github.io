(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6MZL":function(e,t,a){},EDuE:function(e,t,a){},FRpb:function(e,t,a){"use strict";var n=a("uO+i"),r=a("q1tI"),l=a.n(r),i=a("Wbzz"),c=(a("HDCr"),a("zkvs")),o=a.n(c),s=function(e){var t=e.author,a=e.tagline;return l.a.createElement("div",{className:"bio-main w-75"},l.a.createElement("img",{src:o.a,style:{maxWidth:"100px"},className:"profile-img",alt:""}),l.a.createElement("h3",{className:"mt-2 author-bio"},t),l.a.createElement("small",{className:"text-muted"},a))},m=a("ma3e"),d=function(e){var t=e.contacts;return l.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},l.a.createElement("a",{className:"text-secondary p-2",href:t.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(m.FaLinkedin,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(m.FaGithubSquare,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(m.FaTwitterSquare,{size:26,style:{color:"secondary"}}))))},u=(a("pJf4"),a("gu/5"),a("eoYm"),a("o+pQ")),p=function(e){var t=e.labels,a=e.posts,n=t.map((function(e){var t=0;return a.forEach((function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)})),[e.tag,t]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Tech Topics"),l.a.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,n){t.forEach((function(t){e===t.tag&&a.push(l.a.createElement(u.a,{key:n,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))}))})),a}(n)))};t.a=function(){return l.a.createElement(i.StaticQuery,{query:"790532757",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sidebar-main border-right"},l.a.createElement(s,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),l.a.createElement(d,{contacts:e.site.siteMetadata.contacts}),l.a.createElement("div",{className:"page-links"},l.a.createElement(i.Link,{to:"/"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),l.a.createElement(i.Link,{to:"/about"},l.a.createElement("span",{className:"text-dark d-block py-1"},"About")),l.a.createElement(i.Link,{to:"/archive"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),l.a.createElement("div",{className:"tech-tags mt-4"},l.a.createElement(p,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))},data:n})}},HDCr:function(e,t,a){},nRki:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));a("pJf4");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=(a("+eM2"),a("EDuE"),a("Bl7J")),c=a("vrFN"),o=a("FRpb"),s=a("o+pQ"),m="97121327";t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=t.site.siteMetadata.labels;return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Archive",keywords:["gatsby","javascript","react","web development","blog","graphql"]}),r.a.createElement("div",{className:"index-main"},r.a.createElement("div",{className:"sidebar px-4 py-2"},r.a.createElement(o.a,null)),r.a.createElement("div",{className:"post-list-main"},r.a.createElement("h2",{className:"heading mt-3"},"All Posts"),a.map((function(e){var t=e.node.frontmatter.tags;return r.a.createElement("div",{key:e.node.id,className:"container mt-5"},r.a.createElement(l.Link,{to:e.node.fields.slug,className:"text-dark"},r.a.createElement("h2",{className:"title"},e.node.frontmatter.title)),r.a.createElement("small",{className:"d-block text-info"},r.a.createElement("i",null,"Posted on ",e.node.frontmatter.date)),r.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),r.a.createElement(l.Link,{to:e.node.fields.slug,className:"text-primary"},r.a.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),r.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,a){n.forEach((function(n){e===n.tag&&t.push(r.a.createElement(s.a,{key:a,tag:n.tag,tech:n.tech,name:n.name,size:n.size,color:n.color}))}))})),t}(t)))})))))}},"o+pQ":function(e,t,a){"use strict";a("pJf4");var n=a("q1tI"),r=a.n(n),l=a("ma3e"),i=a("R77S"),c=(a("6MZL"),a("Wbzz"));t.a=function(e){var t=e.tag,a=e.tech,n=e.name,o=e.size,s=e.color,m=/^Fa/.test(n)?r.a.createElement(l[n]):r.a.createElement(i[n]);return r.a.createElement("div",{className:"d-inline-block p-1"},r.a.createElement(c.Link,{to:"/tags/"+t+"/"},r.a.createElement("button",{className:"tech-tag text-white"},r.a.createElement("p",{className:"d-inline"},a," "),r.a.createElement("div",{className:"d-inline",style:{fontSize:o,color:s}},m))))}},"uO+i":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gumino.com","tagline":"Gumino.com - it\'s all about software","author":"Fabrizio Guglielmino","contacts":{"linkedin":"https://www.linkedin.com/in/guglielmino/","github":"https://github.com/guglielmino","twitter":"https://twitter.com/gumino_one"},"labels":[{"tag":"raspberrypi","tech":"Raspberry Pi","name":"DiRasberryPi","size":20,"color":"orange"},{"tag":"React","tech":"React","name":"DiReact","size":20,"color":"deepskyblue"},{"tag":"nodejs","tech":"Node.js","name":"DiNodejsSmall","size":20,"color":"lightgreen"},{"tag":"git","tech":"Git","name":"DiGitMerge","size":20,"color":"white"},{"tag":"javascript","tech":"JavaScript","name":"DiJsBadge","size":20,"color":"yellow"},{"tag":"css","tech":"CSS","name":"DiCss3Full","size":20,"color":"teal"},{"tag":"python","tech":"Python","name":"DiPython","size":20,"color":"deepskyblue"},{"tag":"ruby","tech":"Ruby","name":"DiRuby","size":20,"color":"crimson"},{"tag":"java","tech":"Java","name":"FaJava","size":20,"color":"wheat"},{"tag":"angular","tech":"Angular","name":"DiAngularSimple","size":20,"color":"red"},{"tag":"html","tech":"HTML","name":"FaHtml5","size":20,"color":"darkorange"},{"tag":"php","tech":"php","name":"DiPhp","size":20,"color":"violet"},{"tag":"mongodb","tech":"MongoDB","name":"DiMongodb","size":20,"color":"green"},{"tag":"vscode","tech":"VS Code","name":"DiVisualstudio","size":20,"color":"deepskyblue"},{"tag":"linux","tech":"Linux","name":"DiLinux","size":20,"color":"deepskyblue"},{"tag":"apple","tech":"Apple","name":"DiApple","size":20,"color":"white"},{"tag":"swift","tech":"Swift","name":"DiSwift","size":20,"color":"white"},{"tag":"android","tech":"Android","name":"DiAndroid","size":20,"color":"white"}]}},"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"tags":["swift","apple"]}}},{"node":{"frontmatter":{"tags":["apple","swift"]}}},{"node":{"frontmatter":{"tags":["linux","python"]}}},{"node":{"frontmatter":{"tags":["apple","android"]}}},{"node":{"frontmatter":{"tags":["python"]}}},{"node":{"frontmatter":{"tags":["raspberrypi","python"]}}},{"node":{"frontmatter":{"tags":["linux"]}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-archive-js-4100bb001b5ccdfe76d9.js.map