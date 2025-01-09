import{_ as s,c as a,a0 as t,o as e}from"./chunks/framework.Db67_R8I.js";const g=JSON.parse('{"title":"Migration","description":"","frontmatter":{},"headers":[],"relativePath":"migration.md","filePath":"migration.md"}'),n={name:"migration.md"};function p(h,i,l,k,r,o){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="migration" tabindex="-1">Migration <a class="header-anchor" href="#migration" aria-label="Permalink to &quot;Migration&quot;">​</a></h1><h2 id="migration-from-v0-3-to-v0-4" tabindex="-1">Migration from v0.3.* to v0.4.* <a class="header-anchor" href="#migration-from-v0-3-to-v0-4" aria-label="Permalink to &quot;Migration from v0.3.\\* to v0.4.\\*&quot;">​</a></h2><ol><li><p>In order to support programmatically injecting script, the placeholder is changed:</p><p>x</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;import_meta_env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>✅</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalThis.import_meta_env </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&quot;import_meta_env_placeholder&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li></ol><h2 id="migration-from-v0-2-to-v0-3" tabindex="-1">Migration from v0.2.* to v0.3.* <a class="header-anchor" href="#migration-from-v0-2-to-v0-3" aria-label="Permalink to &quot;Migration from v0.2.\\* to v0.3.\\*&quot;">​</a></h2><ol><li><p>The entire environment variables accessing are dropped, use dedicated environment variables instead:</p><p>x</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HELLO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>✅</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HELLO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li><li><p>The computed environment variables are dropped, use static environment variables instead:</p><p>x</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HELLO&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p>✅</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HELLO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li><li><p>In order to inject environment variables at runtime, you need to add a special script tag to your <code>index.html</code>:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;import_meta_env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ol>`,5)]))}const E=s(n,[["render",p]]);export{g as __pageData,E as default};
