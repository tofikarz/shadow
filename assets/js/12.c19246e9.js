(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{182:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Shadow allows for customizing the process by which the output JAR is generated through the\n"),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/Transformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Transformer")]),a("OutboundLink")],1),t._v(" interface.\nThis is a concept that has been carried over from the original Maven Shade implementation.\nA "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/Transformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Transformer")]),a("OutboundLink")],1),t._v(" is invoked for each\nentry in the JAR before being written to the final output JAR.\nThis allows a "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/Transformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Transformer")]),a("OutboundLink")],1),t._v(" to\ndetermine if it should process a particular entry and apply any modifications before writing the stream to the output.")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Multiple dependencies may use the same service descriptor file name.\nIn this case, it is generally desired to merge the content of each instance of the file into a single output file.\nThe "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ServiceFileTransformer")]),a("OutboundLink")],1),t._v("\nclass is used to perform this merging. By default, it will merge each copy of a file under "),a("code",[t._v("META-INF/services")]),t._v(" into a\nsingle file in the output JAR.")]),t._v(" "),t._m(8),a("p",[t._v("The above code snippet is a convenience syntax for calling\n"),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html#transform(Class%3C?%20extends%20Transformer%3E)",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("transform(ServiceFileTransformer.class)")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("Groovy Extension Module descriptor files (located at "),a("code",[t._v("META-INF/services/org.codehaus.groovy.runtime.ExtensionModule")]),t._v(")\nare ignored by the "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ServiceFileTransformer")]),a("OutboundLink")],1),t._v(".\nThis is due to these files having a different syntax than standard service descriptor files.\nUse the "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html#mergeGroovyExtensionModules()",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("mergeGroovyExtensionModules()")]),a("OutboundLink")],1),t._v(" method to merge\nthese files if your dependencies contain them.")])]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("By default the "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ServiceFileTransformer")]),a("OutboundLink")],1),t._v("\nis configured to merge files in "),a("code",[t._v("META-INF/services")]),t._v(".\nThis directory can be overridden to merge descriptor files in a different location.")]),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ServiceFileTransformer")]),a("OutboundLink")],1),t._v("\nclass supports specifying specific files to include or exclude from merging.")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("Shadow provides a specific transformer for dealing with Groovy extension module files.\nThis is due to their special syntax and how they need to be merged together.\nThe "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/GroovyExtensionModuleTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("GroovyExtensionModuleTransformer")]),a("OutboundLink")],1),t._v("\nwill handle these files.\nThe "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ShadowJar")]),a("OutboundLink")],1),t._v(" task also provides a short syntax\nmethod to add this transformer.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Generic text files can be appended together using the\n"),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/AppendingTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("AppendingTransformer")]),a("OutboundLink")],1),t._v(".\nEach file is appended using new lines to separate content.\nThe "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ShadowJar")]),a("OutboundLink")],1),t._v(" task provides a short syntax\nmethod of\n"),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html#append(java.lang.String)",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("append(String)")]),a("OutboundLink")],1),t._v(" to\nconfigure this transformer.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("XML files require a special transformer for merging.\nThe "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/XmlAppendingTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("XmlAppendingTransformer")]),a("OutboundLink")],1),t._v("\nreads each XML document and merges each root element into a single document.\nThere is no short syntax method for the "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/XmlAppendingTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("XmlAppendingTransformer")]),a("OutboundLink")],1),t._v(".\nIt must be added using the "),a("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow//tasks/ShadowJar.html#transform(Class%3C?%20Fextends%20Transformer%3E)",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("transform")]),a("OutboundLink")],1),t._v(" methods.")]),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"controlling-jar-content-merging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controlling-jar-content-merging","aria-hidden":"true"}},[this._v("#")]),this._v(" Controlling JAR Content Merging")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Adding a Transformer")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transformers"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("Transformer\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transformers"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("TransformerContext\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("tools"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("zip"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("ZipOutputStream\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("api"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("file"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("FileTreeElement\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyTransformer")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Transformer")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("canTransformResource")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FileTreeElement element"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TransformerContext context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasTransformedResource")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("modifyOutputStream")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ZipOutputStream jos"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" preserveFileTimestamps"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyTransformer"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Additionally, a "),s("code",[this._v("Transformer")]),this._v(" can accept a "),s("code",[this._v("Closure")]),this._v(" to configure the provided "),s("code",[this._v("Transformer")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Configuring a Transformer")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transformers"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("Transformer\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transformers"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("TransformerContext\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("tools"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("zip"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("ZipOutputStream\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("api"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("file"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("FileTreeElement\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyTransformer")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Transformer")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" enabled\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("canTransformResource")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FileTreeElement element"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TransformerContext context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasTransformedResource")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("modifyOutputStream")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ZipOutputStream jos"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" preserveFileTimestamps"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyTransformer"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enabled "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("An instantiated instance of a "),s("code",[this._v("Transformer")]),this._v(" can also be provided.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Adding a Transformer Instance")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transformers"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("Transformer\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transformers"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("TransformerContext\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("apache"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("tools"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("zip"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("ZipOutputStream\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("api"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("file"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("FileTreeElement\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyTransformer")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Transformer")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" enabled\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("canTransformResource")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FileTreeElement element"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TransformerContext context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hasTransformedResource")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("modifyOutputStream")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ZipOutputStream jos"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" preserveFileTimestamps"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyTransformer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enabled"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"merging-service-descriptor-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merging-service-descriptor-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Merging Service Descriptor Files")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Java libraries often contain service descriptors files in the "),s("code",[this._v("META-INF/services")]),this._v(" directory of the JAR.\nA service descriptor typically contains a line delimited list of classes that are supported for a particular "),s("em",[this._v("service")]),this._v(".\nAt runtime, this file is read and used to configure library or application behavior.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Merging Service Files")]),t._v("\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mergeServiceFiles")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"configuring-the-location-of-service-descriptor-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-location-of-service-descriptor-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring the Location of Service Descriptor Files")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Merging Service Files in a Specific Directory")]),t._v("\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mergeServiceFiles "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'META-INF/custom'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"excluding-including-specific-service-descriptor-files-from-merging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excluding-including-specific-service-descriptor-files-from-merging","aria-hidden":"true"}},[this._v("#")]),this._v(" Excluding/Including Specific Service Descriptor Files From Merging")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Excluding a Service Descriptor From Merging")]),t._v("\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mergeServiceFiles "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    exclude "),a("span",{attrs:{class:"token string"}},[t._v("'META-INF/services/com.acme.*'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"merging-groovy-extension-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merging-groovy-extension-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Merging Groovy Extension Modules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Merging Groovy Extension Modules")]),t._v("\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mergeGroovyExtensionModules")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"appending-text-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appending-text-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Appending Text Files")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Appending a Property File")]),t._v("\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  append "),a("span",{attrs:{class:"token string"}},[t._v("'test.properties'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"appending-xml-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appending-xml-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Appending XML Files")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Appending a XML File")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("jengelman"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("gradle"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("shadow"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("transformers"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("XmlAppendingTransformer\n\nshadowJar "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XmlAppendingTransformer"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resource "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'properties.xml'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);