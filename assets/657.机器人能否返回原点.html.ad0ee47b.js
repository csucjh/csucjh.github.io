import{c as n}from"./app.a357479f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_657-\u673A\u5668\u4EBA\u80FD\u5426\u8FD4\u56DE\u539F\u70B9" tabindex="-1"><a class="header-anchor" href="#_657-\u673A\u5668\u4EBA\u80FD\u5426\u8FD4\u56DE\u539F\u70B9" aria-hidden="true">#</a> 657.\u673A\u5668\u4EBA\u80FD\u5426\u8FD4\u56DE\u539F\u70B9</h2><h3 id="\u8BA1\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570" aria-hidden="true">#</a> \u8BA1\u6570</h3><p>\u53EA\u9700\u8981\u5728\u6C34\u5E73\u65B9\u5411\u5DE6=\u53F3\uFF0C\u5782\u76F4\u65B9\u5411\u4E0A=\u4E0B\uFF0C\u5C31\u4F1A\u56DE\u5230\u6700\u521D\u7684\u8D77\u70B9</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">judgeCircle</span><span class="token punctuation">(</span><span class="token class-name">String</span> moves<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53EA\u8981\u6EE1\u8DB3\u4E0A=\u4E0B\uFF0C\u5DE6=\u53F3</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> charArr <span class="token operator">=</span> moves<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> left_cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> up_cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> charArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token char">&#39;U&#39;</span> <span class="token operator">==</span> charArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                up_cnt<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token char">&#39;D&#39;</span> <span class="token operator">==</span> charArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                up_cnt<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token char">&#39;L&#39;</span> <span class="token operator">==</span> charArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                left_cnt<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token char">&#39;R&#39;</span> <span class="token operator">==</span> charArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                left_cnt<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> left_cnt <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> up_cnt <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,4);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
