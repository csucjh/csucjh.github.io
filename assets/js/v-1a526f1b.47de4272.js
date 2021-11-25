"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[415],{3092:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-1a526f1b",path:"/%E9%93%BE%E8%A1%A8/92.%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8II.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[92] 反转链表 II",slug:"_92-反转链表-ii",children:[]}],filePathRelative:"链表/92.反转链表II.md",git:{updatedTime:1637856966e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},7169:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="_92-反转链表-ii" tabindex="-1"><a class="header-anchor" href="#_92-反转链表-ii" aria-hidden="true">#</a> [92] 反转链表 II</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// base case</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">reverseN</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 前进到反转的起点触发 base case</span>\n        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 后驱节点</span>\n    <span class="token class-name">ListNode</span> successor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> \n\n    <span class="token comment">// 反转以 head 为起点的 n 个节点，返回新的头结点</span>\n    <span class="token keyword">private</span> <span class="token class-name">ListNode</span> <span class="token function">reverseN</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 记录第 n + 1 个节点</span>\n            successor <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n            <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 以 head.next 为起点，需要反转前 n - 1 个节点</span>\n        <span class="token class-name">ListNode</span> last <span class="token operator">=</span> <span class="token function">reverseN</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>\n        <span class="token comment">// 让反转之后的 head 节点和后面的节点连起来</span>\n        head<span class="token punctuation">.</span>next <span class="token operator">=</span> successor<span class="token punctuation">;</span>\n        \n        <span class="token keyword">return</span> last<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 3、退出条件——当left为1，不再是当前递归函数的含义</span>\n            <span class="token comment">// 演变成了反转链表的前TopN节点</span>\n            <span class="token keyword">return</span> <span class="token function">reverseTopN</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 1、明确递归函数含义</span>\n        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 2、将head指向反转后的newHead</span>\n        head<span class="token punctuation">.</span>next <span class="token operator">=</span> newHead<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseTopN</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 6、明确退出条件——当n为1，不需要反转了，head直接返回</span>\n            <span class="token keyword">return</span> head<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 4、新递归公式含义——反转前n个节点并返回新的头结点</span>\n        <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverseTopN</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 5、把当前head挂到反转链上，然后将head指向第n+1个节点(这样反转链才完整)</span>\n        <span class="token class-name">ListNode</span> successor <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>\n        head<span class="token punctuation">.</span>next <span class="token operator">=</span> successor<span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>',3),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);