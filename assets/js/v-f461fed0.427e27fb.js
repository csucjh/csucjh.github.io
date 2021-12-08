"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[128],{7230:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-f461fed0",path:"/a-tree/106.%E4%BB%8E%E4%B8%AD%E5%BA%8F%E4%B8%8E%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[106] 从中序与后序遍历序列构造二叉树",slug:"_106-从中序与后序遍历序列构造二叉树",children:[]}],filePathRelative:"a-tree/106.从中序与后序遍历序列构造二叉树.md",git:{updatedTime:163897497e4,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},7990:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h2 id="_106-从中序与后序遍历序列构造二叉树" tabindex="-1"><a class="header-anchor" href="#_106-从中序与后序遍历序列构造二叉树" aria-hidden="true">#</a> [106] 从中序与后序遍历序列构造二叉树</h2><p>本题思路就是确定根节点应该做什么？</p><p>1、根节点要做的就是把想办法把自己构造出来</p><p>2、将构造好的左右子树挂到对应的指针</p><p><strong>核心点</strong>：</p><p>最核心的地方就是理解后序序遍历数组的最后一个是根节点，然后根据根节点找到中序遍历根节点的索引，这个索引之前的部分就是当前根节点左子树的长度，就能确认后序遍历数组中左子树元素在末尾索引位置</p><p><img src="https://user-images.githubusercontent.com/12841424/144740975-8b8efa2d-ce80-47ce-b962-97d052991cab.png" alt="image"></p><p>参考代码：注意[start,end]都是采用的闭区间</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> postorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">build</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                     postorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inStart<span class="token punctuation">,</span> <span class="token keyword">int</span> inEnd<span class="token punctuation">,</span>\n                           <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> postorder<span class="token punctuation">,</span> <span class="token keyword">int</span> postStart<span class="token punctuation">,</span> <span class="token keyword">int</span> postEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>inStart <span class="token operator">&gt;</span> inEnd <span class="token operator">||</span> postStart <span class="token operator">&gt;</span> postEnd<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 1、找到根节点（后续遍历的最后一个）</span>\n        <span class="token keyword">int</span> rootVal <span class="token operator">=</span> postorder<span class="token punctuation">[</span>postEnd<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 2、定位根节点在中序数组中的位置</span>\n        <span class="token keyword">int</span> rootIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> inStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> inEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> rootVal<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                rootIdx <span class="token operator">=</span> i<span class="token punctuation">;</span>\n                <span class="token keyword">break</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 3、构造根节点</span>\n        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 4、构造根节点的左右子树</span>\n        <span class="token keyword">int</span> leftSize <span class="token operator">=</span> rootIdx <span class="token operator">-</span> inStart<span class="token punctuation">;</span>\n        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">build</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> inStart<span class="token punctuation">,</span> rootIdx <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>\n                          postorder<span class="token punctuation">,</span> postStart<span class="token punctuation">,</span> postStart <span class="token operator">+</span> leftSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">build</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> rootIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> inEnd<span class="token punctuation">,</span>\n                          postorder<span class="token punctuation">,</span> postStart <span class="token operator">+</span> leftSize<span class="token punctuation">,</span> postEnd <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> root<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>',9),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);