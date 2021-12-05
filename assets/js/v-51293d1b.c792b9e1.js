"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[618],{4687:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-51293d1b",path:"/tree/652.%E5%AF%BB%E6%89%BE%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E6%A0%91.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[652] 寻找重复的子树",slug:"_652-寻找重复的子树",children:[{level:3,title:"后序遍历",slug:"后序遍历",children:[]}]}],filePathRelative:"tree/652.寻找重复的子树.md",git:{updatedTime:1638717776e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},8014:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_652-寻找重复的子树" tabindex="-1"><a class="header-anchor" href="#_652-寻找重复的子树" aria-hidden="true">#</a> [652] 寻找重复的子树</h2><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h3><p><strong>你需要知道以下两点</strong>：</p><p><strong>1、以我为根的这棵二叉树（子树）长啥样</strong>？</p><p><strong>2、以其他节点为根的子树都长啥样</strong>？</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> dupSubTrees <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// map的key是序列化后的字符串，value是出现的次数</span>\n    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> <span class="token function">findDuplicateSubtrees</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> dupSubTrees<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token class-name">String</span> SEP <span class="token operator">=</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> NULL <span class="token operator">=</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> NULL<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token class-name">String</span> leftSubTree <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> rightSubTree <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>leftSubTree<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>rightSubTree<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n        <span class="token class-name">String</span> subTree <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> cnt <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>subTree<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 只有历史出现次数为1时，此次才是第二次出现，再下次就是第三次出现了，不重复计算</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>cnt <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            dupSubTrees<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>subTree<span class="token punctuation">,</span> cnt <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> subTree<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>',6),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);