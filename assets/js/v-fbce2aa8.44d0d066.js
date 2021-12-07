"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[763],{7365:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-fbce2aa8",path:"/a-tree/230.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%ACK%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[230] 二叉搜索树中第K小的元素",slug:"_230-二叉搜索树中第k小的元素",children:[{level:3,title:"中序遍历+序列化",slug:"中序遍历-序列化",children:[]},{level:3,title:"中序遍历+计数器",slug:"中序遍历-计数器",children:[]}]}],filePathRelative:"a-tree/230.二叉搜索树中第K小的元素.md",git:{updatedTime:1638890444e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},1344:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_230-二叉搜索树中第k小的元素" tabindex="-1"><a class="header-anchor" href="#_230-二叉搜索树中第k小的元素" aria-hidden="true">#</a> [230] 二叉搜索树中第K小的元素</h2><h3 id="中序遍历-序列化" tabindex="-1"><a class="header-anchor" href="#中序遍历-序列化" aria-hidden="true">#</a> 中序遍历+序列化</h3><p>1、中序遍历升序序列化成一个字符串</p><p>2、将字符串分割成数组后取值第[k-1]位置的值</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token class-name">String</span> SEP <span class="token operator">=</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> NULL <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 中序遍历[左-&gt;根-&gt;右]对于BST来说就是升序</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">kthSmallest</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ascArr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//System.out.println(Arrays.toString(ascArr));</span>\n        <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>ascArr<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> NULL<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">String</span> leftStr <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>NULL<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>leftStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>leftStr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        \n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">String</span> rightStr <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>NULL<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>rightStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>SEP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>rightStr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="中序遍历-计数器" tabindex="-1"><a class="header-anchor" href="#中序遍历-计数器" aria-hidden="true">#</a> 中序遍历+计数器</h3><p>中序遍历过程中使用计数器来计数count，当count等于k时就是所找元素</p><p>和第一种序列化后取值相比，不用遍历整棵树，性能更优</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 中序遍历[左-&gt;根-&gt;右]对于BST来说就是升序</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">kthSmallest</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\n        <span class="token comment">// 判断是否遍历到第k个元素</span>\n        count<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            result <span class="token operator">=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>',9),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);