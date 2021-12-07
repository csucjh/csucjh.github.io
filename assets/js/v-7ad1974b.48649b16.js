"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[234],{8090:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-7ad1974b",path:"/a-tree/226.%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[226] 翻转二叉树",slug:"_226-翻转二叉树",children:[]}],filePathRelative:"a-tree/226.翻转二叉树.md",git:{updatedTime:1638890444e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},5273:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h2 id="_226-翻转二叉树" tabindex="-1"><a class="header-anchor" href="#_226-翻转二叉树" aria-hidden="true">#</a> [226] 翻转二叉树</h2><p>实际上就是交换每个节点的左右子节点</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">invertTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 1、其实就是将每个节点的左右子树互换(递归公式含义)</span>\n        <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 2、后续遍历代码位置</span>\n        root<span class="token punctuation">.</span>left <span class="token operator">=</span> right<span class="token punctuation">;</span>\n        root<span class="token punctuation">.</span>right <span class="token operator">=</span> left<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',3),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);