import{_ as e,c as s,a0 as i,o as t}from"./chunks/framework.Db67_R8I.js";const k=JSON.parse('{"title":"Prepare","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tools/prepare.md","filePath":"guide/tools/prepare.md"}'),n={name:"guide/tools/prepare.md"};function p(l,a,r,o,h,d){return t(),s("div",null,a[0]||(a[0]=[i(`<h1 id="prepare" tabindex="-1">Prepare <a class="header-anchor" href="#prepare" aria-label="Permalink to &quot;Prepare&quot;">​</a></h1><p>Generate <code>.env</code> file from <code>.env.*</code> files.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p><a href="https://www.npmjs.com/package/@import-meta-env/prepare" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@import-meta-env/prepare.svg?color=blue" alt="NPM version"></a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @import-meta-env/prepare</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import-meta-env-prepare</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env.example</span></span></code></pre></div><p>By default, when running above command, the CLI will load environment variables from <code>.env.local.defaults</code> and <code>.env.local</code>, merge both, then create an <code>.env</code> file in your project root:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .env</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Generated by &#39;@import-meta-env/prepare&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=world</span></span></code></pre></div>`,9)]))}const g=e(n,[["render",p]]);export{k as __pageData,g as default};
