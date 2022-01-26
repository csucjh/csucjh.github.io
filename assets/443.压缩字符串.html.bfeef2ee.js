import{c as n}from"./app.ceb38300.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_443-\u538B\u7F29\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_443-\u538B\u7F29\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 443.\u538B\u7F29\u5B57\u7B26\u4E32</h2><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><p>1\u3001\u6211\u4EEC\u5B9A\u4E49<code>[start, i]</code>\u95ED\u533A\u95F4\u8868\u793A\u6BCF\u7EC4\u5B57\u7B26\u7684\u5F00\u59CB\u548C\u7ED3\u5C3E</p><p>2\u3001\u5B9A\u4E49\u538B\u7F29\u540E\u7D22\u5F15\u4F4D\u7F6E<code>cps_idx</code></p><p>3\u3001\u6BCF\u6B21\u627E\u5230\u4E00\u7EC4\u5B57\u7B26\u540E\uFF0C\u8BA1\u7B97\u5176\u957F\u5EA6<code>cnt = i - start + 1</code>\uFF0C\u5F53<code>cnt&gt;1</code>\u65F6\u9700\u8981\u653E\u5165\u957F\u5EA6\u5B57\u7B26\uFF0C\u53EF\u4EE5\u6709\u4E24\u79CD\u65B9\u5F0F</p><ul><li>\u4E00\u79CD\u662F\u5C06<code>cnt</code>\u8F6C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u904D\u5386</li><li>\u53E6\u4E00\u79CD\u662F\u901A\u8FC7\u5BF910\u505A\u9664\u6CD5\u548C\u4F59\u6570\u8FD0\u7B97\u5148\u653E\u5230\u6570\u7EC4\u4E2D\u7136\u540E\u5BF9\u5F53\u524D\u6BB5\u505A\u53CD\u8F6C</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compress</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8F93\u5165\u6570\u7EC4\u7684\u957F\u5EA6</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token comment">// \u5B9A\u4E49\u538B\u7F29\u540E\u7D22\u5F15\u4F4D\u7F6E</span>
        <span class="token keyword">int</span> cps_idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 

        <span class="token comment">// \u6BCF\u7EC4\u5B57\u7B26\u7684\u5F00\u59CB\u4F4D\u7F6E</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// [start, i]\u95ED\u533A\u95F4\u8868\u793A\u6BCF\u7EC4\u5B57\u7B26\u7684\u5F00\u59CB\u548C\u7ED3\u5C3E</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> chars<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u6BCF\u7EC4\u6570\u91CF</span>
                <span class="token keyword">int</span> cnt <span class="token operator">=</span> i <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
               
                <span class="token comment">// \u653E\u5165\u5B57\u7B26</span>
                chars<span class="token punctuation">[</span>cps_idx<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">//System.out.println(&quot;char:&quot; + chars[i] + &quot;-cnt:&quot; + cnt);</span>

                <span class="token comment">// \u653E\u5165\u5B57\u7B26\u6570\u91CF</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cnt <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">String</span> cnt_str <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> cnt_str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        chars<span class="token punctuation">[</span>cps_idx<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> cnt_str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// \u91CD\u7F6E\u8D77\u59CB\u4F4D\u7F6E</span>
                start <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//System.out.println(Arrays.toString(chars));</span>

        <span class="token keyword">return</span> cps_idx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,7);function t(e,c){return p}var r=s(a,[["render",t]]);export{r as default};
