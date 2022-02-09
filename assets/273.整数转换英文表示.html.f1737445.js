import{c as n}from"./app.ed6d2194.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="_273-\u6574\u6570\u8F6C\u6362\u82F1\u6587\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#_273-\u6574\u6570\u8F6C\u6362\u82F1\u6587\u8868\u793A" aria-hidden="true">#</a> 273.\u6574\u6570\u8F6C\u6362\u82F1\u6587\u8868\u793A</h2><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
        <span class="token string">&quot;Zero&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Three&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Four&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Five&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Six&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Seven&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Eight&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Nine&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Ten&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Eleven&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Twelve&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Thirteen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Fourteen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Fifteen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Sixteen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Seventeen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Eighteen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Nineteen&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;Twenty&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Thirty&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Forty&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Fifty&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Sixty&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Seventy&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Eighty&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Ninety&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Hundred&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Thousand&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Million&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Billion&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">numberToWords</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> a<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> val <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">1000</span><span class="token punctuation">;</span>
            num <span class="token operator">/=</span> <span class="token number">1000</span><span class="token punctuation">;</span>

            <span class="token comment">//System.out.println(&quot;num:&quot;+num+&quot;-val:&quot;+val);</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u53D6\u5F53\u524D\u5355\u4F4D</span>
                sb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> c<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// \u5C06\u6570\u503C\u8F6C\u6362\u4E3A\u767E\u8FDB\u5236\u82F1\u6587</span>
                sb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8F6C\u6362\u4E3A\u767E\u8FDB\u5236\u82F1\u6587</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> num<span class="token operator">/</span><span class="token number">100</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> a<span class="token punctuation">[</span>num<span class="token operator">/</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        num <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                str <span class="token operator">+=</span> a<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                str <span class="token operator">+=</span> b<span class="token punctuation">[</span>num<span class="token operator">/</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num<span class="token operator">%</span><span class="token number">10</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> a<span class="token punctuation">[</span>num<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>\u200B</p>`,4);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
